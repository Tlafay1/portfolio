---
title: Taskmaster
tags:
- python
- linux
---

# Taskmaster

## Description

![Taskmaster](/assets/taskmaster.png)

Taskmaster is a task manager project.
It allows its users to control a number of processes on operating systems.

Inspired by [Supervisor](https://github.com/Supervisor/supervisor)

## Features

- Start, stop, and restart processes
- Check the status of processes
- Check the logs of processes
- Configuration file in YAML allowing to define:
    - The processes to manage
    - The commands to execute
    - The location of the logs
    - The startup options
    - The restart options
    - The stop options
    - The environment variables of the process
- Command-line user interface

## More information

[Github project](https://github.com/PandeoF1/42-taskmaster)

[Pypi package](https://pypi.org/project/42-taskmaster/)


Tags: {{ $frontmatter.tags.join(', ') }}