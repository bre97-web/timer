<template>
    <md-text-button @click="openDialog">
        Edit Label
        <md-icon slot="icon">edit</md-icon>
    </md-text-button>
</template>

<script setup lang="ts">
import { EventPackage } from '@/store/TimerStore'
import { willEditLabel } from './editLabel';

const props = defineProps<{
    e: EventPackage
}>()

const openDialog = () => {
    willEditLabel(props.e)
}
</script>
