<template>
    <div class="relative">
        <div class="w-fit max-w-fit h-fit max-h-fit">
            <slot name="action" :isExpanded="isExpaneded" :setIsExpanded="setIsExpanded"></slot>
        </div>
        <slot name="expanded-content" :isExpanded="isExpaneded" :setIsExpanded="setIsExpanded"></slot>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const isExpaneded = ref(false)
const setIsExpanded = (e: boolean) => {
    isExpaneded.value = e
}
</script>
