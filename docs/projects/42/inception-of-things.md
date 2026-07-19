---
title: Inception of Things
description: Mise en place d'une infrastructure Kubernetes de A à Z avec K3s, Vagrant et Argo CD — provisionnement automatisé et déploiement continu en GitOps.
image: /covers/proj-iot.png
category: 42
github: https://github.com/PandeoF1/42-Inception-of-Things
order: 3
tags:
- devops
- administration système
- Kubernetes
- Vagrant
- Argo CD
---

# Inception of Things

## Description

Inception of Things est un projet DevOps centré sur **Kubernetes**. Il consiste à provisionner et configurer, entièrement de manière automatisée, une infrastructure conteneurisée reproductible — de la machine virtuelle jusqu'au déploiement continu des applications.

## Ce que le projet couvre

- **K3s** — mise en place d'une distribution Kubernetes légère, en configurations mono-serveur et serveur/agent.
- **Vagrant** — provisionnement automatisé de machines virtuelles décrites entièrement en code (Infrastructure as Code).
- **Argo CD** — déploiement continu en **GitOps** : l'état du cluster est piloté par un dépôt Git, chaque changement de configuration étant automatiquement appliqué.

## L'angle sécurité

Comprendre l'infrastructure sous les applications est essentiel pour un pentester moderne : segmentation réseau du cluster, gestion des secrets, RBAC, sécurité des images de conteneurs. On ne peut pas évaluer la sécurité d'un déploiement Kubernetes sans savoir comment il est construit — ce projet m'a donné exactement ce point de vue « constructeur ».

[Code source sur GitHub](https://github.com/PandeoF1/42-Inception-of-Things)
