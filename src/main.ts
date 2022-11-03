/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'
import Home from './pages/HomePage.vue'
import Stats from './pages/Stats.vue'

// Composables
import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'

// Plugins
import { registerPlugins } from '@/plugins'
import vuetify from './plugins/vuetify'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/admin/stats',
    name: 'stats',
    component: Stats
  },
]

const router = createRouter({
  history : createWebHistory(),
  routes
})

const app = createApp(App)

registerPlugins(app)

app
  .use(router)
  .use(vuetify)
  .mount('#app')