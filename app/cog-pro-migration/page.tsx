import Link from "next/link";
import type { Metadata } from "next";
import { AlertTriangle, ArrowRight, Check, Download, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CogProMigrationSteps } from "@/components/cog-pro-migration-steps";

/**
 * COG Pro migration guide.
 *
 * COG Pro's own signup page states the Notebook stops service on December 31, 2026 and that they
 * are not accepting new subscriptions. That makes every COG Pro subscriber a forced migration
 * during Oct–Dec 2026 — the same weeks certifier renewal packets go out.
 *
 * This page is deliberately written as a USEFUL ARTIFACT rather than a pitch: the first and most
 * important instruction (export your data before the service ends) is correct advice no matter
 * where a grower goes next, and the alternatives section names competitors honestly. A grower
 * arriving here is dealing with a vendor shutdown; being the page that actually helps is worth
 * more than the page that converts hardest.
 *
 * Compliance notes (.claude/rules/compliance.md):
 *   - What the page says about COG Pro is quoted from their own site, with a link, with two
 *     exceptions. Their support team answered two questions by email on 2026-11-01: export keeps
 *     working through Dec 31, and GAP Pro goes offline at the same time. We asked so we would not
 *     tell growers anything wrong. Neither fact is on cog-pro.com (checked 2026-11-01), so the
 *     page attributes both to that email, never to the site. They did NOT say GAP Pro export
 *     keeps working, so the page says "export or print" for GAP and promises nothing about it.
 *   - No price-outcome promises, no "verified" claims, no implied third-party endorsement.
 *   - Livestock and GAP are conceded explicitly — Trazo does not do them, and a grower who
 *     needs them should not migrate here expecting them.
 */

export const metadata: Metadata = {
  // 2026-10-08: leads with "COG Pro Alternative", the phrase a displaced subscriber types.
  // COG Pro still ranks #2 for "organic certification software"; its searchers need a
  // landing place before Dec 31.
  title: "COG Pro Alternative: Move Your Records by Dec 31 | Trazo",
  description:
    "COG Pro stops service December 31, 2026. Export your records before the deadline, compare COG Pro alternatives, and let Trazo import your data free.",
  alternates: { canonical: "https://www.trazo.io/cog-pro-migration" },
  openGraph: {
    title: "COG Pro is closing December 31, 2026",
    description:
      "A migration checklist for organic growers, and a free import of your COG Pro CSV export, your spreadsheet or your binder photos into Trazo.",
    url: "./",
    // Next merges metadata SHALLOWLY: a page-level `openGraph` REPLACES the
    // root object rather than extending it, so omitting this dropped og:image
    // entirely and the page shared as a card with no picture at all.
    images: ["/images/og-renewal-2026-10.jpg"],
  },
};

const trazoDoes = [
  "Crop recordkeeping: planting, harvest, inputs, cultivation, tillage, compost, equipment cleaning",
  "NOP audit PDF with inline 7 CFR Part 205 citations",
  "A link your certifier opens to review records online, with your permission",
  "Organic System Plan (7 CFR 205.201), including the Common OSP § 11 records section and its " +
    "four required attachment forms as Excel workbooks, filled in from your records",
  "Input checks against OMRI, WSDA, CDFA OIM and the National List",
  "California Pesticide Use Report data, compiled from the events you already logged",
  "Phone-first logging with voice entry, in English and Spanish",
  "A public page your buyer can open from a QR code on the box",
];

const trazoDoesNot = [
  "Livestock records: COG Pro's livestock module has no equivalent here",
  "GAP / food-safety audits: if you bought COG Pro's GAP module, Trazo does not replace it",
  "Handler or processor certification scopes",
  "Filing your PUR for you: Trazo compiles the data; you submit it in CalAgPermits",
];

