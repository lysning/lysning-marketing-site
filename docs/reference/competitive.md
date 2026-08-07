# Competitive Landscape
Last updated: 2026-07-16

Strategy doc — grounded in market research, not code. Competitor facts are point-in-time and
should be re-verified before any external use. Sources: internal competition study + public
reviews/pricing pages + web research (2026-07). Distribution implications live in `gtm.md`.

## Market & framing
Personal financial planning / PFM. **Launch:** India (INR default, AA-framework-ready).
**Primary growth focus:** US / UK / CA / EU — mature subscription-PFM markets.
**Target user:** 20–40 salaried, outcome-driven — pays for "am I on track?", not for
bookkeeping or ideology. **Positioning note (2026-07):** privacy is a **proof point, not
the headline** — only a small tech-savvy minority pays for privacy per se; the headline is
the result ("one number you can trust"), with local-first as the trust-earning proof
underneath (`gtm.md` §Message already leads this way). **Model:** two tiers — **free** and
**premium** (subscription); a middle "premium lite" tier is under consideration, not
finalized. No ads, no data sale. The free tier runs fully on-device; premium adds backend
sync (AA, household, cloud backup) under a separate privacy policy & T&C.

## Beachhead economics (decided 2026-07-16)
**India = validation market. US/UK/EU = revenue market.** Sequence: validate the universal
loop in India (import → trusted STS number → retention), iron out sync UX when AA lands,
then enter US/UK/EU **with bank sync in the first Western release**.

Why India can't be the revenue market: **Fold** — the India-premium category leader — does
**₹4.99Cr (~$600K) revenue FY25 with 11 employees** after 6 years (Tracxn, 2026-07). That
caps the lane. India-premium is real but niche; use it to prove activation/retention
cheaply, not monetization.

| | India | US | UK/EU |
|---|---|---|---|
| Premium ARPU anchor | ₹1,999/yr (~$24, Fold) | $95–100/yr (Copilot/Monarch Core); $199 (Monarch Plus) | ~£50–90/yr |
| Sync rails | AA — Setu publishes ₹0.01–₹25/fetch (verified 2026-07); FIP-side bank fees rising, 13+ AAs keep rates falling | Plaid-class ≈ $0.50+/end-user/mo | Open banking (TrueLayer/GoCardless) — cheap, AA-like |
| Role | Prove loop + sync UX at paise-scale cost | Revenue; premium price must clear Plaid costs | Revenue; economics closer to India's |

What transfers from India: activation funnel, sync-reliability UX (reconnect/stale/partial
fetch), goal/STS product loop, subscription mechanics. What doesn't: price points, SMS-style
expectations (we skip those anyway). Nothing built for India-validation is wasted work for
the West.

**Market sequence (decided 2026-07-16):**
1. **India** — validate the loop; import-first, AA fast-follow.
2. **UK** — first Western revenue market. Open banking mature and cheap (TrueLayer/GoCardless
   agent model — no full FCA AISP licence needed); English; one regulator; incumbents
   (Emma/Snoop/Plum) beatable on planning depth; more single-user-oriented than the US
   (softens the household/couples dial-in pressure, §US/UK entry item 3).
3. **US** — highest ARPU, highest CAC; enter after UK proves the Western pitch. Plaid rails.
4. **EU** — after UK, country-by-country (PSD2 bank quality + language fragmentation), not
   as a bloc.
- **Parked:** **AUS** (CDR accreditation costly/slow even via the representative model;
  small market) and **Canada** (consumer-driven-banking rails still rolling out — revisit
  when live).

## Positioning axes
- **Local-first ↔ Cloud-first** — where the data lives by default.
- **Forward-looking ↔ Backward-looking** — "what's safe to spend / what's next" vs.
  "categorize the past."
- **Direction ↔ Precision** — 90-day spending direction vs. transaction-by-transaction
  bookkeeping. (Research: users disengage from precision-heavy, guilt-framed tools.)

Orielle's stake: **local-first, forward-looking, direction-first.**

