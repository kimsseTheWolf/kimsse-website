<template>
    <div class="project-grid-container">
        <slot></slot>
    </div>
</template>
<style lang="css" scoped>
.project-grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 400px), 1fr));
    column-gap: 25px;
    row-gap: 60px;

    margin: 0;
    padding: 0;
    width: 100%;
    height: fit-content;
}
</style>