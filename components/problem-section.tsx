"use client"

import { ShieldAlert, FileX, TrendingDown } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const problems = [
  {
    icon: ShieldAlert,
    label: "Trust Gap",
    title: "Only 20% of consumers believe sustainability claims",
    description:
      "Trust is broken. Your buyers need documented proof, not marketing promises. Without verification, your practices are just words on a label.",
    source: "Blue Yonder, 2025 — survey of 5,000+ consumers",
  },
  {
    icon: FileX,
    label: "Documentation",
    title: "No documentation means no premium prices",
    description:
      "Premium retailers, co-ops, and food brands demand verified farming records before paying premium prices. Without them, you compete on price alone.",
    source: null,
  },
  {
    icon: TrendingDown,
    label: "Broken Incentives",
    title: "Carbon-first platforms punish transparency",
    description:
      "Other tools penalize you for logging more events — more data means a worse carbon score. Trazo flips it: more events = higher transparency score = more trust.",
    source: null,
  },
]

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
            Why farms lose premium positioning
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Premium buyers want proof. Without documented practices, even the
            best farms compete on price alone.
          </p>
        </div>
        </ScrollReveal>

        {/* Problem Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {problems.map((problem, i) => (
            <ScrollReveal key={problem.title} delay={i * 150}>
            <div
              className="group relative h-full rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
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
                  {problem.source}
                </p>
              )}
            </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
