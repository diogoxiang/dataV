/**
 * Created by diogoxiang on 2017-8-18.
 * http配置
 */
import axios from "axios";
import store from "./../store";
import * as types from "./../store/mutation-types";
import router from "./../router";
// config 配置
import config from "../../.dioconfig/config";

// axios 配置
axios.defaults.timeout = config.timeout;
axios.defaults.baseURL = config.baseURL;

// http request 拦截器
axios.interceptors.request.use(
  config => {
    if (store.state.token) {
      config.headers.Authorization = `token ${store.state.token}`;
    }
    //
    // console.log("object");
    store.dispatch("setLoading", true);
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

// http response 拦截器
axios.interceptors.response.use(
  response => {
    // 隐藏loading
    store.dispatch("setLoading", false);
    return response.data;
  },
  error => {
    // 隐藏loading
    store.dispatch("setLoading", false);
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 401 清除token信息并跳转到登录页面
          store.commit(types.LOGOUT);
          router.replace({
            path: "login",
            query: {
              redirect: router.currentRoute.fullPath
            }
          });
      }
    }
    // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
    return Promise.reject(error.response.data);
  }
);

export default axios;
