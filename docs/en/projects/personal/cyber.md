---
title: Cybersecurity & bug bounty
description: My ongoing offensive practice — bug bounty (including a flaw rewarded by the Google VRP), CTF platforms and training on Hack The Box and TryHackMe.
image: /covers/proj-cyber-en.png
category: personal
featured: true
order: 0
tags:
- pentest
- CTF
- bug bounty
- Google VRP
---

# Cybersecurity & bug bounty

Offensive security isn't just a job, it's a practice I keep up outside of work. Here's how I keep my skills sharp.

## Bug bounty — Google VRP · $500

I identified and reported a **CSV injection** vulnerability (also known as *Formula Injection*) in **Google Sheets**, as part of the Google Vulnerability Reward Program.

The idea: when attacker-controlled data starts with a character like `=`, `+`, `-` or `@`, a spreadsheet may interpret it not as text but as a **formula** when the victim opens or exports the file. Well exploited, that formula can trigger client-side actions (data exfiltration via a network request, command execution depending on the spreadsheet's configuration).

The report was validated and rewarded by Google with **$500**. Beyond the bounty, this flaw illustrates a principle I like to repeat: **data is never neutral**, and the context in which it is reinterpreted — here, a spreadsheet — is part of the attack surface.

## Training platforms

- **Hack The Box** — exploitation machines and challenges, from web to Active Directory.
- **TryHackMe** — themed paths and guided labs to explore new techniques.
- **CTF** — taking part in Capture The Flag competitions, solo and as a team.

These platforms keep me in touch with recent attack techniques and let me practise regularly, in a legal and controlled setting.
