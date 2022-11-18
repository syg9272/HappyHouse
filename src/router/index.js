import Vue from "vue";
import VueRouter from "vue-router";
// import VueAwesomeSwiper from "vue-awesome-swiper";

import AppMain from "@/views/AppMain.vue";
import AppMap from "@/views/AppMap.vue";
import AppLike from "@/views/AppLike";

import store from "@/store";

import UserLogin from "@/components/user/UserLogin";
import UserPage from "@/components/user/UserPage";
import UserRegister from "@/components/user/UserRegister";
import UserFindPass from "@/components/user/UserFindPass";

Vue.use(VueRouter);
// Vue.use(VueAwesomeSwiper);

const onlyAuthUser = async (to, from, next) => {
  const checkUserInfo = store.getters["memberStore/checkUserInfo"];
  const checkToken = store.getters["memberStore/checkToken"];
  let token = sessionStorage.getItem("access-token");
  // console.log("로그인 처리 전", checkUserInfo, token);

  if (checkUserInfo != null && token) {
    // console.log("토큰 유효성 체크하러 가자!!!!");
    await store.dispatch("memberStore/getUserInfo", token);
  }
  if (!checkToken || checkUserInfo === null) {
    // alert("로그인이 필요한 페이지입니다..");
    // next({ name: "login" });
    router.push({ name: "login" });
  } else {
    // console.log("로그인 했다!!!!!!!!!!!!!.");
    next();
  }
};

const routes = [
  {
    path: "/",
    name: "main",
    component: AppMain,
  },
  {
    path: "/map",
    name: "map",
    component: AppMap,
  },
  {
    path: "/like",
    name: "like",
    component: AppLike,
  },
  {
    path: "/service",
    name: "service",
    component: () => import("@/views/AppService"),
    redirect: "/service/list",
    children: [
      {
        path: "list",
        name: "servicenotice",
        component: () => import("@/components/service/ServiceNotice"),
      },
      {
        path: "qna",
        name: "serviceqna",
        component: () => import("@/components/service/ServiceQna"),
      },
      {
        path: "guide",
        name: "serviceguide",
        component: () => import("@/components/service/ServiceGuide"),
      },
      {
        path: "view",
        name: "serviceview",
        component: () => import("@/components/service/ServiceView"),
      },
      {
        path: "modify",
        name: "servicemodify",
        component: () => import("@/components/service/ServiceModify"),
      },
    ],
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
    beforeEnter: onlyAuthUser,
    component: UserPage,
  },
  {
    path: "/",
    name: "findpass",
    component: UserFindPass,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
