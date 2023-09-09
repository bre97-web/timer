import moment from "moment";
import { defineStore } from "pinia";
import { Ref, ref } from "vue";

export enum TimerTypes {
    TIMER = 0,
    STOPWATCH
}

export type TimerEventReturns = {
    start: () => void,
    pause: () => void,
    continue: () => void,
    value: Ref<number>,
    id: string
}

export const useTimerStore = defineStore('timer_store', {
    state: () => ({
        countdown: 3,
        events: {
            stopwatch: [] as TimerEventReturns[],
            timer: [] as TimerEventReturns[],
        }
    }),
    getters: {
        getStopwatchEvents: (state) => state.events.stopwatch,
        getTimerEvents: (state) => state.events.timer,
    },
    actions: {
        remove(e: any, type: TimerTypes) {
            switch (type) {
                case TimerTypes.TIMER:
                    this.events.timer = this.events.timer.filter(e => e !== e)
                    break;
                case TimerTypes.STOPWATCH:
                    this.events.stopwatch = this.events.stopwatch.filter(e => e !== e)
                    break;
                default:
                    break;
            }
        },
        push(e: any, type: TimerTypes) {
            switch (type) {
                case TimerTypes.TIMER:
                    this.events.timer.push(e)
                    break;
                case TimerTypes.STOPWATCH:
                    this.events.stopwatch.push(e)
                    break;
                default:
                    break;
            }
        },
        createStopwatchEvent(): TimerEventReturns {
            var num = ref(0)

            const event = () => setInterval(() => {
                num.value += 0.01
            }, 10)
            var timer: any = null
            return {
                start: () => {
                    clearInterval(timer)
                    timer = event()
                },
                pause: () => clearInterval(timer),
                continue: () => {
                    clearInterval(timer)
                    timer = event()
                },
                value: num,
                id: moment().format('X').toString()
            }
        },
        createTimerEvent(countdown: number): TimerEventReturns {
            var num = ref(countdown)

            const event = () => setInterval(() => {
                num.value -= 1
            }, 1000)
            var timer: any = null
            return {
                start: () => {
                    clearInterval(timer)
                    timer = event()
                },
                pause: () => clearInterval(timer),
                continue: () => {
                    clearInterval(timer)
                    timer = event()
                },
                value: num,
                id: moment().format('X').toString()
            }
        }
    }
})
