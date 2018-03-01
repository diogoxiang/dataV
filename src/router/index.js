import Vue from "vue";
import Router from "vue-router";
import store from "./../store";
import * as types from "./../store/mutation-types";

// Vue 模块
import Home from "@/components/Home";

// import Store from "@/components/Store";
// import Child from "@/components/Children";
// import Fromval from "@/components/Fromval";
// import Login from "@/components/Login";

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/datav",
    name: "datav",
    // aync loading model 异加载模块
    component: resolve => require(["@/components/dataV.vue"], resolve)
  },
  {
    path: "/imap",
    name: "imap",
    // aync loading model 异加载模块
    component: resolve => require(["@/components/datav/chinaMap.vue"], resolve)
  },
  {
    path: "/imapchina",
    name: "imapchina",
    // aync loading model 异加载模块
    component: resolve => require(["@/components/chinaMap/map.vue"], resolve)
  },
  {
    path: "/store",
    name: "Store",
    // aync loading model 异加载模块
    component: resolve => require(["@/components/Store.vue"], resolve),
    children: [
      {
        // 子路由
        // 当 /store/profile 匹配成功，
        // UserProfile 会被渲染在 User 的 <router-view> 中
        path: "profile",
        component: resolve => require(["@/components/Children.vue"], resolve)
      }
    ]
  },
  {
    path: "*", //当匹配不到的时候.则返回 "/"
    redirect: "/"
  }
];

// 页面刷新时，重新赋值token
if (window.localStorage.getItem("token")) {
  store.commit(types.LOGIN, window.localStorage.getItem("token"));
}
const router = new Router({
  routes
});

// 路由过滤
router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.requireAuth)) {
    // console.log(store)
    if (store.getters.token) {
      next();
    } else {
      next({
        path: "/login",
        query: {
          redirect: to.fullPath
        }
      });
    }
  } else {
    next();
  }
});

export default router;
