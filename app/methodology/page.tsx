import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title:
    "Transparency Scoring Methodology | Trazo - Agricultural Transparency Platform",
  description:
    "Open methodology behind Trazo's agricultural transparency score (0-100). EPA/USDA-sourced emission factors, anti-gaming protections, and full calculation details. Published under CC BY 4.0.",
}

export default function MethodologyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        <article className="mx-auto max-w-3xl px-6">
          <header className="mb-12 text-center">
            <p className="text-sm font-medium tracking-widest text-primary uppercase">
              Published Methodology
            </p>
            <h1 className="mt-3 text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Transparency Scoring Methodology
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              How Trazo calculates transparency scores and carbon emissions —
              published openly for scrutiny and reproducibility.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Version 1.1 &middot; April 2026 &middot; License: CC BY 4.0
            </p>
          </header>

          <div className="prose-custom space-y-10 text-foreground/80">
            {/* Abstract */}
            <section className="rounded-xl border border-border bg-secondary/30 p-6">
              <h3 className="text-xl font-bold text-foreground">Abstract</h3>
              <p className="mt-3 leading-[1.8]">
                This document describes the methodology behind{" "}
                {"Trazo's"} agricultural transparency scoring system, a
                consumer-facing metric (0–100) that measures how completely a
                farmer has documented their farming practices for a given
                production cycle. Unlike carbon-first approaches, which
                inadvertently penalize comprehensive documentation,{" "}
                {"Trazo's"} transparency-first model rewards farmers for
                logging more events. Carbon data is calculated simultaneously
                using government-sourced emission factors and remains available
                for B2B sustainability reporting. Scores are calculated from
                farmer-reported documentation and have not been independently
                audited.
              </p>
              <p className="mt-3 leading-[1.8]">
                This methodology is published to invite scrutiny,
                encourage reproducibility, and advance the broader conversation
                around agricultural transparency standards. It was developed by
                Trazo and has not yet undergone external peer review.
              </p>
            </section>

            {/* 1. Problem Statement */}
            <section>
              <h3 className="text-xl font-bold text-foreground">
                1. The Problem: Why Carbon-First Fails
              </h3>
              <p className="mt-3 leading-[1.8]">
                Traditional agricultural carbon platforms calculate a{" "}
                {"farm's"} environmental impact based on logged activities. This
                creates a destructive paradox:
              </p>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="py-2 pr-4 text-left font-semibold text-foreground">
                        Scenario
                      </th>
                      <th className="py-2 pr-4 text-left font-semibold text-foreground">
                        Carbon-First Result
                      </th>
                      <th className="py-2 text-left font-semibold text-foreground">
                        Transparency-First Result
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border/50">
                      <td className="py-3 pr-4">
                        Farmer logs 15 events (comprehensive)
                      </td>
                      <td className="py-3 pr-4 text-red-500">
                        Higher emissions → Lower score
                      </td>
                      <td className="py-3 text-green-500">
                        15/15 documented → Higher score
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4">
                        Farmer logs 3 events (minimal)
                      </td>
                      <td className="py-3 pr-4 text-green-500">
                        Lower emissions → Higher score
                      </td>
                      <td className="py-3 text-red-500">
                        3/15 documented → Lower score
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 leading-[1.8]">
                <strong>The core problem:</strong> Carbon calculators treat
                &quot;more data&quot; as &quot;more emissions&quot; rather than
                &quot;more transparency.&quot; This incentivizes farms to
                document less. The exact opposite of what consumers, regulators,
                and the agricultural industry need.
              </p>

              <h4 className="mt-6 text-lg font-semibold text-foreground">
                Consumer Trust Gap
              </h4>
              <ul className="mt-3 list-disc space-y-2 pl-6 leading-[1.8]">
                <li>
                  <strong>Only 20% of consumers</strong> believe brand
                  sustainability claims (Blue Yonder, 2025. 5,000+ consumer
                  survey)
                </li>
                <li>
                  <strong>91% of consumers</strong> are actively worried about
                  greenwashing (WhatTheyThink, 2025. Global consumer
                  survey)
                </li>
              </ul>
              <p className="mt-3 leading-[1.8]">
                Trazo inverts the incentive:{" "}
                <strong>
                  more documentation = higher transparency score = more consumer
                  trust
                </strong>
                . Carbon data is calculated automatically and remains available
                for B2B reporting, but the consumer-facing primary metric is
                transparency, not carbon.
              </p>
            </section>

            {/* 2. Score Calculation */}
            <section>
              <h3 className="text-xl font-bold text-foreground">
                2. Transparency Score Calculation
              </h3>
              <p className="mt-3 leading-[1.8]">
                The transparency score measures{" "}
                <strong>documentation completeness</strong>: what percentage of
                expected farming practices have been recorded for a given
                production cycle, adjusted for documentation quality (photo
                evidence).
              </p>

              <h4 className="mt-6 text-lg font-semibold text-foreground">
                Seven Weighted Categories
              </h4>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="py-2 pr-4 text-left font-semibold text-foreground">
                        Category
                      </th>
                      <th className="py-2 pr-4 text-left font-semibold text-foreground">
                        Weight
                      </th>
                      <th className="py-2 text-left font-semibold text-foreground">
                        Examples
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border/50">
                      <td className="py-3 pr-4 font-medium">Production</td>
                      <td className="py-3 pr-4">30%</td>
                      <td className="py-3">
                        Planting, irrigation, harvest, pruning, transplanting
                      </td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 pr-4 font-medium">
                        Chemical Applications
                      </td>
                      <td className="py-3 pr-4">20%</td>
                      <td className="py-3">
                        Fertilizer (NPK), pesticides, herbicides, fungicides
                      </td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 pr-4 font-medium">
                        Soil Management
                      </td>
                      <td className="py-3 pr-4">18%</td>
                      <td className="py-3">
                        Soil testing, cover crops, composting, pH adjustment
                      </td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 pr-4 font-medium">
                        Pest Management
                      </td>
                      <td className="py-3 pr-4">12%</td>
                      <td className="py-3">
                        Scouting, beneficial insects, trap monitoring, IPM
                      </td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 pr-4 font-medium">
                        Business &amp; Certifications
                      </td>
                      <td className="py-3 pr-4">10%</td>
                      <td className="py-3">
                        Organic certification, sustainability audits, compliance
                      </td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 pr-4 font-medium">Weather</td>
                      <td className="py-3 pr-4">5%</td>
                      <td className="py-3">
                        Frost, drought, hailstorm, temperature events
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-medium">General</td>
                      <td className="py-3 pr-4">5%</td>
                      <td className="py-3">
                        Training, meetings, maintenance records
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs text-muted-foreground">
                Category weights were determined by the Trazo team based on
                consumer concern analysis and documentation impact assessment.
                Production activities receive the highest weight (30%) as they
                represent core farming practices. Weights have not been
                externally validated and may be adjusted in future versions
                based on peer feedback.
              </p>

              <h4 className="mt-6 text-lg font-semibold text-foreground">
                Formula
              </h4>
              <div className="mt-3 overflow-x-auto rounded-lg border border-border bg-secondary/30 p-4 font-mono text-sm">
                transparency_score = &Sigma; (category_weight &times;
                min(actual_events / expected_events, 1.0) &times;
                photo_penalty_multiplier)
              </div>
              <p className="mt-3 leading-[1.8]">
                Expected event counts vary by crop type and farming approach
                (conventional, organic, biodynamic). For example, tree fruit
                crops expect 12 events for conventional farming, 15 for organic,
                and 18 for biodynamic.
              </p>

              <h4 className="mt-6 text-lg font-semibold text-foreground">
                Grade Scale
              </h4>
              <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
                <div className="rounded-lg border border-border p-3 text-center">
                  <div className="text-2xl font-bold text-green-500">A+</div>
                  <div className="text-xs text-muted-foreground">
                    90–100 Outstanding
                  </div>
                </div>
                <div className="rounded-lg border border-border p-3 text-center">
                  <div className="text-2xl font-bold text-green-500">A</div>
                  <div className="text-xs text-muted-foreground">
                    80–89 Excellent
                  </div>
                </div>
                <div className="rounded-lg border border-border p-3 text-center">
                  <div className="text-2xl font-bold text-green-500">B</div>
                  <div className="text-xs text-muted-foreground">
                    70–79 Good
                  </div>
                </div>
                <div className="rounded-lg border border-border p-3 text-center">
                  <div className="text-2xl font-bold text-yellow-500">C</div>
                  <div className="text-xs text-muted-foreground">
                    60–69 Average
                  </div>
                </div>
                <div className="rounded-lg border border-border p-3 text-center">
                  <div className="text-2xl font-bold text-orange-500">D</div>
                  <div className="text-xs text-muted-foreground">
                    40–59 Below Avg
                  </div>
                </div>
                <div className="rounded-lg border border-border p-3 text-center">
                  <div className="text-2xl font-bold text-red-500">F</div>
                  <div className="text-xs text-muted-foreground">
                    0–39 Needs Work
                  </div>
                </div>
              </div>
              <p className="mt-3 text-xs text-muted-foreground">
                Grades are calculated by Trazo based on farmer-reported
                documentation completeness. They do not represent an independent
                assessment or third-party certification.
              </p>
            </section>

            {/* 3. Anti-Gaming */}
            <section>
              <h3 className="text-xl font-bold text-foreground">
                3. Anti-Gaming Protections
              </h3>
              <p className="mt-3 leading-[1.8]">
                A scoring system is only as credible as its resistance to
                manipulation. The following rules were implemented after a
                comprehensive gaming vector audit (March 2026):
              </p>
              <ul className="mt-3 list-disc space-y-3 pl-6 leading-[1.8]">
                <li>
                  <strong>Zero-event protection:</strong> A production with zero
                  logged events always receives 0%, regardless of any other
                  factors.
                </li>
                <li>
                  <strong>Minimum events threshold:</strong> Productions with
                  fewer than 3 events are capped at a maximum score of 30%.
                </li>
                <li>
                  <strong>USDA Organic verification:</strong> Organic
                  certification claims are cross-referenced against the USDA
                  Organic Integrity Database (36,000+ operations) using fuzzy
                  string matching at a 90% confidence threshold. Results display
                  as &quot;Verified via USDA Organic Integrity Database&quot;
                  (green badge) or &quot;Self-Reported&quot; (gray badge).
                </li>
                <li>
                  <strong>Regional irrigation defaults:</strong> Irrigation depth
                  defaults are adjusted by state (e.g., 2.5&quot; for Arizona
                  vs. 1.0&quot; for humid eastern states) to prevent
                  underestimation in arid regions.
                </li>
              </ul>
            </section>

            {/* 4. Photo Verification */}
            <section>
              <h3 className="text-xl font-bold text-foreground">
                4. Photo Verification System
              </h3>
              <p className="mt-3 leading-[1.8]">
                Photos provide accountability beyond text-only logging. A
                three-tier penalty structure incentivizes visual documentation
                for high-stakes events:
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
                        Penalty Without Photos
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
                      <td className="py-3">Up to 50% reduction</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 pr-4 font-medium">Recommended</td>
                      <td className="py-3 pr-4">
                        Pruning, Transplanting, Cultivation, Soil testing,
                        Composting, Grazing, Scouting, Trap monitoring, IPM
                      </td>
                      <td className="py-3">Up to 25% reduction</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-medium">No penalty</td>
                      <td className="py-3 pr-4">
                        Weather observations, General notes, Business records
                      </td>
                      <td className="py-3">None</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 leading-[1.8]">
                Photos undergo 5-layer anti-gaming validation: file size checks
                (10KB–50MB), format verification (magic byte analysis), blank
                image detection (pixel variance), and timestamp correlation with
                event dates (within 7 days).
              </p>
            </section>

            {/* 5. Carbon Calculation */}
            <section>
              <h3 className="text-xl font-bold text-foreground">
                5. Carbon Calculation Methodology
              </h3>
              <p className="mt-3 leading-[1.8]">
                Trazo calculates{" "}
                <strong>Direct Operational Emissions</strong>, meaning emissions from
                activities that farmers directly control during the production
                cycle. This is not a full Life Cycle Assessment (LCA). It covers
                only emissions under direct farmer control and excludes supply
                chain, transportation, retail, and end-of-life emissions.
              </p>

              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="py-2 pr-4 text-left font-semibold text-foreground">
                        Included (Farmer-Controlled)
                      </th>
                      <th className="py-2 text-left font-semibold text-foreground">
                        Excluded (Beyond Farm Gate)
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
                      <td className="py-2">
                        Distribution and retail
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">
                        Irrigation pumping energy
                      </td>
                      <td className="py-2">
                        Consumer transport, end-of-life
                      </td>
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
                    CO&#8322; emissions: 8.65 &times; 0.39 kg/kWh ={" "}
                    <strong>3.37 kg CO&#8322;e</strong>
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
                equipment. When a farmer documents a manual method — for example,
                &quot;Hand thinning with pruning shears&quot; — applying a
                mechanical fuel average would overstate emissions by 10–100x.
              </p>
              <p className="mt-3 leading-[1.8]">
                Trazo detects manual operations from the farmer{"'"}s free-text
                method field and routes to a <strong>manual labor estimate
                (0.1 kg CO&#8322;e per acre)</strong>, representing hand-tool
                wear and worker logistics. Mechanical keywords (tractor,
                harvester, sprayer) take precedence on ambiguous descriptions.
              </p>
              <div className="mt-4 rounded-lg border border-border bg-secondary/30 p-4">
                <p className="font-semibold text-foreground">
                  Example: Hand Thinning (20 ha orange orchard, 12 workers, 4 days)
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
                        <td className="py-2 pr-4">
                          USDA mechanical average
                        </td>
                        <td className="py-2 pr-4">0.75 gal/ha diesel</td>
                        <td className="py-2">153.2 kg CO&#8322;e</td>
                      </tr>
                      <tr>
                        <td className="py-2 pr-4 font-medium text-green-600">
                          Method-aware (hand labor documented)
                        </td>
                        <td className="py-2 pr-4 font-medium text-green-600">
                          0.1 kg CO&#8322;e/acre
                        </td>
                        <td className="py-2 font-medium text-green-600">
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
                <strong>more accurate</strong> carbon values — not blanket
                averages. When a farmer explicitly reports zero fuel consumption,
                the calculator respects that value rather than falling back to
                USDA estimates.
              </p>
            </section>

            {/* 6. Emission Factors */}
            <section>
              <h3 className="text-xl font-bold text-foreground">
                6. Emission Factor Sources
              </h3>
              <p className="mt-3 leading-[1.8]">
                All emission factors are sourced from government publications and
                peer-reviewed literature. Each factor includes a confidence level
                (0.0–1.0) representing source evidence strength.
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
                US Average: <strong>0.39 kg CO&#8322;/kWh</strong> (delivered
                electricity, including 5.12% transmission &amp; distribution
                losses). Country-specific factors available for Uruguay (0.04),
                Brazil (0.07), Colombia (0.13), Peru (0.19), Chile (0.31),
                Argentina (0.35), and Mexico (0.42).
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Correction note (2025-12-03): This factor was corrected from
                0.821 to 0.39 kg CO&#8322;/kWh after discovering the previous
                value was 2.1x too high due to a unit conversion error.
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
                      <td className="py-2">EPA 40 CFR Part 98</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">
                        Potassium (K&#8322;O)
                      </td>
                      <td className="py-2 pr-4">
                        0.65 kg CO&#8322;/kg K&#8322;O
                      </td>
                      <td className="py-2">EPA 40 CFR Part 98</td>
                    </tr>
                  </tbody>
                </table>
              </div>

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
                Per-hectare fuel factors for mechanical operations. When a farmer
                documents manual methods, the manual labor factor (0.1 kg
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
                      <td className="py-2 pr-4 font-medium text-green-600">
                        Manual operation (any type)
                      </td>
                      <td className="py-2 pr-4 font-medium text-green-600">
                        0.1 kg CO&#8322;e/acre
                      </td>
                      <td className="py-2 text-green-600">75%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 7. Known Limitations */}
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
                  <strong>Self-reported data:</strong> The transparency score is
                  entirely based on farmer-reported data. There is no independent
                  verification of event accuracy. The consumer-facing disclaimer
                  reads: <em>&quot;Based on farmer-reported documentation. Not independently audited.&quot;</em>
                </li>
                <li>
                  <strong>Documentation completeness, not quality:</strong> The
                  score measures how many events were documented, not whether the
                  documented practices are good or sustainable.
                </li>
                <li>
                  <strong>Photo content verification:</strong> Photo anti-gaming
                  validates file integrity and temporal consistency but cannot
                  verify that the photo depicts the actual event on the actual
                  farm.
                </li>
                <li>
                  <strong>Carbon scope:</strong> Carbon calculations cover direct
                  operational emissions only (Scope 1 equivalent). This is
                  deliberately narrower than a full Life Cycle Assessment per ISO
                  14067.
                </li>
                <li>
                  <strong>Emission factor age:</strong> Some factors derive from
                  studies published in 2004–2009. While these remain the most
                  widely-cited sources in agricultural carbon literature, annual
                  review against newer publications is planned.
                </li>
                <li>
                  <strong>EU regulatory status:</strong> Under the EU Directive
                  2024/825 (effective September 2026), the transparency score
                  could be classified as a self-created sustainability label.
                  Serving EU consumers may require external methodology audit.
                </li>
              </ul>
            </section>

            {/* 8. Regulatory Alignment */}
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
                  </strong>{" "}No implied
                  third-party endorsement. All emission factors cite specific
                  government publications. Blockchain described as
                  &quot;blockchain-recorded&quot; (immutability), never
                  &quot;blockchain-verified.&quot;
                </li>
                <li>
                  <strong>ISO 14021:2016</strong> (Self-Declared Environmental
                  Claims): Claims are specific, substantiated, and verifiable.
                  Methodology published openly.
                </li>
                <li>
                  <strong>ISO 22005:2007</strong> (Food Traceability): Production
                  event tracking follows traceability design principles: each
                  event records who, what, when, where, and how.
                </li>
                <li>
                  <strong>ISO 14067:2018</strong> (Carbon Footprint of Products):
                  Carbon calculations reference ISO 14067 principles for emission
                  factor selection, though {"Trazo's"} direct operational scope
                  is narrower than a full product carbon footprint.
                </li>
              </ul>
            </section>

            {/* 9. References */}
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
                  <em>
                    Greenhouse Gas Emission Factors Hub (40 CFR Part 98)
                  </em>
                  .{" "}
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
                    How much carbon dioxide is produced per kilowatthour of
                    U.S. electricity generation?
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
                  <em>
                    Guidelines for National Greenhouse Gas Inventories
                  </em>
                  . N&#8322;O emission factors (EF1=1%, GWP=265).{" "}
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
                  <em>
                    National Engineering Handbook, Chapter 8: Irrigation
                  </em>
                  .{" "}
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

              <h4 className="mt-6 text-lg font-semibold text-foreground">
                Consumer Research
              </h4>
              <ol
                start={9}
                className="mt-3 list-decimal space-y-2 pl-6 text-sm leading-[1.8]"
              >
                <li>
                  Blue Yonder. (2025).{" "}
                  <em>Consumer Sustainability Survey</em>. 5,000+ respondents.{" "}
                  <a
                    href="https://blueyonder.com/blog/2025/2025-survey-results-only-20-of-consumers-believe-brand-sustainability-claims"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    blueyonder.com
                  </a>
                </li>
                <li>
                  WhatTheyThink / Adopter.net. (2025).{" "}
                  <em>Greenwashing Statistics Report</em>.
                  Global consumer survey, 91% greenwashing concern.{" "}
                  <a
                    href="https://www.adopter.net/knowledge-hub/45-greenwashing-statistics-you-need-to-know-in-2026"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    adopter.net
                  </a>
                </li>
              </ol>
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
                  <strong>Version:</strong> 1.1 (April 2026)
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
                  Emission factors are reviewed annually against updated
                  EPA/USDA publications. Scoring methodology undergoes review
                  on a semi-annual basis. All updates are documented in the
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
  )
}
