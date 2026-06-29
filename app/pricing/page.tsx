"use client";

import { useState } from "react";
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

const pricingJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Trazo Pricing | Agricultural Transparency Platform",
  description:
    "Simple, transparent pricing for specialty crop farms. Free tier available. Plans from $69/month with 14-day free trial.",
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
          "Free forever: 1 farm, 1 parcel, 1 production, 2 GB storage",
      },
      {
        "@type": "Offer",
        name: "Basic",
        price: "69",
        priceCurrency: "USD",
        billingDuration: "P1M",
        description:
          "1 farm, 2 parcels, 3 productions/year, 10 GB, voice recording",
      },
      {
        "@type": "Offer",
        name: "Standard",
        price: "119",
        priceCurrency: "USD",
        billingDuration: "P1M",
        description:
          "2 farms, 2 parcels, 4 productions/year, 25 GB, 24hr support",
      },
      {
        "@type": "Offer",
        name: "Corporate",
        price: "149",
        priceCurrency: "USD",
        billingDuration: "P1M",
        description:
          "4 farms, 4 parcels, 6 productions/year, 50 GB, priority support",
      },
      {
        "@type": "Offer",
        name: "Enterprise",
        price: "299",
        priceCurrency: "USD",
        billingDuration: "P1M",
        description:
          "Unlimited farms, parcels, productions, storage, dedicated support",
      },
    ],
  },
};

const plans = [
  {
    name: "Starter",
    description: "Try Trazo risk-free",
    monthly: 0,
    yearly: 0,
    priceLabel: "Free",
    priceNote: "Free forever",
    highlight: false,
    cta: "Start Free Trial",
    ctaLink: "https://app.trazo.io/auth/signup",
    includesLabel: "Includes",
    features: [
      "Carbon calculations (EPA/USDA)",
      "Transparency scoring & QR codes",
      "AI-powered event templates",
      "2 GB storage",
      "1,000 QR scans/month",
      "1 farm, 1 parcel, 1 production",
    ],
  },
  {
    name: "Basic",
    description: "Best for small family farms",
    monthly: 69,
    yearly: 690,
    priceLabel: null,
    priceNote: null,
    highlight: false,
    cta: "Start Free Trial",
    ctaLink: "https://app.trazo.io/auth/signup",
    includesLabel: "Everything in Starter, plus",
    features: [
      "48-hour email support",
      "Voice recording & photo docs",
      "10 GB storage",
      "5,000 QR scans/month",
      "Up to 3 active productions/year",
      "1 farm, 2 parcels per farm",
    ],
  },
  {
    name: "Standard",
    description: "Best for growing farms",
    monthly: 119,
    yearly: 1190,
    priceLabel: null,
    priceNote: null,
    highlight: true,
    cta: "Start Free Trial",
    ctaLink: "https://app.trazo.io/auth/signup",
    includesLabel: "Everything in Basic, plus",
    features: [
      "24-hour email support",
      "25 GB storage",
      "10,000 QR scans/month",
      "Up to 4 active productions/year",
      "2 farms, 2 parcels per farm",
    ],
  },
  {
    name: "Corporate",
    description: "Best for multi-plot operations",
    monthly: 149,
    yearly: 1490,
    priceLabel: null,
    priceNote: null,
    highlight: false,
    cta: "Start Free Trial",
    ctaLink: "https://app.trazo.io/auth/signup",
    includesLabel: "Everything in Standard, plus",
    features: [
      "12-hour priority support",
      "50 GB storage",
      "20,000 QR scans/month",
      "Up to 6 active productions/year",
      "4 farms, 4 parcels per farm",
    ],
  },
  {
    name: "Enterprise",
    description: "For cooperatives & brands",
    monthly: 299,
    yearly: 2990,
    priceLabel: null,
    priceNote: null,
    highlight: false,
    cta: "Contact Sales",
    ctaLink: "mailto:info@trazo.io",
    includesLabel: "Everything in Corporate, plus",
    features: [
      "Onboarding & training support",
      "4-hour dedicated support",
      "Dedicated account manager",
      "Unlimited QR scans & storage",
      "Unlimited farms, parcels & productions",
    ],
  },
];

const comparisonFeatures = [
  { label: "Monthly price", values: ["Free", "$69", "$119", "$149", "$299"] },
  {
    label: "Annual price",
    values: ["Free", "$690/yr", "$1,190/yr", "$1,490/yr", "$2,990/yr"],
  },
  {
    label: "Farms / Parcels per farm",
    values: ["1 / 1", "1 / 2", "2 / 2", "4 / 4", "Unlimited"],
  },
  { label: "Productions / year", values: ["1", "3", "4", "6", "Unlimited"] },
  {
    label: "QR scans / month",
    values: ["1,000", "5,000", "10,000", "20,000", "Unlimited"],
  },
  {
    label: "Storage",
    values: ["2 GB", "10 GB", "25 GB", "50 GB", "Unlimited"],
  },
  { label: "AI event templates", values: [true, true, true, true, true] },
  { label: "Transparency score", values: [true, true, true, true, true] },
  { label: "QR code generation", values: [true, true, true, true, true] },
  {
    label: "Carbon calculations (EPA/USDA)",
    values: [true, true, true, true, true],
  },
  {
    label: "Certification verification (USDA Organic)",
    values: [true, true, true, true, true],
  },
  { label: "Photo documentation", values: [true, true, true, true, true] },
  { label: "Voice recording", values: [false, true, true, true, true] },
  {
    label: "Dedicated account manager",
    values: [false, false, false, false, true],
  },
  {
    label: "Support",
    values: [
      "N/A",
      "48hr Email",
      "24hr Email",
      "12hr Priority",
      "4hr Dedicated",
    ],
  },
];

