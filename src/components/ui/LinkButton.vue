<template>
    <div class="link-btn">
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
}

.link-btn::after {
    content: "";
    display: inline-block;
    opacity: 0;
    transform: translateX(-10);
    transition: all 0.1s;
}

.link-btn:hover::after {
    opacity: 1;
    transform: translateX(0);
}

.link-btn:active::after {
    scale: 0.9;
}
</style>