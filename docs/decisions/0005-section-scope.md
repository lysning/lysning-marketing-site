# ADR 0005 — Section list / scope freeze

**Status:** amended — the freeze below is superseded by the Amendment. The **FAQ cut is
reversed**, and the section order changes to put the affordability calendar ahead of
Safe-to-Spend.

## Decision (original)
Single-page site, sections in order:

1. **Hero** — line C + calm Safe-to-Spend screenshot + India subhead (₹, salaried saver).
2. **The problem** — the headline balance is a lie; UPI-era noise; guilt-cycle apps churn people.
3. **Safe-to-Spend** — the one honest number (the wedge) + screenshot.
4. **Earmarked goals** — *your money stays yours* (`available = balance − Σ earmarks`); carries
   the "no money changes hands" point + screenshot.
5. **Why the number is trustworthy** — short reconciliation explainer (refunds/transfers netted).
6. **The Sanctuary** — calm, no red, no scores; money as terrain you navigate (behavior-change).
7. **The habit ladder** — Trust → Ritual → Foresight; how Lysning becomes daily.
8. **What Lysning is NOT** — no ads, no data sale, no lending, no auto-invest.
9. **Private by architecture** — on-device, no account (closing proof).
10. **Footer** — brand, "free, coming soon to India", minimal links.

## Cut / deferred (original)
- **FAQ** — deferred (revisit near launch for SEO/objections).
- **Competitor comparison** — excluded; app docs warn competitor facts must be re-verified
  before public use, and naming rivals conflicts with the calm brand.

---

## Amendment — FAQ restored; calendar leads

**Status:** locked (user-stated) for the FAQ and the demotion of Safe-to-Spend; the hero line
itself remains **open** (ADR 0004).

### 1. The FAQ is needed

The original deferral is reversed. The FAQ is not an SEO nice-to-have — it is where the hard
answers live, and several of them are answers the page cannot avoid:

- **"Does it connect to my bank?"** — No. Nothing on the marketing page currently says this, and
  the page reads as though sync exists. This is the single most important thing the FAQ carries.
- **"What do I have to do to keep it working?"** — upkeep, not features, is what churned the
  ex-YNAB audience. Answer it plainly.
- **"What if I lose my phone?"** — the honest cost of local-first. Stating it is what keeps the
  privacy section from reading as marketing.
- **"What does it cost?"**, **"Is there an Android version?"**, **"Will it tell me off for
  overspending?"**

`/faq` ships as a dedicated page (already built, `draft: false`), linked from the footer and from
the relevant inline sections. It stays a separate page rather than an accordion on the landing
page: the landing page is a single argument, and ten collapsed questions in the middle of it
breaks the read.

**The "budgeting app?" exception.** Doctrine forbids the word *budget* in user-facing copy, but
it is the term people search. Resolution: **one** FAQ question may be phrased in the reader's
words — *"Is this a budgeting app?"* — and answered in ours. That is the only sanctioned use of
the word on the site, plus `<title>` / `<meta description>`, where no one reads it as voice.
Every other occurrence is a violation.

### 2. Section order

Safe-to-Spend drops from the wedge to a supporting mechanic (reasoning in ADR 0004). The
affordability calendar leads.

1. **Hero** — planning-led line (ADR 0004, open) + waitlist form.
2. **The problem** — your balance can't answer the question; reports arrive too late to act on.
3. **The affordability calendar** — *the wedge.* From what you can actually save, here is the
   date each goal becomes affordable, and what moves it.
4. **Earmarked goals** — why that date is real money and not a projection: `available = balance −
   Σ earmarks`; carries the "no money changes hands" point.
5. **Safe-to-Spend** — the day-to-day number that falls out of the same arithmetic. Framed as a
   consequence of the plan, not as the product.
6. **Built for real life** — an expensive week moves the date, it doesn't break the plan.
7. **Why the number is trustworthy** — reconciliation: refunds, self-transfers, owed-by-others.
8. **Your data, your control** — on-device; includes the honest downside.
9. **Dark mode** — shipped showcase section; kept.
10. **Waitlist close** — renders only when `PUBLIC_WAITLIST_ENDPOINT` is set (ADR 0012).
11. **Footer** — brand, FAQ, contact, legal.

### 3. Still cut
- **Competitor comparison** — unchanged. Answer on mechanism, never on a named rival.
- **The habit ladder** as its own section — the trust → ritual → foresight arc structures the
  page's order; it does not need to be explained to the reader as a framework.
- **The Sanctuary** as its own section — it is a design philosophy, demonstrated by the page's
  tone and palette rather than described in it.
