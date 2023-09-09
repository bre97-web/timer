import moment from "moment";
import { defineStore } from "pinia";
import { reactive } from "vue";

export enum TimerTypes {
    TIMER = 0,
    STOPWATCH
}

export type Event = {
    label: string
    handle: () => void
    timer: null | any
    index: string
    isPinned: boolean
}
export type EventPackage = {
    start: () => void
    pause: () => void
    continue: () => void
    state: any
} & Event

export const useTimerStore = defineStore('timer_store', {
    state: () => ({
        countdown: 3,
        events: {
            stopwatch: [] as EventPackage[],
            timer: [] as EventPackage[],
        }
    }),
    getters: {
        getStopwatchEvents: (state) => state.events.stopwatch,
        getTimerEvents: (state) => state.events.timer,
    },
    actions: {
        remove(e: EventPackage, type: TimerTypes) {
            switch (type) {
                case TimerTypes.TIMER:
                    this.events.timer = this.events.timer.filter(element => element !== e)
                    break;
                case TimerTypes.STOPWATCH:
                    this.events.stopwatch = this.events.stopwatch.filter(element => element !== e)
                    break;
                default:
                    break;
            }
        },
        push(e: EventPackage, type: TimerTypes) {
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
        createStopwatchEvent(): EventPackage {
            var state = reactive({
                num: 0
            })

            const event = this.createEvent('New Stopwatch', () => setInterval(() => {
                state.num += 0.01
            }, 10))

            return {
                start: () => {
                    clearInterval(event.timer)
                    event.timer = event.handle()
                },
                pause: () => clearInterval(event.timer),
                continue: () => {
                    clearInterval(event.timer)
                    event.timer = event.handle()
                },
                state: state,
                ...event
            }
        },
        createTimerEvent(countdown: number): EventPackage {
            var state = reactive({
                num: countdown
            })

            const e = this.createEvent('New Timer', () => setInterval(() => {
                state.num -= 1
            }, 1000))

            return {
                start: () => {
                    clearInterval(e.timer)
                    e.timer = e.handle()
                },
                pause: () => clearInterval(e.timer),
                continue: () => {
                    clearInterval(e.timer)
                    e.timer = e.handle()
                },
                state: state,
                ...e
            }
        },
        createEvent(label: string, handle: () => void): Event {
            return {
                label: label,
                handle: handle,
                timer: null,
                index: moment().format('x'),
                isPinned: false,
            }
        }
    },
    persist: true,
})
