// NOT a client component. It carries no state, no effects and no handlers — the only
// interactive thing on the page is the shadcn Accordion, which is "use client" itself.
// The stray directive here made it impossible to export `metadata`, so the highest-intent
// page on the site inherited the homepage's title, description and canonical.
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Minus, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PriceBandCompare } from "@/components/price-band-compare";
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
    images: ["/images/og-image.jpg"],
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
        description:
          "Free forever: 1 farm, unlimited parcels, 1 production/year, 2 GB storage",
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
        name: "Enterprise",
        priceCurrency: "USD",
        description:
          "Unlimited farms, parcels and productions, dedicated onboarding",
      },
    ],
  },
};

const plans = [
  // Two tiers plus Enterprise, priced ANNUALLY (2026-08-07).
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
      "1 production per year",
      "Event logging with AI templates",
      "QR code and buyer page",
      "2 GB storage",
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
      "Unlimited productions per year",
      "Voice logging from the field",
      "Organic System Plan (7 CFR 205.201) with Common OSP § 11 records",
      "The four required OSP attachment workbooks, filled from your records",
      "Certifier link — your certifier reviews online, with your permission",
      "California PUR export (DPR-PML-017C), monthly",
      "Free migration from COG Pro or spreadsheets",
      "25 GB storage",
    ],
  },
  {
    name: "Enterprise",
    description: "Multiple farms or entities",
    monthly: null,
    yearly: null,
    priceLabel: "Talk to us",
    priceNote: "Unlimited farms",
    highlight: false,
    cta: "Contact Sales",
    ctaLink: "mailto:info@trazo.io",
    includesLabel: "Everything in Compliance, plus",
    features: [
      "Unlimited farms and parcels",
      "Dedicated onboarding",
      "Priority support",
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
    values: ["Free", "$249/yr per farm", "Talk to us"],
  },
  {
    label: "Farms / Parcels per farm",
    values: ["1 / Unlimited", "1 / Unlimited", "Unlimited / Unlimited"],
  },
  { label: "Productions / year", values: ["1", "Unlimited", "Unlimited"] },
  {
    label: "QR scans / month",
    values: ["1,000", "Unlimited", "Unlimited"],
  },
  {
    label: "Storage",
    values: ["2 GB", "25 GB", "Unlimited"],
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
  { label: "Voice recording", values: [false, true, true] },
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
  {
    label: "Dedicated onboarding",
    values: [false, false, true],
  },
  {
    label: "Support",
    values: ["72hr email", "24hr priority", "4hr dedicated"],
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
    a: "Free permanently. It does not expire and never asks for a card. It covers 1 farm with unlimited parcels or blocks and 1 production per year \u2014 enough to keep a real season of records and produce your certifier packet. Compliance adds unlimited productions, the OSP records and the exports; upgrade whenever you outgrow it, not when a clock runs out.",
  },
  {
    q: "Can I switch plans?",
    a: "Yes, in either direction, and your records are never held hostage. Downgrading to Starter keeps every event, photo and document you have logged \u2014 you keep reading and exporting all of it; the Starter limits only apply to what you create next.",
  },
  {
    q: 'What counts as a "production"?',
    a: "One crop cycle from planting to harvest on a single parcel. Three parcels of avocados is three productions, and a replanted seasonal crop starts a new one each cycle. Compliance has no production limit, so on a paid plan this only affects how your records are organised, not what you are allowed to log.",
  },
  {
    q: "What if I exceed my QR scan limit?",
    a: "Your QR codes keep working \u2014 a buyer scanning a case in a warehouse always reaches your page. Only the analytics counting pauses, and only on Starter, until the month resets. Compliance has no scan limit.",
  },
  {
    q: "Discounts for cooperatives or large groups?",
    a: "Yes. For large organizations, our Enterprise plan offers unlimited farms, parcels, and productions with dedicated support. Contact us at info@trazo.io for custom needs.",
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
                        ${plan.yearly}
                      </span>
                      <span className="text-sm text-muted-foreground"> /yr</span>
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
                  {plans.map((p) => p.name).map((h) => (
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

        {/* Second farm */}
        {/* Honest price comparison (plan #67) — public list prices, checked 2026-08-08 */}
        <section className="mx-auto mt-24 max-w-4xl px-6">
          <h2 className="text-center text-2xl font-bold text-foreground md:text-3xl">
            How Trazo pricing compares
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
            Quick Organics prices by your gross organic revenue, so the honest
            comparison depends on your farm. Pick your band and see both numbers.
          </p>
          <PriceBandCompare />
        </section>

        <section className="mx-auto mt-24 max-w-3xl px-6 text-center">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            Farming more than one operation?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Each certified operation files its own Organic System Plan, so Trazo
            prices per farm. If you run several — or a co-op filing on behalf
            of members — tell us how it is structured and we will quote it.
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
                Moving from another recordkeeping tool? Send us your export and we
                will set it up for you, free.
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
