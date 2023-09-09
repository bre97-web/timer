<template>
    <label class="self-end">
        <PinnedSwitch :e="props.e"></PinnedSwitch>
    </label>
</template>

<script setup lang="ts">
import PinnedSwitch from './PinnedSwitch.vue';
import { EventPackage } from '@/store/TimerStore';

const props = defineProps<{
    e: EventPackage
}>()
</script>
