<template>
    <div class="header-container">
        <div class="header-panels">
            <slot name="Left"></slot>
        </div>
        <div class="header-panels">
            <slot name="Right"></slot>
        </div>
    </div>
</template>
<style scoped>
.header-container {
    display: flex;
    flex-direction: row;
    padding-left: var(--space-100);
    padding-right: var(--space-100);
    padding-top: var(--space-15);
    padding-bottom: var(--space-15);
    margin: var(--space-0);
    justify-content: space-between;
    align-items: center;

    font-family: var(--font-family-mono);
    font-size: var(--font-size-12);
}

.header-panels {
    display: flex;
    flex-direction: row;
    gap: var(--space-20);
    height: 100%;
    align-items: center;
}

@media (max-width: 767px) {
    .header-container {
        padding-left: var(--space-20);
        padding-right: var(--space-20);
    }
}
</style>