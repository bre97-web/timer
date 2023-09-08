<template>
    <div class="relative max-h-screen min-h-screen flex flex-col h-full">
        <Header></Header>
        <main class="z-[0] container self-center m-4 flex-grow overflow-y-auto rounded-3xl">
            <div class="h-[3000px]">13</div>
            <CreateTimerButton></CreateTimerButton>
        </main>
        1
    </div>
</template>

<script setup lang="ts">
import CreateTimerButton from '@/components/fixed-button/CreateTimerButton.vue'
import Header from '@/components/header/Header.vue'
</script>

<style scoped></style>
