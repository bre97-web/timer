<template>
    <FlexLayout>
        <md-filled-button @click="emits('pushHistory', props.e)">Save</md-filled-button>
    </FlexLayout>
</template>

<script setup lang="ts">
const props = defineProps<{
    e: string
}>()
const emits = defineEmits<{
    (event: 'pushHistory', e: string): void
}>()
</script>

<style scoped>

</style>