import { createApp } from 'vue'
import { createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'

import createRouter from './lib/router.js'

import App from './App.vue'
const router = createRouter(createWebHistory())
const store = createPinia()
const app = createApp(App)
app.use(router)
app.use(store).mount('#app')
