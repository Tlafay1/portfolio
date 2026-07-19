---
title: Snowcrash
description: A Linux exploitation CTF — a chain of vulnerabilities (SUID scripts, cron jobs, race conditions, format strings) exploited for privilege escalation, level after level.
image: /covers/proj-snowcrash.png
category: 42
order: 2
tags:
- binary exploitation
- reverse engineering
- privilege escalation
- pentest
- linux
---

# Snowcrash

## Overview

Snowcrash is an exploitation CTF, following on from Rainfall. At each level you play a user with limited privileges and must exploit a flaw to reach the next one. The variety of vulnerabilities is what makes the project so rich.

## Types of flaws encountered

- **Badly written SUID scripts and binaries** — calls to commands without absolute paths, uncontrolled environment variables, overly broad permissions.
- **Scheduled tasks (cron)** — scripts run periodically with elevated privileges and manipulable by an unprivileged user.
- **Race conditions** — exploitable time windows between the check and the use of a resource (TOCTOU).
- **Format strings** — arbitrary memory read and write through poorly controlled format strings.

## What I learned

Snowcrash sharpens the single most important reflex in pentesting: **understanding a program's execution context before trying to break it**. Who runs it, with what rights, relying on which external resources? Most privilege-escalation paths grow out of a careless answer to one of those questions.
