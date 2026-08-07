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
