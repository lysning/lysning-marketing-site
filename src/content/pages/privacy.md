---
title: 'Privacy Policy'
description: 'How Lysning handles your data: financial data stays on your device; limited, consent-based analytics and crash reporting.'
draft: true
---

> **⚠️ DRAFT — NOT LEGAL ADVICE.** For review by a qualified UK data-protection lawyer
> before publication. Written to match the app's behaviour in the current TestFlight beta
> build; if the app changes, this policy must change with it.

**Last updated:** _[set on publish]_
**Effective date:** _[set on publish]_

## The short version

- **Lysning** is a personal-finance app built around your goals and a "Safe to Spend" figure.
- **Your money data never leaves your device.** Transactions, balances, accounts, goals, income, categories — all of it lives only on your phone, in a database encrypted with a key held in your device's secure hardware store. We have no copy and no way to see it.
- **The only data we can receive is opt-in analytics and crash reports.** Both are off until you say yes, contain no financial data and no name or email, and are keyed by a token that is destroyed and regenerated every calendar month — so nothing links what you did in one month to the next.
- **No cloud sync today.** If we launch it, this policy will change first and it will be opt-in.
- **You're in control:** withdraw consent any time in **Settings → Privacy**; collection stops immediately, at runtime.

## 1. Who we are

Lysning is developed and operated by **Krishna Babuji** (the "controller" for the purposes of UK data protection law), an individual software developer. Contact: _[EMAIL — to be added before publication]_.

`[⚠️ Update to the incorporated company as controller once incorporation completes.]`

This policy is written to the **UK GDPR** and the Data Protection Act 2018. During the beta, testers outside the UK receive the same protections described here.

## 2. Data stored on your device (we never receive this)

Lysning is a **local-first** app. The following data is created and stored **only on your device**, in a database encrypted at rest (SQLCipher) with a random per-installation key held in your device's secure key store. We have **no server-side copy** and **no ability to access it**:

- Financial transactions (amounts, dates, payee/description, notes)
- Account names and balances; transfers between your accounts
- Categories, categorisation rules, spending Plans (allowances)
- Goals, goal contributions and reserves
- Income, pay-period and "Safe to Spend" settings
- Currency and locale preferences
- App settings, including your consent choices

Because this data never leaves your device, **we cannot retrieve, back up, restore, export, or delete it for you.** If you delete the app or lose the device, this data is gone — there is no cloud backup in the current version.

## 3. Data we receive only with your consent

On first launch you are asked whether to enable usage analytics and crash reporting. Both are **off until you consent**, and off in development builds.

### a) Product analytics (PostHog, EU-hosted)

Events describing *how* the app is used — e.g. an onboarding step completed, a goal created, a transaction logged, "Safe to Spend" viewed, an import started or abandoned. Each event may carry only a short **allowlisted** set of non-identifying properties (a step number, a source/kind enum, a millisecond timing, a yes/no flag). The app technically enforces this allowlist, so **amounts, balances, account names, payees and transaction descriptions can never be included — even by mistake.**

These events are **pseudonymous, not anonymous**: each carries a token derived on your device from a random per-install secret and the current calendar month. The token is discarded and regenerated at each month boundary, so events can be grouped within a month but never across one. We do not build user profiles, and we never call the analytics functions that would link identities (`identify()`, `alias()`) — this is enforced by automated test. We never learn your name, email, or any account.

### b) Crash reporting (Sentry)

If you have consented, uncaught errors send only the **exception type and code stack frames** (file / function / line — not the runtime values in them), plus the operating system name and major version. Error **messages are redacted** before sending, diagnostic breadcrumbs are dropped, and Sentry's per-install identifier, your IP address, device model, screen dimensions and locale are **all stripped** — a crash report carries no identifier at all.

### c) Technical metadata

As with any networked service, connection metadata such as your IP address is visible to the server that terminates the connection — a property of how networks work, not something an app can suppress. The stored crash dataset carries no identifier; the stored analytics dataset carries only the monthly rotating token described above. `[⚠️ LEGAL REVIEW — confirm IP truncation/discard configuration with PostHog and Sentry.]`

### d) TestFlight (beta only)

