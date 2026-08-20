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
      "Log every farming event fast with voice recording, photo capture, or simple forms — and Trazo flags any certifier-required detail still missing while you can still remember it.",
    image: "/images/step-document.jpg",
    alt: "Farmer documenting agricultural practices with Trazo",
  },
  {
    number: "03",
    label: "STEP 3",
    title: "Walk Into Renewal Ready",
    description:
      "Your records compile into your Organic System Plan, renewal packet, and audit exports — and when you finish a harvest, Trazo can build a buyer page from the same season. Publishing it is optional and reversible: one switch turns a season on, the same switch turns it off.",
    // TODO(step-3 art): interim. Wants a photograph of the RENEWAL MOMENT — see the brief in
    // `docs/step-3-photo-brief.md`. `farm-field.jpg` is on-register and on-brand but it is a
    // landscape: the copy carries the meaning, the image only sets the mood.
    //
    // WHY THIS IS A PHOTOGRAPH AND NOT THE AUDIT REPORT.
    // It was briefly the audit report's own cover page, which broke this section two ways.
    // Register: steps 1 and 2 are warm photographic stock, so a flat white document scan in
    // the third card reads as a rendering fault rather than a choice — and the card's
    // `group-hover:scale-105`, a Ken Burns move built for photos, zooms into a PDF.
    // Redundancy: the page already carries ten product screenshots (hero, product tour,
    // one-entry-two-outputs, certifier log, consumer showcase). How It Works is the narrative
    // section; the artifacts prove themselves in the sections built to display them.
    image: "/images/farm-field.jpg",
    alt: "Golden-hour aerial of a working farm: planted rows running across rolling green hills toward a farmstead on the horizon.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      // The navbar's "How it Works" links straight here, and the header is FIXED at 109px, so
      // without an offset the "HOW IT WORKS" eyebrow lands underneath it. scroll-mt-28 = 112px.
      className="relative scroll-mt-28 border-b border-border bg-background py-16 lg:py-24"
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
                {/* Was "to consumer trust", which is pre-pivot: the shopper is no longer the
                    climax of the farmer's story. Step 3 ends at renewal, and the QR buyer page
                    is a by-product of finishing a harvest, not the goal. */}
                From sign-up to renewal-ready
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
                    // A `fill` image with no `sizes` is the reason these were soft: next/image
                    // fell back to a tiny srcset candidate and pushed a 207px file into a 340px
                    // box on a phone. The card is half of the 1232px content column at lg+
                    // (measured 615px), and the full column below it.
                    sizes="(min-width: 1024px) 616px, 100vw"
                    quality={92}
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
