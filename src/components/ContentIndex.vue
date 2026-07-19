<script setup lang="ts">
import { computed } from 'vue';
import { withBase } from 'vitepress';
import { MapIcon } from '@heroicons/vue/24/outline';
import ContentCard from '@components/ContentCard.vue';
import type { ContentItem } from '@composables/projects.data';

const props = defineProps<{
  items: ContentItem[];
  title: string;
  subtitle?: string;
  graphUrl?: string;
  graphLabel?: string;
  /** Ordre et libellés des groupes (par category). Optionnel. */
  groups?: { key: string; label: string }[];
  readMore?: string;
}>();

const readMore = computed(() => props.readMore ?? 'Voir le détail');

const grouped = computed(() => {
  if (!props.groups?.length) {
    return [{ label: '', items: props.items }];
  }
  return props.groups
    .map((g) => ({ label: g.label, items: props.items.filter((i) => i.category === g.key) }))
    .filter((g) => g.items.length > 0);
});
</script>

<template>
  <div class="mx-auto max-w-6xl px-6 py-16 sm:py-20">
    <header class="mb-14 text-center">
      <h1 class="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
        {{ title }}
      </h1>
      <p v-if="subtitle" class="mx-auto mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
        {{ subtitle }}
      </p>
      <a
        v-if="graphUrl"
        :href="withBase(graphUrl)"
        class="mt-6 inline-flex items-center gap-2 rounded-full border border-zinc-300 px-4 py-2 text-sm font-semibold text-teal-700 transition-colors hover:border-teal-400 hover:bg-teal-50 dark:border-zinc-700 dark:text-teal-300 dark:hover:border-teal-600 dark:hover:bg-teal-950/40"
      >
        <MapIcon class="h-5 w-5" />
        {{ graphLabel }}
      </a>
    </header>

    <section v-for="group in grouped" :key="group.label" class="mb-14 last:mb-0">
      <h2
        v-if="group.label"
        class="mb-6 text-sm font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400"
      >
        {{ group.label }}
      </h2>

      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <ContentCard
          v-for="item in group.items"
          :key="item.url"
          :item="item"
          :read-more="readMore"
        />
      </div>
    </section>
  </div>
</template>
