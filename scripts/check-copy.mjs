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
      "Five-year retention is 7 CFR 205.103(b)(4). (b)(3) is audit-trail documentation and the labeling category (eCFR, read 2026-09-30).",
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
    // The legal pages' "no score, grade, tier or badge" lists wait on a Terms-version decision
    // (the backend records terms_version at sign-up). Remove these once that wording changes.
    allow: ["app/terms-of-service/page.tsx", "app/privacy-policy/page.tsx"],
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
      "A 90% fuzzy name match against the Organic Integrity Database. The limit is stated beside the claim, not a page away.",
    find: (text) =>
      [...text.matchAll(/Verified via USDA Organic Integrity Database/g)]
        .filter((m) => !/not an inspection/i.test(text.slice(m.index, m.index + 300)))
        .map((m) => m.index),
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
