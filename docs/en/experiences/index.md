---
layout: page
sidebar: false
title: Experience
description: My professional path in pentest and DevSecOps.
---

<script setup lang="ts">
import ContentIndex from '@components/ContentIndex.vue';
import { data as experiences } from '@composables/en-experiences.data';
</script>

<ContentIndex
  :items="experiences"
  title="My experience"
  subtitle="Proof through practice: my dual pentest-and-development skillset, in action."
  read-more="View details"
  graph-url="/en/experiences/graphe"
  graph-label="Explore the skills graph"
/>
