---
title: Inception of Things
description: Building a Kubernetes infrastructure from scratch with K3s, Vagrant and Argo CD — automated provisioning and continuous deployment in GitOps.
image: /covers/proj-iot.png
category: 42
github: https://github.com/PandeoF1/42-Inception-of-Things
order: 3
tags:
- devops
- system administration
- Kubernetes
- Vagrant
- Argo CD
---

# Inception of Things

## Overview

Inception of Things is a DevOps project centred on **Kubernetes**. It consists of provisioning and configuring, entirely automatically, a reproducible containerised infrastructure — from the virtual machine all the way to continuous deployment of applications.

## What the project covers

- **K3s** — setting up a lightweight Kubernetes distribution, in single-server and server/agent configurations.
- **Vagrant** — automated provisioning of virtual machines described entirely as code (Infrastructure as Code).
- **Argo CD** — continuous deployment in **GitOps**: the cluster's state is driven by a Git repository, with every configuration change applied automatically.

## The security angle

Understanding the infrastructure beneath the applications is essential for a modern pentester: cluster network segmentation, secret management, RBAC, container image security. You can't assess the security of a Kubernetes deployment without knowing how it's built — and this project gave me exactly that "builder's" point of view.

[Source code on GitHub](https://github.com/PandeoF1/42-Inception-of-Things)
