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
                        path: "DataOverview",
                    },
                    {
                        path: "TeamManagement",
                    },
                    {
                        path: "TrainingPlan",
                    },
                    {
                        path: "TrainingMonitoring",
                    },
                    {
                        path: "TrainingData",
                    },
                ]
            } else {
                return [
                    
                ]
            }
        },
    },
    persist: true,
})
