# ADR 0012 — Beta waitlist (supersedes 0002)

**Status:** locked (user-chosen)

## Context
ADR 0002 locked the site's job as "explain + build trust", with **no** email capture, waitlist or
lead form in v1 — correct while the app was not live and there was nothing to sign up for.

That premise has changed: the app is **entering beta testing**. ADR 0002 itself left the question
open ("is there a soft 'notify me at launch' or app-store pre-register link later?"). The answer is
now yes — when the page goes live it should start collecting a waitlist.

## Decision
Ship a **launch waitlist** on the marketing site, in two places: the hero and a dedicated closing
section before the footer. ADR 0002 is superseded.

The submission endpoint is **not** chosen yet. The form posts to `PUBLIC_WAITLIST_ENDPOINT`, read
via `import.meta.env` exactly as `PUBLIC_UMAMI_ID` already is (ADR 0010).

**When that variable is unset, neither the hero form nor the closing section renders at all.** This
is deliberate: it makes it impossible to merge a live email collector while the Privacy Policy still
says we never receive an address. Choosing a provider and setting the variable is a separate act.

## Consequences
- Still fully static (ADR 0001 holds) — a third-party endpoint, no backend of our own.
- Success is no longer comprehension alone; waitlist sign-ups become a measured outcome. The submit
  button carries `data-umami-event="waitlist-submit"` — cookieless and PII-free, per ADR 0010.
