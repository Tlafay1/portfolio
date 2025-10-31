<template>
  <section class="py-16 sm:py-24" id="experiences">
    <div class="container mx-auto px-6">
      <h2 class="text-center text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
        Mes expériences
      </h2>
      <p class="mt-4 text-center text-lg text-zinc-600 dark:text-zinc-400">
        La preuve par la pratique : ma double compétence en action.
      </p>

      <Carousel 
        class="relative w-full mt-12"
        :opts="{ 
          align: 'center',
          loop: true 
        }"
      >
        <CarouselContent class="-ml-8">
          
          <CarouselItem 
            v-for="exp in experiences" 
            :key="exp.id" 
            class="pl-8 basis-[20rem] lg:basis-3/5 pb-4"
          >
            <a :href="exp.pageUrl"
               class="group flex h-full flex-col justify-between rounded-2xl 
                       shadow-m hover:shadow-l
                      transition-all duration-300 
                      hover:shadow-teal-500/10 
                      bg-zinc-900 
                      overflow-hidden">
              
              <img :src="exp.imageUrl" :alt="exp.title" class="w-full h-70 object-cover" />

              <div class="flex h-full flex-col justify-between p-8">
                <div>
                  <span class="block text-sm font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                    {{ exp.type }} ({{ exp.date }})
                  </span>
                  <h3 class="mt-2 text-2xl font-bold text-zinc-900 dark:text-white">
                    {{ exp.title }}
                  </h3>
                  <p class="mt-1 text-lg font-medium text-zinc-700 dark:text-zinc-300">
                    chez <span class="text-rose-400">{{ exp.company }}</span>
                  </p>
                  <p class="mt-3 text-zinc-600 dark:text-zinc-400 line-clamp-4">
                    {{ exp.description }}
                  </p>
                  <div class="mt-6 flex flex-wrap gap-2">
                    <span v-for="tag in exp.tags" :key="tag" 
                          class="rounded-full bg-zinc-100 px-3 py-1 shadow-s text-sm font-medium text-zinc-800 dark:bg-zinc-800 dark:text-zinc-300">
                      {{ tag }}
                    </span>
                  </div>
                </div>
                
                <span class="mt-8 inline-flex items-center font-bold text-teal-600 group-hover:text-teal-500 dark:text-teal-400 dark:group-hover:text-teal-300">
                  Voir le détail
                  <ArrowRightIcon class="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </a>
          </CarouselItem>
          
        </CarouselContent>
        <CarouselPrevious class="h-10 w-10 border-zinc-300 bg-white/80 text-zinc-900 hover:bg-white dark:border-zinc-700 dark:bg-zinc-900/80 dark:text-white dark:hover:bg-zinc-900" />
        <CarouselNext class="h-10 w-10 border-zinc-300 bg-white/80 text-zinc-900 hover:bg-white dark:border-zinc-700 dark:bg-zinc-900/80 dark:text-white dark:hover:bg-zinc-900" />
      </Carousel>
      
      <div class="mt-6 text-center">
        <a href="/experiences-graphe" class="inline-flex items-center text-lg font-bold text-teal-600 hover:text-teal-500 dark:text-teal-400 dark:hover:text-teal-300">
          <MapIcon class="mr-2 h-6 w-6" />
          Explorer toutes mes expériences sur le graphe
        </a>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel'
import {
  ArrowRightIcon,
  MapIcon
} from '@heroicons/vue/24/outline'

import itd_brand from '../../../docs/assets/itd-brand.png'

interface Experience {
  id: string;
  type: string;
  date: string;
  title: string;
  company: string;
  description: string;
  tags: string[];
  pageUrl: string;
  imageUrl: string; 
}

const experiences: Experience[] = [
  {
    id: 'itd-alternance',
    type: 'Alternance',
    date: '2023 - 2024',
    title: 'Expert DevSecOps',
    company: 'IT-Development',
    description: "Mon rôle principal était de sécuriser les applications web et mobiles de l'entreprise. J'ai réalisé des audits de sécurité...",
    tags: ['DevSecOps', 'Pentest Web', 'Audit', 'Kubernetes'],
    pageUrl: '/experience/alternance-itd',
    imageUrl: itd_brand
  },
  {
    id: 'stage-ene',
    type: 'Stage',
    date: '2023',
    title: 'Pentester Junior',
    company: "L'ENE (Entreprise Fictive)",
    description: "Stage de 6 mois axé sur le pentest d'infrastructure. Missions de scan Nmap, recherche de vulnérabilités sur Active Directory...",
    tags: ['Pentest Interne', 'Active Directory', 'Nmap', 'Rapport'],
    pageUrl: '/experience/stage-ene',
    imageUrl: itd_brand
  },
  {
    id: 'stage-itd',
    type: 'Stage',
    date: '2023',
    title: 'Pentester',
    company: 'IT-Development',
    description: "Réalisation de tests d'intrusion sur des applications web clientes, identification de vulnérabilités OWASP Top 10...",
    tags: ['Pentest Web', 'OWASP', 'Rapport', 'Remédiation'],
    pageUrl: '/experience/stage-itd',
    imageUrl: itd_brand
  }
]
</script>