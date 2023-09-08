<template>
    <FixedLayout class="right-4 bottom-4">
        <ExpanedLayout class="flex gap-2 flex-col-reverse">
            <template v-slot:action="{ setIsExpanded, isExpanded }">
                <md-fab @click="setIsExpanded(true)" :disabled="isExpanded" label="Starts">
                    <md-icon slot="icon">add</md-icon>
                </md-fab>
            </template>

            <template v-slot:expanded-content="{ setIsExpanded, isExpanded }">
                <FlexLayout class="gap-2 flex-col justify-center items-center transition-all"
                    :class="isExpanded ? ' opacity-100 flex z-[1]' : ' opacity-0'" @click="setIsExpanded(false)">
                    <md-fab lowered label="Timer" class="disabled-force">
                        <md-icon slot="icon">timer</md-icon>
                    </md-fab>
                    <md-fab lowered label="Alarm" class="disabled-force">
                        <md-icon slot="icon">alarm</md-icon>
                    </md-fab>
                    <div
                        class="-z-[1] hasMask fixed top-0 left-0 bg-[--md-sys-color-inverse-on-surface-light] opacity-75 w-full h-full"
                        :class="isExpanded ? 'pointer-events-auto' : 'pointer-events-none'"
                    ></div>
                </FlexLayout>
            </template>
        </ExpanedLayout>
    </FixedLayout>
</template>

<script setup lang="ts">
</script>
