---
title: Boot2Root
tags:
- pentest
- CTF
- élévation de privilèges
- linux
---

# Boot2Root

## Description

Boot2Root est un projet de type *Capture The Flag* (CTF) que j'ai fait en groupe de 3. Le concept ? On nous donne une machine virtuelle vulnérable, et notre seul objectif est d'en devenir l'utilisateur `root` par au moins 2 voies différentes. Aucune aide, aucune indication, même pas une IP: on est lâchés dans la nature.

## La démarche :ninja:

### Étape 1 : La reconnaissance

Tout commence par une bonne vieille reconnaissance. Un scan `nmap` pour voir quels ports sont ouverts, suivi d'une énumération des services qui tournent dessus. C'est un peu comme faire le tour d'un château pour repérer les fenêtres mal fermées et les murs un peu friables. La patience est la mère de toutes les trouvailles.

### Étape 2 : Le premier pied dedans

Une fois une porte d'entrée identifiée (souvent une vulnérabilité sur un service exposé), l'objectif est d'obtenir un premier shell sur la machine. C'est le moment où l'on passe du statut de simple curieux à celui d'intrus. Le fameux moment *"I'm in."*

### Étape 3 : L'escalade, longue et douloureuse

C'est là que le vrai défi a commencé. Ce projet m'a confronté à un chemin d'escalade de privilèges particulièrement retors et m'a bien fait transpirer.

Entre **un dossier aux permissions diaboliquement piégées** qui semblait être une fausse piste (mais ne l'était pas !) et une série de manipulations pour monter en grade, la persévérance était la seule option. Chaque nouvelle information était une victoire, chaque échec une leçon. C'était long, frustrant, mais le sentiment d'assembler les pièces du puzzle une par une est incroyablement gratifiant.

## Ce que j'ai appris :brain:

Au-delà des compétences techniques (énumération, exploitation, escalade de privilèges), Boot2Root m'a surtout enseigné **la méthodologie et la patience**. On apprend à être rigoureux, à ne laisser aucune pierre non retournée, et surtout, à ne jamais abandonner face à un problème qui semble insoluble.

Et puis, soyons honnêtes, rien ne vaut la satisfaction de voir apparaître le prompt `#` après des heures de travail acharné.

---

Tags: {{ $frontmatter.tags.join(', ') }}