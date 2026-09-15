# ADR 0007 — App visuals: real screenshots

**Status:** locked (user-chosen)

## Context
App not public, but buildable. User will provide / we can capture real app screens.

## Decision
Use **real screenshots** of Lysning (STS home, goal pace marker, etc.) in device frames.

## Sequencing (app not yet renamed in-UI)
The app still shows "Salvyn" in its UI, so real screenshots today would be off-brand. To avoid
blocking the site build:
1. **Build now with on-brand placeholder mockups** — recreate the STS home + goal pace screens
   as HTML/CSS from the app design system (evergreen/sage/amber, Manrope/Newsreader). These double
   as the final visual if we choose not to swap.
2. **Swap in real screenshots later**, once the app rename (Salvyn → Lysning) lands in-UI.
   Capture from `~/src/salvyn` on an Android emulator, light theme, one device.

## Status update (2026-09-14)
Real screenshots swapped in for Goals, Safe-to-Spend, Dark mode and Trustworthy (replaces the
illustrative ledger). Source: `lysning-app/out/screenshots/raw` (iOS captures, not Android),
copied to `src/assets/screens/` and served via `astro:assets`. Raw screens chosen over the App
Store panels — panels bake in a headline and white background that clash with section copy.

The hero followed once the calendar screen existed (`5-calendar`, the Plan hub scrolled to the
goal sections). Every device frame on the page is now a real capture; the "Day or night" section
went with the same pass, so the dark home screen is no longer used. `PhoneFrame`'s mock slot is
kept but unused.

## Consequences
- Site ships independent of the app rename; screenshot swap is a later, isolated change.
- Placeholder mockups must be clearly labeled in code so the swap is easy to find.
