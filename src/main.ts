import { createApp } from "vue"
import "./style.css"
import App from "./App.vue"
import router from "./router"
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"
import { createPinia } from "pinia"
import piniaPluginPersistedstate from "pinia-plugin-persistedstate"
import * as ElementPlusIconsVue from "@element-plus/icons-vue"

// 注册全局 element-icons 组件

const store = createPinia()
store.use(piniaPluginPersistedstate)
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(router).use(store).use(ElementPlus).mount("#app")
