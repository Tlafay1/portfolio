<template>
  <section class="py-16 sm:py-24" id="projets">
    <div class="container mx-auto max-w-6xl px-6">
      <h2 class="text-center text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
        Projets Sélectionnés
      </h2>
      <p class="mt-4 text-center text-lg text-zinc-600 dark:text-zinc-400">
        De la recherche de failles à la construction d'applications.
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
            
            class="pl-8 basis-[20rem] lg:basis-1/2"
          >
            <a :href="project.pageUrl"
               class="group flex h-full flex-col justify-between rounded-2xl border 
                      border-zinc-200 bg-white p-6 shadow-lg 
                      shadow-zinc-200/20 transition-all duration-300 
                      hover:border-teal-400 hover:shadow-teal-500/10 
                      dark:border-zinc-800 dark:bg-zinc-900 
                      dark:shadow-teal-900/10 dark:hover:border-teal-500/50">
              
              <div>
                <div class="flex h-12 w-12 items-center justify-center rounded-full"
                     :class="project.iconBgClass">
                  <component :is="project.icon" class="h-7 w-7" :class="project.iconTextClass" />
                </div>
                
                <h3 class="mt-5 text-xl font-semibold text-zinc-900 dark:text-white">
                  {{ project.title }}
                </h3>
                <p class="mt-2 text-zinc-600 dark:text-zinc-400">
                  {{ project.description }}
                </p>
                <div class="mt-4 flex flex-wrap gap-2">
                  <span v-for="tag in project.tags" :key="tag"
                        class="rounded-full bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-800 dark:bg-zinc-800 dark:text-zinc-300">
                    {{ tag }}
                  </span>
                </div>
              </div>
              
              <span class="mt-6 inline-flex items-center font-medium text-teal-600 group-hover:text-teal-500 dark:text-teal-400 dark:group-hover:text-teal-300">
                {{ project.linkText }}
                <ArrowRightIcon class="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </a>
          </CarouselItem>
          
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <div class="mt-10 text-center">
        <a href="/projets-graphe" class="inline-flex items-center text-lg font-semibold text-teal-600 hover:text-teal-500 dark:text-teal-400 dark:hover:text-teal-300">
          <MapIcon class="mr-2 h-5 w-5" />
          Explorer tous mes projets sur le graphe
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Component } from 'vue'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import {
  BugAntIcon,
  AcademicCapIcon,
  CommandLineIcon,
  ArrowRightIcon,
  MapIcon
} from '@heroicons/vue/24/outline'

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  pageUrl: string;
  linkText: string;
  icon: Component;
  iconBgClass: string;
  iconTextClass: string;
}

const projects: Project[] = [
  {
    id: 'google-bug',
    title: 'Bug Bounty Google (500$)',
    description: "Identification et rapport d'une vulnérabilité de type [Type de Faille] sur un des services de Google, récompensé via leur programme VRP.",
    tags: ['Pentest Web', 'Google VRP'],
    pageUrl: '/projets/bug-bounty-google',
    linkText: 'Lire le write-up',
    icon: BugAntIcon,
    iconBgClass: 'bg-rose-100 dark:bg-rose-900/50',
    iconTextClass: 'text-rose-600 dark:text-rose-400'
  },
  {
    id: 'projet-42',
    title: 'Projet 42 : [Nom Projet]',
    description: "Développement d'une application web complète [décrire l'app en 1 ligne], en mettant l'accent sur une architecture sécurisée.",
    tags: ['Développement', 'Django', 'TypeScript'],
    pageUrl: '/projets/projet-42',
    linkText: 'Voir le projet',
    icon: AcademicCapIcon,
    iconBgClass: 'bg-teal-100 dark:bg-teal-900/50',
    iconTextClass: 'text-teal-600 dark:text-teal-400'
  },
  {
    id: 'projet-perso',
    title: '[Nom de votre App Perso]',
    description: "[Description de l'app en 1 ligne, ex: Outil d'automatisation de reconnaissance] codé en Python, avec une API REST.",
    tags: ['Python', 'API REST', 'Outil'],
    pageUrl: '/projets/projet-perso',
    linkText: 'Voir le code sur GitHub',
    icon: CommandLineIcon,
    iconBgClass: 'bg-blue-100 dark:bg-blue-900/50',
    iconTextClass: 'text-blue-600 dark:text-blue-400'
  }
]
</script>