<template>
    <FlexLayout class="relative gap-1 surface rounded-3xl p-1">
        <md-text-button @click="emits('add', -10)">- 10</md-text-button>
        <md-text-button @click="emits('add', -1)">- 1</md-text-button>
        <md-text-button @click="emits('add', 1)">+ 1</md-text-button>
        <md-text-button @click="emits('add', 10)">+ 10</md-text-button>
    </FlexLayout>
</template>

<script setup lang="ts">
const emits = defineEmits<{
    (event: 'add', e: string | number): void
}>()
</script>
