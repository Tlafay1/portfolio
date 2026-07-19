---
title: ft_nm
description: A C reimplementation of the Unix nm utility — full parsing of the ELF binary format to list an object's symbols, just like the real command.
image: /covers/proj-ftnm.png
category: 42
order: 4
tags:
- linux
- ELF
- C
- reverse engineering
---

# ft_nm

## Overview

ft_nm is a C reimplementation of the Unix `nm` command, which lists the symbols contained in an object file, a library or an executable. Reproducing its behaviour means parsing the **ELF** (Executable and Linkable Format) binary format by hand.

## What it involves

- **Reading the ELF header** — identifying the architecture (32/64-bit), the byte order (endianness) and where the tables live.
- **Walking the sections and segments** — locating the symbol table (`.symtab`) and string table (`.strtab`).
- **Classifying symbols** — reproducing `nm`'s exact type letters (T, t, D, U, W…) based on each symbol's section, binding and visibility.
- **Handling malformed files robustly** — a truncated or corrupted binary must never cause a crash.

## What I learned

Working with the ELF format directly means understanding how an executable is really structured once compiled. It's an essential foundation for reverse engineering and malware analysis: before disassembling a binary, you have to be able to read its skeleton.
