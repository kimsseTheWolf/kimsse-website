<script setup>
import HeaderFooterContainer from './ui/HeaderFooterContainer.vue';
import LinkButton from './ui/LinkButton.vue';
</script>
<template>
    <HeaderFooterContainer>
        <template #Left>
            <div>BJ_2026</div>
            <LinkButton> GITHUB</LinkButton>
            <LinkButton> YTB</LinkButton>
            <LinkButton> INSTAGRAM</LinkButton>
        </template>
        <template #Right>
            <div></div>
        </template>
    </HeaderFooterContainer>
</template>
<style lang="css" scoped>
</style>