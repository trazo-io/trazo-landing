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
  // trazo.ag). Keep title <= 60 chars and description <= 160.
  title: "Organic Recordkeeping Software for US Farms | Trazo",
  description:
    "Log the season once. Trazo drafts your Organic System Plan, renewal packet and audit exports. Free Starter plan; $249 per farm per year, flat.",
  keywords: [
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
    title: "Trazo - Organic Recordkeeping & Renewal Readiness",
    description:
      "Log each activity once. It fills your Organic System Plan, your audit dossier, and the page your buyer can see.",
    // No hardcoded `url`. It was emitting og:url=https://www.trazo.io on EVERY
    // page, so a certifier pasting /cog-pro-migration into a newsletter got the
    // homepage card and told the platform that page was the homepage.
    url: "./",
    siteName: "Trazo",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Trazo farm dashboard: an organic walnut operation's season, with its renewal deadlines and record checks",
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
  name: "Trazo",
  url: "https://www.trazo.io",
  logo: "https://www.trazo.io/images/logo-green.png",
  description:
    "Organic recordkeeping software for US farms. Trazo drafts the Organic System Plan, renewal packet and NOP audit exports from a farm's own activity log, and builds a buyer-facing QR page from the same records.",
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
  sameAs: [
    "https://linkedin.com/company/trazo-io",
    "https://instagram.com/trazo.io",
  ],
};

const webSiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Trazo",
  url: "https://www.trazo.io",
  description:
    "Organic recordkeeping and renewal readiness for US specialty crop farms. One entry becomes both your certifier's records and your buyer's page.",
  publisher: { "@type": "Organization", name: "Trazo" },
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
