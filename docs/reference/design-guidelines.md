# Lysning Design Guidelines

The user moment we design for: it's Tuesday, 9pm. The user just got paid — or just overspent on something they didn't plan. They open Lysning to answer one question: "What can I do with this situation?" They should get a clear picture of where they stand and at least one viable path forward in under five seconds, without being judged for how they got there.

But the deeper design failure most finance apps make is designing for **management** (a chore) instead of **orientation** (a ritual). The win condition isn't a complete dashboard — it's that the user feels *more capable when they close the app than when they opened it*. That reframes our primary surface: **Safe-to-Spend is the anchor, not the bank balance, not budgets, not net worth** — it's the one number that answers "can I say yes to things today?" Budgets, reports, and categorization are *depth* the user dives into when they have time, not breadth that confronts them every morning. Stress-test: if the home screen were only STS + a one-line stability sentence + a single goal recommitment, with everything else behind a "Details" tap, would the user still get ~80% of the daily value? If yes, that triple is the ritual anchor.

Why this matters commercially: revenue is premium subscription only. The leading killer of budgeting apps isn't guilt — it's learned helplessness. Users quit when the app tells them what happened but not what they can do about it. A dashboard that shows "₹1,000 over budget" without a next step is a dead end. A dashboard that shows "₹1,000 over budget — three paths to keep July on track" is a reason to open the app again tomorrow.
The Indian market is particularly unforgiving: free alternatives (Walnut, Google Pay insights) give users data. Lysning must give them foresight — the sense that money is not a weather system they endure, but a terrain they can navigate.

**Trust is built through architecture, not copy.** Every finance app *says* "we take privacy seriously" in a policy nobody reads; Lysning *demonstrates* it — the free tier is on-device, no-account, no-server — any usage analytics are **opt-in, anonymous, and off by default** — so users can verify we're not phoning home before they ever pay. The free tier here is a trust strategy ("try before you trust"), not just a pricing tier; the client-side-encrypted, user-owned cloud backup continues that narrative. Treat this as brand story, not a footnote in a security doc. But trust is what earns the *try* — what converts payers is **results** (foresight: projections, paths, consequence modeling), so premium copy sells outcomes, never privacy (§7).

This doc implements the **trust → ritual → foresight** ladder from `narrative.md` ("How it becomes essential"): trust is the architecture above, the *ritual* is §1's morning orientation, and *foresight* is the path-row / projection vocabulary of §5 and §7.
---

## 1. Philosophy — "The Sanctuary"

**The user moment we design for:** Lysning has two moments, and they are not the same screen.
- **Morning = orientation.** A 30-second "where do I stand, what can I do today?" check. This screen must leave the user feeling *more powerful* than when they opened it. **No problems surface here** — no overspend alarms, no anomalies, no scolding. Orientation only.
- **Evening (≈9pm) = reflection.** "Am I okay?" — answered in under five seconds, without judgement. Problems, insights, and calibration nudges live here, not in the morning.

Keep the morning structure **identical every day** — rituals are loved because they're reliable; a UI that rearranges itself by "what's most urgent" becomes unpredictable and anxiety-inducing. This split *is* the ritual rung of the essentialness ladder (`narrative.md`) — the daily habit that turns a trusted number into an app the user can't drop.

**Why this matters commercially** (revenue model + learned-helplessness argument in the preamble): 67% of people quit budgeting apps within 30 days; the leading killers are guilt-cycle dashboards (red = "I failed again") and notification overwhelm. The average household exceeds at least one budget category every month — so a design where exceeding a budget looks like failure is a design where *every user fails monthly*. Calm isn't aesthetic preference; it's retention.

### The five principles

