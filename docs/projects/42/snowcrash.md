---
title: Snowcrash
description: CTF d'exploitation Linux — chaîne de vulnérabilités (scripts SUID, cron, race conditions, format strings) exploitées pour l'élévation de privilèges de niveau en niveau.
image: /covers/proj-snowcrash.png
category: 42
order: 2
tags:
- exploitation de binaires
- reverse engineering
- élévation de privilèges
- pentest
- linux
---

# Snowcrash

## Description

Snowcrash est un projet de type CTF d'exploitation, dans la continuité de Rainfall. À chaque niveau, on incarne un utilisateur aux privilèges limités et l'on doit exploiter une faille pour accéder au niveau suivant. La diversité des vulnérabilités est ce qui fait la richesse du projet.

## Types de failles rencontrées

- **Scripts et binaires SUID mal écrits** — appels à des commandes sans chemin absolu, variables d'environnement non maîtrisées, permissions trop larges.
- **Tâches planifiées (cron)** — scripts exécutés périodiquement avec des privilèges élevés et manipulables par un utilisateur non privilégié.
- **Race conditions** — fenêtres temporelles exploitables entre la vérification et l'utilisation d'une ressource (TOCTOU).
- **Format strings** — lecture et écriture arbitraire en mémoire via des chaînes de format mal contrôlées.

## Ce que j'ai appris

Snowcrash affine le réflexe le plus important en pentest : **comprendre le contexte d'exécution d'un programme avant de chercher à le casser**. Qui l'exécute, avec quels droits, en s'appuyant sur quelles ressources externes ? La plupart des chemins d'élévation de privilèges naissent d'une réponse imprudente à l'une de ces questions.
