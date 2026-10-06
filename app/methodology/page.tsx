import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Methodology: records and readiness checks | Trazo",
  description:
    "How Trazo turns activity logs into certifier-ready records, runs documentation readiness checks and estimates emissions. CC BY 4.0.",
  openGraph: {
    title: "How Trazo's records and readiness checks work",
    description:
      "The rules behind Trazo's readiness checks, the emission factors it uses, and the limits of what it can claim.",
    url: "./",
    // Next merges metadata SHALLOWLY: a page-level `openGraph` REPLACES the
    // root object rather than extending it, so omitting this dropped og:image
    // entirely and the page shared as a card with no picture at all.
    images: ["/images/og-renewal-2026-10.jpg"],
  },
};

export default function MethodologyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-[calc(var(--header-h,140px)+1.25rem)] pb-20">
        <article className="mx-auto max-w-3xl px-6">
          <header className="mb-12 text-center">
            <p className="text-sm font-medium tracking-widest text-primary uppercase">
              Published Methodology
            </p>
            <h1 className="mt-3 text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              How Trazo&apos;s Records and Calculations Work
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              How field activity logs become certifier-ready records, how
              documentation readiness checks are computed, and how emissions
              are estimated, published openly for
              scrutiny and reproducibility.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Version 2.1 &middot; September 2026 &middot; License: CC BY 4.0
            </p>
          </header>

          <div className="prose-custom space-y-10 text-foreground/80">
            {/* Abstract */}
            <section className="rounded-xl border border-border bg-secondary/30 p-6">
              <h3 className="text-xl font-bold text-foreground">Abstract</h3>
              <p className="mt-3 leading-[1.8]">
                This document describes how Trazo works, in three parts. First,
                the <strong>records model</strong>: dated, parcel-linked
                activity records whose required fields follow 7&nbsp;CFR
                205.103, assembled into Organic System Plan modules that follow
                the Common OSP structure — authored and confirmed by the
                operator, as § 205.201(a) requires. Second,{" "}
                <strong>readiness checks</strong>: completeness measurements
                computed over those records — each one naming a specific
                document or record that is missing, never a grade.
                Third, the{" "}
                <strong>emission calculations</strong>: emissions from the
                operation&apos;s own activity — the fuel and electricity it burns
                — plus the manufacturing of the fertiliser and crop-protection
                products it buys, kept as background data for business reporting
                and not a consumer-facing claim. Factor sources differ by input
                and each one is stated with its own: fuel and electricity are
                EPA-published, nitrogen combines EPA and IPCC guideline values,
                crop-protection manufacturing comes from peer-reviewed LCA
                literature, and the phosphorus and potassium figures are
                Trazo&apos;s own conservative estimates where published values
                are sparse.
              </p>
              <p className="mt-3 leading-[1.8]">
                All records are farmer-reported and not independently audited;
                readiness checks are preparation aids for the operator, never
                certification findings — the certifier&apos;s review is the
                certifier&apos;s. This methodology is published to invite
                scrutiny and encourage reproducibility. It was developed by
                Trazo and has not undergone external peer review.
              </p>
            </section>

            {/* 1. The records model */}
            <section>
              <h3 className="text-xl font-bold text-foreground">
                1. The Records Model: One Entry, Two Outputs
              </h3>
              <p className="mt-3 leading-[1.8]">
                Trazo&apos;s unit of work is the{" "}
                <strong>activity record</strong>: a dated, parcel-linked entry —
                an input application, a harvest, an irrigation set, a cleanout —
                whose structured fields follow what 7&nbsp;CFR&nbsp;205.103
                recordkeeping asks an organic operation to retain: what was
                done, where, when, with what, by whom. Input applications record
                product, rate, area treated, and applicator; harvests record
                quantity, how the amount was determined, destination, and
                buffer-row disposition; equipment shared with conventional
                ground links to its cleanout log. A field left blank is listed
                as missing, never filled in.
              </p>
              <p className="mt-3 leading-[1.8]">
                The same records then serve two audiences without re-entry.{" "}
                <strong>For the certifier:</strong> records assemble into
                Organic System Plan modules that follow the Common OSP structure
                (§&nbsp;205.201(a)), per-parcel applications (§&nbsp;205.202),
                an audit PDF with inline Part&nbsp;205 citations, and a renewal
                packet. Where Trazo can derive a suggested answer from the
                season&apos;s records, it presents the suggestion{" "}
                <em>with its evidence named</em> — the operator confirms or
                edits every answer, because the operator authors the plan.{" "}
                <strong>For the buyer:</strong> the same records produce a
                scannable product page showing documented practices, photos, and
                third-party certifications — facts, never a self-assigned grade.
              </p>
              <p className="mt-3 leading-[1.8]">
                A design consequence worth stating: because Trazo measures{" "}
                <em>documentation completeness</em> rather than rating
                environmental impact, a farm is never penalized for logging
                more. More records mean a more complete file — for the
                inspector, and for the buyer.
              </p>
            </section>

            {/* 3. Anti-Gaming */}
            <section>
              <h3 className="text-xl font-bold text-foreground">
                2. Anti-Gaming Protections
              </h3>
              <p className="mt-3 leading-[1.8]">
                A record is only as credible as its resistance to manipulation.
                The following rules were implemented after a comprehensive gaming
                vector audit (March 2026):
              </p>
              <ul className="mt-3 list-disc space-y-3 pl-6 leading-[1.8]">
                <li>
                  <strong>USDA Organic certification check:</strong> organic
                  certification claims are cross-referenced against the USDA
                  Organic Integrity Database (36,000+ operations). A
                  certification reads &quot;Verified via USDA Organic Integrity
                  Database&quot; only when the database entry is confirmed for
                  the farm: its certificate or operation number matches, or a
                  single entry in its state carries exactly its name. A similar
                  name alone is shown as a possible match and the certification
                  stays &quot;Self-Reported&quot;. Either way this is a database
                  cross-reference, not an inspection. OMRI, WSDA and National
                  List lookups describe materials and never verify a farm.
                </li>
                <li>
                  <strong>Regional irrigation defaults:</strong> Irrigation
                  depth defaults are adjusted by state (e.g., 2.5&quot; for
                  Arizona vs. 1.0&quot; for humid eastern states) to prevent
                  underestimation in arid regions.
                </li>
              </ul>
            </section>

            {/* 4. Photos. Run 8 (R8-02): the penalty tiers and the "verification" framing
                described the retired score; a record either has a photo or it does not. */}
            <section>
              <h3 className="text-xl font-bold text-foreground">
                3. Photos on Records
              </h3>
              <p className="mt-3 leading-[1.8]">
                A record shows whether a photo is attached. Trazo does not
                grade records by their photos and does not confirm what a
                photo shows; photos are the farm&apos;s own evidence, for the
                certifier to weigh. The activity form suggests a photo where
                an inspector usually asks for one:
              </p>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="py-2 pr-4 text-left font-semibold text-foreground">
                        Tier
                      </th>
                      <th className="py-2 pr-4 text-left font-semibold text-foreground">
                        Events
                      </th>
                      <th className="py-2 text-left font-semibold text-foreground">
                        Without a photo
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border/50">
                      <td className="py-3 pr-4 font-medium">Essential</td>
                      <td className="py-3 pr-4">
                        Planting, Harvesting, all chemical applications, Cover
                        cropping, Beneficial insect release, Pest identification
                      </td>
                      <td className="py-3">The record says no photo is attached</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 pr-4 font-medium">Recommended</td>
                      <td className="py-3 pr-4">
                        Pruning, Transplanting, Cultivation, Soil testing,
                        Composting, Grazing, Scouting, Trap monitoring, IPM
                      </td>
                      <td className="py-3">The record says no photo is attached</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-medium">Not suggested</td>
                      <td className="py-3 pr-4">
                        Weather observations, General notes, Business records
                      </td>
                      <td className="py-3">Nothing is flagged</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 5. Carbon Calculation */}
            <section>
              <h3 className="text-xl font-bold text-foreground">
                4. Carbon Calculation Methodology
              </h3>
              <p className="mt-3 leading-[1.8]">
                Trazo estimates <strong>the operation&apos;s own emissions plus
                the manufacturing of the fertilizer and chemicals it buys</strong>.
                The second half happens off the farm, before purchase, and is
                counted because the farmer chooses the input and the rate. This
                is not a full Life Cycle Assessment (LCA): fertilizer transport,
                equipment manufacturing, infrastructure, distribution, retail
                and end-of-life are excluded.
              </p>

              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="py-2 pr-4 text-left font-semibold text-foreground">
                        Included
                      </th>
                      <th className="py-2 text-left font-semibold text-foreground">
                        Excluded
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border/50">
                      <td className="py-2 pr-4">
                        Fuel combustion (tractors, pumps)
                      </td>
                      <td className="py-2">
                        Supply chain (seed transport, equipment manufacturing)
                      </td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2 pr-4">
                        Fertilizer manufacturing + application
                      </td>
                      <td className="py-2">
                        Upstream transport (fertilizer to farm)
                      </td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2 pr-4">
                        Chemical manufacturing + application
                      </td>
                      <td className="py-2">
                        Infrastructure (buildings, roads)
                      </td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2 pr-4">
                        Equipment operation (electricity)
                      </td>
                      <td className="py-2">Distribution and retail</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Irrigation pumping energy</td>
                      <td className="py-2">Consumer transport, end-of-life</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h4 className="mt-6 text-lg font-semibold text-foreground">
                Calculation Examples
              </h4>
              <div className="mt-3 space-y-4">
                <div className="rounded-lg border border-border bg-secondary/30 p-4">
                  <p className="font-semibold text-foreground">
                    Irrigation Event (2,471 gallons, deep well)
                  </p>
                  <p className="mt-1 font-mono text-sm">
                    Pumping energy: (2,471 / 1,000) &times; 3.5 kWh = 8.65 kWh
                    <br />
                    CO&#8322;e emissions: 8.65 &times; 0.365 kg/kWh ={" "}
                    <strong>3.16 kg CO&#8322;e</strong>
                  </p>
                </div>
                <div className="rounded-lg border border-border bg-secondary/30 p-4">
                  <p className="font-semibold text-foreground">
                    Fertilizer Application (100 kg NPK 10-10-10)
                  </p>
                  <p className="mt-1 font-mono text-sm">
                    Nitrogen: 10 kg &times; 10.5 = 105.0 kg CO&#8322;e
                    <br />
                    Phosphorus: 10 kg &times; 1.19 = 11.9 kg CO&#8322;e
                    <br />
                    Potassium: 10 kg &times; 0.65 = 6.5 kg CO&#8322;e
                    <br />
                    Total: <strong>123.4 kg CO&#8322;e</strong>
                  </p>
                </div>
              </div>

              <h4 className="mt-6 text-lg font-semibold text-foreground">
                Method-Aware Accuracy for Manual Labor
              </h4>
              <p className="mt-3 leading-[1.8]">
                USDA per-hectare fuel factors (Section 6) assume mechanical
                equipment. When a farmer documents a manual method (for example,
                &quot;Hand thinning with pruning shears&quot;), applying a
                mechanical fuel average would overstate emissions by 10–100x.
              </p>
              <p className="mt-3 leading-[1.8]">
                Trazo detects manual operations from the farmer{"'"}s free-text
                method field and routes to a{" "}
                <strong>
                  manual labor estimate (0.1 kg CO&#8322;e per acre)
                </strong>
                , representing hand-tool wear and worker logistics. Mechanical
                keywords (tractor, harvester, sprayer) take precedence on
                ambiguous descriptions.
              </p>
              <div className="mt-4 rounded-lg border border-border bg-secondary/30 p-4">
                <p className="font-semibold text-foreground">
                  Example: Hand Thinning (20 ha orange orchard, 12 workers, 4
                  days)
                </p>
                <div className="mt-3 overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="py-2 pr-4 text-left font-semibold text-foreground">
                          Approach
                        </th>
                        <th className="py-2 pr-4 text-left font-semibold text-foreground">
                          Factor Used
                        </th>
                        <th className="py-2 text-left font-semibold text-foreground">
                          Result
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border/50">
                        <td className="py-2 pr-4">USDA mechanical average</td>
                        <td className="py-2 pr-4">0.75 gal/ha diesel</td>
                        <td className="py-2">153.2 kg CO&#8322;e</td>
                      </tr>
                      <tr>
                        <td className="py-2 pr-4 font-medium text-primary">
                          Method-aware (hand labor documented)
                        </td>
                        <td className="py-2 pr-4 font-medium text-primary">
                          0.1 kg CO&#8322;e/acre
                        </td>
                        <td className="py-2 font-medium text-primary">
                          4.94 kg CO&#8322;e
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-2 text-xs text-muted-foreground">
                  Only the method-aware result reflects actual farm reality:
                  zero fuel combustion, zero powered equipment.
                </p>
              </div>
              <p className="mt-3 leading-[1.8]">
                This ensures that farmers who document more receive{" "}
                <strong>more accurate</strong> carbon values, not blanket
                averages. When a farmer explicitly reports zero fuel
                consumption, the calculator respects that value rather than
                falling back to USDA estimates.
              </p>
            </section>

            {/* 6. Emission Factors */}
            <section>
              <h3 className="text-xl font-bold text-foreground">
                5. Emission Factor Sources
              </h3>
              <p className="mt-3 leading-[1.8]">
                All emission factors are sourced from government publications
                and peer-reviewed literature. Each factor includes a confidence
                level (0.0–1.0) representing source evidence strength.
              </p>

              <h4 className="mt-6 text-lg font-semibold text-foreground">
                Fuel Combustion (EPA 40 CFR Part 98)
              </h4>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="py-2 pr-4 text-left font-semibold text-foreground">
                        Fuel Type
                      </th>
                      <th className="py-2 pr-4 text-left font-semibold text-foreground">
                        Factor
                      </th>
                      <th className="py-2 text-left font-semibold text-foreground">
                        Confidence
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border/50">
                      <td className="py-2 pr-4">Diesel (mobile)</td>
                      <td className="py-2 pr-4">10.21 kg CO&#8322;/gal</td>
                      <td className="py-2">95%</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2 pr-4">Gasoline</td>
                      <td className="py-2 pr-4">8.78 kg CO&#8322;/gal</td>
                      <td className="py-2">95%</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2 pr-4">Propane (LPG)</td>
                      <td className="py-2 pr-4">5.72 kg CO&#8322;/gal</td>
                      <td className="py-2">95%</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Biodiesel (B100)</td>
                      <td className="py-2 pr-4">8.76 kg CO&#8322;/gal</td>
                      <td className="py-2">90%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h4 className="mt-6 text-lg font-semibold text-foreground">
                Electricity (EPA eGRID 2023)
              </h4>
              <p className="mt-2 leading-[1.8]">
                US Average: <strong>0.365 kg CO&#8322;e/kWh</strong> delivered.
                The eGRID2023 Summary Tables publish 770.9 lb CO&#8322;e/MWh at the
                generator and a 4.2% U.S. grid gross loss; converting that to
                kilograms per kilowatt-hour gives 0.350, and dividing by 0.958 to
                account for what is lost in transmission gives 0.365.
                Country-specific factors are used where we have the grid operator&#39;s
                own published intensity: Uruguay (0.006), Brazil (0.07),
                Colombia (0.13), Peru (0.19), Chile (0.31), Argentina (0.35),
                and Mexico (0.42).
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Correction note (2025-12-03): corrected from 0.821 to 0.39 kg
                CO&#8322;/kWh after the previous value was found to be 2.1x too
                high due to a unit conversion error. Correction note
                (2026-09-07): corrected again, from 0.39 to 0.365 kg
                CO&#8322;e/kWh. 0.39 was EPA&#39;s Equivalencies Calculator
                figure, which uses eGRID2022 data and a 5.12% loss rate; this
                page cites eGRID2023, whose published U.S. rate and 4.2% grid
                gross loss give 0.365.
              </p>

              <h4 className="mt-6 text-lg font-semibold text-foreground">
                Fertilizer Manufacturing
              </h4>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="py-2 pr-4 text-left font-semibold text-foreground">
                        Nutrient
                      </th>
                      <th className="py-2 pr-4 text-left font-semibold text-foreground">
                        Factor
                      </th>
                      <th className="py-2 text-left font-semibold text-foreground">
                        Source
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border/50">
                      <td className="py-2 pr-4">Nitrogen (N)</td>
                      <td className="py-2 pr-4">10.5 kg CO&#8322;/kg N</td>
                      <td className="py-2">EPA + IPCC 2006/2019</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2 pr-4">
                        Phosphorus (P&#8322;O&#8325;)
                      </td>
                      <td className="py-2 pr-4">
                        1.19 kg CO&#8322;/kg P&#8322;O&#8325;
                      </td>
                      <td className="py-2">Trazo estimate (see note)</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Potassium (K&#8322;O)</td>
                      <td className="py-2 pr-4">
                        0.65 kg CO&#8322;/kg K&#8322;O
                      </td>
                      <td className="py-2">Trazo estimate (see note)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Note (2026-09-07): the phosphorus and potassium factors were
                previously attributed on this page to EPA 40 CFR Part 98. That
                publication carries no fertilizer manufacturing factors, so the
                attribution was withdrawn. These two are Trazo estimates, not
                agency figures, and they are deliberately set at the
                conservative end: published work puts phosphorus production at
                1.0&ndash;1.5 kg CO&#8322;e per kg P&#8322;O&#8325; (Walling
                &amp; Vaneeckhaute 2020), and European figures for both run
                lower still (Brentrup et al. 2018). We would rather overstate
                our own footprint than understate it. The nitrogen and fuel
                factors are unaffected and remain agency-published.
              </p>

              <h4 className="mt-6 text-lg font-semibold text-foreground">
                Chemical Manufacturing
              </h4>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="py-2 pr-4 text-left font-semibold text-foreground">
                        Chemical Type
                      </th>
                      <th className="py-2 pr-4 text-left font-semibold text-foreground">
                        Factor
                      </th>
                      <th className="py-2 text-left font-semibold text-foreground">
                        Source
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border/50">
                      <td className="py-2 pr-4">Synthetic pesticide</td>
                      <td className="py-2 pr-4">
                        8.8 kg CO&#8322;/kg active ingredient
                      </td>
                      <td className="py-2">Audsley et al. 2009</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2 pr-4">Synthetic herbicide</td>
                      <td className="py-2 pr-4">
                        6.3 kg CO&#8322;/kg active ingredient
                      </td>
                      <td className="py-2">Lal 2004</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2 pr-4">Generic fungicide</td>
                      <td className="py-2 pr-4">
                        4.5 kg CO&#8322;/kg active ingredient
                      </td>
                      <td className="py-2">Lal 2004</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2 pr-4">Organic pesticide</td>
                      <td className="py-2 pr-4">3.5 kg CO&#8322;/kg</td>
                      <td className="py-2">Neem/pyrethrin LCA</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Biological pesticide</td>
                      <td className="py-2 pr-4">2.5 kg CO&#8322;/kg</td>
                      <td className="py-2">Bt/Spinosad LCA</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-4 text-sm text-muted-foreground">
                Additional chemical-specific factors are available for copper
                fungicide (5.5), sulfur fungicide (1.8), biological fungicide
                (2.0), organic herbicide (1.2), and glyphosate (31.3 kg
                CO&#8322;/kg AI). The full emission factor table with confidence
                levels and detailed source citations is available in the{" "}
                <a
                  href="#full-methodology"
                  className="text-primary hover:underline"
                >
                  complete methodology document
                </a>
                .
              </p>

              <h4 className="mt-6 text-lg font-semibold text-foreground">
                Equipment Operations (USDA ARS)
              </h4>
              <p className="mt-2 text-sm text-muted-foreground">
                Per-hectare fuel factors for mechanical operations. When a
                farmer documents manual methods, the manual labor factor (0.1 kg
                CO&#8322;e/acre) is used instead (see Section 5).
              </p>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="py-2 pr-4 text-left font-semibold text-foreground">
                        Operation
                      </th>
                      <th className="py-2 pr-4 text-left font-semibold text-foreground">
                        Factor
                      </th>
                      <th className="py-2 text-left font-semibold text-foreground">
                        Confidence
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border/50">
                      <td className="py-2 pr-4">Planting (diesel)</td>
                      <td className="py-2 pr-4">1.8 gal/hectare</td>
                      <td className="py-2">85%</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2 pr-4">Harvesting (diesel)</td>
                      <td className="py-2 pr-4">0.7 gal/hectare</td>
                      <td className="py-2">85%</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2 pr-4">Transplanting (diesel)</td>
                      <td className="py-2 pr-4">2.4 gal/hectare</td>
                      <td className="py-2">85%</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2 pr-4">Cultivation (diesel)</td>
                      <td className="py-2 pr-4">3.2 gal/hectare</td>
                      <td className="py-2">85%</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2 pr-4">Thinning (mechanical)</td>
                      <td className="py-2 pr-4">0.75 gal/hectare</td>
                      <td className="py-2">85%</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2 pr-4">General crop production</td>
                      <td className="py-2 pr-4">2.5 gal/hectare</td>
                      <td className="py-2">85%</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 font-medium text-primary">
                        Manual operation (any type)
                      </td>
                      <td className="py-2 pr-4 font-medium text-primary">
                        0.1 kg CO&#8322;e/acre
                      </td>
                      <td className="py-2 text-primary">75%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 7. NOP Audit PDF Methodology */}
            <section>
              <h3 className="text-xl font-bold text-foreground">
                6. NOP Audit PDF Methodology
              </h3>
              <p className="mt-3 leading-[1.8]">
                For organic operations, Trazo generates a 24-page Audit PDF
                designed to support certifier review under the USDA National
                Organic Program (7 CFR Part 205). The PDF is reference material
                farmers attach to their certifier&apos;s annual inspection
                package. Trazo is a documentation platform and is not a
                USDA-accredited certifier; the PDF does not constitute
                certification or any determination of compliance.
              </p>

              <h4 className="mt-6 text-lg font-semibold text-foreground">
                7.1 Document Structure
              </h4>
              <p className="mt-3 leading-[1.8]">
                Each export is filtered by certification type (organic,
                GLOBALG.A.P., Regenerative Organic, or all). The organic-typed
                PDF contains the following sections, in order:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6 leading-[1.8]">
                <li>
                  <strong>Page-1 Documentation Snapshot:</strong> 13+ row table
                  citing 7 CFR § 205.201 (OSP), § 205.201(a)(2) (OSP narrative
                  vs. registry sync), § 205.103 (records), § 205.103(b)(2) (SOE
                  traceability), § 205.202 (land requirements), § 205.203(c)
                  (compost / raw manure), § 205.206 (pest management), § 205.272
                  (contamination prevention), § 205.307 (lot traceability), §
                  205.400(f)(2) (unapproved-input drift findings), and §
                  205.201(a)(3) (OFPP). Each row states whether the record that
                  section asks for is present in what the farmer entered, is
                  missing, or needs the certifier&apos;s review. It is a
                  documentation check, not a compliance finding.
                </li>
                <li>
                  <strong>Producer Attestation</strong> (§ 205.401(d)): the
                  statement the operator signs. When no signature is recorded
                  in Trazo, the PDF prints it as not signed.
                </li>
                <li>
                  <strong>Organic System Plan reference:</strong> active OSP
                  version, status, and § 205.201 narrative.
                </li>
                <li>
                  <strong>Inputs list in the plan:</strong> the OMRI-listed and
                  National List materials the operation&apos;s plan names. A
                  material on the list is in the plan; approval is the
                  certifier&apos;s.
                </li>
                <li>
                  <strong>Inputs not matched to the plan:</strong> inputs
                  recorded that match nothing on the plan&apos;s inputs list,
                  with the reason, for review with the certifier (a change to
                  the plan is notified under § 205.400(f)(2)).
                </li>
                <li>
                  <strong>Field Events:</strong> chemical applications, soil
                  management, pest management, equipment cleaning, weather, and
                  general documentation, each with timestamps, GPS, and
                  CFR-paired column headers.
                </li>
                <li>
                  <strong>Compost &amp; Manure Handling:</strong> compost
                  temperature curves vs. § 205.203(c)(2) (windrow or static
                  pile); raw manure 90-day or 120-day pre-harvest interval per §
                  205.203(c)(1).
                </li>
                <li>
                  <strong>Pest IPM Threshold Monitoring:</strong> scouting
                  observations, action thresholds, and rationale per §
                  205.206(a) and (e).
                </li>
                <li>
                  <strong>Photo Gallery:</strong> embedded thumbnails in
                  NOP-priority order (pest, soil/compost, chemical, equipment
                  cleaning, contamination, then routine production), with EXIF
                  date/GPS captions. Capped at 4 photos per event and 60 total.
                </li>
                <li>
                  <strong>SOE Compliance Status:</strong> attestations per the
                  2024 Strengthening Organic Enforcement final rule: Fraud
                  Prevention Plan (§ 205.201(a)(3)), 5-Year Retention (§
                  205.103(b)(4)), Unannounced Inspection Readiness (§ 205.661),
                  Non-Retail Container Labeling (§ 205.307), and NOP Import
                  Certificate. Each attestation reports actual platform state,
                  never a false claim.
                </li>
                <li>
                  <strong>Record Change History:</strong> every edit logged with
                  user attribution and timestamp; flagged when changes occur
                  after production finalization.
                </li>
              </ul>

              <h4 className="mt-6 text-lg font-semibold text-foreground">
                7.2 Drift Detector Logic
              </h4>
              <p className="mt-3 leading-[1.8]">
                When a farmer logs a chemical or soil amendment event, a
                post-save signal compares the input against the operation&apos;s
                inputs list in its plan using a three-layer cascade:
              </p>
              <ol className="mt-3 list-decimal space-y-2 pl-6 leading-[1.8]">
                <li>
                  <strong>Foreign-key membership check:</strong> if the event
                  references a specific OMRI Product or National List Substance
                  by ID, the detector confirms that ID is on the plan&apos;s list.
                </li>
                <li>
                  <strong>Name match:</strong> if no FK is set, the
                  free-text commercial name is matched against the OMRI catalog
                  and National List using token-based comparison with brand-
                  anchor constraints. Confidence below the threshold is treated
                  as unresolved. A name match is a lookup aid, never a
                  verification.
                </li>
                <li>
                  <strong>Unresolved &rarr; listed for review:</strong> events
                  that match nothing on the plan&apos;s list are listed for
                  review with the certifier. The detector never blocks a save,
                  because the record has to say what was actually applied.
                  Recording an input does not authorize it. Applying a
                  prohibited substance, including by drift, is something the
                  operation must notify its certifier about immediately (§
                  205.400(f)(1)); that duty to notify is not permission to use
                  it.
                </li>
              </ol>
              <p className="mt-3 leading-[1.8]">
                Name matching can produce false positives or false negatives.
                Treat these findings as a list to review before sharing the PDF
                with a certifier.
              </p>

              <h4 className="mt-6 text-lg font-semibold text-foreground">
                7.3 What the PDF Does Not Do
              </h4>
              <ul className="mt-3 list-disc space-y-2 pl-6 leading-[1.8]">
                <li>
                  <strong>It does not certify.</strong> Only USDA-accredited
                  certifying agents (CCOF, Oregon Tilth, MOFGA, OEFFA, PCO, and
                  others) issue organic certificates. The PDF is reference
                  material, not a certification.
                </li>
                <li>
                  <strong>It does not verify.</strong> Trazo does not visit
                  farms, sample soil, audit supplier invoices, or independently
                  validate that documented practices actually occurred.
                </li>
                <li>
                  <strong>It does not guarantee outcomes.</strong> A farmer
                  whose snapshot lists nothing missing may still receive a
                  non-compliance finding from their certifier.
                </li>
                <li>
                  <strong>
                    It is compliance-assisting, not compliance-granting.
                  </strong>{" "}
                  The intended use is to make inspector pre-read faster, not to
                  replace inspector judgement.
                </li>
              </ul>

              <h4 className="mt-6 text-lg font-semibold text-foreground">
                7.4 Tamper-Evidence Footer
              </h4>
              <p className="mt-3 leading-[1.8]">
                Each photo in the gallery includes a footer listing the original
                S3 object key, upload timestamp, file size, and uploader
                account, metadata retained in the producer dashboard for cross-
                reference. The PDF does not currently include a SHA-256 hash on
                the file itself; that capability may be added in a future
                release.
              </p>
            </section>

            {/* 8. Known Limitations */}
            <section>
              <h3 className="text-xl font-bold text-foreground">
                7. Known Limitations
              </h3>
              <p className="mt-3 leading-[1.8]">
                Transparency about limitations is fundamental to this{" "}
                {"methodology's"} credibility.
              </p>
              <ul className="mt-3 list-disc space-y-3 pl-6 leading-[1.8]">
                <li>
                  <strong>Self-reported data:</strong> Every practice record is
                  farmer-reported. There is no independent verification of event
                  accuracy. The consumer-facing disclaimer reads:{" "}
                  <em>
                    &quot;Based on farmer-reported documentation. Not
                    independently audited.&quot;
                  </em>
                </li>
                <li>
                  <strong>Documentation completeness, not quality:</strong> These
                  counts measure how many events were documented, not whether
                  the documented practices are good or sustainable.
                </li>
                <li>
                  <strong>Photo content verification:</strong> Photo anti-gaming
                  validates file integrity and temporal consistency but cannot
                  verify that the photo depicts the actual event on the actual
                  farm.
                </li>
                <li>
                  <strong>Carbon scope:</strong> Carbon calculations cover
                  the operation&apos;s direct emissions plus the upstream
                  manufacturing of the fertiliser and crop-protection products it
                  purchases — so mostly Scope 1, with that one Scope 3 category
                  included because it is the largest number a grower can actually
                  change. It is deliberately narrower than a full Life Cycle
                  Assessment per ISO 14067: transport to the farm, packaging,
                  equipment manufacturing, distribution and retail are all
                  excluded.
                </li>
                <li>
                  <strong>Emission factor age:</strong> Some factors derive from
                  studies published in 2004–2009. While these remain the most
                  widely-cited sources in agricultural carbon literature, annual
                  review against newer publications is planned.
                </li>
                <li>
                  <strong>EU regulatory status:</strong> Under the EU Directive
                  2024/825 (effective September 2026), a self-assigned grade or
                  rating shown to consumers could be classified as a
                  self-created sustainability label. Trazo therefore assigns no
                  grade or rating of any kind: there is no number to publish or
                  withhold. Consumers see the documented practices and
                  third-party certifications directly. Full EU substantiation may
                  still require external methodology audit.
                </li>
              </ul>
            </section>

            {/* 9. Regulatory Alignment */}
            <section>
              <h3 className="text-xl font-bold text-foreground">
                8. Regulatory Context
              </h3>
              <p className="mt-3 leading-[1.8]">
                This methodology was developed with reference to the following
                standards and regulations. Trazo has not undergone formal
                conformity assessment against these standards.
              </p>
              <ul className="mt-3 list-disc space-y-3 pl-6 leading-[1.8]">
                <li>
                  <strong>
                    <a
                      href="https://www.law.cornell.edu/cfr/text/16/part-260"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      FTC Green Guides (16 CFR Part 260)
                    </a>
                    :
                  </strong>{" "}
                  No implied third-party endorsement. All emission factors cite
                  specific government publications. Blockchain described as
                  &quot;blockchain-recorded&quot; (immutability), never
                  &quot;blockchain-verified.&quot;
                </li>
                <li>
                  <strong>ISO 14021:2016</strong> (Self-Declared Environmental
                  Claims): Claims are specific, substantiated, and verifiable.
                  Methodology published openly.
                </li>
                <li>
                  <strong>ISO 22005:2007</strong> (Food Traceability):
                  Production event tracking follows traceability design
                  principles: each event records who, what, when, where, and
                  how.
                </li>
                <li>
                  <strong>ISO 14067:2018</strong> (Carbon Footprint of
                  Products): Carbon calculations reference ISO 14067 principles
                  for emission factor selection, though {"Trazo's"} direct
                  operational scope is narrower than a full product carbon
                  footprint.
                </li>
              </ul>
            </section>

            {/* 10. References */}
            <section>
              <h3 className="text-xl font-bold text-foreground">
                9. References
              </h3>

              <h4 className="mt-6 text-lg font-semibold text-foreground">
                Government Data Sources
              </h4>
              <ol className="mt-3 list-decimal space-y-2 pl-6 text-sm leading-[1.8]">
                <li>
                  U.S. Environmental Protection Agency.{" "}
                  <em>Greenhouse Gas Emission Factors Hub (40 CFR Part 98)</em>.{" "}
                  <a
                    href="https://www.epa.gov/climateleadership/ghg-emission-factors-hub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    epa.gov
                  </a>
                </li>
                <li>
                  U.S. Environmental Protection Agency.{" "}
                  <em>eGRID2023 Summary Data</em>.{" "}
                  <a
                    href="https://www.epa.gov/egrid/summary-data"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    epa.gov/egrid
                  </a>
                </li>
                <li>
                  U.S. Energy Information Administration. (2023).{" "}
                  <em>
                    How much carbon dioxide is produced per kilowatthour of U.S.
                    electricity generation?
                  </em>{" "}
                  <a
                    href="https://www.eia.gov/tools/faqs/faq.php?id=74&t=11"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    eia.gov
                  </a>
                </li>
                <li>
                  IPCC. (2006/2019).{" "}
                  <em>Guidelines for National Greenhouse Gas Inventories</em>.
                  N&#8322;O emission factors (EF1=1%, GWP=265).{" "}
                  <a
                    href="https://www.ipcc-nggip.iges.or.jp/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    ipcc-nggip.iges.or.jp
                  </a>
                </li>
                <li>
                  USDA Natural Resources Conservation Service.{" "}
                  <em>National Engineering Handbook, Chapter 8: Irrigation</em>.{" "}
                  <a
                    href="https://www.nrcs.usda.gov/wps/portal/wcc/home/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    nrcs.usda.gov
                  </a>
                </li>
                <li>
                  USDA Agricultural Marketing Service.{" "}
                  <em>USDA Organic Integrity Database</em>.{" "}
                  <a
                    href="https://organic.ams.usda.gov/integrity/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    organic.ams.usda.gov
                  </a>
                </li>
              </ol>

              <h4 className="mt-6 text-lg font-semibold text-foreground">
                Peer-Reviewed Literature
              </h4>
              <ol
                start={6}
                className="mt-3 list-decimal space-y-2 pl-6 text-sm leading-[1.8]"
              >
                <li>
                  Audsley, E. et al. (2009).{" "}
                  <em>
                    Estimation of the Greenhouse Gas Emissions from Agricultural
                    Pesticide Manufacture and Use
                  </em>
                  . Cranfield University.
                </li>
                <li>
                  Hillier, J. et al. (2009).{" "}
                  <em>The carbon footprints of food crop production</em>.
                  International Journal of Agricultural Sustainability, 7(2),
                  107–118.
                </li>
                <li>
                  Lal, R. (2004). <em>Carbon emission from farm operations</em>.
                  Environment International, 30(7), 981–990.
                </li>
              </ol>

              {/* Consumer-survey references removed 2026-08-09 with the
                  "carbon-first fails" section that cited them — a reference
                  list must not cite sources the page no longer uses. */}
            </section>

            {/* Full Methodology Download */}
            <section
              id="full-methodology"
              className="rounded-xl border border-border bg-secondary/30 p-6"
            >
              <h3 className="text-xl font-bold text-foreground">
                Full Methodology Document
              </h3>
              <p className="mt-3 leading-[1.8]">
                This page summarizes the key elements. The complete methodology
                document (with all emission factors, anti-gaming implementation
                details, crop-specific expected event counts, and regulatory
                analysis) is available for download:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6 leading-[1.8]">
                <li>
                  <strong>Format:</strong> Markdown (machine-readable)
                </li>
                <li>
                  <strong>License:</strong> CC BY 4.0, free to share and adapt
                  with attribution
                </li>
                <li>
                  <strong>Version:</strong> 2.1 (September 2026)
                </li>
              </ul>
              <p className="mt-4 leading-[1.8]">
                To request the full document or provide feedback on the
                methodology, contact us at{" "}
                <a
                  href="mailto:methodology@trazo.io"
                  className="text-primary hover:underline"
                >
                  methodology@trazo.io
                </a>
                .
              </p>
              <p className="mt-3 leading-[1.8]">
                We invite academic and industry review of this methodology.
                Contact us to discuss collaboration opportunities.
              </p>
              <div className="mt-4 border-t border-border pt-4">
                <p className="text-sm font-semibold text-foreground">
                  Update Schedule
                </p>
                <p className="mt-1 text-sm leading-[1.8]">
                  Emission factors are reviewed annually against the newest
                  edition of each factor&apos;s own source. All updates are documented in the
                  version history below.
                </p>
              </div>
              <div className="mt-4 border-t border-border pt-4">
                <p className="text-sm font-semibold text-foreground">
                  Version History
                </p>
                <div className="mt-2 overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="py-1 pr-4 text-left font-semibold">
                          Version
                        </th>
                        <th className="py-1 pr-4 text-left font-semibold">
                          Date
                        </th>
                        <th className="py-1 text-left font-semibold">
                          Changes
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border/50">
                        <td className="py-1 pr-4">2.1</td>
                        <td className="py-1 pr-4">September 2026</td>
                        <td className="py-1">
                          Documentation shown as counts only; carbon boundary
                          restated to include the manufacturing
                          of purchased fertilizer and chemicals; electricity
                          factor corrected; the limit of a USDA database match
                          stated beside the badge
                        </td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-1 pr-4">2.0</td>
                        <td className="py-1 pr-4">August 2026</td>
                        <td className="py-1">
                          Rewritten around the records model: dated,
                          parcel-linked activity records following 7 CFR 205.103
                        </td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-1 pr-4">1.1</td>
                        <td className="py-1 pr-4">April 2026</td>
                        <td className="py-1">
                          Added method-aware calculation for manual labor,
                          equipment operations factor table, explicit zero-fuel
                          respect
                        </td>
                      </tr>
                      <tr>
                        <td className="py-1 pr-4">1.0</td>
                        <td className="py-1 pr-4">March 2026</td>
                        <td className="py-1">Initial publication</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
