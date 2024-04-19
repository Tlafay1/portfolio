// https://vitepress.dev/guide/custom-theme
import { h } from 'vue';
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import VNetworkGraph from "v-network-graph";
import VueGtag from "vue-gtag-next";

import "v-network-graph/lib/style.css";
import './style.css';

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {})
  },
  enhanceApp({ app, router, siteData }) {
    app.use(VNetworkGraph);
    app.use(VueGtag, {
      isEnabled: true,
      property: { id: "G-L6CJHN29W7" }
    })
  }
} satisfies Theme
