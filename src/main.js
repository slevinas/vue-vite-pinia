import { createApp } from 'vue'
import { createWebHistory } from 'vue-router'
import createRouter from './lib/router.js'
import App from './App.vue'
const router = createRouter(createWebHistory())
const app = createApp(App)
app.use(router).mount('#app')
