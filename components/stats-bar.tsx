"use client";

import { Timer, Layers, DollarSign, Languages } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";

// Every number here must be flat-out true and stay true: guided-OSP module count
// and flat price are product facts; the two-language claim covers the app
// (activity logging, forms, module content EN/ES).
const stats = [
  { icon: Layers, value: "17", label: "Guided OSP Modules, Common-OSP Aligned" },
  { icon: DollarSign, value: "$249 flat", label: "Per Farm, Per Year — Not Revenue-Banded" },
  { icon: Languages, value: "EN + ES", label: "Log and Review in English or Spanish" },
  { icon: Timer, value: "<2 min", label: "Per Activity Logged" },
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
