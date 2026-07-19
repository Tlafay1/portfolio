---
layout: page
sidebar: false
title: Graphe des projets
---

<script setup lang="ts">
import Graph from '@components/Graph.vue';
import { data as projects } from '@composables/projects.data';
</script>

<Graph :items="projects" />
