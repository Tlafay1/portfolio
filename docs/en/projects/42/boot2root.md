---
title: Boot2Root
description: A 3-person CTF — fully compromising a vulnerable VM up to root through at least two distinct paths, with no starting hint at all.
image: /covers/proj-boot2root.png
category: 42
featured: true
order: 0
tags:
- pentest
- CTF
- privilege escalation
- linux
---

# Boot2Root

## Overview

Boot2Root is a *Capture The Flag* (CTF) project done in a team of 3. The concept: we're given a vulnerable virtual machine, and our only goal is to become `root` through at least two different paths. No help, no hint, not even an IP — we're dropped in the wild.

## The approach

### Step 1 — Reconnaissance

It all starts with good old reconnaissance. An `nmap` scan to see which ports are open, followed by enumeration of the services running on them. It's a bit like walking around a castle to spot the poorly closed windows and the crumbling walls. Patience is the mother of every find.

### Step 2 — The first foothold

Once an entry point is identified (often a vulnerability on an exposed service), the goal is to get a first shell on the machine. That's the moment you go from mere onlooker to intruder. The famous *"I'm in."*

### Step 3 — The long, painful escalation

This is where the real challenge began. The project confronted me with a particularly tricky privilege-escalation path that made me sweat.

Between **a folder with diabolically booby-trapped permissions** that looked like a false lead (but wasn't!) and a series of manoeuvres to climb the ladder, persistence was the only option. Every new piece of information was a win, every failure a lesson. It was long and frustrating, but the feeling of assembling the puzzle piece by piece is incredibly rewarding.

## What I learned

Beyond the technical skills (enumeration, exploitation, privilege escalation), Boot2Root above all taught me **methodology and patience**. You learn to be rigorous, to leave no stone unturned, and above all never to give up on a problem that seems unsolvable.

And let's be honest, nothing beats the satisfaction of seeing the `#` prompt appear after hours of hard work.
