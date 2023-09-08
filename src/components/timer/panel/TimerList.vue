<template>
    <div>
        <GridLayout class="gap-4">
            <div v-for="e in stopwatches.getTimerEvents" :key="e" class="rounded-3xl p-4 relative min-w-min" :class="{'error-container on-error-container-text animate-pulse': e.value < 0}">
                <md-ripple></md-ripple>
                <md-elevation></md-elevation>
                <DisplayLarge class="select-none">
                    {{ e.value < 0 ? '-' : '' }}{{ moment({h:moment.duration(Math.abs(e.value), 'seconds').hours(), m: moment.duration(Math.abs(e.value), 'seconds').minutes(), s: moment.duration(Math.abs(e.value), 'seconds').seconds()}).format('HH:mm:ss') }}
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
import moment from 'moment';

const stopwatches = useTimerStore()

</script>

<style scoped>

</style>