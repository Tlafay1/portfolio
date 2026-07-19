---
title: Cybersécurité & bug bounty
description: Ma pratique offensive en continu — bug bounty (dont une faille récompensée par le Google VRP), plateformes de CTF et entraînement sur Hack The Box et TryHackMe.
image: /covers/proj-cyber.png
category: personal
featured: true
order: 0
tags:
- pentest
- CTF
- bug bounty
- Google VRP
---

# Cybersécurité & bug bounty

La sécurité offensive n'est pas qu'un métier, c'est une pratique que j'entretiens en dehors du travail. Voici comment je garde mes compétences affûtées.

## Bug bounty — Google VRP · 500 $

J'ai identifié et rapporté une vulnérabilité de type **CSV injection** (aussi appelée *Formula Injection*) dans **Google Sheets**, dans le cadre du Google Vulnerability Reward Program.

Le principe : lorsqu'une donnée contrôlée par l'attaquant commence par un caractère comme `=`, `+`, `-` ou `@`, un tableur peut l'interpréter non pas comme du texte mais comme une **formule** au moment où la victime ouvre ou exporte le fichier. Bien exploitée, cette formule peut déclencher des actions côté client (exfiltration de données via une requête réseau, exécution de commandes selon la configuration du tableur).

Le rapport a été validé et récompensé par Google à hauteur de **500 $**. Au-delà de la prime, cette faille illustre un principe que j'aime rappeler : **une donnée n'est jamais neutre**, et le contexte dans lequel elle est réinterprétée — ici, un tableur — fait partie intégrante de la surface d'attaque.

## Plateformes d'entraînement

- **Hack The Box** — machines et challenges d'exploitation, du web à l'Active Directory.
- **TryHackMe** — parcours thématiques et labs guidés pour explorer de nouvelles techniques.
- **CTF** — participation à des compétitions Capture The Flag, seul et en équipe.

Ces plateformes me permettent de rester au contact des techniques d'attaque récentes et de pratiquer régulièrement, dans un cadre légal et contrôlé.
