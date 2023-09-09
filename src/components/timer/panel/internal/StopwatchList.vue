<template>
    <GridLayout class="gap-4">
        <div v-for="e in stopwatches.getStopwatchEvents" :key="e.index" class="rounded-3xl p-4 space-y-2 relative min-w-min max-h-min" :class="[e.isPinned ? 'primary-container' : 'surface-variant']">
            <md-ripple></md-ripple>
            <md-elevation></md-elevation>

            <LabelLarge>{{ e.label }}</LabelLarge>
            <DisplayLarge class="select-none">{{ (e.state.num as number).toFixed(2) }}</DisplayLarge>

            <FlexLayout class="flex-wrap gap-1">
                <md-filled-tonal-button @click="e.start">Run</md-filled-tonal-button>
                <md-filled-tonal-button @click="e.pause">Pause</md-filled-tonal-button>
                <md-filled-tonal-button @click="e.continue">Continue</md-filled-tonal-button>
            </FlexLayout>

            <ExpandLayout class="space-y-2">
                <template v-slot:action="{ isExpanded, setIsExpanded }">
                    <FlexLayout class="justify-end">
                        <md-icon-button @click="setIsExpanded(!isExpanded)">
                            <md-icon>{{ isExpanded ? 'expand_less' : 'expand_more' }}</md-icon>
                        </md-icon-button>
                    </FlexLayout>
                </template>
                <template v-slot:expanded-content="{ isExpanded }">
                    <FlexLayout class="gap-1 flex-col md:flex-row flex-wrap items-start md:justify-end" v-show="isExpanded">
                        <md-text-button @click="stopwatches.remove(e, TimerTypes.STOPWATCH)">
                            Remove
                            <md-icon slot="icon">delete</md-icon>
                        </md-text-button>

                        <EditLabelButton :e="e"></EditLabelButton>

                        <IsPinnedSwitch :e="e"></IsPinnedSwitch>
                    </FlexLayout>
                </template>
            </ExpandLayout>

        </div>
    </GridLayout>
</template>

<script setup lang="ts">
import { TimerTypes, useTimerStore } from '@/store/TimerStore';
import EditLabelButton from '@/components/timer/edit-label/EditLabelButton.vue';
import IsPinnedSwitch from '@/components/timer/switch-pinned/IsPinnedSwitch.vue';

const stopwatches = useTimerStore()

</script>
