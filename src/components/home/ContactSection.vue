<template>
  <section class="py-20 sm:py-28" id="contact">
    <div class="container mx-auto max-w-5xl px-6">
      <div class="rounded-2xl border border-zinc-800 bg-zinc-900 p-12 text-center shadow-xl">
        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {{ t.title }}
        </h2>
        <p class="mx-auto mt-4 max-w-2xl text-lg text-zinc-400">
          {{ t.text }}
        </p>
        <div class="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:timotheelafay4@gmail.com"
            class="rounded-lg bg-teal-600 px-6 py-3 font-semibold text-white shadow-lg transition-colors duration-200 hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-zinc-900"
          >
            {{ t.email }}
          </a>
          <a
            href="https://www.linkedin.com/in/timothee-lafay/"
            target="_blank"
            rel="noopener noreferrer"
            class="rounded-lg border border-zinc-700 px-6 py-3 font-semibold text-zinc-200 transition-colors duration-200 hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 focus:ring-offset-zinc-900"
          >
            {{ t.linkedin }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useData } from 'vitepress';

const { lang } = useData();
const t = computed(() =>
  lang.value === 'en'
    ? {
        title: 'Ready to work together?',
        text: "Looking for a pentester who speaks dev? I'm open to opportunities and would love to talk.",
        email: 'Send me an email',
        linkedin: 'View my LinkedIn',
      }
    : {
        title: 'Prêt à collaborer ?',
        text: "À la recherche d'un pentester qui parle le dev ? Je suis ouvert aux opportunités et j'adorerais échanger avec vous.",
        email: 'Envoyez-moi un email',
        linkedin: 'Voir mon LinkedIn',
      }
);
</script>
