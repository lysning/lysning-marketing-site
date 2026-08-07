# Product Roadmap
Last updated: 2026-07-10

Canonical feature plan. Strategy lives in `narrative.md`; the competitive rationale and paid-
feature benchmarks in `competitive.md`. Status reflects the codebase at the time of writing and
should be re-checked against the repo — treat **shipped** claims as "verify in code," not gospel.

## Model & boundaries
- **Free — fully on-device.** No account, no server; no financial data leaves the phone (the only egress is opt-in, anonymous PostHog EU usage analytics — `security.md`).
- **Premium — backend-connected** subscription (AA sync, household, cloud backup, alerts, LLM).
  Separate privacy policy + T&C (see `security.md`). No ads, no data sale.
- **Sequencing:** ship solid local features first (ingestion, budgeting, categories, reports,
  backup), then premium sync + multi-user, then AI last.
- **Deliberate non-goals:** SMS/notification parsing; investing/lending/credit-score upsells;
  bill-negotiation revenue. **Note:** off-budget accounts (below) track savings/investment
  vehicles at **cost basis only** — no market value, NAV, returns, or portfolio monitoring.
  That is funding bookkeeping, not wealth management, and stays inside the non-goal.

Status legend: ✅ shipped · 🟡 partial / in progress · ⬜ planned · 🔒 premium

## The 0–11 feature list

