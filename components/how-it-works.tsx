"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/scroll-reveal";

const steps = [
  {
    number: "01",
    label: "STEP 1",
    title: "Sign Up & Add Your Farm",
    description:
      "Create your account in minutes. Add your farm, parcels, and start your first production. No technical setup required.",
    image: "/images/step-signup.jpg",
    alt: "Farmer signing up and adding their farm to Trazo",
  },
  {
    number: "02",
    label: "STEP 2",
    title: "Document Your Practices",
    description:
      "Log every farming event in under 2 minutes with voice recording, photo capture, or simple forms.",
    image: "/images/step-document.jpg",
    alt: "Farmer documenting agricultural practices with Trazo",
  },
  {
    number: "03",
    label: "STEP 3",
    title: "Share QR Codes & Earn Trust",
    description:
      "Finish your harvest and the QR code auto-generates. When consumers scan, they see your farming timeline, documented practices, and certifications. Nothing goes live until you're ready.",
    image: "/images/step-consumer-scan.jpg",
    alt: "Consumer scanning a QR code on fresh produce to see the farm story",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative border-b border-border bg-background py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
                How It Works
              </p>
              <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
                From sign-up to consumer trust
                <br className="hidden lg:block" /> in three steps
              </h2>
            </div>
            <Button
              className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
              asChild
            >
              <a href="https://app.trazo.io/auth/signup">
                Start free
                <ArrowRight size={16} />
              </a>
            </Button>
          </div>
        </ScrollReveal>

        {/* Steps */}
        <div className="mt-14 flex flex-col gap-6">
          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 150}>
              <div
                className={`group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden lg:aspect-auto lg:w-1/2">
                  <Image
                    src={step.image}
                    alt={step.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col justify-center p-8 lg:p-14">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">
                    {step.label}
                  </span>
                  <h3 className="mt-4 text-2xl font-bold leading-tight text-foreground lg:text-3xl">
                    {step.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
