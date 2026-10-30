<script setup>
import MarqueeText from './ui/MarqueeText.vue';

</script>
<template>
    <div class="audio-player-container">
        <div class="cover-image-container">

        </div>
        <div class="metadata-container">
            <MarqueeText class="title" text="Very Longggggggggg Tittttttttttttle Longggggggggg Tittttttttttttle"/>
            <div class="artist-and-length">
                <div class="artist">zWeird Artist</div>
                <div class="length">01:23 / 04:56</div>
            </div>
            <input class="progress-bar" type="range" min="0" max="100" value="0" step="1"/>
        </div>
        <div class="pause-container">
            <div class="pause-btn"></div>
        </div>
    </div>
</template>
<style lang="css" scoped>
.audio-player-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: var(--space-10);
    padding: var(--space-10);
    margin: 0;

    font-family: var(--font-family-sans);
    user-select: none;

    transition: all 0.1s;
}

.audio-player-container:hover {
    background-color: rgba(0, 0, 0, 0.01);
}

.cover-image-container {
    background-color: var(--color-gray-500);
    width: 75px;
    min-width: 75px;
    height: 75px;
}

.metadata-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: var(--space-5);
    flex: auto;
    min-width: 0;
}

.title {
    font-weight: var(--font-weight-bold);
}

.artist-and-length {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    margin-top: var(--space-3);
}

.progress-bar {
    appearance: none;
    -webkit-appearance: none;

    height: var(--space-5);
    background: #d9d9d9;
    cursor: pointer;

    --progress: 30%;
    background: linear-gradient(
        to right,
        black 0%,
        black var(--progress),
        #d9d9d9 var(--progress),
        #d9d9d9 100%
    );
}

.progress-bar::-webkit-slider-runnable-track {
    height: 5px;
    background: transparent;
}

.progress-bar::-webkit-slider-thumb {
    appearance: none;
    height: var(--space-10);
    aspect-ratio: 1/1;
    border-radius: 50%;
    background-color: transparent;
    margin-top: -2px;
    transition: all 0.1s;
}

.progress-bar::-webkit-slider-thumb:hover {
    background-color: black;
}

.pause-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: var(--space-10);
}

.pause-btn {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: var(--space-10);
    height: 25%;
    aspect-ratio: 1/1;
    border-radius: 50%;
    font-family: var(--font-family-mono);
    font-size: var(--font-size-16);
    transition: all 0.1s;
    cursor: pointer;
}

.pause-btn:hover {
    background-color: rgba(0, 0, 0, 0.04);
}

.pause-btn:active {
    scale: 0.9;
}
</style>