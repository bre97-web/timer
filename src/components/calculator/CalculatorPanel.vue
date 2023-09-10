<template>
    <div class="p-4">
        <FlexLayout class="rounded-3xl surface-variant p-4 flex-col gap-4 w-full lg:max-w-lg relative">
            <md-ripple></md-ripple>

            <CurrentDate :current-date="current"></CurrentDate>

            <FlexLayout class="self-start gap-1 flex-wrap items-center justify-center">
                <OpeateBoard @add="add"></OpeateBoard>
                <SaveHistoryButton
                    @push-history="pushHistory"
                    :e="current"
                ></SaveHistoryButton>
            </FlexLayout>

            <div>
                <CalculatorUnitSelect
                    @set-current-time-option="(e: string) => currentTimeOption = e"
                    :available-time-options="availableTimeOptions"
                    :current-time-option="currentTimeOption"
                ></CalculatorUnitSelect>
            </div>
            
            <ExpandLayout class="space-y-2">
                <template v-slot:action="{ isExpanded, setIsExpanded }">
                    <FlexLayout class="justify-end">
                        <md-icon-button @click="setIsExpanded(!isExpanded)">
                            <md-icon>
                                {{ isExpanded ?  'expand_less' : 'expand_more'}}
                            </md-icon>
                        </md-icon-button>
                    </FlexLayout>
                </template>
                <template v-slot:expanded-content="{ isExpanded }">
                    <div
                        v-show="isExpanded"
                        class="surface rounded-3xl p-1"
                    >
                        <ResetButtons
                            @reset="reset"
                            @reset-date="resetDate"
                            @reset-time="resetTime"
                            @sync-to-today="syncToToday"
                        ></ResetButtons>
                    </div>

                </template>
            </ExpandLayout>

            <History :history="history" @remove="removeHistory"></History>

        </FlexLayout>
    </div>
</template>

<script setup lang="ts">
import History from '@/components/calculator/History.vue'
import CurrentDate from '@/components/calculator/CurrentDate.vue';
import SaveHistoryButton from '@/components/calculator/SaveHistoryButton.vue';
import OpeateBoard from '@/components/calculator/OpeateBoard.vue';
import moment from 'moment'
import { computed, ref } from 'vue'
import CalculatorUnitSelect from '@/components/calculator/CalculatorUnitSelect.vue';
import ResetButtons from '@/components/calculator/ResetButtons.vue';


const availableTimeOptions = [
    "years",
    "months",
    "weeks",
    "days",
    "hours",
    "minutes",
    "seconds",
]

const date = ref(moment('0000-1-1 00:00:00', 'YYYY-MM-DD HH:mm:ss').toDate())
const current = computed(() => moment(date.value).format('YYYY-MM-DD HH:mm:ss'))
const currentTimeOption = ref<string | any>('seconds')

const history = ref<({value: string, index: string})[]>([])
const pushHistory = (e: string) => {
    history.value.push({
        value: e,
        index: moment().format('x')
    })
}
const removeHistory = (e: {value: string, index: string}) => {
    history.value.splice(history.value.indexOf(e), 1)
}

const add = (time: string | number) => {
    date.value = moment(date.value).add(time, currentTimeOption.value).toDate()
}
const reset = () => {
    date.value = moment('0000-1-1 00:00:00', 'YYYY-MM-DD HH:mm:ss').toDate()
}
const resetDate = () => {
    date.value = moment(date.value).set('year', 0).set('M', 0).set('D', 1).toDate()
}
const resetTime = () => {
    date.value = moment(date.value).set('hour', 0).set('minute', 0).set('second', 0).toDate()
}
const syncToToday = () => {
    date.value = moment().toDate()
}
</script>

<style scoped>

</style>