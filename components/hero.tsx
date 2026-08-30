"use client";

import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ScrollReveal } from "@/components/scroll-reveal";

export function Hero() {
  // Top padding tracks the FIXED header's measured height (`--header-h`, published by
  // Navbar) plus breathing room, because that header GROWS as the renewal strip wraps:
  // 109px desktop, 121px at 390, 137px at 320. The old fixed `pt-28` (112px) put the
  // deadline badge underneath it on every phone. The 140px fallback covers the widest
  // observed header on first paint, before the ResizeObserver reports.
  return (
    <section className="relative overflow-hidden pb-10 pt-[calc(var(--header-h,140px)+2rem)] lg:pb-14 lg:pt-[calc(var(--header-h,140px)+3.5rem)]">
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
          {/*
            Badge.

            ⚠️ 2026-08-28: this read "Renewal season opens in November", which is CCOF and Oregon
            Tilth timing stated as if it were universal. WSDA — the certifier behind most of the
            Washington outreach list, and the state Trazo expands into — renews against a single
            March 1 deadline. A WA grower reading "opens in November" in December concludes either
            that they have missed it or that the product is not for them; both are wrong.

            The navbar already carries the accurate multi-certifier line; this now matches it.
            ⛔ Do not add a WSDA "opens" date: we have verified the March 1 DEADLINE from WSDA's
            own Site Application PDF, but not when their renewal packet goes out
            (`documentation/gtm-v3/CERTIFIER-CALENDAR-2026-08-19.md` §WSDA).
          */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium text-primary">
              CCOF &amp; Oregon Tilth renewals open in November &middot; WSDA
              due March 1
            </span>
          </div>

          {/* Heading: static (above the fold; must not animate in / gate LCP) */}
          <h1 className="max-w-4xl text-balance text-3xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
            Walk into renewal season with your records{" "}
            <span className="text-primary">already assembled</span>.
          </h1>

          {/* Subheading */}
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Your annual update is due between January 1 and April 1, depending
            on your certifier. Log the season on your phone as you go — in
            English or Spanish — and Trazo assembles the records section, the
            attachment forms, the annual update and your inspection packet from
            what you entered, and lists what changed in your records since you
            last wrote your plan. You review and sign. The same records also
            produce a page your buyer can scan.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row">
            <Button
              size="lg"
              className="w-full gap-2 bg-primary px-8 text-base text-primary-foreground hover:bg-primary/90 sm:w-auto"
              asChild
            >
              <a href="https://app.trazo.io/auth/signup">
                Start free
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

          {/*
            Pricing note.

            ⚠️ 2026-08-15: this used to end "Export everything, anytime". That became FALSE when
            the certifier documents — the OSP renewal packet, the audit dossiers, the California
            PUR export and the certifier review link — moved behind the Compliance plan
            (`trazo-back/subscriptions/gating.py`). Starter is now bounded by what it PRODUCES,
            not by how much it can log, so the true and stronger claim is unlimited logging: log
            a whole season, every block, at no cost. The app's signup screen carries the same
            line and was corrected in the same pass.

            2026-08-25: that export now EXISTS — a free, ungated ZIP of raw CSVs
            (every record family, JSON pockets included) at
            .../records-export/, pinned by history/tests/test_records_export.py.
            The claim below is therefore true again — scoped to RECORDS, not the
            certifier artifacts, which stay on Compliance.
          */}
          <p className="mt-4 text-sm text-muted-foreground">
            Starter plan free permanently &middot; No credit card &middot; Log a
            whole season, unlimited &middot; Export your records anytime
          </p>

          {/* Hero Image - Real App Screenshot (below fold; lazy + reveal on scroll) */}
          <ScrollReveal delay={0} duration={800} className="w-full">
            <div className="relative mt-12 w-full max-w-6xl lg:mt-14">
              <div
                className="absolute -inset-4 rounded-3xl bg-primary/5 blur-2xl"
                aria-hidden="true"
              />
              {/* The WHOLE screen, unframed.
                  Two earlier attempts sit behind this one. First was the full dashboard in a
                  1024px box: 0.71x, and the CFR citations were unreadable. Second cropped to
                  two cards for legibility and lost the thing that says "software" — with no
                  sidebar and no nav, a bordered card of UI on the landing's own background
                  reads as a marketing component someone built in Tailwind. Browser chrome was
                  added to fix that and it worked, but it was a prosthetic for a missing
                  sidebar. Showing the real screen solves it at the source: the nav, the farm
                  switcher and the sidebar say "app" with no costume. All three were compared
                  side by side at true hero width before choosing (2026-08-15).

                  The container is 6xl, not 5xl, on purpose: the full screen is 1671 CSS px of
                  app, which lands at 61% in a 1024px box and 69% in a 1152px one. That is the
                  difference between a grower reading "in 77 days" and not.

                  Filename is versioned on EVERY re-cut. `_next/image` keys its optimizer cache
                  on the source URL, so replacing bytes under a name that has already been
                  requested serves the OLD image indefinitely — verified 2026-08-15. */}
              {/* Art-directed. A 1671 CSS px desktop screen inside a 340px phone column is a
                  20% reduction — a grey blur, and the same failure the tour panels already had
                  to solve. Phones get the screen captured AT phone width, where the app's own
                  responsive layout keeps every line readable. Two <Image>s rather than
                  <picture> so next/image owns each srcset; only one is ever in the layout. */}
              <div className="relative mx-auto max-w-[340px] overflow-hidden rounded-2xl border border-border bg-card shadow-xl shadow-foreground/5 md:hidden">
                <Image
                  src="/images/app-screenshot-m-v2.png"
                  alt="The Trazo farm home on a phone: a Certifier deadlines card listing the 2026 OSP annual update as started but not submitted, the USDA Organic certificate due in 77 days and the CDFA State Organic Program renewal in 62 days, above a card reading 16 record checks on your latest season with two open items."
                  width={780}
                  height={1688}
                  quality={92}
                  sizes="340px"
                  className="w-full"
                />
              </div>
              <div className="relative hidden overflow-hidden rounded-2xl border border-border bg-card shadow-xl shadow-foreground/5 md:block">
                <Image
                  src="/images/app-screenshot-full-v2.png"
                  alt="The Trazo farm home for Blue Oak Orchards in Winters, California, with the farm sidebar on the left: a Certifier deadlines card listing the 2026 OSP annual update as started but not submitted, a USDA Organic certificate due in 77 days and a CDFA State Organic Program renewal due in 62 days; below it a card reading Chandler Walnuts 2025, 16 record checks on your latest season, with one open item for documentation depth."
                  width={3342}
                  height={2072}
                  quality={92}
                  sizes="(max-width: 1152px) 100vw, 1152px"
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
