<template>
    <p class="text-center">
        <HeadlineLarge>{{ props.currentDate }}</HeadlineLarge>
    </p>
</template>

<script setup lang="ts">
const props = defineProps<{
    currentDate: string
}>()
</script>
