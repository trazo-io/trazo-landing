import type { Metadata } from "next";
import { ArrowRight, FileCheck, Link2, ShieldCheck } from "lucide-react";
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
    "Clients arrive with dated activity records, per-parcel applications, purchase records with the receipt file attached, Common OSP module answers and an online review link, organized as your checklist reads.",
  alternates: { canonical: "https://www.trazo.io/for-certifiers" },
  openGraph: {
    title: "Trazo for organic certifiers and reviewers",
    description:
      "How Trazo compiles a grower's records into reviewable artifacts, with every readiness check traced to its CFR section.",
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
      <main className="pt-32 pb-20">
        <article className="mx-auto max-w-3xl px-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            For certifiers &amp; reviewers
          </p>
          <h1 className="mt-2 text-3xl font-bold text-foreground md:text-4xl">
            Client files you can actually trace
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            When a client keeps records in Trazo, what reaches your desk is
            dated, parcel-linked, and organized the way your checklist reads —
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
                  A live review link — not an exported snapshot
                </h2>
                <p className="mt-1 text-muted-foreground">
                  Most tools hand you a document package that was true the day
                  it was exported. Clients on Trazo can share a read-only link
                  that opens their records in the browser as they stand today —
                  activity log, inputs with National List and OMRI/WSDA
                  cross-references, and the documents shelf — no account
                  required on your side. Ask a follow-up in March and look at
                  March&apos;s records, not November&apos;s PDF.
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
                  Every input application carries product, rate, area, and
                  applicator; harvests carry quantity and destination; equipment
                  shared with conventional ground links to the cleaning that
                  preceded the pass. The trail from lot to field is a click, not
                  a phone call.
                </p>
              </div>
            </div>
          </section>

          <div className="mt-14 rounded-2xl bg-primary/5 p-8 text-center">
            <h2 className="text-xl font-bold text-foreground">
              Reviewing a Trazo client — or want a walkthrough?
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
