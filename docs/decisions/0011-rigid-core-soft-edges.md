# ADR 0011 — UX principle: "rigid core, soft edges"

**Status:** locked (user-chosen)

## Context
The site has no signup — trust *is* the conversion (ADR 0002). Trust is built through
architecture, not copy (`reference/design-guidelines.md`). The site had drifted *soft
everywhere* (uniform 16px radii, soft shadows, scroll-reveal on nearly every block), so nothing
read as rigorous — softness with no counterweight reads as generic, not trustworthy.

## Decision
Adopt **"rigid core, soft edges"** as the site's UX principle, inheriting the app's own
**"lost-and-found edges"** rule: a hard edge against a soft passage *is* the effect; never
soften the container to match the wash.

1. **Rigid core = grid + data-vs-mood.** Everything aligns to an exact 4px spacing grid
   (`theme.css` `--space-*`). Proof/data surfaces (the ₹ number, the Safe-to-Spend receipt,
   numbered facts, screenshots) stay **crisp and unadorned** — tighter radius (`--radius-data`),
   hairline border, minimal shadow, `tabular-nums`, no wash. *Softness near numbers reads as
   decoration papering over rigor.*
2. **Soft edges** carry mood only, via four devices: warm-ink soft shadows, generous radii
   (`--radius-mood`), gentle section-tint transitions, and mood **washes behind narrative
   sections only** — never behind data.
3. **Motion is restrained:** one deterministic hero count-up; scroll-reveal removed. Stillness
   reads as confidence. Count-up is gated on `prefers-reduced-motion`.
4. **Rigidity is felt, not seen:** tight alignment, tabular numbers, exact spacing — no visible
   grid lines, hairline motif, or receipt motif.

## Consequences
- Two CSS registers: `.surface-data` (crisp) and `.surface-mood` / `.card` (soft), plus a
  `.wash` utility applied to narrative sections only (`global.css`).
- The STS mock is the rigid core held *inside* the soft hero wash — keep that contrast; the mock
  is never softened to match its surround.
- Palette unchanged; still **no red, ever** (site non-negotiable).
- Per-section copy is refined in later passes; this ADR governs the visual/interaction system.
