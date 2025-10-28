<template>
  <div class="min-h-screen bg-[#ECEFF1] text-zinc-900 
              dark:bg-zinc-950 dark:text-zinc-100 
              dark:bg-[radial-gradient(theme(colors.teal.400/0.05)_1px,_transparent_1px)] 
              dark:[background-size:2rem_2rem]
              selection:bg-teal-300 selection:text-teal-900">
    
    <HeroSection />
    <PhilosophySection />
    <ExperiencesSection />
    <ProjectsSection />
    <ContactSection />
    <PageFooter />

  </div>
</template>

<script setup lang="ts">
// On importe les composants de section
import HeroSection from '@components/home/HeroSection.vue'
import PhilosophySection from '@components/home/PhilosophySection.vue'
import ExperiencesSection from '@components/home/ExperiencesSection.vue'
import ProjectsSection from '@components/home/ProjectsSection.vue'
import ContactSection from '@components/home/ContactSection.vue'
import PageFooter from '@components/home/PageFooter.vue'
</script>

<style>
/* Les styles globaux (comme le scrollbar-hide) 
   peuvent rester ici ou être déplacés dans un fichier CSS principal.
   Pour cet exemple, je déplace le style du scrollbar
   dans ExperiencesSection.vue car il lui est spécifique.
*/
</style>