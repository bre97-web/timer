import CreateStopwatchForm from '@/components/timer/creator-dialog/internal/CreateStopwatchForm.vue'
import CreateTimerForm from '@/components/timer/creator-dialog/internal/CreateTimerForm.vue'

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
        component: CreateTimerForm,
        label: 'Timer',
        icon: 'timer'
    },
]

export const getComponentList = () => componentList
