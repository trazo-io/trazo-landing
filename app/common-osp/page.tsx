import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, BookOpen, Building2, FileText, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

/**
 * Common OSP explainer hub (plan #66).
 *
 * The USDA-supported "Common Organic System Plan" standardizes the OSP forms
 * certifiers use. Growers searching for it get an explainer that answers the
 * actual question ("what is this, does my certifier use it, what do I fill
 * in") before it mentions Trazo at all — same useful-artifact posture as the
 * COG Pro migration page.
 *
 * Compliance notes (.claude/rules/compliance.md):
 *   - The Common OSP is a USDA/ACA initiative — described factually, no
 *     implied endorsement of Trazo.
 *   - Trazo produces DRAFTS and readiness checks the operator reviews; the
 *     operator authors their OSP (7 CFR 205.201(a)). Never "fills itself".
 *   - Adoption is certifier by certifier (overall review 2026-11, OV-CLM-C01). Until 2026-11-16
 *     this page said a grower "answers one set of questions regardless of certifier" and its
 *     description promised "which certifiers use it" while naming none. Name an adopter only
 *     from that certifier's own published words, with the link and the date. Checked 2026-11-16:
 *     CCOF's news post of 2026-07-14 says it is not moving to the Common OSP; WSDA's forms page
 *     lists its own plan forms and does not mention it. Oregon Tilth: not checked, so not named.
 */

export const metadata: Metadata = {
  title: "The Common Organic System Plan, explained | Trazo",
  description:
    "What the USDA-supported Common OSP is, how to tell whether your certifier uses it, what its grower modules ask, and how to prepare from the records you keep.",
  alternates: { canonical: "https://www.trazo.io/common-osp" },
  openGraph: {
    title: "The Common Organic System Plan, explained",
    description:
      "What the USDA-supported Common OSP template set is, what it changes for growers, and how to ask your certifier about it.",
    url: "./",
    // Next merges metadata SHALLOWLY: a page-level `openGraph` REPLACES the
    // root object rather than extending it, so omitting this dropped og:image
    // entirely and the page shared as a card with no picture at all.
    images: ["/images/og-renewal-2026-10.jpg"],
  },
};

const modules = [
  ["G3.0 Seeds & Planting Stock", "What you plant, organic seed sourcing, treatments"],
  ["G4.0 Crop Rotation & Soil", "Rotation plan, fertility practices, tillage, monitoring"],
  ["G4.1 Compost & Manure", "Raw manure intervals, compost method and records"],
  ["G4.2 Natural Resources", "Soil, water, and biodiversity conservation"],
  ["G5.0 Pest, Weed & Disease", "Prevention first, then allowed materials, monitoring"],
  ["G6.x Production & Handling", "Buffers, drift, harvest, transport, storage"],
  ["G7.0 Labeling", "How 'organic' appears on packaging and sales documents"],
  ["G8.0 Record Keeping", "Which records you keep and how an auditor traces a lot"],
];

export default function CommonOspPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-[calc(var(--header-h,140px)+1.25rem)] pb-20">
        <article className="mx-auto max-w-3xl px-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Explainer
          </p>
          <h1 className="mt-2 text-3xl font-bold text-foreground md:text-4xl">
            The Common Organic System Plan, explained
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Every certified operation must keep an Organic System Plan
            (7&nbsp;CFR&nbsp;205.201). Historically, every certifier asked for it
            on different forms. The USDA-supported <strong>Common OSP</strong>{" "}
            is one shared set of those forms. Each certifier decides whether to
            use it, so whether one set of answers carries from one certifier to
            another depends on yours.
          </p>

          <section className="mt-12">
            <h2 className="flex items-center gap-2 text-xl font-bold text-foreground">
              <BookOpen className="text-primary" size={20} />
              What it is
            </h2>
            <p className="mt-3 text-muted-foreground">
              A shared template for the OSP, developed with accredited
              certifiers. It splits the plan into lettered grower modules. Each
              one covers a topic the rule requires your plan to describe, from
              seed sourcing to recordkeeping. Where certifiers adopt it, the same
              answers serve each of them, which makes switching certifiers and
              renewing less painful.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="flex items-center gap-2 text-xl font-bold text-foreground">
              <Building2 className="text-primary" size={20} />
              Does my certifier use it?
            </h2>
            <p className="mt-3 text-muted-foreground">
              Ask your certifier. Adoption is voluntary and decided by each one,
              and what we could check in November 2026 is mixed. CCOF said in
              July 2026 that it is not moving to the Common OSP (
              <a
                href="https://www.ccof.org/news/ccof-is-streamlining-certification-with-care/"
                className="text-primary underline underline-offset-2"
                rel="noopener noreferrer"
                target="_blank"
              >
                CCOF news, July 14, 2026
              </a>
              ). The Washington State Department of Agriculture keeps a living
              plan on its own forms, updated section by section, and its forms
              page does not mention the Common OSP. If your certifier has its
              own forms, those are what you file.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="flex items-center gap-2 text-xl font-bold text-foreground">
              <Layers className="text-primary" size={20} />
              The grower modules
            </h2>
            <div className="mt-4 overflow-hidden rounded-2xl border border-border">
              <table className="w-full text-left text-sm">
                <tbody className="divide-y divide-border">
                  {modules.map(([name, what]) => (
                    <tr key={name}>
                      <td className="px-4 py-3 font-medium text-foreground">{name}</td>
                      <td className="px-4 py-3 text-muted-foreground">{what}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Plus required attachments: field and crop information, a product
              list, a materials list, and a supplier list, published as
              workbooks you complete.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="flex items-center gap-2 text-xl font-bold text-foreground">
              <FileText className="text-primary" size={20} />
              How Trazo helps
            </h2>
            <p className="mt-3 text-muted-foreground">
              Trazo&apos;s guided modules follow the Common OSP&apos;s own
              structure: the G-series section codes, the record-keeping
              checklist with its verbatim record types, and the four attachment
              workbooks. The Common OSP is a public USDA template, not anyone&apos;s
              proprietary software, and any tool can and should align to it.
            </p>
            <p className="mt-3 text-muted-foreground">
              Trazo walks you through each module as a guided questionnaire in
              English or Spanish, suggests answers from the activity records you
              already keep (with the evidence named, for you to confirm or
              edit) and puts what you confirmed into one renewal packet: module
              PDFs, per-parcel applications, workbooks. You review and confirm
              every answer: the plan is yours. Trazo shows which questions are
              still open and which records sit behind the ones you answered.
              Where your certifier files on its own forms, the packet is what you
              copy from and its forms are what you send. Anything else your
              certifier asks for is yours to supply.
            </p>
          </section>

          <div className="mt-14 rounded-2xl bg-primary/5 p-8 text-center">
            <h2 className="text-xl font-bold text-foreground">
              See your own OSP take shape
            </h2>
            <p className="mx-auto mt-2 max-w-md text-muted-foreground">
              The Starter plan is free. Log a week of work and open the module
              list.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button className="gap-2" asChild>
                <a href="https://app.trazo.io/auth/signup">
                  Start free
                  <ArrowRight size={16} />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/pricing">See pricing</Link>
              </Button>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
