<script setup>
import HeaderFooterContainer from './ui/HeaderFooterContainer.vue';
import LinkButton from './ui/LinkButton.vue';
</script>
<template>
    <HeaderFooterContainer class="footer">
        <template #Left>
            <div style="color: var(--color-gray-500);">© kimsseTheWolf</div>
            <LinkButton link="https://github.com/kimsseTheWolf/kimsse-website"> GITHUB</LinkButton>
            <!-- <LinkButton> YTB</LinkButton>
            <LinkButton> INSTAGRAM</LinkButton> -->
        </template>
        <template #Right>
            <div></div>
        </template>
    </HeaderFooterContainer>
</template>
<style lang="css" scoped>
.footer {
    margin-top: auto;
}
</style>