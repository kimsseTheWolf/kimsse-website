<script setup lang="ts">
import { computed, ref } from 'vue';
import MarqueeText from './ui/MarqueeText.vue';

const props = defineProps({
    src: {
        type: String,
        default: ""
    },
    title: {
        type: String,
        default: "No Audio Playing"
    },
    artist: {
        type: String,
        default: "Unknown Artist"
    },
    cover: {
        type: String,
        default: ""
    }
})

const audio = ref<HTMLAudioElement | null>(null)

const currentCover = computed(() => {
    if (props.cover === undefined || props.cover === "") {
        return `url(https://images.pexels.com/photos/20385072/pexels-photo-20385072.jpeg)`
    }
    else {
        return `url(${props.cover})`
    }
})

const pauseBtnText = ref("")

async function togglePlayStatus() {
    if (audio.value?.paused) {
        await audio.value?.play()
    }
    else {
        audio.value?.pause()
    }
}

function updatePlayStatus() {
    if (audio.value?.paused) {
        pauseBtnText.value = ""
    }
    else {
        pauseBtnText.value = ""
    }
}

const currentTime = ref(0)
const duration = ref(0)
const isDragging = ref(false)

function updateDuration() {
    if (!audio.value) return

    console.log("Duration:", audio.value.duration)
    console.log("ReadyState:", audio.value.readyState)
    console.log("Seekable:", audio.value.seekable.length)

    const d = audio.value.duration
    duration.value = Number.isFinite(d) ? d : 0
}

function updateProgress() {
    if (!audio.value) return

    const d = audio.value.duration

    if (Number.isFinite(d) && d > 0) {
        duration.value = d
    }

    if (isDragging.value) return

    currentTime.value = audio.value.currentTime
}

function startDragging() {
    isDragging.value = true
}

function onSliderInput(event: Event) {
    const target = event.target as HTMLInputElement
    currentTime.value = target.valueAsNumber
}

function commitProgress() {
    if (audio.value && duration.value > 0) {
        audio.value.currentTime = currentTime.value
    }

    isDragging.value = false
}

function cancelDragging() {
    isDragging.value = false
    updateProgress()
}

function formatTime(seconds: number): string {
    if (!Number.isFinite(seconds)) return "00:00"

    const minutes = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)

    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`
}

const currentTimePercent = computed(() => {
    if (duration.value <= 0) return "0%"

    return `${Math.min(100, Math.max(0, currentTime.value / duration.value * 100))}%`
})

</script>
<template>
    <audio :src="props.src" preload="metadata" ref="audio"
    @play="updatePlayStatus" @pause="updatePlayStatus" @ended="updatePlayStatus"
    @loadedmetadata="updateDuration" @durationchange="updateDuration" @timeupdate="updateProgress"/>
    <div class="audio-player-container">
        <div class="cover-image-container">
            
        </div>
        <div class="metadata-container">
            <MarqueeText class="title" text="Very Longggggggggg Tittttttttttttle Longggggggggg Tittttttttttttle"/>
            <div class="artist-and-length">
                <div class="artist">Artist</div>
                <div class="length">{{ formatTime(currentTime) }} / {{ formatTime(duration) }}</div>
            </div>
            <input
                class="progress-bar"
                type="range"
                min="0"
                :max="duration || 0"
                step="0.01"
                :value="currentTime"
                :disabled="duration <= 0"
                @pointerdown="startDragging"
                @input="onSliderInput"
                @change="commitProgress"
                @pointercancel="cancelDragging"
            />
        </div>
        <div class="pause-container">
            <div class="pause-btn" @click="togglePlayStatus">{{ pauseBtnText }}</div>
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
    background-image: v-bind("currentCover");
    width: 75px;
    min-width: 75px;
    height: 75px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
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

    --progress: v-bind("currentTimePercent");
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