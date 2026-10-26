<script setup>
import Divider from './ui/Divider.vue';

const props = defineProps({
    cover: {
        type: String,
        default: ""
    },
    title : {
        type: String,
        default: "Project"
    },
    description: {
        type: String,
        default: "This is my amazing project!"
    },
    releaseYear: {
        type: Number,
        default: 2026
    },
    tags: {
        type: Array,
        default: []
    }
})
</script>
<template>
    <div class="project-card-container">
        <div class="project-card-cover-container">
            <img src=""/>
        </div>
    </div>
    <Divider :color="'transparent'"/>
    <div class="tags"></div>
    <div class="title"></div>
    <div class="description"></div>
</template>
<style lang="css" scoped>
.project-card-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-width: 0;
    gap: var(--space-10);
    margin: 0;
    padding: 0;
    background-color: var(--color-gray-500);
}
.project-card-cover-container {
    width: 100%;
    aspect-ratio: 16/10;
    overflow: hidden;
}

.project-card-cover-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.tags {
    font-family: var(--font-family-mono);
    font-size: var(--font-size-12);
    color: var(--color-gray-500);
}

.title {
    font-family: var(--font-family-mono);
    font-size: var(--font-size-24);
    font-weight: var(--font-weight-extra-bold);
}

.description {
    font-family: var(--font-family-mono);
    font-size: var(--font-size-16);
}
</style>