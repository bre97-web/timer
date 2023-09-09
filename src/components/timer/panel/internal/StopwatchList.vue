<template>
    <GridLayout class="gap-4">
        <div v-for="e in stopwatches.getStopwatchEvents" :key="e.id" class="rounded-3xl p-4 relative min-w-min">
            <md-ripple></md-ripple>
            <md-elevation></md-elevation>

            <DisplayLarge class="select-none">{{ (e.value as number).toFixed(2) }}</DisplayLarge>

            <div class="flex flex-wrap gap-1">
                <md-filled-tonal-button @click="e.start">Run</md-filled-tonal-button>
                <md-filled-tonal-button @click="e.pause">Pause</md-filled-tonal-button>
                <md-filled-tonal-button @click="e.continue">Continue</md-filled-tonal-button>
            </div>

            <ExpandLayout class="space-y-2">
                <template v-slot:action="{ isExpanded, setIsExpanded }">
                    <FlexLayout class="justify-end">
                        <md-icon-button @click="setIsExpanded(!isExpanded)">
                            <md-icon>{{ isExpanded ? 'expand_less' : 'expand_more' }}</md-icon>
                        </md-icon-button>
                    </FlexLayout>
                </template>
                <template v-slot:expanded-content="{ isExpanded }">
                    <FlexLayout class="gap-1 flex-wrap justify-end" v-show="isExpanded">
                        <md-text-button @click="stopwatches.remove(e, TimerTypes.STOPWATCH)">
                            Remove
                            <md-icon slot="icon">delete</md-icon>
                        </md-text-button>
                    </FlexLayout>
                </template>
            </ExpandLayout>
        </div>
    </GridLayout>
</template>

<script setup lang="ts">
import { TimerTypes, useTimerStore } from '@/store/TimerStore';

const stopwatches = useTimerStore()

</script>
