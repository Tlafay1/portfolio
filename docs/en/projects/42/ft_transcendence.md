---
title: ft_transcendence
description: A full web application built around a real-time Pong game — SPA, backend, authentication and real-time communication, with security considered by design.
image: /covers/proj-transcendence.png
category: 42
order: 5
tags:
- typescript
- react
- backend
- frontend
- websocket
---

# ft_transcendence

## Overview

ft_transcendence is the capstone of 42's common core: a full web application built around a real-time multiplayer game of **Pong**. It's a team project covering the whole chain, from frontend to backend, database and deployment.

## Features

- **Real-time game** — online Pong matches synchronised over WebSocket.
- **User accounts** — sign-up, authentication, profiles and a friends system.
- **Chat** — real-time messaging between players.
- **Single Page Application** — a smooth interface with no page reloads.

## The security angle

This project is a great illustration of my approach: building with attacks in mind. On an application like this, the points of vigilance are many — session and token management, systematic server-side input validation, protection against XSS and CSRF, access control on every route. Having practised pentesting changes how you write each endpoint: you no longer trust the client by default.