- **Privacy Policy must change before launch.** A waitlist makes two published claims false ("the
  only data we can receive is opt-in analytics and crash reports"; "we never learn your name, email,
  or any account"). Drafted in `privacy.md`; new processor rows added to
  `legal-review-checklist.md`. The `[PROCESSOR TBD]` markers are now filled in (see the Amendment).
- The closing section also fixes a structural gap: the page previously just stopped at
  Dark mode → Footer with no closing moment.
- Open: whether to keep the waitlist after GA or retire it. Provider and opt-in mode settled in
  the Amendment below.


---

## Amendment — provider is Buttondown

**Status:** locked (user-chosen, 2026-09-11)

`PUBLIC_WAITLIST_ENDPOINT` is set to
`https://buttondown.com/api/emails/embed-subscribe/<username>`.

### Why Buttondown

The deciding factor was not features — it was that the Privacy Policy has to **name the
processor**, in a section sitting directly beneath the claim that there is no server and nothing
leaves the phone. Buttondown makes that a single honest sentence: a small newsletter company,
no advertising business, a short published sub-processor list, link tracking that can be turned
off, and a DPA refreshed in March 2026 with an Art. 28(3) processing annex and SCCs.

Cost is the trade: free only to 100 subscribers, then roughly $9/mo to 1,000 and $29/mo to
5,000. At beta-waitlist scale that is noise, and the list is a CSV export away from portable, so
this is a cheap decision to reverse.

### Rejected

| Option | Why not |
|---|---|
| **Kit (ConvertKit)** | Free to 10,000, but puts Kit branding on forms and emails below the Creator tier, and the disclosure would name a creator-marketing platform doing subscriber scoring and engagement analytics. Wrong tone directly under the privacy section, and we need none of what it is good at. |
| **Mailchimp** | Free tier is 250 contacts / 500 sends a month — too small for the actual job. Decisive objection is that it is **Intuit**, the parent of Credit Karma and QuickBooks: naming it as our processor sits badly beneath "there's nothing here that makes money when you feel anxious". |
| **Brevo** | EU-based and unlimited contacts free, which is genuinely attractive, but it is a large multi-channel marketing suite (SMS, WhatsApp, CRM) and therefore a heavier thing to disclose than the job warrants. |
| **Formspree** | A generic form relay. Gets the address into an inbox but provides no list management, no unsubscribe handling and no sending reputation — we would be building the newsletter half ourselves anyway. |
| **EmailOctopus** | The closest runner-up, and the one to revisit if this choice is reopened. London-based, so the international-transfer paragraph disappears entirely; 2,500 subscribers and 10,000 sends free. Lost on its branding in free-plan emails and a thinner product. |

### Deferred — self-hosting the list

Considered and **deferred**: a Resend + own-backend (GCP `europe-west2`) waitlist, on the basis
that a premium backend is being built anyway and would give UK data residency.

Two findings against it, recorded so the question does not get re-litigated from scratch:

1. **It does not deliver the residency it was chosen for.** Resend's region setting controls
   only where mail is *routed and sent from*; their documentation states it does not control
   where customer data is stored, and account data, email metadata and logs remain in the US.
   Self-storing the list and sending via Resend still puts recipient addresses through
   US-stored logs — the work is done and the SCC paragraph is still needed.
2. **The database is the small part.** What follows is suppression lists, bounce and complaint
   feedback loops, one-click `List-Unsubscribe` headers (RFC 8058, required of bulk senders by
   Gmail and Yahoo), SPF/DKIM/DMARC, and warming a cold sending domain. Deliverability is the
   real risk: a beta invite in a spam folder is a tester lost silently, and that is the entire
   purpose of the list.

There is also a positioning cost. Today the copy can say the list lives with our email provider,
not with us, and never in the app. Self-hosting makes Lysning-the-company the holder of user
data for the first time — crossing the "no server" line for a mailing list, ahead of the premium
tier that was meant to justify crossing it.

**Revisit trigger:** the premium backend being *in production with an established security
posture*, plus a product reason — wanting waitlist signups to become accounts. Not a subscriber
count. Note that Resend Audiences stores contacts and handles unsubscribe flows for broadcasts,
so if this is ever revisited the own-backend half is optional.

### Consequences

- `WaitlistForm.astro` submits as a **native form POST, not `fetch`** — Buttondown's docs
  explicitly warn against `fetch` against the embed endpoint, because subscribers sometimes have
  to follow the response to clear a CAPTCHA or fix a validation error. Swallowing that response
  in JS would report failure on success, or succeed silently on failure.
- Privacy Policy §3(f), §5 and §6 now name Buttondown and state US processing under SCCs.
- **Before the env var is set:** accept Buttondown's DPA, turn on double opt-in, and confirm the
  UK leg of the transfer (UK Addendum or Data Bridge) — tracked in `legal-review-checklist.md`.


---

## Amendment — beta invitations, and open/click tracking on

**Status:** locked (user-chosen, 2026-09-18)

Two changes, both published in the Privacy Policy revision of 2026-09-18 (not material: the app
is untouched).

1. **Purpose widened to beta invitations plus the launch announcement.** The first revision said
   the list's single purpose was the launch email, but the beta opens in cohorts and the form
   already promised "invites go out in batches". Deleting the list within 30 days of the launch
   announcement is unchanged.
2. ~~**Open and click tracking are on.**~~ *Superseded 2026-09-20 — see the next amendment.* The Buttondown amendment above counted "link tracking
   that can be turned off" in the provider's favour; the ability stays, the choice reverses.
   Lysning is privacy-forward, not absolutist (ADR 0010 amendment), and a solo founder
   choosing which messages to send needs to know which ones are read. Disclosed on the form
   itself ("We see whether our emails are opened") so the double opt-in click is also the
   consent, which is what PECR expects of a tracking pixel — and in the policy's §3(f), §5,
   §6 and §7.

The one thing this does **not** change: the source a signup came from is still never sent to
Buttondown. Attribution stays aggregate, in Umami.


---

## Amendment — open and click tracking off; measure at the destination

**Status:** locked (user-chosen, 2026-09-20). Supersedes item 2 of the amendment above. Item 1
(beta invitations) stands.

**Decision.** Open and click tracking are **off** in Buttondown. The form's notice ("We see
whether our emails are opened") is removed, and the Privacy Policy revision of 2026-09-18 —
not yet published when this was decided — was corrected in place to say emails are untracked.

**Why.** Not a change of principle. Lysning stays **privacy-forward, not absolutist** (ADR 0010
amendment): the people it is built for are not privacy-sensitive, and there is no advantage in
building protections they will not notice or value. The reason is conversion. A tracking pixel
needs PECR consent, and the only honest way to get it is a notice on the form, at the exact
moment someone is deciding whether to hand over an email. That line costs signups — the one
number this list exists for — to buy per-person open rates on a list too small for them to mean
much. Open rates are also unreliable (Apple Mail Privacy Protection pre-fetches pixels).

**What we still measure — clicks, in aggregate, at the destination.** The signal that matters
is whether people act on an email, not whether they open it, and that is countable without
per-person tracking:

- Email links point to pages on lysning.app with a campaign parameter
  (UTM parameters, e.g. `?utm_source=buttondown&utm_medium=email&utm_campaign=beta-invite-1`). Umami counts those visits cookieless and in aggregate, as it
  already does for every visitor — no new disclosure needed.
- Survey completions (survey tool), debrief bookings (booking tool) and accepted TestFlight
  invites are counted where they land.

What this does not give: which *individual* clicked. Per-person follow-up in the beta comes
from the testers' own replies and TestFlight, not from email analytics.

**Revisit trigger.** If per-person clicks become necessary (e.g. chasing non-responders across
cohorts), click tracking *alone* — redirected links, no pixel — is the proportionate step. It
does not store anything on the person's device, so it arguably needs a policy disclosure rather
than a notice on the form; confirm that reading in legal review before switching it on, and
publish a new policy revision first.


---

## Amendment — our own pages for "check your inbox" and "what happens next"

**Status:** locked (user-chosen, 2026-09-20)

Buttondown's confirmation and welcome emails can't be edited on the free plan, so the default
welcome ("You're in! … You'll start receiving emails right here") is all a new subscriber gets.
Instead of paying to edit it, the explanation moves onto the site:

- `/waitlist/check-your-inbox` — Buttondown `subscription_redirect_url`, shown after submitting.
- `/waitlist/confirmed` — Buttondown `subscription_confirmation_redirect_url`, shown after the
  confirm click. Carries "what happens next" (questionnaire → batches via TestFlight → one
  launch email, then the list is deleted) and, once `PUBLIC_WAITLIST_SURVEY_URL` is set, the
  questionnaire link.

Both are `noindex` and hide the nav CTA. Umami's page counts on the two give the sign-up →
confirmation rate in aggregate, consistent with email tracking being off.

A Google Group was considered as a replacement for Buttondown and rejected: no way to join from
a static form, reply-all exposure on a discussion list, weaker deliverability, and no DPA for a
consumer group.


---

## Amendment — two metadata fields on the signup form itself

**Status:** locked (user-chosen, 2026-09-22)

`WaitlistForm.astro` asks two extra required questions alongside email, posted to Buttondown as
subscriber metadata (`metadata__<key>` naming, per Buttondown's embed-form convention):

- `metadata__uk` — "Are you based in the UK?" (Yes / No)
- `metadata__phone` — "Which phone do you use?" (iPhone / Android / Both)

Both are plain `&lt;select&gt;` fields, required to submit but not gated on the answer — a "No" or
"Android" response still joins the list. Configured as custom fields in the Buttondown dashboard
first; the embed form's inputs were hand-added to match.

No question about how checking a balance feels (an interview-screener question named separately
in `narrative.md`'s persona table) — reads as therapy copy on a signup form. Nothing about actual
balances or figures is asked, consistent with `/waitlist/confirmed`'s own line to that effect.


---

## Amendment — the questionnaire lives in Tally, offered at the moment of signup

**Status:** locked (user-chosen, 2026-09-22)

**Where the questions live.** UK and phone are asked on the signup form (amendment above), so
every subscriber carries the two facts that decide eligibility. The remaining four — money most
months, income pattern, how they keep on top of money, the last thing they saved for — are a
Tally form (`https://tally.so/r/0Q4pPA`).

Buttondown's own subscription questionnaire was rejected: it renders only on Buttondown's
hosted page, *before* the email field, so lysning.app signups would never see it and hosted-page
signups would face six questions before joining. Buttondown surveys are one question each and
immutable once published.

**How people get to it — built for completion, not just presence.**

- Offered on **`/waitlist/check-your-inbox`** ("While you wait: four quick questions"), the
  moment of highest intent, and again as step 1 on **`/waitlist/confirmed`**.
- `SurveyLink.astro` builds the link from the bare `PUBLIC_WAITLIST_SURVEY_URL`, adding
  `ref=check-inbox` / `ref=confirmed-page` (Tally hidden field) and, when available, `email=`
  so Tally's email question is pre-filled. The email comes from `sessionStorage`, written by
  `WaitlistForm` on submit; it is sent only to Tally and never appears on a lysning.app URL,
  so Umami never sees it. If absent, the respondent types it.
- Umami counts `survey-open` clicks (with the `ref`) in aggregate.

**Matching.** Tally answers are joined to Buttondown subscribers on lower-cased email. Answers
from people who never confirm, or who aren't on the list, are deleted; unsubscribing deletes
the Tally response too, so answers share the list's retention.

**Privacy follow-up.** Tally is a new processor holding four answers per subscriber, and
Buttondown now also holds UK/phone. Both go into the next policy revision (§3(f), §5, §6, §7).
