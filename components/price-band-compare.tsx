"use client";

import { useId, useState } from "react";
import Link from "next/link";

/**
 * Pick-your-revenue price comparison.
 *
 * WHY THIS IS NOT A STATIC TABLE
 * ------------------------------
 * It used to print "Quick Organics — $150 – $4,250". A reader anchors on the smallest
 * number in a range, and $150 is CHEAPER than $249, so the table argued against us for
 * every visitor who did not stop to work out where they personally landed. The real
 * comparison only exists at a specific revenue: a $1–2M orchard — the ICP — pays them
 * $1,175 against our $249.
 *
 * So the reader picks their own band and sees two concrete numbers. Their own public
 * pricing page uses exactly this control, which is what makes the figures checkable.
 *
 * WHY THEIR FREE YEAR IS STATED HERE
 * ----------------------------------
 * Quick Organics gives the first 12 months free and says so five times on their own
 * site. Listing a competitor's price while omitting their strongest term is the kind of
 * selective comparison a serious buyer discovers in one click, and then stops trusting
 * every other number on the page. We state it, and make the year-two argument instead —
 * which is the honest one, and the one that holds.
 */

const TRAZO_YEARLY = 249;

/** Quick Organics' published bands, read from their own pricing control. */
const BANDS = [
  { label: "Under $100,000", qo: 150 },
  { label: "$100,000 – $250,000", qo: 350 },
  { label: "$250,000 – $500,000", qo: 475 },
  { label: "$500,000 – $750,000", qo: 650 },
  { label: "$750,000 – $1 million", qo: 850 },
  { label: "$1 million – $2 million", qo: 1175 },
  { label: "$2 million – $5 million", qo: 2500 },
  { label: "$5 million – $10 million", qo: 4250 },
  { label: "Over $10 million", qo: null },
] as const;

/** Defaults to the ICP band, not the cheapest — that is where a real reader lands. */
const DEFAULT_BAND = 5;

const usd = (n: number) => `$${n.toLocaleString("en-US")}`;

export function PriceBandCompare() {
  const [i, setI] = useState(DEFAULT_BAND);
  const selectId = useId();
  const band = BANDS[i];
  const diff = band.qo ? band.qo - TRAZO_YEARLY : null;

  return (
    <div className="mt-8 rounded-2xl border border-border bg-card p-6 md:p-8">
      <div className="flex flex-col gap-2">
        <label
          htmlFor={selectId}
          className="text-sm font-semibold text-foreground"
        >
          Your farm&rsquo;s gross organic revenue
        </label>
        <select
          id={selectId}
          value={i}
          onChange={(e) => setI(Number(e.target.value))}
          className="w-full rounded-lg border border-border bg-background px-4 py-3 text-base text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary md:max-w-sm"
        >
          {BANDS.map((b, idx) => (
            <option key={b.label} value={idx}>
              {b.label}
            </option>
          ))}
        </select>
        <p className="text-xs text-muted-foreground">
          Quick Organics prices by this figure. Trazo does not ask for it.
        </p>
      </div>

      <div className="mt-7 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border-2 border-primary bg-primary/5 p-5">
          <p className="text-sm font-semibold text-foreground">
            Trazo Compliance
          </p>
          <p className="mt-2 text-3xl font-bold tabular-nums text-foreground">
            {usd(TRAZO_YEARLY)}
            <span className="text-base font-normal text-muted-foreground">
              {" "}
              / year
            </span>
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Per farm, flat. The same at every revenue on this list.
          </p>
        </div>

        <div className="rounded-xl border border-border p-5">
          <p className="text-sm font-semibold text-foreground">Quick Organics</p>
          <p className="mt-2 text-3xl font-bold tabular-nums text-foreground">
            {band.qo ? usd(band.qo) : "Contact them"}
            {band.qo && (
              <span className="text-base font-normal text-muted-foreground">
                {" "}
                / year
              </span>
            )}
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            {band.qo
              ? "Their published rate for this band, after the first year."
              : "Above $10 million they do not publish a price."}
          </p>
        </div>
      </div>

      {diff !== null && diff > 0 && (
        <p className="mt-5 text-center text-sm text-foreground">
          At this revenue you would pay{" "}
          <strong className="text-primary">{usd(diff)} less per year</strong>{" "}
          with Trazo — and the gap widens every year your farm grows, because
          ours does not move.
        </p>
      )}
      {diff !== null && diff <= 0 && (
        <p className="mt-5 text-center text-sm text-foreground">
          At this revenue Quick Organics lists{" "}
          <strong>{usd(Math.abs(diff))} less per year</strong> than Trazo. We
          would rather you saw that than found it yourself — the flat price is
          built for farms above this band, and it stops mattering the year you
          cross it.
        </p>
      )}

      {/* Stated plainly, because they state it five times on their own site and a
          serious buyer will find it. Conceding it costs one sentence; being caught
          omitting it costs every other number on this page. */}
      <p className="mt-6 border-t border-border pt-5 text-sm leading-relaxed text-muted-foreground">
        <strong className="text-foreground">
          One thing they do that we do not:
        </strong>{" "}
        Quick Organics gives your first 12 months free, so their year one costs
        nothing and ours costs {usd(TRAZO_YEARLY)}. If your only question is this
        season, they are cheaper. Our Starter plan is also free forever, and the
        comparison above is the one that decides year two onward.
      </p>

      <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
        Bands and rates as published by Quick Organics on their pricing page,
        checked 16 August 2026. COG Pro announced it stops service on 31 December
        2026 and is not accepting new subscriptions;{" "}
        <Link href="/cog-pro-migration" className="text-primary underline">
          we import your records free
        </Link>
        . If a competitor&rsquo;s price changes, tell us and we will correct this.
      </p>
    </div>
  );
}
