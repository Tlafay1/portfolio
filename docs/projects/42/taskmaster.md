---
title: Taskmaster
description: Gestionnaire de processus en Python (type superviseur) — démarrage, surveillance et redémarrage automatique de processus pilotés par un fichier de configuration YAML.
image: /covers/proj-taskmaster.png
category: 42
github: https://github.com/PandeoF1/42-taskmaster
order: 6
tags:
- python
- linux
- administration système
---

# Taskmaster

## Description

Taskmaster est un gestionnaire de processus. Il permet à ses utilisateurs de contrôler un ensemble de processus sur le système d'exploitation : les démarrer, les surveiller, les redémarrer automatiquement en cas d'arrêt inattendu. Il est inspiré de [Supervisor](https://github.com/Supervisor/supervisor).

## Fonctionnalités

- Démarrer, arrêter et redémarrer des processus
- Surveiller l'état des processus en continu
- Consulter les logs des processus
- Fichier de configuration en YAML permettant de définir :
    - Les processus à gérer et les commandes à exécuter
    - La localisation des logs
    - Les politiques de démarrage, de redémarrage et d'arrêt
    - Les variables d'environnement de chaque processus
- Interface en ligne de commande interactive

## Ce que j'ai appris

Taskmaster m'a fait plonger dans la gestion des processus sous Unix : `fork`, `exec`, signaux, codes de sortie, redirection des flux. Ce sont les mêmes primitives que l'on retrouve constamment en pentest — que ce soit pour comprendre le comportement d'un démon, obtenir la persistance d'un accès, ou analyser un mécanisme de démarrage suspect.

[Code source sur GitHub](https://github.com/PandeoF1/42-taskmaster) · [Package sur PyPI](https://pypi.org/project/42-taskmaster/)