## Competitor matrix
| Product | Region | Model | Data approach | Strength | Weakness | vs. Orielle |
|---------|--------|-------|---------------|----------|----------|------------|
| **YNAB** | US/intl | Paid sub | Cloud, bank sync | Strong method + loyal base | Steep learning curve; envelope guilt; price | We're forward-looking & local-first, lower friction |
| **Monarch** | US | Paid sub | Cloud aggregation | Polished, post-Mint household | Cloud-only; pricey | Local-first privacy; STS clarity |
| **Copilot** | US (iOS) | Paid sub | Cloud, ML categorize | Beautiful UX, insights | Apple-only; US-only; cloud | Cross-platform local-first |
| **Actual Budget** | Global | Open-source / self-host | **Local-first** | Privacy, local-first envelope | Techy setup; envelope method; no mobile-first polish | Same privacy stance, but goal/STS-first & consumer-grade |
| **Rocket Money (Truebill)** | US | Freemium + fees | Cloud | Subscription cancel, bill negotiation | Bill-negotiation fee backlash (30–60%); sync gripes | No predatory fees; clarity not upsell |
| **Qapital** | US | Paid sub | Cloud | Goal-based saving, rules/automation | Cloud; US; savings-account tie-in | Goals as first-class but local-first & planning-led |
| **Plum** | UK/EU | Freemium + sub | Cloud | Auto-save, investing | Cloud; investing upsell | Privacy-first; clarity over auto-invest |
| **INDmoney** | India | Free + monetized | Cloud aggregation (AA) | Broad aggregation, investing; 10M+ registered users (2024), "super money app" positioning | Data-monetization concerns; busy; investing-led | Privacy-first; spend clarity not investing |
| **Walnut / Money View** | India | Free + lending | SMS/cloud | Auto SMS expense capture across banks/UPI | Lending-led; SMS-parsing privacy | We deliberately skip SMS parsing; consented AA instead |
| **Fold Money** | India | Freemium + sub (Plus/Believer) | Cloud, **AA-native** | AA-first aggregation (banks, cards, investments, EPF/NPS, credit score); polished India-tailored UX; INR billing | Cloud-only; tracking-led (aggregate + view), not planning-led (no STS/earmark concept) | **Closest India analog.** They own "see everything via AA"; we own "what's safe to spend" — planning + local-first vs. dashboard + cloud |
| **CRED** | India | Free + marketplace/lending | Cloud | Massive brand + affluent base; credit-card bills, score, rewards | Card-centric; monetizes via marketplace/loans; not a planning tool | No monetization conflict; whole-money planning, not card rewards |
| **Jupiter / Fi Money** | India | Neobank (free + cross-sell) | Cloud (AA) | Bank-grade UX with built-in spend insights; AA connections | Money mgmt is a retention feature for the bank, not the product; cross-sell-led | Independent of any bank; planning-first, no product push |
| **ET Money** | India | Free + monetized | Cloud | Mutual-fund-led, goal-based framing, ET brand trust | Investing funnel; expense tracking is secondary | Goals = earmarked cash for spending safety, not fund sales |
| **PocketGuard** | US/intl | Freemium + sub | Cloud, 18k+ banks | Real-time sync, "Safe to Spend", hashtag tags, debt schedule | Cloud-only; sync-dependent | Same STS idea, but local-first & reconciliation-honest |
| **Quicken Simplifi** | US | Paid sub | Cloud aggregation | Auto-budget from income, bill/subscription tracking, net worth, partner sharing | Cloud-only; paid-only | Local-first; forward-looking without mandatory linking |
| **Goodbudget** | Global | Freemium | **Manual / local-ish** | Envelope method, shared household sync, bill reminders | Manual entry; envelope guilt | Goal/STS-first, not envelopes; richer automation |
| **EveryDollar** | US | Freemium + sub | Cloud (sync paid) | Zero-based budgeting, simple | Sync behind paywall; method-rigid | Direction-first, not zero-based bookkeeping |
| **Albert** | US | Subscription | Cloud | Automated savings, advice | Cloud; advice upsell | Savings first-class but local-first & non-advisory |
| **CalendarBudget** | Global | Paid | Cloud | Day-by-day balance calendar | Niche; dated UX | Validates STS-calendar; we do it local-first |
| **Mint → Credit Karma** | US | Free (ad/data) | Cloud aggregation | Was the mass-market default | Mint shut down; ad/data model | No ads, no data sale |
| **Spreadsheets** | Global | Free | Local | Total control | Manual, no automation | Same control + automation + reconciliation |

