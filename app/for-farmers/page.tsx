import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  CalendarCheck,
  Mic,
  PackageCheck,
  QrCode,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

/**
 * Farmer persona page (plan #65).
 *
 * Compliance notes: no premium-price promises ("positioning", never
 * "prices"); paperwork-concern statistic is NASS 2021 (55% of organic farms
 * name recordkeeping/paperwork a top challenge) — sourced, not fabricated.
 */

export const metadata: Metadata = {
  title: "Trazo for farmers — renewal without the paperwork pile",
  description:
    "Log each activity once, from the field, in English or Spanish. It becomes your certifier records, the evidence behind your Organic System Plan answers, and your buyer's page.",
  alternates: { canonical: "https://www.trazo.io/for-farmers" },
  openGraph: {
    title: "Renewal without the paperwork pile",
    description:
      "Log the season on your phone. Trazo drafts your records section, the attachment workbooks and your inspection packet.",
    url: "./",
    // Next merges metadata SHALLOWLY: a page-level `openGraph` REPLACES the
    // root object rather than extending it, so omitting this dropped og:image
    // entirely and the page shared as a card with no picture at all.
    images: ["/images/og-renewal-2026-10.jpg"],
  },
};

export default function ForFarmersPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-[calc(var(--header-h,140px)+1.25rem)] pb-20">
        <article className="mx-auto max-w-3xl px-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            For farmers
          </p>
          <h1 className="mt-2 text-3xl font-bold text-foreground md:text-4xl">
            Renewal season without the paperwork pile
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            In USDA&apos;s 2021 Certified Organic Survey (NASS), 55% of
            organic farms named &ldquo;regulatory problems &mdash; excessive
            paperwork/record keeping, certification costs&rdquo; a major
            challenge, more than any other. Trazo&apos;s answer: log each
            activity once, in the field, and let the same record do every job
            it has to do.
          </p>

          <section className="mt-12 space-y-8">
            <div className="flex gap-4">
              <Mic className="mt-1 shrink-0 text-primary" size={22} />
              <div>
                <h2 className="text-lg font-bold text-foreground">
                  Log it the way you would say it
                </h2>
                <p className="mt-1 text-muted-foreground">
                  &ldquo;Applied 200 pounds of zinc sulfate on the north
                  block.&rdquo; Voice, templates, or a two-minute form — in
                  English or Spanish, on your phone, with the date, rate, and
                  parcel captured the way an inspector expects.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <CalendarCheck className="mt-1 shrink-0 text-primary" size={22} />
              <div>
                <h2 className="text-lg font-bold text-foreground">
                  Know where you stand before your certifier asks
                </h2>
                <p className="mt-1 text-muted-foreground">
                  Readiness checks read your records the way a reviewer would —
                  missing rates, gaps in land history, buffer questions left
                  open — and point you at the exact record to fix, with the
                  regulation cited.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <PackageCheck className="mt-1 shrink-0 text-primary" size={22} />
              <div>
                <h2 className="text-lg font-bold text-foreground">
                  Renewal becomes an export, not a weekend
                </h2>
                <p className="mt-1 text-muted-foreground">
                  Your per-parcel applications, audit PDF, Common OSP
                  workbooks and the annual update itself assemble from records
                  you already made, and your plan answers carry forward from
                  last year. Before you file, Trazo lists what changed in your
                  records since you wrote each answer &mdash; new ground, a
                  notice you sent the certifier, a material you added &mdash;
                  so the plan you send still describes the farm you run. You
                  review, confirm, and send.
                </p>
              </div>
            </div>
            {/* The buyer page had lived only in this page's <meta description> \u2014 invisible
                to a human reader. It stays last and stays qualified: driver #7, Segment B
                only (TRAZO-OCTOBER-2026-PLAN \u00a7 2), never the reason to sign up. */}
            <div className="flex gap-4">
              <QrCode className="mt-1 shrink-0 text-primary" size={22} />
              <div>
                <h2 className="text-lg font-bold text-foreground">
                  A page for your buyer &mdash; only if you want one
                </h2>
                <p className="mt-1 text-muted-foreground">
                  Finish a season and Trazo can build a public page from the
                  same records: the farm, the lot, the harvest date, the
                  practices you documented, and an estimate of that
                  season&apos;s emissions. Print the QR or a sheet
                  of lot tags for your cartons. One switch publishes a season
                  and the same switch unpublishes it &mdash; and your address
                  and coordinates never reach the page, which locates a new
                  parcel to about a kilometer rather than drawing your field.
                </p>
              </div>
            </div>
          </section>

          <div className="mt-14 rounded-2xl bg-primary/5 p-8 text-center">
            <h2 className="text-xl font-bold text-foreground">
              Free to start. $249 per farm per year when you need the packet.
            </h2>
            <p className="mx-auto mt-2 max-w-md text-muted-foreground">
              No card. Log your first week of work and see the records build.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button className="gap-2" asChild>
                <a href="https://app.trazo.io/auth/signup">
                  Start free
                  <ArrowRight size={16} />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/common-osp">What is the Common OSP?</Link>
              </Button>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
