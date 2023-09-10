<template>
    <ExpandLayout class="relative flex flex-col-reverse items-end">
        <template v-slot:action="{ setIsExpanded }">
            <md-fab
                @click="setIsExpanded(true)"
                label="Starts"
            >
                <md-icon slot="icon">add</md-icon>
            </md-fab>
        </template>

        <template v-slot:expanded-content="{ setIsExpanded, isExpanded }">
            <FlexLayout
                class="transition-all select-none will-change-contents"
                :class="[isExpanded ? 'opacity-100 flex gap-2 flex-col flex-wrap items-end z-[1] absolute' : 'opacity-0 pointer-events-none -z-[1] fixed -bottom-96']"
                @click="setIsExpanded(false)"
            >
                <md-fab v-for="(e, index) in DialogComponent.getComponentList()" :key="index" @click="setTargetComponent(e)" lowered :label="e.label">
                    <md-icon slot="icon">{{ e.icon }}</md-icon>
                </md-fab>

                <div
                    class="-z-[1] hasMask fixed top-0 left-0 bg-[--md-sys-color-inverse-on-surface] opacity-75 w-full h-full"
                    :class="isExpanded ? 'pointer-events-auto' : 'pointer-events-none'"
                ></div>
            </FlexLayout>
        </template>
    </ExpandLayout>

    <Teleport to="body">
        <!-- create dialog id is 'createDialogRef' -->
        <CreateDialog :target-component="targetComponent"></CreateDialog>
    </Teleport>
</template>

<script setup lang="ts" generic="T">
import { markRaw, ref } from 'vue'
import { TimerTypes, useTimerStore } from '@/store/TimerStore'
import * as DialogComponent from '@/scripts/createTimerButtonList'
import CreateDialog from '@/components/timer/create-timer/CreateDialog.vue'
import { openDialog } from '@/scripts/dialog'
import { MDTextField } from '@/types/MDComponents'

const timer = useTimerStore()

const targetComponent = ref(markRaw(DialogComponent.getComponentList()[0]))
const setTargetComponent = (e: any) => {
    targetComponent.value = markRaw(e)
    openDialog('createDialogRef', (e) => {
        if(targetComponent.value.label === 'Stopwatch') {
            timer.push(timer.createStopwatchEvent(), TimerTypes.STOPWATCH)
        } else if(targetComponent.value.label === 'Timer') {
            const target = ((e.target as HTMLElement).children.item(0) as MDTextField).value
            timer.push(timer.createTimerEvent(parseInt(target)), TimerTypes.TIMER)
        }   
    })
}
</script>
