import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import {createPinia} from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const store= createPinia()
store.use(piniaPluginPersistedstate)
createApp(App).use(router).use(store).use(ElementPlus).mount('#app')