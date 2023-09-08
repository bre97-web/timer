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
        }
    }),
    getters: {
        getStopwatchEvents: (state) => state.events.stopwatch,
    },
    actions: {
        start() {

        },
        push(e: any, type: TimerTypes) {
            switch (type) {
                case TimerTypes.TIMER:

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

            const add = () => setInterval(() => {
                num.value += 0.01
            }, 10)
            var timer: any = null
            return {
                start: () => {
                    clearInterval(timer)
                    timer = add()
                },
                pause: () => clearInterval(timer),
                continue: () => {
                    clearInterval(timer)
                    timer = add()
                },
                value: num
            }
        }
    }
})
