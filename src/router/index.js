import Vue from "vue";
import VueRouter from "vue-router";
import AppMain from "@/views/AppMain.vue";
import AppMap from "@/views/AppMap.vue";
import UserLogin from "@/components/user/UserLogin";
import UserPage from "@/components/user/UserPage";
import UserRegister from "@/components/user/UserRegister";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "main",
    component: AppMain,
  },
  {
    path: "/",
    name: "map",
    component: AppMap,
  },
  {
    path: "/",
    name: "login",
    component: UserLogin,
  },
  {
    path: "/",
    name: "register",
    component: UserRegister,
  },
  {
    path: "/",
    name: "mypage",
    component: UserPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
