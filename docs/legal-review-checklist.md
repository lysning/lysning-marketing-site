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
| 3(f), 5 | **Waitlist:** provider chosen — **Buttondown** (ADR 0012); `[PROCESSOR TBD]` markers replaced. Still outstanding: execute/accept Buttondown's Art. 28 DPA before setting `PUBLIC_WAITLIST_ENDPOINT`. |
| 6 | **Waitlist:** Buttondown processes in the US under SCCs (their DPA, refreshed March 2026, carries an Art. 28(3) annex and a published sub-processor list). Confirm the UK leg is covered — the UK Addendum to the EU SCCs, or the UK–US Data Bridge — rather than EU SCCs alone. |
| 7 | **Waitlist:** confirm the stated retention (deleted within 30 days of the launch announcement) matches what Buttondown is actually configured to do — deletion is manual there, so this is a task, not a setting. |
| 4 | **Waitlist:** turn on Buttondown's double opt-in (confirmation email) for a clean PECR reg. 22 consent trail, and check the privacy copy still matches once it is on. |
| 5 | Umami was already live in `Base.astro` but undisclosed in §5 — now listed. Confirm the deployment is Umami Cloud vs self-hosted and whether a DPA is needed. |
| 3(f) | **Waitlist:** review Buttondown's own sub-processor list and confirm none of it needs naming in §5. |
| 3(h), 4 | **App updates:** the EAS Update check sends IP and a persistent per-install EAS client ID to Expo on every launch, before consent. Confirm the Art. 6(1)(f) basis, and whether PECR reg. 6's strictly-necessary exemption covers storing and reading that ID. The app-side change to reduce the check is tracked in lysning-app. |
| 5, 6, 7 | **App updates:** confirm Expo's legal entity, DPA, hosting region, transfer mechanism and retention for update requests; state them in §5–§7. |
| 1, 27 | **Operator is based in India, not the UK.** §1 no longer states a country. Confirm whether UK GDPR Art. 27 requires a UK representative (or the occasional/low-risk exemption applies), and name one in §1 if so. |
| 6 | **Operator in India:** confirm whether the operator accessing waitlist, analytics and crash data from India is a restricted transfer that §6 must state. |
| — | **DPDP Act 2023:** applies to processing carried out in India, whoever the data belongs to. Confirm obligations for waitlist, analytics and crash data, and the phase-in dates under the DPDP Rules. |
| 3(i), 5, 6, 7 | **Feedback emails:** name the mailbox provider behind support@ in §5 (and §6 if it stores mail outside the UK), confirm its DPA, and replace §7's "as long as needed" with a set retention period. |
| 3(g) | Confirm `EXPO_PUBLIC_CHANNEL_A_KEY` is unset in every EAS build environment. Nothing else in code keeps Channel A off. |

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
