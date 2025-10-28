<template>
  <section class="py-16 sm:py-24" id="experiences">
    <div class="container mx-auto max-w-6xl px-6">
      <h2 class="text-center text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
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
            
            class="pl-8 basis-[20rem] lg:basis-2/3"
          >
            <a :href="exp.pageUrl"
               class="group flex h-full flex-col justify-between rounded-2xl border 
                      border-zinc-200 bg-white p-8 shadow-lg 
                      shadow-zinc-200/20 transition-all duration-300 
                      hover:border-teal-400 hover:shadow-teal-500/10 
                      dark:border-zinc-800 dark:bg-zinc-900 
                      dark:shadow-teal-900/10 dark:hover:border-teal-500/50">
              
              <div>
                <div class="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900/50">
                  <BuildingOffice2Icon class="h-7 w-7 text-teal-600 dark:text-teal-400" />
                </div>
                
                <span class="mt-6 block text-sm font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                  {{ exp.type }} ({{ exp.date }})
                </span>
                <h3 class="mt-2 text-2xl font-bold text-zinc-900 dark:text-white">
                  {{ exp.title }}
                </h3>
                <p class="mt-1 text-lg font-medium text-zinc-700 dark:text-zinc-300">
                  chez <span class="text-rose-400 group-hover:underline">{{ exp.company }}</span>
                </p>
                <p class="mt-4 text-zinc-600 dark:text-zinc-400 line-clamp-4">
                  {{ exp.description }}
                </p>
                <div class="mt-4 flex flex-wrap gap-2">
                  <span v-for="tag in exp.tags" :key="tag" 
                        class="rounded-full bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-800 dark:bg-zinc-800 dark:text-zinc-300">
                    {{ tag }}
                  </span>
                </div>
              </div>
              
              <span class="mt-6 inline-flex items-center font-medium text-teal-600 group-hover:text-teal-500 dark:text-teal-400 dark:group-hover:text-teal-300">
                Voir le détail
                <ArrowRightIcon class="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </a>
          </CarouselItem>
          
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      
      <div class="mt-10 text-center">
        <a href="/experiences-graphe" class="inline-flex items-center text-lg font-semibold text-teal-600 hover:text-teal-500 dark:text-teal-400 dark:hover:text-teal-300">
          <MapIcon class="mr-2 h-5 w-5" />
          Explorer toutes mes expériences sur le graphe
        </a>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
// Imports pour shadcn-vue Carousel
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel'

// Imports d'icônes
import {
  BuildingOffice2Icon,
  ArrowRightIcon,
  MapIcon
} from '@heroicons/vue/24/outline'

// Logique de données (inchangée)
interface Experience {
  id: string;
  type: string;
  date: string;
  title: string;
  company: string;
  description: string;
  tags: string[];
  pageUrl: string;
}

const experiences: Experience[] = [
  {
    id: 'itd-alternance',
    type: 'Alternance',
    date: '2023 - 2024',
    title: 'Expert DevSecOps',
    company: 'IT-Development',
    description: "Mon rôle principal était de sécuriser les applications web et mobiles de l'entreprise. J'ai réalisé des audits de sécurité, des tests d'intrusion et participé à la mise en place de solutions de sécurité.",
    tags: ['DevSecOps', 'Pentest Web', 'Audit', 'Kubernetes'],
    pageUrl: '/experience/alternance-itd'
  },
  {
    id: 'stage-ene',
    type: 'Stage',
    date: '2023',
    title: 'Pentester Junior',
    company: "L'ENE (Entreprise Fictive)",
    description: "Stage de 6 mois axé sur le pentest d'infrastructure. Missions de scan Nmap, recherche de vulnérabilités sur Active Directory et rédaction de rapports d'audit pour les PME.",
    tags: ['Pentest Interne', 'Active Directory', 'Nmap', 'Rapport'],
    pageUrl: '/experience/stage-ene'
  },
  {
    id: 'stage-itd',
    type: 'Stage',
    date: '2023',
    title: 'Pentester',
    company: 'IT-Development',
    description: "Réalisation de tests d'intrusion sur des applications web clientes, identification de vulnérabilités OWASP Top 10, et proposition de remédiations adaptées au contexte.",
    tags: ['Pentest Web', 'OWASP', 'Rapport', 'Remédiation'],
    pageUrl: '/experience/stage-itd'
  }
]
</script>