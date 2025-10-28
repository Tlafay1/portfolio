<template>
  <div class="min-h-screen bg-[#ECEFF1] text-zinc-900 dark:bg-[#121212] dark:text-zinc-100 selection:bg-teal-300 selection:text-teal-900">
    
    <main class="container mx-auto flex min-h-screen items-center px-6 py-24">
      <div class="max-w-3xl">
        <span class="font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400">
          Pentester & Développeur Backend
        </span>
        
        <h1 class="mt-3 text-5xl font-extrabold tracking-tight text-transparent sm:text-7xl 
                   bg-gradient-to-r from-teal-400 to-rose-400 bg-clip-text">
          L'Artisan Sécurité.
        </h1>
        
        <p class="mt-6 text-xl text-zinc-700 dark:text-zinc-300">
          Je suis [Votre Nom], un développeur qui pense comme un attaquant. 
          Je n'identifie pas seulement les failles : je lis le code pour comprendre leur origine et aider vos équipes à construire des applications réellement plus sûres.
        </p>

        <div class="mt-10 flex flex-wrap gap-4">
          <a href="#projets" 
             class="rounded-lg bg-teal-500 px-6 py-3 font-semibold text-white shadow-lg transition-transform duration-200 hover:scale-105 hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 dark:text-white dark:focus:ring-offset-zinc-900">
            Voir mes projets
          </a>
          <a href="[votre-lien-linkedin]" target="_blank" rel="noopener noreferrer"
             class="rounded-lg bg-zinc-200 px-6 py-3 font-semibold text-zinc-800 transition-colors duration-200 hover:bg-zinc-300 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700 dark:focus:ring-offset-zinc-900">
            Me contacter sur LinkedIn
          </a>
        </div>
      </div>
    </main>

    <section class="bg-white py-16 dark:bg-zinc-900 sm:py-24" id="philosophie">
      <div class="container mx-auto max-w-4xl px-6">
        <h2 class="text-center text-sm font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400">
          Ma Philosophie
        </h2>
        <p class="mt-3 text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Le contexte est la clé de la sécurité.
        </p>
        <div class="prose prose-lg prose-zinc mx-auto mt-6 max-w-none text-zinc-700 dark:prose-invert dark:text-zinc-300">
          <p>
            Un pentester qui ne comprend pas le développement, c'est comme un critique qui n'a jamais tenu de stylo. Il peut trouver une "faille" théorique (comme la "sandbox escape" de <code>virtualenv</code>) et faire perdre un temps précieux à vos équipes.
          </p>
          <p>
            Mon approche est différente. Fort de mes <strong>65% de développeur</strong>, je dialogue avec vos équipes. Je priorise les risques réels en fonction de votre architecture et de vos objectifs business.
          </p>
          <p>
            <strong>Mon but :</strong> transformer chaque audit en une opportunité d'apprentissage, avec des remédiations pragmatiques que vos développeurs peuvent appliquer immédiatement.
          </p>
        </div>
      </div>
    </section>

    <section class="py-16 sm:py-24" id="expertise">
      <div class="container mx-auto max-w-6xl px-6">
        <h2 class="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Mon Expertise
        </h2>
        
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
          
          <div class="rounded-xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900">
            <div class="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900">
              <span class="text-2xl text-teal-600 dark:text-teal-400">🛡️</span>
            </div>
            <h3 class="mt-6 text-2xl font-semibold">Pentester (35%)</h3>
            <p class="mt-2 text-zinc-600 dark:text-zinc-400">
              Je trouve les failles avant que d'autres ne les exploitent.
            </p>
            <ul class="mt-6 list-inside list-disc space-y-2 text-zinc-700 dark:text-zinc-300">
              <li>Pentest Web (OWASP, BurpSuite)</li>
              <li>Analyse de code source</li>
              <li>Audit d'infrastructure (Linux, Nmap)</li>
              <li>Cloud & Conteneurs (GCP, Docker, K8s)</li>
              <li>Bases en Active Directory</li>
            </ul>
          </div>

          <div class="rounded-xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900">
            <div class="flex h-12 w-12 items-center justify-center rounded-full bg-rose-100 dark:bg-rose-900">
              <span class="text-2xl text-rose-600 dark:text-rose-400">💻</span>
            </div>
            <h3 class="mt-6 text-2xl font-semibold">Développeur (65%)</h3>
            <p class="mt-2 text-zinc-600 dark:text-zinc-400">
              Je construis des solutions robustes et sécurisées.
            </p>
            <ul class="mt-6 list-inside list-disc space-y-2 text-zinc-700 dark:text-zinc-300">
              <li><strong>Python & Django</strong> (Framework de prédilection)</li>
              <li>TypeScript (Vue.js, Angular)</li>
              <li>Développement Backend & API REST</li>
              <li>C / C++ (Solides bases)</li>
              <li>Design UI/UX & Frontend</li>
            </ul>
          </div>

        </div>
      </div>
    </section>

    <section class="bg-white py-16 dark:bg-zinc-900 sm:py-24" id="projets">
      <div class="container mx-auto max-w-6xl px-6">
        <h2 class="text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Projets Sélectionnés
        </h2>
        <p class="mt-4 text-center text-lg text-zinc-600 dark:text-zinc-400">
          Ici, vous devriez présenter 3-4 projets (de 42, personnels, etc.)
        </p>
        <div class="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div class="flex h-64 items-center justify-center rounded-lg border-2 border-dashed border-zinc-300 text-zinc-500 dark:border-zinc-700">
            Projet 1 (Ex: Outil de Pentest en Python)
          </div>
          <div class="flex h-64 items-center justify-center rounded-lg border-2 border-dashed border-zinc-300 text-zinc-500 dark:border-zinc-700">
            Projet 2 (Ex: Application Web Django Sécurisée)
          </div>
          <div class="flex h-64 items-center justify-center rounded-lg border-2 border-dashed border-zinc-300 text-zinc-500 dark:border-zinc-700">
            Projet 3 (Ex: Write-up de CTF)
          </div>
        </div>
      </div>
    </section>

    <footer class="border-t border-zinc-200 py-12 dark:border-zinc-800">
      <div class="container mx-auto flex max-w-6xl flex-col items-center justify-between px-6 text-center md:flex-row md:text-left">
        <div>
          <h3 class="text-lg font-semibold">Parlons-en</h3>
          <p class="mt-1 text-zinc-600 dark:text-zinc-400">
            À la recherche d'un pentester qui parle le dev ?
          </p>
          <a href="mailto:votre.email@exemple.com" class="mt-2 inline-block font-medium text-teal-600 hover:text-teal-500 dark:text-teal-400 dark:hover:text-teal-300">
            votre.email@exemple.com
          </a>
        </div>
        <div class="mt-6 flex space-x-6 md:mt-0">
          <a href="[votre-lien-github]" target="_blank" rel="noopener noreferrer" class="text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-300">
            GitHub
          </a>
          <a href="[votre-lien-linkedin]" target="_blank" rel="noopener noreferrer" class="text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-300">
            LinkedIn
          </a>
        </div>
      </div>
      <div class="mt-8 text-center text-sm text-zinc-500 dark:text-zinc-400">
        © {{ new Date().getFullYear() }} [Votre Nom]. Construit avec Vue.js & Tailwind CSS.
      </div>
    </footer>

  </div>
</template>

<script setup>
// Ce composant utilise le <script setup> de Vue 3, mais aucun état réactif n'est nécessaire pour cette page statique.
// Vous pouvez importer des icônes ici si vous le souhaitez, ex: import { ShieldCheckIcon } from '@heroicons/vue/24/outline'
</script>

<style>
/* Nous importons Tailwind dans le fichier CSS principal, 
  mais nous pourrions ajouter des styles globaux ici.
  L'utilisation des classes @apply est possible mais 
  préférer les classes utilitaires directement dans le template
  est la norme avec Tailwind.
*/
</style>