The current beta is distributed through Apple's **TestFlight**. Apple collects data from beta testers under its own terms — including your email address or invitation link, name (if provided), and usage, crash and device information which Apple may share with us in aggregate or per-build form. This collection is governed by [Apple's privacy policy](https://www.apple.com/legal/privacy/) and the TestFlight terms, not by this policy. This section will be removed at public release.

### e) App-store analytics

Apple's App Store provides us **aggregate, anonymised** metrics (installs, crashes, coarse demographics) under Apple's own terms, subject to your device's privacy settings.

## 4. Legal basis and how we use this data

- **Consent** (UK GDPR Art. 6(1)(a); PECR reg. 6): analytics and crash reporting run **only** on your consent, requested clearly before any collection begins.
- **Purpose:** exclusively to understand aggregate product usage, measure reliability, and fix crashes. Never for advertising; never sold or shared with data brokers.
- **Withdrawal:** any time in **Settings → Privacy**. Withdrawal takes effect immediately at runtime — it stops all further collection, tears down the analytics and crash SDKs, and destroys the install secret the monthly token is derived from, so the token cannot be regenerated. Each setting shows when data was last sent ("Last sent: never" or a timestamp), so you can verify the claim rather than take our word for it. `[⚠️ LEGAL REVIEW — state treatment of already-collected events on withdrawal.]`

## 5. Data sharing and processors

We do not sell your data. The only third parties processing data on our behalf are:

- **PostHog** (product analytics; EU-hosted)
- **Sentry** (crash reporting)
- **Apple** (TestFlight distribution and aggregate store analytics)

`[⚠️ LEGAL REVIEW — DPAs in place with PostHog and Sentry per UK GDPR Art. 28.]`

## 6. International transfers

Analytics data is stored by PostHog in the EU (covered by the UK adequacy decision for the EEA). Crash data may be processed by Sentry in the United States. `[⚠️ LEGAL REVIEW — confirm Sentry hosting region and the transfer mechanism (UK IDTA / Addendum to EU SCCs, or UK–US Data Bridge).]`

## 7. Data retention

- **On-device financial data:** stays on your device until you delete it or uninstall; we hold no copy and set no retention period because we never receive it.
- **Analytics and crash data:** retained by our processors per configured retention, and unlinked from you at each month boundary by the token rotation. `[⚠️ LEGAL REVIEW — set and state explicit retention periods for PostHog and Sentry.]`

## 8. Your rights (UK GDPR)

You have the right to access, rectify, erase, restrict, object to the processing of, and port your personal data, and to withdraw consent at any time without affecting prior processing.

- **Your financial data:** we never hold it, so you exercise these rights **directly in the app** — edit or delete records, or uninstall.
- **Analytics and crash data:** the datasets are pseudonymous and we hold nothing that links them to you as an individual; under UK GDPR Art. 11 we may be unable to identify your records in order to fulfil an access or erasure request, and we will tell you if so. Withdrawal of consent (Section 4) is always available and immediate.
- **Complaints:** you can complain to the UK Information Commissioner's Office (ICO) at [ico.org.uk](https://ico.org.uk), though we'd appreciate the chance to resolve any concern first — contact us at _[EMAIL]_.

## 9. Children

Lysning is a financial app intended for adults. It is **not directed at anyone under 18**, and we do not knowingly collect data from anyone under 18.

## 10. Security

Your on-device data is encrypted at rest (SQLCipher) with a per-installation key stored in your device's secure store. Analytics and crash data travel over encrypted connections. No method of storage or transmission is completely secure, and we cannot guarantee absolute security.

## 11. Changes to this policy

If how data is handled changes materially — in particular if we launch **optional cloud sync/backup** or a paid tier — we will update this policy, revise the "Last updated" date, and, where required, obtain fresh consent before any new processing begins.

## 12. Future features — not active today

- **Cloud sync / backup** (planned for a paid tier): would let you back up or sync your data off-device. **Not available today; no financial data leaves your device.** If launched, this section will describe what is synced, where, the legal basis, retention and transfers, and it will require explicit opt-in.

## 13. Governing law

This policy is governed by the laws of the United Kingdom, including the UK GDPR and the Data Protection Act 2018.
