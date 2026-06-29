"use client";

import { FileStack, EyeOff, TrendingDown } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";

const problems = [
  {
    icon: FileStack,
    label: "Audit Overwhelm",
    title: "Paperwork piles up all season, then a scramble before inspection",
    description:
      "Spray logs, input records, OSP updates, all scattered across notebooks and spreadsheets. When the inspector schedules, you're rebuilding the binder from memory.",
    source: null,
    sourceUrl: null,
  },
  {
    icon: EyeOff,
    label: "Invisible Work",
    title: "Your buyers can't see the work behind your label",
    description:
      "A certificate says “organic.” It can't show the cover crops, the no-spray, the real practices that set you apart from the farm next door selling under the same label.",
    source:
      "Industry analysis: documented practices increasingly required by premium buyers",
    sourceUrl: null,
  },
  {
    icon: TrendingDown,
    label: "Broken Incentives",
    title: "Other tools make documentation a chore",
    description:
      "Some tools penalize you for recording more. Trazo works the opposite way: every event you record makes your documentation more complete, your audit prep easier, and your buyer page richer.",
    source: "Trazo analysis of farm recordkeeping tools",
    sourceUrl: null,
  },
];

export function ProblemSection() {
  return (
    <section className="relative py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
              The Problem
            </p>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              Why your best work stays in a binder
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Organic paperwork keeps piling up, and most of it just sits in a
              binder until inspection. Buyers never see the work behind your
              label.
            </p>
          </div>
        </ScrollReveal>

        {/* Problem Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {problems.map((problem, i) => (
            <ScrollReveal key={problem.title} delay={i * 150}>
              <div className="group relative h-full rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                <div className="mb-2 text-xs font-bold uppercase tracking-wider text-primary">
                  {problem.label}
                </div>
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/8">
                  <problem.icon size={22} className="text-primary" />
                </div>
                <h3 className="mb-3 text-lg font-bold leading-snug text-foreground">
                  {problem.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {problem.description}
                </p>
                {problem.source && (
                  <p className="mt-4 text-xs italic text-muted-foreground/70">
                    {problem.sourceUrl ? (
                      <a
                        href={problem.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-dotted hover:text-primary"
                      >
                        {problem.source}
                      </a>
                    ) : (
                      problem.source
                    )}
                  </p>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
