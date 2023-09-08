import { defineStore } from "pinia";
import { ref } from "vue";

export enum TimerTypes {
    TIMER = 0,
    ALARM,
    STOPWATCH
}

export const useTimerStore = defineStore('timer_store', {
    state: () => ({
        countdown: 3,
        events: {
            stopwatch: [],
            timer: [],
        }
    }),
    getters: {
        getStopwatchEvents: (state) => state.events.stopwatch,
        getTimerEvents: (state) => state.events.timer,
    },
    actions: {
        start() {

        },
        push(e: any, type: TimerTypes) {
            switch (type) {
                case TimerTypes.TIMER:
                    this.events.timer.push(e)
                    break;
                case TimerTypes.ALARM:

                    break;
                case TimerTypes.STOPWATCH:
                    this.events.stopwatch.push(e)
                    break;
                default:
                    break;
            }
        },
        createStopwatchEvent() {
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
                value: num
            }
        },
        createTimerEvent(countdown: number) {
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
                value: num
            }
        }
    }
})
