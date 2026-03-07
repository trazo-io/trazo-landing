"use client"

import { Monitor, Mic, FileCheck, DoorOpen } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const fieldFeatures = [
  {
    icon: Monitor,
    title: "Works On All Devices",
    description:
      "Trazo can be used on any device with a web browser whether it's a phone, tablet, or computer; we've designed our system to allow for simple interfaces which are functional even in areas of limited internet access.",
  },
  {
    icon: Mic,
    title: "No Training Required",
    description:
      "Our voice recording technology and smart form capabilities will allow your team to document their daily practices immediately without requiring training. The system is simple enough to use by anyone in the field while still providing the detail needed for verification.",
  },
  {
    icon: FileCheck,
    title: "Data From Government Sources",
    description:
      "All emissions calculations using Trazo utilize government-sourced emission factors from both EPA (40 CFR Part 98) and USDA. Therefore, all of your documentation is audit-ready from the first day.",
  },
  {
    icon: DoorOpen,
    title: "Cancellation Is Available At Any Time",
    description:
      "We have no contract or lock-in requirements. We offer a 14-day free trial. Upgrade to paid at any time after the trial ends and your data remains yours regardless of your status with us.",
  },
]

export function FieldFeatures() {
  return (
    <section className="relative py-16 lg:py-24">
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
