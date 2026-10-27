---
title: 'FAQ'
description: 'How Lysning plans forward, what it does not do, and what happens to your data.'
kicker: 'Help'
draft: false
---

## Getting started

### Is this a budgeting app?

People usually find us searching for one, so: yes, in the sense that it helps you plan what your money does. No, in the sense you're probably picturing.

Most budgeting apps are retrospective. You categorise what you already spent, and at the end of the month you get a report about it. The report is accurate and it is also too late — every decision it describes has already been made.

Lysning runs the other way round. It works out what you can genuinely save each month, and turns that into a date for each thing you're saving for: the month the deposit is there, the month the trip is affordable. Then it shows you what moves those dates. There's no scoring, nothing turns red, and there's no month-end verdict on how you did.

### Does it connect to my bank?

**No.** You add transactions yourself, or import a spreadsheet export from your bank.

That's more work than tapping "connect", and it's a fair reason to decide this isn't for you. It's also the reason nothing about your money ever leaves your phone — there's no connection to a bank, so there's no copy of your financial life sitting on anyone's server.

Bank sync may come later as a paid option. It isn't here now, and nothing on this site should be read as implying it is.

### What do I have to do to keep it working?

Add transactions as you go, or import a spreadsheet from your bank every so often. The real effort is once a month, around payday, and takes a few minutes.

There's no daily check-in and nothing to keep up. The quiet stretches between paydays are the system working normally.

### What if I lose my phone?

The data is gone. There's no cloud copy to restore from — that's the trade for there being no server. Take encrypted backups; export is built in for exactly this reason.

### What does it cost?

Nothing. There's no payment path in the app at all. A paid tier is likely later for things that genuinely need a server — bank sync, sharing with a partner, cloud backup. What's here now stays free.

### Is there an Android version?

Yes, it's coming soon. The beta is on iPhone first; Android follows.

## Safe to Spend

### What is Safe to Spend?

It's one number that answers one question: **can I afford this today?**

Your bank balance can't answer that, because it doesn't know what's coming. Rent is due Friday. That £40 you sent your flatmate for the electricity bill is still sitting in your balance like it's yours. The refund from the jacket you returned hasn't landed yet. So the balance says one thing and reality says another.

Safe to Spend takes your balance, sets aside the money that's already promised to something, and shows you what's genuinely left. If it says £180, you can spend £180 today without anything breaking later.

### How is Safe to Spend calculated?

Start with the money actually in your accounts. Then take away everything that isn't really available:

- **Bills due before your next payday** — rent, phone, subscriptions. Not paid yet, but as good as spent.
- **Money you've set aside for goals** — see [Goals and set-asides](#goals-and-set-asides) below.
- **What's left for everyday spending** — the part of your monthly amount for groceries, fuel and eating out that you haven't spent yet.
- **Card payments due** before your next payday.
- **Money that only looks like yours** — a transfer you made between your own two accounts shouldn't count twice, and a refund on its way back shouldn't count until it lands.

What's left over is Safe to Spend.

A rough example. You have £900 in your current account, and £120 of it is set aside for a holiday. Rent of £600 comes out next week, and you've £60 of your everyday spending left for groceries before payday. Your balance says £900. Safe to Spend says £120 — and £120 is the number you can actually make decisions with.

[//]: # (Rows mirror the app's Safe to Spend breakdown, lysning-app src/utils/stsReceipt.ts. No goals line: set-aside money is netted inside Available now, as in the app. docs/specs/07-faq.md)
<figure class="ledger surface-data" aria-label="Worked example: how £900 becomes £120 safe to spend">
  <dl>
    <div><dt>Available now<span>£900 balance − £120 set aside</span></dt><dd>£780</dd></div>
    <div><dt>Bills due before payday<span>Rent</span></dt><dd>−£600</dd></div>
    <div><dt>Everyday spending: unspent<span>Groceries, until payday</span></dt><dd>−£60</dd></div>
    <div class="total"><dt>Safe to Spend</dt><dd>£120</dd></div>
  </dl>
</figure>

### What period does the number cover?

Until your money next tops up — normally your next payday, or the start of the month if that comes first.

That's the stretch the number has to carry you through, so it counts every bill due before then. Once payday lands, the slate resets and the number is calculated again for the new stretch. It's not a monthly allowance, and nothing is holding you to it — it's just "here's what's spare between now and the next time you get paid."

### How accurate is the number, really?

It's as accurate as the information it has. Lysning isn't guessing or predicting your behaviour — it's doing arithmetic on the balances, bills and goals you've given it. If a bill is missing, the number will be too high. If you add it, the number corrects itself.

Two things it deliberately doesn't do: it won't judge what you spend, and it won't stop you spending. It just keeps telling you where you actually stand, so a surprise at the end of the month is less likely to be a surprise.

## Goals and set-asides

### How are goals funded?

You move real money into a goal from your real accounts — nothing leaves your bank, it just gets tagged. Lysning keeps a running ledger of what you've put toward each goal, so it always knows how much of your balance is already promised.

### How do set-asides work?

Set money aside for a goal and Lysning subtracts it from what counts as spendable. Available money is your balance minus everything you've set aside — the same pound never gets counted toward a goal and toward today's spending at once.

### What happens if I accidentally spend set-aside money?

It can happen. Lysning never holds your money, so nothing stops you from spending it — the app finds out the same way you do, after the fact. When it does, two options: push the goal out, or spend less between now and payday to close the gap. Lysning won't fix it for you. It'll just keep telling you the truth so you can decide.

## Your money and your data

### Does Lysning hold or move my money?

No. It stays in your own bank accounts the whole time. Lysning only keeps track of what's set aside — it never takes custody, moves funds, or invests for you.

### Is my data private? Does it ever leave my phone?

Everything runs on your device — no account, no server for your financial data, nothing to breach. Transactions, balances, goals and settings are stored only on your phone, in a database encrypted at rest.

The only things that can ever leave are **usage analytics and crash reports**, both off until you turn them on, and a **check for app updates** each time the app opens. None of them contains any financial data, your name or your email.

Analytics events are pseudonymous rather than anonymous: each carries a token that is destroyed and regenerated every calendar month, so nothing links what you did in one month to the next.

You can withdraw consent at any time in **Settings → Privacy**, and collection stops immediately.

The full detail is in our [Privacy Policy](/privacy).
