<template>
  <section class="py-16 sm:py-24" id="experiences">
    <div class="container mx-auto max-w-6xl px-6">
      <h2 class="text-center text-4xl font-bold tracking-tight text-white sm:text-5xl">
        {{ t.title }}
      </h2>
      <p class="mx-auto mt-4 max-w-2xl text-center text-lg text-zinc-400">
        {{ t.subtitle }}
      </p>

      <div class="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <ContentCard
          v-for="exp in experiences"
          :key="exp.url"
          :item="exp"
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
import { data as experiencesFr } from '@composables/experiences.data';
import { data as experiencesEn } from '@composables/en-experiences.data';

const { lang } = useData();
const isEn = computed(() => lang.value === 'en');
const experiences = computed(() => (isEn.value ? experiencesEn : experiencesFr));

const t = computed(() =>
  isEn.value
    ? {
        title: 'My experience',
        subtitle: 'Proof through practice: my dual pentest-and-development skillset in action.',
        readMore: 'View details',
        all: 'All my experience',
        allUrl: '/en/experiences/',
        graph: 'Explore the skills graph',
        graphUrl: '/en/experiences/graphe',
      }
    : {
        title: 'Mes expériences',
        subtitle: 'La preuve par la pratique : ma double compétence en action.',
        readMore: 'Voir le détail',
        all: 'Toutes mes expériences',
        allUrl: '/experiences/',
        graph: 'Explorer le graphe des compétences',
        graphUrl: '/experiences/graphe',
      }
);
</script>
