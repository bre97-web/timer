<template>
    <div v-show="props.history.length !== 0" class="border px-4 py-2 rounded-3xl">
        <LabelLarge>History</LabelLarge>
        <md-list class="flex flex-col">
            <md-list-item 
                v-for="e in props.history"
                :key="e.index"
                :headline="e.value"
            >
                <div slot="end">
                    <md-icon-button @click="emits('remove', e)">
                        <md-icon >delete</md-icon>
                    </md-icon-button>
                </div>
            </md-list-item>
        </md-list>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    history: {value: string, index: string}[]
}>()
const emits = defineEmits<{
    (event: 'remove', e: {value: string, index: string}): void
}>()
</script>
