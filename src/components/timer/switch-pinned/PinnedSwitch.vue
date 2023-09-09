<template>
    <md-filled-icon-button toggle ref="switchRef" @click="props.e.isPinned = !props.e.isPinned">
        <md-icon>push_pin</md-icon>
    </md-filled-icon-button>
</template>

<script setup lang="ts">
import { EventPackage } from '@/store/TimerStore';
import { ref, onMounted } from 'vue'

const props = defineProps<{
    e: EventPackage
}>()

const switchRef = ref()

onMounted(() => {
    switchRef.value.selected = props.e.isPinned
})
</script>
