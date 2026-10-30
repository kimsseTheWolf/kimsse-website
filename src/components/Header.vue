
<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';

import HeaderFooterContainer from './ui/HeaderFooterContainer.vue';
import LinkButton from './ui/LinkButton.vue';

const isMenuOpen = ref(false);
const isHeaderHidden = ref(false);
const scrollY = ref(0);
let lastScrollY = 0;
const SCROLL_THRESHOLD = 5;

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

const handleScroll = () => {
    const currentScrollY = window.scrollY;
    scrollY.value = currentScrollY;

    if (isMenuOpen.value || currentScrollY <= 0) {
        isHeaderHidden.value = false;
        lastScrollY = Math.max(currentScrollY, 0);
        return;
    }

    const delta = currentScrollY - lastScrollY;
    if (Math.abs(delta) <= SCROLL_THRESHOLD) return;

    isHeaderHidden.value = delta > 0;
    lastScrollY = currentScrollY;
};

watch(isMenuOpen, (open) => {
    if (open) isHeaderHidden.value = false;
});

onMounted(() => {
    lastScrollY = window.scrollY;
    scrollY.value = window.scrollY;
    window.addEventListener('scroll', handleScroll, { passive: true });
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});

function goto(link) {
    window.location.href = link
}
</script>

<template>
    <div class="header-wrapper" :class="{ hidden: isHeaderHidden, 'scrolled': scrollY > 0 }">
    <HeaderFooterContainer>
        <template #Left>
            <div class="link-btn" style="color: var(--color-gray-500);" @click="goto('/')">
                [KIMSSETHEWOLF/]
            </div>
        </template>

        <template #Right>
            <LinkButton class="desktop-nav" link="/works">WORKS</LinkButton>
            <LinkButton class="desktop-nav" link="/research">RESEARCH</LinkButton>
            <!-- <LinkButton class="desktop-nav">ABOUT</LinkButton>
            <LinkButton class="desktop-nav">CONTACT</LinkButton> -->

            <button
                class="link-btn mobile-nav"
                type="button"
                :aria-expanded="isMenuOpen"
                aria-controls="mobile-header-menu"
                aria-label="Toggle menu"
                @click="toggleMenu"
            >
                
            </button>
        </template>
    </HeaderFooterContainer>

    <div
    class="expand-wrapper"
    :class="{ open: isMenuOpen }"
    :inert="!isMenuOpen"
>
    <div class="expand-header">

        <LinkButton link="/works" class="mobile-menu-item" style="--i: 0; --reverse-i: 3">
            WORKS
        </LinkButton>

        <LinkButton link="/research" class="mobile-menu-item" style="--i: 1; --reverse-i: 2">
            RESEARCH
        </LinkButton>

        <!-- <LinkButton class="mobile-menu-item" style="--i: 2; --reverse-i: 1">
            ABOUT
        </LinkButton>

        <LinkButton class="mobile-menu-item" style="--i: 3; --reverse-i: 0">
            CONTACT
        </LinkButton> -->
    </div>
</div>
    </div>
</template>

<style scoped>
.header-wrapper {
    position: sticky;
    top: 0;
    z-index: 100;

    width: 100%;
    background-color: var(--color-paper);

    transform: translateY(0);
    transition: transform 300ms ease;

    border-bottom: 1px solid transparent;
}

.header-wrapper.scrolled {
    border-bottom-color: var(--color-gray-500);
}

.header-wrapper.hidden {
    transform: translateY(-100%);
}

@media (prefers-reduced-motion: reduce) {
    .header-wrapper {
        transition: none;
    }
}

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

/* ==========================
   Expand animation
   ========================== */

.expand-wrapper {
    display: grid;
    grid-template-rows: 0fr;

    visibility: hidden;
    transition:
        grid-template-rows 300ms ease 420ms,
        visibility 0s linear 720ms;
}

.expand-wrapper.open {
    grid-template-rows: 1fr;
    visibility: visible;

    transition:
        grid-template-rows 300ms ease,
        visibility 0s;
}

.expand-header {
    display: flex;
    flex-direction: column;
    gap: var(--space-20);

    min-height: 0;
    overflow: hidden;
    box-sizing: border-box;

    font-family: var(--font-family-mono);
    font-size: var(--font-size-12);

    border-top: 1px solid var(--color-gray-500);
    border-bottom: 1px solid var(--color-gray-500);

    padding: 0 var(--space-100);
    margin: 0;
}

/* Animate padding alongside height */
.expand-wrapper.open .expand-header {
    padding-top: var(--space-15);
    padding-bottom: var(--space-15);
}

.expand-header {
    transition: padding 300ms ease;
}

/* ==========================
   Items animation
   ========================== */

.menu-label,
.mobile-menu-item {
    opacity: 0;
    transform: translateY(-10px);

    transition:
        opacity 180ms ease,
        transform 180ms ease;

    transition-delay: calc(var(--reverse-i) * 60ms);

    font-size: var(--font-size-32);
    font-weight: var(--font-weight-bold);
}

.expand-wrapper.open .menu-label,
.expand-wrapper.open .mobile-menu-item {
    opacity: 1;
    transform: translateY(0);

    transition-delay: calc(300ms + var(--i) * 60ms);
}

/* ==========================
   Responsive
   ========================== */

@media (max-width: 767px) {
    .desktop-nav {
        display: none;
    }

    .mobile-nav {
        display: inline-flex;
        align-items: center;

        font-size: var(--font-size-24);

        background: none;
        border: none;
        padding: 0;
        color: inherit;
        font-family: inherit;
    }
}

@media (min-width: 768px) {
    .expand-wrapper {
        display: none;
    }
}

@media (prefers-reduced-motion: reduce) {
    .expand-wrapper,
    .expand-header,
    .menu-label,
    .mobile-menu-item {
        transition-duration: 0s !important;
        transition-delay: 0s !important;
    }
}
</style>
