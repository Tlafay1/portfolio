<template>
  <footer class="border-t border-zinc-200 py-12 dark:border-zinc-800">
    <div class="container mx-auto max-w-6xl px-6 text-center">
      <div class="flex justify-center space-x-6">
        <a href="[votre-lien-github]" target="_blank" rel="noopener noreferrer" class="text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-300">
          GitHub
        </a>
        <a href="[votre-lien-linkedin]" target="_blank" rel="noopener noreferrer" class="text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-300">
          LinkedIn
        </a>
        <a href="mailto:votre.email@exemple.com" class="text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-300">
          Email
        </a>
      </div>
      <div class="mt-8 text-sm text-zinc-500 dark:text-zinc-400">
        © {{ new Date().getFullYear() }} Timothée Lafay. Construit avec Vue.js & Tailwind CSS.
      </div>
    </div>
  </footer>
</template>