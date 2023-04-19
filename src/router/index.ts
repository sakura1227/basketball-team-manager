import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        redirect: "/login",
    },
    {
        path: "/login",
        component: () => import("../views/LoginPage/index.vue"),
    },
    {
        path: "/dashboard",
        component: () => import("../views/DashboardPage/index.vue"),
        children: [],
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
export default router
