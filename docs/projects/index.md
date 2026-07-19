---
layout: page
sidebar: false
title: Projets
description: Projets de sécurité offensive, de développement et de DevOps — 42 et personnels.
---

<script setup lang="ts">
import ContentIndex from '@components/ContentIndex.vue';
import { data as projects } from '@composables/projects.data';
</script>

<ContentIndex
  :items="projects"
  title="Mes projets"
  subtitle="De la recherche de failles à la construction d'applications — voici une sélection de mes travaux."
  read-more="Voir le projet"
  graph-url="/projects/graphe"
  graph-label="Explorer le graphe des projets"
  :groups="[
    { key: '42', label: 'Projets 42' },
    { key: 'personal', label: 'Projets personnels' },
  ]"
/>
