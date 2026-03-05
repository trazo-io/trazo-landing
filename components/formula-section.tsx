"use client"

import { ClipboardList, BarChart3, Users, Award, ChevronRight } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const steps = [
  {
    icon: ClipboardList,
    label: "More Events Logged",
    description: "Document everything",
  },
  {
    icon: BarChart3,
    label: "Higher Transparency Score",
    description: "0-100, A+ to D grade",
  },
  {
    icon: Users,
    label: "More Consumer Trust",
    description: "Verified proof via QR",
  },
  {
    icon: Award,
    label: "Premium Positioning",
    description: "Command better prices",
  },
]

export function FormulaSection() {
  return (
    <section className="relative border-y border-border bg-secondary/50 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            The Trazo Formula
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            From documentation to premium prices
          </h2>
        </div>
        </ScrollReveal>

        {/* Formula Flow */}
        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-0">
          {steps.map((step, i) => (
            <ScrollReveal key={step.label} delay={i * 120}>
            <div className="relative flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-card shadow-sm">
                <step.icon size={28} className="text-primary" />
              </div>
              <p className="mt-4 text-sm font-bold text-foreground">
                {step.label}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                {step.description}
              </p>
              {i < steps.length - 1 && (
                <ChevronRight
                  size={20}
                  className="absolute right-0 top-5 hidden -translate-x-1/2 text-primary/40 md:block"
                  style={{ right: "-10px" }}
                />
              )}
            </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
