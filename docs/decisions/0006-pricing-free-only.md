# ADR 0006 — Show "free" only; no premium/pricing section

**Status:** amended — see the Amendment: one line on how Lysning makes money.

## Context
India launch is free (the fully on-device freemium tier). Premium (AA sync, household, cloud
backup, LLM) is roadmap — not built, not priced. India-vs-Western pricing is TBD in app docs.

## Decision
Site says Lysning is **free** for the India launch. **No premium mention, no pricing table.**

## Consequences
- Avoids promising unbuilt/unpriced features.
- "Free" framed as the generous on-device tier (a trust signal), not a crippled trial.
- Revisit if premium ships before the site's next iteration.

---

## Amendment — one line on how Lysning makes money (2026-10-25)

**Status:** locked (user-approved)

A reviewer read "Free · no account" next to "we will never sell your data… it's the business
model" as a contradiction, and "free with no revenue plan" as a longevity risk. The FAQ already
says a paid tier is likely later; the home page did not.

### Decision
The Privacy section carries **one line**, answering only "what's in it for you?":

> Lysning is free. Later, bank sync will be an optional paid upgrade — that's how we make money.
> No ads, and we'll never sell your data.

Still **no price, no tier list, no pricing section.** Bank sync is named because it is the
premium feature that needs a server (app `roadmap.md`), so naming it promises nothing the free,
on-device tier could have offered.
