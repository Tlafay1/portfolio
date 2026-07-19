---
layout: page
sidebar: false
title: Projects graph
---

<script setup lang="ts">
import Graph from '@components/Graph.vue';
import { data as projects } from '@composables/en-projects.data';
</script>

<Graph :items="projects" />
