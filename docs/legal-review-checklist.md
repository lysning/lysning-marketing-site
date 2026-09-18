# Legal review checklist — beta Privacy Policy & Terms

Open items pulled out of `src/content/pages/privacy.md` and `terms.md` so the published pages
read cleanly for testers. Each must be resolved with a qualified UK lawyer / the processor's
docs before the draft banners come off, and before GA.

## Privacy Policy

| § | Item |
|---|---|
| 3(c) | Confirm IP truncation/discard configuration with PostHog and Sentry; amend §3(c) to state what is actually configured. |
| 4 | State the treatment of already-collected events on consent withdrawal (retained pseudonymously vs deleted). |
| 5 | DPAs in place with PostHog and Sentry per UK GDPR Art. 28. |
| 6 | Confirm Sentry hosting region and the transfer mechanism (UK IDTA / Addendum to EU SCCs, or UK–US Data Bridge). |
| 7 | Set and state explicit retention periods for PostHog and Sentry. |
| 1 | If Lysning is transferred to a company, replace the sole-trader controller and re-publish before the transfer takes effect. |
| 7 | **Waitlist:** honour the stated retention — the list is deleted within 30 days of the launch announcement. Buttondown has no retention setting to configure, so this is a diarised task at launch, not a legal question. Carry it into the launch runbook. |
| 5 | Umami was already live in `Base.astro` but undisclosed in §5 — now listed. Confirm the deployment is Umami Cloud vs self-hosted and whether a DPA is needed. |
| 3(f) | **Waitlist:** Buttondown's sub-processor list was read on 2026-09-18 (see Resolved below) and nothing on it touches waitlist addresses beyond hosting and email delivery. One judgement is left for review: whether §5 names a processor's sub-processors or relies on the processor's published list, which is the same question as for PostHog, Sentry and Expo — decide it once for all four. |
| 3(h), 4 | **App updates:** the EAS Update check sends IP and a persistent per-install EAS client ID to Expo on every launch, before consent. Confirm the Art. 6(1)(f) basis, and whether PECR reg. 6's strictly-necessary exemption covers storing and reading that ID. The app-side change to reduce the check is tracked in lysning-app. |
| 5, 6, 7 | **App updates:** confirm Expo's legal entity, DPA, hosting region, transfer mechanism and retention for update requests; state them in §5–§7. |
| 1, 27 | **Operator is based in India, not the UK.** §1 no longer states a country. Confirm whether UK GDPR Art. 27 requires a UK representative (or the occasional/low-risk exemption applies), and name one in §1 if so. |
| 6 | **Operator in India:** confirm whether the operator accessing waitlist, analytics and crash data from India is a restricted transfer that §6 must state. |
| — | **DPDP Act 2023:** applies to processing carried out in India, whoever the data belongs to. Confirm obligations for waitlist, analytics and crash data, and the phase-in dates under the DPDP Rules. |
| 3(i), 5, 6, 7 | **Feedback emails:** name the mailbox provider behind support@ in §5 (and §6 if it stores mail outside the UK), confirm its DPA, and replace §7's "as long as needed" with a set retention period. |
| 3(g) | Confirm `EXPO_PUBLIC_CHANNEL_A_KEY` is unset in every EAS build environment. Nothing else in code keeps Channel A off. |

## Resolved

### Waitlist processor — Buttondown (verified 2026-09-18)

Verified against the processor's own published documents, which is the bar this page sets for
processor questions. Recorded in full in the app repo's launch checklist §5; summarised here so
the rows above are not reopened by accident.

| § | Was | Resolution |
|---|---|---|
| 3(f), 5 | Execute/accept Buttondown's Art. 28 DPA before opening the waitlist | **Nothing to execute.** The published DPA (last updated 2026-03-17) states it forms part of the service agreement and its SCCs are *deemed executed* on acceptance. No countersignature exists to chase, so the waitlist was not blocked on one. |
| 6 | Confirm the UK transfer leg is covered, not EU SCCs alone | **Covered.** Decision (EU) 2021/914 Module 2, supplemented for UK exports by the ICO's UK Addendum under s.119A of the Data Protection Act 2018. This is exactly what Privacy §6 already asserts, which was until now an unverified claim. |
| 4 | Turn on double opt-in for a PECR reg. 22 consent trail | **Already on, and not a setting.** Buttondown requires double opt-in for every newsletter by default; *disabling* it is the exception and needs a support request. The confirmation click is the consent record, and the form's copy ("Confirm by email, then invites go out in batches") matches. |

Sub-processor list as read on 2026-09-18: Cloudflare, Google Workspace, Heroku, Mailgun, Plain,
Postmark, Seline, Sentry, Slack, Stripe, Twilio. Hosting is US.

**Two things this does not resolve.** The processor's terms of service carry no
incorporation-by-reference sentence for the DPA — acceptance rests on the DPA's own wording plus
the privacy policy's link to it, so no signed artifact names us as controller; that goes to the GA
legal review, not the beta. And the operator's own access from India is a **separate** transfer
leg from the processor's US hosting: the UK Addendum above says nothing about it, and it stays open
in the rows above.

## Terms of Service

| § | Item |
|---|---|
| 8 | Verify the Apple Standard EULA / Media Services minimum-terms wording against the current Apple Developer Program licence schedule. |
| 10 | Confirm the £100 liability cap and the consumer-rights carve-out survive UCTA / CRA 2015 review for a free beta. |
| 12 | Confirm the assignment/novation clause is effective against UK consumers without fresh consent; may need a notice-and-opt-out instead. |
| 13 | Confirm jurisdiction wording for consumers resident in Scotland / Northern Ireland. |
| 1, 13 | **Operator in India:** §1 no longer states a country. Confirm England and Wales governing law and courts still make sense with an operator based in India. |

## Before GA (App Store transfer)

- Transfer the App Store Connect listing from the personal account to the org account (requires
  a D-U-N-S-backed Apple Developer organisation enrolment; transfers require the app to have no
  pending contracts and no bundle-ID conflicts).
- Republish both documents naming the company as operator/controller, with a new "Last updated"
  date, **before or at** the point of transfer (Privacy §1, Terms §12).
- Remove the TestFlight sections (Privacy §3(d)) and beta framing from the Terms.
- Set up `privacy@`, `legal@` and `support@` mailboxes on lysning.app — both documents rely on them. `support@` is also the app's built-in feedback address. `hello@` is still the site footer's contact address.
