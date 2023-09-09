<template>
    <md-dialog id="createDialogRef">
        <span slot="headline">
            <span style="flex: 1;">Create a timer</span>
        </span>
        <form id="form" slot="content" method="dialog">
            <component :is="props.targetComponent.component"></component>
        </form>
        <div slot="actions">
            <md-text-button form="form" value="cancel">Cancel</md-text-button>
            <md-text-button form="form" autofocus value="ok">Apply</md-text-button>
        </div>
    </md-dialog>
</template>

<script setup lang="ts">
const props = defineProps<{
    targetComponent: any
}>()
</script>
