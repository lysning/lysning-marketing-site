# ADR 0009 — Domain: lysning.app

**Status:** locked (registered by user)

## Decision
Domain **lysning.app** — registered. Modern app-signal; `.app` is on the HSTS preload list so
HTTPS is forced (good trust signal, matches ethos).

## Dependency
- DNS (ADR 0001): apex `A`/`ALIAS` + `www` `CNAME` → `<user>.github.io`, or
  Cloudflare proxy. Add the domain in GitHub Pages settings + `CNAME` file in the repo.
