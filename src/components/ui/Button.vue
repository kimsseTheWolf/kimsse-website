<script setup>
import { computed } from 'vue';

const props = defineProps({
    inline: {
        type: Boolean,
        default: false
    },
    href: {
        type: String,
        default: ""
    }
})

const emit = defineEmits(["click"])

const displayMode = computed(() => {
    if (props.inline) {
        return "inline-flex"
    }
    else {
        return "flex"
    }
})

const showLinkNotBtn = computed(() => {
    if (props.href === undefined || props.href === "") {
        return false
    }
    else {
        return true
    }
})

function handleClick() {
    if (showLinkNotBtn.value) {
        window.location.href = props.href
    }
    else {
        emit("click")
    }
}
</script>
<template>
    <div class="button-container" @click="handleClick">
        <slot></slot>
    </div>
</template>
<style scoped>
.button-container {
    display: v-bind("displayMode");
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-top: 10px;
    cursor: pointer;
    user-select: none;

    border-style: solid;
    border-width: 2px;
    border-color: var(--color-gray-700);

    font-family: var(--font-family-mono);

    transition: all 0.1s;
}

.button-container:hover {
    border-color: black;
    background-color: rgba(0, 0, 0, 0.05);
}

.button-container:active {
    scale: 0.95;
}
</style>