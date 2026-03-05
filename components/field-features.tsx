"use client"

import { Monitor, Mic, FileCheck, DoorOpen } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const fieldFeatures = [
  {
    icon: Monitor,
    title: "Works on Any Device",
    description:
      "Phone, tablet, or computer — Trazo works in any web browser. Designed for field conditions with simple interfaces that work even with limited connectivity.",
  },
  {
    icon: Mic,
    title: "No Training Required",
    description:
      "Voice recording and smart forms mean anyone can document practices from day one. Simple enough for the field, detailed enough for verification.",
  },
  {
    icon: FileCheck,
    title: "EPA & USDA-Sourced Data",
    description:
      "All carbon calculations use government-verified emission factors from EPA (40 CFR Part 98) and USDA sources. Audit-ready from day one.",
  },
  {
    icon: DoorOpen,
    title: "Cancel Anytime",
    description:
      "No contracts, no lock-in. Start with a 14-day free trial and upgrade only when you're ready. Your data is always yours.",
  },
]

export function FieldFeatures() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Built for the Field
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Built for farmers, not tech companies
          </h2>
        </div>
        </ScrollReveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {fieldFeatures.map((feature, i) => (
            <ScrollReveal key={feature.title} delay={i * 100}>
            <div
              key={feature.title}
              className="group flex gap-5 rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
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
      </div>
    </section>
  )
}
