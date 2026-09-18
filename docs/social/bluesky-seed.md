# Bluesky seed — drafts

Strategy lives in the app repo's `docs/gtm.md` (Owned surfaces → Bluesky). This file holds the
copy. Bluesky caps a post at 300 characters; every draft below fits in one post.

## Voice
- One decision per post: what the usual approach does → what Lysning does → why. The why is last
  and is one sentence.
- Concrete amounts, in pounds. No adjectives doing the arguing. No emoji, exclamation marks or
  thread-bait.
- Say the limitation in the same breath as the claim.
- Build logs name the failure before the fix, and don't moralise about it.
- Amounts come from a £50k life: ~£3,300/month take-home, London flatshare or a 1-bed
  elsewhere, a holiday saved for over months. Nothing a median earner would find outlandish.
- Never: launch dates, bank-sync promises, competitors by name, "AI".
- Support (after launch): what happened → what I'm doing → when I'll know more. Never defend.

## Profile
- **Display name:** Krishna Babuji
- **Handle:** @lysning.app
- **Avatar:** my face. **Banner:** Home screen, safe-to-spend figure.
- **Bio:**

```
Hi, I'm Krishna. I'm building Lysning — a budgeting app that tells you what's actually safe to spend today. Runs on your phone, no account, no bank login.

UK beta waitlist: lysning.app/?utm_source=bluesky
```

Attribution: Umami, event `waitlist-submit` filtered by `utm_source = bluesky`. Counts submits,
not confirmations — cross-check against Buttondown's confirmed count for the same weeks.
Never pass the source to Buttondown: the Privacy Policy says it receives the email and nothing else.

## Pinned

```
I'm building Lysning: a budgeting app that shows one number — what's actually safe to spend today, after bills, goals, refunds and transfers between your own accounts.

Your money data stays on your phone. No account.

What it doesn't do: connect to your bank. You import a statement.
```

## Posts — in this order, at most two a week

### 1 · What safe to spend means (argument)
```
Your bank balance says £1,200. It doesn't know rent leaves on the 1st, or that £300 of it is meant for a holiday.

Lysning shows what's left after both: what's actually safe to spend.

A number you have to correct in your head isn't the answer. It's the start of a sum.
```

### 2 · The input bug (build log)
```
Found a bug: typing £10,000 into an amount field could save £1,000. No error.

The field reformatted "10000" as "10,000" while I was still typing, and a key pressed during the rewrite was lost. On a real phone, about one entry in three.

The worst bug in a money app is the one that looks right.
```

### 3 · Goals hold real money (argument)
```
Most budgeting apps treat a savings goal as a wish list. You name a number, the app draws a progress bar.

In Lysning, setting £400 aside for a holiday takes £400 out of what you can spend, straight away.

A holiday with no money behind it is a saved reel.
```

### 4 · Refunds and transfers (argument)
```
Moving £200 to savings isn't spending £200. A £40 refund isn't £40 of income.

Count them that way and your month shows spending and income that never happened. Every forecast built on it is off by as much.

So Lysning pairs each transfer with its other half, each refund with what it undoes.
```

### 5 · Reconciliation never guesses (build log)
```
When a bill is due, Lysning looks for the real payment: same account, close amount, near the date. It never matches on the description.

If two charges fit, it doesn't pick one. It waits for you.

A wrong match is worse than no match. Once it's usually right, you stop checking.
```

### 6 · The example household (argument)
```
You can open Lysning and look around a complete example household — bills, goals, a month of spending — without typing a single number of your own.

When you're done, one button clears it and you start fresh.

Asking for your finances before showing you anything is a demand, not a welcome.
```

### 7 · Backups before migrations (build log)
```
Every time Lysning updates its database, it copies the old one first. If the update fails, it puts the copy back.

Your money data lives only on your phone. There's no copy of it on a server for me to restore.

Keeping your data off a server means there's no server to save it.
```

### 8 · Moving the clock (build log)
```
In test builds I can move Lysning's clock forward. Bills come due, payday funds goals, the month rolls over — in an afternoon.

The hard part: anything saved while it's moved must be dated by the moved clock too.

An app that disagrees with itself about the date can't be trusted about money.
```

### 9 · Screenshot + caption (texture)
Screen: new-goal form with the capacity line showing, before a target is typed.
```
Setting up a goal. The line under the form says how much you have left to commit each month — before you've typed a target.

Go over it and it tells you. It doesn't stop you.
```

## Replies — ~20 min a week, at least 3 per post
- Reply where there's something specific to add: how refunds or rollovers work, a statement
  import that went wrong, local-first trade-offs. Not "great point".
- Never bring up Lysning. The bio does that.
- If it comes up, disclose in the same reply:
  `(I'm building a budgeting app, so weigh this accordingly.)` — then the answer, no link unless asked.
- On your own posts, answer everyone, sceptics first and plainly. A well-handled objection is
  worth more than the post.
