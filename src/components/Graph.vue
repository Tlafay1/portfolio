<script setup lang="ts">
import { toRefs, reactive, watch } from 'vue';
import { defineConfigs, EventHandlers, Node, Edge } from 'v-network-graph';
import {
    ForceLayout,
    ForceNodeDatum,
    ForceEdgeDatum,
} from "v-network-graph/lib/force-layout";
import { useData, useRoute, useRouter, withBase } from 'vitepress';

const { isDark } = useData();

const configs = reactive(
    defineConfigs({
        view: {
            scalingObjects: true,
            minZoomLevel: 0.5,
            maxZoomLevel: 5,
            layoutHandler: new ForceLayout({
                positionFixedByDrag: false,
                createSimulation: (d3, nodes, edges) => {
                    const forceLink = d3.forceLink<ForceNodeDatum, ForceEdgeDatum>(edges).id(d => d.id)
                    return d3
                        .forceSimulation(nodes)
                        .force("edge", forceLink.distance(100))
                        .force("charge", d3.forceManyBody())
                        .force("collide", d3.forceCollide(100).strength(0.1))
                        .force("center", d3.forceCenter().strength(0.05))
                        .alphaMin(0.001)
                }
            }),
        },
        node: {
            normal: {
                color: node => node.color || "blue",
                radius: node => node.size,
            },
            hover: {
                color: node => node.color || "blue",
                radius: node => node.hover === undefined || node.hover === true ? node.size * 1.2 : node.size,
            },
            label: {
                color: isDark.value ? "white" : "black",
            },
        },
        edge: {
            normal: {
                color: "gray",
            },
        },
    })
);

watch(isDark, (newVal) => {
    configs.node.label.color = newVal ? "white" : "black";
});

const capitalize = <T extends string>(s: T) => (s[0].toUpperCase() + s.slice(1)) as Capitalize<typeof s>;

const props = defineProps({
    projects: Array
});

const { projects } = toRefs(props);

const nodes: Record<string, Node> = {};

if (!projects?.value) {
    throw new Error("Projects are required");
}

for (let project of projects.value.filter((project) => project.frontmatter.title !== undefined)) {
    nodes[capitalize(project.frontmatter.title)] = {
        name: capitalize(project.frontmatter.title),
        color: "blue",
        url: project.url,
        size: 10,
    };
}

const tagArrays: [][] = projects.value
    .filter((obj) => obj.frontmatter.tags !== undefined) // Filter objects with arrays
    .map((obj) => obj.frontmatter.tags!); // Extract and map the arrays

const tags = tagArrays.reduce((acc, currentArr) => {
    return [...new Set([...acc, ...currentArr])];
}, [] as unknown[]);

for (let tag of tags) {
    nodes[capitalize(tag.toString())] = {
        name: capitalize(tag.toString()),
        color: "red",
        size: 10,
        hover: false
    };
}

const edges: Record<string, Edge> = {};

for (let project of projects.value) {
    if (project.frontmatter.tags) {
        for (let tag of project.frontmatter.tags) {
            nodes[capitalize(project.frontmatter.title)].size += 2;
            nodes[capitalize(tag.toString())].size += 2;
            edges[`${project.frontmatter.title}-${tag}`] = {
                source: capitalize(project.frontmatter.title),
                target: capitalize(tag.toString()),
            };
        }
    }
}

const router = useRouter();
const route = useRoute();

const eventHandlers: EventHandlers = {
    "node:click": ({ node }) => {
        if (nodes[node].url)
            router.go(withBase(nodes[node].url));
    },
}
</script>

<template>
    <v-network-graph class="graph" :nodes="nodes" :edges="edges" :configs="configs" :event-handlers="eventHandlers" />
    <div id="legend" class="legend">
        <span class="legend-item">
            <span class="blue-dot"></span>
            <span>Projet (clickable)</span>
        </span>
        <span class="legend-item">
            <span class="red-dot"></span>
            <span>Tag</span>
        </span>
    </div>
</template>

<style scoped>
.graph {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

#legend {
    position: fixed;
    bottom: 100px;
    right: 10px;
    padding: 5px 10px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    font-size: 0.8rem;
}

.legend-item {
    display: flex;
    align-items: center;
    gap: 5px;
}

.red-dot,
.blue-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
}

.red-dot {
    background-color: red;
}

.blue-dot {
    background-color: blue;
    cursor: pointer;
    /* Make the blue node clickable */
}
</style>