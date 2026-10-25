# Spec 02 — "How it works" in 30 seconds

**Status:** approved 2026-10-25 — (a) above the closing form, (b) "a few minutes a week", (c) yes.
**Scope:** one small block of copy, plus one FAQ answer brought up to date. No new section, no
screenshot, no layout system.

## Why
Reviewer 1 would join the waitlist "hesitantly — two unknowns gate it: how my balance gets into
the app, and what platform it's on." Both answers already exist, in the FAQ ("Does it connect to
my bank?", "Is there an Android version?"), which is linked only from the footer. The page asks
for an email before answering them.

## Facts (sources)
- **Data in:** no bank connection in v1. You set up in your own figures and add spending as you
  go, or import a spreadsheet export from your bank. Bank sync is the future paid tier.
  (app `docs/gtm.md` §Honesty check; FAQ "Does it connect to my bank?")
- **Effort:** add transactions as you go; the real effort is a few minutes around payday.
  (FAQ "What do I have to do to keep it working?")
- **Platform:** iPhone beta now (TestFlight); Android coming soon. (app `docs/release-beta.md`;
  approved copy 2026-10-25)

## Change 1 — three facts above the closing form (`Waitlist.astro`)
Placed between the lead paragraph and `<WaitlistForm id="close" />`, so they're answered at the
point the email is asked for. A plain definition list, the section's existing type styles, no
icons, no cards.

> **Your numbers** — You set it up with your own figures and add spending as you go, or import
> a spreadsheet from your bank. No bank login.
>
> **Your time** — A few minutes a week. Nothing daily to keep up.
>
> **Your phone** — iPhone first, in beta now. Android is coming soon.
>
> More in the [FAQ](/faq).

**VERIFY (a) placement:** above the closing form (recommended). The alternative is a separate
short section after the Calendar — it explains earlier, but adds a section to a page we are
about to shorten (spec 03).

**VERIFY (b) "Your time":** keep it, or cut to two facts? The reviewer asked only about data
and platform. Default: keep — "add spending as you go" raises the effort question by itself.

**VERIFY (c) wording:** "No bank login" is blunt on purpose; it turns the missing feature into
the privacy point. OK?

## Change 2 — FAQ "Is there an Android version?" (`src/content/pages/faq.md`)
Now: "Both are planned from the start. iPhone is likely to open first."
New: "Yes, it's coming soon. The beta is on iPhone first; Android follows."

## Not changing
- The hero. Its meta line already carries three facts; a fourth would crowd it.
- The waitlist form's iPhone/Android question — it measures Android demand.

## Caveat
The closing section renders only when `PUBLIC_WAITLIST_ENDPOINT` is set (ADR 0012). It is set
in production, so the facts show on the live site; a local build without it won't show them.

## Done when
1. `npm run build` passes (with the endpoint set, so the block renders).
2. The three facts appear above the closing form; the FAQ link works.
3. FAQ Android answer updated; no other FAQ changes.
4. Screenshots (desktop 1440 + phone 390) of the closing section reviewed by you.
