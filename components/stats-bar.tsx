"use client";

import { Sprout, Layers, DollarSign, Languages } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";

// Every number here must be flat-out true and stay true: flat price and crop count
// are product facts; the two-language claim covers the app (activity logging, forms,
// module content EN/ES).
//
// The first tile used to be "19 Guided OSP Modules". True (MODULE_REGISTRY has 19), but
// a feature count says nothing a grower can use, and Google's AI overview read it as
// "auto-assembles OSP modules": the OSP-authoring claim this site must never make
// (7 CFR 205.201(a): the producer writes the plan). The tile now states the product's
// own formula, log once and the documents are built from it, naming only artifacts
// that are generated (subscriptions/gating.py).
const stats = [
  { icon: Layers, value: "1 entry", label: "Feeds Your Renewal Packet and Audit Exports" },
  { icon: DollarSign, value: "$249 flat", label: "Per Farm, Per Year, Not Revenue-Banded" },
  // Overall review 2026-11 (OV-CLM-C14): this read "Crew Logs in Spanish, You File in English".
  // Nothing translates free text: structured fields print in English, a crew note keeps the
  // words it was written in. A crew message arrives as a suggestion that someone at the farm
  // saves under their own name, so the line carries that clause.
  { icon: Languages, value: "EN + ES", label: "Crew Messages in English or Spanish, Confirmed at the Farm" },
  { icon: Sprout, value: "33", label: "US Crop Templates" },
];

export function StatsBar() {
  return (
    <section className="relative border-b border-border py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
              Why Trazo
            </p>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Simple enough for the field. Strong enough for the buyer.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Trazo turns every farming practice into a documented digital
              record, so your inspection prep is ready and buyers can see how
              your crop was actually grown.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 100}>
              <div className="flex flex-col items-center rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-shadow hover:shadow-md">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/8">
                  <stat.icon size={22} className="text-primary" />
                </div>
                <p className="text-xl font-bold text-foreground sm:text-3xl lg:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
