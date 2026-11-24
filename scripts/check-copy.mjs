#!/usr/bin/env node
// Copy check: phrases the site must not publish, each with the reason it was removed.
//
// The site has no tests, and every entry below is a claim that survived a manual fix somewhere
// else first (OSP alignment audit 2026-10, T30). Text is read with whitespace collapsed, so a
// phrase split across JSX lines ("The\n score measures") is still found.
//
// Usage: node scripts/check-copy.mjs   (exit 1 on any finding)

import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname;
const SCAN = ["app", "components", "lib"];
const EXTENSIONS = /\.(tsx?|jsx?|mdx?)$/;

const RETENTION = /(5|five)[\s-]*years?|retention|retain|keep records/i;

const RULES = [
  {
    name: "retention cited as 205.103(b)(3)",
    reason:
      "Five-year retention is 7 CFR 205.103(b)(4). (b)(3) is audit-trail documentation and the labeling category. The Strengthening Organic Enforcement rule (88 FR 3621, Jan. 19, 2023) inserted that (b)(3) and renumbered the rest; copies of the CFR from before 2023 still show retention at (b)(3). Current eCFR read 2026-09-30.",
    find: (text) =>
      [...text.matchAll(/205\.103\(b\)\(3\)/g)]
        .filter((m) => RETENTION.test(text.slice(Math.max(0, m.index - 150), m.index + 150)))
        .map((m) => m.index),
  },
  {
    name: '"the score"',
    reason: "There is no score. The concept is retired, not hidden (transparency-first.md).",
    find: (text) => [...text.matchAll(/\bthe score\b/gi)].map((m) => m.index),
  },
  {
    name: '"score"',
    reason:
      "The transparency and carbon scores are retired concepts, not hidden ones. Naming them, even to deny or to say they were removed, keeps them alive on the site. Say what Trazo shows (counts, documents), or use grade/rating for the denial.",
    find: (text) => [...text.matchAll(/\bscor(e|es|ed|ing)\b/gi)].map((m) => m.index),
    // Code comments explaining a removal are for maintainers and never render.
    skipComments: true,
  },
  {
    name: '"complete records"',
    reason: "Trazo holds the records the operator logged. Completeness is the certifier's call, not a product claim.",
    find: (text) => [...text.matchAll(/\bcomplete records\b/gi)].map((m) => m.index),
    // The Terms put the duty on the operator ("Submit only truthful, complete records"). That is
    // the user's obligation, not a claim Trazo makes.
    allow: ["app/terms-of-service/page.tsx"],
  },
  {
    name: '"full regulated record"',
    reason: "The packet does not substantiate a full record; it states what is answered and what is open.",
    find: (text) => [...text.matchAll(/\bfull regulated record\b/gi)].map((m) => m.index),
  },
  {
    name: '"Verified via USDA" without its limit',
    reason:
      "A cross-reference against the Organic Integrity Database, confirmed by certificate or operation number or a single exact name match in the farm's state (run 8). It is not an inspection, and the limit is stated beside the claim, not a page away.",
    find: (text) =>
      [...text.matchAll(/Verified via USDA Organic Integrity Database/g)]
        .filter((m) => !/not an inspection/i.test(text.slice(m.index, m.index + 700)))
        .map((m) => m.index),
  },
  // Added 2026-10-02 from a read of the live site against compliance.md and
  // carbon-methodology.md.
  {
    name: '"direct" emissions',
    reason:
      "The estimate includes the manufacturing of purchased fertilizer and chemicals, which happens off the farm. Calling it direct, operational or on-farm states half the boundary. Say: the operation's own emissions plus the manufacturing of the fertilizer and chemicals it buys.",
    find: (text) =>
      [...text.matchAll(/\bdirect (operational|farm|on-farm) emissions?\b/gi)].map((m) => m.index),
    skipComments: true,
  },
  {
    name: "blanket EPA/USDA factor provenance",
    reason:
      "Factor provenance differs per input class: EPA for fuel, electricity and nitrogen, academic LCA for pesticides, Trazo's own estimate for P2O5 and K2O. A blanket EPA/USDA attribution credits an agency with Trazo's numbers (compliance.md).",
    find: (text) =>
      [...text.matchAll(/EPA\s*\/\s*USDA|EPA and USDA (factors|sources|data|publications)|EPA \([^)]*\) and USDA/gi)].map((m) => m.index),
    skipComments: true,
  },
  {
    name: '"Most Popular"',
    reason: "Popularity is a claim about customers. Trazo has none paying yet, so the badge is invented.",
    find: (text) => [...text.matchAll(/\bmost popular\b/gi)].map((m) => m.index),
    skipComments: true,
  },
  {
    name: "unmeasured setup or time-saving claim",
    reason:
      "No user has been timed. The pilot rehearsal measured about one workday to set up a paper-records farm, so a minutes figure or a before/after saving is invented until it is measured on real farms.",
    find: (text) =>
      [...text.matchAll(/\b(under|in) 15 minutes\b|comfortable from day one|binder week/gi)].map((m) => m.index),
    allow: ["app/cookie-policy/page.tsx"],
    skipComments: true,
  },
  {
    name: '"transparency" as the product frame',
    reason:
      "The product outcome is the renewal packet and less time at inspection. A farm's transparency, or a transparency record, is the retired framing.",
    find: (text) =>
      [...text.matchAll(/transparency record|farm(&apos;|')s transparency/gi)].map((m) => m.index),
    skipComments: true,
  },
  // Added 2026-10-05 from Astra run 8 (R8-01, 02, 16, 19, 21, 22). Each phrase was live on the
  // site when the review read it.
  {
    name: "notification read as permission",
    reason:
      "7 CFR 205.400(f)(1) is a duty to notify the certifier immediately about a prohibited application, drift included. It is not permission to apply an unapproved input. Recording an input never authorizes it (run 8, R8-01).",
    find: (text) =>
      [...text.matchAll(/provided they notify|may use unapproved inputs/gi)].map((m) => m.index),
    skipComments: true,
  },
  {
    name: "photo grading or verification",
    reason:
      "Photos are evidence the farm attaches. Trazo does not grade records by photos or confirm what a photo shows; penalty tiers, a \"photo verification system\" and \"anti-gaming\" validation described the retired score (run 8, R8-02; widened after the review of landing #22 found \"Photo content verification ... anti-gaming validates\" still live).",
    find: (text) =>
      [...text.matchAll(/photo[\w\s-]{0,20}verification|anti-gaming|penalt(y|ies) without photos|up to \d+% reduction/gi)].map((m) => m.index),
    skipComments: true,
  },
  {
    name: "PASS / REVIEW / FAIL classification",
    reason:
      "The snapshot is a documentation check: present, missing or for the certifier's review. A pass or fail reads as a compliance grade (run 8, R8-02).",
    find: (text) => [...text.matchAll(/PASS\s*\/\s*REVIEW\s*\/\s*FAIL|passes Trazo/gi)].map((m) => m.index),
    skipComments: true,
  },
  {
    name: "completeness of what happened",
    reason:
      "A published page shows what the farm recorded, not everything that happened. \"Nobody can hide\", \"every step tracked\" and \"full traceability\" promise completeness the records cannot establish (run 8, R8-16).",
    find: (text) =>
      [...text.matchAll(/nobody can hide|every step tracked|full traceability/gi)].map((m) => m.index),
    skipComments: true,
  },
  {
    name: "demo farm presented as real",
    reason:
      "The demo farm is fictional and Trazo has no paying customers yet. \"Real screens\" is true; a real certified operation or \"nothing staged\" is not (run 8, R8-19).",
    find: (text) =>
      [...text.matchAll(/nothing staged|real app, on an? [\d.,\s-]*acre certified-organic/gi)].map((m) => m.index),
    skipComments: true,
  },
  {
    name: "Starter limited to one season",
    reason: "Starter is free forever with unlimited productions. \"One season\" reads as a trial (run 8, R8-21).",
    find: (text) => [...text.matchAll(/document one season/gi)].map((m) => m.index),
    skipComments: true,
  },
  {
    name: "21 CFR Part 11",
    reason:
      "21 CFR Part 11 is an FDA electronic-records rule. It does not govern organic records and Trazo was never assessed against it (run 8, R8-22).",
    find: (text) => [...text.matchAll(/21\s*CFR\s*Part\s*11\b/gi)].map((m) => m.index),
    skipComments: true,
  },
  {
    name: "universal record or retention promise",
    reason:
      "What a record carries depends on what the grower entered; anything blank is listed as missing. Retention is enforced for finished seasons only (run 8, R8-22).",
    find: (text) =>
      [...text.matchAll(/every input application carries|all event data, photos, and reports retained|every readiness check traced/gi)].map((m) => m.index),
    skipComments: true,
  },
  {
    name: "premium positioning",
    reason: "A pricing-outcome promise (compliance.md). Trazo sells the renewal packet and less time at inspection.",
    find: (text) => [...text.matchAll(/premium positioning/gi)].map((m) => m.index),
    skipComments: true,
  },
  // Added 2026-10-13 from Astra run 8b (8b-05, 8b-06, 8b-08). Each phrase was live on the site
  // when the review read it. Narrow on purpose: "approved" alone stays legal, because "your
  // record of your certifier's written approval" is a true sentence.
  {
    name: "annual update that assembles itself",
    reason:
      "Trazo prepares a draft change summary for the annual update from the records the grower entered. The grower reviews, completes and signs it, and the certifier's other requirements are the grower's to supply (run 8b, 8b-05).",
    find: (text) => [...text.matchAll(/annual update (itself )?assembl/gi)].map((m) => m.index),
    skipComments: true,
  },
  {
    name: "records back every OSP answer",
    reason:
      "Records sit behind some plan answers, not all of them; many answers are the grower's own description. Say Trazo shows the records next to the answers (run 8b, 8b-05).",
    find: (text) => [...text.matchAll(/every answer in your/gi)].map((m) => m.index),
    skipComments: true,
  },
  {
    name: '"nothing is missing"',
    reason:
      "Trazo cannot know everything a certifier will ask for. It shows which questions are open and which records exist; the rest is the grower's to supply (run 8b, 8b-05).",
    find: (text) => [...text.matchAll(/nothing is missing/gi)].map((m) => m.index),
    skipComments: true,
  },
  {
    name: '"renewal-ready"',
    reason:
      "Readiness for renewal is the certifier's call and depends on documents Trazo does not hold. Name the outputs instead: records section, change-summary draft, workbooks, inspection packet (run 8b, 8b-05).",
    find: (text) => [...text.matchAll(/renewal[- ]ready/gi)].map((m) => m.index),
    skipComments: true,
  },
  {
    name: '"certifier-ready"',
    reason:
      "Implies the certifier will accept what Trazo produces. Trazo organizes the grower's records for the certifier's file; acceptance is the certifier's (run 8b, 8b-05).",
    find: (text) => [...text.matchAll(/certifier[- ]ready/gi)].map((m) => m.index),
    skipComments: true,
  },
  {
    name: "every emission factor credited to one kind of source",
    reason:
      "Factor sources differ per input class, and P2O5 and K2O are Trazo estimates. A sentence that says all factors are government or peer-reviewed, or all cite government publications, contradicts the methodology's own table (run 8b, 8b-08).",
    find: (text) => [...text.matchAll(/all emission factors (are|cite)/gi)].map((m) => m.index),
    skipComments: true,
  },
  {
    name: '"approved for organic growing"',
    reason:
      "A listing match or a farm's recorded basis does not show that a product, or this application of it, was approved. Describe what is recorded and its source (run 8b, 8b-06).",
    find: (text) => [...text.matchAll(/approved for organic growing/gi)].map((m) => m.index),
    skipComments: true,
  },
  {
    name: '"approved materials list"',
    reason:
      "The list is the materials list on the grower's plan, written by the operator. Calling it approved states a certifier decision Trazo cannot see (run 8b, 8b-06).",
    find: (text) => [...text.matchAll(/approved materials list/gi)].map((m) => m.index),
    skipComments: true,
  },
  {
    name: "Common OSP answers carry across every certifier",
    reason:
      "Each certifier decides whether to use the Common OSP. CCOF said on 2026-07-14 that it is not moving to it, and WSDA keeps its own living plan. Name an adopter only from its own published words (overall review 2026-11, OV-CLM-C01).",
    find: (text) =>
      [...text.matchAll(/regardless of (the |your |which )?certifier/gi)].map((m) => m.index),
    skipComments: true,
  },
  {
    name: "the packet as what the grower sends",
    reason:
      "At CCOF, WSDA and Oregon Tilth the grower files on the agent's own forms; the packet is what they copy from. Say \"review it, then file on your certifier's forms\", never \"sign and send\" (overall review 2026-11, OV-CLM-C02).",
    find: (text) => [...text.matchAll(/sign and send/gi)].map((m) => m.index),
    skipComments: true,
  },
  {
    name: "a plan that covers everything for renewal",
    reason:
      "The plan produces records and drafts; the certifier's other requirements are the grower's. Name the outputs (overall review 2026-11, OV-CLM-C02).",
    find: (text) =>
      [...text.matchAll(/everything (one|a|your) (certified )?farm needs/gi)].map((m) => m.index),
    skipComments: true,
  },
  {
    name: '"WSDA renewal packet"',
    reason:
      "WSDA takes section updates to the plan it holds and sends each grower its own renewal application, which Trazo has not seen. It told us in writing that the fee form we had mapped is not the one it sends (overall review 2026-11, OV-CLM-C02, OV-PK-W02).",
    find: (text) => [...text.matchAll(/WSDA renewal packet/gi)].map((m) => m.index),
    skipComments: true,
  },
  {
    name: "unsourced comparison with other tools",
    reason:
      "\"Most tools ignore them\", \"every tool copies them across\" and \"like other organic software\" had no dated competitor comparison behind them, and Quick Organics and Organic Assistant ship some of what they denied. Say what Trazo does (overall review 2026-11, OV-CLM-C15).",
    find: (text) =>
      [...text.matchAll(/\bmost tools\b|\bevery tool\b|like other organic software/gi)].map((m) => m.index),
    skipComments: true,
  },
  {
    name: "attachment workbooks called required",
    reason:
      "The four attachments are required only under the USDA Common OSP, which none of the certifiers Trazo supports uses. The Common OSP page may say so because it describes that template (overall review 2026-11, OV-CLM-C08).",
    find: (text) => [...text.matchAll(/required (OSP )?attachment/gi)].map((m) => m.index),
    allow: ["app/common-osp/page.tsx"],
    skipComments: true,
  },
  {
    name: "a count of OSP modules",
    reason:
      "The page said 19 while the registry held 20, and which modules a farm sees depends on its certifier. A count drifts with every module added (overall review 2026-11, OV-CLM-C13).",
    find: (text) => [...text.matchAll(/\b\d+ guided modules\b/gi)].map((m) => m.index),
    skipComments: true,
  },
  {
    name: "the free export carries everything",
    reason:
      "The free CSV ZIP leaves out the plan answers and the materials list; they come out in the Compliance packet (trazo-back records_export.py README, overall review 2026-11, OV-CLM-C09).",
    find: (text) =>
      [...text.matchAll(/raw data never is|reading and exporting all/gi)].map((m) => m.index),
    skipComments: true,
  },
  {
    name: "crew text translated for filing",
    reason:
      "Nothing translates free text: structured fields print in English, a crew note keeps its own words. A crew message is a suggestion someone at the farm saves (overall review 2026-11, OV-CLM-C14).",
    find: (text) => [...text.matchAll(/you file in english/gi)].map((m) => m.index),
    skipComments: true,
  },
  {
    name: '"fuzzy" matching',
    reason:
      "Input checks match exact names (case and spacing ignored) and a hand-checked alias table; a partial match is only a possible match and decides nothing. The methodology page says so (overall review 2026-11, OV-CLM-C17).",
    find: (text) => [...text.matchAll(/\bfuzzy\b/gi)].map((m) => m.index),
    skipComments: true,
  },
];

/** True when raw[index] sits inside a // line comment or a /* block comment *\/. */
function inComment(raw, index) {
  const lineStart = raw.lastIndexOf("\n", index) + 1;
  if (raw.slice(lineStart, index).includes("//")) return true;
  return raw.lastIndexOf("/*", index) > raw.lastIndexOf("*/", index);
}

function* files(dir) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) yield* files(path);
    else if (EXTENSIONS.test(name)) yield path;
  }
}

const findings = [];
for (const top of SCAN) {
  for (const path of files(join(ROOT, top))) {
    const raw = readFileSync(path, "utf8");
    // Collapse whitespace, remembering where each collapsed character came from, so a finding
    // reports the real line.
    const map = [];
    let text = "";
    for (let i = 0; i < raw.length; i++) {
      if (/\s/.test(raw[i])) {
        if (text.endsWith(" ")) continue;
        text += " ";
      } else {
        text += raw[i];
      }
      map.push(i);
    }
    for (const rule of RULES) {
      if (rule.allow?.includes(relative(ROOT, path))) continue;
      for (const at of rule.find(text)) {
        if (rule.skipComments && inComment(raw, map[at])) continue;
        const line = raw.slice(0, map[at]).split("\n").length;
        findings.push(`${relative(ROOT, path)}:${line}  ${rule.name}\n    ${rule.reason}`);
      }
    }
  }
}

if (findings.length) {
  console.error(`check-copy: ${findings.length} finding(s)\n\n${findings.join("\n")}`);
  process.exit(1);
}
console.log("check-copy: clean");
