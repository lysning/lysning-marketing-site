# Behavior Design
Last updated: 2026-07-17

Strategy doc — how Orielle changes user behavior, and the ethical lines it won't cross.
Framework: Fogg's B=MAP (Behavior = Motivation + Ability + Prompt). Companion to
`narrative.md` (essentialness ladder), `competitive.md` (retention benchmarks), `metrics.md`
(measurement). Design-language constraints from `design-guidelines.md` apply throughout:
no red, no shame, warns-never-blocks.

## Why this doc exists
Retention — not acquisition — is where PFM apps die (D30 floor ≈ 4–8%, `competitive.md`
§Retention reality). Users' stated goals (save for X, stop overspending) require *behavior
change*, and behavior change is a design problem, not a willpower problem. Health apps say
this out loud (Noom's CBT framing); finance apps mostly don't, because users are warier of
manipulation with money. Our stance: **use the science openly, and only in service of the
user's stated goal** — the same trust posture as local-first.

## The trust test (every mechanic must pass)
1. **Transparent** — the user could read this doc and feel respected, not played.
2. **Serves their stated goal** — never engagement-for-engagement's-sake.
3. **Loss aversion applies to money and time (real things), never to app-usage stats.**
   The user should fear raiding their *goal*, not losing a *streak*.
4. Consistent with calm design: no red, no guilt cycle, no "we miss you."

## The core habit: the daily glance
The one behavior we wire. Everything else scales from it.

> **After I** [existing phone ritual — morning coffee / commute check],
> **I** open Orielle and see my Safe-to-Spend number,
> **then I** feel oriented — the number, the runway, one line of context.

- **Why this behavior:** passive — survives the motivation trough (data-in stays weekly via
  import; daily manual entry is the documented churn path). It's the STS card doing its job:
  one glanceable number, like closing a ring.
- **B=MAP check:** Ability ≈ maximal (open app, look — <5 seconds, no input). Motivation
  needed ≈ minimal. Prompt = person/context prompt (habit anchor), reinforced by event
  prompts below — never a scheduled nag.
- **Celebration (soft edges):** the glance *ends well* by design — temporal copy
  ("covered through Aug 3"), the runway strip, milestone haptics at earned moments only
  (rigid-core tier). No confetti for opening an app.
- **Starter step in onboarding:** the 4-step goal-first flow already ends on the
  `safe-to-spend` screen — the first glance IS the activation event. Time-to-first-number
  is the metric that matters (`gtm.md` ≥40% onboarding completion).

## Mechanics (all pass the trust test)

| Mechanic | Behavior lever | Where it lives |
|---|---|---|
| **Endowed reserves** — goals hold real earmarked money (`available = balance − Σ earmarks`) | Endowment effect / loss aversion: spending against a goal is a visible, factual loss ("this dips into Goa") — the user protects what exists | Already structural (`goal-funding.md`); surface the framing in spend flows |
| **Coverage runway** — "covered through <date>"; overspend moves the date backward | Loss aversion on *time*, stated calmly; the date is the emotion, no red needed | `StsRunway`, `coveredThrough` |
| **Windowed trends, not streaks** — "under plan 5 of last 7 days" | Momentum without the streak cliff: one miss degrades (4-of-7), never zeroes. Streak-loss = despair-quit; window-dip = recoverable | Home / activity trend copy (build) |
| **Payday = earmark moment** — on `nextPayday`: prompt to fund goals first, then show the fresh STS | Fresh-start effect + pay-yourself-first; the month's one high-motivation moment gets the one high-effort ask | Payday event prompt + goal-funding flow (build) |
| **Neutral directional framing** — "dining 40% higher than last month", "75% of plan" | Removes the guilt cycle that drives the 67%/30-day quit | Already policy (design §5.1, Plans overflow tone) |

## Prompts (v1: local, event-based only)
A prompt below the Action Line is spam. Every notification must be tied to a real event the
user cares about, and pass "would I appreciate this right now?"

- **Payday** — "New cycle. Fund your goals?" (the one *ask*; highest-motivation moment).
- **Bill due** (scheduled transactions) — reminder, not alarm.
- **Goal milestone** — crossed 50% / fully funded (earned-moment celebration, milestone haptic).
- **Never:** time-based re-engagement, "we miss you," daily nags, anything triggered by
  absence. Absence-triggered prompts punish app-usage behavior — fails the trust test.
- (Opt-in daily STS glance notification: deferred — revisit with retention data; risk is
  prompt fatigue degrading the payday/bill prompts that matter.)

## Retention diagnostics (B=MAP × `metrics.md`)
| Stage | If it drops, the diagnosis is | First fix |
|---|---|---|
| Activation (first STS number) | First action below Action Line — import friction | Shrink to starter step: one account, a few rows, *then* the number; bank-statement quirks (`gtm.md` product ask) |
| D1 | No anchor formed; first glance didn't end well | Onboarding ends on the number + context line, not a feature tour |
| D7 | Motivation wave receded; glance not yet habit | Check payday prompt landed; runway copy gives a reason to look tomorrow |
| D30 | No internal prompt formed; number went stale (data-in lapsed) | Import re-anchor: bill-due / payday prompts double as "number needs fresh data" moments |

Honest D30 target: beat the ~8% category ceiling (`competitive.md`), not vanity numbers.

## Deliberate non-goals
- **Streaks** (any variant that zeroes on a miss) — guilt mechanic in disguise.
- **Red / over-budget shaming, absence-triggered notifications, manufactured urgency.**
- **Variable-reward slot-machine patterns** (Cleo-style surprise) — wrong trust posture for
  a money app that sells calm.
- Gamification layers (points, badges, cities) — playfulness only at earned moments
  (design system stance).

## Open questions
- [ ] Identity language — does the practice get a name (YNAB's "method" loop) or stay
      unnamed? Decide with launch copy.
- [ ] Windowed-trend definition — which window (5-of-7? rolling 30d?) and which metric
      ("under plan" needs Plans adoption); prototype after v1 data.
- [ ] Payday earmark prompt — one-tap "fund as planned" vs. opening the funding screen;
      needs goal-funding UX review.
- [ ] Do milestone haptics + copy measurably move D7? (PostHog events, opt-in caveat.)
