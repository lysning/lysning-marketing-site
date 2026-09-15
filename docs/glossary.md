# Lysning — Glossary

Shared vocabulary for the marketing site so copy stays consistent. Product terms are sourced
from the app docs; the app was renamed **Salvyn → Lysning**. Launch market is the **UK** (ADR
0003 Amendment) — the India framing in earlier drafts and in `reference/` no longer applies.

| Term | Meaning | Copy rule |
|---|---|---|
| **Lysning** | The app: a forward-looking personal financial planner. Formerly "Salvyn". | Always "Lysning". Never "Salvyn" in public copy. |
| **Affordability calendar** | **The wedge.** From what you can genuinely save, the date each goal becomes affordable — and how that date moves when you change what you set aside. Shipped. | Lowercase, descriptive. This is the hero concept; lead with the *date*, not the mechanism. |
| **Prospective, not retrospective** | The category framing: rivals categorise the month you just had; Lysning plans the ones coming. | Argue it on mechanism. **Never name a rival** (`reference/gtm.md`). |
| **Safe-to-Spend (STS)** | What's free to spend today once bills and earmarks are accounted for. | Capitalised, but **no longer the hero**. It is the daily consequence of the plan. Not a novelty claim — PocketGuard and others ship it. |
| **Earmark / earmarked** | Goals set aside *real money in real accounts*: `available = balance − Σ earmarks`. The same pound is never committed twice. | Supporting mechanic — it's why the affordability date is believable. Also carries "we never hold your money". |
| **No custody / your money stays yours** | Lysning never holds, moves, or auto-invests money (unlike Plum/Albert). Amounts are earmarked, not transferred. | A trust proof point — not the hero. |
| **Local-first / on-device** | Free tier runs fully on the phone; no account, no server, no data egress (only opt-in analytics, off by default). | Closing proof, not the hook. **State the downside** — lose the phone and the data is gone. |
| **Reconciliation** | Netting out refunds, transfers between your own accounts, and "owed by others" so balances reflect real money. | Explains *why* the arithmetic is honest. |
| **The Sanctuary** | Design philosophy: calm, judgment-free, no red, no scores. Orientation, not management. | Governs tone and visuals. Internal term — **demonstrate it, don't name it on the page**. |
| **Trust → Ritual → Foresight** | The internal essentialness ladder. | Structures the page's section order. Internal — don't explain the framework to the reader. |
| **Manual entry / spreadsheet import** | How transactions get in. **There is no bank sync.** | Say so plainly in the FAQ. Never imply connectivity; **never name a bank**, in copy or in a mockup. |
| **Freemium (free tier)** | Fully on-device core: affordability calendar, goals, STS, ingestion, reports, CSV export. UK launch is free. | "Free" = this tier. |
| **Premium** | Backend-connected; roadmap, unbuilt and unpriced. | **Not mentioned on the site** (ADR 0006). |
| **UK saver** | Primary persona: 20–40, salaried, saving toward a concrete goal — a deposit, a wedding, a car, a cushion. | The site's target reader. |

## Retired terms
**UPI · Account Aggregator (AA) · ₹/INR · rupee · salaried saver (India) · "super app"** —
India-market vocabulary, out of scope (ADR 0003 Amendment). The UK equivalent of AA is open
banking, which the app **does not use** — so it isn't a replacement term, it's simply not
something the site talks about.

## Voice (from `reference/design-guidelines.md` §7)
- A **thoughtful friend at a coffee shop**, never a financial advisor in a suit.
- **Never the word "budget"** in user-facing copy. One sanctioned exception: the FAQ question
  *"Is this a budgeting app?"*, plus `<title>` / `<meta description>` (ADR 0005 Amendment).
- **No moral money vocabulary** — no "over budget", "failed", "good/bad month", no streaks.
- **No red, ever.** Calm amber/evergreen. Numbers are facts, not verdicts.
- Describe → project → offer a path. Every state has a next step.
- **UK conventions:** £, `1,234.56`, dates as `15 July` — never `July 15`.

## Voice audit (run before any copy ships)
Grep the rendered copy for: `budget` · `over-budget` · `streak` · `%` as a grade · `great job` ·
`behind` · `failed` · `₹` · `UPI` · `India` · any bank name · `July 15`-style dates. Every hit is
either a violation or a logged exception.
