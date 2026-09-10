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
| 1 | Replace the sole-trader controller with the incorporated company once incorporation completes. |

## Terms of Service

| § | Item |
|---|---|
| 8 | Verify the Apple Standard EULA / Media Services minimum-terms wording against the current Apple Developer Program licence schedule. |
| 10 | Confirm the £100 liability cap and the consumer-rights carve-out survive UCTA / CRA 2015 review for a free beta. |
| 12 | Confirm the assignment/novation clause is effective against UK consumers without fresh consent; may need a notice-and-opt-out instead. |
| 13 | Confirm jurisdiction wording for consumers resident in Scotland / Northern Ireland. |

## Before GA (App Store transfer)

- Transfer the App Store Connect listing from the personal account to the org account (requires
  a D-U-N-S-backed Apple Developer organisation enrolment; transfers require the app to have no
  pending contracts and no bundle-ID conflicts).
- Republish both documents naming the company as operator/controller, with a new "Last updated"
  date, **before or at** the point of transfer (Privacy §1, Terms §12).
- Remove the TestFlight sections (Privacy §3(d)) and beta framing from the Terms.
- Set up `privacy@`, `legal@` and `hello@` mailboxes on lysning.app — both documents rely on them.
