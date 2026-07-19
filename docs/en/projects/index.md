---
layout: page
sidebar: false
title: Projects
description: Offensive security, development and DevOps projects — 42 and personal.
---

<script setup lang="ts">
import ContentIndex from '@components/ContentIndex.vue';
import { data as projects } from '@composables/en-projects.data';
</script>

<ContentIndex
  :items="projects"
  title="My projects"
  subtitle="From hunting flaws to building applications — a selection of my work."
  read-more="View project"
  graph-url="/en/projects/graphe"
  graph-label="Explore the projects graph"
  :groups="[
    { key: '42', label: '42 projects' },
    { key: 'personal', label: 'Personal projects' },
  ]"
/>
