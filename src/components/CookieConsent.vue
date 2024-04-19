<script setup lang="ts">
import { ref, Ref, computed } from 'vue';
import { useState, isTracking } from "vue-gtag-next";

console.info('Loading cookie consent');

const cookieName = 'user_cookie_consent';

const hasConsented: Ref<boolean> = ref(null);

const { isEnabled } = useState();

const getCookie = () => {
    const cookieValue = localStorage.getItem(cookieName);
    if (cookieValue !== null)
        hasConsented.value = cookieValue === 'accepted';
};

const setCookie = (value) => {
    localStorage.setItem(cookieName, value);
    hasConsented.value = value === 'accepted';
};

const showBanner = computed(() => hasConsented.value === null);

const acceptCookies = () => {
    isEnabled.value = true;
    console.log(isTracking.value);
    setCookie('accepted');
};

const declineCookies = () => {
    isEnabled.value = false;
    console.log(isTracking.value);
    setCookie('declined');
};

getCookie();

</script>

<template>
    <div v-if="showBanner" class="cookie-banner">
        <p>Ce site utilise google analytics afin d'analyser le trafic de ce site et de comprendre la provenance de nos
            visiteurs..</p>
        <div class="buttons">
            <button @click="acceptCookies">Accept</button>
            <button @click="declineCookies">Decline</button>
        </div>
    </div>
</template>

<style scoped>
.cookie-banner {
    /* Add your styles here */
    background-color: #f1f1f1;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.buttons {
    display: flex;
    gap: 1rem;
}
</style>
