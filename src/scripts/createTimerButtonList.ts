import CreateStopwatchForm from '@/components/timer/create-timer/internal/CreateStopwatchForm.vue'
import CreateTimerForm from '@/components/timer/create-timer/internal/CreateTimerForm.vue'

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
