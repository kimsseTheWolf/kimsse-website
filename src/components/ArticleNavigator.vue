<script setup>
import Divider from './ui/Divider.vue';
import LinkButton from './ui/LinkButton.vue';

import { computed } from 'vue';

/**
 * [
  { depth: 1, slug: "my-project", text: "My Project" },
  { depth: 2, slug: "introduction", text: "Introduction" },
  { depth: 2, slug: "design", text: "Design" },
  { depth: 3, slug: "ui-design", text: "UI Design" },
  { depth: 3, slug: "architecture", text: "Architecture" },
  { depth: 2, slug: "implementation", text: "Implementation" },
  { depth: 2, slug: "conclusion", text: "Conclusion" }
]
 */

const props = defineProps({
    structure: {
        type: Array,
        default: [
            { depth: 1, slug: "my-project", text: "My Project" },
            { depth: 2, slug: "introduction", text: "Introduction" },
            { depth: 2, slug: "design", text: "Design" },
            { depth: 3, slug: "ui-design", text: "UI Design" },
            { depth: 3, slug: "architecture", text: "Architecture" },
            { depth: 2, slug: "implementation", text: "Implementation" },
            { depth: 2, slug: "conclusion", text: "Conclusion" }
        ]
    }
})

const processedList = computed(() => {
    let displayList = []
    for (let i = 0; i < props.structure.length; i++) {
        if (props.structure[i].depth < 3) {
            displayList.push(props.structure[i])
        }
    }

    return displayList
})

function goto(link) {
    window.location.href = link
}
</script>
<template>
    <div class="article-navigator-container">
        <div class="container-title">On this page</div>
        <Divider/>
        <LinkButton v-for="i in processedList" @click="goto('#'+i.slug)">{{ i.text }}</LinkButton>
    </div>
</template>
<style lang="css" scoped>
.article-navigator-container {
    display: flex;
    flex-direction: column;
    width: 300px;
    height: fit-content;
    padding: var(--space-0);
    padding-top: var(--space-10);
    gap: var(--space-10);

    font-family: var(--font-family-mono);
    font-size: var(--font-size-16);

    position: sticky;
    top: 60px;
    align-self: start;
}

.container-title {
    font-weight: var(--font-weight-bold);
}
</style>