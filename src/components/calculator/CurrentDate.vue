<template>
    <p class="text-center">
        <DisplayLarge>{{ props.currentDate }}</DisplayLarge>
    </p>
</template>

<script setup lang="ts">
const props = defineProps<{
    currentDate: string
}>()
</script>
