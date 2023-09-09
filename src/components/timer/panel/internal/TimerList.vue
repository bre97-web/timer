<template>
    <GridLayout class="gap-4">
        <FlexLayout v-for="e in timer.getTimerEvents" :key="e.index" class="rounded-3xl p-4 relative min-w-min flex-col gap-2" :class="{'error-container on-error-container-text animate-pulse': e.state.num < 0}">
            <md-ripple></md-ripple>
            <md-elevation></md-elevation>
            
            <LabelLarge>{{ e.label }}</LabelLarge>
            <DisplayLarge class="select-none">
                {{ e.state.num < 0 ? '-' : '' }}{{ moment({h:moment.duration(Math.abs(e.state.num), 'seconds').hours(), m: moment.duration(Math.abs(e.state.num), 'seconds').minutes(), s: moment.duration(Math.abs(e.state.num), 'seconds').seconds()}).format('HH:mm:ss') }}
            </DisplayLarge>

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
                    <FlexLayout class="gap-1 flex-col md:flex-row flex-wrap items-start md:justify-end" v-show="isExpanded">
                        <md-text-button @click="timer.remove(e, TimerTypes.TIMER)">
                            Remove
                            <md-icon slot="icon">delete</md-icon>
                        </md-text-button>

                        <EditLabelButton :e="e"></EditLabelButton>
                    </FlexLayout>
                </template>
            </ExpandLayout>
        </FlexLayout>
    </GridLayout>
</template>

<script setup lang="ts">
import { TimerTypes, useTimerStore } from '@/store/TimerStore';
import moment from 'moment';
import EditLabelButton from '@/components/timer/edit-label/EditLabelButton.vue';

const timer = useTimerStore()

</script>

<style scoped>

</style>