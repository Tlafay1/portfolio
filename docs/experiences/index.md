---
layout: page
sidebar: false
---

<script setup lang="ts">
    import Graph from '@components/Graph.vue';
    import { data as experiences } from "@composables/experiences.data";
</script>

<Graph :projects="experiences"/>