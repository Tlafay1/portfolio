// https://vitepress.dev/guide/custom-theme
import { h } from 'vue';
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import VNetworkGraph from 'v-network-graph';
import VueGtag from 'vue-gtag-next';

import CookieConsent from '@components/CookieConsent.vue';

import 'v-network-graph/lib/style.css';
import './style.css';

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'layout-bottom': () => h(CookieConsent),
    });
  },
  enhanceApp({ app }) {
    app.use(VNetworkGraph);
    // Désactivé par défaut : activé uniquement après consentement (CookieConsent).
    app.use(VueGtag, {
      isEnabled: false,
      property: { id: 'G-L6CJHN29W7' },
    });
  },
} satisfies Theme;
