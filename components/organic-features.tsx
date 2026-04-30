"use client"

import { Leaf, ShieldCheck, FileSpreadsheet, Clock, Scale, History, ClipboardCheck, Sprout, WrenchIcon, Archive } from "lucide-react"
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
    title: "NOP Audit PDF Export",
    description:
      "Generate a 24-page audit-ready PDF for your certifier. Page-1 Compliance Snapshot (13+ rows PASS / REVIEW / FAIL per CFR rule), 30+ unique 7 CFR 205.x citations, OSP drift detector for inputs (OMRI / WSDA / National List / CDFA OIM cross-check), photo gallery in NOP-priority order, and 5-year change-history attribution. The PDF is reference material for certifier review — not a certification.",
  },
  {
    icon: Clock,
    title: "Continuous Proof Between Audits",
    description:
      "Certification is a snapshot. Trazo fills the gap with timestamped, photo-documented farming events throughout the season. Every organic amendment, cover crop, and harvest builds your record automatically.",
  },
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
      "Maintain per-parcel crop rotation and input history across seasons \u2014 the minimum NOP requires for organic certification. Always ready when your certifier asks.",
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
      "Document commercial availability searches for organic seed (NOP 5029). Record suppliers contacted, dates, and availability determinations \u2014 all in one place for certifier review.",
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
      "All event data, photos, and reports retained for 5 years \u2014 exceeding the NOP minimum and aligned with USDA audit windows. Your records are always available when you need them.",
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
              Organic audit readiness, built in
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Designed to meet NOP recordkeeping requirements (7 CFR 205.103). The same events
              that build consumer trust also generate the documentation your certifier needs at inspection.
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
  )
}
