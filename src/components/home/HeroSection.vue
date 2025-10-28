<template>
  <main class="container mx-auto grid min-h-screen grid-cols-1 items-center gap-12 px-6 py-24 lg:grid-cols-2 lg:gap-24">
      
    <div class="max-w-3xl lg:order-1">
      <span class="font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400">
        Pentester & Développeur Backend
      </span>
      
      <h1 class="mt-3 text-5xl font-extrabold tracking-tight text-white sm:text-7xl">
        L'Artisan <span class="text-rose-400">Sécurité.</span>
      </h1>
      
      <p class="mt-6 text-xl text-zinc-700 dark:text-zinc-300">
        Je suis Timothée Lafay, un développeur qui pense comme un attaquant. 
        Je n'identifie pas seulement les failles : je lis le code pour comprendre leur origine et aider vos équipes à construire des applications réellement plus sûres.
      </p>

      <div class="mt-10 flex flex-wrap gap-4">
        <a href="#projets" 
           class="rounded-lg bg-teal-500 px-6 py-3 font-semibold text-white shadow-lg transition-transform duration-200 hover:scale-105 hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 dark:text-white dark:focus:ring-offset-zinc-950">
          Voir mes projets
        </a>
        <a href="[votre-lien-linkedin]" target="_blank" rel="noopener noreferrer"
           class="rounded-lg border border-zinc-300 px-6 py-3 font-semibold text-zinc-800 transition-colors duration-200 hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800 dark:focus:ring-offset-zinc-950">
          Me contacter sur LinkedIn
        </a>
      </div>
    </div>

    <div class="flex items-center justify-center lg:order-2">
      <div class="relative p-1.5 rounded-full bg-gradient-to-tr from-teal-400 to-cyan-500">
        <div class="absolute inset-0 rounded-full bg-gradient-to-tr from-teal-400 to-cyan-500 opacity-75 blur-xl"></div>
        <img class="relative w-64 h-64 rounded-full object-cover border-4 border-zinc-950 md:w-80 md:h-80" 
             src="/assets/tlafay.jpg" 
             alt="Portrait de Timothée Lafay">
      </div>
    </div>
  </main>
</template>