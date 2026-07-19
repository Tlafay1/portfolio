---
layout: page
sidebar: false
title: Expériences
description: Mon parcours professionnel en pentest et DevSecOps.
---

<script setup lang="ts">
import ContentIndex from '@components/ContentIndex.vue';
import { data as experiences } from '@composables/experiences.data';
</script>

<ContentIndex
  :items="experiences"
  title="Mes expériences"
  subtitle="La preuve par la pratique : ma double compétence pentest et développement, en action."
  read-more="Voir le détail"
  graph-url="/experiences/graphe"
  graph-label="Explorer le graphe des compétences"
/>
