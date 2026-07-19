---
layout: page
sidebar: false
title: Graphe des compétences
---

<script setup lang="ts">
import Graph from '@components/Graph.vue';
import { data as experiences } from '@composables/experiences.data';
</script>

<Graph :items="experiences" />
