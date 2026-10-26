<!-- Note this is a test file. It is used to generate bunch of non-sense text for layout testing -->
<script setup lang="ts">
import { onMounted, ref } from "vue";

type Section = { title: string; paragraphs: string[][] };

const WORDS =
    "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat duis aute irure in reprehenderit voluptate velit esse cillum fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt culpa qui officia deserunt mollit anim id est laborum".split(
        " ",
    );

const randInt = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

const makeWords = (count: number) =>
    Array.from({ length: count }, () => WORDS[randInt(0, WORDS.length - 1)]);

const makeSentence = () => {
    const words = makeWords(randInt(6, 20));
    if (words.length > 8 && Math.random() < 0.5) {
        words[randInt(3, words.length - 3)] += ",";
    }
    return capitalize(words.join(" ")) + ".";
};

// Random content is generated only on the client after mount, so SSR and
// hydration output always match (the initial render is empty).
const sections = ref<Section[]>([]);

onMounted(() => {
    const sectionCount = randInt(5, 10); // how many <div>
    sections.value = Array.from({ length: sectionCount }, () => ({
        title: capitalize(makeWords(randInt(2, 6)).join(" ")),
        paragraphs: Array.from({ length: randInt(3, 8) }, () => // how many <p>
            Array.from({ length: randInt(3, 9) }, makeSentence), // how many <span>
        ),
    }));
});
</script>
<template>
    <div class="infinite-printer">
        <h1>Wow this is a title</h1>
        <div v-for="(section, i) in sections" :key="i">
            <h2>{{ section.title }}</h2>
            <p v-for="(sentences, j) in section.paragraphs" :key="j">
                <span v-for="(sentence, k) in sentences" :key="k">{{ sentence }} </span>
            </p>
        </div>
    </div>
</template>
<style scoped>
.infinite-printer {
    font-family: Inter;
}
</style>