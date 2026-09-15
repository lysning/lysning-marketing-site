# Decision log (ADRs)

Lightweight ADRs for the Lysning marketing site. One file per decision.
Status: `locked` (confirmed) · `proposed` (my recommendation, awaiting your ✔) · `open` ·
`amended` (original decision stands in part; see the file's Amendment section) ·
`superseded` (replaced — the file says by what).

| # | Decision | Status |
|---|---|---|
| 0001 | Static site, GitHub Pages + custom DNS, no backend | locked |
| 0002 | Purpose = explain + build trust; no conversion form | superseded by 0012 |
| 0003 | ~~India-first~~, English-only, ~~INR/₹~~ copy | **superseded** — UK launch market, £/GBP |
| 0004 | Hero framing | **open** — reopened; candidate C withdrawn |
| 0005 | Section list / scope freeze | **amended** — FAQ restored; calendar leads |
| 0006 | Show "free" only; no pricing | locked |
| 0007 | App visuals = real screenshots | locked |
| 0008 | Static build with Astro | locked |
| 0009 | Domain = lysning.app (registered) | locked |
| 0010 | Analytics = Umami (cookieless) | locked |
| 0012 | Beta launch waitlist (supersedes 0002) | locked |

> **Filename note:** `0010-analytics-posthog.md` is named after the option that was *rejected*.
> The decision is Umami. Rename on the next tidy-up.

## Open questions

- **ADR 0004 — the hero line.** Three planning-led candidates, none chosen.
- **Hero visual.** If the affordability calendar is the wedge, the hero mock showing a
  Safe-to-Spend number works against the headline. Decide with the line.
- **Waitlist provider** (`PUBLIC_WAITLIST_ENDPOINT`). Nothing renders until it is set, so this
  one decision currently gates the page having any call to action at all. The Privacy Policy
  must name the processor before it goes live (ADR 0012).
- **Contact address.** Footer ships `hello@lysning.app`; the launch brief specifies
  `support@lysning.app`. Pick one, and make sure it receives mail before App Review.
- **Socials.** The footer links Bluesky, Instagram, Reddit and X. The launch brief says Bluesky
  and Reddit only, a personal Reddit profile rather than an empty subreddit, and no X or
  Instagram until there is a posting cadence to justify them.
- **Entity name.** Footer says "© Lysning" with no legal entity, which is the honest interim
  while incorporation is pending.
