# Lysning marketing site — build spec

Single static page plus supporting pages (`/faq`, `/privacy`, `/terms`). Astro → GitHub Pages →
lysning.app. Purpose: **explain Lysning, build trust, and collect a beta waitlist** (ADR 0012).
**UK-first, English, £.** Voice + visuals inherit the app's design system
(`reference/design-guidelines.md`). See `decisions/` for the ADRs, `glossary.md` for terms, and
`reference/` for read-only snapshots of the app's product docs.

> **Reference snapshots are stale on two points.** They were copied on 2026-07-23 and still
> describe (a) India as the launch/validation market and (b) Safe-to-Spend as the wedge. Neither
> governs this site. See ADR 0003 and ADR 0004. Re-sync from the app repo before trusting them.

## What the site is actually selling

**The goal affordability calendar.** From how much you can genuinely save — after real bills and
real commitments — Lysning works out **when each goal becomes affordable**, and shows it as a
date. Shipped and working.

This is the only claim on the page a competitor can't answer with "we do that too":

- **Safe-to-Spend is not a differentiator.** PocketGuard ships it by that exact name; Simplifi
  and Monarch ship the same idea. It may be paywalled elsewhere while ours is free — that is a
  *pricing* advantage worth one line, not a product claim worth a hero.
- **Goals are not a differentiator.** Qapital, Plum, Monarch, YNAB. Earmarking *real* money
  rather than tracking a number is a better mechanic, but it is the proof that our date is
  honest, not the thing being sold.
- **The category is retrospective.** Almost every rival categorises the month you just had and
  reports it back. That is a description of the past dressed up as a tool for the future.
  Lysning is prospective: it answers *when can I have this, and what changes that date.*

Copy rule that follows: **lead with the date, support with the arithmetic.** Safe-to-Spend and
earmarks appear as the reason the date can be believed. They never open a section that isn't
their own.

## Non-negotiables (from brand)
- **No red, ever.** No scores/percentages-as-grades. No moral money words ("over budget",
  "failed"). Numbers are facts. Voice = thoughtful friend, not advisor-in-a-suit.
- **Never the word "budget"** in user-facing copy. One sanctioned exception: the FAQ question
  *"Is this a budgeting app?"*, plus `<title>` / `<meta description>` (ADR 0005 Amendment).
- Privacy is **closing proof, never the lead** — the hero sells the plan, not privacy.
- "Free" only; no premium/pricing (ADR 0006).
- **Never imply bank connectivity.** The app has no bank sync. No open-banking references, and
  **no named bank** in copy or in a mockup.
- **UK conventions.** £, `1,234.56`, dates as `15 July`. Never `July 15`.

### Design principle — "rigid core, soft edges" (ADR 0011)
Structural rigor + unadorned precision on anything carrying **proof** (the number, the STS
receipt, the calendar, screenshots — `.surface-data`, crisp, tabular, no wash); warm, calm, soft
treatment on anything carrying **mood** (`.surface-mood` / `.card`, generous radii, warm-ink
shadows, washes behind narrative only). Motion is one hero count-up, reduced-motion-gated;
rigidity is *felt, not seen*. Never soften a data surface.

## Theme tokens (port from app §2–3)
- Evergreen `#1B4332` (primary), Sage `#6B9080` (secondary/spatial), Warm Amber `#C4956A`
  (opportunity/accent — sparse), bg warm alabaster `#F5F3EE`, surfaces `#FFFFFF`/`#FAF9F6`,
  ink `#1C1917`. Shadows = warm ink, never gray. Radii: cards 16, pills 999.
- Type: **Manrope** (headings/brand, 600; 700 for hero numbers), **Newsreader** (body).
  Amounts always `tabular-nums`. Self-host fonts (perf + privacy).
- Motion: calm, ease-out, count-up-once on the hero number; respect reduced-motion. Nothing
  loops/bounces. Never animate to dramatize.

## Sections (in order — ADR 0005 Amendment)

1. **Hero**
   - H1: **open** (ADR 0004). Direction is planning-led — the date you can afford it, not the
     number you can spend today. Shipped copy is a placeholder.
   - Subhead: UK-tuned — a deposit, a wedding, a car, a cushion — and the date each becomes
     affordable at the rate you can actually save.
   - CTA: the waitlist form. Renders only with `PUBLIC_WAITLIST_ENDPOINT` set. One CTA, same
     wording each time it repeats.
   - Visual: **open** — an STS home screen here argues against a calendar-led headline.

2. **The problem**
   - Your balance can't answer the question: pending charges, transfers between your own
     accounts, refunds. Savings sit next to spending money and leak. And the report arrives at
     month end, too late to have changed anything. Calm, not fearful, no blame.

3. **The affordability calendar** — *the wedge*
   - What you can save, turned into a date. Every goal gets one. Change what you set aside and
     the dates move, visibly, before you commit to anything. Screenshot.

4. **Earmarked goals** — *your money stays yours*
   - Why the date is real: goals set aside real money in real accounts,
     `available = balance − Σ earmarks`. The same pound is never promised twice. Lysning
     **never holds, moves, or invests your money** — unlike apps that take custody. Screenshot.

5. **Safe-to-Spend**
   - The day-to-day consequence of the plan: what's free to spend today with the goals already
     covered. Framed as *what the plan leaves you*, not as the product. Optional micro-example.

6. **Built for real life**
   - An expensive week moves the date; it doesn't break the plan. No streak, nothing to reset.

7. **Why the number is trustworthy**
   - Refunds, transfers between your own accounts, and "owed by others" are netted out, so the
     figure reflects real spendable money — not a noisy balance.

8. **Your data, your control** (closing proof)
   - Runs on your phone. No account, no server for the free tier. **Include the downside**: lose
     the phone and the data is gone — that's the trade for there being no server. Omitting it is
     what would make the section marketing.

9. **Dark mode** — shipped showcase; kept.

10. **Waitlist close** — the CTA again, before the footer. Gated on the same env var.

11. **Footer** — wordmark, one line ("Lysning — free, coming soon in the UK"), FAQ, contact
    email, socials, Privacy · Terms.

## Supporting pages
- **`/faq`** — restored to scope (ADR 0005 Amendment). Carries the hard answers, above all
  *"Does it connect to my bank?"* → **No.** Also the one sanctioned "Is this a budgeting app?"
  question.
- **`/privacy`**, **`/terms`** — the compliance surface App Review requires. Must be live, and
  the contact address must actually receive mail, before external testing opens.

## Screenshots needed (ADR 0007)
Real screenshots (iOS, `lysning-app/out/screenshots/raw` → `src/assets/screens/`) now cover
Goals (§4), STS home (§5), Trustworthy (receipt) and Dark mode. Remaining, from **one seeded
month, one device, en-GB, no red, no placeholder values**:
- **Affordability calendar** (hero + §3) — the priority; hero still shows the HTML mockup.

The blocker is a seeded demo dataset in the **app** repo — the same gap that leaves App Review
with an empty database. Building it once serves landing screenshots, store screenshots and the
review path.

## Deploy
- Astro static build → GitHub Actions → Pages. `CNAME` = lysning.app. HTTPS auto.
- Umami (cookieless) snippet in base layout, gated on `PUBLIC_UMAMI_ID` (ADR 0010).
