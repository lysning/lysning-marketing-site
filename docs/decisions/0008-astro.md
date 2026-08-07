# ADR 0008 — Static build with Astro

**Status:** locked (user-chosen)

## Context
Content-heavy landing page, no app web interface ever, deploy to GitHub Pages.

## Decision
Build with **Astro**. Ships zero JS by default, component/section reuse, first-class static
output, simple GitHub Pages deploy (Actions).

## Consequences
- Fonts: Manrope + Newsreader (self-host for privacy/perf, per app design system).
- Theme tokens ported from app `design-guidelines.md` §2–3 (evergreen/sage/amber, warm
  alabaster, radii, warm-ink shadows).
- Deploy via GitHub Actions → Pages; custom domain in repo settings + DNS (ADR 0001).
