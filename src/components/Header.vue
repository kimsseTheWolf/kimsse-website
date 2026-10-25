<script setup>
import HeaderFooterContainer from './ui/HeaderFooterContainer.vue';
import LinkButton from './ui/LinkButton.vue';
</script>
<template>
    <HeaderFooterContainer>
        <template #Left>
            <div class="link-btn" style="color: var(--color-gray-500);">[KIMSSETHEWOLF/]</div>
        </template>
        <template #Right>
            <LinkButton class="desktop-nav">WORKS</LinkButton>
            <LinkButton class="desktop-nav">RESEARCH</LinkButton>
            <LinkButton class="desktop-nav">ABOUT</LinkButton>
            <LinkButton class="desktop-nav">CONTACT</LinkButton>
            <div class="link-btn mobile-nav" style="font-size: var(--font-size-24);"></div>
        </template>
    </HeaderFooterContainer>
    <div class="expand-header"></div>
</template>
<style scoped>
.desktop-nav {
    display: inline-flex;
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

.expand-header {
    position: absolute;
    top: 0;
    left: 0;
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