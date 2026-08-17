import { ImageResponse } from "next/og";

export const runtime = "edge";

const UUID_V4_REGEX =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

const BANNED_FRAGMENTS = [
  "verified",
  "certified",
  "carbon neutral",
  "premium",
  "scope 1",
  "scope 2",
  "scope 3",
  "co2e",
];

const COLOR = {
  green500: "#4CAF50",
  // green.600 #388E3C is 4.12:1 on white — a BOUNDARY colour (borders, rings),
  // not a text colour. The project rule is categorical: if it renders glyphs, it
  // is green.700. Kept here only for non-text use.
  green600: "#388E3C",
  green700: "#2E7D32",
  textPrimary: "#1F2937",
  textSecondary: "#6B7280",
  white: "#FFFFFF",
} as const;

interface ApiResponse {
  product?: { name?: string };
  product_info?: { name?: string };
  farmer?: { name?: string };
  // Claim-safety (2026-06): the self-graded transparency SCORE is gated out of
  // the anonymous payload and is a farmer-dashboard KPI, not a consumer claim.
  // The share image leads with the FACTUAL documented-practices count instead.
  standard_view?: { transparency_details?: { actual_events?: number } };
  timeline?: unknown[];
}

function clamp(text: string, max: number): string {
  if (text.length <= max) return text;
  return `${text.slice(0, max - 1).trimEnd()}…`;
}

function isCompliant(text: string): boolean {
  const lower = text.toLowerCase();
  return !BANNED_FRAGMENTS.some((b) => lower.includes(b));
}

function pickProductName(api: ApiResponse): string {
  return clamp(
    api.product?.name || api.product_info?.name || "Farm Product",
    40
  );
}

function pickFarmName(api: ApiResponse): string {
  return clamp(api.farmer?.name || "Farm", 35);
}

async function loadFont(url: string): Promise<ArrayBuffer> {
  const res = await fetch(url, { next: { revalidate: 86400 } });
  if (!res.ok) throw new Error(`Font load failed: ${url}`);
  return res.arrayBuffer();
}

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ uuid: string }> }
): Promise<Response> {
  const { uuid } = await params;

  if (!UUID_V4_REGEX.test(uuid)) {
    return new Response("Invalid UUID", { status: 400 });
  }

  let data: ApiResponse;
  try {
    const apiRes = await fetch(
      `https://api.trazo.io/api/transparency/${uuid}/`,
      {
        headers: {
          Accept: "application/json",
          "User-Agent": "trazo-og-vercel/0.1",
        },
        next: { revalidate: 3600 },
      }
    );
    if (!apiRes.ok) {
      return new Response("Production not found", { status: 404 });
    }
    data = (await apiRes.json()) as ApiResponse;
  } catch {
    return new Response("API unavailable", { status: 502 });
  }

  const productName = pickProductName(data);
  const farmName = pickFarmName(data);

  // Compliance: never render banned fragments. Fail closed = 422.
  if (!isCompliant(productName) || !isCompliant(farmName)) {
    return new Response("Compliance violation", { status: 422 });
  }

  // Factual documented-practices count, the share-image highlight. A raw count
  // can't be gamed the way a 0-100 score can, so it carries no anti-gaming floor;
  // it's simply hidden when there's nothing documented yet.
  const rawCount =
    data.standard_view?.transparency_details?.actual_events ??
    (Array.isArray(data.timeline) ? data.timeline.length : undefined);
  const practicesCount =
    typeof rawCount === "number" && Number.isFinite(rawCount) && rawCount > 0
      ? Math.round(rawCount)
      : null;

  const showCount = practicesCount !== null;

  let robotoBold: ArrayBuffer;
  let robotoRegular: ArrayBuffer;
  try {
    [robotoBold, robotoRegular] = await Promise.all([
      loadFont(
        "https://cdn.jsdelivr.net/fontsource/fonts/roboto@latest/latin-700-normal.woff"
      ),
      loadFont(
        "https://cdn.jsdelivr.net/fontsource/fonts/roboto@latest/latin-400-normal.woff"
      ),
    ]);
  } catch {
    return new Response("Font load failed", { status: 502 });
  }

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          background: `linear-gradient(135deg, ${COLOR.green500}26 0%, ${COLOR.green500}0D 60%, ${COLOR.white} 100%)`,
          padding: "60px 80px",
          fontFamily: "Roboto",
        }}
      >
        {/* Top row: logo */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <img
            src="https://www.trazo.io/images/logo-green.png"
            width={180}
            height={64}
            alt=""
          />
          <div style={{ display: "flex" }} />
        </div>

        {/* Main content: left text block + right practices-count circle */}
        <div
          style={{
            display: "flex",
            flex: 1,
            marginTop: 24,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              maxWidth: showCount ? 660 : 1040,
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 84,
                fontWeight: 700,
                color: COLOR.textPrimary,
                lineHeight: 1.05,
              }}
            >
              {productName}
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 36,
                color: COLOR.textSecondary,
                marginTop: 16,
              }}
            >
              {`by ${farmName}`}
            </div>
          </div>

          {showCount && practicesCount !== null ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginLeft: 40,
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: 240,
                  height: 240,
                  borderRadius: 9999,
                  background: COLOR.white,
                  border: `10px solid ${COLOR.green500}`,
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  boxShadow: `0 0 40px ${COLOR.green500}40`,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    fontSize: 96,
                    fontWeight: 700,
                    color: COLOR.green700,
                    lineHeight: 1,
                  }}
                >
                  {`${practicesCount}`}
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    fontSize: 20,
                    color: COLOR.textPrimary,
                    marginTop: 8,
                  }}
                >
                  <div style={{ display: "flex" }}>practices</div>
                  <div style={{ display: "flex" }}>documented</div>
                </div>
              </div>
            </div>
          ) : null}
        </div>

        {/* Bottom strip */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: 20,
            color: COLOR.textSecondary,
            marginTop: 24,
          }}
        >
          consumer.trazo.io · Documented growing practices
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: "Roboto", data: robotoRegular, weight: 400, style: "normal" },
        { name: "Roboto", data: robotoBold, weight: 700, style: "normal" },
      ],
      headers: {
        "Cache-Control":
          "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800",
      },
    }
  );
}
