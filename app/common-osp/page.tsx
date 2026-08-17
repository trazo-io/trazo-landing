import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, BookOpen, FileText, Layers } from "lucide-react";
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
 */

export const metadata: Metadata = {
  title: "The Common Organic System Plan, explained | Trazo",
  description:
    "What the USDA-supported Common OSP is, which certifiers use it, what its grower modules ask, and how to prepare your answers from records you already keep.",
  alternates: { canonical: "https://www.trazo.io/common-osp" },
  openGraph: {
    title: "The Common Organic System Plan, explained",
    description:
      "What the USDA-supported Common OSP template set is, what it changes for growers, and how to ask your certifier about it.",
    url: "./",
    // Next merges metadata SHALLOWLY: a page-level `openGraph` REPLACES the
    // root object rather than extending it, so omitting this dropped og:image
    // entirely and the page shared as a card with no picture at all.
    images: ["/images/og-image.jpg"],
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
      <main className="pt-32 pb-20">
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
            standardizes those forms, so a grower answers one set of questions
            regardless of certifier.
          </p>

          <section className="mt-12">
            <h2 className="flex items-center gap-2 text-xl font-bold text-foreground">
              <BookOpen className="text-primary" size={20} />
              What it is
            </h2>
            <p className="mt-3 text-muted-foreground">
              A shared template for the OSP, developed with accredited
              certifiers. It splits the plan into lettered grower modules — each
              one covers a topic the rule requires your plan to describe, from
              seed sourcing to recordkeeping. Certifiers adopting it accept the
              same answers, which makes switching certifiers and renewing less
              painful.
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
              list, a materials list, and a supplier list — published as
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
              structure — the G-series section codes, the record-keeping
              checklist with its verbatim record types, and the four attachment
              workbooks. The Common OSP is a public USDA template, not anyone&apos;s
              proprietary software, and any tool can and should align to it.
            </p>
            <p className="mt-3 text-muted-foreground">
              Trazo walks you through each module as a guided questionnaire in
              English or Spanish, suggests answers from the activity records you
              already keep — with the evidence named, for you to confirm or edit
              — and assembles the result into one renewal packet: module PDFs,
              per-parcel applications, workbooks. You review and confirm every
              answer: the plan is yours, Trazo just makes sure nothing is
              missing when your certifier asks.
            </p>
          </section>

          <div className="mt-14 rounded-2xl bg-primary/5 p-8 text-center">
            <h2 className="text-xl font-bold text-foreground">
              See your own OSP take shape
            </h2>
            <p className="mx-auto mt-2 max-w-md text-muted-foreground">
              The Starter plan is free — log a week of work and open the module
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
