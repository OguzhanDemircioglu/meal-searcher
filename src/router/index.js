import {createRouter, createWebHistory} from "vue-router";

const router =createRouter({
    history: createWebHistory(),
    routes: routes
})

const routes = [
    {
        path: '/',
        home:'home',
        component: Home
    },
]

export default router;

