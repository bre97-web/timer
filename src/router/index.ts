import { RouteRecordRaw, Router, createRouter, createWebHashHistory } from 'vue-router'

import Index from '@/pages/index.vue'
import Calculator from '@/pages/calculator.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Index',
        component: Index
    },
    {
        path: '/calculator',
        name: 'Calculator',
        component: Calculator
    }
]

const Router: Router = createRouter({
    history: createWebHashHistory(),
    routes,
    linkExactActiveClass: 'active'
})

export default Router
