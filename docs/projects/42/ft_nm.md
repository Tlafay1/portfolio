---
title: ft_nm
description: Réimplémentation en C de l'utilitaire Unix nm — parsing complet du format binaire ELF pour lister les symboles d'un objet, comme le fait la vraie commande.
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

## Description

ft_nm est une réimplémentation en C de la commande Unix `nm`, qui liste les symboles contenus dans un fichier objet, une bibliothèque ou un exécutable. Reproduire son comportement impose de parser à la main le format binaire **ELF** (Executable and Linkable Format).

## Ce que ça implique

- **Lecture de l'en-tête ELF** — identification de l'architecture (32/64 bits), de l'ordre des octets (endianness) et de la localisation des tables.
- **Parcours des sections et des segments** — repérage des tables de symboles (`.symtab`) et de chaînes (`.strtab`).
- **Classification des symboles** — reproduction exacte des lettres de type de `nm` (T, t, D, U, W…) selon la section, la liaison et la visibilité de chaque symbole.
- **Gestion robuste des fichiers malformés** — un binaire tronqué ou corrompu ne doit jamais provoquer de crash.

## Ce que j'ai appris

Manipuler le format ELF directement, c'est comprendre comment un exécutable est réellement structuré une fois compilé. C'est un socle indispensable pour le reverse engineering et l'analyse de malware : avant de désassembler un binaire, il faut savoir lire son squelette.