## Deep dives (closest rivals)
- **Actual Budget** — the only mainstream *local-first* rival. Shares our privacy stance but
  is envelope-budgeting + self-host/techy. We win on consumer polish, mobile-first, and a
  goal/Safe-to-Spend-first model rather than envelopes.
- **YNAB** — the goal/method benchmark. We win on lower friction, forward-looking
  Safe-to-Spend (vs. assign-every-dollar), and local-first privacy.
- **Rocket Money** — the cautionary tale: strong subscription/cancellation hook but a
  fee-structure backlash. Validates the *subscription-tracker* opportunity while warning us
  off bill-negotiation revenue.
- **INDmoney / Walnut** — India incumbents with marketshare but trust/clarity gaps
  (data monetization; SMS-parsing). Our wedge in India is consented AA + privacy + clarity.
- **Fold Money** — the one to watch, now sized (verified 2026-07): **₹1,999/yr** annual,
  **₹25,000 lifetime "Believer"**, revenue **₹4.99Cr FY25**, **11 employees**, 3.1★/1.25K
  Play reviews. AA-native, subscription-funded (no lending/data monetization — same clean
  model as ours), India-tailored. It will beat our v1 on ingestion (auto AA sync vs. our
  manual/spreadsheet). Our separation: Fold is a **dashboard** (aggregate and view
  everything); Orielle is a **planner** (one trusted spendable number + earmarked goals),
  and local-first where Fold is cloud. Two readings: (1) its revenue **caps the
  India-premium lane** (~$600K/yr for the leader — see §Beachhead economics); (2) its 3.1★
  suggests the lane's leader is beatable on quality. If Fold ships a credible Safe-to-Spend,
  our India window narrows — track their releases.
- **Jupiter / Fi / CRED (the super-app squeeze)** — India's real incumbent risk isn't a PFM
  rival but banks/fintechs bundling "good-enough" spend insights for free. They can't follow
  us to local-first (their model *is* the data), and planning is a cost center for them —
  but they set the price anchor (free) for casual users. Our answer: sell to people with a
  goal, not people who want a dashboard.

## Distribution lens — how rivals actually acquire users
Feature parity is table stakes; the incumbents differ most in *how users find them*. Feeds
`gtm.md` channel choices. (Point-in-time, 2026-07.)

| Product | Primary acquisition | Lesson for us |
|---------|--------------------|----------------|
| **YNAB** | Education-first content: email course, daily live webinars, blog/SEO, then word-of-mouth + affiliates. Grew from a $9.95 spreadsheet to ~$49M ARR on this | The durable channel in PFM is **teaching a method**, not advertising an app. Our "honest STS" needs its educational wrapper |
| **Monarch** | Ex-Mint founder credibility + thought-leadership blogs/polls; timed to Mint's shutdown (~20× growth spike) | Moments matter: a rival's stumble (or AA news cycle in India) is an acquisition event. Founder voice is a channel |
| **Copilot** | Apple-ecosystem design halo — App Store features, design awards, Apple-press coverage | Store featuring is a real channel for polished apps; design quality is marketing |
| **Rocket Money** | Paid performance + "find forgotten subscriptions" hook | A single sharp utility hook out-converts a feature list. We can't outspend; we can out-hook |
| **CRED / Jupiter / INDmoney** | Massive paid + brand campaigns (IPL-scale), rewards/referral loops | Confirms: never compete on paid reach in India. Community + organic or nothing |
| **Fold Money** | Founder-led build-in-public (Twitter/X), fintech community word-of-mouth (Grapevine, TechnoFino) | The India PFM early-adopter pool hangs out in identifiable communities — same pool `gtm.md` Bet 1 targets; Fold got there first |
| **Actual Budget** | Open-source community, r/selfhosted, GitHub | Privacy-first users self-organize in communities; they're reachable for free but small |

