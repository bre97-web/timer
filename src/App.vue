<template>
    <div class="background relative max-h-screen min-h-screen flex flex-col h-full w-full">
        <Header></Header>
        <main class="relative surface self-center flex-grow overflow-y-auto rounded-3xl w-full">
            <TimerPanel></TimerPanel>
            <CreateButton></CreateButton>
            <EditLabelDialogVue></EditLabelDialogVue>
        </main>
    </div>
</template>

<script setup lang="ts">
import CreateButton from '@/components/timer/create-timer/CreateButton.vue'
import EditLabelDialogVue from '@/components/timer/edit-label/EditLabelDialog.vue'
import Header from '@/components/header/Header.vue'
import { onMounted } from 'vue';
import { initDarkToHtmlClass } from './store/DarkStore';
import TimerPanel from './components/timer/panel/TimerPanel.vue';
import { useTimerStore } from './store/TimerStore';

const timer = useTimerStore()

onMounted(() => {
    initDarkToHtmlClass()

    timer.activiteEvents()
})
</script>
