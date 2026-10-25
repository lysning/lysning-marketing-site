# Spec 03 — Cut repetition in the middle sections

**Status:** approved 2026-10-25 — defaults for (a) cut, (b) closing line, (c) accept.
**Scope:** copy deletions in four components (Calendar, Goals, SafeToSpend, Flexibility). No
section removed, no layout change, no new copy beyond the joins a cut needs.

## Why
Reviewer 1: the middle "says the same thing three or four times". It does: five ideas are each
stated two or three times. Each one keeps its strongest place and loses the rest.

## Untouched
Hero; Problem (all three items); Safe to Spend's "Plenty of apps…" note; Trustworthy's three
steps; Privacy; Waitlist; every phone screenshot and the calendar figure.

## Changes

### 1. Calendar, para 1: "after the bills…" (kept in Safe to Spend)
Now:
> Lysning works out what you can genuinely set aside each month — after the bills that haven't
> left yet and the money already claimed by something else. Then it turns that into the one thing
> a plan actually needs: the month each goal becomes affordable.

New:
> Lysning turns what you can genuinely set aside into the month each goal becomes affordable.

### 2. Calendar, note: "reports arrive too late" (kept in Problem 03)
Delete the whole `<p class="note">` ("This is the part that isn't a report…"). The section ends
on para 2: "The trade-off is in front of you while you can still make it."

### 3. Safe to Spend, para 2: "the date doesn't move" (kept in Goals)
Now:
> Spend it on dinner or let it ride. Either way the dates you set don't move, because the money
> holding them up was never in that number to begin with. Or put it toward a goal and bring a
> date closer: it's the same £897 the Plan screen calls safe to set aside. One figure, yours to
> spend or to save.

New:
> Spend it on dinner, let it ride, or put it toward a goal and bring a date closer: it's the same
> £897 the Plan screen calls safe to set aside. One figure, yours to spend or to save.

Also removes the last "holding them up" (the double meaning spec 01 took out of Goals).

### 4. Goals, note: "doesn't touch your money", said three ways
Now:
> **Lysning never holds, moves, or invests your money.** Nothing changes hands, and nothing
> leaves your bank. Unlike apps that take custody of your savings, everything stays exactly where
> it is — Lysning just keeps the accounting honest.

New:
> **Lysning never holds, moves, or invests your money.** It just keeps the accounting honest.

**VERIFY (a):** drop "Unlike apps that take custody of your savings" too? It's the only line on
the page that names the competitor type (Chip, Plum and similar). Default: cut — the bold sentence
already says it, and naming a category we're "unlike" invites the comparison. Alternative keeps
it: "Unlike apps that take custody of your savings, Lysning just keeps the accounting honest."

### 5. Flexibility, bullets 1–2: restate the heading
Cut "The plan flexes…" and "The date stays honest…". That leaves one bullet, and a list of one
reads as a mistake.

**VERIFY (b):** what replaces the list? Default: drop the `<ul>` and keep the third point as a
closing line in the section's existing `.note`-style paragraph:
> There's nothing to reset: no streak to break, no starting over on Monday. Only a distance that
> keeps shrinking.

Alternative: keep all three bullets and cut nothing here (the section is short already).

**VERIFY (c):** Calendar after cuts 1 and 2 is two short paragraphs beside a tall figure. On
desktop the copy column will end well above the figure. Accept, or fine as is since the figure
is the point? Default: accept; check in screenshots.

## Size
Body copy of the four touched sections: ~560 → ~420 words (~25%). Across all six middle
sections ~18%. Measured with tags and alt text stripped.

## Done when
1. `npm run build` passes.
2. Each idea in the table appears once in body copy (grep: "haven't left yet", "isn't a report",
   "holding them up", "changes hands", "The plan flexes" all gone).
3. Screenshots, desktop 1440 + 500, light and dark, of Calendar, Goals, Safe to Spend and
   Flexibility, reviewed by you.
4. Leftover CSS a cut makes unused (e.g. `.tenets` in Flexibility, `.note` in Calendar) removed.
