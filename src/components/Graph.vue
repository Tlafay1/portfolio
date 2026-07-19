<script setup lang="ts">
import { reactive, computed, onMounted, onUnmounted } from 'vue';
import { defineConfigs, EventHandlers, Node, Edge } from 'v-network-graph';
import {
  ForceLayout,
  ForceNodeDatum,
  ForceEdgeDatum,
} from 'v-network-graph/lib/force-layout';
import { useRouter, withBase, useData } from 'vitepress';
import type { ContentItem } from '@composables/projects.data';

const props = defineProps<{ items?: ContentItem[] }>();

const { lang } = useData();
const router = useRouter();

const project_color = 'var(--vp-node-project)';
const tag_color = 'var(--vp-node-tag)';

const t = computed(() =>
  lang.value === 'en'
    ? { node: 'Page (clickable)', tag: 'Technology / topic', hint: 'Click a node to open it · drag to explore' }
    : { node: 'Page (cliquable)', tag: 'Technologie / thème', hint: 'Cliquez un nœud pour l’ouvrir · glissez pour explorer' }
);

const configs = reactive(
  defineConfigs({
    view: {
      scalingObjects: true,
      minZoomLevel: 0.2,
      maxZoomLevel: 5,
      layoutHandler: new ForceLayout({
        positionFixedByDrag: false,
        createSimulation: (d3, nodes, edges) => {
          const forceLink = d3.forceLink<ForceNodeDatum, ForceEdgeDatum>(edges).id((d) => d.id);
          return d3
            .forceSimulation(nodes)
            .force('edge', forceLink.distance(100))
            .force('charge', d3.forceManyBody())
            .force('collide', d3.forceCollide(100).strength(0.1))
            .force('center', d3.forceCenter().strength(0.05))
            .alphaMin(0.001);
        },
      }),
    },
    node: {
      normal: {
        color: (node) => node.color || project_color,
        radius: (node) => node.size,
      },
      hover: {
        color: (node) => node.color || project_color,
        radius: (node) => (node.hover === false ? node.size : node.size * 1.2),
      },
      label: {
        color: 'var(--vp-c-text-1)',
        fontSize: 13,
      },
    },
    edge: {
      normal: {
        color: 'var(--vp-c-divider)',
        width: 1.5,
      },
    },
  })
);

const capitalize = (s: string) => (s ? s[0].toUpperCase() + s.slice(1) : s);

const nodes: Record<string, Node & { url?: string; hover?: boolean }> = {};
const edges: Record<string, Edge> = {};

const items = props.items ?? [];

for (const item of items.filter((i) => i.title)) {
  const key = capitalize(item.title);
  nodes[key] = { name: key, color: project_color, url: item.url, size: 12 };
}

const allTags = [...new Set(items.flatMap((i) => i.tags ?? []))];
for (const tag of allTags) {
  nodes[capitalize(tag)] = { name: capitalize(tag), color: tag_color, size: 9, hover: false };
}

for (const item of items) {
  for (const tag of item.tags ?? []) {
    const p = capitalize(item.title);
    const tg = capitalize(tag);
    if (!nodes[p] || !nodes[tg]) continue;
    nodes[p].size += 2;
    nodes[tg].size += 2;
    edges[`${p}-${tg}`] = { source: p, target: tg };
  }
}

const eventHandlers: EventHandlers = {
  'node:click': ({ node }) => {
    const url = nodes[node]?.url;
    if (url) router.go(withBase(url));
  },
};

// Le graphe prend tout l'écran : on masque le footer et le scroll pendant l'affichage.
onMounted(() => document.documentElement.classList.add('is-graph'));
onUnmounted(() => document.documentElement.classList.remove('is-graph'));
</script>

<template>
  <v-network-graph
    class="graph"
    :nodes="nodes"
    :edges="edges"
    :configs="configs"
    :event-handlers="eventHandlers"
  />
  <div class="legend">
    <p class="legend-hint">{{ t.hint }}</p>
    <span class="legend-item"><span class="dot dot-project"></span>{{ t.node }}</span>
    <span class="legend-item"><span class="dot dot-tag"></span>{{ t.tag }}</span>
  </div>
</template>

<style scoped>
.graph {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.legend {
  position: fixed;
  bottom: 24px;
  right: 24px;
  padding: 14px 16px;
  border-radius: 12px;
  border: 1px solid var(--vp-c-divider);
  background: color-mix(in srgb, var(--vp-c-bg) 80%, transparent);
  backdrop-filter: blur(8px);
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 0.82rem;
  color: var(--vp-c-text-2);
  z-index: 10;
}

.legend-hint {
  margin: 0 0 2px;
  color: var(--vp-c-text-1);
  font-weight: 600;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.dot {
  width: 11px;
  height: 11px;
  border-radius: 50%;
  flex-shrink: 0;
}

.dot-project {
  background-color: var(--vp-node-project);
}

.dot-tag {
  background-color: var(--vp-node-tag);
}
</style>
