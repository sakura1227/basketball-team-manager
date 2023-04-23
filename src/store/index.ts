import { defineStore } from "pinia" // 定义容器

export const useStore = defineStore("mainStore", {
    state() {
        return {
            username: "",
            password: "",
            savePassword: false,
            role: "admin",
        }
    },
    getters: {
        getMenuList(state) {
            if (state.role === "admin") {
                return [
                    {
                        path: "/dashboard/DataOverview",
                        name: "数据总览",
                        icon: "Odometer",
                    },
                    {
                        path: "/dashboard/TeamManagement",
                        name: "队伍管理",
                        icon: "User",
                    },
                    {
                        path: "/dashboard/TrainingPlan",
                        name: "训练计划",
                        icon: "Basketball",
                    },
                    {
                        path: "/dashboard/TrainingData",
                        name: "训练数据",
                        icon: "Coin",
                    },
                ] as {
                    path: string
                    name: string
                    icon: string
                    children?: { path: string; name: string; icon: string }[]
                }[]
            } else {
                return []
            }
        },
    },
    persist: true,
})
