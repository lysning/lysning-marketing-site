# Go-to-Market / Distribution
Last updated: 2026-07-05

Strategy doc — how the first users find Orielle. Companion to `narrative.md` (what we are) and
`competitive.md` (who else exists). Forward-looking; unknowns are explicit **Bets** with a
validation line. Re-verify community rules / store policies before acting on them.

## Objective & scope
**First 1,000 installs** of the free v1 (local-only, `launch-checklist.md` scope), with
**≥ 40% onboarding completion** among analytics-opted-in users. Paid conversion, premium
launch, and Western markets are **out of scope** — revisit this doc when v1 has 1,000 installs
or a channel verdict, whichever first.

Constraints this plan is honest about:
- **Team:** solo founder, part-time; GTM budget ≈ **4 focused hrs/week**, competing with dev.
- **Money:** ~zero. No paid acquisition, no ASO tooling subscriptions, no influencer fees.
- **Timing:** launch ~1.5–2.5 months out → a short, concrete pre-launch phase (§Phases).
- **Platform:** both stores day 1; **Play Store is the primary battlefield** (India wedge is
  Android-heavy), App Store listing is maintained but not optimized-first.

## The wedge
**India urban salaried saver** (25–40, UPI-heavy, saving toward concrete goals — see
`narrative.md` §Who it's for). Chosen because it's where incumbent money is weakest:
YNAB/Monarch/Copilot don't serve India; the Indian incumbents (INDmoney, Walnut/Money View)
are lending- and data-monetization-led with documented trust gaps (`competitive.md`).

**Honesty check:** v1 has **no AA sync** (Phase 2, `roadmap.md`). So the launch pitch cannot
be "connect your bank." The v1 wedge is narrower: *the saver who already downloads bank
statements or tracks in a spreadsheet* — served by spreadsheet import + honest Safe to Spend.
AA is the roadmap promise that earns a follow, not the launch hook.

## Message
Lead with the result, prove with privacy (`narrative.md` §One-liner — store-listing copy tests
pick between A/B/C variants):

> **One number you can trust: what's actually safe to spend today.** Refunds, self-transfers,
> and money you've set aside for goals — all netted out. And it never leaves your phone.

What we say: honest number · goals hold real money · works offline, no account, no bank login.
What we **don't** say: "budgeting app" (category is guilt-poisoned), "AI", promises about AA
sync dates, or any competitor comparison we haven't re-verified (`competitive.md` header).

## Channel bets
Two bets, both $0, both compounding. Each has a cheap test and a kill/scale rule — the point
is a verdict, not activity.

| | Bet 1 — India PF communities | Bet 2 — Play Store ASO |
|---|---|---|
| **Where** | r/personalfinanceindia, r/IndiaInvestments, r/FIREIndia (+ their Discords/Telegrams) | Play Store listing, organic search |
| **Hypothesis** | Savers who already discuss money online will try a private, goal-first tracker and say why/why not | Searches like "expense tracker offline", "money manager private/no login" have real volume and weak incumbents |
| **Mechanic** | **Give-first, never drop links.** Weeks of genuinely useful comments → mod-cleared launch/feedback post per sub → answer everything | Keyword-mined listing (title/short/long description), 4–6 screenshots telling the STS story, respond to every review |
| **Cost** | ~2 hrs/wk | ~1 day setup, then ~1 hr/wk iteration |
| **Scale signal** | A launch post that sustains organic comments + a measurable install bump within 48h | Store impressions → installs trending up week-over-week without launches/spikes |
| **Kill signal** | 2 mod-approved posts across subs produce < 50 installs combined, or mods refuse promotion entirely | After 8 weeks of iteration, < 5 organic installs/day from search |

**Deliberately not doing** (revisit only after a verdict on the two above): build-in-public
X/Twitter (dev audience ≠ India savers), finfluencer/YouTube outreach (low hit-rate at $0),
Product Hunt / HN (wrong geography for the wedge), paid anything, App Store ASO push.

## Phases

### Pre-launch (now → launch, ~6–10 weeks) — earn the right to post
- [ ] **Community residency:** join the target subs; comment helpfully (no product mentions)
      ~30 min/wk. Log recurring pain phrases — they become listing copy and screenshots.
- [ ] **Message mods early** with a plain description; ask each sub's rules for a launch/
      feedback post. Their answer decides where launch week happens.
- [ ] **Listing draft:** keywords mined from *free* sources (Play search autocomplete,
      competitor reviews' complaint language); screenshots storyboard = the §Message narrative.
- [ ] **Landing page** (single static page): one-liner, screenshots, privacy stance, email
      capture ("get notified"). The only pre-launch CTA everywhere.
- [ ] **Product ask (small, GTM-critical):** verify spreadsheet import handles the statement
      exports of the top ~5 Indian banks (HDFC/ICICI/SBI/Axis/Kotak xls/csv quirks). This is
      the activation path for the entire wedge — `competitive.md` pain point #1 (manual-entry
      churn) says it must feel like a 2-minute setup, not data entry.

### Launch week
- [ ] Both store listings live; Play listing gets the polish.
- [ ] Mod-cleared posts in whichever subs said yes — framed as *"I built this because X,
      here's what it does and doesn't do, tear it apart"*, not an ad. Founder answers
      everything for 72h.
- [ ] Email the landing-page list.

### Post-launch → 1,000 (weeks 1–12)
- Weekly, same day (`metrics.md` update rules): store installs, opted-in funnel, review replies.
- ASO iteration loop: one listing variable changed at a time (Play "store listing experiments"
  is free A/B).
- Feed community feedback into the roadmap **visibly** — replying "shipped, thanks" in the
  original thread is the cheapest retention/referral loop we have.
- At 1,000 or a kill signal: verdict per channel, then rewrite this doc.

## Measurement
Uses the `metrics.md` funnel; two caveats:
- **True denominator is the store consoles** (installs), not PostHog — analytics is opt-in, so
  every in-app funnel reads "opted-in users only" (`metrics.md` §Known Data Gaps).
- Channel attribution at $0 is crude: UTM on the landing page + Play Store referrer where
  available; otherwise time-correlation with posts. Accept fuzziness; we need verdicts, not
  precision.

## Bets being tested
| Bet | Validation | Fallback if false |
|-----|-----------|-------------------|
| Spreadsheet-importing savers exist in enough volume to reach 1,000 without bank sync | Install rate + import_started/committed among opted-in users | Pull AA sync forward in `roadmap.md`; wedge was right, activation path wasn't |
| India PF communities tolerate a founder launch post | Mod replies pre-launch | Shift hours to ASO + landing-page SEO |
| "Honest number, private by default" out-converts feature lists in a store listing | Play listing experiments (copy A vs B vs C from `narrative.md`) | Lead with goals ("money set aside stays set aside") instead |
| 4 hrs/wk is enough to get a channel verdict in 12 weeks | This doc's checkboxes actually move weekly | Cut to one channel (ASO — it compounds unattended) |

## Open questions
- [ ] Which subs' mods allow a launch post (answer during pre-launch, not launch week).
- [ ] English-only at launch, or do listing + screenshots need Hindi/regional variants? (v1 app is English-only.)
- [ ] Does "1,000 installs" need a quality bar (e.g. D7 retention floor) before we call the wedge validated?
