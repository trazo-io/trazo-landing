# CLAUDE.md — trazo-landing (Next.js 16 + Tailwind v4 + Radix/Shadcn)

Mirror of the review-critical subset of the workspace rules (`~/dev/trazo/CLAUDE.md`
+ `.claude/rules/*`), which live outside this repo and are therefore invisible to CI.
Deployed on Vercel (www.trazo.io). Keep this short; edit it deliberately when a rule changes.

## This repo is marketing copy — every claim is regulated
Trazo is a transparency-first recordkeeping platform for specialty crop farms. The formula is
**more events → a renewal packet and audit exports that draft themselves → less time at
inspection.** ⛔ It is NOT "more events → higher transparency score → consumer trust → premium
positioning": there is no score, and "premium positioning" is a pricing-outcome promise.

### Mandatory checklist before ANY sustainability claim
1. Is the statistic sourced (publication, year, author)? No fabricated attributions.
2. Does it imply third-party verification? Only claim "verified" for USDA Organic DB matches.
3. Does it promise pricing outcomes? No price or premium claims: never "premium positioning",
   "earn premium prices" or "20-40% premium".
4. Would it survive FTC scrutiny — **16 CFR 260.4** (the catch-all for any unquantified
   "sustainable/eco/green" claim), **260.6** for certifications and seals, **260.6(d)** for a seal
   that does not convey its own basis?

| Context | SAFE | UNSAFE |
|---|---|---|
| Emission factors | per input class (see below) | "USDA Verified", "USDA Certified", a blanket "EPA/USDA-sourced" |
| Blockchain | "blockchain-recorded", "tamper-proof" | "blockchain-verified" |
| Certifications | "Verified via USDA Organic Integrity Database" (DB matches only) | "Certified by Trazo" |
| Market positioning | product outcomes: "less time at inspection" | "premium positioning", "earn premium prices" |
| Carbon | "direct operational emissions" + the manufacturing half | "carbon footprint" (implies full LCA), "carbon neutral" |

Regulators: **FTC Green Guides** 16 CFR 260, $50K+/violation (Truly Organic precedent $1.76M) ·
**EU ECGT** Directive 2024/825, effective **2026-09-27**, bans self-created sustainability labels
without third-party verification · **California Truth in Environmental Advertising Act** (2024).

## ⛔ Hard bans on this site
- **No transparency score, anywhere.** No 0-100 figure, no percentage, no grade, no weighted-
  category table, no formula. `/methodology` was publishing the seven weighted categories and the
  formula days before the first pilot mailings — that is precisely the self-created
  sustainability label ECGT 2024/825 targets. Do not restore it in any form.
- **No free trial.** Starter is **free forever** — no card, no clock. A "14-day free trial" claim
  once survived on the $249 plan and needed a migration to kill.
- **"328+ AI templates" is UNSOURCED** and appears nowhere in the seeder. Do not publish it.
  **33 US crops** is counted and safe. 7 event categories, 3 input methods (form / template /
  voice, all live).
- Blockchain is **not** consumer-facing; the $15/mo add-on is **WITHDRAWN**. Say "recorded",
  never "verified".
- Carbon provenance is per input class: diesel/petrol/electricity and nitrogen are EPA-published;
  **P2O5 and K2O are Trazo internal estimates**; pesticide/herbicide are academic LCA (Audsley
  2009), not a US agency. Attributing Trazo's own estimates to a government agency is the exact
  claim shape that is forbidden.
- Only OSP **exports** are gated, not the OSP itself. The plain records export is free.

## Pricing shown on the site
Starter free forever (1 farm, unlimited parcels/productions, 10 GB, no certifier exports) ·
Compliance **$249/yr** per farm (25 GB, certifier exports) · Operation **$1,200/yr** per
operation (unlimited farms, 100 GB). One add-on is sold: **Extra Farm $149/yr**. Crossover to
Operation lands at 8 farms.

## Brand
- **`--primary` in `app/globals.css` must stay byte-identical to `#2E7D32`** (the app's
  `green.700`). It was `oklch(0.59 0.14 148)` = `#35934A`, hue 133° — 10° off the app and 13-16°
  off the logo, which is why the marketing site and the app read as two different products. Past
  ~5° people stop seeing a shade and start seeing a different colour. **Landing follows the app,
  never the reverse** — the landing routes everything through this one token (a one-line change),
  while re-aligning the app would be ~900 elements.
- ⛔ `#059669` / Tailwind emerald is not ours. Green coverage is a token too: this site runs ~4.3%
  green and that is correct.
- Use **™** (not ® until registered). Entity name is **"Trazo"** only — no Inc./LLC until formed.
  Contact emails are @trazo.io (legal@, privacy@, support@).

## Legal pages
Privacy Policy, Terms of Service, Cookie Policy all live here. Cookie consent banner on all
pages; the footer "Cookie Preferences" link re-triggers it. Cookie Policy at `/cookie-policy`.

## ⛔ A file in `public/` is a URL
A pulled demo video stayed reachable at `/videos/trazo-demo.mp4` for five months after it was
removed from the page. Removing a link does not remove the asset — delete the file.

## Safe stats
20% dropout (UC Davis, without the reason-clause) · 76% FMI · 57% QR. Source of truth for sales
claims: `documentation/sales/TRAZO_ONEPAGER.md` in the workspace root.
