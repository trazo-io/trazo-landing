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
  green600: "#388E3C",
  green400: "#66BB6A",
  yellow: "#FBBF24",
  orange: "#FB923C",
  red: "#EF4444",
  gray: "#9CA3AF",
  textPrimary: "#1F2937",
  textSecondary: "#6B7280",
  white: "#FFFFFF",
} as const;

interface ApiResponse {
  product?: { name?: string };
  product_info?: { name?: string };
  farmer?: { name?: string };
  quick_view?: { transparency_score?: { percentage?: number } };
  blockchain_verification?: { verified?: boolean };
}

function getScoreColor(score: number): string {
  if (score >= 80) return COLOR.green500;
  if (score >= 60) return COLOR.green400;
  if (score >= 40) return COLOR.yellow;
  if (score >= 20) return COLOR.orange;
  return COLOR.red;
}

function getScoreGrade(score: number): string {
  if (score >= 90) return "A+";
  if (score >= 80) return "A";
  if (score >= 70) return "B";
  if (score >= 60) return "C";
  if (score >= 40) return "D";
  return "F";
}

// Tier label, no emojis (satori emoji rendering is finicky and adds 100KB+).
function getTierLabel(score: number): string {
  if (score >= 95) return "Open Book Farm";
  if (score >= 85) return "Farm Storyteller";
  if (score >= 70) return "Working Farm";
  if (score >= 50) return "Growing Story";
  return "Farm Beginnings";
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

  const rawScore = data.quick_view?.transparency_score?.percentage;
  const score =
    typeof rawScore === "number" && Number.isFinite(rawScore)
      ? Math.max(0, Math.min(100, Math.round(rawScore)))
      : null;

  // Anti-gaming: scores under 30 omit the number, grade, and tier badge.
  // (Per .claude/rules/carbon-methodology.md — fewer than 3 events caps at 30.)
  const showScore = score !== null && score >= 30;
  const blockchainRecorded = Boolean(data.blockchain_verification?.verified);

  const scoreColor = showScore && score !== null ? getScoreColor(score) : COLOR.gray;
  const grade = showScore && score !== null ? getScoreGrade(score) : null;
  const tier = showScore && score !== null ? getTierLabel(score) : null;

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
          background: `linear-gradient(135deg, ${scoreColor}26 0%, ${scoreColor}0D 60%, ${COLOR.white} 100%)`,
          padding: "60px 80px",
          fontFamily: "Roboto",
        }}
      >
        {/* Top row: logo + optional blockchain pill */}
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
          {blockchainRecorded ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "10px 22px",
                borderRadius: 9999,
                background: COLOR.white,
                color: COLOR.green600,
                fontSize: 20,
                fontWeight: 700,
                border: `2px solid ${COLOR.green500}`,
              }}
            >
              Blockchain-recorded
            </div>
          ) : (
            <div style={{ display: "flex" }} />
          )}
        </div>

        {/* Main content: left text block + right score circle */}
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
              maxWidth: showScore ? 660 : 1040,
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
            {tier ? (
              <div
                style={{
                  display: "flex",
                  marginTop: 36,
                  fontSize: 32,
                  fontWeight: 700,
                  color: scoreColor,
                }}
              >
                {tier}
              </div>
            ) : null}
          </div>

          {showScore && score !== null ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginLeft: 40,
                position: "relative",
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: 240,
                  height: 240,
                  borderRadius: 9999,
                  background: COLOR.white,
                  border: `10px solid ${scoreColor}`,
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  boxShadow: `0 0 40px ${scoreColor}40`,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    fontSize: 88,
                    fontWeight: 700,
                    color: scoreColor,
                    lineHeight: 1,
                  }}
                >
                  {`${score}`}
                </div>
                <div
                  style={{
                    display: "flex",
                    fontSize: 22,
                    color: COLOR.textPrimary,
                    marginTop: 6,
                  }}
                >
                  Transparency
                </div>
              </div>
              {grade ? (
                <div
                  style={{
                    display: "flex",
                    position: "absolute",
                    top: 4,
                    right: -8,
                    padding: "8px 18px",
                    borderRadius: 9999,
                    background: scoreColor,
                    color: COLOR.white,
                    fontSize: 26,
                    fontWeight: 700,
                  }}
                >
                  {grade}
                </div>
              ) : null}
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
          consumer.trazo.io  ·  Agricultural Transparency
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
