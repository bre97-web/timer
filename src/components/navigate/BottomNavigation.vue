<template>
    <md-navigation-bar ref="bottomNavigationBarRef">
        <md-navigation-tab v-for="e in routerList" :key="e.path" :label="e.label"></md-navigation-tab>
    </md-navigation-bar>
</template>

<script setup lang="ts">
import { getNavigationList } from '@/scripts/navigate'
import { ref } from 'vue'

const routerList = getNavigationList()

const bottomNavigationBarRef = ref()


</script>

<style scoped>

</style>