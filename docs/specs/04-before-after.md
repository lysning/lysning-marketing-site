# Spec 04 — Show the date moving, don't describe it

**Status:** approved 2026-10-26 (option 1 of 3).
**Scope:** one paragraph cut from `Calendar.astro`. No figure change, no JS.

## Why
Reviewer 1: "Your flagship mechanic — drag the contribution, watch the date move — is shown only as
a static typographic table … a tiny inline interactive widget would convert far better than the
third paragraph explaining it." And: "show it, don't describe it."

The problem named was describing, not missing information. The landing page's job is to make
people curious, not to teach the mechanism.

**What we got wrong first:** the earlier draft of this spec added annotations to the figure (a
"why" line, a struck-through old date, "9 months sooner"). That answered "too much describing"
with more description. Dropped. The reviewer's "static gets 80%" answer was also led by our
question and given from a text scrape; it isn't evidence for annotating.

## Change — Calendar copy
Delete para 2:
> Put £200 more a month behind the deposit and you watch it move from February 2030 to May 2029 —
> before you commit to anything. Take a month off and you see where it lands instead. The
> trade-off is in front of you while you can still make it.

It narrates the figure beside it. The figure shows the same move, and its footer already says
"Nothing is committed until you choose." Remove the `.lead + .lead` rule it leaves unused.

The section is then: eyebrow, heading ("…Change what you save, and the dates move."), one
sentence, and the figure.

## Not changing
The figure, as live. The heading.

## Parked — interactive widget (separate spec, later)
One control (£1,100–£1,500 in £100 steps) moving the deposit date, every step's date precomputed
from the app's arithmetic. Where it goes, if anywhere, depends on waitlist conversion: weak →
landing page; healthy → a "How it works" page, or nowhere. Needs an ADR 0011 note (user-driven
state change, not decorative motion).

## Done when
1. `npm run build` passes.
2. Calendar copy is the heading plus one sentence; figure unchanged from main.
3. Screenshots desktop 1440 + 500 reviewed by you.
