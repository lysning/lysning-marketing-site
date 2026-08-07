# Orielle marketing site — build spec

Single static page. Astro → GitHub Pages → orielle.app. Purpose: **explain Orielle + build
trust** (no forms, no signup). India-first, English, ₹. Voice + visuals inherit the app's
design system (`reference/design-guidelines.md`). See `decisions/` for the ADRs,
`glossary.md` for terms, and `reference/` for read-only snapshots of the app's product docs
(design guidelines, narrative, roadmap, gtm, competitive, behavior) that inform this site's copy.

## Non-negotiables (from brand)
- **No red, ever.** No scores/percentages-as-grades. No moral money words ("over budget",
  "failed"). Numbers are facts. Voice = thoughtful friend, not advisor-in-a-suit.
- Privacy is **closing proof, never the lead** — the hero sells the honest number, not privacy.
- "Free" only; no premium/pricing (ADR 0006).

### Design principle — "rigid core, soft edges" (ADR 0011)
Structural rigor + unadorned precision on anything carrying **proof** (the number, the STS
receipt, screenshots — `.surface-data`, crisp, tabular, no wash); warm, calm, soft treatment on
anything carrying **mood** (`.surface-mood` / `.card`, generous radii, warm-ink shadows, washes
behind narrative only). Motion is one hero count-up, reduced-motion-gated; rigidity is *felt,
not seen*. Never soften a data surface.

## Theme tokens (port from app §2–3)
- Evergreen `#1B4332` (primary), Sage `#6B9080` (secondary/spatial), Warm Amber `#C4956A`
  (opportunity/accent — sparse), bg warm alabaster `#F5F3EE`, surfaces `#FFFFFF`/`#FAF9F6`,
  ink `#1C1917`. Shadows = warm ink, never gray. Radii: cards 16, pills 999.
- Type: **Manrope** (headings/brand, 600; 700 for hero numbers), **Newsreader** (body).
  Amounts always `tabular-nums`. Self-host fonts (perf + privacy).
- Motion: calm, ease-out, count-up-once on the hero number; respect reduced-motion. Nothing
  loops/bounces. Never animate to dramatize.

## Sections (in order)

1. **Hero**
   - H1 (line C): "A goal-first money app that tells you what's truly safe to spend today —
     and never needs your data in the cloud."
   - Subhead (India-tuned): earmark real goals — a wedding, a home, an emergency fund — and
     see one honest ₹ number that already accounts for them. Free, coming soon in India.
   - Visual: real STS home screenshot in an Android frame. No signup CTA — quiet "Coming soon"
     + (later) Play Store badge placeholder.

2. **The problem**
   - Your bank balance lies — pending charges, UPI transfers between your own accounts, refunds.
     So you over- or under-spend out of anxiety. Budgeting apps scold the past; they don't tell
     you what's safe now. Framing: calm, not fearful.

3. **Safe-to-Spend** (the wedge)
   - One number that answers "can I say yes to this today?" — after real money is reconciled and
     goals are set aside. Screenshot. Optional micro-example with ₹.

4. **Earmarked goals** — *your money stays yours*
   - Goals set aside real money in your real accounts: `available = balance − Σ earmarks`. The
     same rupee is never spent twice. Orielle **never holds, moves, or invests your money** —
     unlike apps that take custody. (This is the user's "no money changes hands" point.) Screenshot.

5. **Why the number is trustworthy**
   - Short: refunds, transfers between your accounts, and "owed by others" are netted out, so the
     figure reflects real spendable money — not a noisy balance.

6. **The Sanctuary** (behavior change)
   - Money isn't weather you endure; it's terrain you navigate. Calm by design: no red, no
     scores, no shame — just where you stand and one path forward. Reach money goals the way a
     good fitness app gets you to move: motivation, not guilt.

7. **The habit ladder**
   - Trust → Ritual → Foresight. Believe the number, glance at it each morning (30-second
     orientation), then let it help you plan ahead.

8. **What Orielle is NOT**
   - No ads. No selling your data. No lending or credit-score upsells. No auto-investing. We
     won't monetize your anxiety.

9. **Private by architecture** (closing proof)
   - Runs on your phone. No account, no server for the free tier — your financial data never
     leaves your device. Verifiable, not a policy nobody reads.

10. **Footer**
    - Wordmark, one line ("Orielle — free, coming soon in India"), contact email, minimal legal.

## Screenshots needed (ADR 0007)
- STS home (hero + §3), earmarked goal / pace marker (§4). Light theme, one Android device,
  **Orielle-branded (no "Salvyn" in UI)**. Source TBD (user export or build+capture from app).

## Deploy
- Astro static build → GitHub Actions → Pages. `CNAME` = orielle.app. HTTPS auto.
- Umami (cookieless) snippet in base layout; hosted on Umami Cloud (free) or self-hosted.
