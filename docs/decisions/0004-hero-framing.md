# ADR 0004 — Hero framing

**Status:** **open — reopened, not decided.** The earlier "locked on candidate C" is withdrawn.
Do not treat any line below as chosen. The shipped hero is placeholder copy.

## Why it was reopened

Candidates A, B and C (from `reference/narrative.md`) all lead on **Safe-to-Spend**, on the thesis
that STS is the wedge. That thesis does not hold up:

- **Safe-to-Spend is not new.** PocketGuard has shipped a "Safe to Spend" for years; Simplifi,
  Monarch and several UK apps ship the same idea under other names. It may sit behind a paywall
  elsewhere, which is a pricing advantage for us — it is not a novelty claim, and a hero that
  announces it as one is checkable and wrong.
- **Goals are not new either.** Qapital, Plum, Monarch and YNAB all ship goals. Earmarking real
  money rather than tracking a number is a genuinely better mechanic, but it is a *mechanic* —
  it explains why our number is trustworthy, it does not by itself say what the app is for.
- Leading on either means opening with a claim a reader can dismiss in one line: *my app
  already does that.*

## What actually differentiates

**The goal affordability calendar.** Lysning works out, from how much you can actually save,
**when each goal becomes affordable** — and shows it as a date you can plan around. Shipped and
working today.

That reframes the whole category position. Nearly every competitor is **retrospective**: it
categorises what already happened and reports it back. Lysning is **prospective**: it answers
*when can I have this, and what changes that date.* Safe-to-Spend and earmarked goals are the
arithmetic underneath the date; they are supporting mechanics, not the headline.

The hero should therefore lead on **the date**, or on **forward planning**, and mention
Safe-to-Spend only as proof that the date is honest.

## Candidates (none chosen)

Legacy, all STS-led — retained as store-listing variants only, not hero candidates:
- **A (confidence-led):** One number you can trust: what's actually safe to spend today.
- **B (results-led):** Know what's safe to spend — and keep every goal funded — from one honest number.
- **C (hybrid):** A goal-first money app that tells you what's truly safe to spend today — and never needs your data in the cloud.

New, planning-led — the direction to pick from:
- **D (date-led):** *Not "can I afford it?" — "when can I afford it?"* Sharpest contrast with the
  category; assumes the reader grants that the second question is the better one.
- **E (capacity-led):** *What you can save decides when you can have it. Lysning does that maths,
  and keeps it honest.* States the mechanism; longer, less of a hook.
- **F (prospective-led):** *Every other money app explains the month you just had. This one plans
  the ones coming.* Strongest category framing; edges toward competitor comparison, which
  `reference/gtm.md` says must be re-verified before public use — this phrasing names no rival,
  so it likely clears, but check.

## To decide before the hero copy is final
1. Which line (or a new one in this direction).
2. Whether the hero visual becomes the **affordability calendar** rather than the STS home
   screen. If the calendar is the wedge, the hero mock showing an STS number undercuts the line.
3. Whether "Safe-to-Spend" keeps its capitalised proper-noun treatment once it is no longer the
   hero concept (see `glossary.md`).

## Consequences
- ADR 0005's section order changes with this (see the Amendment there).
- A, B and C stay stored as copy variants for App Store listing tests — that use is unaffected.
