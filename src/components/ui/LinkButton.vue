<script setup>

const props = defineProps({
    link: {
        type: String,
        default: ""
    }
})

function goto() {
    window.location.href = props.link
}

</script>
<template>
    <div class="link-btn" @click="goto()">
        <slot></slot>
    </div>
</template>
<style scoped>
.link-btn {
    user-select: none;
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
    transition: all 0.1s;
}

.link-btn::after {
    content: "";
    display: inline-block;
    opacity: 0;
    transform: translateX(-10);
}

.link-btn:hover {
    cursor: pointer;
    text-decoration: underline;
}

.link-btn:hover::after {
    opacity: 1;
    transform: translateX(0);
}

.link-btn:active {
    scale: 0.9;
    color: var(--color-gray-500);
}
</style>