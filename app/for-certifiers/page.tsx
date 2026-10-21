import type { Metadata } from "next";
import { ArrowRight, FileCheck, Link2, Route, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

/**
 * Certifier persona page (plan #65).
 *
 * Compliance notes: Trazo runs READINESS CHECKS the operator acts on — never
 * "findings", never anything implying Trazo performs the certifier's review
 * (§ 205.201(a): the operator authors the plan; the certifier evaluates it).
 * The review link is permissioned by the operator.
 */

export const metadata: Metadata = {
  title: "Trazo for organic certifiers and reviewers",
  description:
    "Clients arrive with dated activity records, per-parcel applications, purchase records with receipts and an online review link, in your checklist's order.",
  alternates: { canonical: "https://www.trazo.io/for-certifiers" },
  openGraph: {
    title: "Trazo for organic certifiers and reviewers",
    description:
      "How Trazo compiles a grower's records into reviewable artifacts, with each readiness check citing the CFR section it relates to.",
    url: "./",
    // Next merges metadata SHALLOWLY: a page-level `openGraph` REPLACES the
    // root object rather than extending it, so omitting this dropped og:image
    // entirely and the page shared as a card with no picture at all.
    images: ["/images/og-renewal-2026-10.jpg"],
  },
};

export default function ForCertifiersPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-[calc(var(--header-h,140px)+1.25rem)] pb-20">
        <article className="mx-auto max-w-3xl px-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            For certifiers &amp; reviewers
          </p>
          <h1 className="mt-2 text-3xl font-bold text-foreground md:text-4xl">
            Client files you can actually trace
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            When a client keeps records in Trazo, what reaches your desk is
            dated, parcel-linked, and organized the way your checklist reads,
            authored and confirmed by the operator, as the rule requires.
          </p>

          <section className="mt-12 space-y-8">
            <div className="flex gap-4">
              <FileCheck className="mt-1 shrink-0 text-primary" size={22} />
              <div>
                <h2 className="text-lg font-bold text-foreground">
                  A packet that follows the Common OSP
                </h2>
                <p className="mt-1 text-muted-foreground">
                  Module answers mapped to 7&nbsp;CFR&nbsp;205.201(a), the § 205.406 annual update and
                  the § 205.400(f) notices filed during the year, one parcel application per field
                  (location, land history compiled from the seasons logged, buffers, incidents, map),
                  the four attachment workbooks, and an audit PDF with inline Part&nbsp;205 citations.
                  N/A topics carry an explicit operator attestation instead of silence.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Link2 className="mt-1 shrink-0 text-primary" size={22} />
              <div>
                <h2 className="text-lg font-bold text-foreground">
                  A live review link, not an exported snapshot
                </h2>
                <p className="mt-1 text-muted-foreground">
                  Most tools hand you a document package that was true the day
                  it was exported. Clients on Trazo can share a read-only link
                  that opens their records in the browser as they stand today:
                  activity log, inputs with National List and OMRI/WSDA
                  cross-references, and the documents shelf. No account is
                  required on your side. Ask a follow-up in March and look at
                  March&apos;s records, not November&apos;s PDF.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Route className="mt-1 shrink-0 text-primary" size={22} />
              <div>
                <h2 className="text-lg font-bold text-foreground">
                  Run your own trace-back from the review link
                </h2>
                {/* 2026-10-21: back #194 / app #169. Scope, logging and file access below are
                    what the anonymous route enforces (certifications/views.py,
                    certifier_review_traceback*): this link's farm and period only, every
                    request on the link's activity, a file only when the link shares source
                    files. Missing links are facts on this surface, never fix-it advice. */}
                <p className="mt-1 text-muted-foreground">
                  Type the invoice, bill of lading or lot code off a sales
                  document, or draw a recent sale at random, and follow it back
                  to the harvest picks, the season and every input applied, each
                  with its supplier, invoice and lot. A link the records do not
                  carry is stated as a fact. The trace covers only that
                  operation&apos;s sales inside the link&apos;s period, every
                  trace shows on the operation&apos;s link activity, and a file
                  behind a record opens only when the operation chose to share
                  its source files.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <ShieldCheck className="mt-1 shrink-0 text-primary" size={22} />
              <div>
                <h2 className="text-lg font-bold text-foreground">
                  Records that answer the follow-up question
                </h2>
                <p className="mt-1 text-muted-foreground">
                  Input applications record product, rate, area, and applicator,
                  and a field the grower left blank is listed as missing;
                  harvests record quantity and destination; equipment
                  shared with conventional ground links to the cleaning that
                  preceded the pass. The trail from lot to field is a click, not
                  a phone call.
                </p>
              </div>
            </div>
          </section>

          <div className="mt-14 rounded-2xl bg-primary/5 p-8 text-center">
            <h2 className="text-xl font-bold text-foreground">
              Reviewing a Trazo client, or want a walkthrough?
            </h2>
            <p className="mx-auto mt-2 max-w-md text-muted-foreground">
              We will show you exactly what your clients see and what you
              receive. Async, no sales call required.
            </p>
            <div className="mt-6 flex justify-center">
              <Button className="gap-2" asChild>
                <a href="mailto:info@trazo.io">
                  Email us
                  <ArrowRight size={16} />
                </a>
              </Button>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
