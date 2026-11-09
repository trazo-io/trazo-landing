import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  ClipboardList,
  FileSpreadsheet,
  Layers,
  MessageSquare,
  Route,
  Timer,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

/**
 * Orchard page (2026-11-09). Written for the ICP: wholesale tree-fruit and nut operations,
 * Washington first (organic apples WA $601.8M vs CA $10.4M, USDA 2021 census). No Trazo page
 * ranked for any orchard search on 2026-11-09 (Croptracker, Pomona and spray-diary apps did).
 *
 * Every claim below was checked against code on 2026-11-09. Keep it that way:
 * - "14 of the 33 crops": `_get_crop_type_data()` in trazo-back `populate_usda_crop_types.py`
 *   (Apples, Pears, Stone Fruit, Citrus, Avocados, Olives, Figs, Dates, Pomegranates, Walnuts,
 *   Almonds, Pecans, Hazelnuts, Pistachios). Grapes are a vine and are NOT counted.
 * - Spray fields: trazo-app `src/config/events` chemical event (epa_registration_number,
 *   target_pest_disease, rei_hours, phi_days, applicator_name).
 * - One entry, several blocks: `CommonEvent.application_group`, one record per parcel
 *   (back #190-#215 / app #168-#190).
 * - Pick inside the PHI: `history/services/phi_check.py` (back #301), a harvest on the same
 *   production sooner than a spray's RECORDED PHI. It is a notice on save and a readiness row,
 *   never a verdict that the fruit is unsafe.
 * - WSDA AGR 2196 workbook: back #294, ships in the renewal packet, which is the Compliance plan.
 * - Crew messages: the confirm clause is mandatory (the person at the desk saves it under their
 *   own name, 7 CFR 205.201(a)). Never "their own language": English or Spanish only.
 * - NEVER claim a per-block variety / planting-year / bearing table: not built (planned).
 *   NEVER claim restricted-use material handling (WSDA D4-6, H5): biggest open orchard gap.
 */

export const metadata: Metadata = {
  title: "Organic Orchard Recordkeeping Software | Trazo",
  description:
    "Spray records with REI and PHI, one entry for every block it covered, picks checked against the PHI you recorded, and your WSDA renewal packet built from them.",
  alternates: { canonical: "https://www.trazo.io/for-orchards" },
  openGraph: {
    title: "Organic recordkeeping for orchards",
    description:
      "Log each spray once across the blocks it covered. Trazo keeps the record an inspector reads and prepares your renewal packet from it.",
    url: "./",
    // Page-level openGraph REPLACES the root object (shallow merge), so the image is restated.
    images: ["/images/og-renewal-2026-10.jpg"],
  },
};

export default function ForOrchardsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-[calc(var(--header-h,140px)+1.25rem)] pb-20">
        <article className="mx-auto max-w-3xl px-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            For orchards
          </p>
          <h1 className="mt-2 text-3xl font-bold text-foreground md:text-4xl">
            Organic recordkeeping for orchards
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            An orchard season is mostly sprays, blocks and picks, and the
            inspection comes down to tracing them: which product went on which
            block, how long before the fruit came off, and which bin went to
            which packer. Trazo is set up for that. Apples, pears, stone
            fruit, citrus, walnuts, almonds and the other tree crops are 14
            of the 33 crops it sets up a season for.
          </p>

          <section className="mt-12 space-y-8">
            <div className="flex gap-4">
              <Layers className="mt-1 shrink-0 text-primary" size={22} />
              <div>
                <h2 className="text-lg font-bold text-foreground">
                  One spray, every block it went on
                </h2>
                <p className="mt-1 text-muted-foreground">
                  The sprayer covered six blocks this morning. Log it once and
                  pick the blocks, on a list or on the map. Trazo saves a
                  record on each block, so when the inspector opens block 4
                  its history is complete without anyone cross-referencing a
                  spray log.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <ClipboardList className="mt-1 shrink-0 text-primary" size={22} />
              <div>
                <h2 className="text-lg font-bold text-foreground">
                  The spray record an inspector reads
                </h2>
                <p className="mt-1 text-muted-foreground">
                  Product, EPA registration number, rate, target pest,
                  re-entry and pre-harvest intervals, and who applied it. The
                  material is checked against the National List (7 CFR
                  205.601&ndash;.602) when you save, and recorded with the
                  basis you give it, such as OMRI Listed or WSDA Listed.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Timer className="mt-1 shrink-0 text-primary" size={22} />
              <div>
                <h2 className="text-lg font-bold text-foreground">
                  Picks checked against the pre-harvest interval
                </h2>
                <p className="mt-1 text-muted-foreground">
                  If you log a pick on a block sooner than the pre-harvest
                  interval recorded on one of its sprays, Trazo tells you when
                  you save, and the readiness check lists it. It is arithmetic on your own dates, so you catch a typo
                  or a real problem before an inspector or a buyer does.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Route className="mt-1 shrink-0 text-primary" size={22} />
              <div>
                <h2 className="text-lg font-bold text-foreground">
                  From the packer&apos;s receipt back to the block
                </h2>
                <p className="mt-1 text-muted-foreground">
                  Type the packer&apos;s receipt number and the sale opens,
                  walked back to the picks, the block and every input that
                  went on it that season. A supplier recalls a lot of compost
                  or spray: its lot number lists the sales from each season it
                  went on. It is the same trace-back an inspector runs, on
                  every plan, Starter included.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <MessageSquare className="mt-1 shrink-0 text-primary" size={22} />
              <div>
                <h2 className="text-lg font-bold text-foreground">
                  Your crew sends it from the rows
                </h2>
                <p className="mt-1 text-muted-foreground">
                  A crew member messages your Trazo number over WhatsApp, by
                  text or voice note, in English or Spanish. No account and
                  no app for them. It arrives in a queue on your side as a
                  suggestion with nothing written yet: you pick the activity,
                  answer the date, and save it under your own name.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <FileSpreadsheet className="mt-1 shrink-0 text-primary" size={22} />
              <div>
                <h2 className="text-lg font-bold text-foreground">
                  Renewal from the records you already kept
                </h2>
                <p className="mt-1 text-muted-foreground">
                  WSDA renewals are due March 1. If WSDA certifies you, the
                  renewal packet includes its Input Material List (AGR 2196)
                  as a spreadsheet, filled from your plan and records, along
                  with the audit PDF and the Common OSP workbooks. In
                  California, the pesticide use report (PUR) export is
                  compiled from the same sprays. You review, sign and send.
                  Your certifier&apos;s other requirements are yours to
                  supply.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-12 rounded-xl border border-border p-6">
            <h2 className="text-lg font-bold text-foreground">
              What it does not do yet
            </h2>
            <p className="mt-1 text-muted-foreground">
              Trazo does not keep a per-block table of variety, planting year
              and bearing status yet, so on the renewal forms that ask for
              acreage by crop you split it yourself. It is not an orchard
              management system either: no payroll and no yield forecasting.
              It keeps the organic record and prepares the
              paperwork from it.
            </p>
          </section>

          <div className="mt-14 rounded-2xl bg-primary/5 p-8 text-center">
            <h2 className="text-xl font-bold text-foreground">
              Free to start. $249 per farm per year when you need the packet.
            </h2>
            <p className="mx-auto mt-2 max-w-md text-muted-foreground">
              No card. Running several ranches? The Operation plan is
              $1,200 a year for all of them.
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
