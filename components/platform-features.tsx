"use client";

import { useState } from "react";
import Image from "next/image";
import {
  FileText,
  ShieldCheck,
  QrCode,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const features = [
  {
    id: "document",
    tag: "DOCUMENT",
    icon: FileText,
    title: "Prove what you grow, in under 2 minutes",
    description:
      "Smart forms, voice recording, and photo capture let you document farming activities quickly (even in poor connectivity). Seven event types cover everything from planting to harvest. Designed to meet NOP recordkeeping requirements (7 CFR 205.103). The same events that build consumer trust also produce the documentation your inspector reviews.",
    image: "/images/feature-document.avif",
  },
  {
    id: "verify",
    tag: "VERIFY",
    icon: ShieldCheck,
    title: "Certifications verified against the USDA database",
    description:
      "When you complete a production, your record is locked as a permanent, tamper-evident document. USDA Organic certifications are cross-referenced against the USDA Organic Integrity Database (36,000+ certified operations). Consumers see a \u2018Verified\u2019 badge for farms found in the government database. Other certifications display as ‘Self-Reported.’",
    image: "/images/feature-verify.avif",
  },
  {
    id: "connect",
    tag: "CONNECT",
    icon: QrCode,
    title: "Every scan builds buyer confidence",
    description:
      "Trazo allows you to generate a qr code for each production. When your customer scans the qr code, they will see your full farming journey - building the trust to drive buying decisions.",
    image: "/images/feature-connect.avif",
  },
  {
    id: "grow",
    tag: "GROW",
    icon: BarChart3,
    title: "Know exactly who is scanning your products",
    description:
      "You will be able to track qr code scans, consumer engagement and reviews through our single dashboard. You will know which farming practices resonate with your buyers and you will be able to refine your transparency story over time.",
    image: "/images/feature-grow.avif",
  },
];

export function PlatformFeatures() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeFeature = features[activeIndex];

  return (
    <section
      id="features"
      className="relative border-y border-border bg-secondary/30 py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
              Platform
            </p>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              Everything you need to build
              <br className="hidden lg:block" /> consumer trust
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

        {/* Features Grid */}
        <div className="mt-14 grid gap-6 lg:grid-cols-5 lg:gap-8">
          {/* Tabs */}
          <div
            className="-mx-6 flex flex-row gap-2 overflow-x-auto px-6 pb-2 lg:mx-0 lg:col-span-2 lg:flex-col lg:gap-2 lg:overflow-x-visible lg:px-0 lg:pb-0"
            role="tablist"
          >
            {features.map((feature, i) => (
              <button
                key={feature.id}
                role="tab"
                aria-selected={i === activeIndex}
                onClick={() => setActiveIndex(i)}
                className={cn(
                  "flex w-[75%] shrink-0 items-center gap-3 rounded-xl border px-4 py-3 text-left transition-all duration-200 sm:w-auto lg:px-5 lg:py-4",
                  i === activeIndex
                    ? "border-primary/30 bg-card text-foreground shadow-sm"
                    : "border-transparent text-muted-foreground hover:bg-card/60"
                )}
              >
                <feature.icon
                  size={20}
                  className={cn(
                    "shrink-0",
                    i === activeIndex ? "text-primary" : "text-muted-foreground"
                  )}
                />
                <div>
                  <p
                    className={cn(
                      "text-xs font-bold uppercase tracking-wider",
                      i === activeIndex
                        ? "text-primary"
                        : "text-muted-foreground/70"
                    )}
                  >
                    {feature.tag}
                  </p>
                  <p className="mt-0.5 text-sm font-medium">{feature.title}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Active Feature Detail */}
          <div className="lg:col-span-3">
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              {/* Visual area */}
              <div className="relative aspect-video overflow-hidden bg-secondary/60">
                <Image
                  src={activeFeature.image}
                  alt={`${activeFeature.tag} - ${activeFeature.title}`}
                  fill
                  className="object-cover object-top"
                />
              </div>
              {/* Description */}
              <div className="p-8">
                <h3 className="text-xl font-bold text-foreground">
                  {activeFeature.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {activeFeature.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
