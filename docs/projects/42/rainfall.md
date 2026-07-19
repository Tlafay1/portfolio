---
title: Rainfall
description: Exploitation d'une série de binaires SUID vulnérables sous Linux — reverse engineering, buffer overflows et détournement de flux d'exécution pour l'élévation de privilèges.
image: /covers/proj-rainfall.png
category: 42
github: https://github.com/Tlafay1/Rainfall
order: 1
tags:
- pentest
- exploitation de binaires
- élévation de privilèges
- reverse engineering
- linux
---

# Rainfall

## Description

Rainfall est un projet d'exploitation de binaires. On dispose d'une machine sur laquelle une série de programmes SUID vulnérables sont installés, chacun appartenant à un utilisateur différent. L'objectif : exploiter chaque binaire pour lire un mot de passe et progresser de niveau en niveau, jusqu'à obtenir les privilèges les plus élevés.

## La démarche

Chaque niveau se résout en trois temps :

1. **Reverse engineering** — analyse du binaire avec `gdb`, `objdump` et `ltrace`/`strace` pour comprendre son fonctionnement et repérer la faille (débordement de tampon, format string, appel système dangereux…).
2. **Construction de l'exploit** — élaboration d'une charge utile qui détourne le flux d'exécution : écrasement d'adresse de retour, injection de shellcode, ret2libc selon les protections en place.
3. **Élévation de privilèges** — exécution de l'exploit pour obtenir un shell avec les droits de l'utilisateur propriétaire du binaire, puis récupération du mot de passe du niveau suivant.

## Ce que j'ai appris

Rainfall m'a donné une compréhension concrète de la mémoire d'un processus : la pile, le tas, les registres, et la façon dont une simple erreur de gestion de tampon devient une prise de contrôle complète. C'est cette compréhension bas niveau qui permet, côté défensif, de savoir pourquoi une protection comme l'ASLR, la NX-bit ou les stack canaries existe — et comment on la contourne.

[Code source sur GitHub](https://github.com/Tlafay1/Rainfall)
