---
title: ft_transcendence
description: Application web complète autour d'un jeu de Pong en temps réel — SPA, backend, authentification et communication temps réel, avec la sécurité pensée dès la conception.
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

## Description

ft_transcendence est le projet final du tronc commun de 42 : une application web complète construite autour d'un jeu de **Pong** multijoueur en temps réel. C'est un projet d'équipe qui couvre toute la chaîne, du frontend au backend en passant par la base de données et le déploiement.

## Fonctionnalités

- **Jeu en temps réel** — parties de Pong jouables en ligne, synchronisées via WebSocket.
- **Comptes utilisateurs** — inscription, authentification, profils et système d'amis.
- **Chat** — messagerie en temps réel entre joueurs.
- **Single Page Application** — interface fluide sans rechargement de page.

## L'angle sécurité

Ce projet est une excellente illustration de mon approche : construire en ayant les attaques en tête. Sur une application de ce type, les points de vigilance sont nombreux — gestion des sessions et des jetons d'authentification, validation systématique des entrées côté serveur, protection contre XSS et CSRF, contrôle d'accès sur chaque route. Avoir pratiqué le pentest change la façon dont on écrit chaque endpoint : on ne fait plus confiance au client par défaut.
