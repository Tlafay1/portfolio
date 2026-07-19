<template>
  <section class="py-16 sm:py-24" id="philosophie">
    <div class="container mx-auto max-w-6xl px-6">
      <p class="text-center text-sm font-semibold uppercase tracking-wider text-teal-400">
        {{ t.eyebrow }}
      </p>
      <h2
        class="mx-auto mt-3 max-w-3xl text-center text-4xl font-bold leading-snug tracking-tight text-white sm:text-5xl"
        v-html="t.heading"
      ></h2>

      <div class="mt-20 flex flex-col gap-20 md:mt-28 md:gap-28">
        <div
          v-for="(item, i) in t.pillars"
          :key="item.title"
          class="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16"
        >
          <div :class="['overflow-hidden rounded-2xl border border-zinc-800', i % 2 === 1 ? 'md:order-last' : '']">
            <img :src="item.image" :alt="item.alt" class="aspect-[4/3] w-full object-cover" />
          </div>

          <div>
            <h3 class="text-3xl font-bold text-white" v-html="item.title"></h3>
            <p class="mt-4 text-lg text-zinc-300" v-html="item.text"></p>
          </div>
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
        eyebrow: 'My philosophy',
        heading: 'Your company is <span class="text-accent">unique</span>,<br />so should be its <span class="text-accent">protection</span>',
        pillars: [
          {
            image: '/covers/philo-realworld.png',
            alt: 'Real-world risk',
            title: 'Security fit for the <span class="text-accent">real world</span>',
            text: 'Security is good. Actually protecting your company is better. I focus on the <span class="text-accent">real risks</span> you face, to protect you where it matters.',
          },
          {
            image: '/covers/philo-devsec.png',
            alt: 'Security meets development',
            title: 'Reconciling security and <span class="text-accent">development</span>',
            text: "Security doesn't stop at a report. I work with your development teams so they understand the vulnerabilities found and build in best practices <span class=\"text-accent\">from the start</span>.",
          },
          {
            image: '/covers/philo-durable.png',
            alt: 'Lasting protection',
            title: 'Building <span class="text-accent">lasting</span> protection',
            text: 'Security is a marathon, not a sprint. I help you put in place the processes and tools to make it an <span class="text-accent">integral</span> part of your development cycle.',
          },
        ],
      }
    : {
        eyebrow: 'Ma philosophie',
        heading: "Votre entreprise est <span class=\"text-accent\">unique</span>,<br />votre <span class=\"text-accent\">protection</span> doit l'être aussi",
        pillars: [
          {
            image: '/covers/philo-realworld.png',
            alt: 'Risques réels',
            title: 'La sécurité adaptée au <span class="text-accent">monde réel</span>',
            text: "La sécurité, c'est bien. Protéger réellement votre entreprise, c'est mieux. Je me concentre sur les <span class=\"text-accent\">risques réels</span> auxquels vous êtes confronté, pour vous protéger là où ça compte.",
          },
          {
            image: '/covers/philo-devsec.png',
            alt: 'Sécurité et développement',
            title: 'Réconcilier sécurité et <span class="text-accent">développement</span>',
            text: "La sécurité ne s'arrête pas à un rapport. J'accompagne vos équipes de développement pour qu'elles comprennent les vulnérabilités identifiées et intègrent les bonnes pratiques <span class=\"text-accent\">dès le départ</span>.",
          },
          {
            image: '/covers/philo-durable.png',
            alt: 'Protection durable',
            title: 'Assurer une protection <span class="text-accent">durable</span>',
            text: "La sécurité est un marathon, pas un sprint. Je vous aide à mettre en place les processus et les outils pour qu'elle devienne une partie <span class=\"text-accent\">intégrante</span> de votre cycle de développement.",
          },
        ],
      }
);
</script>
