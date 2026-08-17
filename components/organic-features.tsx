"use client";

import {
  Leaf,
  Scale,
  History,
  ClipboardCheck,
  Sprout,
  WrenchIcon,
  Archive,
} from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";

const organicFeatures = [
  {
    icon: Leaf,
    title: "OMRI & NOP Input Tracking",
    description:
      "Every chemical event classifies inputs as OMRI Listed, USDA NOP Approved, Organic Equivalent, Transitional, or Not Organic. Organic vs synthetic subtypes tracked separately across fertilizers, pesticides, herbicides, and fungicides.",
  },
  /* THREE CARDS REMOVED — each was said better elsewhere on the page:
     · "USDA Organic Verification"      the Integrity Database claim ran FOUR times
                                        across the homepage; FAQ Q4 keeps it.
     · "NOP Audit PDF Export"           ProductTour's "Your documents" panel shows the
                                        real artifact, and DualOutput shows a page of it.
                                        Its "24-page / 13+ rows / 30+ citations" numbers
                                        were also unverified against the generator.
     · "Continuous Proof Between Audits"  restated this section's own closing line.
     What is left is the regulatory surface area nothing else on the page carries. */
  {
    icon: Scale,
    title: "Mass-Balance & Trace-Back Reports",
    description:
      "Generate audit-ready mass-balance reports reconciling inputs purchased against outputs harvested. One-click trace-back from any finished product to its field, inputs, and supplier records.",
  },
  {
    icon: History,
    title: "3-Year Field History",
    description:
      "Maintain per-parcel crop rotation and input history across seasons, the minimum NOP requires for organic certification. Always ready when your certifier asks.",
  },
  {
    icon: ClipboardCheck,
    title: "SOE Fraud Prevention Plan (OFPP)",
    description:
      "Document your Organic Fraud Prevention Plan including supplier verification, supply-chain risk assessment, and review cadence. Required under USDA's 2024 Strengthening Organic Enforcement final rule (88 FR 3622, effective 2024-03-19), 7 CFR 205.201(a)(3).",
  },
  {
    icon: Sprout,
    title: "Seed Source Search Records",
    description:
      "Document commercial availability searches for organic seed (NOP 5029). Record suppliers contacted, dates, and availability determinations, all in one place for certifier review.",
  },
  {
    icon: WrenchIcon,
    title: "Equipment Cleaning Logs",
    description:
      "Log shared-equipment cleaning events with timestamps, methods, and photos. Document contamination prevention for split operations or rented equipment.",
  },
  {
    icon: Archive,
    title: "5-Year Record Retention",
    description:
      // Five years IS the NOP minimum (7 CFR 205.103(b)(3)) — claiming to exceed it
      // was a wrong compliance claim on the block a certifier-literate reader trusts most.
      "All event data, photos, and reports retained for 5 years, matching the NOP retention requirement at 7 CFR 205.103(b)(3) and aligned with USDA audit windows.",
  },
];

export function OrganicFeatures() {
  return (
    <section className="relative py-16 lg:py-24 bg-primary/3">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
              For Organic Farms
            </p>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Organic audit readiness, built in
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Designed to meet NOP recordkeeping requirements (7 CFR 205.103).
              The records you already keep become inspection-ready
              documentation. What used to take a binder week now takes an
              afternoon.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
          {organicFeatures.map((feature, i) => (
            <ScrollReveal key={feature.title} delay={Math.min(i, 3) * 100}>
              <div className="group flex gap-5 rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/8">
                  <feature.icon size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={400}>
          <p className="mt-10 text-center text-sm italic text-muted-foreground">
            Certification is a snapshot. Trazo is continuous proof.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
