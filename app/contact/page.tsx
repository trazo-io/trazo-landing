// Server component so the route can export `metadata`. The page body needs client
// state (the contact form's submit status), so it lives in `contact-client.tsx`.
// Previously the whole route was "use client", which meant it could export no metadata
// at all and silently inherited the homepage's title, description and canonical.
import type { Metadata } from "next";
import { ContactPageContent } from "./contact-client";

export const metadata: Metadata = {
  title: "Contact Trazo — Organic Recordkeeping Support",
  description:
    "Questions about organic recordkeeping, renewal packets or moving off COG Pro? Email info@trazo.io and we reply with a walkthrough and a sample farm.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Talk to Trazo",
    description:
      "Questions about organic recordkeeping, renewal packets or moving off COG Pro? We reply with a walkthrough and a sample farm.",
    url: "./",
    // Next merges metadata SHALLOWLY: a page-level `openGraph` REPLACES the
    // root object rather than extending it, so omitting this dropped og:image
    // entirely and the page shared as a card with no picture at all.
    images: ["/images/og-renewal-2026-10.jpg"],
  },
};

export default function ContactPage() {
  return <ContactPageContent />;
}
