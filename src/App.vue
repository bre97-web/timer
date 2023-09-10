<template>
    <div class="background relative max-h-screen flex flex-col min-h-screen h-full w-full">
        <Header></Header>
        <main class="relative surface self-center flex-grow overflow-y-auto rounded-3xl container">
            <router-view></router-view>
        </main>
        <nav class="relative flex-none h-fit">
            <div class="absolute right-6 -top-16">
                <CreateButton></CreateButton>
            </div>
            <div class="overflow-clip">
                <BottomNavigation></BottomNavigation>
            </div>
        </nav>
        <EditLabelDialogVue></EditLabelDialogVue>
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
