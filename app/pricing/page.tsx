// NOT a client component. It carries no state, no effects and no handlers — the only
// interactive thing on the page is the shadcn Accordion, which is "use client" itself.
// The stray directive here made it impossible to export `metadata`, so the highest-intent
// page on the site inherited the homepage's title, description and canonical.
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Minus, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  // Under the ~60-char SERP limit, leading with the term a farmer comparing tools
  // would type, and with the number that beats a revenue-banded competitor.
  title: "Organic Recordkeeping Pricing — $249/yr | Trazo",
  description:
    "Free Starter plan, no card and no expiry. Compliance is $249 per farm per year, flat — not banded by your revenue like other organic software.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Pricing — $249 per farm, per year, flat",
    description:
      "Free Starter plan, no card and no expiry. Compliance is $249 per farm per year — not banded by your revenue.",
    url: "./",
    // Next merges metadata SHALLOWLY: a page-level `openGraph` REPLACES the
    // root object rather than extending it, so omitting this dropped og:image
    // entirely and the page shared as a card with no picture at all.
    images: ["/images/og-renewal-2026-10.jpg"],
  },
};

const pricingJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Trazo Pricing — Organic Recordkeeping Software",
  description:
    "Simple, transparent pricing for specialty crop farms. The Starter plan is free permanently \u2014 no card, no expiry. Compliance is $249 per farm per year.",
  url: "https://www.trazo.io/pricing",
  mainEntity: {
    "@type": "SoftwareApplication",
    name: "Trazo",
    applicationCategory: "BusinessApplication",
    offers: [
      {
        "@type": "Offer",
        name: "Starter",
        price: "0",
        priceCurrency: "USD",
        // 2026-08-17: was "1 production/year, 2 GB storage". Migration 0014 moved Starter's
        // wall from the INPUT to the OUTPUT — unlimited productions, 10 GB — and this block
        // is what Google indexes, so the stale version advertised a weaker free tier than
        // the one that ships, against a competitor offering twelve free months.
        description:
          "Free forever: 1 farm, unlimited parcels, unlimited productions, 10 GB storage",
      },
      {
        "@type": "Offer",
        name: "Compliance",
        price: "249",
        priceCurrency: "USD",
        billingDuration: "P1Y",
        description:
          "1 farm, unlimited parcels and productions, OSP records, certifier link, CA PUR export",
      },
      {
        "@type": "Offer",
        name: "Operation",
        price: "1200",
        priceCurrency: "USD",
        billingDuration: "P1Y",
        description:
          "Every farm in one operation: unlimited farms and certifiers, OSP records, certifier link, CA PUR export per site, 100 GB storage",
      },
    ],
  },
};

