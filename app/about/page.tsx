import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, BookOpenCheck, Globe2, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

/**
 * About page — trust through honesty, not headcount.
 *
 * Compliance notes: no entity suffix (no Inc./LLC — none exists yet), no
 * fabricated team, no customer counts (there are none to claim), no
 * testimonials. The trust story is the method: public standards followed,
 * published methodology, and records the reader can inspect.
 */

export const metadata: Metadata = {
  title: "About Trazo — who builds this and how",
  description:
    "Built by a software engineer working directly with organic growers, on the Common OSP structure, EPA/USDA-published factors and a published methodology.",
  alternates: { canonical: "https://www.trazo.io/about" },
  openGraph: {
    title: "About Trazo",
    description:
      "Who builds Trazo, why it exists, and what it deliberately does not claim.",
    url: "./",
    // Next merges metadata SHALLOWLY: a page-level `openGraph` REPLACES the
    // root object rather than extending it, so omitting this dropped og:image
    // entirely and the page shared as a card with no picture at all.
    images: ["/images/og-renewal-2026-10.jpg"],
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-[calc(var(--header-h,140px)+1.25rem)] pb-20">
        <article className="mx-auto max-w-3xl px-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            About
          </p>
          <h1 className="mt-2 text-3xl font-bold text-foreground md:text-4xl">
            Who builds Trazo, and how
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Trazo is built by Oscar Munoz, a software engineer building the
            product end-to-end and working directly with organic specialty-crop growers and certifiers in
 California and Washington. No sales team between you and the person who
            writes the code: the questions farmers ask become the next release.
          </p>

          <section className="mt-12 space-y-8">
            <div className="flex gap-4">
              <Wrench className="mt-1 shrink-0 text-primary" size={22} />
              <div>
                <h2 className="text-lg font-bold text-foreground">
                  One thesis, applied everywhere
                </h2>
                <p className="mt-1 text-muted-foreground">
                  A farmer&apos;s record should be written once and work twice —
                  as the compliance record a certifier reviews, and as the story
                  a buyer can check. Every feature is judged against that: if it
                  doesn&apos;t make the record more complete or more usable, it
                  doesn&apos;t ship.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <BookOpenCheck className="mt-1 shrink-0 text-primary" size={22} />
              <div>
                <h2 className="text-lg font-bold text-foreground">
                  Built on public standards, not private ones
                </h2>
                <p className="mt-1 text-muted-foreground">
                  The guided plan follows the USDA-supported Common OSP
                  structure. Emission calculations use EPA/USDA-published
                  factors. Record checks cite the actual regulation (7&nbsp;CFR
                  Part&nbsp;205) line by line. The full{" "}
                  <Link
                    href="/methodology"
                    className="text-primary hover:underline"
                  >
                    methodology is published
                  </Link>{" "}
                  under CC&nbsp;BY&nbsp;4.0 — including its limitations.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Globe2 className="mt-1 shrink-0 text-primary" size={22} />
              <div>
                <h2 className="text-lg font-bold text-foreground">
                  English and Spanish, as equals
                </h2>
                <p className="mt-1 text-muted-foreground">
                  The people doing the field work often speak Spanish; the
                  reviewer reading the file usually reads English. Trazo treats
                  both as first-class: log in either language, and the record
                  serves both readers.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-12 rounded-2xl border border-border p-6">
            <h2 className="text-lg font-bold text-foreground">
              What we won&apos;t claim
            </h2>
            <p className="mt-2 text-muted-foreground">
              Trazo doesn&apos;t certify anything — your certifier does. Records
              in Trazo are farmer-reported; readiness checks are preparation
              aids, never findings. You will not find invented statistics,
              purchased badges, or a &quot;verified&quot; label we granted
              ourselves anywhere in the product. If a claim can&apos;t survive
              an inspector reading it, it doesn&apos;t belong on a farm&apos;s
              page — or on ours.
            </p>
          </section>

          <div className="mt-14 rounded-2xl bg-primary/5 p-8 text-center">
            <h2 className="text-xl font-bold text-foreground">
              Talk directly to the builder
            </h2>
            <p className="mx-auto mt-2 max-w-md text-muted-foreground">
              Questions, doubts, a certifier form we should support — write and
              the person who builds Trazo answers. Async, no sales call.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button className="gap-2" asChild>
                <a href="mailto:info@trazo.io">
                  Email us
                  <ArrowRight size={16} />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/contact">Contact page</Link>
              </Button>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
