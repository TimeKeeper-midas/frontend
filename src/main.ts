/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from "./App.vue";
import ModifyCompany from "./pages/ModifyCompany.vue";
import RegistrationChallenge from "./pages/RegistrationChallenge.vue";
import StatsPage from "./pages/StatsPage.vue";
import UsersViewPage from "./pages/UsersViewPage.vue";
import Attendance from "./pages/Attendance.vue";
import vuetify from "./plugins/vuetify";
import urql, { defaultExchanges, errorExchange } from "@urql/vue";
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "출/퇴근",
    component: Attendance,
  },
  {
    path: "/register",
    name: "생체 정보 등록",
    component: RegistrationChallenge,
  },
  {
    path: "/admin",
    name: "사원 통계",
    component: StatsPage,
  },
  {
    path: "/admin/users",
    name: "사원 관리",
    component: UsersViewPage,
  },
  {
    path: "/admin/information",
    name: "기업 정보",
    component: ModifyCompany,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app
  .use(router)
  .use(vuetify)
  .use(urql, {
    url: "http://localhost:4000/",
    fetchOptions: () => {
      const token = window.localStorage.getItem("token");
      return {
        headers: {
          authorization: token === null ? undefined : `Bearer ${token}`,
        },
      };
    },
    exchanges: [
      ...defaultExchanges,
      errorExchange({
        onError(error) {
          window.alert(error.message);
        },
      }),
    ],
  })
  .mount("#app");
