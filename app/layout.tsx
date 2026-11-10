import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import {
  CookieConsent,
  ConditionalAnalytics,
} from "@/components/cookie-consent";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  // Kept under Google's ~60-char SERP truncation. The old title was 74 and lost
  // "One Entry, Two Outputs" to truncation anyway, so the tagline paid rent it never
  // earned. Leads with the term a grower would type; the brand goes last because
  // nobody searches it ("trazo" is also a common Spanish word, and a competitor owns
  // trazo.ag). Keep title <= 60 chars and description <= 160: past ~160 Google drops the
  // description and quotes page text instead, which is what the homepage was getting.
  // 2026-10-08: "Recordkeeping" -> "Certification". Page 1 for "organic certification
  // software" (US) was QO, COG Pro and five small vendors whose titles carry that exact
  // phrase; Trazo never said it, so Google had nothing to match. NEVER: imply Trazo
  // certifies anyone ("Certified by Trazo" is UNSAFE in compliance.md). It is software
  // FOR the certification process: the records and the renewal packet.
  title: "Organic Certification Software for US Farms | Trazo",
  // ⛔ NEVER write that Trazo "drafts"/"fills"/"writes" the Organic System Plan. This string,
  // the og: description below, and both JSON-LD blocks all said it. MEASURED: 14 of 215 OSP
  // questions declare a `Prefill` at all, and even those return a SUGGESTION that is never
  // written — `certifications/services/osp_prefill.py` is explicit ("evidence → SUGGESTION,
  // never an answer") because 7 CFR 205.201(a) makes the PRODUCER the author of the plan.
  // The generated artifacts are real and may be claimed by name: the list is the docstring of
  // `subscriptions/gating.py`. The OSP itself is something Trazo brings evidence TO.
  description:
    "Organic certification software for US farms. Log the season once; Trazo prepares your renewal records and audit exports. Free Starter, $249/farm/yr.",
  keywords: [
    "organic certification software",
    "COG Pro alternative",
    "organic system plan",
    "OSP software",
    "organic certification renewal",
    "NOP recordkeeping",
    "organic audit",
    "specialty crop farms",
    "food traceability",
    "QR codes",
  ],
  metadataBase: new URL("https://www.trazo.io"),
  // "./" is resolved against metadataBase PER ROUTE, so every page gets its own
  // canonical instead of all 18 pointing at the homepage. A literal URL here would
  // canonicalise the whole site to "/". Pages may still override.
  alternates: { canonical: "./" },
  openGraph: {
    title: "Trazo - Organic Recordkeeping for Renewal Season",
    // See the OSP-authoring note on `description` above. "It becomes" is the honest verb: the
    // packet, the dossier and the buyer page ARE generated from the entry; the plan is not.
    description:
      "Log each activity once. It becomes the records in your renewal packet, your audit dossier, and the page your buyer can see.",
    // No hardcoded `url`. It was emitting og:url=https://www.trazo.io on EVERY
    // page, so a certifier pasting /cog-pro-migration into a newsletter got the
    // homepage card and told the platform that page was the homepage.
    url: "./",
    siteName: "Trazo",
    type: "website",
    locale: "en_US",
    images: [
      {
        // ⚠️ BUMP THIS FILENAME ON EVERY RE-CUT — never overwrite in place. LinkedIn, WhatsApp
        // and Slack cache an OG image by URL and hold it for weeks, so replacing the bytes
        // behind a stable path leaves the OLD card live everywhere it has already been shared.
        // The previous asset (`og-image.jpg`, a Mar 6 screenshot of the pre-pivot landing) is
        // why this matters: it kept serving "Earn Premium Prices", "Try free for 14 days",
        // "Plans from $69/month" and "verify it on blockchain" — four claims that are variously
        // retired, never-existed, or on the UNSAFE list in .claude/rules/compliance.md — as the
        // preview card for all 18 routes, months after the words on the pages were corrected.
        url: "/images/og-renewal-2026-10.jpg",
        width: 1200,
        height: 630,
        // Describes the CROP that actually shipped (the hero block), not the dashboard. The
        // full-page screenshot was cropped to 1.905:1 because a whole page rendered at
        // LinkedIn's ~552px card width puts the sub-headline at ~4px — unreadable.
        alt: "Trazo's homepage headline: walk into renewal season with your records already assembled, above a note that the Starter plan is free permanently",
      },
    ],
  },
  twitter: {
    // Card TYPE only. Setting title/description/images here pinned the homepage's
    // words onto every page's X card, the same shallow-merge trap that og: had —
    // and a page would have had to redeclare all four fields to escape it. With only
    // `card` set, X falls back to the og: tags, which are now correct per route.
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  themeColor: "#fafdf8",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  // One node id for the company, referenced by WebSite.publisher below and by the homepage's
  // SoftwareApplication.creator, so the three blocks describe ONE entity. Without it Google sees
  // three unrelated "Trazo" objects, and "trazo" is shared with trazo.ag (a farm management
  // platform that holds #1 for the bare word), trazo.co, trazo.pro and a Spanish dictionary entry.
  "@id": "https://www.trazo.io/#organization",
  name: "Trazo",
  // The REGISTERED entity behind the brand, machine-readable. `name` is the trademark and is not a
  // legal person; `legalName` and `taxID` are the schema.org properties for the company that
  // actually contracts with users, and automated checks read structured data before prose.
  // NOTE: no `address` on purpose. The SAS is registered at a residential address, an email is an
  // accepted contact element, and the RUT is what ties this site to the registration document.
  legalName: "Oscar Mu\u00f1oz SAS",
  taxID: "219072920010",
  url: "https://www.trazo.io",
  // Square on purpose. Google crops a structured-data logo to a square for result thumbnails, so
  // the 689x230 wordmark rendered as "tra". The wordmark stays in the navbar and footer.
  logo: "https://www.trazo.io/images/logo-mark-512.png",
  // Structured data, so this is what Google is handed directly — the OSP-authoring claim was
  // worse here than in the prose. See the note on `metadata.description` above.
  description:
    "Organic recordkeeping software for US farms. From a farm's own activity log, Trazo prepares the records section of the renewal packet, a draft change summary for the annual update, Common OSP workbooks and NOP audit exports, shows that log next to the farm's Organic System Plan answers, lists what changed since they were written, and builds a buyer-facing QR page from the same records. The grower reviews and signs.",
  foundingDate: "2025",
  founder: {
    "@type": "Person",
    name: "Oscar Munoz",
  },
  areaServed: "US",
  industry: "Agricultural Technology",
  // Leads on what the product is now. This used to open with "Agricultural
  // Transparency", "Direct Operational Emissions" and "EPA Emission Factors" —
  // no OSP, no renewal, no organic certification anywhere in the list.
  knowsAbout: [
    "Organic Certification",
    "Organic System Plan",
    "NOP Recordkeeping",
    "7 CFR Part 205",
    "Farm Traceability",
    "USDA Crop Data",
    "Specialty Crop Farming",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "info@trazo.io",
    contactType: "customer support",
    availableLanguage: ["English", "Spanish"],
  },
  // NEVER add a profile Trazo does not control or that misstates the product. The CB Insights
  // page (cbinsights.com/company/trazo) is UNCLAIMED and still says Trazo "generates transparency
  // scores", a retired concept; sameAs would endorse it. Add it only after it is claimed and fixed.
  sameAs: [
    "https://linkedin.com/company/trazo-io",
    "https://instagram.com/trazo.io",
  ],
};

const webSiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Trazo",
  // Google showed the site name as "trazo.io" while every signal said "Trazo": it falls back to
  // the domain when a name is ambiguous, and "trazo" is a common Spanish word several companies
  // use. `alternateName` is the documented fallback it may pick instead of the bare domain.
  alternateName: ["Trazo Organic Recordkeeping", "Trazo Organic"],
  url: "https://www.trazo.io",
  description:
    "Organic recordkeeping for US specialty crop farms, built for renewal season. One entry becomes both your certifier's records and your buyer's page.",
  "@id": "https://www.trazo.io/#website",
  publisher: { "@id": "https://www.trazo.io/#organization" },
  // "en" only until Spanish PAGES exist. The app is bilingual and support is
  // bilingual (see contactPoint.availableLanguage above), but this field describes
  // the CONTENT of this site, and every page of it is English.
  inLanguage: "en",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning: the inline script below adds `js` to this element's
    // classList before React hydrates, so client and server className necessarily
    // differ. Scoped to <html> only — it does not suppress anything inside the tree.
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Marks that scripting is available, synchronously and before first paint,
            so the scroll-reveal CSS in globals.css may hide elements it is going to
            animate in. Without this class nothing hides — content is visible whether
            or not the bundle ever arrives. Keep it inline and keep it first. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js')`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <CookieConsent />
        <ConditionalAnalytics />
      </body>
    </html>
  );
}
