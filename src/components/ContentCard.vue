<script setup lang="ts">
import { withBase } from 'vitepress';
import { ArrowRightIcon } from '@heroicons/vue/24/outline';
import type { ContentItem } from '@composables/projects.data';

defineProps<{ item: ContentItem; readMore?: string }>();
</script>

<template>
  <a
    :href="withBase(item.url)"
    class="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-teal-400/60 hover:shadow-xl hover:shadow-teal-500/10 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-teal-500/50"
  >
    <div class="aspect-[1200/630] overflow-hidden bg-zinc-950">
      <img
        v-if="item.image"
        :src="withBase(item.image)"
        :alt="item.title"
        loading="lazy"
        class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>

    <div class="flex flex-1 flex-col p-6">
      <h3 class="text-lg font-bold text-zinc-900 dark:text-white">{{ item.title }}</h3>
      <p v-if="item.description" class="mt-2 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        {{ item.description }}
      </p>

      <div v-if="item.tags?.length" class="mt-4 flex flex-wrap gap-2">
        <span
          v-for="tag in item.tags.slice(0, 4)"
          :key="tag"
          class="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
        >
          {{ tag }}
        </span>
      </div>

      <span class="mt-5 inline-flex items-center text-sm font-semibold text-teal-700 dark:text-teal-400">
        {{ readMore ?? 'Voir le détail' }}
        <ArrowRightIcon class="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </div>
  </a>
</template>
