---
title: Taskmaster
tags:
- python
- linux
---

# Taskmaster

## Description

![Taskmaster](/assets/taskmaster.png)

Taskmaster est un projet de gestionnaire de taches.
Il permet à ses utilisateurs de contrôler un certain nombre de processus sur les systèmes d'exploitation.

Inspiré par [Supervisor](https://github.com/Supervisor/supervisor)

## Fonctionnalités

- Démarrer, arrêter et redémarrer des processus
- Vérifier l'état des processus
- Vérifier les logs des processus
- Fichier de configuration en YAML permettant de définir:
    - Les processus à gérer
    - Les commandes à exécuter
    - La localisation des logs
    - Les options de démarrage
    - Les options de redémarrage
    - Les options d'arrêt
    - Les variables d'environnement du processus
- Interface utilisateur en ligne de commande

## Plus d'informations

[Projet Github](https://github.com/PandeoF1/42-taskmaster)

[Package Pypi](https://pypi.org/project/42-taskmaster/)


Tags: {{ $frontmatter.tags.join(', ') }}