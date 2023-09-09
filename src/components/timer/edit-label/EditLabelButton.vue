<template>
    <md-text-button @click="openEditLabelDialog">
        Edit Label
        <md-icon slot="icon">edit</md-icon>
    </md-text-button>
</template>

<script setup lang="ts">
import { EventPackage } from '@/store/TimerStore'
import { openDialog } from '@/scripts/dialog'
import { MDTextField } from '@/types/MDComponents'

const props = defineProps<{
    e: EventPackage
}>()

const openEditLabelDialog = () => {
    openDialog('editLabelDialogRef', (e) => props.e.label = ((e.target as HTMLElement).children.item(0) as MDTextField).value)
}
</script>
