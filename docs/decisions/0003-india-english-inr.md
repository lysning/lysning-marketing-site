# ADR 0003 — India-first, English-only, ₹/INR copy

**Status:** superseded — the launch market is the **UK**. English-only survives; India-first and
₹/INR do not. Superseding decision recorded in the Amendment below rather than a separate ADR.

## Context (original)
App launches India first, free. Primary persona: salaried savers 20–50 (individuals/couples),
UPI-heavy, goal-driven. (Western markets are a later growth focus per app docs, not this site's v1.)

## Decision (original)
Site copy is **English only**, India-framed: ₹ amounts, Indian goal examples (wedding, house,
emergency fund), UPI-era context. Structure content so i18n is *possible* later but don't build it.

## Consequences (original)
- Currency/examples all INR.
- No language toggle in v1.

---

## Amendment — UK is the launch market

**Status:** locked (user-stated)

India is **not** the launch market. The reference snapshots in `reference/` still describe an
India-validation / UK-revenue sequence; that sequence no longer governs this site, and those
snapshots are stale on this point until re-synced from the app repo.

### Decision
Site copy is **English only**, **UK-framed**:

- **£/GBP** amounts throughout, `1,234.56` grouping, `tabular-nums` (unchanged).
- **UK dates** — `15 July`, never `July 15`. This is a copy rule, not a locale toggle.
- UK goal examples: a deposit on a flat, a wedding, a car, an emergency cushion, a trip.
- **No UPI, no Account Aggregator, no Indian bank or merchant names.** The equivalent
  UK context is open banking — which the app does not use yet (see the Amendment to ADR 0005),
  so it is not a thing to reference in copy either.
- Do **not** name a specific UK bank in copy or in a mockup. Naming one implies an integration
  that does not exist.

### Consequences
- `site-spec.md` rewritten to UK/£ (done).
- `glossary.md` rewritten: persona, currency, and the AA row replaced (done).
- Commit `61ffd12` already switched the shipped copy; residual India references were a
  migration miss and are fixed separately.
- No language toggle in v1 — unchanged.