| # | Feature | Tier | Status | Notes |
|---|---------|------|--------|-------|
| 0 | Safe-to-Spend calendar | Free | 🟡 | STS v1 (planning) + v2 (horizon forecast to month-end/payday) computed in `safeToSpend.ts`; day-by-day **calendar view** is the remaining UI piece |
| 1 | Ingestion — manual + spreadsheet | Free | ✅ | "One pipeline, three doors": `adapters/{manual,spreadsheet}` → validate → dedup → reconcile → commit |
| 1 | Ingestion — AA sync | 🔒 Premium | ⬜ | `adapters/aa-api` scaffold exists; needs aggregator integration (SETU/FINVU/Plaid/Yodlee) + backend |
| 2 | Savings as first-class | Free | 🟡 | Base shipped: goals + append-only funding ledger; `available = balance − Σ earmarks`. Deepened into self-maintaining goals under **Funding rhythm** below (drip, off-budget accounts, velocity, resilience) |
| 3 | Household view | 🔒 Premium | ⬜ | Multi-user/shared budgets; depends on backend + auth |
| 4 | Category-wise expenditure split | Free | 🟡 | Category hierarchy + split transactions exist; report/breakdown UI is the gap |
| 5 | Easy categorization rules (retroactive + future) | Free | ⬜ | **Rules UI deferred to Phase 2** (epic #102). Engine (`rules`/`categorize`/`settings/rules` route) retained but unsurfaced. v1 categorization = **merchant defaults** applied on both manual entry and import. |
| 6 | Ask-LLM money questions | 🔒 Premium | ⬜ | **Last** in sequence; needs backend + advice/education framing (see §Compliance) |
| 7 | Regular/irregular income alerts | 🔒 Premium | ⬜ | Scheduled-txn engine fires at launch; detection + alerting layer not built. Income **detection** also gates income-triggered goal funding (see Funding rhythm); manual "I got paid" tap is the free fallback |
| 8 | Budgets — soft + goal | Free | 🟡 | Goal budgets via goals/funding; **soft (warn-not-block)** budgets shipped as **Plans** — per-category recurring allowances on the revived `budgets` table + `budgets.ts` repo + `settings/plans` (#26). Monthly-only. Direction finalized in `plans.md` (co-equal with goals; payday waterfall; uncapped positive carry + month-boundary surplus→goal nudge; period history; payday ritual; consequence+recovery) — sequenced as #229 → history/rollover → ritual → recovery → #230/#231 |
| 9 | Reports | Free | 🟡 | Activity views exist; richer charts/cashflow reports planned |
| 10 | Backup to Google Drive / iCloud | 🔒 Premium | ⬜ | **Deferred to Phase 2/3.** Client-side-encrypted, user-owned cloud (see `security.md`). Local export/backup stays free in v1. |
| 11 | Export CSV → PDF | mixed | 🟡 | CSV export free (**shipped** — transactions → CSV via OS share sheet, #181); polished **PDF** export premium |

## Phasing
- **Phase 1 — Local core (free):** finish STS calendar (0), category-split reports (4),
  categorization-rule apply + UI (5), richer reports (9), local backup/export (10-local).
  *Shipped: soft budgets as Plans (8), CSV export (11-free).*
- **Phase 2 — Premium backend:** account/auth + backend sync, AA ingestion (1-premium),
  household view (3), income alerts (7), cloud-sync backup (10-cloud), PDF export (11-premium).
  Ship the premium privacy policy + T&C with this phase.
- **Phase 3 — Intelligence:** LLM money Q&A (6) and AI-driven insights, last.

## Funding rhythm (savings depth)
Deepens "savings as first-class" (item 2) from "fund + link a transaction" into **self-maintaining
goals**. From the 2026-07-06 design discussion (narrative section pending). Core reframe: *savings
= a destination + a cadence*; the discriminator is whether the money still counts as spendable.
All of the below reuse existing primitives — only two need schema/engine work (flagged).

| Feature | Tier | Phase | Notes |
|---------|------|-------|-------|
| Daily drip (goal pacing) | Free | 1.5 | A **pacing mode for `monthlyContribution`, not new funding**: auto-reserve a daily slice **from STS** (existing available cash), not from "income". Reuses `allocateToGoal`, so honest by construction. Guardrails: cap at available (never push STS negative → skip/partial), stop at the monthly ceiling, idempotent catch-up on app open (like #129). Self-consistent with STS v2 (`allocatedSince` grows as it drips → remaining-contribution term shrinks, no double-count). No schema change. |
| Goal velocity & trajectory | Free | 1.5 | Derived "at this pace → `<date>`" + drifting / on-track / ahead health from funding history. No new data; pure math over the contribution ledger. |
| Resilience (rough-spot) | Free | 1.5 | Emergency **release** (`spendFromGoal` exists) + goal **pause** (status exists — stops *future* contribution, **principal stays reserved**, does *not* inflate STS) + gentle recovery prompt. Mostly UX over existing primitives. Release stays free (don't fight a user mid-emergency). |
| Off-budget (tracking) accounts | Free | **v2** | New accounts flagged off-budget = **illiquid** vehicles (SIP/FD/brokerage); **excluded from STS spendable base**. Held at **cost basis** (Σ transfers in) — no market value/NAV/AA. Resolves the earmark invariant for investment goals: money that *left* your spending account still sits in a tracked account, so a goal can earmark it there. Needs `accounts` schema work (`is_on_budget` flag preferred over a new type). |
| Scheduled transfers / SIP | Free | **v2** | Recurring transfer into an (off-budget) account; unlocks SIP + general recurring transfers at once. Transfers are currently **deferred** in `scheduledTransactions`. |
| Income-triggered / hybrid funding | mixed | v2+ | Allocate on income (detected or "I got paid" tap); hybrid = auto base + optional top-up gap ("₹X remaining to stay on track" — STS v2 already computes this). Auto-**detection** needs AA (premium, item 7); the manual tap is free. |

**Rejected (recorded to avoid re-litigating):** modeling recurring investment as a budget/Plan —
sign error. Plans are spending **ceilings** (`getSpentByCategorySince`); savings is a **floor**
(actually move ₹X out). Recurring investment is a scheduled transfer, not a cap.

## Liability depth (credit cards v2)
**v1 shipped** (#280–#285, ADR 0006): `accounts.type = 'credit'` is a real liability — balance
reads as money *owed* (`owedAmount()`), excluded from spendable cash/earmarks
(`getGlobalAvailableAmount`, `computeLiveBalance`), paid down via a bank→card transfer
(`PayCardSheet`), and a single `payment_due_day` feeds one STS forecast term: the full current
owed, if its next due date falls inside the horizon. Deliberately minimal — no limit, no statement
cycle, no minimum-due vs. full-balance distinction, no interest.

The gaps below turn that MVP into something useful for a user carrying real revolving debt —
where "am I safe to spend" has to account for a bill that's bigger than what's due today.

| Feature | Tier | Phase | Notes |
|---------|------|-------|-------|
| Credit limit | Free | v2 | New `accounts.creditLimit` field. Unlocks utilization % on the Accounts row and a "near limit" nudge — the first liability signal that isn't just "money owed." |
| Statement cycle + minimum due | Free | v2 | v1 treats "the bill" as a single flat `payment_due_day` + full current owed. A real card has a statement close date and a minimum due that's much smaller than the balance. Splits the STS obligation into **minimum due** (the near-term forced outflow) vs. **statement balance** (the larger number that matters for a payoff plan, not this week's spend). Needs 2 new `accounts` fields; keep v1's flat term as the fallback when unset. |
| Autopay flag | Free | v2 | Marks a card's payment as automatic. Once set, the STS obligation still counts (the money leaves regardless of who initiates it) — the flag's job is to suppress a redundant "pay your card" reminder, not to change the math. |
| Interest-rate reference (not user-entered) | Free | v2 | APR is public per issuer/card network — don't make users hunt down and type in a number they usually don't know precisely. A small reference table (network/issuer → typical APR, periodically refreshed, user can override) feeds an *estimated* interest accrual on carried balance. Never a source-of-truth financial figure — framed as "roughly ₹X/month if unpaid," consistent with the neutral-education stance (see Compliance note). |
| Debt-payoff planner (upgrade) | 🔒 Premium | v2 | Already in the premium backlog below as a placeholder; **now concretely buildable** once limit + statement/minimum-due + the interest reference above exist — snowball/avalanche schedules need a real balance, a real rate, and a real minimum, not just "amount owed." |

**Explicitly not doing:** per-user custom interest rate entry (friction for a number most people
don't carry in their head; the reference table is the honest default, override stays optional);
loan/EMI principal-and-interest amortization (separate liability shape, own epic); statement PDF
import (belongs with the existing import pipeline, not liability modeling).

## Premium candidate backlog (not yet committed)
From the competitive study — high willingness-to-pay, technically modest. See `competitive.md`
for rationale/pricing.
- **Subscription detection** — find forgotten recurring charges (no SMS parsing).
- **Cash-flow forecasting (30–90d)** — natural extension of the STS calendar.
- **Net-worth dashboard** — assets − liabilities; forward-momentum framing, not budget adherence.
- **Anomaly / spending insights** — ships before the full LLM feature.
- **Exportable tax/advisor reports** — extends PDF export.
- **Bill reminders** (not negotiation) — sidesteps the fee backlash.
- **Debt-payoff planner** — snowball/avalanche schedules; see **Liability depth** above for the
  prerequisite credit-card fields (limit, statement/minimum due, interest reference).
- **Multi-currency** — needed anyway for the UK → US → EU push (`competitive.md`
  §Beachhead economics; AUS/CA parked).
- **Shared-bill / settle-up** — leverages existing `isReceivable` "owed by others" leaves;
  near-zero new data model; natural household add-on.
- **"What-if" goal scenarios** — local, reuses the funding/available engine.

## Compliance note (for #6 and any advice)
Keep nudges and LLM answers framed as **neutral education**, not **personalized financial
advice** — in some jurisdictions personalized advice carries compliance/liability exposure.
Add an advice-vs-education disclaimer, especially for the premium LLM Q&A. Ties to the
neutral-nudge principle in `narrative.md`.

## Open questions
- [ ] Which backlog items make the v1 paid tier. (Backup boundary resolved: local export/backup free in v1; cloud-sync backup is Phase 2/3 premium.)
- [ ] India vs. Western pricing tiers.
- [x] Soft-budget revival: reuse the dormant `budgets` table or model on goals? → **Resolved:** reuse the `budgets` table; Plans stay virtual, never goal-style earmarks (`plans.md` §3).
