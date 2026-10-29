<script setup lang="ts">
import { computed } from 'vue';
import ProjectCard from './ProjectCard.vue';


const props = defineProps({
    projects: {
        type: Array<{
            id: string,
            body?: string,
            collection: any,
            data: any,
            rendered?: any,
            filePath?: string,
            digest?: string | number,
        }>, 

        default: []
    }
})

const projectList = computed(() => {
    const p = props.projects.map((entry) => ({
        ...entry,
        href: '/works/' + entry.id
    }))

    return p
})

function goto(link:string) {
    window.location.href = link
}

</script>
<template>
    <div class="project-grid-container">
        <ProjectCard v-for="i in projectList"
            cover="https://images.pexels.com/photos/4253058/pexels-photo-4253058.jpeg"
            :title="i.data.title"
            :description="i.data.description"
            :releaseYear="i.data.date.getFullYear()"
            :tags="i.data.tags"
            @click="goto(i.href)"
        />
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