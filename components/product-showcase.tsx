"use client";

import Image from "next/image";
import { Shield, Star, LineChart, Smartphone } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";

export function ProductShowcase() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-secondary/30 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
              Buyer-Facing Proof
            </p>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              What your buyers see when
              <br className="hidden md:block" /> they scan your QR code
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Every product gets a public transparency page. Your buyers, and
              the shoppers they sell to, see your documented practices, farming
              journey, and third-party certifications.
            </p>
          </div>
        </ScrollReveal>

        {/* Phone Mockups */}
        <ScrollReveal delay={200} duration={800}>
          <div className="relative mt-16">
            <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:items-start md:gap-12 lg:gap-20">
              {/* Phone 1 - Transparency Profile */}
              <div className="flex flex-col items-center gap-6">
                <div className="relative h-[520px] w-[260px] overflow-hidden rounded-[2.5rem] border-[8px] border-foreground/10 bg-card shadow-2xl shadow-primary/10 md:h-[560px] md:w-[280px]">
                  <Image
                    src="/images/consumer-transparency-v3.png"
                    alt="Trazo buyer page for walnuts from Blue Oak Orchards: Lot BO-2025-EB-01, harvested October 22 2025, 27 practices documented, above the documented growing story and the practices, origin, harvest and records row."
                    fill
                    sizes="(min-width: 768px) 280px, 260px"
                    quality={95}
                    className="object-cover object-top"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-bold text-foreground">
                    Transparency Profile
                  </h3>
                  <p className="mt-1 max-w-[260px] text-sm text-muted-foreground">
                    Farm certifications, documented practices, and your farming
                    story at a glance
                  </p>
                </div>
              </div>

              {/* Phone 2 - Production Journey */}
              <div className="flex flex-col items-center gap-6">
                <div className="relative h-[520px] w-[260px] overflow-hidden rounded-[2.5rem] border-[8px] border-foreground/10 bg-card shadow-2xl shadow-primary/10 md:h-[560px] md:w-[280px]">
                  <Image
                    src="/images/consumer-journey-v6.png"
                    alt="A Trazo farming event opened on the buyer page: Harvest — shake and sweep, September 29 2025, what happened in plain words, a Self Reported label, the farmer's own field notes recording 8.2 percent moisture at delivery and the weigh ticket, and key details including area covered of 12.5 acres."
                    fill
                    sizes="(min-width: 768px) 280px, 260px"
                    quality={95}
                    className="object-cover object-top"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-bold text-foreground">
                    Production Journey
                  </h3>
                  <p className="mt-1 max-w-[260px] text-sm text-muted-foreground">
                    Every farming event, in plain words, with the farmer&rsquo;s
                    own notes and the numbers behind them
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Feature Highlights */}
        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-6 md:grid-cols-4">
          {[
            {
              icon: Shield,
              label: "Verified Certifications",
              desc: "Checked against USDA database",
            },
            {
              icon: Star,
              label: "Documented Practices",
              desc: "Every farming step logged",
            },
            {
              icon: LineChart,
              label: "Full Timeline",
              desc: "Seed to harvest",
            },
            {
              icon: Smartphone,
              label: "QR Code Access",
              desc: "Scan to discover",
            },
          ].map((feature) => (
            <div
              key={feature.label}
              className="flex flex-col items-center text-center"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h4 className="mt-3 text-sm font-bold text-foreground">
                {feature.label}
              </h4>
              <p className="mt-1 text-xs text-muted-foreground">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
