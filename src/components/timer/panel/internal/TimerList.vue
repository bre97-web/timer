<template>
    <GridLayout class="gap-4">
        <div v-for="e in timer.getTimerEvents" :key="e.index" class="rounded-3xl p-4 space-y-2 relative min-w-min flex-col gap-2" :class="[e.state.num < 0 ? 'error-container on-error-container-text animate-pulse' : e.isPinned ? 'primary-container' : 'surface-variant']">
            <md-ripple></md-ripple>
            <md-elevation></md-elevation>
            
            <LabelLarge>{{ e.label }}</LabelLarge>
            <DisplayLarge class="select-none">
                {{ e.state.num < 0 ? '-' : '' }}{{ moment({h:moment.duration(Math.abs(e.state.num), 'seconds').hours(), m: moment.duration(Math.abs(e.state.num), 'seconds').minutes(), s: moment.duration(Math.abs(e.state.num), 'seconds').seconds()}).format('HH:mm:ss') }}
            </DisplayLarge>

            <FlexLayout class="flex-wrap gap-1 rounded-3xl surface relative p-1 max-w-max">
                <md-filled-button @click="e.start">Run</md-filled-button>
                <md-text-button @click="e.pause">Pause</md-text-button>
                <md-text-button @click="e.continue">Continue</md-text-button>
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
                    <FlexLayout class="gap-1 flex-col surface p-1 rounded-3xl md:flex-row flex-wrap items-start md:justify-end" v-show="isExpanded">
                        <md-text-button @click="timer.remove(e, TimerTypes.TIMER)">
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
import moment from 'moment';
import EditLabelButton from '@/components/timer/edit-label/EditLabelButton.vue';
import IsPinnedSwitch from '@/components/timer/switch-pinned/IsPinnedSwitch.vue';

const timer = useTimerStore()
</script>
