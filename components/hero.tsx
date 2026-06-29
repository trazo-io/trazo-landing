"use client";

import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ScrollReveal } from "@/components/scroll-reveal";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28">
      {/* Subtle dot pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "radial-gradient(circle, oklch(0.45 0.12 155 / 0.12) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium text-primary">
              Try free for 14 days
            </span>
          </div>

          {/* Heading: static (above the fold; must not animate in / gate LCP) */}
          <h1 className="max-w-4xl text-balance text-3xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
            Your organic records, turned into{" "}
            <span className="text-primary">inspection-ready proof</span>, and a
            page your buyers can actually see.
          </h1>

          {/* Subheading */}
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            You already keep these records for your certifier. Enter them once in
            Trazo. The same records become inspection-ready audit
            documentation and a transparency page your buyers can scan.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row">
            <Button
              size="lg"
              className="w-full gap-2 bg-primary px-8 text-base text-primary-foreground hover:bg-primary/90 sm:w-auto"
              asChild
            >
              <a href="https://app.trazo.io/auth/signup">
                Start Free Trial
                <ArrowRight size={18} />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full gap-2 border-border px-8 text-base text-foreground hover:bg-secondary sm:w-auto"
              asChild
            >
              <a href="/#how-it-works">
                <Play size={16} />
                See How It Works
              </a>
            </Button>
          </div>

          {/* Pricing note */}
          <p className="mt-4 text-sm text-muted-foreground">
            Try free for 14 days &middot; Plans from $69/month &middot; No credit
            card required
          </p>

          {/* Hero Image - Real App Screenshot (below fold; lazy + reveal on scroll) */}
          <ScrollReveal delay={0} duration={800}>
            <div className="relative mt-16 w-full max-w-5xl">
              <div
                className="absolute -inset-4 rounded-3xl bg-primary/5 blur-2xl"
                aria-hidden="true"
              />
              <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-xl shadow-foreground/5">
                <Image
                  src="/images/app-screenshot.jpg"
                  alt="Trazo agricultural dashboard showing farm management, production tracking, audit-ready documentation, and satellite mapping for Coastal Valleys Farm"
                  width={1400}
                  height={900}
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  className="w-full"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
