<script setup>
</script>
<template>
    <div class="project-card-container">
        <div class="project-card-cover-container">
            <img src=""/>
        </div>
    </div>
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
</style>