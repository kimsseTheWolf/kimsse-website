<script setup>
import HeaderFooterContainer from './ui/HeaderFooterContainer.vue';
</script>
<template>
    <HeaderFooterContainer>
        <template #Left>
            <div class="link-btn" style="color: var(--color-gray-500);">[KIMSSETHEWOLF/]</div>
        </template>
        <template #Right>
            <div class="link-btn desktop-nav">WORKS</div>
            <div class="link-btn desktop-nav">RESEARCH</div>
            <div class="link-btn desktop-nav">ABOUT</div>
            <div class="link-btn desktop-nav">CONTACT</div>
            <div class="link-btn mobile-nav" style="font-size: var(--font-size-24);"></div>
        </template>
    </HeaderFooterContainer>
</template>
<style scoped>
.desktop-nav {
    display: block;
}

.mobile-nav {
    display: none;
}

.link-btn {
    user-select: none;
    transition: all 0.1s;
}

.link-btn:hover {
    cursor: pointer;
    text-decoration: underline;
}

.link-btn:active {
    scale: 0.9;
    color: var(--color-gray-500);
}

@media (max-width: 767px) {
    .desktop-nav {
        display: none;
    }

    .mobile-nav {
        display: block;
    }
}
</style>