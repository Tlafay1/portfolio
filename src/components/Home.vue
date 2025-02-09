<script setup lang="ts">
import VVanta from 'vue-vanta-revamp';
import {
  ZapIcon,
  TargetIcon,
  LinkIcon
} from 'lucide-vue-next'

const options = {
  backgroundColor: 0x000000,
  color: 0x748a9e,
}

const features = [
  {
    title: 'Instant Responses',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    icon: ZapIcon
  },
  {
    title: 'Personalized Assistance',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    icon: TargetIcon
  },
  {
    title: 'Seamless Integration',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    icon: LinkIcon
  }
]
</script>

<template>
  <div>
    <div class="absolute top-0 left-0 w-full h-full -z-1">
      <VVanta :options="options" effect="net" class="h-full" />
    </div>
    <!-- Hero Section -->
    <section class="h-full min-h-screen flex flex-row justify-center items-start">
      <div class="flex flex-col justify-center items-center">
        <h1 class="text-9xl font-bold mt-24">
          Timothée Lafay
        </h1>
        <div class="py-16 gap-2 flex flex-row">
          <button class="bg-blue-600 hover:bg-blue-600/90 text-white px-8 py-3 rounded-full text-lg transition-colors flex items-center mx-auto space-x-2">
            <span>Mes expériences</span>
          </button>
          <button class="bg-gray-700 hover:bg-gray-700/90 text-white px-8 py-3 rounded-full text-lg transition-colors flex items-center mx-auto space-x-2">
            <span>Mes projets</span>
          </button>
        </div>
      </div>
    </section>
    <!-- Features Section -->
    <section class="px-6 py-24 relative">
      <div class="">
        <h2 class="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          Meet Your AI Assistant
        </h2>
        <p class="text-gray-400 text-center mb-16 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="feature in features"
               :key="feature.title"
               class="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl hover:bg-gray-800/70 transition-colors">
            <div class="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
              <component :is="feature.icon" class="w-6 h-6 text-blue-500" />
            </div>
            <h3 class="text-xl font-semibold text-white mb-3">{{ feature.title }}</h3>
            <p class="text-gray-400">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>