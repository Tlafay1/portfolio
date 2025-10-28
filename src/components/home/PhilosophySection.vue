<template>
  <section class="py-16 sm:py-24" id="philosophie">
    <div class="container mx-auto max-w-6xl px-6">
      <h2 class="text-center text-sm font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400">
        Ma Philosophie
      </h2>
      <h2 class="mt-3 text-center text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
        Le contexte est la clé da <span class="text-rose-400">sécurité.</span>
      </h2>
      
      <div class="mt-20 grid grid-cols-1 gap-16 md:grid-cols-3 md:gap-8">
        
        <div class="relative flex flex-col items-center rounded-2xl border border-teal-500/20 bg-white p-8 text-center shadow-lg shadow-teal-500/5 dark:bg-zinc-900 dark:shadow-teal-900/10">
          <div class="absolute -top-7 flex h-14 w-14 items-center justify-center rounded-full border-2 border-teal-500/30 bg-white dark:bg-zinc-950">
            <MagnifyingGlassIcon class="h-7 w-7 text-teal-500" />
          </div>
          <h3 class="mt-6 text-xl font-semibold text-zinc-900 dark:text-white">LA SECURITE ADAPATEE AU MONDE REEL</h3>
          <p class="mt-4 text-zinc-600 dark:text-zinc-400">
            La sécurité, c'est bien, protéger votre entreprise, c'est mieux. Je m'assure que mes audits ciblent les risques réels auxquels vous êtes confrontés.
          </p>
        </div>

        <div class="relative flex flex-col items-center rounded-2xl border border-teal-500/20 bg-white p-8 text-center shadow-lg shadow-teal-500/5 dark:bg-zinc-900 dark:shadow-teal-900/10">
          <div class="absolute -top-7 flex h-14 w-14 items-center justify-center rounded-full border-2 border-teal-500/30 bg-white dark:bg-zinc-950">
            <CodeBracketIcon class="h-7 w-7 text-teal-500" />
          </div>
          <h3 class="mt-6 text-xl font-semibold text-zinc-900 dark:text-white">MON ATOUT : LE DÉVELOPPEUR</h3>
          <p class="mt-4 text-zinc-600 dark:text-zinc-400">
            Fort de mes 65% de développeur, je dialogue avec vos équipes. Je priorise les risques réels en fonction de votre architecture et de vos objectifs business.
          </p>
        </div>

        <div class="relative flex flex-col items-center rounded-2xl border border-teal-500/20 bg-white p-8 text-center shadow-lg shadow-teal-500/5 dark:bg-zinc-900 dark:shadow-teal-900/10">
          <div class="absolute -top-7 flex h-14 w-14 items-center justify-center rounded-full border-2 border-teal-500/30 bg-white dark:bg-zinc-950">
            <ShieldCheckIcon class="h-7 w-7 text-teal-500" />
          </div>
          <h3 class="mt-6 text-xl font-semibold text-zinc-900 dark:text-white">MON OBJECTIF : PRAGMATIQUE</h3>
          <p class="mt-4 text-zinc-600 dark:text-zinc-400">
            Mon but : transformer chaque audit en une opportunité d'apprentissage, avec des remédiations pragmatiques que vos développeurs peuvent appliquer immédiatement.
          </p>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  MagnifyingGlassIcon,
  CodeBracketIcon,
  ShieldCheckIcon,
} from '@heroicons/vue/24/outline'
</script>