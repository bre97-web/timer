<template>
    <div class="bg-[var(--md-sys-color-background)] relative max-h-screen min-h-screen flex flex-col h-full">
        <Header></Header>
        <main class="container bg-[var(--md-sys-color-surface)] self-center p-8 md:p-4 flex-grow overflow-y-auto rounded-3xl">
            <StopwatchList></StopwatchList>
            <CreateTimerButton></CreateTimerButton>
        </main>
    </div>
</template>

<script setup lang="ts">
import CreateTimerButton from '@/components/fixed-button/CreateTimerButton.vue'
import Header from '@/components/header/Header.vue'
import { onMounted } from 'vue';
import { initDarkToHtmlClass } from './store/DarkStore';
import StopwatchList from './components/timer/panel/StopwatchList.vue';

onMounted(() => {
    initDarkToHtmlClass()
})
</script>
