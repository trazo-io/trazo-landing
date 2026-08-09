export interface BlogPost {
  slug: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
  readTime: string;
  content: string;
}

export const posts: BlogPost[] = [
  {
    slug: "planting-to-harvest-documentation",
    category: "Guides",
    date: "March 3, 2026",
    readTime: "10 min read",
    title:
      "From Planting to Harvest: A Complete Guide to Agricultural Event Documentation",
    excerpt:
      "A step-by-step guide to documenting every farming event from soil preparation through harvest, building a complete transparency record.",
    image: "/images/blog-planting-harvest.jpg",
    content: `
<p>Every farming practice has a story behind it; the issue is who is recording it?</p>

<p>Documentation of agricultural events has shifted from "nice to have," to necessary. Regulators are requiring farmers to keep more detailed records of chemical use, water use, etc., consumers are wanting more information as to how their food is being produced, and premium markets need evidence of the methods used by the farmer. However, documentation will not be effective if it is not consistent, complete and does not consume half of your workday.</p>

<p>Below is a practical guide to documenting your farming practices.</p>

<h2>Why Documentation Is Important</h2>

<p>Before we get into the "how", let's discuss the "why":</p>

<p><strong>Compliance</strong>: Regulatory bodies (EPA, USDA, State Agencies) are increasingly requiring farmers to maintain detailed records of chemical use, water use, etc. Maintaining these records prior to an audit reduces the time and stress associated with this process.</p>

<p><strong>Transparency</strong>: Consumers want to know where and how their food was grown. Documentation is the basis of all transparency and traceability systems.</p>

<p><strong>Premium Positioning</strong>: Traceable produce supports premium positioning. However, "traceable" means you have documentation to support your claims of being transparent. Therefore, you cannot say that you are providing your customers with transparency unless you have documented evidence to support your claims.</p>

<p><strong>Decision-Making</strong>: A history of event documentation allows farmers to improve upon their farming practices through time. For example, when did you plant last year? How much water did you use to irrigate? What was your yield? Documentation provides the ability to turn the experience of a farmer into usable data.</p>

<h2>The Seven Event Categories That Every Farmer Should Be Tracking</h2>

<h3>1. Production Events</h3>
<p><strong>Document</strong>: Planting, irrigation, pruning, harvest, transplanting, cultivation, thinning, pollination, and post-harvest processing. Include date, crop variety, method, and quantities.</p>
<p><strong>Why</strong>: Production events are the backbone of your transparency record. They document everything from planting through harvest, the complete story of how your crop was grown.</p>
<p><strong>Document Time</strong>: ~90 Seconds</p>

<h3>2. Chemical Applications</h3>
<p><strong>Document</strong>: Date, type of chemical (fertilizer, pesticide, herbicide, fungicide), specific product name, amount applied, method of application, target pest or condition, and NPK ratios for fertilizers.</p>
<p><strong>Why</strong>: Chemical documentation is the most heavily regulated category and the one consumers care about most. Complete and accurate records build credibility and trust.</p>
<p><strong>Document Time</strong>: ~2 Minutes</p>

<h3>3. Soil Management</h3>
<p><strong>Document</strong>: Date, activity type (tillage, amendment, cover cropping, testing), results of any soil tests, amendments applied, equipment used.</p>
<p><strong>Why</strong>: Demonstrates your long-term commitment to land stewardship. The health of your soil is the foundation of all your practices.</p>
<p><strong>Document Time</strong>: ~90 Seconds</p>

<h3>4. Pest Management</h3>
<p><strong>Document</strong>: Date, pest type identified, severity, scouting observations, integrated pest management (IPM) actions taken, biological controls deployed.</p>
<p><strong>Why</strong>: Shows consumers you are actively monitoring and managing pests, especially important for organic operations where chemical options are limited.</p>
<p><strong>Document Time</strong>: ~90 Seconds</p>

<h3>5. Weather Events</h3>
<p><strong>Document</strong>: Date, type of event (frost, drought, hail, high temperature, storm, high winds), severity, impact on crops, response taken.</p>
<p><strong>Why</strong>: Weather events explain yield fluctuations and demonstrate to consumers that you are managing a variable environment. They also justify certain interventions.</p>
<p><strong>Document Time</strong>: ~60 Seconds</p>

<h3>6. Business Events</h3>
<p><strong>Document</strong>: Certifications obtained or renewed, inspections completed, labor practices, equipment investments, sustainability initiatives.</p>
<p><strong>Why</strong>: Business events show the operational commitment behind your farming practices: the investments you make in equipment, certifications, and your team.</p>
<p><strong>Document Time</strong>: ~60 Seconds</p>

<h3>7. General Observations</h3>
<p><strong>Document</strong>: Date, observation text, photos, voice notes.</p>
<p><strong>Why</strong>: Some things don't fit into categories. General observations capture the details that make your farming story unique: wildlife sightings, field conditions, crew milestones.</p>
<p><strong>Document Time</strong>: ~30 Seconds</p>

<h2>Documenting Your Practices Effectively</h2>

<h3>Develop a habit of documenting your practices every day.</h3>

<h3>Voice Records Are A Great Option</h3>
<p>In the middle of the field or when your hands are dirty, use your phone to record your voice describing what you are doing. The system will document your description. You can add additional detail after the fact.</p>

<h3>Photos Are Worth More Than A Thousand Words</h3>
<p>There is no better way to document your activities than taking a photo of them. Take a picture of the products you apply, the condition of the field, or the harvested crops. Photos add credibility and authenticity to typed descriptions.</p>

<h3>Share The Documentation Responsibility With Others On The Farm</h3>
<p>If you have farm workers or family members assisting you, ask them to document their own activities. This will spread out the responsibility and create a more complete set of records.</p>

<h3>Don't Backdate</h3>
<p>Record your events as they occur in real time. This will ensure that your documents are correct and carry an accurate timestamp showing when they were recorded. When you backdate your entries, it can cause people to question their accuracy.</p>

<h2>How Your Documenting Leads to Transparency</h2>

<p>With each entry you make documenting your production process, your transparency score will increase, a 0-100 score reflecting how well you've documented your production process. The more entries you make, the higher your transparency score.</p>

<p>A consumer who scans your QR code will see your documented farming practices, photos, and certifications alongside your farm and product information. When most of the growing process is documented, it tells them, "This farmer has documented almost all of what went on with this crop." That's a strong trust indicator.</p>

<p>And since the entire production record is locked and timestamped when you finish producing the product, consumers know your documentation wasn't falsified or changed.</p>

<p>Your documentation isn't paperwork, it's the basis for consumer confidence.</p>

<p><strong>It will take you 90 seconds to document your first event.</strong> Tell your farming story through a documented record of your practices.</p>
    `,
  },
  {
    slug: "organic-record-keeping-guide",
    category: "Organic Farming",
    date: "March 26, 2026",
    readTime: "8 min read",
    title:
      "The Organic Farmer's Guide to Digital Record-Keeping: What NOP Requires and How to Stay Ahead",
    excerpt:
      "55% of organic farmers name certification paperwork, record-keeping and compliance costs as their top concern (USDA NASS 2021 Certified Organic Survey). Here's what NOP actually requires, the most common mistakes that risk certification, and how digital documentation closes the gap between annual audits.",
    image: "/images/blog-organic-records.jpg",
    content: `
<p>Ask any organic farmer what the hardest part of maintaining certification is, and the answer is rarely pests, weather, or markets. It is paperwork.</p>

<p>In the USDA&rsquo;s 2021 Certified Organic Survey, 55% of organic farmers named certification paperwork, record-keeping and compliance costs as their top concern &mdash; more than any other issue. Paperwork is not the main reason farms leave organic certification; the National Organic Coalition&rsquo;s 2026 analysis found roughly 11% of exiting operations cite cost or paperwork. But for farms that stay, it is the burden they report most.</p>

<p>This guide breaks down what the USDA National Organic Program actually requires for record-keeping, the most common mistakes that lead to noncompliance findings, and how digital documentation tools can close the gap between annual audits.</p>

<h2>What NOP Actually Requires (7 CFR 205.103)</h2>

<p>The National Organic Program regulation at 7 CFR 205.103 requires that certified organic operations maintain records that "fully disclose all activities and transactions" and that records be maintained for at least five years. Records must be "readily auditable" which means accessible, organized, and complete.</p>

<p>In practice, this breaks down into five categories of documentation:</p>

<h3>1. Input Materials</h3>
<p>Every substance applied to organic fields must be documented: the specific product name, the crop and field treated, the date of application, the application rate and method, the reason for use, and purchase receipts showing product composition. For organic farms, each input must also be verified as allowed under the National List (7 CFR 205.601-606) or listed by the Organic Materials Review Institute (OMRI).</p>

<h3>2. Seed and Planting Stock</h3>
<p>NOP 205.204 requires organic seeds unless they are commercially unavailable. If conventional seeds are used, the farmer must document a commercial availability search, contacting at least three suppliers, and verify the seeds are untreated and non-GMO. Seed lot numbers, supplier names, and organic certificate numbers should all be recorded.</p>

<h3>3. Field Activities and Crop Rotation</h3>
<p>Planting dates, harvest dates, crop varieties, field locations, and routine activities such as weeding, tillage, mowing, and pest monitoring must all be documented with dates. Crop rotation patterns are part of the Organic System Plan and must be updated annually.</p>

<h3>4. Soil Management and Composting</h3>
<p>NOP 205.203 has specific requirements for soil fertility management. Raw manure must be applied at least 120 days before harvest for crops whose edible portion contacts the soil, or 90 days for crops that do not contact soil. Composted materials must meet specific criteria: an initial carbon-to-nitrogen ratio between 25:1 and 40:1, temperatures reaching at least 131 degrees Fahrenheit for three consecutive days in an in-vessel or static system, or fifteen days in a windrow system with at least five turnings.</p>

<h3>5. Equipment and Harvest</h3>
<p>Equipment cleaning logs are required under NOP 205.272 to prevent contamination between organic and conventional use. Harvest records must include dates, quantities, lot identification, and storage conditions. Post-harvest handling and clean transport documentation complete the record.</p>

<h2>The Most Common Record-Keeping Mistakes</h2>

<p>Based on certifier reports and noncompliance data, these are the documentation gaps that most frequently cause problems during organic inspections:</p>

<ul>
<li><strong>Incomplete input application logs.</strong> Missing dates, rates, or reasons for application. Inspectors need every field filled in for every application event.</li>
<li><strong>Missing purchase receipts.</strong> The product label alone is not sufficient. Receipts must show the product composition and link to OMRI or National List compliance.</li>
<li><strong>Mass-balance mismatches.</strong> Total incoming organic product must equal total outgoing plus inventory. When harvest quantities do not match sales records, inspectors flag it immediately.</li>
<li><strong>Vague equipment cleaning documentation.</strong> Recording that equipment was "cleaned" is not sufficient. The method, the person who verified, and whether the equipment was previously used for conventional production must all be documented.</li>
<li><strong>Failure to report changes.</strong> Any changes to the Organic System Plan must be reported to the certifier before they are implemented. Retroactive documentation of changes is a common noncompliance finding.</li>
<li><strong>Missing seed sourcing documentation.</strong> If conventional seeds were used, the commercial availability search must be documented. Many farms skip this step and cannot prove it during inspection.</li>
</ul>

<h2>Why Annual Audits Are Not Enough</h2>

<p>Organic certification is based on an annual inspection cycle. The certifier reviews your Organic System Plan, inspects your fields, checks your records, and makes a determination. But the Strengthening Organic Enforcement (SOE) rule, effective since March 2024, has significantly raised the bar.</p>

<p>Under SOE, certifiers must now conduct unannounced inspections of at least 5 percent of certified operations, with no more than four hours notice. Mass-balance audits and traceback audits are now standard. Penalties can reach over $20,000 per violation.</p>

<p>This means record-keeping is no longer something you prepare for once a year before your inspector arrives. It must be continuous, consistent, and audit-ready at any time.</p>

<h2>How Digital Documentation Changes the Equation</h2>

<p>The fundamental shift with digital documentation is that it makes record-keeping a byproduct of farming rather than a separate administrative task. When a farmer logs an event in the field (a chemical application, a soil amendment, an equipment cleaning), the record is created in real time with a timestamp and optional photo evidence.</p>

<p>This approach addresses the most common documentation failures:</p>

<ul>
<li><strong>Timestamps prevent backdating.</strong> Events are recorded when they happen, not reconstructed from memory weeks later.</li>
<li><strong>Photo evidence supports claims.</strong> A photo of the OMRI label on the fertilizer bag, attached to the application event, is stronger documentation than a handwritten note.</li>
<li><strong>Structured forms reduce gaps.</strong> When a digital form asks for application rate, method, and reason, those fields are harder to skip than lines on a paper log.</li>
<li><strong>Export-ready reports save preparation time.</strong> Instead of organizing paper records before an inspection, farmers can generate a filtered report in one step.</li>
<li><strong>Voice recording lowers the barrier.</strong> Farmers who find paper logs tedious can speak their event details into a phone while still in the field. The system converts speech to structured data that can be reviewed and completed later.</li>
</ul>

<h2>The Transparency Advantage</h2>

<p>There is an additional benefit to digital organic documentation that goes beyond compliance. The same events that build your inspection record also build consumer trust.</p>

<p>When a consumer scans a QR code on your product and sees a timeline of documented organic practices, cover crops, OMRI-listed amendments, and certification status checked against the USDA Organic Integrity Database, that is a level of transparency no paper record can provide. It turns record-keeping from a compliance burden into a marketing asset.</p>

<p>The farms doing the most thorough documentation are also the farms that can show the most complete transparency story to their consumers. For organic farms, where consumers already expect higher standards, this alignment between compliance documentation and consumer transparency is particularly valuable.</p>

<h2>Getting Started: What to Document First</h2>

<p>If you are transitioning to digital documentation or starting your organic certification journey, focus on these records first:</p>

<ol>
<li><strong>Chemical applications.</strong> Every input, every time. Include the product name, OMRI or NOP status, application rate, field, date, and a photo of the product label.</li>
<li><strong>Soil amendments.</strong> Document compost applications with C:N ratio and temperature records. For raw manure, track the application date and calculate the pre-harvest interval.</li>
<li><strong>Seed sourcing.</strong> Record supplier name, lot number, organic certificate number, and treatment status for every planting event.</li>
<li><strong>Equipment cleaning.</strong> Log the cleaning method, previous use (organic or conventional), and who verified the cleaning was complete.</li>
<li><strong>Harvest events.</strong> Date, quantity, lot identification, and storage location.</li>
</ol>

<p>These five record types cover the majority of what inspectors review during organic audits. Once they are consistently documented, adding soil tests, pest monitoring, cover crop management, and business events fills out the complete picture.</p>

<p>The goal is not to create more paperwork. It is to make the documentation you already need serve double duty: compliance readiness and consumer-facing transparency. The farms that achieve this will be the ones that maintain their certification with less stress and build stronger relationships with their buyers.</p>
    `,
  },
  {
    slug: "cog-pro-shutting-down-migration-guide",
    category: "Guides",
    date: "August 9, 2026",
    readTime: "6 min read",
    title:
      "COG Pro Is Shutting Down: A Migration Checklist for Organic Growers",
    excerpt:
      "COG Pro has announced it will end service December 31, 2026. Here's the export checklist, the field-mapping guide, and the vendor questions to ask before your organic records disappear along with the software.",
    image: "/images/blog-organic-records.jpg",
    content: `
<p>COG Pro has announced that it will end service on December 31, 2026. If your walnut, almond, citrus, or avocado operation's organic records live in that system, the exact shutdown date matters less than what happens to your history once the software goes dark. Confirm the current timeline and any final export windows directly with the vendor, since shutdown plans can shift.</p>

<p>This is a migration checklist, not a eulogy. The goal is simple: get every record out, in a form your certifier can still use, before you lose the ability to log in.</p>

<h2>What the Shutdown Actually Means for Your Records</h2>

<p>Under 7 CFR 205.103, certified operations must maintain records that fully disclose all activities and transactions, and those records must be kept for not less than five years beyond their creation (7 CFR 205.103(b)(3)). That requirement does not pause because a software vendor closes its doors. If an inspector asks for an input application from three years ago and your only copy lived inside a platform that no longer exists, "the software shut down" is not an exemption.</p>

<p>That makes this a five-year problem, not a one-year problem. Every application log, harvest record, and sales record that falls inside your rolling five-year window needs to come out, and needs to land somewhere you control, in a format you can still read after the account is closed.</p>

<h2>Step 1: Inventory What You Need to Export</h2>

<p>Before you touch an export button, list every record type you actually have stored in COG Pro. Most organic operations end up needing at least these:</p>

<ul>
<li><strong>Field and crop lists.</strong> Your parcel or field inventory, acreage, and crop history by field.</li>
<li><strong>Input applications.</strong> Every fertilizer, pesticide, and soil amendment record: product, rate, date, field, and applicator.</li>
<li><strong>Harvest logs.</strong> Date, field, quantity, and lot identification for each harvest event.</li>
<li><strong>Sales and mass-balance records.</strong> What was sold, to whom, in what quantity, and how it reconciles against what was harvested.</li>
<li><strong>Organic System Plan documents.</strong> Any OSP sections, land-use history, or buffer documentation stored in the platform.</li>
<li><strong>Certificates and inspection history.</strong> Prior certificates, inspection reports, and any noncompliance correspondence.</li>
</ul>

<p>If you are not sure whether a record type exists in your account, check every menu. Older or less-visible features sometimes hold data that does not show up on the main dashboard.</p>

<h2>Step 2: Verify Your Date Ranges Cover Five Years</h2>

<p>This is the step most growers skip. It is common to export "this year" or "the last 12 months" and assume that is enough. It is not. Because 7 CFR 205.103(b)(3) requires five years of retrievable records, your export needs to reach back five full years from today, not just cover the current certification cycle.</p>

<p>If your farm has used COG Pro for fewer than five years, export everything from day one. If you have used it longer, pull the full five-year trailing window at minimum. A gap in your export is a gap you will have to explain to an inspector later, and "the export tool only defaulted to one year" is a weak answer to give.</p>

<h2>Step 3: Map Each Record Type to Your Next Tool</h2>

<p>A CSV export is only useful if the next place it lands can turn rows back into records your certifier can review. Before you migrate, understand how COG Pro's structure maps onto whatever tool you choose next:</p>

<ul>
<li><strong>Field &rarr; Parcel.</strong> What COG Pro calls a Field is typically what most successor systems call a parcel: a defined piece of land with its own boundary and history.</li>
<li><strong>Row / Section &rarr; a block identifier on each activity.</strong> The subdivisions you used to separate rows or sections inside a field usually become a block or sub-parcel identifier attached to individual activity records, not a separate entity on their own. If you farm in California, this is often the same block number that already appears on your Pesticide Use Report.</li>
<li><strong>Input applications &rarr; chemical or input events.</strong> Each row in your application export should become one dated, field-linked event, not a line item buried in a spreadsheet.</li>
<li><strong>Harvest logs &rarr; production or harvest events.</strong> Harvest date, quantity, and lot number should carry forward as a structured record tied to the specific field and planting.</li>
</ul>

<p>A successor tool that just stores your CSV as an attachment has not really migrated your records, it has archived a file. The difference shows up the next time your certifier asks for input history on a specific field: a dumped spreadsheet takes explaining, a structured, dated, field-linked record does not.</p>

<h2>Step 4: Time the Migration Before Renewal Season, Not During It</h2>

<p>Late fall through winter is when most certifiers open their annual update windows and when USDA's cost-share application typically comes due (see our <a href="/blog/organic-renewal-season-calendar">renewal-season calendar</a> for the full sequence). That is the worst possible stretch to also be untangling a software migration. Do the export and mapping work now, during the postharvest lull, while you still have full access to COG Pro and before your attention splits across annual paperwork, inspections, and deadlines.</p>

<p>Waiting until your certifier's deadline is close is how growers end up trying to reconstruct three years of application history from memory the week before renewal.</p>

<h2>Step 5: Ask Any Successor Vendor These Questions Before You Commit</h2>

<p>Not every recordkeeping tool is built the same way, and a rushed migration can leave you worse off than a spreadsheet. Before you decide where your records go next, ask:</p>

<ul>
<li><strong>Structured fields or free text?</strong> Can the tool require a rate, date, and area for every application, or does it just accept a paragraph of notes?</li>
<li><strong>Per-activity records or one running log?</strong> Can you pull up a single input application with its own date, photo, and field link, or is everything one long export?</li>
<li><strong>Can your certifier view records directly?</strong> Does the certifier get an online view of your records, or are you still emailing PDFs and spreadsheets every time they ask?</li>
<li><strong>Does it support your crew's language?</strong> If your field crew logs activities directly, does the tool work in Spanish as well as English?</li>
<li><strong>Can it import your COG Pro export directly?</strong> Or are you retyping years of history by hand?</li>
</ul>

<p>The answers determine whether next year's renewal is easier or harder than this one.</p>

<h2>If You Have Already Lost Access</h2>

<p>If your account is already closed or your export window has passed, you are not entirely out of options. Contact the vendor's support line directly and ask whether a data export can still be generated on request. Check for any paper or PDF copies of applications, harvest logs, or receipts you may have kept outside the software. And contact your certifier: certifying agents keep their own file of what you submitted in past annual updates and inspection reports, which can help you reconstruct gaps even if the original software account is gone.</p>

<p>None of these are as clean as a full CSV export done ahead of time, which is exactly why the window to act is now, not after the shutdown date passes.</p>

<p>Trazo accepts COG Pro CSV exports directly. Send your field, input, and harvest exports, and the records come in as structured, dated activities tied to your parcels, not a spreadsheet buried in an attachments folder. Trazo's guided modules follow the Common OSP structure, and the Starter plan is free. <a href="https://app.trazo.io/auth/signup" target="_blank" rel="noopener noreferrer">Start a free account</a> to see how your exported records look once they are organized.</p>
    `,
  },
  {
    slug: "organic-renewal-season-calendar",
    category: "Guides",
    date: "August 9, 2026",
    readTime: "6 min read",
    title:
      "The Organic Renewal-Season Calendar: Every Deadline From October to April",
    excerpt:
      "Organic renewal isn't one deadline, it's a six-month sequence from postharvest through spring. A month-by-month calendar of what typically falls due, from OCCSP cost-share to certifier annual updates.",
    image: "/images/blog-premium-pricing.jpg",
    content: `
<p>Organic renewal does not happen on a single date. It is a sequence that starts the moment you finish harvest and does not let up until your certifier signs off in spring. Miss one piece of it, and the rest gets harder.</p>

<p>Not every orchard's harvest calendar lines up neatly with October. Walnuts and almonds are typically off the trees by then, but citrus and avocado harvest windows vary by variety and can run well into winter or spring. The reconciliation step below still applies, it just happens whenever your particular crop and block finish coming off, not necessarily on a single calendar date.</p>

<p>This calendar walks the season month by month: what typically falls due, what a complete annual update actually contains, and why so many growers end up racing a deadline that did not have to sneak up on them. Deadlines shift year to year and certifier to certifier, so treat every date below as a planning guide, not a substitute for checking with your certifier and with USDA's Farm Service Agency directly.</p>

<h2>October: Close Out the Season While It Is Still Fresh</h2>

<p>Postharvest is the best time in the entire calendar to reconcile your records, and the most commonly skipped. Your harvest totals, input logs, and sales records are still fresh enough that you can catch a missing receipt or a mismatched quantity while you can still do something about it.</p>

<p>Use October to:</p>

<ul>
<li>Reconcile harvested quantities against what was sold or is currently in storage.</li>
<li>Close out any open chemical or input application logs for the season.</li>
<li>Attach purchase receipts to the input records they support.</li>
<li>Note any deviations from your Organic System Plan that happened during the season, while you still remember the details.</li>
</ul>

<p>If part of your fall task list also includes moving off a shutting-down platform, do that now too. See our <a href="/blog/cog-pro-shutting-down-migration-guide">COG Pro migration checklist</a> if that applies to your farm. Every week you wait after harvest, the details get fuzzier and the crew members who applied a given input are more likely to have moved on to another job.</p>

<h2>December 31: OCCSP Cost-Share Deadline</h2>

<p>The Organic Certification Cost Share Program (OCCSP), administered through USDA's Farm Service Agency, reimburses eligible organic operations for a portion of certification costs, historically up to 75 percent of costs with a cap of $750 per certification scope. Applications have typically been due December 31. Because program terms, caps, and deadlines can change year to year, verify current-year terms and the application window directly with your local FSA office before you count on a specific figure.</p>

<p>To apply, you will generally need proof of certification costs paid during the program year, so keep your certifier invoices on hand as you move through the fall.</p>

<h2>January: The Certifier Deadline Cluster</h2>

<p>January is when most annual update deadlines land, though the exact date depends entirely on your certifying agent. As typical recent deadlines, several major certifiers have followed a pattern like this, though you should confirm your own certifier's current dates directly:</p>

<ul>
<li><strong>CCOF:</strong> the annual update window has typically opened November 3, with updates due January 1.</li>
<li><strong>Pennsylvania Certified Organic (PCO):</strong> annual updates have typically been due January 15.</li>
<li><strong>Oregon Tilth Certified Organic (OTCO):</strong> deadlines have typically fallen around January 1 or April 1, depending on the program and scope.</li>
</ul>

<p>If you are certified through a smaller or regional certifier not listed here, ask directly when their window opens. Certifiers publish these dates on their own websites and can adjust them from year to year.</p>

<h2>February 1: MOSA and the Stragglers</h2>

<p>Midwest Organic Services Association (MOSA) has typically set its annual update deadline around February 1. If you are certified through MOSA, or you are catching up after missing an earlier window with another certifier, February is often the last realistic month to get a complete update in before inspection scheduling tightens up for the season.</p>

<h2>What a Complete Annual Update Actually Contains</h2>

<p>An annual update is not just a form. Certifiers are looking for a complete picture of what changed and what stayed the same since your last inspection. A complete submission generally includes:</p>

<ul>
<li><strong>An updated Organic System Plan.</strong> Under 7 CFR 205.201(a), your OSP has to reflect your actual current practices, so any new inputs, new practices, or changed procedures need to be written in, not left describing last year's operation.</li>
<li><strong>A current input list.</strong> Every product you intend to use this season, checked against the National List.</li>
<li><strong>Land-history changes.</strong> New leases, new acreage, or changes to how adjoining land is used.</li>
<li><strong>New parcels and buffer documentation.</strong> If you added ground, or your neighbors changed what they are growing next to you, your buffer zone documentation under 7 CFR 205.202(c) needs to reflect it.</li>
<li><strong>Records ready for inspection.</strong> Not summarized, not reconstructed from memory: the actual application logs, harvest records, and sales records an inspector can review, kept on file per the five-year retention requirement at 7 CFR 205.103(b)(3). For a deeper look at what inspectors actually review, see our guide to <a href="/blog/what-your-organic-inspector-actually-checks">what your organic inspector checks</a>.</li>
</ul>

<h2>Why Updates Get Delayed</h2>

<p>Ask any certifier what slows down the annual update process, and the answer is rarely a farm's growing practices. It is the paperwork behind them. In USDA's 2021 Certified Organic Survey (NASS), over half of organic farms named certification paperwork and record-keeping among their top challenges, more than any other single issue. That is not one farm's problem; it is the industry's own, consistently reported experience.</p>

<p>Beyond that structural challenge, the practical causes of delay tend to repeat every year: a lab result that should have been ordered earlier, new lease paperwork still waiting on a signature, a missing receipt that has to be tracked down after the fact, or a crew member who applied an input and moved on before writing it down.</p>

<h2>A Month-by-Month Prep Checklist</h2>

<ol>
<li><strong>October:</strong> Reconcile harvest and sales. Close out chemical and input logs for the season. Attach receipts.</li>
<li><strong>November:</strong> Gather receipts and invoices for OCCSP. If your certifier's window opens this month (CCOF's has typically opened November 3), start your annual update early rather than waiting for the deadline.</li>
<li><strong>December:</strong> Submit your OCCSP cost-share application before December 31. Finish any outstanding OSP updates.</li>
<li><strong>January:</strong> Submit your annual update by your certifier's deadline. Pull your five-year record archive together in case an inspection is scheduled early in the year.</li>
<li><strong>February:</strong> MOSA's deadline falls here if that is your certifier. Catch up on anything still outstanding from January.</li>
<li><strong>March and April:</strong> OTCO's second window has typically fallen around April 1. Use this stretch to prepare for on-site inspection scheduling, which usually ramps up through the growing season.</li>
</ol>

<p>Trazo assembles a renewal packet from the season's logged events. Instead of building the update from scratch every January, the input applications, harvest records, and OSP-relevant events documented through the year are already organized by field and date. The Starter plan is free. <a href="https://app.trazo.io/auth/signup" target="_blank" rel="noopener noreferrer">See how the packet comes together</a> before this year's deadlines hit.</p>
    `,
  },
  {
    slug: "what-your-organic-inspector-actually-checks",
    category: "Guides",
    date: "August 9, 2026",
    readTime: "5 min read",
    title:
      "What Your Organic Inspector Actually Checks (And the Records That Answer)",
    excerpt:
      "An organic inspection follows a predictable set of questions, not a hidden test. Here's what inspectors actually check, area by area, and the specific record that answers each one.",
    image: "/images/blog-planting-harvest.jpg",
    content: `
<p>An organic inspection can feel like a test with a syllabus nobody handed you. It is not. Inspectors work through a defined set of questions, area by area, and every one of those questions has a specific kind of record that answers it. Know the questions ahead of time, and the inspection stops being a mystery.</p>

<p>This applies whether you are growing walnuts, almonds, citrus, or avocados, and it matters even more for wholesale operations, where a packing house or handler may run its own traceability check on top of whatever your certifier asks for. Here is the walk-through from a records perspective: five areas an inspector reviews, the question behind each one, and the record that answers it.</p>

<h2>Input Applications: "What Did You Put on This Field, and Is It Allowed?"</h2>

<p><strong>The question:</strong> For every fertilizer, pesticide, or soil amendment applied, the inspector wants to know the product, the rate, the date, the field or area treated, who applied it, and whether the product is actually allowed under the National List (7 CFR 205.601-606).</p>

<p><strong>The record that answers it:</strong> A dated application log entry for each event, tied to a specific field, with the product name, rate, and applicator recorded at the time of application rather than reconstructed afterward. A photo of the product label or the purchase receipt strengthens the record by showing the product's actual composition, not just its name.</p>

<h2>Seed Sourcing: "Why Isn't This an Organic Seed?"</h2>

<p><strong>The question:</strong> Under 7 CFR 205.204, you are required to use organic seed unless an equivalent organic variety is not commercially available. If you planted conventional, untreated, non-GMO seed instead, the inspector wants to see that you actually looked for an organic option first.</p>

<p><strong>The record that answers it:</strong> Documentation of your commercial availability search, typically showing you contacted at least three different suppliers before concluding the organic variety was not available in the form, quantity, or timeframe you needed. Keep the supplier names, the dates you contacted them, their responses, and the seed lot number and supplier certificate for whatever you ultimately planted.</p>

<h2>Buffer Zones and Adjoining Land: "What Happened to the Buffer-Row Crop?"</h2>

<p><strong>The question:</strong> Under 7 CFR 205.202(c), if your organic ground adjoins land that is not organically managed, you need a buffer or another documented method to prevent contact with prohibited substances. The inspector's question is specific: where is the buffer, and what happened to whatever grew inside it?</p>

<p><strong>The record that answers it:</strong> A buffer zone diagram or description in your Organic System Plan showing where the buffer sits relative to the adjoining land, plus a harvest record showing the buffer-strip crop was either excluded from your organic harvest or segregated and sold or labeled as non-organic. "We have a buffer" is not the record. What happened to that strip at harvest is the record.</p>

<h2>Harvest-to-Sale Traceability: "Can You Connect This Field to This Sale?"</h2>

<p><strong>The question:</strong> Inspectors run traceback and mass-balance checks: pick a sale and trace it back to the field it came from, or pick a harvest and trace it forward to where it was sold. If the quantities do not reconcile, or the chain has a gap, that becomes a finding.</p>

<p><strong>The record that answers it:</strong> A harvest log with field, date, and quantity, connected to a storage or lot identifier, connected to a sales record with buyer, quantity, and date. Each link has to actually add up: what you harvested should account for what you sold plus what is still in inventory. For wholesale orchard crops, this chain often runs through a third party, a huller for walnuts and almonds, a packing house for citrus and avocados, so keep the receiving tickets or settlement sheets from that handler as part of your own record, not just the check that eventually comes back.</p>

<h2>Equipment Cleanout: "Was This Used on Conventional Ground First?"</h2>

<p><strong>The question:</strong> If you share equipment, bins, or storage with a conventional operation, or use custom equipment that was previously on non-organic ground, the inspector wants to know it was cleaned before it touched your organic crop. This is common in tree nut orchards that bring in a custom harvester or shaker crew that also works conventional ground, and it falls under the commingling and contact-prevention requirements at 7 CFR 205.272.</p>

<p><strong>The record that answers it:</strong> A cleanout log: date, method used, what the equipment was used for previously, and who verified the cleaning was complete. "We always clean it" without a log entry is a practice, not a record, and inspectors are checking records.</p>

<h2>The Five-Year Rule Behind All of It</h2>

<p>Every record above is only useful if it is still there when someone asks for it. 7 CFR 205.103 requires certified operations to keep records that fully disclose all activities and transactions, and 205.103(b)(3) sets the retention period at not less than five years beyond their creation. Records also have to be "readily auditable," meaning organized enough that anyone reviewing them can actually find what is being asked for. A drawer of receipts in date order counts. A box nobody has sorted since last season does not, even if every piece of paper is technically in it somewhere. Our guide to <a href="/blog/organic-record-keeping-guide">organic record-keeping under NOP</a> covers the full recordkeeping requirement in more depth.</p>

<h2>A Simple Way to Prepare</h2>

<p>Before your next inspection, walk through the five areas above and pull the relevant records into one place for each: input applications, seed sourcing, buffer documentation, harvest-to-sale records, and equipment cleanout logs. Doing this the same week you close out your <a href="/blog/organic-renewal-season-calendar">annual update</a> means you are not repeating the work twice. If you can hand over the record that answers each question without reconstructing it on the spot, the inspection moves fast. If you are searching for one of these mid-inspection, that gap is exactly what a finding looks like.</p>

<p>Trazo's event forms are built around these same five questions. Each entry asks for the field, the date, and the specific details a certifier will look for, so the record exists in the form an inspector wants it, not just in a form you happen to remember writing. The Starter plan is free. <a href="https://app.trazo.io/auth/signup" target="_blank" rel="noopener noreferrer">See how a logged event becomes an inspection-ready record</a>.</p>
    `,
  },
];
