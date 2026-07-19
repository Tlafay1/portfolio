<template>
  <section class="py-16 sm:py-24" id="projets">
    <div class="container mx-auto max-w-6xl px-6">
      <h2 class="text-center text-4xl font-bold tracking-tight text-white sm:text-5xl">
        {{ t.title }}
      </h2>
      <p class="mx-auto mt-4 max-w-2xl text-center text-lg text-zinc-400" v-html="t.subtitle"></p>

      <div class="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <ContentCard
          v-for="project in featured"
          :key="project.url"
          :item="project"
          :read-more="t.readMore"
        />
      </div>

      <div class="mt-10 flex flex-wrap items-center justify-center gap-6">
        <a
          :href="t.allUrl"
          class="inline-flex items-center gap-2 font-semibold text-teal-400 transition-colors hover:text-teal-300"
        >
          {{ t.all }}
          <ArrowRightIcon class="h-5 w-5" />
        </a>
        <a
          :href="t.graphUrl"
          class="inline-flex items-center gap-2 text-sm font-semibold text-zinc-400 transition-colors hover:text-zinc-200"
        >
          <MapIcon class="h-5 w-5" />
          {{ t.graph }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useData } from 'vitepress';
import { ArrowRightIcon, MapIcon } from '@heroicons/vue/24/outline';
import ContentCard from '@components/ContentCard.vue';
import { data as projectsFr } from '@composables/projects.data';
import { data as projectsEn } from '@composables/en-projects.data';

const { lang } = useData();
const isEn = computed(() => lang.value === 'en');
const projects = computed(() => (isEn.value ? projectsEn : projectsFr));

// Trio vitrine : les projets marqués `featured`, complétés au besoin.
const featured = computed(() => {
  const flagged = projects.value.filter((p) => p.featured);
  if (flagged.length >= 3) return flagged.slice(0, 3);
  const rest = projects.value.filter((p) => !p.featured);
  return [...flagged, ...rest].slice(0, 3);
});

const t = computed(() =>
  isEn.value
    ? {
        title: 'My projects',
        subtitle: 'From hunting <span class="text-accent">flaws</span> to building applications.',
        readMore: 'View project',
        all: 'All my projects',
        allUrl: '/en/projects/',
        graph: 'Explore the projects graph',
        graphUrl: '/en/projects/graphe',
      }
    : {
        title: 'Mes projets',
        subtitle: 'De la recherche de <span class="text-accent">failles</span> à la construction d\'applications.',
        readMore: 'Voir le projet',
        all: 'Tous mes projets',
        allUrl: '/projects/',
        graph: 'Explorer le graphe des projets',
        graphUrl: '/projects/graphe',
      }
);
</script>
