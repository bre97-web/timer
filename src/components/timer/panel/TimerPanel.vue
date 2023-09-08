<template>
    <FlexLayout class="flex-col gap-8">
        <StopwatchList></StopwatchList>
        <TimerList></TimerList>
    </FlexLayout>
</template>

<script setup lang="ts">
import StopwatchList from '@/components/timer/panel/internal/StopwatchList.vue';
import TimerList from '@/components/timer/panel/internal/TimerList.vue';

</script>

<style scoped>

</style>