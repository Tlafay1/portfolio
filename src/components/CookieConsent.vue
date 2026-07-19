<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useData } from 'vitepress';
import { useState } from 'vue-gtag-next';

const STORAGE_KEY = 'user_cookie_consent';

const { lang } = useData();
const consent = ref<string | null>(null);
const mounted = ref(false);

const { isEnabled } = useState();

const t = computed(() =>
  lang.value === 'en'
    ? {
        message: 'This site uses Google Analytics to measure traffic. No tracking happens unless you accept.',
        accept: 'Accept',
        decline: 'Decline',
      }
    : {
        message: 'Ce site utilise Google Analytics pour mesurer son audience. Aucun suivi sans votre accord.',
        accept: 'Accepter',
        decline: 'Refuser',
      }
);

const showBanner = computed(() => mounted.value && consent.value === null);

const save = (value: 'accepted' | 'declined') => {
  localStorage.setItem(STORAGE_KEY, value);
  consent.value = value;
  isEnabled.value = value === 'accepted';
};

onMounted(() => {
  consent.value = localStorage.getItem(STORAGE_KEY);
  if (consent.value === 'accepted') isEnabled.value = true;
  mounted.value = true;
});
</script>

<template>
  <Transition name="consent">
    <aside v-if="showBanner" class="fixed bottom-4 right-4 left-4 z-50 sm:left-auto sm:max-w-sm" role="dialog" aria-live="polite">
      <div class="rounded-xl border border-zinc-800 bg-zinc-900/95 p-4 shadow-xl backdrop-blur">
        <p class="text-sm text-zinc-300">{{ t.message }}</p>
        <div class="mt-3 flex gap-2">
          <button
            class="rounded-lg bg-teal-600 px-4 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-teal-500"
            @click="save('accepted')"
          >
            {{ t.accept }}
          </button>
          <button
            class="rounded-lg border border-zinc-700 px-4 py-1.5 text-sm font-semibold text-zinc-300 transition-colors hover:bg-zinc-800"
            @click="save('declined')"
          >
            {{ t.decline }}
          </button>
        </div>
      </div>
    </aside>
  </Transition>
</template>

<style scoped>
.consent-enter-active,
.consent-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.consent-enter-from,
.consent-leave-to {
  opacity: 0;
  transform: translateY(0.5rem);
}
</style>
