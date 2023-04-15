import {createRouter,createWebHistory} from 'vue-router'

const routes = [
    {path: '/',name:'home',component:()=>import('../views/home.vue')},
    {path: '/bill',name:'bill',component:()=>import('../views/bill.vue')}
]

const router = createRouter({
    routes,
    history:createWebHistory(),
})

export default router