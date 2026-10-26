<script setup>
import { ref } from 'vue';

const props = defineProps({
    color: {
        type: String,
        default: "var(--color-black)"
    }
})
</script>
<template>
    <div class="divider">
        &nbsp;
    </div>
</template>
<style lang="css" scoped>
.divider {
    user-select: none;
    padding: 0;
    margin: 0;
    width: 100%;
    height: 1px;
    background-color: v-bind('props.color');
}
</style>