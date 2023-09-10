<template>
    <div class="background relative max-h-screen flex flex-col h-full w-full">
        <Header></Header>
        <main class="relative surface self-center flex-grow overflow-y-auto rounded-3xl w-full">
            <router-view></router-view>
            <CreateButton></CreateButton>
            <EditLabelDialogVue></EditLabelDialogVue>
        </main>
        <nav class="right-0 bottom-0 w-full overflow-clip h-fit flex-none bg-blue-400">
            <BottomNavigation></BottomNavigation>
        </nav>
    </div>
</template>

<script setup lang="ts">
import CreateButton from '@/components/timer/create-timer/CreateButton.vue'
import EditLabelDialogVue from '@/components/timer/edit-label/EditLabelDialog.vue'
import Header from '@/components/header/Header.vue'
import BottomNavigation from '@/components/navigate/BottomNavigation.vue'
import { onMounted } from 'vue';
import { initDarkToHtmlClass } from './store/DarkStore';
import { useTimerStore } from './store/TimerStore';

const timer = useTimerStore()

onMounted(() => {
    initDarkToHtmlClass()

    timer.activiteEvents()
})
</script>
