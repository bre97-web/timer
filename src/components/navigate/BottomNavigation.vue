<template>
    <md-navigation-bar ref="bottomNavigationBarRef">
        <md-navigation-tab
            v-for="e in routerList"
            :key="e.path"
            :label="e.label"
            :active="router.currentRoute.value.path === e.path"
            @click="router.push(e.path)"
        ></md-navigation-tab>
    </md-navigation-bar>
</template>

<script setup lang="ts">
import { getNavigationList } from '@/scripts/navigate'
import { MDNavigationBar } from '@/types/MDComponents'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const routerList = getNavigationList()

const bottomNavigationBarRef = ref<MDNavigationBar>()

</script>
