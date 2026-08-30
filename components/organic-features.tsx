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
    /*
      ⚠️ 2026-08-28: this used to end the list of outcomes with "— or plainly not organic",
      which was wrong in two directions once operator-authored materials shipped.

      (a) NOT MATCHING A CATALOG IS NOT A FINDING. Trazo's OMRI copy is a licensed reference
          subset, and a National List entry is a SUBSTANCE while a label carries a BRAND, so a
          no-match means unmatched, never unapproved — the rule the materials service is built
          on (`certifications/services/plan_materials.py`).
      (b) A fifth outcome now exists and the sentence has to name it: the producer can put a
          material on the plan in their own words with no third-party listing at all — compost,
          manure, a home-formulated spray, the things CCOF's own form asks for by name — and it
          prints as "no third-party listing on file", for the certifier to review.
    */
    description:
      "Every input you log is checked against the National List (7 CFR 205.601–.602) the moment you save it, and recorded with the basis it actually has: OMRI Listed, WSDA Listed, NOP seal on the label, approved by your certifier in writing — or entered by you with no third-party listing, which is exactly how compost, manure and a home-formulated spray reach the list your certifier asks for. A name Trazo cannot match is reported as unmatched, never as unapproved. Once your plan is active, an input that is not on your approved materials list is flagged on the spot, with the OMRI search a click away.",
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
      "Every lot reconciles what you harvested against what you sold, with the balance printed, and traces from the sale back to the field, the picks, the inputs applied and the supplier records — the trail an inspector follows at the in/out audit.",
  },
  {
    icon: History,
    title: "3-Year Field History",
    description:
      "Per-parcel crop, rotation and input history across seasons — the years you typed at setup plus every year compiled from the seasons you logged, inputs included, each one marked as to where it came from. Always ready when your certifier asks.",
  },
  {
    icon: ClipboardCheck,
    title: "SOE Fraud Prevention Plan (OFPP)",
    description:
      "Document your Organic Fraud Prevention Plan including supplier verification, supply-chain risk assessment, and review cadence. Required under USDA's Strengthening Organic Enforcement final rule (88 FR 3548, January 19, 2023; compliance required since March 19, 2024), 7 CFR 205.201(a)(3).",
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
            Certification is a snapshot. Trazo is the continuous record.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
