<template>
    <StickyLayout class="px-4 py-2">
        <FlexLayout class="justify-between">
            <section>
                <TitleMedium class="on-surface-text">Timer</TitleMedium>
                <BodySmall class="on-surface-text">A material timer web application</BodySmall>
            </section>
            <div>
                <DarkButton></DarkButton>
            </div>
        </FlexLayout>
    </StickyLayout>
</template>

<script setup lang="ts">
import DarkButton from '@/components/dark/DarkButton.vue'
</script>
