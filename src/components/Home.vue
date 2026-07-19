<template>
  <div class="min-h-screen bg-zinc-950 text-zinc-100
              bg-[radial-gradient(theme(colors.teal.400/0.05)_1px,_transparent_1px)]
              [background-size:2rem_2rem]
              selection:bg-teal-300 selection:text-teal-900">

    <HeroSection />
    <PhilosophySection />
    <ExperiencesSection />
    <ProjectsSection />
    <ContactSection />

  </div>
</template>

<script setup lang="ts">
import HeroSection from '@/components/home/HeroSection.vue'
import PhilosophySection from '@/components/home/PhilosophySection.vue'
import ExperiencesSection from '@/components/home/ExperiencesSection.vue'
import ProjectsSection from '@/components/home/ProjectsSection.vue'
import ContactSection from '@/components/home/ContactSection.vue'
</script>
