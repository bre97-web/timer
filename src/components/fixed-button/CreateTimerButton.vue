<template>
    <FixedLayout class="right-4 bottom-4">
        <ExpanedLayout class="flex gap-2 flex-col-reverse items-end">
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
                    class="gap-2 flex-col items-end transition-all select-none will-change-contents"
                    :class="[isExpanded ? 'opacity-100 flex z-[1]' : 'opacity-0 pointer-events-none -z-[1] fixed -bottom-96']"
                    @click="setIsExpanded(false)"
                >
                    <md-fab v-for="(e, index) in componentList" :key="index" @click="setTargetComponent(e)" lowered :label="e.label">
                        <md-icon slot="icon">{{ e.icon }}</md-icon>
                    </md-fab>

                    <div
                        class="-z-[1] hasMask fixed top-0 left-0 bg-[--md-sys-color-inverse-on-surface] opacity-75 w-full h-full"
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
                <component :is="targetComponent.component"></component>
            </form>
            <div slot="actions">
                <md-text-button form="form" value="cancel">Cancel</md-text-button>
                <md-text-button form="form" autofocus value="ok">Apply</md-text-button>
            </div>
        </md-dialog>

    </Teleport>
</template>

<script setup lang="ts" generic="T">
import CreateStopwatchForm from '@/components/timer/creator-dialog/CreateStopwatchForm.vue'
import CreateAlarmForm from '@/components/timer/creator-dialog/CreateAlarmForm.vue'
import CreateTimerForm from '@/components/timer/creator-dialog/CreateTimerForm.vue'
import { markRaw, onMounted, onUnmounted, ref } from 'vue'
import { TimerTypes, useTimerStore } from '@/store/TimerStore'

const componentList: {
    component: any,
    label: string,
    icon: string,
}[] = [
    {
        component: CreateStopwatchForm,
        label:'Stopwatch', 
        icon: 'hourglass'
    },
    {
        component: CreateAlarmForm,
        label:'Alarm', 
        icon: 'alarm'
    },
    {
        component: CreateTimerForm,
        label: 'Timer',
        icon: 'timer'
    },
]

var targetComponent = ref(markRaw(componentList[0]))
const createDialogRef = (): HTMLElement & {show:()=>void, close:()=>void} => document.getElementById('createDialogRef') as HTMLElement & {show:()=>void, close:()=>void}
const setTargetComponent = (e: any) => {
    targetComponent.value = markRaw(e)
    createDialogRef().show()
}
const getForm = (e: Event) => {
    const target: (HTMLElement & {value: string})[] = Array.from((e.target as HTMLElement).children.namedItem('form').children.item(0).children) as (HTMLElement & {value: string})[]

    const timer = useTimerStore()

    if(targetComponent.value.label === 'Stopwatch') {
        timer.push(timer.createStopwatchEvent(), TimerTypes.STOPWATCH)
    } else if(targetComponent.value.label === 'Timer') {
        console.log(target[0].value);
        
        timer.push(timer.createTimerEvent(parseInt(target[0].value)), TimerTypes.TIMER)
    }
    
    
}

onMounted(() => {
    createDialogRef().addEventListener('close', getForm)
})
onUnmounted(() => {
    createDialogRef().removeEventListener('close', getForm)
})

</script>