export default function CogProMigrationPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-[calc(var(--header-h,140px)+1.25rem)] pb-20">
        <article className="mx-auto max-w-3xl px-6">
          {/* Hero */}
          <header className="mb-12">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-3 py-1 text-sm font-medium text-amber-700 dark:text-amber-400">
              <AlertTriangle className="h-4 w-4" aria-hidden="true" />
              Deadline: December 31, 2026
            </div>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              COG Pro is closing. Here is how to move your organic records.
            </h1>
            <p className="mt-5 text-lg leading-[1.8] text-muted-foreground">
              If you keep your organic records in COG Pro, you need to export
              them before the end of the year. This guide explains what was
              announced, what to do first, and how to choose a replacement,
              including the parts Trazo does not cover.
            </p>
          </header>

          <div className="prose-custom space-y-12 text-foreground/80">
            {/* What was announced */}
            <section>
              <h2 className="text-2xl font-bold text-foreground">
                What COG Pro announced
              </h2>
              <p className="mt-3 leading-[1.8]">
                COG Pro&apos;s own signup page states that they are no longer
                accepting new subscriptions, and that:
              </p>
              <blockquote className="mt-4 border-l-4 border-primary/60 bg-secondary/40 px-5 py-4 text-foreground">
                <p className="leading-[1.8]">
                  &ldquo;The COG Pro Notebook will cease service on December 31,
                  2026&rdquo;
                </p>
              </blockquote>
              <p className="mt-3 leading-[1.8]">
                They attribute the closure to actions by their web hosting
                provider. We are not affiliated with COG Pro and have no inside
                knowledge of their plans. The quote above is from{" "}
                <a
                  href="https://cog-pro.com/signup.html"
                  className="font-medium text-primary underline underline-offset-4"
                  rel="nofollow noopener noreferrer"
                  target="_blank"
                >
                  their signup page
                </a>
                . Check it yourself before making decisions.
              </p>
              <p className="mt-3 leading-[1.8]">
                We also asked COG Pro two questions directly. Their support team
                answered by email on November 1, 2026: the export functions keep
                working through December 31, and GAP Pro, their food-safety
                recordkeeping, goes offline at the same time. Neither point
                appears on their website, so read it as their answer to us, not
                a public notice.
              </p>
            </section>

            {/* Step 1 */}
            <section>
              <h2 className="text-2xl font-bold text-foreground">
                First: export your records, wherever you go next
              </h2>
              <p className="mt-3 leading-[1.8]">
                Do this before you decide anything else. Once a service stops,
                your history may stop being reachable, and{" "}
                <strong className="text-foreground">
                  7 CFR 205.103(b)(4) requires you to keep records for five
                  years
                </strong>
                . Your certifier can ask for them in an inspection covering
                years you can no longer open.
              </p>
              <div className="mt-5 rounded-xl border border-border bg-secondary/30 p-6">
                <div className="flex items-start gap-3">
                  <Download
                    className="mt-1 h-5 w-5 flex-shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-semibold text-foreground">
                      Export everything to CSV
                    </p>
                    <p className="mt-2 leading-[1.8]">
                      COG Pro&apos;s reports support an Export option that
                      downloads your records as CSV files. Export every year you
                      have, not just the current one, and keep the files
                      somewhere you control: your own drive, not a
                      vendor&apos;s. Save the generated PDFs of your past
                      regulatory reports too; they are the version your
                      inspector already saw.
                    </p>
                    <p className="mt-2 leading-[1.8]">
                      COG Pro told us export keeps working through December 31.
                      Do it now anyway, while there is still time to fix a file
                      that comes out wrong. If you used GAP Pro, export or print
                      those records as well: it goes offline the same day.
                    </p>
                  </div>
                </div>
              </div>
              <p className="mt-4 leading-[1.8]">
                This advice stands whether you move to Trazo, to another tool,
                or back to a binder. Get your data out first. The{" "}
                <Link
                  href="/blog/cog-pro-shutting-down-migration-guide"
                  className="font-medium text-primary underline underline-offset-4"
                >
                  full migration checklist
                </Link>{" "}
                covers field mapping and the questions to ask any vendor.
              </p>
            </section>

            {/* The timing */}
            <section>
              <h2 className="text-2xl font-bold text-foreground">
                Why the timing is awkward
              </h2>
              <p className="mt-3 leading-[1.8]">
                The shutdown lands in the middle of certifier renewal season,
                which is the worst possible overlap:
              </p>
              <ul className="mt-4 space-y-3 leading-[1.8]">
                <li>
                  <strong className="text-foreground">Early November</strong>:
                  renewal packets and annual-update forms go out. CCOF sent its
                  renewal packages on November 3 last year; Oregon Tilth posts
                  renewal forms at the start of November.
                </li>
                <li>
                  <strong className="text-foreground">December 31</strong>: COG
                  Pro stops. The same day the USDA Organic Certification Cost
                  Share Program (OCCSP) application deadline falls, for
                  reimbursement of up to 75% of your certification costs, capped
                  at $750 per scope.
                </li>
                <li>
                  <strong className="text-foreground">January–March</strong>:
                  annual updates are due. CCOF January 1, PCO January 15, WSDA
                  March 1.
                </li>
              </ul>
              <p className="mt-4 leading-[1.8]">
                Practically: if you are going to move, moving in October or
                November is much easier than moving in January with a deadline
                on top of you.
              </p>
            </section>

            {/* Choosing */}
            <section>
              <h2 className="text-2xl font-bold text-foreground">
                Choosing a COG Pro alternative
              </h2>
              <p className="mt-3 leading-[1.8]">
                Be honest about which COG Pro modules you actually used, because
                that decides your options:
              </p>
              <ul className="mt-4 space-y-3 leading-[1.8]">
                <li>
                  <strong className="text-foreground">Crops only</strong>: you
                  have the most choices, Trazo among them.
                </li>
                <li>
                  <strong className="text-foreground">Crops + Livestock</strong>:
                  Trazo does not do livestock. Look at Quick Organics or ask
                  your certifier what their other clients use.
                </li>
                <li>
                  <strong className="text-foreground">Crops + GAP</strong>: GAP
                  is food safety, not organic certification, and it is a
                  separate audit. Trazo does not replace a GAP module, and GAP
                  Pro closes on December 31 too, so those records need their own
                  new home.
                </li>
              </ul>
              <p className="mt-4 leading-[1.8]">
                It is also worth asking your certifier directly. Some certifiers
                provide or subsidize a recordkeeping tool for their own clients,
                which may be the cheapest path for you regardless of what we
                would prefer.
              </p>
            </section>

            {/* What Trazo does / doesn't */}
            <section>
              <h2 className="text-2xl font-bold text-foreground">
                If you are considering Trazo
              </h2>
              <p className="mt-3 leading-[1.8]">
                Here is the plain version, both halves.
              </p>

              <div className="mt-5 rounded-xl border border-border p-6">
                <p className="font-semibold text-foreground">What Trazo does</p>
                <ul className="mt-3 space-y-2">
                  {trazoDoes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 leading-[1.7]"
                    >
                      <Check
                        className="mt-1 h-4 w-4 flex-shrink-0 text-primary"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 rounded-xl border border-border p-6">
                <p className="font-semibold text-foreground">
                  What Trazo does not do
                </p>
                <ul className="mt-3 space-y-2">
                  {trazoDoesNot.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 leading-[1.7]"
                    >
                      <X
                        className="mt-1 h-4 w-4 flex-shrink-0 text-muted-foreground"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm leading-[1.7] text-muted-foreground">
                  Trazo is a recordkeeping and documentation tool. It does not
                  certify farms, and using it does not guarantee any
                  certification outcome; your certifier makes every compliance
                  determination.
                </p>
              </div>
            </section>

            {/* The offer */}
            <section>
              <h2 className="text-2xl font-bold text-foreground">
                We will move your data for you
              </h2>
              <p className="mt-3 leading-[1.8]">
                Send us your COG Pro CSV export, your spreadsheet, or photos of
                your binder pages, and we will load them into a Trazo account
                for you, free, and without a card on file. You get a preview of
                what would be loaded before anything is saved, then you look at
                your own records in the new system and decide from there. If
                you decide against it, you keep your files and we delete the
                account on request.
              </p>
              <p className="mt-3 leading-[1.8]">
                {/* ⚠️ 2026-09-08. The comment here used to forbid promising an export, on the
                    grounds that "Starter has no export at all" — true when written, false since
                    2026-08-25, when the free ungated records export shipped
                    (`.../records-export/`, pinned by `test_no_compliance_gate_in_the_view`).
                    The retraction outlived the limitation it described, so the page aimed
                    squarely at people who just lost a vendor was still volunteering that their
                    records could get stuck here. That is the opposite of this page's job.

                    The line that must NOT come back is the old conflation: "everything exports
                    back out as CSV" covering the certifier ARTEFACTS too. Raw records are free;
                    the audit dossier, OSP renewal packet and PUR export are Compliance. State
                    both halves, never one. */}
                The Starter plan is free permanently, not a trial that expires,
                and you can log a whole season on it. Loading your records
                costs nothing, whatever shape they are in. And leaving is not a
                favour you have to ask
                us for: on every plan, including the free one, one click in
                Documents downloads a ZIP of plain CSV files with every activity
                record, production, parcel and sale in your account. The
                certifier documents built from those records (audit dossier,
                OSP renewal packet, PUR export) are the part that is
                Compliance.
              </p>
              <CogProMigrationSteps className="mt-6" />
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/contact?topic=cog-pro-migration">
                    Send us your records
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/pricing">See what it costs</Link>
                </Button>
              </div>
            </section>

            <section className="rounded-xl border border-border bg-secondary/30 p-6">
              <p className="text-sm leading-[1.8] text-muted-foreground">
                Trazo is not affiliated with, endorsed by, or connected to COG
                Pro or Certified Organic Business Solutions. Statements about
                COG Pro on this page are quoted from their public website
                (rechecked November 1, 2026), except the two points their
                support team gave us by email that day, which are marked as
                such above. Either may change; verify directly with them.
                Certifier deadlines are as published by each certifier and can
                differ for your operation; confirm yours with your certifier.
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
