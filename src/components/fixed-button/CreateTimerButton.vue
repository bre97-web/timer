<template>
    <FixedLayout class="right-4 bottom-4">
        <ExpanedLayout class="flex gap-2 flex-col-reverse">
            <template v-slot:action="{ setIsExpanded, isExpanded }">
                <md-fab @click="setIsExpanded(true)" :disabled="isExpanded" label="Starts">
                    <md-icon slot="icon">add</md-icon>
                </md-fab>
            </template>

            <template v-slot:expanded-content="{ setIsExpanded, isExpanded }">
                <FlexLayout
                    class="gap-2 flex-col items-end transition-all"
                    :class="isExpanded ? ' opacity-100 flex z-[1]' : ' opacity-0'" @click="setIsExpanded(false)"
                >
                    <md-fab v-for="(e, index) in componentList" :key="index" @click="setTargetComponent(e.component)" lowered :label="e.label">
                        <md-icon slot="icon">{{ e.icon }}</md-icon>
                    </md-fab>

                    <div
                        class="-z-[1] hasMask fixed top-0 left-0 bg-[--md-sys-color-inverse-on-surface-light] opacity-75 w-full h-full"
                        :class="isExpanded ? 'pointer-events-auto' : 'pointer-events-none'"
                    ></div>
                </FlexLayout>
            </template>
        </ExpanedLayout>
    </FixedLayout>

    <Teleport to="body">
        <md-dialog id="createDialogRef">
            <span slot="headline">
                <span style="flex: 1;">Create a timer</span>
                <md-icon-button form="form">
                    <md-icon>close</md-icon>
                </md-icon-button>
            </span>
            <form id="form" slot="content" method="dialog">
                <component :is="targetComponent"></component>
            </form>
        </md-dialog>

    </Teleport>
</template>

<script setup lang="ts">
import CreateStopwatchForm from '@/components/timer/creator-dialog/CreateStopwatchForm.vue'
import { markRaw } from 'vue';

const componentList: [{
    component: any
    label: string
    icon: string
}]= [
    {
        component: CreateStopwatchForm,
        label:'Stopwatch', 
        icon: 'hourglass'
    },
    {
        component: CreateStopwatchForm,
        label:'Alarm', 
        icon: 'alarm'
    },
    {
        component: CreateStopwatchForm,
        label: 'Timer',
        icon: 'timer'
    },
]

var targetComponent = markRaw(componentList[0].component)
const createDialogRef = (): HTMLElement & {show:()=>void, close:()=>void} => document.getElementById('createDialogRef') as HTMLElement & {show:()=>void, close:()=>void}
const setTargetComponent = (e: any) => {
    targetComponent = markRaw(e)
    createDialogRef().show()
}

</script>
