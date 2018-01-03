// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";

import App from "./App";
import router from "./router";
import store from "./store";

// 全局SCSS
import "./assets/scss/app.scss";

// 第三方 时间库
// import Moment from 'vue-moment'; // 时间格试化库
// Vue.use(Moment)
/**
 *      <!-- 时间用的法  -->
        <!-- <span>{{ someDate | moment("from","now") }}</span> -->
 */
// 第三方修改head 库 方便修改每个页的title. 在移动端有用
/**
 *  import Meta from 'vue-meta'
    Vue.use(Meta)
 */
// 第三方图片赖加载库
/**
 *  
 * import VueLazyload from 'vue-lazyload'
    Vue.use(VueLazyload, {
      preLoad: 1.3,
      error: 'dist/error.png',
      loading: 'static/loading-spin.svg',
      attempt: 1
    })
 */

//  第三方  数据校验插件
//  第三方 axios
import axios from "./server/http";
// 将axios挂载到prototype上，在组件中可以直接使用this.axios访问
Vue.prototype.axios = axios;

// 第三方 UI组件库
// import { Header } from 'mint-ui';
// import 'mint-ui/lib/style.css';
// Vue.component(Header.name, Header);
// end

// VueResource 库
// import VueResource from 'vue-resource'
// Vue.use(VueResource)

// 自定义过滤器
import filter from "./components/util/filter";
Vue.use(filter);

Vue.config.productionTip = false;

// 功能组件
// import Dialog from './components/common/dialog.vue'
// Vue.component('dialog', Dialog)

/* eslint-disable no-new */
new Vue({
  el: "#app",
  template: "<App/>",
  components: {
    App
  },
  axios,
  router,
  store,
  beforeCreate() {
    // URL参数与路径
    const query =
      window.location.search &&
      window.location.search
        .slice(1)
        .split("&")
        .map(q => {
          return q.split("=");
        })
        .reduce((obj, q) => {
          obj[q[0]] = q[1];
          return obj;
        }, {});

    // 调用 this.$root.enterAfterMounted
    this.enterAfterMounted = {
      query,
      path: window.location.pathname
    };
  }
});
