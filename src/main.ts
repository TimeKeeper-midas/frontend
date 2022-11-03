/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'
import Home from './pages/HomePage.vue'
import ModifyCompany from './pages/ModifyCompany.vue'
import RegistrationChallenge from './pages/RegistrationChallenge.vue'
import Stats from './pages/Stats.vue'

// Composables
import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'

// Plugins
import vuetify from './plugins/vuetify'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: '생체 정보 등록',
    component: RegistrationChallenge
  },
  {
    path: '/admin/information',
    name: '기업 정보',
    component: ModifyCompany
  },
  {
    path: '/admin/stats',
    name: 'stats',
    component: Stats
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)

app
  .use(router)
  .use(vuetify)
  .mount('#app')