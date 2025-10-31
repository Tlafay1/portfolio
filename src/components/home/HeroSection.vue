<template>
  <main class="container mx-auto grid min-h-screen grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-24">
      
    <div class="max-w-3xl lg:order-1">
      <span class="font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-300">
        Pentest | Développement Fullstack | DevOps
      </span>
      
      <h1 class="mt-4 text-5xl font-extrabold tracking-tight text-white sm:text-7xl">
        Du <span class="text-accent">test d'intrusion </span> au correctif de code.
      </h1>
      
      <p class="mt-8 text-xl text-zinc-700 dark:text-zinc-300">
        Je suis Timothée Lafay, un pentester qui va au-delà du simple audit.<br>
        Je ne me contente pas de trouver les failles: j'accompagne votre équipe dans leur résolution et la pérénisation des solutions de sécurité.
      </p>

      <div class="mt-12 flex flex-wrap gap-4">
        <a href="https://www.linkedin.com/in/timothee-lafay/" target="_blank" rel="noopener noreferrer"
           class="rounded-lg bg-teal-600 shadow-m px-6 py-3 font-semibold text-white transition-transform duration-200 hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 dark:text-white dark:focus:ring-offset-zinc-950">
          Me contacter
        </a>
        <a href="#projets"
           class="rounded-lg border shadow-l border-zinc-300 px-6 py-3 font-semibold text-zinc-800 transition-colors duration-200 hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800 dark:focus:ring-offset-zinc-950">
          Voir mes projets
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