---
layout: page
sidebar: false
title: Skills graph
---

<script setup lang="ts">
import Graph from '@components/Graph.vue';
import { data as experiences } from '@composables/en-experiences.data';
</script>

<Graph :items="experiences" />