const addons = [
  { name: "Extra Farm", price: "$30", period: "/month" },
  { name: "Extra Parcel", price: "$25", period: "/month" },
  { name: "Extra Production", price: "$20", period: "/month" },
  { name: "Extra Storage", price: "$10", period: "/year" },
];

const pricingFaqs = [
  {
    q: "Is there a free trial?",
    a: "Yes. Every new account starts with a 14-day free trial on the Starter plan. No credit card required. You get full access to core features including transparency scoring, QR codes, and carbon calculations. Upgrade anytime from your dashboard.",
  },
  {
    q: "Can I switch plans?",
    a: "Absolutely. Upgrade or downgrade anytime from your dashboard. When you upgrade, you'll get immediate access to new features with prorated billing. When you downgrade, the change takes effect at your next billing cycle.",
  },
  {
    q: 'What counts as a "production"?',
    a: "A production represents one crop cycle from planting to harvest on a single parcel. For example, if you grow avocados on 3 parcels, that's 3 productions. Seasonal crops that you replant count as new productions each cycle.",
  },
  {
    q: "What if I exceed my QR scan limit?",
    a: "Your QR codes will continue to work. Consumers will always be able to view your transparency pages. Analytics tracking pauses until your scan count resets at the start of your next billing period.",
  },
  {
    q: "Discounts for cooperatives or large groups?",
    a: "Yes. For large organizations, our Enterprise plan offers unlimited farms, parcels, and productions with dedicated support. Contact us at info@trazo.io for custom needs.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit cards (Visa, Mastercard, American Express) through our secure payment partner, Stripe. For Enterprise plans, we also offer invoice-based billing.",
  },
  {
    q: "Can I access my data?",
    a: "Your data is always yours. You can access all your farm data, event records, and documentation through the Trazo platform at any time, regardless of your subscription status.",
  },
  {
    q: "Is my data secure?",
    a: "Yes. Trazo uses industry-standard encryption, secure authentication with JWT tokens, and role-based access controls. Your farm data is stored securely on AWS infrastructure.",
  },
];

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingJsonLd) }}
      />
      <Navbar />
      <main className="pt-24 pb-20">
        {/* Header */}
        <section className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Simple, Transparent Pricing
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Start free. Scale as you grow. Cancel anytime.
          </p>

          {/* Trust badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Check size={16} className="text-primary" />
              14-Day Free Trial
            </span>
            <span className="flex items-center gap-2">
              <Check size={16} className="text-primary" />
              No Credit Card Required
            </span>
            <span className="flex items-center gap-2">
              <Check size={16} className="text-primary" />
              Cancel Anytime
            </span>
          </div>

          {/* Billing Toggle */}
          <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-border bg-card p-1">
            <button
              onClick={() => setIsYearly(false)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                !isYearly
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-all ${
                isYearly
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Yearly
              <span className="rounded-full bg-accent px-2 py-0.5 text-xs font-semibold text-accent-foreground">
                2 Months Free
              </span>
            </button>
          </div>
        </section>

        {/* Plan Cards */}
        <section className="mx-auto mt-14 max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
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
                        $
                        {isYearly ? Math.round(plan.yearly / 12) : plan.monthly}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {" "}
                        /mo
                      </span>
                      {isYearly && (
                        <p className="mt-1 text-sm text-muted-foreground">
                          ${plan.yearly}/yr billed annually
                        </p>
                      )}
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
                  {[
                    "Starter",
                    "Basic",
                    "Standard",
                    "Corporate",
                    "Enterprise",
                  ].map((h) => (
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

        {/* Add-ons */}
        <section className="mx-auto mt-24 max-w-7xl px-6 text-center">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            Need More? Add What You Need
          </h2>
          <p className="mt-2 text-muted-foreground">
            Available on any plan. Add or remove anytime.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {addons.map((addon) => (
              <div
                key={addon.name}
                className="rounded-xl border border-border bg-card p-6 text-center transition-all hover:border-primary/30 hover:shadow-sm"
              >
                <p className="text-3xl font-bold text-foreground">
                  {addon.price}
                </p>
                <p className="text-sm text-muted-foreground">{addon.period}</p>
                <p className="mt-3 text-sm font-semibold text-foreground">
                  {addon.name}
                </p>
              </div>
            ))}
          </div>
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
                Join farmers who are building consumer trust through verified
                transparency. 14-day free trial, no credit card required.
              </p>
              <p className="mx-auto mt-3 max-w-2xl text-sm text-primary-foreground/60">
                Early access &mdash; farms that join now get founding member
                pricing locked in, direct input on the product roadmap, and
                priority support as we scale.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button
                  size="lg"
                  className="gap-2 bg-primary-foreground px-10 text-base text-primary hover:bg-primary-foreground/90"
                  asChild
                >
                  <a href="https://app.trazo.io/auth/signup">
                    Start Free Trial
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
