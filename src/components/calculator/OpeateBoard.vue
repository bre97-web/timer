<template>
    <FlexLayout class="gap-1 border rounded-3xl">
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
