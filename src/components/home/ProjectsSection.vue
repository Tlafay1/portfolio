<template>
  <section class="py-16 sm:py-24" id="projets">
    <div class="container mx-auto px-6">
      <h2 class="text-center text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
        Mes projets
      </h2>
      <p class="mt-4 text-center text-lg text-zinc-600 dark:text-zinc-400">
        De la recherche de <span class="text-rose-400">failles</span> à la construction <span class="text-primary">d'applications</span>.
      </p>
      
      <Carousel
        class="relative w-full mt-12"
        :opts="{
          align: 'center',
          loop: true,
        }"
      >
        <CarouselContent class="-ml-8">
          
          <CarouselItem 
            v-for="project in projects" 
            :key="project.id" 
            class="pl-8 basis-[20rem] lg:basis-3/5 pb-4"
          >
            <a :href="project.pageUrl"
               class="group flex h-full flex-col justify-between rounded-2xl 
                       shadow-m hover:shadow-l
                      transition-all duration-300 
                      hover:shadow-teal-500/10 
                      bg-zinc-900 
                      overflow-hidden">
              
              <img :src="project.imageUrl" :alt="project.title" class="w-full h-70 object-cover" />

              <div class="flex h-full flex-col justify-between p-8">
                <div>  
                  <h3 class="text-xl font-semibold text-zinc-900 dark:text-white">
                    {{ project.title }}
                  </h3>
                  <p class="mt-3 text-zinc-600 dark:text-zinc-400">
                    {{ project.description }}
                  </p>
                  <div class="mt-6 flex flex-wrap gap-2">
                    <span v-for="tag in project.tags" :key="tag"
                          class="rounded-full bg-zinc-100 px-3 py-1 text-sm shadow-s font-medium text-zinc-800 dark:bg-zinc-800 dark:text-zinc-300">
                      {{ tag }}
                    </span>
                  </div>
                </div>
                
                <span class="mt-8 inline-flex items-center font-bold text-teal-600 group-hover:text-teal-500 dark:text-teal-400 dark:group-hover:text-teal-300">
                  {{ project.linkText }}
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
        <a href="/projets-graphe" class="inline-flex items-center text-lg font-bold text-teal-600 hover:text-teal-500 dark:text-teal-400 dark:hover:text-teal-300">
          <MapIcon class="mr-2 h-6 w-6" />
          Explorer tous mes projets sur le graphe
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

import og_social_image_bughunters from '../../../docs/assets/og_social_image_bughunters.png';
import taskmaster from '../../../docs/assets/taskmaster.png';
import two_ez from '../../../docs/assets/2ez.png';

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  pageUrl: string;
  linkText: string;
  imageUrl: string; 
}

const projects: Project[] = [
  {
    id: 'google-bug',
    // Point 4: Coût du projet - Mise en forme du titre
    title: 'Bug Bounty Google | 500$',
    description: "Identification et rapport d'une vulnérabilité de type [Type de Faille] sur un des services de Google...",
    tags: ['Pentest Web', 'Google VRP'],
    pageUrl: '/projets/bug-bounty-google',
    linkText: 'Lire le write-up',
    imageUrl: og_social_image_bughunters
  },
  {
    id: 'projet-42',
    title: 'Projet 42 : Taskmaster',
    description: "Développement d'une application web complète [décrire l'app en 1 ligne], en mettant l'accent sur une architecture sécurisée.",
    tags: ['Développement', 'Python', 'Unix'],
    pageUrl: '/projets/projet-42',
    linkText: 'Voir le projet',
    imageUrl: taskmaster
  },
  {
    id: 'projet-perso',
    title: '[Nom de votre App Perso]',
    description: "[Description de l'app en 1 ligne, ex: Outil d'automatisation de reconnaissance] codé en Python, avec une API REST.",
    tags: ['Python', 'API REST', 'Outil'],
    pageUrl: '/projets/projet-perso',
    linkText: 'Voir le code sur GitHub',
    imageUrl: two_ez
  }
]
</script>