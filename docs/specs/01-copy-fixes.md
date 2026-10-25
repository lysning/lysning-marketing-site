# Spec 01 — Copy fixes from the October 2026 reviews

**Status:** draft — awaiting ✔ on the three decisions marked **VERIFY**.
**Scope:** copy only. No layout, no styles, no new sections.

## Why
Reviewer 1 found four places where the page contradicts itself or overuses a device. Each one
makes a careful reader trust the rest less. All four are small, text-only changes.

## Changes

### 1. Business-model line — `Privacy.astro:22–23`
Now:
> And we will never sell your data. That part isn't a feature. It's the business model.

New (approved 2026-10-25):
> Lysning is free. Later, bank sync will be an optional paid upgrade — that's how we make money.
> No ads, and we'll never sell your data.

Answers the one fear that matters ("what's in it for you?"). No price, no feature list.

### 2. "The date holds" — `Goals.astro:20–21`
Now: "…the date holds because the money behind it isn't quietly available for something else."
Clashes with the bold line three lines later: "Lysning never **holds**, moves, or invests your money."

New: "…the date **stays put** because the money behind it is **already spoken for**."

**VERIFY (a):** "stays put / already spoken for" — or keep "holds" and change the bold line instead?

### 3. Hero meta — `Hero.astro:28`
Now: `Free · no account · runs on your phone`, sitting directly under an email form.

New: `Free app · no account · runs on your phone`
"app" scopes "no account" to the product without adding a clause.

**VERIFY (b):** "Free app · …" — or the longer "Free · no account in the app · …"?

### 4. Italic headline clauses: 9 → 3
Keep `<em>`:
- Hero — "when." (`Hero.astro`)
- Calendar — "date" in "Every goal gets a date…" (`Calendar.astro:28`)
- Flexibility — "It doesn't break the plan." (`Flexibility.astro:7`)

Remove `<em>` (text unchanged):
- Problem — "afterwards." (`Problem.astro:20`)
- Goals — "actually there." (`Goals.astro:16`)
- Safe to Spend — "much smaller." (`SafeToSpend.astro:13`)
- Trustworthy — "arithmetic is honest." (`Trustworthy.astro:13`)
- Privacy — "We treat it that way." (`Privacy.astro:17`)
- Waitlist — "opens." (`Waitlist.astro:11`)

**VERIFY (c):** the closing Waitlist heading loses its italic too. It's the last heading on the page,
so a case exists for a fourth. Default: cut, per the reviewer's "two or three".

## Docs
- **ADR 0006** ("no premium mention") — add an Amendment: one line naming bank sync as a future
  paid upgrade, no price, no tier list. The FAQ ("What does it cost?", "Does it connect to my
  bank?") already says this; the amendment makes the ADR match the site.

## Out of scope (noted, not touched)
- FAQ "What does it cost?" lists "sharing with a partner" as a likely paid feature; the app
  roadmap deferred household (app ADR 0020). Flag for a FAQ pass.
- `docs/decisions/README.md` table is missing ADR 0011.

## Done when
1. `npm run build` passes.
2. `grep -c "<em" src/components/*.astro` shows `<em>` in Hero, Calendar and Flexibility only.
3. No remaining "business model" or "the date holds" in `src/`.
4. Diff touches only the files named above plus ADR 0006.
5. Screenshots (desktop 1440 + phone 390) of hero, Goals and Privacy reviewed by you.
