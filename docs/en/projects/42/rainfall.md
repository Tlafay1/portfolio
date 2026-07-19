---
title: Rainfall
description: Exploiting a series of vulnerable SUID binaries on Linux — reverse engineering, buffer overflows and control-flow hijacking for privilege escalation.
image: /covers/proj-rainfall.png
category: 42
github: https://github.com/Tlafay1/Rainfall
order: 1
tags:
- pentest
- binary exploitation
- privilege escalation
- reverse engineering
- linux
---

# Rainfall

## Overview

Rainfall is a binary exploitation project. You get a machine with a series of vulnerable SUID programs installed, each owned by a different user. The goal: exploit each binary to read a password and climb level after level, up to the highest privileges.

## The approach

Each level is solved in three steps:

1. **Reverse engineering** — analysing the binary with `gdb`, `objdump` and `ltrace`/`strace` to understand how it works and spot the flaw (buffer overflow, format string, dangerous system call…).
2. **Building the exploit** — crafting a payload that hijacks the control flow: overwriting the return address, injecting shellcode, ret2libc depending on the protections in place.
3. **Privilege escalation** — running the exploit to get a shell with the privileges of the binary's owner, then recovering the next level's password.

## What I learned

Rainfall gave me a concrete grasp of a process's memory: the stack, the heap, the registers, and how a simple buffer-handling mistake becomes a full takeover. That low-level understanding is exactly what lets you know, on the defensive side, why a protection like ASLR, the NX bit or stack canaries exists — and how it gets bypassed.

[Source code on GitHub](https://github.com/Tlafay1/Rainfall)