Takeaways baked into `gtm.md`: (1) education-first content is the proven organic channel in
this category — a post-1000-users candidate; (2) India's early-adopter PFM community is
concentrated and reachable at $0, but Fold has a head start there; (3) paid is a losing game
at every budget we'll have.

## Retention reality (category benchmarks)
Why "features don't carry success": the category's floor is brutal, and retention — not
acquisition — is where PFM apps die. (Benchmarks 2026-07; directional, sub-category
definitions vary.)
- Finance apps average ≈ **26% D1 / 13% D7 / 4–8% D30** retention; budgeting-specific studies
  put the 30-day quit rate at ~67% (already cited under pain points).
- The known retention lever: **early demonstrated value** — a user who *sees a result*
  (e.g. "you saved ₹X" / a number they trust) retains; one who only linked/entered data
  churns. This is exactly the trust rung of the essentialness ladder (`narrative.md`).
- Automation-first apps (Monarch/Copilot) report ~2× retention of method-heavy ones among
  busy users — pressure on our manual-first free tier (pain point #1) and the case for
  pulling AA forward if activation data is weak (`gtm.md` bets table).
- Implication for targets: an honest D30 goal for v1 is **beating ~8%**, not vanity numbers;
  `metrics.md` retention rows should be read against these floors.

## Cost-structure moat (local-first unit economics)
Under-stated in earlier drafts: local-first isn't only a privacy stance — it's a **cost
asymmetry**. Cloud-first PFMs pay their aggregator per connected user, forever: Plaid-class
pricing runs ≈ **$0.30–0.60 per transactions-pull / ~$0.50+ per end-user per month** before
volume discounts, plus reconnection/identity overhead — realistic per-active-user cost lands
40–60% above base rates. That's why Monarch/Copilot/YNAB *must* charge and why their free
tiers are trials, not products.
- **Our free tier costs ≈ ₹0/user to serve** (no backend, no aggregator, opt-in analytics
  only). We can run a genuinely generous free tier indefinitely — structurally impossible for
  cloud-first rivals.
- India sharpens it: **AA pulls are dramatically cheaper than Plaid-class fees** — verified
  2026-07: Setu publishes **₹0.01–₹25 per fetch**; 13+ competing NBFC-AAs keep rates falling.
  Caveat: several large banks introduced FIP-side fetch fees in 2024–25 that AAs partially
  pass through — cheap, not free; re-quote before premium pricing. Even so, our premium sync
  tier carries far lighter unit costs than Western incumbents' — room to price for India
  without breaking margin.
- The asymmetry funds the strategy: free tier = acquisition + trust (no burn), premium =
  results (`narrative.md` §Business model). Incumbents can't copy the free tier without
  eating aggregator costs; Fold (AA-based) is the only rival sharing this advantage.

## Common pain points in incumbents (our opportunities)
From the research study — recurring failure modes we design against:
1. **Manual-entry friction** — manual-entry apps churn ~3× faster; broken bank sync makes
   ~68% abandon. → Our take: low-friction free tier (manual/spreadsheet) + *rock-solid*
   premium AA sync; sync reliability is a feature, not a checkbox.
2. **Guilt-cycle UI** — red/green "OVER BUDGET" framing drives the ~67%/30-day quit rate.
   → Neutral, directional framing ("75% of budget," "dining 40% higher than last month"),
   never pass/fail shaming. Ties to our "planning, not nagging" principle.
3. **Cognitive overhead** — transaction-level categorization without proportional benefit.
   → Direction over precision: 90-day trends first, line-item second.
4. **Feature gaps** — ~52–60% say their primary app lacks needed budgeting/analysis.
   → Reports + category splits + forecasting as core value.
5. **Privacy & trust** — recurring complaint across cloud apps. → Local-first default is the
   structural answer; premium sync is opt-in, consented, separately governed.

## Premium feature opportunities (doable, users pay — not yet in our roadmap)
Surfaced by the research as high-willingness-to-pay and technically modest. Candidates for the
premium tier (capture for roadmap; not commitments):
| Opportunity | Why it pays | Doability | Notes |
|-------------|-------------|-----------|-------|
| **Subscription detection** | Finds forgotten recurring charges | Pattern-match transactions (no SMS parsing) | Strong hook; avoid Rocket Money's fee model |
| **Cash-flow forecasting (30–90d)** | Top premium feature | Past patterns + known recurring bills; no ML | Natural extension of Safe-to-Spend calendar |
| **Net-worth dashboard** | "Forward momentum," not budget adherence | assets − liabilities aggregate | Anti-guilt, visually compelling |
| **Anomaly / spending insights** | Contextual guidance at decision point | Simple stats on transaction history | Ships before the full LLM feature |
| **Exportable tax/advisor reports** | Tax & advisor prep | PDF by category/period | Polished extension of CSV/PDF export |
| **Bill reminders** (not negotiation) | Avoids late fees | Calendar alerts | Sidesteps bill-negotiation fee backlash |
| **Debt payoff planner** | Snowball/avalanche schedules | Deterministic math on balances | PocketGuard offers it; pairs with net-worth |
| **Multi-currency** | International users & travel | Per-account currency + FX | Needed anyway for US/UK/CA/EU; PocketGuard/Goodbudget have it |

Pricing benchmarks (research): individual premium ≈ $4.99–$14.99/mo; household ≈
$12.99–$19.99/mo; annual plans discount ~15–30%. India pricing will need separate calibration.

## Free vs. premium boundary (industry norm)
The incumbent pattern is consistent and validates our split: **core budgeting, categorization,
and spend tracking live in the free tier**; **premium adds collaboration (household), advanced
sync (bank/AA), alerting, and personalized advice** (e.g. Rocket Money's bill negotiation,
Albert's investing tips, EveryDollar/Goodbudget gating sync). Our free-local /
premium-backend boundary matches this — with the privacy angle as the differentiator: our free
tier is *more* capable offline than most (full reconciliation + STS), and premium adds value
without the data-monetization most "free" incumbents rely on. If a "premium lite" middle tier
materializes, it slots between these without moving the privacy boundary (lite must stay
local-only or inherit the premium policy).

## US/UK entry — fight-on list vs. YNAB / Monarch / Copilot (2026-07)
What we can genuinely fight on when the Western release ships (with bank sync from day 1):

| Wedge | Why it wins | Their gap |
|---|---|---|
| **The trusted number** — reconciliation-honest STS (refunds, self-transfers, receivables netted) | Sync-noise complaints are the #1 gripe in Monarch/Copilot reviews; they mirror a noisy feed, we show spendable truth | Structural — their model is "mirror the feed," not "net the noise" |
| **Forward-looking planning as core** — runway, horizon forecast, payday-bounded STS | Monarch paywalls forecasting behind Plus (**$199/yr**); we make it the free-tier soul | Pricing architecture, hard to unwind |
| **Goals = earmarked real money** | YNAB's envelope method = labor + guilt (67% quit in 30d); Monarch goals are cosmetic trackers | Method religion (YNAB) / bolt-on (Monarch) |
| **Calm, no-shame design** — no red, warns never blocks | Guilt-cycle UI is a documented churn driver | Traffic-light UI is baked into all three |
| **Cost asymmetry** — free tier ≈ $0/user to serve | Their free tiers are trials (Plaid bills them); we can run a capable free tier forever and undercut at ~$49–59/yr | Structural — copying it means eating aggregator fees |
| **Android + cross-platform** | Copilot is iOS/macOS-only — instant half-market advantage over the design leader | — |

**Dial-in list before US release** (priority order; 1–2 are what India validates, 3–5 are the
genuinely new build):
1. **Sync reliability** — 68% abandon on broken sync; also the incumbents' weakest spot.
   India's AA phase is the rehearsal: build the reconnect/stale-data/partial-fetch UX there.
2. **Time-to-first-value < 10 min** — user sees their trusted number fast; Monarch's
   onboarding is the bar. India activation data (import → STS) validates this loop.
3. **Household/couples** — Monarch's core wedge ($99/yr ÷ 2 people). Single-user won't
   sustain $95+/yr. Premium backend must include it at US launch.
4. **Multi-device sync** — US premium buyers expect phone + web/tablet.
5. **Auto-categorization quality** — US users expect ML-grade; our rules+fuzzy engine is
   manual-first. Needs a leap, or a review-queue UX that makes correction feel fast.
6. **Net worth view** — table stakes in all three rivals; manual asset accounts suffice at
   launch (already in §Premium feature opportunities).
7. **Multi-currency** — needed for UK/EU anyway (§Premium feature opportunities).
8. **Store/design polish** — Copilot proves design quality *is* the acquisition channel on
   iOS; App Store featuring is a $0 channel we can win.

## Where we win
- **Trust in Safe-to-Spend** via reconciliation (refunds, transfers, receivables) — incumbents
  show a noisy balance; we show real spendable money. Local-first is the **proof point**
  underneath this claim ("and it never leaves your phone"), not a standalone headline.
- **Goals as earmarked real money** (`available = balance − Σ earmarks`) — no double-committing.
- **Forward-looking planning in the free tier** — what Monarch charges $199/yr for.
- **No predatory monetization** — no ads, no data sale, no bill-negotiation cut.

## Where we're weak (today)
- No multi-device sync yet (premium backend is roadmap).
- No automatic bank feed until AA sync ships (free tier is manual/spreadsheet).
- Single-user until household view lands (premium).
- No brand/marketshare vs. incumbents.

## Threats / watch
- AA aggregators commoditizing "connection," eroding sync as a differentiator → compete on
  clarity/forecasting, not just pipes.
- Incumbents (YNAB/Monarch) adding goal/forecast features.
- **Fold Money shipping a Safe-to-Spend / planning layer** on top of its AA dashboard — would
  compress our India differentiation to local-first + goals alone. Track releases.
- India super-apps (Jupiter/Fi/CRED/INDmoney) making "good-enough" free spend insights the
  default expectation.
- Privacy regulation shifts (favorable to local-first; watch AA/consent rules in India).

## Deliberate non-goals
- **SMS / notification parsing** — **deferred, not killed** (2026-07): Android-only,
  Play-policy risk (READ_SMS restricted since 2019; incumbents use notification listeners),
  fragile to maintain, and it cannibalizes the premium sync tier. Consented AA sync is the
  chosen path; revisit only if AA coverage/consent friction proves too high in practice.
- Investing, lending, credit-score upsells, and bill-negotiation revenue.

## Open questions
- [ ] India vs. Western pricing tiers and free/premium feature boundary.
- [ ] Which premium opportunities above make the v1 paid tier.
- [ ] Verify competitor pricing/features before any public comparison.
- [x] Verify actual AA FIU-side costs — done 2026-07: Setu ₹0.01–₹25/fetch (see
      §Cost-structure moat); re-quote FIP pass-through fees before premium pricing.
- [x] Fold Money deep-dive — done 2026-07 (pricing/revenue/size in §Deep dives); feature-level
      teardown still worthwhile before India launch copy.
- [ ] US premium price point (~$49–59/yr undercut hypothesis in §US/UK entry) — must clear
      Plaid per-user costs; model before Western launch.
- [ ] **Bet (unverified):** India skews savings-heavy and goal-oriented with less
      personal-finance experience — making goals-as-first-class the sharpest India
      distinction (newer generations may differ). No study or user test behind this yet;
      validate via onboarding goal-type mix + launch-market interviews (`narrative.md`
      persona table).
- [ ] Premium-lite tier: exists? what's in it? (see §Market & framing — not finalized.)
