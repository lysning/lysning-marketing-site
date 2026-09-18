# Narrative
Last updated: 2026-07-03

The product story and vision. Prose reflects what Lysning is today; anything not yet known is
framed as an explicit **Bet** with a validation line, not left blank.

## One-liner
Three candidates — pick one; the others become copy variants for store-listing tests. Privacy
is supporting proof in all three, never the hook (payers buy results, not privacy — see
Business model).

- **A (confidence-led):** _One number you can trust: what's actually safe to spend today._
  Sharpest emotional hook; risks under-selling goals/foresight.
- **B (results-led):** _Know what's safe to spend — and keep every goal funded — from one
  honest number._ Sells the outcome payers value; slightly longer.
- **C (hybrid):** _A goal-first money app that tells you what's truly safe to spend today —
  and never needs your data in the cloud._ Closest to the original seed; privacy as the
  closing proof, not the lead.

## The problem
People don't lack transaction trackers; they lack **confidence about what they can actually
spend**. Existing tools fail in a few recurring ways:
- The headline balance is a lie — pending charges, transfers between your own accounts, and
  refunds make it untrustworthy, so people over- or under-spend out of anxiety.
- Budgeting apps are backward-looking and guilt-driven (categorize the past), not
  forward-looking (what's safe now, given my goals).
- Cloud-first aggregators require handing your full financial history to a third party — a
  growing discomfort, and a regulatory/PII liability.

## Why now
- **Privacy backlash + on-device compute** make a genuinely local-first finance app viable
  and attractive.
- **India's Account Aggregator framework** (SETU/FINVU) and mature aggregators elsewhere
  (Plaid/Yodlee) make *optional, consented* bank connectivity possible without forcing a
  cloud-first model.
- Subscription PFM has been validated globally (YNAB, Monarch, Copilot, Qapital, Plum) — users
  will pay for a tool they trust with their money decisions.

## Our thesis
The wedge is **trust in a single number: Safe to Spend.** We earn it by (a) reconciling away
bank-sync noise so balances reflect real money, and (b) letting goals *earmark* real money in
real accounts so committed funds can't be double-spent. Done on-device, this is something
cloud-first incumbents structurally won't copy. Privacy is the structural moat and the trust
foundation — but it is not what converts payers; **results are** (see Business model).

## How it becomes essential
In a saturated market, being *better* isn't enough — Lysning has to become the thing users
can't drop. The mechanism is a deliberate ladder: **trust → ritual → foresight.**

1. **Trust (day 1, built):** a reconciled, earmark-aware Safe to Spend is a number worth
   believing — most apps show a noisy balance; we show real spendable money, verifiably
   on-device.
2. **Ritual (week 1+, design adopted / build in progress):** the 30-second morning
   orientation (design-guidelines §1.1) turns that trusted number into a daily habit — open,
   see where you stand, take one micro-action, close feeling more capable.
3. **Foresight (paying, mostly bet):** projections, pre-computed paths, consequence modeling
   ("shift ₹200 from Entertainment and July stays on track"), ending at LLM money Q&A. This
   is what users pay for.

Each rung depends on the one below: foresight from an untrusted number is noise; a ritual
around a number you doubt dies in a week. Sequencing releases and premium features against
this ladder is the strategy.

## The product
How the thesis shows up in the build today (everything below serves the **trust** rung; the
ritual and foresight rungs are design-adopted and roadmap respectively):
- **Goal-first onboarding** — a 3-step flow (goal → income → safe-to-spend) that sets up
  forward-looking planning, not retrospective categorization.
- **Earmarked goals** — an append-only funding ledger sets aside real money per account;
  `available = balance − Σ earmarks` so the same rupee/dollar is never committed twice.
- **Safe to Spend** — a planning figure (v1) and a horizon-bounded forecast (v2) to month-end
  and next payday.
- **Reconciliation** — refunds, "owed by others" receivables, and transfer pairing net out
  noise so goal + Safe-to-Spend math stays honest.
- **"One pipeline, three doors" import** — manual, spreadsheet, and (future) account-aggregator
  all flow through one validated pipeline; adding a source is just a new adapter.

## Principles
- **Local-first & private** — your data stays on your device by default; connectivity is
  opt-in and consented, never required.
- **Honesty over vanity numbers** — show the real spendable figure, even when it's
  uncomfortable.
- **Planning, not nagging** — help decide forward, don't shame the past. Nudges are neutral,
  optional, and one-time, never guilt-framed: we suggest ("many people start with 2–3 months
  of expenses"), we don't scold ("OVER BUDGET"). Binary red/green pass-fail framing is what
  drives the industry's ~67%/30-day churn — we avoid it deliberately.

## Who it's for
**Bet — primary persona open; three candidates, validated post-launch.** "Privacy-conscious"
is a trait shared across all three, not a persona of its own (privacy-maximal users are served
by the free tier — see Business model).

| Candidate | Who | Why they'd stay | How we find out |
|---|---|---|---|
| **India urban salaried saver** | 25–40, UPI-heavy, salaried, saving toward concrete goals (wedding / house / emergency fund) | Earmarked goals + honest STS in a market of lending-led free apps | Onboarding goal-type mix + D30 retention by goal cohort (shipped analytics events); launch-market interviews |
| **Anxious avoider** | Dreads checking money; avoids their banking app | The sanctuary: a judgment-free place to look, no red, no scores | Interview screener ("how often do you check your balance, and how does it feel?"); retention of low-balance / tight-STS cohorts |
| **Ex-YNAB / spreadsheet refugee** | Tried method-heavy tools, churned from friction or guilt | The answer (STS) without the bookkeeping (assign-every-dollar) | Spreadsheet-import usage as an entry signal; "what did you use before?" survey at onboarding |

Whichever converts to paid first becomes primary; the others stay served, not chased.

## What we're NOT
- Not an envelope-budgeting clone focused on categorizing every past expense.
- Not a cloud-first aggregator that requires linking all accounts to function.
- Not an investing / lending / credit-score upsell funnel; no ads, no data sale, no
  bill-negotiation revenue cut.
- **No SMS / notification parsing** — deferred, not killed (2026-07). Android-only,
  Play-policy risk, fragile, and cannibalizes premium sync; we choose consented AA sync
  instead. Revisit only if AA coverage/consent friction proves too high
  (`competitive.md` §Non-goals).

## Market & rollout
- **Launch:** India first (INR default, AA-framework-ready) — the **validation market**:
  prove the import → trusted-STS → retention loop and AA sync UX cheaply.
- **Revenue markets, in sequence:** **UK** (first Western entry — cheap open banking,
  English, beatable incumbents) → **US** (highest ARPU) → **EU** country-by-country.
  **AUS and Canada parked** (CDR accreditation cost; CA rails not live). Full rationale:
  `competitive.md` §Beachhead economics.
- Target user everywhere: **20–40 salaried, outcome-driven** — the pitch leads with the
  result ("one number you can trust"); local-first privacy is the proof point beneath it,
  not the headline.

## Business model
**Premium subscription.** No ads, no data sale. **Privacy-forward, not absolutist** (restated
2026-09-18; the framing "the free tier is the privacy-maximal product" is superseded, as it is
in the app repo's narrative). Privacy maximalists are not the target — they go back to
spreadsheets or stay on free, and do not convert. Lysning uses disclosed usage signals to find
product-market fit, always honours a person's privacy choice, and treats privacy and security
done well as a small edge over large competitors, not as the identity. Privacy earns the trust
to try; foresight — consequence modeling, sync convenience, household view — is what converts. Premium features are sequenced against the foresight rung of the
essentialness ladder (above).

- **Free — fully on-device.** Safe-to-Spend calendar, manual + spreadsheet ingestion,
  savings/goals, category splits, categorization rules (apply to past/future), soft + goal
  budgets, reports, and local export. No financial data leaves the phone — the only egress is
  opt-in, anonymous PostHog (EU) usage analytics, off by default (see `security.md`).
- **Premium — backend-connected.** AA sync, household view, cloud backup (Google Drive /
  iCloud), PDF export, regular/irregular income alerts, and (later) the LLM money Q&A.
  Because premium syncs data to a backend, it requires a **separate privacy policy and Terms
  & Conditions** from the local-only free tier — see `security.md`.

LLM Q&A ("how do I save for a car?", "what to drop to afford a mortgage?") is sequenced last;
the planning, ingestion, savings, and reporting features land first.

A middle **"premium lite"** tier is under consideration, not finalized — if it lands, it must
not move the privacy boundary (either stays local-only or inherits the premium policy).
Pricing, the exact free/premium boundary, and India-vs-Western tiers are TBD — benchmarks and
candidate paid features in `competitive.md`, financials in `metrics.md`.

## Moat / why we win
See `competitive.md`. In short: the **Safe-to-Spend + reconciliation + earmarking** loop done
**local-first** is hard for cloud-first incumbents to replicate without abandoning their model.
The moat keeps rivals out and earns first trust; retention and revenue come from what we build
on top of it — the ritual and the foresight, which incumbents *can* copy and we must simply do
better.

## Vision (1–3 years)
Opt-in AA sync → optional encrypted multi-device → smarter forecasting and automation
(culminating in the LLM money Q&A) — all while keeping the local-first, privacy-first default.
Every step climbs the same ladder: more foresight, on a number the user already trusts.