const plans = [
  // Three tiers, all priced ANNUALLY (2026-08-07; Operation added 2026-08-17).
  //
  // The previous $69-299/MONTH ladder was 5-8x the category: COG Pro charges $99/$155/$179 per
  // YEAR (and stops service 2026-12-31), Quick Organics $150/yr. A COG Pro refugee paying $155
  // was never going to sign for $828.
  //
  // Priced per FARM, not per parcel. A parcel is a block, so parcel count prices farm geometry
  // rather than value — and charging more for structuring records properly is the same perverse
  // incentive Trazo rejected when it refused carbon-first scoring.
  {
    name: "Starter",
    description: "Document one season, free",
    monthly: 0,
    yearly: 0,
    priceLabel: "Free",
    priceNote: "Free forever",
    highlight: false,
    cta: "Start free",
    ctaLink: "https://app.trazo.io/auth/signup",
    includesLabel: "Includes",
    features: [
      "1 farm, unlimited parcels/blocks",
      // Unlimited, not "1 production per year", and 10 GB, not 2. Migration 0014 moved
      // Starter's wall from how much it can LOG to what it can PRODUCE: log a whole season
      // free, and buy Compliance for the documents you hand to somebody else. The old copy
      // sold a demo; the tier that ships is a working free product.
      "Unlimited productions per year",
      "Event logging with AI templates",
      "Voice logging from the field",
      "QR code and buyer page",
      "10 GB storage",
    ],
  },
  {
    name: "Compliance",
    description: "Everything one certified farm needs for renewal season",
    monthly: null,
    yearly: 249,
    priceLabel: null,
    priceNote: "per farm, per year",
    highlight: true,
    cta: "Start free",
    ctaLink: "https://app.trazo.io/auth/signup",
    includesLabel: "Everything in Starter, plus",
    features: [
      // "Unlimited productions per year" and "Voice logging from the field" were the first
      // two lines here. Both moved INTO Starter with migration 0014, so listing them under
      // "Everything in Starter, plus" claimed as an upgrade two things the free tier already
      // has. What is left is the honest difference, and it is entirely OUTPUTS.
      "Organic System Plan (7 CFR 205.201) with Common OSP § 11 records",
      "The four required OSP attachment workbooks, filled from your records",
      "Certifier link — your certifier reviews online, with your permission",
      "California PUR export (DPR-PML-017C), monthly",
      "Free migration from COG Pro or spreadsheets",
      "25 GB storage",
    ],
  },
  // Operation replaced "Enterprise" here on 2026-08-17.
  //
  // Enterprise was a "talk to us" column whose only distinct promise was UNLIMITED FARMS —
  // which is now exactly what Operation is, at a published price. Two columns saying the same
  // thing, one of them refusing to name a number, is not a tier; it is a gap where the ceiling
  // should be. The conversation Enterprise was actually for — packers, marketers, certifier
  // programs, i.e. buyers who are not farms — is a contact line under the table, not a plan.
  {
    name: "Operation",
    description: "Every farm in the business, one renewal",
    monthly: null,
    yearly: 1200,
    priceLabel: null,
    priceNote: "per operation, per year",
    highlight: false,
    cta: "Start free",
    ctaLink: "https://app.trazo.io/auth/signup",
    includesLabel: "Everything in Compliance, plus",
    features: [
      "Unlimited farms and certifiers",
      "The renewal packet and audit export for every farm",
      "California PUR export per site",
      "100 GB storage",
    ],
  },
];

// One cell per plan, in `plans` order. Typed as a fixed-length tuple on purpose: when the tiers
// went from five to three, four rows silently kept five values and rendered extra <td>s past the
// header count. A tuple turns that into a compile error instead of a broken table.
type ComparisonCell = boolean | string;
type ComparisonRow = {
  label: string;
  values: [ComparisonCell, ComparisonCell, ComparisonCell];
};

const comparisonFeatures: ComparisonRow[] = [
  {
    label: "Price",
    values: ["Free", "$249/yr per farm", "$1,200/yr per operation"],
  },
  {
    label: "Farms / Parcels per farm",
    values: ["1 / Unlimited", "1 / Unlimited", "Unlimited / Unlimited"],
  },
  {
    label: "Productions / year",
    values: ["Unlimited", "Unlimited", "Unlimited"],
  },
  // The "QR scans / month: 1,000" row is gone, with its FAQ.
  //
  // That limit is enforced NOWHERE: `UsageTrackingMiddleware` fires only on a `/api/scan/`
  // path that does not exist, requires an authenticated user while consumer QR scans are
  // anonymous by design, and calls `logger.info` rather than blocking even then. Publishing
  // a ceiling nobody can hit is a promise to throttle a farm's buyers — the opposite of what
  // the buyer page is for — in exchange for a differentiator that is not real.
  {
    label: "Storage",
    values: ["10 GB", "25 GB", "100 GB"],
  },
  { label: "AI event templates", values: [true, true, true] },
  // Was "Farm records score (your dashboard)". The 0-100 producer score is retired to a
  // backend-only KPI with no UI surface, so this row sold a feature nobody can open.
  // What actually ships is the record-completeness check shown in the hero screenshot.
  { label: "Record completeness checks", values: [true, true, true] },
  { label: "QR code and buyer page", values: [true, true, true] },
  {
    label: "Carbon calculations (EPA/USDA-sourced)",
    values: [true, true, true],
  },
  {
    label: "Organic certificate check (USDA Organic Integrity Database)",
    values: [true, true, true],
  },
  { label: "Photo documentation", values: [true, true, true] },
  // Voice is free on every tier since 0014: the measured barriers to farm software adoption
  // are time and labour, not price, so gating the fastest gloves-on input path suppressed
  // exactly the logging that produces the records that produce the upgrade.
  { label: "Voice recording", values: [true, true, true] },
  {
    label: "Organic System Plan (7 CFR 205.201) + Common OSP § 11",
    values: [false, true, true],
  },
  { label: "OSP attachment workbooks", values: [false, true, true] },
  { label: "Certifier review link", values: [false, true, true] },
  {
    label: "California PUR export (DPR-PML-017C)",
    values: [false, true, true],
  },
  { label: "Free migration from COG Pro", values: [false, true, true] },
  // "Dedicated onboarding" was true for Enterprise alone, so with that column gone the row
  // would have read false / false / false — a line item that tells the reader nothing.
  {
    label: "Support",
    // "4hr dedicated" left with Enterprise. These two match the `support_response_time` and
    // `priority_support` flags the support system actually reads (`support/models.py`).
    values: ["72hr email", "24hr priority", "24hr priority"],
  },
];

