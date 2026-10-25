# Spec 05 — Who's behind it (no name)

**Status:** approved 2026-10-25 — (a) "independent", (b) no place (it's made in India; naming it
would raise doubts on a UK-facing page), (c) keep. Shipped line: "An independent app. Questions
reach a person: hello@lysning.app".
**Scope:** one line of copy in the footer. No About page, no photo, no founder story.

## Why
Reviewer 1: "No company name, no About page, no contact, no mention of who's behind it. For a
finance-adjacent app asking for this much trust, that's a gap." Contact already exists
(hello@lysning.app in the footer — the scraper missed it). What's missing is any sense that a
real, accountable maker exists.

## Constraints
- **No name on the site's marketing pages** (user, 2026-10-25).
- The legal pages already name the operator — "developed and operated by Krishna Babuji, a sole
  trader" (Privacy §1, Terms §1). That's a legal requirement and stays. This spec doesn't change
  it, and the footer line must not contradict it (e.g. no "we're a team").
- Android at GA moves to a company account (app `docs/release-beta.md`), so the controller will
  change then. The line should survive that: say *independent*, not *sole trader*.

## Change — footer brand block (`Footer.astro`)
Now:
> Lysning
> Free · coming soon in the UK.

New:
> Lysning
> Free · coming soon in the UK.
> An independent app. Questions reach a person: hello@lysning.app

Footer is site-wide, so the line shows on every page, including next to the legal pages that
carry the name.

**VERIFY (a) "independent":** "An independent app" — or say it plainly, "Made by one person"?
"One person" is more human and more honest about scale; it also invites "will it last?", which
the premium line (spec 01) now partly answers. Default: *independent*.

**VERIFY (b) "made in the UK":** true? The legal pages set England and Wales law, but that
doesn't prove where it's made. If not true, drop the place: "An independent app."

**VERIFY (c) "Questions reach a person":** the email is already a footer link. This repeats it as
a promise rather than a link label. Keep, or let the existing link do the job and stop at the
first sentence?

## Not changing
- The legal pages.
- The footer's links (FAQ, email, Bluesky, Privacy, Terms).

## Done when
1. `npm run build` passes.
2. The line appears in the footer on the home page, FAQ and a legal page.
3. Screenshots (desktop 1440 + narrow 500) of the footer reviewed by you.
