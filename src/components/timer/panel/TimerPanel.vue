<template>
    <GridLayout class="p-4 gap-8 w-full flex-grow">
        <StopwatchList></StopwatchList>
        <TimerList></TimerList>
    </GridLayout>
</template>

<script setup lang="ts">
import StopwatchList from '@/components/timer/panel/internal/StopwatchList.vue';
import TimerList from '@/components/timer/panel/internal/TimerList.vue';
</script>
