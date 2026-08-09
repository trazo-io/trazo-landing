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
  title: "Trazo - Organic Recordkeeping & Renewal Readiness | One Entry, Two Outputs",
  description:
    "Your Organic System Plan, activity records, and renewal readiness in one place - plus the page your buyer can see. Built for specialty crop farms, $249 per farm per year.",
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
  openGraph: {
    title: "Trazo - Organic Recordkeeping & Renewal Readiness",
    description:
      "Log each activity once. It fills your Organic System Plan, your audit dossier, and the page your buyer can see.",
    url: "https://www.trazo.io",
    siteName: "Trazo",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Trazo agricultural transparency platform dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trazo - Organic Recordkeeping & Renewal Readiness",
    description:
      "One entry, two outputs: certifier-ready records and a buyer-facing page. For specialty crop farms.",
    images: ["/images/og-image.jpg"],
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
    "Agricultural transparency platform that documents farming practices and shares them with consumers via QR codes. Uses EPA and USDA emission factors for direct operational emission calculations.",
  foundingDate: "2025",
  founder: {
    "@type": "Person",
    name: "Oscar Munoz",
    jobTitle: "Founder & CEO",
  },
  areaServed: "US",
  industry: "Agricultural Technology",
  knowsAbout: [
    "Agricultural Transparency",
    "Farm Traceability",
    "Direct Operational Emissions",
    "EPA Emission Factors",
    "USDA Crop Data",
    "QR Code Traceability",
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
    "Agricultural transparency platform for specialty crop farms. Document farming practices, share with consumers via QR codes.",
  publisher: { "@type": "Organization", name: "Trazo" },
  inLanguage: ["en", "es"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
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
