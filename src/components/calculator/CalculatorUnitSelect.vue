<template>
    <md-filled-select>
        <md-select-option
            :selected="props.currentTimeOption === e"
            v-for="(e, index) in props.availableTimeOptions"
            :key="index"
            :headline="e"
            :value="e"
            @click="emits('setCurrentTimeOption', e)"
        ></md-select-option>
    </md-filled-select>
</template>

<script setup lang="ts">
const props = defineProps<{
    currentTimeOption: string
    availableTimeOptions: string[]
}>()
const emits = defineEmits<{
    (event: 'setCurrentTimeOption', e: string): void
}>()
</script>
