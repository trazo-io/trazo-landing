"use client"

import { Leaf, ShieldCheck, FileSpreadsheet, Clock } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const organicFeatures = [
  {
    icon: Leaf,
    title: "OMRI & NOP Input Tracking",
    description:
      "Every chemical event classifies inputs as OMRI Listed, USDA NOP Approved, Organic Equivalent, Transitional, or Not Organic. Organic vs synthetic subtypes tracked separately across fertilizers, pesticides, herbicides, and fungicides.",
  },
  {
    icon: ShieldCheck,
    title: "USDA Organic Verification",
    description:
      "Organic certifications are verified against the USDA Organic Integrity Database (36,000+ operations). Consumers see a green \"Verified\" badge on your QR page. Other certifications display as \"Self-Reported.\"",
  },
  {
    icon: FileSpreadsheet,
    title: "Audit-Ready Reports",
    description:
      "Export organic-filtered PDF or CSV reports with chemical inputs, organic approval status, soil management practices, and equipment cleaning records. One click, formatted for certifier review.",
  },
  {
    icon: Clock,
    title: "Continuous Proof Between Audits",
    description:
      "Certification is a snapshot. Trazo fills the gap with timestamped, photo-documented farming events throughout the season. Every organic amendment, cover crop, and harvest builds your record automatically.",
  },
]

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
              70% of your organic record-keeping, built in
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Trazo already tracks the inputs and practices organic farms document daily.
              The same events that build consumer trust also support your certification documentation.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {organicFeatures.map((feature, i) => (
            <ScrollReveal key={feature.title} delay={i * 100}>
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
  )
}
