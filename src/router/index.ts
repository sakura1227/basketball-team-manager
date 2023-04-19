import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
import NProgress from "nprogress"
import "nprogress/nprogress.css"

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        redirect: "/login",
        meta: {
            title: "篮球系统",
        },
    },
    {
        path: "/login",
        component: () => import("../views/LoginPage/index.vue"),
        meta: {
            title: "篮球系统-登录",
        },
    },
    {
        path: "/dashboard",
        component: () => import("../views/DashboardPage/index.vue"),
        meta: {
            title: "篮球系统-仪表盘",
        },
        children: [
            {
                path: "DataOverview",
                component: () => import("../views/DashboardPage/index.vue"),
            },
            {
                path: "TeamManagement",
                component: () => import("../views/DashboardPage/index.vue"),
            },
            {
                path: "TrainingPlan",
                component: () => import("../views/DashboardPage/index.vue"),
            },
            {
                path: "TrainingMonitoring",
                component: () => import("../views/DashboardPage/index.vue"),
            },
            {
                path: "TrainingData",
                component: () => import("../views/DashboardPage/index.vue"),
            },
        ],
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
const keyToTitle = {}
router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title as string
    }
    NProgress.start()
    setTimeout(next, 1000)
})
router.afterEach((to, from) => {
    NProgress.done()
})
export default router
