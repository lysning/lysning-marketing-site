# ADR 0010 — Site analytics: Umami

**Status:** locked (user-chosen)

## Context
Considered sharing the app's PostHog, but PostHog's free tier allows only **1 project**, so the
site can't get its own project without mixing web + product funnels or paying. The brand ethos
is privacy-first regardless.

## Decision
Use **Umami** for the marketing site. Open-source, **cookieless by default**, no PII, GDPR/DPDP
friendly (no consent banner needed), tiny script (~2KB). Keeps the app's PostHog project clean
and unmixed.

## Consequences
- GitHub Pages is static → Umami needs hosting elsewhere: **Umami Cloud** (free tier, quickest)
  or self-host (Vercel/Fly/Railway + Postgres). Start with Umami Cloud.
- Add the Umami `<script defer data-website-id=…>` snippet in the Astro base layout.
- Consistent "we don't track you" posture: cookieless, aggregate only.


---

## Amendment — the posture is privacy-forward, not "we don't track you"

**Status:** locked (user-chosen, 2026-09-18)

The consequence above read "consistent 'we don't track you' posture". That overstated the
position, and it is withdrawn. Lysning is **privacy-forward, not absolutist**: the people it is
built for are not privacy maximalists, and reaching product-market fit needs usage signals —
site analytics, and open and click tracking on the waitlist (ADR 0012, second amendment).

What holds instead: every signal is disclosed where the person meets it and in the Privacy
Policy, none of it is sold or used for advertising, and a person's privacy choice is always
honoured. Umami stays — cookieless and aggregate is still the right tool for the site — but it
is chosen for being proportionate, not as proof that nothing is measured.
