<script setup>
import ProjectcCard from './ProjectcCard.vue';
</script>
<template>
    <div class="project-grid-container">
        <ProjectcCard/>
    </div>
</template>
<style lang="css" scoped>
.project-grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 280px), 1fr));
    column-gap: 25px;
    row-gap: 60px;

    margin: 0;
    padding: 0;
    width: 100%;
    height: fit-content;
}
</style>