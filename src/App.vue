<template>
    <div class="background relative max-h-screen min-h-screen flex flex-col h-full">
        <Header></Header>
        <main class="relative container surface self-center p-8 md:p-4 flex-grow overflow-y-auto rounded-3xl">
            <TimerPanel></TimerPanel>
            <CreateTimerButton></CreateTimerButton>
        </main>
    </div>
</template>

<script setup lang="ts">
import CreateTimerButton from '@/components/fixed-button/CreateTimerButton.vue'
import Header from '@/components/header/Header.vue'
import { onMounted } from 'vue';
import { initDarkToHtmlClass } from './store/DarkStore';
import TimerPanel from './components/timer/panel/TimerPanel.vue';

onMounted(() => {
    initDarkToHtmlClass()
})
</script>
