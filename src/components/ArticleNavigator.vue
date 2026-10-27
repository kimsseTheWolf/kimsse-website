<script setup>
import Divider from './ui/Divider.vue';
import LinkButton from './ui/LinkButton.vue';

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
        type: Object,
        default: {}
    }
})
</script>
<template>
    <div class="article-navigator-container">
        <div class="container-title">On this page</div>
        <Divider/>
        <LinkButton>01 / Introduction</LinkButton>
        <LinkButton>02 / Backgorunds</LinkButton>
        <LinkButton>03 / Procedures</LinkButton>
        <LinkButton>04 / Data & Analysis</LinkButton>
        <LinkButton>05 / Conclusion</LinkButton>
    </div>
</template>
<style lang="css" scoped>
.article-navigator-container {
    display: flex;
    flex-direction: column;
    width: 300px;
    height: fit-content;
    padding: var(--space-10);
    gap: var(--space-10);

    font-family: var(--font-family-mono);
    font-size: var(--font-size-16);
}

.container-title {
    font-weight: var(--font-weight-bold);
}
</style>