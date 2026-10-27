# Spec 07 — FAQ: show the arithmetic, then ask

**Status:** approved 2026-10-27.
**Scope:** `src/content/pages/faq.md`, `src/pages/[...slug].astro`. No JS.

## Why
External FAQ review (2026-10-27). Its main point: the worked example in "How is Safe to Spend
calculated?" is the strongest content on the page and is buried in a paragraph. The app already
has a better form of it, the Safe to Spend breakdown sheet.

## Changes
1. **Ledger card** under the worked example, rows mirroring the app's sheet
   (`lysning-app/src/utils/stsReceipt.ts`): Available now (sub: balance − set aside) → Bills due
   → Everyday spending: unspent → Safe to Spend. **No goals line**: the app nets set-aside money
   inside "Available now" (app ADR 0007), so the card does too. "Before payday" in place of a
   date, so the page doesn't go stale.
   Example (replaces the old one; it had no everyday-spending term and a flatmate line the app
   has no row for): £900 balance, £120 set aside → £780 available; −£600 rent; −£60 everyday
   unspent → **£120**.
2. **Privacy answer** split into short paragraphs.
3. **Links inside answers underlined** (global `a` has none; the Privacy Policy link hid).
4. **Waitlist form at the end of the FAQ** — its own washed section after the FAQ (as on the
   landing page, so it reads as an ask, not another answer): the existing form with the waitlist
   section's own heading and lead. Not the full section: its facts repeat FAQ answers and it links to the FAQ.
   Disappears with the endpoint unset, like every waitlist surface.
5. **¶ permalinks** on every FAQ question and section heading (`src/markdown/heading-anchors.mjs`,
   a Sätteri hast plugin). Shown on hover/focus, faint always on touch. Ids unchanged. FAQ only.

## Not doing (from the review)
Sticky nav / scroll-spy / search (15 questions; Cmd-F works). 65ch measure (already 60ch).
Hairline section breaks (h2s already have them). "Last updated" line (a stale date signals the
opposite). Pill for "Settings → Privacy" (optional, later).

## Done when
- Card's rows add up, and match the prose example and the app's row labels.
- Card reads correctly with a screen reader (real text, not an image), light and dark, 360px.
- Form renders at the end of /faq with the endpoint set, nothing without it.
- `npm run build` passes.
