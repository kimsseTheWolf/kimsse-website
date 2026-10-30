
<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick, watch } from "vue";

const props = defineProps<{
    text: string;
}>();

const container = ref<HTMLElement | null>(null);
const content = ref<HTMLElement | null>(null);

const overflow = ref(false);
const distance = ref(0);

let observer: ResizeObserver | null = null;

function update() {
    if (!container.value || !content.value) return;

    const containerWidth = container.value.clientWidth;
    const contentWidth = content.value.scrollWidth;

    overflow.value = contentWidth > containerWidth;
    distance.value = Math.max(0, contentWidth - containerWidth);
}

onMounted(() => {
    observer = new ResizeObserver(update);

    if (container.value) observer.observe(container.value);
    if (content.value) observer.observe(content.value);

    update();
});

onUnmounted(() => observer?.disconnect());

watch(() => props.text, async () => {
    await nextTick();
    update();
});
</script>

<template>
    <div ref="container" class="marquee-container">
        <div
            ref="content"
            class="marquee-content"
            :class="{ scrolling: overflow }"
            :style="{
                '--distance': `-${distance}px`
            }"
        >
            {{ text }}
        </div>
    </div>
</template>

<style scoped>
.marquee-container {
    width: 100%;
    min-width: 0;
    overflow: hidden;
}

.marquee-content {
    width: max-content;
    white-space: nowrap;
}

.marquee-content.scrolling {
    animation: marquee 8s ease-in-out infinite alternate;
}

@keyframes marquee {
    0%, 15% {
        transform: translateX(0);
    }

    85%, 100% {
        transform: translateX(var(--distance));
    }
}

@media (prefers-reduced-motion: reduce) {
    .marquee-content.scrolling {
        animation: none;
    }
}
</style>
