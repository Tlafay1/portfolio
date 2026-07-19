---
title: Taskmaster
description: A process manager in Python (supervisor-style) — starting, monitoring and automatically restarting processes driven by a YAML configuration file.
image: /covers/proj-taskmaster.png
category: 42
github: https://github.com/PandeoF1/42-taskmaster
order: 6
tags:
- python
- linux
- system administration
---

# Taskmaster

## Overview

Taskmaster is a process manager. It lets its users control a set of processes on the operating system: start them, monitor them, and automatically restart them when they stop unexpectedly. It's inspired by [Supervisor](https://github.com/Supervisor/supervisor).

## Features

- Start, stop and restart processes
- Continuously monitor process status
- Inspect process logs
- YAML configuration file to define:
    - The processes to manage and the commands to run
    - The location of the logs
    - Start, restart and stop policies
    - Each process's environment variables
- Interactive command-line interface

## What I learned

Taskmaster took me deep into Unix process management: `fork`, `exec`, signals, exit codes, stream redirection. These are the same primitives you keep running into in pentesting — whether to understand a daemon's behaviour, gain persistence, or analyse a suspicious startup mechanism.

[Source code on GitHub](https://github.com/PandeoF1/42-taskmaster) · [Package on PyPI](https://pypi.org/project/42-taskmaster/)