1. **Clarity is the feature**. Every screen answers a specific question the user has right now. Calm is a side effect of clarity, not the goal. If the user needs three numbers to answer "can I afford this?", the screen shows three numbers — but one question only.
2. **Show the math, not the mood**. Numbers are neutral; the story is in the relationships between them. Spending is a fact, not a failure. But facts now include projections: "at this pace, you'll hit X by month-end." The app does the arithmetic so the user can do the decision.
3. **Amber marks opportunity**. The accent (#C4956A) highlights moments where the user can act to improve their position: unspent budget that can be moved to a goal, income that creates surplus, a path that keeps all targets on track. Amber is not celebration — it's a door the user can walk through.
4. **One primary question per screen**. The screen's job is to answer one thing the user came to know. Supporting numbers are smaller, cooler, or muted — but never hidden if they're needed for the answer. Hero numbers are sized by importance to the question, not by a rigid count.
5. **Forward paths, not just forward look**. Every state includes at least one executable next step. Describing what happened is table stakes. The app earns retention by showing what the user can do next — and, where possible, pre-computing the consequences of each option.
6. **Cockpit, not report card**. The opening screen says "here's what you can do today," never "here's what you did wrong." Stability is shown as *facts that create agency* ("essentials covered through the 15th," "4.2 months of runway"), never as a percentage or a score — percentages feel like grades. Goal progress is offered as a *choice* ("Add ₹500 to vacation?"), not narrated as a status ("45% complete," which creates nothing).

### 1.1 The home screen — the daily ritual

The morning ritual is ~30 seconds, and the first 3 seconds must deliver the emotional payoff. Strict glanceable-then-actionable hierarchy:

```
[ Safe-to-Spend today ]                 ← largest, calmest, most stable element
"Your fixed costs are covered through July 15"   ← one stability sentence (fact, not score)
"Vacation fund — add ₹500 today?"  [Yes] [Skip] [Adjust]   ← one goal recommitment
— — — — — — — — — — — — — — — — — — — — —
[ Details ]  → recent transactions, budgets, reports, alerts
```

The user should be able to close the app after the stability line and still feel they accomplished something — that's what makes it a ritual, not a chore. Everything below the divider is depth, reached on purpose.

**Speed to value is the moat.** STS renders in <1s — no splash, no sync spinner, no "updating your data…". The on-device architecture is the superpower; use it.

**Goal recommitment is the active piece** (consumption → participation). Make it a daily micro-decision, not a passive tracker: tapping **[Yes]** is instant; **[Skip]/[Adjust]** carry slightly more friction — *asymmetric friction nudges commitment without coercion*, and the daily tap is a tiny dopamine hit a percentage bar can't give. ⚠️ **Model caveat:** today `goals.monthlyContribution` is a *planning* figure (STS v2 forecasts it; it is **not auto-debited**). A daily "+₹500 today?" tap implies a real same-day allocation write (a `goalContribution` `allocation` row, capped at `funding.available`). That write path does not exist yet — this is design intent ahead of build (see §10).

**Designing for the bad-day close** (STS = ₹0 or negative) is the hardest, most important part — it decides whether the user avoids the app:
- **Temporal framing** anchors helplessness to a boundary, not a permanent state: "Safe-to-Spend resets in 3 days," "Next income: July 1."
- **Micro-action preserves agency** when the number can't: the goal row shifts from "Add ₹500?" to "Pause vacation fund?" — still a decision the user gets to make.
- **No red. Ever.** Tight/negative STS uses calm amber or blue, never red (§2). Red triggers panic → avoidance; the goal is clarity, not alarm.
---

## 2. Color

### 2.1 Light palette (implemented — `src/theme/colors.ts`)

**Primary — Deep Evergreen.** Protection, stability, trust. Nav, primary buttons, key figures.

| Token | Value | Use |
|---|---|---|
| `primary.base` | `#1B4332` | Primary buttons, active nav, key figures |
| `primary.hover` / `.pressed` | `#163829` / `#112C21` | Interaction states |
| `primary.subtle` | `#E8F0EC` | Selected rows, category tints |
| `primary.muted` | `#D4E4DC` | Hover bg on primary-tinted surfaces |
| `primary.light` | `#6B9080` | Light functional tint (borders/icons) |

**Secondary — Desaturated Sage.** Spatial UI, not reading text — hierarchy through temperature.

| Token | Value | Use |
|---|---|---|
| `secondary.base` | `#6B9080` | Inactive icons, tags, dividers, transfer amounts |
| `secondary.hover` / `.pressed` | `#5A7A6D` / `#4A6459` | States; `.pressed` is also the budget **overflow tone** (§5) |
| `secondary.subtle` / `.muted` | `#F0F5F2` / `#E8F0EC` | Tinted backgrounds |

**Accent — Warm Amber.** The "opportunity" color. Marks moments where the user can act to improve their position. Sparse by principle #3.

The ramp is split by **role, not state**, because in this palette *chroma* — not hue — separates signal from decoration. The app is out of usable hues (see §4), so the axis it has left is intensity:

- `subtle` / `muted` → **atmosphere only** (washes, tints, glows). Never a signal.
- `base` → **large fills only**. At 2.67:1 on white it fails even the 3:1 non-text floor: it cannot legibly carry text, an icon, or a hairline.
- `deep` → **anything that must be read** — text, icons, thin borders.

| Token | Value | Use |
|---|---|---|
| `accent.base` | `#C4956A` | Progress fills, bars, button fills. **Never text or icons** |
| `accent.deep` | `#816246` | Income, actionable surplus, goal milestones, amber icons/borders — 5.57:1 on surface, 5.02:1 on bg (AA) |
| `accent.hover` / `.pressed` | `#B0855A` / `#9A7548` | States |
| `accent.subtle` / `.muted` | `#F5EDE4` / `#FAF6F1` | Goal backgrounds, gentle highlights, opportunity callouts |

**Surfaces & background.**

| Token | Value | Use |
|---|---|---|
| `background.base` | `#F5F3EE` | App canvas (warm alabaster) |
| `surface.base` / `.elevated` | `#FFFFFF` | Cards, sheets / modals + shadow |
| `surface.alt` | `#FAF9F6` | Alternating rows, secondary cards |
| `surface.hover` | `#F7F5F2` | Press feedback |
| `surface.subtle` | `#FAF8F5` | Chips, metadata pills |
| `surface.sunken` | `#F0EDE8` | Inputs, recessed areas, progress tracks |
| `background.modal` / `.scrim` | `rgba(28,25,23,0.4)` / `rgba(13,31,23,0.55)` | Backdrops |

**Text ramp.** `primary #1C1917` (warm ink) → `secondary #5C5854` → `muted #8A8580` → `disabled #B5B1AC`; `inverse #FFFFFF`; `accent #816246` (= `accent.deep`; actionable values, weight 600+ — the only amber legible as text).

**Feedback.** Muted enough to feel premium, never alarmist:

| State | Base / Subtle | Rule |
|---|---|---|
| success | `#3D7A5E` / `#E8F2EC` | Confirmations, completed actions |
| warning | `#816246` / `#F5EDE4` | **Warning has no hue of its own.** Attention is carried by *form*: a `warning.subtle` container + an icon, with the message in ink (`text.primary`). `warning.base` is an icon/border color only — never message text, never a bare numeral. See §4 |
| error | `#B85C50` / `#F5E8E6` | **System failures only.** Never budget/spend state, never user input validation (§7). Use for: failed transactions, sync errors, network timeouts |
| info | `#5E8B9E` / `#E8F0F3` | Neutral system notices |

**Borders.** `base #E5E2DD`, `light #F0EDE8`, `subtle #F5F3EE`, `focus #6B9080`, `accent #816246` (a hairline must clear 3:1), `error #B85C50`.

**Shadows are warm ink** (`rgba(28,25,23,…)`), never gray. Accent glow `rgba(196,149,106,0.25)` for the hero card (`shadows.glow`, #368), savings-goal and premium CTAs only.

### 2.2 Dark palette (#49)

Shipped as `darkColors` in `theme/colors.ts`, selected by `useColorScheme()` in `ThemeProvider` (`app.json` `userInterfaceStyle: "automatic"`). **System-driven only** — no in-app override yet; when one lands it also needs an explicit `StatusBar style`, since `style="auto"` follows the OS, not the app.

Principles: elevation via the surface ladder (shadows are near-invisible on dark — lighter surface = higher), never pure black, amber lifted so it still reads warm rather than muddy.

| Token | Dark | Note |
|---|---|---|
| `background.base` | `#081410` | Sits **below every surface** — cards rest on a ground, not in it |
| `surface.base` / `.alt` / `.subtle` | `#162B21` / `#1C3528` / `#1C3528` | The paper, with one wash and then a second |
| `surface.elevated` | `#244033` | Assertive — the ladder, not shadow, is the elevation |
| `surface.hover` / `.sunken` | `#2A4A3A` / `#050E0A` | sunken must stay **below** `background.base` |
| `text.primary` | `#D8D2C9` | Warm gray, **not near-white** — reading by lamplight, not an inverted document |
| `text.secondary` / `.muted` | `#B0AAA1` / `#8F8981` | AA on every surface incl. elevated |
| `text.disabled` | `#4A4540` | |
| `text.inverse` | `#081410` | **Ink.** Every fill carrying it (accent, sage, success, snackbar ground) goes light on dark |
| `text.onPrimary` | `#F0EDE8` | The evergreen fill stays dark, so its label stays light — see below |
| `primary` base/hover/pressed | `#3D6B54` / `#4A7A62` / `#305C47` | Lifted enough to read as pigment, not shadow |
| `primary` subtle/muted/light | `#142920` / `#1A3328` / `#6B9080` | `light` unchanged — the bridge color across palettes |
| `secondary` base/hover/pressed | `#8BA89A` / `#9BB8AA` / `#7A9789` | Cooler + lighter than primary: temperature contrast |
| `secondary` subtle/muted | `#111F18` / `#16251D` | Recede completely |
| `accent.base` / `.deep` | `#C4956A` / `#F0D4B0` | **Role inversion:** `deep` is the readable amber, so on dark it is the palette's most luminous note — the lamp filament |
| `accent` hover/pressed/subtle/muted | `#D4A87E` / `#B0855A` / `#1F1810` / `#16120C` | subtle/muted are deep *warm darks*, not light tints |
| `feedback` success/warning/error/info | `#6BB08A` / `#C4956A` / `#C47A6E` / `#7FA8BA` | subtles `#0F241B` / `#241E14` / `#2A1A17` / `#121F24` |
| `border` base/light/subtle | `#354C3F` / `#2A3E33` / `#22332A` | A hairline reads as a **lighter** line than its surface |
| `border` focus/accent/error | `#8BA89A` / `#F0D4B0` / `#C47A6E` | |
| `muted` base/hover/text | `#1C3528` / `#244033` / `#8F8981` | |
| `disabled` bg/text/border | `#142920` / `#4A4540` / `#22332A` | |
| `overlay` dark/light/modal | `rgba(0,0,0,.6)` / `rgba(22,43,33,.9)` / `rgba(8,20,16,.65)` | |
| `shadow` light/color/medium/heavy | `rgba(0,0,0,…)` `.35` / `.5` / `.55` / `.75` | |
| `white` / `black` | `#F0EDE8` / `#081410` | Even "white" is warm in dark |

**`text.inverse` split into two tokens.** In light every fill that carries a label is dark, so one token served all of them. In dark they diverge: `primary.base` stays a mid-dark green (wants a light label) while accent, sage, success and the `UndoSnackbar` ground all go light (want ink). No single value works — `text.onPrimary` carries the evergreen button, `text.inverse` carries the rest. Light sets both to `#FFFFFF`, so the split is a no-op there.

**Known gap (pre-existing, not from #49):** light's `accent` (2.67:1), `secondary` (3.54:1) and `danger` (4.48:1) buttons carry white below AA, and have since long before dark mode. Pinned as a ratchet in `contrast.test.ts`; fixing it needs per-variant on-colors in light too.

**Subtle tints are opaque, not alpha.** The earlier spec proposed 12–16% alpha tints of each base; they ship pre-flattened over `background.base` instead, because `blendHex` and `ProgressBar`'s `${hex}59` reserved-segment suffix both require 6-digit hex. `theme/contrast.test.ts` asserts this.

**Contrast is enforced in CI,** not by eye — `src/__tests__/theme/contrast.test.ts` runs WCAG ratios over *both* palettes (AA 4.5:1 body, 3:1 secondary/hairline/icon), asserts the dark surface ladder steps monotonically lighter, and asserts token parity between the two palettes. The `Colors` type widens the light palette's literals into a structural contract, so a token missing from dark is a compile error.

**Shadows** (`lightShadows` / `darkShadows`) keep identical geometry; dark swaps warm ink for near-black at higher opacity (`sm .20 / md .30 / lg .40`) and lifts the hero `glow` to `#D4A87E`. On dark the ladder does the real work — treat shadows as an edge, not the mechanism.

Components must keep consuming colors through `useTheme()` only — no hardcoded hex in screens — so the dark flip stays a token swap. The one exception is the hero wash (`theme/wash.ts`, §2.3), which gates on `theme.isDark` because dark drops the container entirely.

### 2.3 Atmosphere — tonal washes (#368/#369)

A wash is a linear gradient from a subtle token into surface white (`Card variant="hero"`, `expo-linear-gradient`) — the watercolor register: soft edge, translucency, warm paper. It marks a **mood beat**, not emphasis. The app's seriousness is carried by behavior (integer subunits, the STS receipt, fact-framed copy), so the container may be warm — but only where mood *is* the content.

**The register is transparent watercolor in Sargent's lineage, not moleskine-café.** Four painters are cited, two per palette, and each is here to settle exactly one decision. A reference that can't be given a job is decoration — cut it, because an unassignable name becomes a taste signal nobody can argue with in review ("that's not very Sargent" is not an actionable note).

| Painter | Palette | The decision it settles |
|---|---|---|
| **John Singer Sargent** | light | **Edges.** A hard edge against a soft passage *is* the effect. The crisp container holds the soft wash; never soften one to match the other. |
| **Chien Chung-Wei** | light | **Value before detail.** The abstract light/dark pattern must read as a composition before anything is rendered into it. Operationally: grayscale a screenshot — if the hierarchy collapses, hue is doing work value should be doing (§2.1, and `colors.ts` principle 1). |
| **Joseph Zbukvic** | dark | **The nocturne.** Luminosity is *reserved*, not painted: chromatic darks, with a few small high-value notes carrying all the light. Nothing lifts its own edges. |
| **Igor Sava** | dark | **Atmosphere without theatre.** Limited palette, everything in harmony, nothing shouting. The brake on the nocturne's pull toward drama — 9pm is quiet, not cinematic. |

The light/dark split is real rather than cosmetic: light's problem is **composition** (the paper is bright — where do the edges go), dark's problem is **luminosity** (the paper is gone — where does light come from without glowing).

**Deliberately not cited,** though admired: Álvaro Castagnet (bravura — the mark that shows the hand's excitement; Lysning does not perform) and Thomas W. Schaller (structure-first is exactly right, but the painted register is cinematic, and citing him licenses drama). Coherence of register beats breadth of reference.

Big-brush transparent watercolor translates to three properties, all achievable with flat gradients:

- **Lost-and-found edges.** The painterly power is a hard edge against a soft passage. In **light** the hero card is exactly this: crisp radius + warm-ink shadow (the rigid core) containing a soft interior wash (the soft edge). Never soften that container to match the wash — the contrast is the whole effect. **Dark is the deliberate exception** (#49): there the hero has *no* container at all, and the edge is genuinely lost. See the edgeless note below — this is a considered departure, not licence to soften containers generally.
- **Variegated wash.** Real washes charge two pigments into each other, shifting density and *temperature* mid-passage. Spec (the hero baseline, `Card variant="hero"`): a **4-stop uneven-density vertical wash** — `accent.subtle` at 90% pigment → the same pigment thinned to 40% by 45% run → bare white by 70% → a faint **settle rim** of `secondary.base` at 8% on the bottom edge (the found-again drying rim; verified on device that hero numbers stay crisp over it). Stops are opaque, derived via `blendHex(token, white, …)` — never alpha stops (transparent-stop interpolation artifacts) and never a hue-family swap mid-wash. **Vertical, not tilted:** an angled wash was tried and dropped — `LinearGradient` start/end are normalized to the view's bounds, so any tilt angle is a function of the card's aspect ratio and drifts as content grows; a uniform tilted ramp also reads as a rotated fill, not gravity. Density variation carries the hand-laid feel on its own. Still one `LinearGradient`; zero perf or asset cost.
- **Value discipline.** The wash lives entirely in the subtle/muted tier (§2.1 chroma-by-role). More pigment never means more chroma — celebration earns *depth of wash*, not brighter color.

**Celebration variant:** celebration moments (goal fulfilled/closed) may start deeper and fade later — full-strength `accent.subtle`, `locations` ending ~`0.65` vs the hero's `0.5` — and are the **only** place a second overlaid gradient (simulating a charged wash) is permitted. One extra GPU fill, still tonal, still static. Everywhere else: one layer.

**Where washes may appear — exhaustive list:**
- The Home STS hero (dawn wash, #368)
- The Home ground's time-of-day tint (`useTimeOfDayGround`, #369) — morning blends `background.base` toward `accent.subtle`, evening toward `secondary.muted`, day unchanged. On dark it shifts the floor's *temperature* (toward the deep warm/jade tints) rather than lifting it, for the same reason the hero never lifts its edges. Landed as a flat blended color (not a directional wash) — a "ground" is the floor, not an edge fade; reserve directional `LinearGradient` washes for card-level moments (hero, celebrations). Blends toward the *subtle/muted* tier, not the *muted/subtle* tier the issue originally proposed — those sit almost on `background.base` already and would repeat the hero wash's first (invisible) calibration attempt.
- Celebration moments (goal fulfilled/closed)

**Rules:**
- **At most one wash per screen.** The crisp white of every other card against the wash is what makes both read; wash everything and nothing is the anchor (§4-style hierarchy, in paint).
- **Never on data surfaces** — ledgers, tables, the runway, the STS receipt, forms, settings. Softness near numbers reads as decoration papering over rigor.
- **Never on warning/attention components.** Posture banners, nudges, and shortfall banners stay flat. Warning IS the accent (§2.1) — every amber *atmosphere* dilutes the amber *signal*, so a new amber wash must justify itself against the posture banner's legibility on the same screen.
- **Tonal light only, no figurative texture.** No grain, blooms, or paper effects anywhere transactional — a flat wash can't fail; a texture can (banding, tiling, the generic "AI watercolor" look). If texture is ever wanted, it's a separate spec'd decision, not a drive-by. The painters above are cited for their *doctrines*, never as a licence to simulate their surfaces.
- **Static, always.** Washes never animate (§8); the bucket-flip-on-focus precedent (#318) applies.
- **Tokens only, calibrated on device.** OLED swallows subtle tints — `accent.muted` proved invisible as a wash; `accent.subtle` fading out by 50% height is the hero baseline. No raw hexes.
- **Dark's hero is edgeless (#49) — the wash *is* the card.** No fill, no border, no shadow. Five stops begin and end in `background.base`, so the passage emerges from the ground and returns to it: `background.base` → `blendHex(bg, surface.alt, .3)` → `blendHex(bg, surface.elevated, .5)` (the peak, at 60% — below centre, where light settles) → `blendHex(bg, accent.base, .12)` (a warm whisper at 85%) → `background.base`. The card's presence is its own internal value change, nothing else. Following **Zbukvic's nocturnes**: the luminosity is *reserved*, not painted — the peak is a lens the hero number sits inside, and the card never lifts its own edges (an edge that glows reads as an emitting panel, the generic dark-UI look this register exists to avoid). Measured: peak separates from the ground at 1.24:1 and stays 1.34:1 *below* `surface.elevated`, so it reads without outranking real cards (§4).
  - **Only valid directly on `background.base`.** The fade-to-invisible is what removes the edge; over any other surface the end stops become visible seams.
  - `borderRadius` is vestigial there (no visible corner), and content near the top/bottom edges sits on bare ground — the padding has to carry it.
- **Light keeps the solid card and the original 4-stop wash.** Edgeless does not translate: alabaster `background.base` to pure white is only **1.09:1** of total headroom, so a lens carved out of it cannot separate from the ground. Measured, not assumed — `wash.test.ts` pins it. Dark has real range *below* its surfaces, which is exactly why the approach works there and only there.
- **Pigment still subtracts light.** In light the charge thins toward the bare card and the settle rim pools *darker* again — a drying rim never glows. No stop in either palette may lift above `surface.elevated`.
- Both live in `theme/wash.ts` (`heroWash`, `groundTint`) — the only place components branch on `theme.isDark`; everywhere else stays a pure token swap. `__tests__/theme/wash.test.ts` enforces the edgeless contract, the single interior peak, the peak-separation floor, and light's no-lift rule, because reintroducing a glowing card is easy and typechecks fine.
- **Card-height gradients only, never screen-height.** A subtle-tint→white ramp stretched over a large area bands visibly on 8-bit OLED; short gradients with small deltas don't. (The temperature-drift midpoint also reduces total amber per wash — it *helps* the §2.1 amber-dilution budget, not hurts it.)
---

## 3. Typography, spacing, radii, elevation

### Type

- **Manrope** — headings & brand. SemiBold (600) for headings; **Bold (700) reserved for hero numbers and primary CTAs.**
- **Plus Jakarta Sans** — body, UI, transactions. **Always `tabular-nums` for amounts.**

Scale (px): `display 36` · `displaySmall 32` · `h1 28` (screen title) · `h2 24` · `h3 20` · `h4 18` · `h5 16` · `bodyLarge 17` · `body 15` · `bodySmall 14` · `caption 13` (timestamps — 13 not 12, deliberately) · `captionSmall 12` · `overline 11` · **finance:** `amount 20` · `amountLarge 28` · `amountSmall 16`.

Line heights: `tight 1.2` (headings, amounts) · `snug 1.3` (card titles) · `normal 1.5` (body) · `relaxed 1.6` (rare long-form).

Letter spacing is **px, not em** (React Native renders px — do not convert back to em-style decimals, those were visual no-ops): `tighter −0.6` (hero numbers) · `tight −0.4` (h1/h2) · `normal 0` · `wide 0.3` (captions) · `wider 0.5` (badges) · `caps 0.8` (section headers) · `widest 1`.

### Spacing — 4px grid with 2px micro-steps

Key stops: `2`=8 small button padding · `3`=12 list-item/input padding · `4`=16 card padding, screen content gutter · `5`=20 generous card · `6`=24 section break · `8`=32 screen edge · `11`=44 **minimum touch target** · `rowMinHeight`=56 interactive rows · `16`=64 empty-state centering. Full scale in `spacing.ts`.

### Radii — one scale, no improvising

`xs 4` decorative squares · `sm 10` inputs, small buttons, icon tiles · `md 12` medium buttons, sunken cards, row highlights · `lg 16` **cards (default surface)** · `xl 20` bottom sheets, modals · `full 999` pills, chips, badges, FABs, dots, handles.

### Elevation — three levels, warm ink (+ the hero glow)

`sm` (0/2, 0.05, r8, e2) stat tiles, sticky headers · `md` (0/4, 0.08, r12, e4) **standard card** · `lg` (0/6, 0.14, r16, e8) FAB, toasts, sheets · `glow` (md's geometry, amber `#C4956A` at 0.25) the hero card's halo (#368) — at most one per screen, it marks the anchor, not emphasis. Opacity lives in `shadowOpacity`, color is solid (ink `#1C1917`, or amber for `glow`) — never combine alpha color with opacity (iOS multiplies them).

---

## 4. Money display

All amounts are **integers in subunits** (paise/cents). `toSubunits()` before storing, `formatCurrency()` for display. Render through `AmountDisplay` — never hand-roll amount text.

### Semantics (current, see §10 for open decision)

| Variant | Sign | Color | Meaning |
|---|---|---|---|
| `income` | always `+` | accent amber | You earned this — a reward moment |
| `expense` | always `−` | text.primary (ink) | A neutral fact, not a failure |
| `transfer` | none | sage `secondary.base` | Money moved, not gained/lost |
| `savings` / `accent` | none | accent amber | Progress, celebration |
| `neutral` | none | text.secondary | De-emphasized amounts |

Negative values always render `−` regardless of variant. `showSign` forces `+` elsewhere when a delta needs it.

### Rules

- Sizes: `sm` 16 → `md` 20 (transaction rows) → `lg` 28 (balances) → `hero` 32. **Hero-number law:** one `lg`+ per screen.
- All amounts: `tabular-nums`, semiBold, `letterSpacing tighter (−0.6)`. Columns of amounts must align digit-for-digit.
- `prefix`/`suffix` (e.g. "Est.", "/mo") render small + muted — the number stays the subject.
- **Never** color an expense red, and never use error-terracotta for any amount.

### Income-color tradeoff (open decision)

- **A — current: income = amber.** Amber means "reward"; expense stays neutral ink; success-green stays free for confirmations. Avoids the green/red moral axis entirely. Note: `#C4956A` is a muted caramel/brass — it reads "gold/money/premium," not signal-yellow "caution"; and with no red anywhere in the app there is no traffic-light axis for it to be the middle of. *Recommended.*
- **B — income = success-green** (`#3D7A5E`), amber only for savings/goals. More conventional, instantly legible to users migrating from other apps; but reintroduces half of the green/red axis and dilutes green (brand + success + income).

**Resolved: the `accent`/`warning` token collision.** `accent.base` and `feedback.warning.base` used to be the *same value* (`#C4956A`) — one hue meaning both "reward/opportunity" (income, savings) and "needs attention" (projection at risk), while *also* being used decoratively (the dawn wash, the `glow` halo). Signal and decoration cancelled each other out.

The obvious fix — give warning its own hue — is not available. The warm side of the wheel is full: every candidate "attention" amber/terracotta lands within **1.1:1** of `feedback.error` (`#B85C50`) and reads as the same color. And a seventh hue would double the (unbuilt) dark-mode surface.

So attention is separated on two axes the palette *does* have:

1. **Chroma separates signal from decoration.** Atmosphere may only use `accent.subtle` / `accent.muted`; full-chroma `accent.base` and `accent.deep` are signal-only (§2.1).
2. **Form separates attention from opportunity.** A warning is a *container* — `warning.subtle` background, an icon, and the message in ink. Opportunity is *bare* — colored text or a colored fill, never boxed. Hue no longer has to carry the distinction.

This also fixed a contrast failure that was independent of the semantics: **no step of the amber ramp was ever legible as text.** `accent.base` measured 2.67:1 on white — below even the 3:1 large-text floor — yet it was rendering 13px warning captions. Hence `accent.deep` (§2.1).

**Still open (A-vs-B only):** first usability pass, Indian users (launch market). Comprehension probe — show a transaction list with amber income rows *and* a warning state (e.g. "projected ₹200 past plan") on the same screen; ask what each color means and whether the amber income felt positive, negative, or cautionary.

**Decision date:** within 30 days of the first usability round (same convention as the §10 notification-opt-in item). Until decided, A (the code's behavior) is canonical.
---

## 5. Progress patterns — budgets vs goals

Progress surfaces are where the app earns its keep. A user who sees *where they stand* but not *where they're headed* will eventually stop looking. **These surfaces are depth, not the morning anchor** (§1.1): full plan utilization and goal pace markers live behind "Details" / in the relevant tab and in the evening reflection — the home ritual surfaces only the STS hero, one stability sentence, and one goal recommitment. Therefore:

> **Decision rule:** *plans* (spend limits with time bounds) → **remaining-first numeral**, no bar (§5.1, #232). *goals* (target amounts by target dates) → **pace marker** (§5.2). Both show the math; both offer paths. Never use traffic-light coloring for either.

---

### 5.1 Plan utilization — remaining-first numeral (#232)

**Decision (#232): no progress bar for plans.** A fill bar invites a "% consumed" reading and, at or past 100%, a guilt reflex — both break "planning, not nagging" and the tone rules below. Plans instead lead with **what's left**, as a numeral, plus one muted line of context. The temporal glance a bar used to give is recovered by a short pace phrase ("~11 days at this pace") — more honest than a fill, because it answers "will this last the month?" directly. *Rejected:* a pace-vs-time marker (reintroduces a bar; two pace metaphors on Home blur goal-vs-plan) and a runway/burn strip (reads as a progress bar in disguise — the very thing being removed). One system, two densities; no graphic in either.

```
HOME — glanceable; right-aligned "left" column, no graphic:

  Groceries                    ₹3,900 left
  of ₹8,000 · ~11 days at this pace

  Fuel                             ₹0 left
  ₹500 over · plan used for July

  Dining                       ₹2,000 left
  of ₹5,000 · tracking under

SETTINGS list — denser; same system, row taps to edit:

  Groceries        ₹3,900 left of ₹8,000
  ~11 days at this pace

Near period-end, under — ties to the STS "unspent is reserved" story:

  Dining                       ₹2,000 left
  ₹2,000 unspent · reserved for Safe to Spend
```

**States** (from `BudgetStatus`: `allocated`, `spent`, `remaining`, `isOverBudget`, `periodStart`, `periodEnd` — no new fields):
- **Under, mid-period** — hero `₹{remaining} left`; sub `of ₹{allocated} · {pace phrase}`.
- **Exhausted** (`remaining == 0`, not over) — hero `₹0 left`; sub `plan used for {month}`.
- **Over** (`isOverBudget`) — hero `₹0 left`; sub `₹{spent − allocated} over · plan used for {month}`.
- **Under, near period-end** (`remaining > 0` and ≤ ~5 days left, or clearly under pace) — sub `₹{remaining} unspent · reserved for Safe to Spend`. Answers the open question: under-utilization near period-end **does** get a positive note, and it reinforces that STS already reserves the remainder (`getAllowanceRemaining`).

**Pace phrase** (derive from dates + spend; nothing stored):
- `daysElapsed = today − periodStart` (min 1); `daysLeft = periodEnd − today`.
- `burn = spent / daysElapsed`; `runwayDays = burn > 0 ? remaining / burn : ∞`.
- `runwayDays ≥ daysLeft` → **"tracking under"**; else **"~{floor(runwayDays)} days at this pace"**; `spent == 0` → **"not started"**.

**Typography & color** (§4; §5 tones — never red, never traffic-light):
- Remaining numeral: `amountSmall`/`body`, `text.primary`, weight 600 — the row's hero.
- Secondary line: `caption`, `text.muted`.
- **Over** amount stays `text.muted` — the muted overflow tone is *factual and calm*. Never `feedback.error`; never an alarmed fill.
- **Unspent** note (period-end, under): `accent` — an opportunity, consistent with the goals-surplus convention.
- The word **"budget" never surfaces** — copy is "plan", "left", "unspent", "over".

**Accessibility.** One combined label per row — e.g. *"Groceries, ₹3,900 left of ₹8,000, ~11 days at this pace"* (over: *"…, ₹500 over"*); the descendant Texts stay hidden from the reader (the Home row already does this via `importantForAccessibility="no-hide-descendants"`).

**Out of scope.** `rolloverAmount` / `isStrict` (#83) are unpopulated in the monthly-only MVP — this treatment reads `allocated`/`spent`/`remaining` only and stays forward-compatible.

**Calibration nudge** — budgets should fit the person, not vice-versa:
- Trigger: **≥3 of the last 4 closed months** over (or under) by **>10%** in the same direction.
- Surface: a dismissible suggestion row beneath the category — *in-app only, never a push notification.*
- Copy: "You've landed near ₹6,000 for 4 months — set budget to ₹6,000?" Actions: **[Update]** **[Keep ₹5,000]**.
- Cap: one nudge per category per month; dismissing suppresses that category for 2 months.

---

### 5.2 Pace marker (savings goals — planner v2/v3)

A goal is a *target by a date*; the honest comparison is **where you'd be if saving evenly**, not percent-complete. The pace marker shows whether the user's current behavior will hit the target — and, if not, what adjustments would.

```
Wedding fund · target ₹3,00,000 by May 2027

  ██████████████████░░│░░░░░░░░░░░░░░░
                      ▲ even pace today
  ₹1,24,000 saved · ₹6,000 ahead of pace
  
  At this pace: you'll hit the goal by March 2027. 
  [Keep current plan]  [Reduce monthly contribution]  [Allocate surplus elsewhere]
```

```
Behind pace:
  ██████████████░░░░░░│░░░░░░░░░░░░░░░░
                      ▲ even pace today
  ₹98,000 saved · ₹8,000 behind pace
  
  To catch up: ₹2,500/mo more. Or move the date to July.
  [Increase to ₹12,500/mo]  [Move date to July]  [See impact on other goals]
```

- Track 0 → target amount; fill = saved so far, **always `accent` amber** — saved money is never rendered negatively, regardless of pace.
- Pace marker: 2px tick, `text.muted`, at the even-pace position between start date and target date.
- Ahead of pace: fill passes the marker — amber + forward copy ("₹6,000 ahead of pace") + *options to reallocate surplus* (the goal is ahead; the user may want that money elsewhere).
- Behind pace: fill short of the marker — fill stays amber; the *gap* is expressed as **two concrete options** with computed consequences: "₹2,500/mo more reaches it by May — or move the date to July." **Never "behind = red/warning."**
- **Daily recommitment** (the home-ritual surface for goals, §1.1): the full pace marker is depth, but its *condensed form* on the home screen is a one-tap micro-decision — "Vacation fund — add ₹500 today? [Yes][Skip][Adjust]" — with the model caveat noted in §1.1 (implies a real same-day `allocation` write that doesn't exist yet).
- Linked feature ("how much can I spend while meeting the goal") reuses the same vocabulary: "Spending ₹X/day keeps the wedding fund on pace. Spending ₹Y/day pushes it to August."

**The path row for goals** — same pattern as trade-off bars:
- Ahead: "Reduce contribution," "Allocate surplus to [other goal]," "Bring date forward"
- Behind: "Increase by ₹X/mo," "Move date to [new date]," "See impact on other goals"
- On pace: "Keep plan," "Simulate bonus," "Add one-time contribution"

---

## 6. Component usage

Build screens from these; if a screen needs a new pattern, extend the system (new component + this doc) rather than one-off styling.

| Component | Use | Don't |
|---|---|---|
| **Button** | `primary` one per screen (main action) · `secondary` supporting · `accent` celebratory/goal CTAs only · `ghost` tertiary/inline · `danger` destructive confirms only | No `danger` for "over budget" actions; no two `primary` on one screen |
| **Text** | Always via `variant`; headings auto-Manrope semiBold, body auto-Jakarta | No raw `<RNText>`, no inline fontSize |
| **Card** | `default` standard · `elevated` needs lift (md shadow) · `outlined` low-emphasis · `sunken` recessed/summary wells | Don't nest elevated in elevated |
| **AmountDisplay** | Every monetary value (§4) | Never hand-format money |
| **TransactionRow** | All transaction lists; income gets amber accents, status dot (pending=warning, failed=error) | Don't rebuild ad-hoc rows; keep 56px `rowMinHeight` |
| **Badge** | Category/status pills, captionSmall uppercase | Not for counts needing attention (no red badges) |
| **TextInput** | Labeled, sunken bg; `error` prop → terracotta border + message | Error styling only for validation, not "too expensive" |
| **Skeleton** | Loading states, 1.2s opacity pulse (0.45–1.0); match final geometry (`TransactionRowSkeleton`) to avoid layout shift | No spinners for content loads |
| **EmptyState** | First-run/no-data: title + body + optional ghost action | Tone per §7 — inviting, never "Nothing here!" |
| **SectionHeader** | captionSmall, uppercase, caps letterSpacing, muted | Don't promote to h-styles |
| **SegmentedControl / ChipSelector** | 2–4 exclusive options / wrapping multi-choice (pills) | Segments shouldn't scroll; >4 options → SelectInput |
| **BottomSheet** | All pickers, secondary flows; xl top radius, handle, scrim backdrop | Avoid full-screen modals for small choices |
| **Header / Screen** | Every route: Screen (safe areas, bg, 16px gutters) + Header (`default` or `large`) | No custom safe-area math in screens |
| **Divider** | `subtle` within groups, `base` between groups | Don't stack dividers with sunken cards |

### 6.1 Form density — field layout

**Two kinds of friction — kill one, keep the other.** *UI-chrome friction* (stacked labels, empty boxes, redundant taps, sync spinners) is pure cost; strip it. But *capture friction* — the small act of categorizing or confirming a transaction — is a **moment of mindfulness about spending, and a trust-building moment** (the user watches their data get validated, deduped, reconciled, so they trust the output more than if it had magically appeared — the IKEA effect). Don't optimize that away. This has a premium implication: AA-sync must **augment awareness, not replace it** — if premium becomes "set it and forget it," it can quietly remove the mindfulness that makes the free tier sticky. The rest of this section is about killing chrome friction; it is **not** licence to remove the deliberate, awareness-creating touchpoints.

Forms are where chrome friction kills retention. The field components are *type-aware* (the system knows a field is a date, an amount, a category) but were not *density-aware* — a date rendered as the same full-width, full-height, empty, stacked-label box as a free-text field that genuinely needs the room. Let the known field type drive the footprint, and stop reserving space for info the user hasn't volunteered.

Two governing principles:

1. **A form should look mostly answered, not mostly empty.** Empty boxes read as demands → intimidating. Compact rows pre-filled with smart defaults read as "here's what I assumed, tap to change" → calm. Sanctuary, not interrogation (§1).
2. **Optional fields cost zero vertical space until engaged.** Don't render the chrome of an unused field — render a one-tap invitation. This is how "save space" and "still collect rich info" coexist.

**Density comes from grouped 56px rows + hairlines — never from shrinking touch targets.** Minimum target stays `spacing.11` (44); interactive rows stay `rowMinHeight` (56). What we remove is the stacked label, the per-field border, and the 20px inter-field gap — not the tap area.

**Field-type → layout map.** This is the "context" the components carry:

| Field type | Dense pattern |
|---|---|
| **Amount** (hero) | Large *unboxed* numeric — currency prefix, `amountLarge` (28), `tabular-nums`, autofocus. **One per form** (hero-number law, §4). |
| **Enum, 2–4 options** (e.g. type) | `SegmentedControl` or inline chip row — keep |
| **Enum, many** (account, category, goal) | **56px grouped row** (label left / value + chevron right) → existing `BottomSheet` picker |
| **Date** | Compact row, or inline **"Today ›"** chip. Never a full-width box. |
| **Boolean** (split, active) | Row with `Switch` on the right — keep |
| **Optional free text** (notes, merchant) | Collapsed **"+ Add note"** token; expands inline on tap |
| **Required free text** (rare) | Boxed `TextInput` — the one type that earns the room |

**Cross-cutting moves — apply to every form:**

- **Group by purpose into one Card; divide with hairlines** (`Divider subtle`), not 20px gaps between separately-bordered boxes. Fewer visual units → skimmable.
- **Pair short siblings two-up** — e.g. Date + Account on one row when both are compact. Halves the row count.
- **Render defaults as resolved values, not empty fields** — date = "Today", account = last-used. The field looks answered.
- **Optional = opt-in tokens** — `+ Merchant`, `+ Note`, `+ Draw from goal` sit as a quiet inline row; tapping expands in place. Available, but invisible until wanted.

```
expense quick-add (grouped, defaults pre-filled):

  Expense   Income   Transfer        ← SegmentedControl

        ₹ 1,240                        ← AmountField (hero, unboxed)

  ┌─────────────────────────────┐
  │ Account        HDFC ····· › │     ← FieldRow → BottomSheet
  │ ─────────────────────────── │
  │ Category       Dining ··· › │
  │ ─────────────────────────── │
  │ Date            Today ··· › │     ← default shown, tap to change
  └─────────────────────────────┘

  + Merchant   + Note   + Draw from goal   ← opt-in tokens, zero cost until tapped
```

**Building blocks (compose forms from these; to build):** `FormGroup` (grouped Card + dividers), `FieldRow` (the 56px label/value row backing Select/Date/Boolean in row mode), `AmountField` (the hero exception), `OptionalField` / `AddToken` (collapsed opt-in affordance). Don't build a single smart `<Field type=…>` mega-component — it fights the three-layer split (§6) and turns config-heavy; keep density decisions in a few composed pieces, reused across create, edit, goals, scheduled, and onboarding so consistency is free.

**Edit screens stay expanded.** Disclosure and opt-in tokens are for first-capture (low friction). Editing is deliberate, so an edit screen may show every field expanded — reuse `FormGroup` + row variant for density, but skip the collapse.

**Never hide a firing warning behind disclosure.** Conditional feedback that's actually active (e.g. the goal-dip amber notice, §4/§7) renders outside any collapsed section.

---

## 7. Voice & copy

The copy is where the app proves it's not just another dashboard. Visual clarity shows the user where they stand; copy shows them what they can do about it. The goal is not to make the user feel good about their situation — it's to make them feel *capable of changing it*.

### Principles

1. **Describe, project, then offer.** State the fact in neutral terms, show where it's headed, then one or two concrete options. "₹4,100 spent · projected ₹5,200 by month-end. ₹200 past plan — shift from Entertainment, or adjust budget?"

2. **The user is never the problem.** Errors blame the system or the situation: "Couldn't save — try again" not "You entered an invalid amount." Projections that look bad blame the math, not the person: "At this pace, you'll hit ₹5,200" — not "You're overspending."

3. **Numbers are the subject; consequences are the story.** "₹2,000 unspent — move it to Wedding Fund and hit the goal 2 months early" beats "Great job staying under!" The number is the anchor; the projection gives it meaning.

4. **No moral vocabulary about money.** Spending is not "bad"; budgets are not "passed/failed"; months are not "good/bad months." Behind pace is not "failure" — it's "₹2,500/mo more reaches it by May, or move the date to July."

5. **Every state includes a next step.** If the copy ends without an action, it's incomplete. The action may be "keep current plan" — but that must be a conscious choice, not a dead end.

6. **Voice = a competent friend, not a suit.** A drill-sergeant gym app fails; a scolding-parent finance app fails. Lysning sounds like *a thoughtful friend at a coffee shop* — never a financial advisor in a suit. Our "neutral education, not personalized advice" stance (and any LLM copy) is a personality decision before it's a compliance one. And the **deliberate non-goals** (no bill negotiation, no credit-score upsells) build trust precisely because they signal *we won't monetize your anxiety* — lean into that in the copy; it's rare in fintech.

7. **Celebrate detection, not just problems.** Insight copy reframes toward momentum: "You spent 40% less on dining out this month" lands completely differently from "You overspent on groceries." Where a net-worth or runway frame is available, prefer *building* (momentum) over *restriction* (deprivation) — strength-training, not a diet.

---

### Never say / say instead

| Never | Instead |
|---|---|
| "Budget exceeded!" / "Over budget ⚠️" | "₹1,000 past plan · projected ₹1,300 by month-end. Adjust July, or let it ride?" |
| "You failed to…" / "You blew your budget" | "Dining ran at ₹6,000 for 4 months — your plan may be low. Update to ₹6,000?" |
| "Warning" (about spending) | Reserve for system issues only. For projections: "At this pace, you'll land at ₹X" |
| "Only ₹400 left 😬" | "₹400 left · 3 days remaining. At this pace: ₹200 past plan. Options?" |
| "You're behind on your goal" | "₹8,000 behind pace. Catch up: ₹2,500/mo more. Or move the date to July." |
| "Invalid input" | "Amounts need to be a number — e.g. 250" |
| "We miss you!" | (nothing — see §9) |
| "Great job staying under!" | "₹2,000 unspent — move to Wedding Fund?" |
| "You've used 90% of Dining!" | "₹4,500 of ₹5,000 spent · 10 days left. At this pace: on track." |
| "Goal reached! 🎉" | "Wedding Fund target met — ₹3,00,000 saved. Adjust target, or start the next goal?" |

---

### Surface-specific tone

**Empty states:** inviting and brief — what this screen *will* show, one action, one forward path.

> "Your spending will show up here once you add transactions. Add your first one — or connect your bank to import automatically."

**Validation:** name the fix, not the mistake. Offer the correction, not the diagnosis.

> "Amounts need to be a number — e.g. 250"  
> "Dates need to be in the past"  
> "Category required — pick one below"

**Sync/import failures:** honest + actionable + system-owned. The user should trust the app even when it fails.

> "Couldn't reach the bank — your data is safe here. Retry, or add transactions manually?"

**Safe-to-Spend (the home anchor, §1.1):** one calm hero number + one stability *sentence* (a fact, never a score), and — on a tight day — a temporal boundary, never a permanent verdict.

> Healthy: "₹2,400 safe to spend today. Your fixed costs are covered through July 15."
>
> Tight / zero: "₹0 safe to spend today — resets in 3 days. Next income: July 1. [Pause vacation fund?]"
>
> Stability as runway, not percentage: "Your essentials are covered for 4.2 months" — never "you're 73% stable."

**Budget states (a core depth surface):** fact, projection, paths. Every budget interaction must leave the user with a sense of optionality.

> Under, mid-month: "₹4,100 spent · ₹900 left · 9 days. At this pace: ₹5,200 by month-end. ₹200 past plan. [Shift ₹200 from Entertainment] [Adjust budget] [Let it ride]"
>
> Over, month end: "₹6,000 spent · ₹1,000 past plan. You've landed near ₹6k for 4 months — your plan may be low. [Update to ₹6,000] [Keep ₹5,000] [See other categories]"
>
> Under, month end: "₹3,000 spent · ₹2,000 unspent. Move to Wedding Fund and hit the goal 2 months early? [Move ₹2,000] [Keep for buffer] [Reduce next month's budget]"

**Goal states:** pace first, options second. Never celebrate the number; celebrate the *optionality* it creates.

> Ahead of pace: "₹1,24,000 saved · ₹6,000 ahead of pace. At this pace: goal by March 2027. [Keep plan] [Reduce monthly contribution] [Allocate surplus to Honeymoon]"
>
> Behind pace: "₹98,000 saved · ₹8,000 behind pace. Catch up: ₹2,500/mo more reaches May 2027. Or move the date to July. [Increase to ₹12,500/mo] [Move date] [See impact on other goals]"

**Month-end summary:** facts first, one projection, one insight, one option. Never a report card. Never a score.

> "June: ₹42,000 spent across 8 categories. 3 categories landed within ₹500 of plan. Dining ran ₹1,000 past plan for the 4th month — your plan may be low. [Review Dining] [See full breakdown]"

**Premium upsells (in-app, in context):** frame as unlocking foresight, not features. The user pays for *consequence modeling*, not buttons — and never for privacy (privacy is the free tier's promise, not a paid feature).

> "See 3 paths for every budget, model custom scenarios, and ask 'what if?' in chat. [Try Premium — ₹999/year] [Not now]"

## 8. Motion & haptics

Motion answers "what changed?" — it never performs.

### Durations & easing

| Tier | Duration | Easing | Used for |
|---|---|---|---|
| Micro | 150–200ms | ease-out | Press feedback, chip select, segment switch |
| Standard | 250–300ms | ease-out | Sheet open/close, screen transitions, expand/collapse |
| Reveal | ~400ms | ease-out cubic | `useCountUp` number reveal |

### Rules

- **Count-up runs once per load** (`useCountUp` behavior: animates 0→target on mount, snaps thereafter). The reveal is a load moment, not a refresh ritual.
- The only looping animation is the **Skeleton pulse** (1.2s, opacity 0.45–1.0). Nothing else loops, blinks, or bounces.
- **Never animate to dramatize negative states** — no shaking inputs, no pulsing overflow bars, no red flashes. Overflow fill appears with the same quiet transition as any fill.
- Progress fills animate width over Standard tier on first render.
- Respect OS reduced-motion: count-ups snap, fills appear instantly, skeleton becomes static.

### Haptics

Haptics confirm and celebrate — **never alarm.** The palette is a hierarchy — *rigid core, soft edges*: texture at everyday interaction (tick, light), weight at consequential commitments (rigid), and one loud celebratory moment when the user wins. Weight is the trust signal; scattering celebration everywhere would cheapen it.

| Event | Haptic |
|---|---|
| Amount keypad digit/delete (accepted only) | selection tick |
| Selection (chips, segments, pickers) | light impact |
| Consequential commit (fund/close/create goal, transfer, plan save) | rigid impact |
| Transaction saved (income/expense) | success notification |
| Goal fulfilled | success notification + one **soft** impact ~200–300ms after (the one "loud" moment; see below) |
| Validation error | none (the message is enough) |
| Crossing a budget threshold | **none, ever** |
| Destructive confirm (delete) | medium impact on the confirm only |

**The Soft impact style belongs to celebration alone.** `milestone()` layers a single `Soft` impact ~200–300ms after the success notification — the celebration "settling," a haptic bloom that mirrors the wash register (§2.3). One follow-up tap, never a pattern (two reads as a game). `Soft` appears nowhere else: not on keys, selections, or saves — the same dilution logic as the amber. And `commit()` stays **Rigid**: the rigid-commit/soft-celebration contrast is the haptic form of the lost-and-found edge. (expo-haptics has no custom curves — composed sequences of existing primitives is the ceiling, which suits the no-heavy-work constraint.)
---

## 9. Notifications

Notification overwhelm is a top-two churn driver. Default posture: **digest over drip.** But a digest that only reports the past is a newspaper; a digest that projects the future is a reason to open the app.

**Presence over prompts.** A daily "Your Safe-to-Spend is ₹X" push reads as a nag, even surveillance. Prefer *ambient awareness*:
- **Widget-first.** A home-screen widget showing just STS + one goal status makes the app *visible without interrupting*. The user glances, sees the number, and chooses to open — that choice is agency. This is the preferred channel for the daily figure; daily *pushes* of the number are not.
- **Weekly briefing, not daily alarm.** "This week: ₹12,400 free after commitments" feels like planning; a daily number feels like a countdown. Weekly framing wins.
- **Respect the morning/evening split (§1).** Never push a *problem* (overspend, anomaly) in the morning — that's the orientation moment. Problems belong to the evening reflection or in-app, never to the AM screen.

### Rules

- **Default on:** one weekly projection ("Your week: ₹X spent · projected month-end: ₹Y over/under plan · 2 categories need attention"). Everything else opt-in.
- **Caps:** hard max 1/day; target ≤3/week total. Respect quiet hours (22:00–08:00 local) always.
- Every notification must answer a question the user actually has, in the §7 voice — numeric, forward-looking, with a path if actionable.
- Calibration nudges (§5.1), spending insights, and anything reflective live **in-app only**.
- **Never push a projection without a path.** "Projected ₹200 over" without "Shift from Entertainment?" is anxiety, not agency.

### Never notify

- Threshold-crossing pings ("You've used 90% of Dining!") — this is the guilt cycle, push-delivered. Projections are fine; arbitrary alarms are not.
- Streak breaks or guilt-based re-engagement ("We miss you!", "Don't forget to log!").
- Celebration spam for routine acts.
- Marketing disguised as insight. Premium upsells live in-app, in context.

**May notify (opt-in):**
- Weekly projection digest — default on
- Goal milestone reached — one per milestone, never repeated
- Large/unusual transaction detected — security framing, info tone, with one-tap review
- Import/sync completed after a long-running job — with summary of what synced
- **Projected month-end alert** — if a category is trending >20% past plan and the user has enabled "path suggestions" in settings. Must include a computed path: "Dining trending ₹800 past plan — shift from Entertainment?"

---

## 10. Open decisions & known divergences

Every row carries a disposition: **decide** (has a test plan + date), **build** (spec adopted, implementation pending), or **watch** (unknown we're instrumenting).

| Item | Status | Notes |
|---|---|---|
| **Income color: amber vs success-green** | **Decide** — open (§4); code behavior (amber) canonical until decided. | Comprehension probe with Indian users in the first usability pass. Narrowed to A-vs-B only — the `accent`/`feedback.warning` same-token collision is now **resolved** in §4 (chroma + form, not a new hue). |
| **`ProgressBar` traffic-light auto-color** (>80% → error) | **Done** — auto-coloring removed; the fill is one calm color and defaults to `accent.base`. | Was the loudest contradiction of "never traffic-light" — it implied moral judgment at arbitrary thresholds. |
| **Dark mode** | **Resolved (#49)** — shipped, system-driven (§2.2). | Remaining: verify the washes and `border.base` hairlines on a budget LCD (₹10–15k Xiaomi/Realme) — contrast is CI-enforced, but black levels are not. An in-app Light/Dark/System override is deliberately deferred (needs an `appSettings` column). |
| **Pace marker component** | **Build** — forward spec (§5.2); build with planner goals (v2/v3). | Path row pattern should be reusable between trade-off bars and pace markers. |
| **Premium surfacing patterns** | **Decide** — not yet spec'd. Need §6 update for path-row CTAs, in-context upsells, and "unlock foresight" framing. | Blocking for monetization. This is the *foresight* rung of the ladder (`narrative.md`) — premium copy sells outcomes/results, never privacy (§7). |
| **AI path computation accuracy** | **Watch** — unvalidated. Can the backend reliably suggest "shift ₹200 from Entertainment"? | If not, fall back to manual "Review categories" path until v2. |
| **Notification opt-in rates for projection alerts** | **Watch** — unknown. Will users enable "path suggestions" or treat them as spam? | Instrument and test within 30 days of launch. |
| **STS-hero home restructure** | **Build** — adopted (§1, §1.1, §5, §7); partially shipped: Home leads with the STS v2 forecast card + runway strip. | The full ritual triple (STS hero + one stability sentence + one goal recommitment, everything else behind Details) is not yet the home layout. Build continues. |
| **Daily goal recommitment write path** | **Build** — design intent (§1.1, §5.2); **not built**. | Needs a same-day `goalContribution` `allocation` write capped at `funding.available`. `monthlyContribution` stays a planning figure (STS v2), not auto-debited. |
| **Morning/evening surface split** | **Build** — adopted (§1, §9). | No time-of-day-aware home variant exists yet; notification scheduler must honor it. |
| **Widget (STS + goal status)** | **Build** — proposed (§9) as the preferred daily channel. | Not built; iOS/Android widget work unscoped. |

Resolved since last pass: the **Budgets tab** row (the tab no longer exists — Goals replaced it; the budgets table now backs "Plans" under Profile → Plans) and **pre-existing tsc errors** (all TypeScript errors cleared repo-wide).


