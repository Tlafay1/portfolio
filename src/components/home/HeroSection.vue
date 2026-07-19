<template>
  <main class="container mx-auto grid min-h-[calc(100vh-var(--vp-nav-height))] grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-24">

    <div class="max-w-3xl lg:order-1">
      <span class="font-semibold uppercase tracking-wider text-teal-300">
        {{ t.eyebrow }}
      </span>

      <h1 class="mt-4 text-5xl font-extrabold tracking-tight text-white sm:text-7xl" v-html="t.title"></h1>

      <p class="mt-8 text-xl text-zinc-300" v-html="t.lead"></p>

      <div class="mt-12 flex flex-wrap gap-4">
        <a
          href="#contact"
          class="rounded-lg bg-teal-600 px-6 py-3 font-semibold text-white shadow-md transition-colors duration-200 hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-zinc-950"
        >
          {{ t.contact }}
        </a>
        <a
          href="#projets"
          class="rounded-lg border border-zinc-700 px-6 py-3 font-semibold text-zinc-200 transition-colors duration-200 hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 focus:ring-offset-zinc-950"
        >
          {{ t.projects }}
        </a>
      </div>
    </div>

    <div class="flex items-center justify-center lg:order-2">
      <div class="relative rounded-full bg-gradient-to-tr from-teal-400 to-rose-400 p-1.5">
        <div class="absolute inset-0 rounded-full bg-gradient-to-tr from-teal-400 to-rose-400 opacity-60 blur-2xl"></div>
        <img
          class="relative h-64 w-64 rounded-full border-4 border-zinc-950 object-cover md:h-80 md:w-80"
          src="/assets/tlafay.jpg"
          alt="Portrait de Timothée Lafay"
        />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useData } from 'vitepress';

const { lang } = useData();
const t = computed(() =>
  lang.value === 'en'
    ? {
        eyebrow: 'Pentest · Full-stack Development · DevSecOps',
        title: 'From <span class="text-accent">intrusion testing</span> to the code fix.',
        lead: "I'm Timothée Lafay, a pentester who goes beyond the audit.<br />I don't just find the flaws: I help your teams resolve them and make your security solutions last.",
        contact: 'Get in touch',
        projects: 'See my projects',
      }
    : {
        eyebrow: 'Pentest · Développement Full-stack · DevSecOps',
        title: 'Du <span class="text-accent">test d\'intrusion</span> au correctif de code.',
        lead: "Je suis Timothée Lafay, un pentester qui va au-delà du simple audit.<br />Je ne me contente pas de trouver les failles : j'accompagne vos équipes dans leur résolution et dans la pérennisation de vos solutions de sécurité.",
        contact: 'Me contacter',
        projects: 'Voir mes projets',
      }
);
</script>
