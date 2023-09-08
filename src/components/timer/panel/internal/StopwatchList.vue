<template>
    <div>
        <GridLayout class="gap-4">
            <div v-for="e in stopwatches.getStopwatchEvents" :key="e" class="rounded-3xl p-4 relative min-w-min">
                <md-ripple></md-ripple>
                <md-elevation></md-elevation>
                <DisplayLarge class="select-none">
                    {{ (e.value as number).toFixed(2) }}
                </DisplayLarge>

                <div class="flex flex-wrap gap-1">
                    <md-filled-tonal-button @click="e.start">Run</md-filled-tonal-button>
                    <md-filled-tonal-button @click="e.pause">Pause</md-filled-tonal-button>
                    <md-filled-tonal-button @click="e.continue">Continue</md-filled-tonal-button>
                </div>
            </div>
        </GridLayout>
    </div>
</template>

<script setup lang="ts">
import { useTimerStore } from '@/store/TimerStore';
import { onMounted } from 'vue';

const stopwatches = useTimerStore()

onMounted(() => {
    // stopwatches.getStopwatchEvents[0]()
})
</script>

<style scoped>

</style>