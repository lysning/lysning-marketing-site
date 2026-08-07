# ADR 0007 — App visuals: real screenshots

**Status:** locked (user-chosen)

## Context
App not public, but buildable. User will provide / we can capture real app screens.

## Decision
Use **real screenshots** of Orielle (STS home, goal pace marker, etc.) in device frames.

## Sequencing (app not yet renamed in-UI)
The app still shows "Salvyn" in its UI, so real screenshots today would be off-brand. To avoid
blocking the site build:
1. **Build now with on-brand placeholder mockups** — recreate the STS home + goal pace screens
   as HTML/CSS from the app design system (evergreen/sage/amber, Manrope/Newsreader). These double
   as the final visual if we choose not to swap.
2. **Swap in real screenshots later**, once the app rename (Salvyn → Orielle) lands in-UI.
   Capture from `~/src/salvyn` on an Android emulator, light theme, one device.

## Consequences
- Site ships independent of the app rename; screenshot swap is a later, isolated change.
- Placeholder mockups must be clearly labeled in code so the swap is easy to find.
