# ADR 0001 — Static site on GitHub Pages + custom DNS

**Status:** locked (user-stated)

## Context
Marketing/landing site only. No web interface for the app is planned, now or later.
App (Orielle) is not live yet; India-first, free.

## Decision
Ship a **fully static site** to a GitHub repo, served via GitHub Pages, pointed at a custom
domain with DNS records. No backend, no server-side code, no database.

## Consequences
- No server means no email/waitlist form storage without a third party (see ADR 0002).
- Deploys are a git push. Free hosting, HTTPS via GitHub/Fastly.
- DNS: apex `A`/`ALIAS` + `www` `CNAME` to `<user>.github.io`, or Cloudflare in front.
