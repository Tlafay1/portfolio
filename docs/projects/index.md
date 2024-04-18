---
layout: page
sidebar: false
---

<script setup lang="ts">
    import Graph from '@components/Graph.vue';
    import { data as projects } from "@composables/projects.data.ts";
</script>

<Graph :projects="projects"/>