// Built from `pricingFaqs` below rather than hand-written, so the schema can never
// drift from the questions actually rendered on the page — Google penalises FAQ
// markup that does not match visible content.
function faqPageJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

const pricingFaqs = [
  {
    q: "Is the Starter plan really free, or is it a trial?",
    // 2026-08-17: this said Starter was "enough to keep a real season of records AND PRODUCE
    // YOUR CERTIFIER PACKET". It is not — `compliance_exports` is False on Starter, and the
    // packet is the single thing $249 buys. The page was describing the paywall backwards, and
    // contradicting /contact, which had it right. A grower who believed it would discover the
    // gate at renewal with a deadline in hand: the exact ambush the app's own pricing card was
    // rewritten to prevent.
    a: "Free permanently. It does not expire and never asks for a card. It covers 1 farm with unlimited parcels or blocks, unlimited productions and 10 GB of storage \u2014 enough to log a whole season, every block, with photos and voice. What it does not do is produce the documents you hand to somebody else: the OSP renewal packet and workbooks, the audit exports and the CA PUR export are the Compliance plan. Upgrade when you need the paperwork, not when a clock runs out.",
  },
  {
    q: "Can I switch plans?",
    a: "Yes, in either direction, and your records are never held hostage. Downgrading to Starter keeps every event, photo and document you have logged \u2014 you keep reading and exporting all of it; the Starter limits only apply to what you create next.",
  },
  {
    q: 'What counts as a "production"?',
    a: "One crop cycle from planting to harvest on a single parcel. Three parcels of avocados is three productions, and a replanted seasonal crop starts a new one each cycle. No plan limits how many you run \u2014 Starter included \u2014 so this only affects how your records are organised, not what you are allowed to log.",
  },
  {
    q: "I run several farms. Which plan?",
    // Answered with the arithmetic rather than a sales invitation. The crossover is a fact a
    // grower can check on this page, and hiding it behind "contact us" is how a multi-farm
    // operation ends up paying more than the tier built for them.
    a: "Up to seven farms, Compliance plus an Extra Farm at $149/yr each is cheaper. From eight, Operation at $1,200/yr is \u2014 and it covers every farm and every certifier with no counting. Whichever you pick, the second farm never costs more than the first.",
  },
  {
    q: "I am a packer, marketer or certifier program, not a farm.",
    a: "Then the plans above are the wrong shape and we should talk. Email info@trazo.io with how many growers you work with and what records you need from them.",
  },
  {
    q: "How do I pay for a paid plan?",
    a: "By invoice, arranged directly with us at info@trazo.io \u2014 there is no card form at signup. Signing up puts you on the free Starter plan; nothing charges you automatically, and no plan converts to paid on its own.",
  },
  {
    q: "Can I get my data out?",
    // Do NOT restore "your events, photos and documents export at any time, on any
    // plan, including the free one." `subscriptions/gating.py` is explicit that Trazo
    // has no plain data export at all yet, and every certifier artifact sits behind
    // Compliance. Same retraction as `components/hero.tsx:72-85`.
    a: "Getting in is free: if you are leaving COG Pro we import your CSV exports at no charge, and Starter never expires. Being straight about the other direction — a one-click export of your whole account is not built yet. The certifier documents (OSP renewal packet and workbooks, audit exports, CA PUR export) are part of the Compliance plan. If you want your records out, email info@trazo.io and we will produce them for you.",
  },
  {
    q: "Is my data secure?",
    a: "Yes. Trazo uses industry-standard encryption, secure authentication with JWT tokens, and role-based access controls. Your farm data is stored securely on AWS infrastructure.",
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingJsonLd) }}
      />
      {/* The 8 pricing questions are rendered in the accordion below but carried no
          schema, so the highest-intent page on the site was invisible to FAQ rich
          results. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqPageJsonLd(pricingFaqs)),
        }}
      />
      <Navbar />
      <main className="pt-32 pb-20">
        {/* Header */}
        <section className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Simple, Transparent Pricing
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Free to start, priced per farm per year. No card, no lock-in.
          </p>

          {/* Trust badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Check size={16} className="text-primary" />
              Free plan, no expiry
            </span>
            <span className="flex items-center gap-2">
              <Check size={16} className="text-primary" />
              No credit card required
            </span>
            <span className="flex items-center gap-2">
              <Check size={16} className="text-primary" />
              Export your records anytime
            </span>
          </div>
        </section>

        {/* Plan Cards */}
        <section className="mx-auto mt-14 max-w-7xl px-6">
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-2xl border p-6 transition-all ${
                  plan.highlight
                    ? "border-primary bg-card shadow-lg shadow-primary/10 ring-1 ring-primary"
                    : "border-border bg-card hover:border-primary/30 hover:shadow-md"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                    Most Popular
                  </div>
                )}
                <div>
                  <h3 className="text-lg font-bold text-foreground">
                    {plan.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                </div>

                <div className="mt-6">
                  {plan.priceLabel ? (
                    <div>
                      <span className="text-4xl font-bold text-foreground">
                        {plan.priceLabel}
                      </span>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {plan.priceNote}
                      </p>
                    </div>
                  ) : (
                    <div>
                      <span className="text-4xl font-bold text-foreground">
                        {/* Grouped, not `${plan.yearly}`. That printed "$1200" for Operation
                            while the comparison table, the FAQ and the one-pager all say
                            "$1,200" — and an unseparated four-figure price reads as a typo on
                            the one element of the card people actually stop at. */}
                        ${plan.yearly?.toLocaleString("en-US")}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {" "}
                        /yr
                      </span>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {plan.priceNote}
                      </p>
                    </div>
                  )}
                </div>

                <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {plan.includesLabel}
                </p>
                <ul className="mt-4 flex flex-1 flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-foreground"
                    >
                      <Check
                        size={16}
                        className="mt-0.5 shrink-0 text-primary"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  className={`mt-8 w-full gap-2 ${
                    plan.highlight
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : plan.cta === "Contact Sales"
                        ? "border-border bg-card text-foreground hover:bg-secondary"
                        : "border-primary/30 bg-primary/5 text-primary hover:bg-primary/10"
                  }`}
                  variant={plan.highlight ? "default" : "outline"}
                  asChild
                >
                  <a href={plan.ctaLink}>
                    {plan.cta}
                    <ArrowRight size={16} />
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison Table */}
        <section className="mx-auto mt-24 max-w-7xl px-6">
          <h2 className="text-center text-2xl font-bold text-foreground md:text-3xl">
            Compare All Plans
          </h2>
          <div className="mt-10 overflow-x-auto rounded-2xl border border-border">
            <table className="w-full min-w-[800px] text-sm">
              <thead>
                <tr className="border-b border-border bg-secondary/50">
                  <th className="px-6 py-4 text-left font-semibold text-foreground">
                    Feature
                  </th>
                  {plans
                    .map((p) => p.name)
                    .map((h) => (
                      <th
                        key={h}
                        className="px-4 py-4 text-center font-semibold text-foreground"
                      >
                        {h}
                      </th>
                    ))}
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row, i) => (
                  <tr
                    key={row.label}
                    className={`border-b border-border/60 ${
                      i % 2 === 0 ? "bg-card" : "bg-secondary/20"
                    }`}
                  >
                    <td className="px-6 py-3.5 font-medium text-foreground">
                      {row.label}
                    </td>
                    {row.values.map((val, j) => (
                      <td
                        key={j}
                        className="px-4 py-3.5 text-center text-muted-foreground"
                      >
                        {val === true ? (
                          <Check size={16} className="mx-auto text-primary" />
                        ) : val === false ? (
                          <Minus size={16} className="mx-auto text-border" />
                        ) : (
                          val
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* The Quick Organics price-band comparison was REMOVED on 2026-08-17.
            It put QO's published $150–$4,250 revenue bands against our $249, which is
            accurate — and beside the point for most of the people reading it. QO's own FAQ
            states that NFC and CCOF customers do not pay QO at all; the certifier covers it.
            CCOF certifies roughly 56% of California's certified operations and about 66% of
            the state's organic crops, so for two in three readers in the home market the real
            comparison was $249 against $0, and the table quietly argued the wrong case.
            Competing on price against a competitor that is free to most of your market is a
            losing frame regardless of how the numbers are drawn. The page now states what
            Trazo costs and what it produces; the comparison that matters is with what QO does
            NOT produce, and that belongs in the product copy, not a price table. */}

        <section className="mx-auto mt-24 max-w-3xl px-6 text-center">
          {/* Was "Farming more than one operation? …we will quote it." Operation answers
              that on the table above now, with a number. What is left for a conversation is
              the reader who is not a farm at all — the packer, marketer, food hub or
              certifier program that needs records FROM growers rather than for itself. */}
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            Buying for growers, not for a farm?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Packers, marketers, food hubs and certifier programs need the same
            records from many growers at once, and the plans above are the wrong
            shape for that. Tell us how many growers you work with and what you
            need from them.
          </p>
          <Button className="mt-8 gap-2" variant="outline" asChild>
            <a href="mailto:info@trazo.io">
              Talk to us
              <ArrowRight size={16} />
            </a>
          </Button>
        </section>

        {/* Pricing FAQ */}
        <section className="mx-auto mt-24 max-w-3xl px-6">
          <h2 className="text-center text-2xl font-bold text-foreground md:text-3xl">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="mt-10">
            {pricingFaqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border-border"
              >
                <AccordionTrigger className="py-5 text-left text-base font-semibold text-foreground hover:text-primary hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Final CTA */}
        <section className="mx-auto mt-24 max-w-7xl px-6">
          <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-20 text-center">
            <div
              className="pointer-events-none absolute -top-20 -left-20 h-64 w-64 rounded-full bg-primary-foreground/5"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-primary-foreground/5"
              aria-hidden="true"
            />
            <div className="relative">
              <h2 className="text-balance text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
                Start proving your practices today
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
                Join farmers who are building buyer trust with documented
                practices. Free Starter plan, no credit card required.
              </p>
              <p className="mx-auto mt-3 max-w-2xl text-sm text-primary-foreground/60">
                Moving from another recordkeeping tool? Send us your export and
                we will set it up for you, free.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button
                  size="lg"
                  className="gap-2 bg-primary-foreground px-10 text-base text-primary hover:bg-primary-foreground/90"
                  asChild
                >
                  <a href="https://app.trazo.io/auth/signup">
                    Start free
                    <ArrowRight size={18} />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                  asChild
                >
                  <a href="mailto:info@trazo.io">
                    Have questions? Contact us directly
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
