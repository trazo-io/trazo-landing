"use client"

import { ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ScrollReveal } from "@/components/scroll-reveal"

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28">
      {/* Subtle dot pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: "radial-gradient(circle, oklch(0.45 0.12 155 / 0.12) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <ScrollReveal delay={0}>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium text-primary">
              Try free for 14 days
            </span>
          </div>
          </ScrollReveal>

          {/* Heading */}
          <ScrollReveal delay={100}>
          <h1 className="max-w-4xl text-balance text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            If buyers can&apos;t verify it,{" "}
            <span className="text-primary">they won&apos;t pay for it.</span>
          </h1>
          </ScrollReveal>

          {/* Subheading */}
          <ScrollReveal delay={200}>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Trazo turns your farming practices into verified proof — so you
            can sell your products for what they&apos;re worth.
          </p>
          </ScrollReveal>

          {/* CTA Buttons */}
          <ScrollReveal delay={300}>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="gap-2 bg-primary px-8 text-base text-primary-foreground hover:bg-primary/90"
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
              className="gap-2 border-border px-8 text-base text-foreground hover:bg-secondary"
              asChild
            >
              <a href="/#how-it-works">
                <Play size={16} />
                See How It Works
              </a>
            </Button>
          </div>
          </ScrollReveal>

          {/* Pricing note */}
          <ScrollReveal delay={400}>
          <p className="mt-4 text-sm text-muted-foreground">
            Try free for 14 days &middot; Plans from $69/month &middot; Cancel anytime
          </p>
          </ScrollReveal>

          {/* Hero Image - Real App Screenshot */}
          <ScrollReveal delay={500} duration={800}>
          <div className="relative mt-16 w-full max-w-5xl">
            <div className="absolute -inset-4 rounded-3xl bg-primary/5 blur-2xl" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-xl shadow-foreground/5">
              <Image
                src="/images/app-screenshot.jpg"
                alt="Trazo agricultural dashboard showing farm management, production tracking, transparency scores, and satellite mapping for Coastal Valleys Farm"
                width={1400}
                height={900}
                className="w-full"
                priority
              />
            </div>
          </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
