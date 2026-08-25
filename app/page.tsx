import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { RenewalSeason } from "@/components/renewal-season";
import { DualOutput } from "@/components/dual-output";
import { PlanReview } from "@/components/plan-review";
import { ProductTour } from "@/components/product-tour";
import { OrganicFeatures } from "@/components/organic-features";
import { HowItWorks } from "@/components/how-it-works";
import { StatsBar } from "@/components/stats-bar";
import { CtaBanner } from "@/components/cta-banner";
import { FaqSection } from "@/components/faq-section";
import { BlogSection } from "@/components/blog-section";
import { Footer } from "@/components/footer";

const softwareAppJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Trazo",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: "https://www.trazo.io",
  // Leads on recordkeeping and renewal, matching the visible page. It previously
  // opened "Agricultural transparency platform … QR codes for buyer-facing
  // transparency pages", which is the pre-pivot order: the certifier is output 1.
  // ⛔ Do not restore "Trazo drafts your Organic System Plan" here. Structured data, so it is
  // fed straight to Google, and it is false twice over: 14 of 215 OSP questions declare a
  // `Prefill`, and a prefill is a SUGGESTION the operator must accept, never a written answer
  // (7 CFR 205.201(a) makes the producer the author). Full note: app/layout.tsx `description`.
  description:
    "Organic recordkeeping software for US farms. Log the season once and Trazo assembles your renewal packet and NOP audit exports (7 CFR 205.103), backs your Organic System Plan answers with the records behind them, lists what changed since you last wrote them, and builds a buyer-facing QR page from the same log.",
  offers: {
    "@type": "AggregateOffer",
    lowPrice: "0",
    highPrice: "1200",
    priceCurrency: "USD",
    offerCount: 3,
  },
  featureList: [
    "Guided Organic System Plan modules mapped to 7 CFR 205.201(a)",
    "Per-parcel application records (location, land history, buffers, field map)",
    "33 US crop templates with USDA-sourced crop timing data",
    "Activity log with voice and template shortcuts, English and Spanish",
    "NOP audit-ready PDF export (7 CFR 205.103)",
    "Renewal packet: annual update, change notices, module PDFs, parcel applications, and Common OSP workbooks",
    "Plan review: what changed in your records since your plan's answers were written",
    "Direct operational emission calculations using EPA/USDA emission factors",
    "QR code generation for buyer-facing product pages",
    "Certification cross-reference via the USDA Organic Integrity Database",
  ],
  // Must track the asset the hero actually renders (hero.tsx). v1 was kept alive on
  // the deploy — 1.38MB — by this string alone.
  screenshot: "https://www.trazo.io/images/app-screenshot-full-v2.png",
  creator: {
    "@type": "Organization",
    name: "Trazo",
    url: "https://www.trazo.io",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppJsonLd) }}
      />
      <Navbar />
      {/*
        ELEVEN SECTIONS, ORDERED FOR A VISITOR WHO ARRIVED WITH A DEADLINE.
        Measured before: 15 sections, 16,987px desktop / 25,197px mobile — about
        thirty phone screens, with the deadline calendar 5.5 screens down.

        Promise (Hero) → deadline (RenewalSeason) → the differentiator (DualOutput)
        → the thing a form-builder cannot do (PlanReview) → the software that does it (ProductTour) → depth (OrganicFeatures) → the
        three steps (HowItWorks) → price (StatsBar) → close → objections → reading.
        Proof follows the promise; it does not precede it.

        REMOVED, and why — each was a duplicate, not merely long:
        · VideoSection    the April demo published an "EPA Verified" badge, a
                          "TRANSPARENCY SCORE 86/100", metric units, a third demo farm,
                          and logged Osmocote Plus 15-9-12 — a synthetic fertiliser
                          prohibited under § 205.105 — as its example application.
                          Re-shoot before restoring. Component and 12MB asset retained.
        · PlatformFeatures  four claims, four duplicates (DOCUMENT→ProductTour,
                          VERIFY→OrganicFeatures verbatim, CONNECT→DualOutput,
                          GROW→scan analytics we cannot prove with zero users), under a
                          pre-pivot "build consumer trust" heading, illustrated with a
                          boom sprayer and a moldboard plough on an ORGANIC page.
        · ProductShowcase  its second phone was the same buyer card as DualOutput's
                          Output 2. The unique view moved into DualOutput.
        · ProblemSection  card 2 is the "buyers can't see your work" hook growers
                          rejected in discovery; card 1 is RenewalSeason's milestone 4
                          without a date; card 3 is self-cited competitor commentary.
        · FieldFeatures   duplicated FAQ Q3/Q8, the hero and /for-farmers, and
                          re-asserted the free-export claim the hero comment forbids.
                          Its one strong line (the crew logs in Spanish, you read the
                          packet in English) moved to StatsBar.
      */}
      <main>
        <Hero />
        <RenewalSeason />
        <DualOutput />
        <PlanReview />
        <ProductTour />
        <OrganicFeatures />
        <HowItWorks />
        <StatsBar />
        <CtaBanner />
        <FaqSection />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
}
