<template>
    <FlexLayout class="flex-col items-start justify-start gap-1">
        <md-text-button @click="emits('reset')">
            Reset
            <md-icon slot="icon">restart_alt</md-icon>
        </md-text-button>
        <md-text-button @click="emits('resetDate')">
            Reset Date
            <md-icon slot="icon">restart_alt</md-icon>
        </md-text-button>
        <md-text-button @click="emits('resetTime')">
            Reset Time
            <md-icon slot="icon">restart_alt</md-icon>
        </md-text-button>
        <md-text-button @click="emits('syncToToday')">
            To today
            <md-icon slot="icon">restart_alt</md-icon>
        </md-text-button>
    </FlexLayout>
</template>

<script setup lang="ts">
const emits = defineEmits<{
    (event: 'reset'): void
    (event: 'resetDate'): void
    (event: 'resetTime'): void
    (event: 'syncToToday'): void
}>()
</script>
