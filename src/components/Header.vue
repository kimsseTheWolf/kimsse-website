<script setup>
import HeaderFooterContainer from './ui/HeaderFooterContainer.vue';
</script>
<template>
    <HeaderFooterContainer>
        <template #Left>
            <div style="color: var(--color-gray-500);">[KIMSSETHEWOLF/]</div>
        </template>
        <template #Right>
            <div class="desktop-nav">WORKS</div>
            <div class="desktop-nav">RESEARCH</div>
            <div class="desktop-nav">ABOUT</div>
            <div class="desktop-nav">CONTACT</div>
            <div class="mobile-nav" style="font-size: var(--font-size-24);"></div>
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

@media (max-width: 767px) {
    .desktop-nav {
        display: none;
    }

    .mobile-nav {
        display: block;
    }
}
</style>