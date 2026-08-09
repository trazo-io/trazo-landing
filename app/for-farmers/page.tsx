import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, CalendarCheck, Mic, PackageCheck } from "lucide-react";
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
    "Log each activity once, from the field, in English or Spanish. Trazo turns your log into certifier-ready records, your Organic System Plan draft, and a page your buyer can see.",
  alternates: { canonical: "https://www.trazo.io/for-farmers" },
};

export default function ForFarmersPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20">
        <article className="mx-auto max-w-3xl px-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            For farmers
          </p>
          <h1 className="mt-2 text-3xl font-bold text-foreground md:text-4xl">
            Renewal season without the paperwork pile
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            In USDA&apos;s 2021 Organic Survey (NASS), over half of organic
            farms named recordkeeping and paperwork among their top challenges. Trazo&apos;s
            answer: log each activity once, in the field, and let the same
            record do every job it has to do.
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
                  Your Organic System Plan modules, per-parcel applications,
                  audit PDF, and the Common OSP workbooks assemble from records
                  you already made. You review, confirm, and send — and next
                  season starts from this year&apos;s answers.
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
