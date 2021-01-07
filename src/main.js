// @ts-nocheck
import Vue from "vue";
import App from "./App";

import router from "./router";
import store from "./store";

import "element-ui/lib/theme-chalk/index.css";
import "./plugins/element.js";
import "./plugins/lazyload.js";
import "element-ui/lib/theme-chalk/index.css";

import "./assets/iconfont/iconfont.css";

// import "./mock/mockServer";
import "element-ui/lib/theme-chalk/index.css";
import "./mock/mockServer";
import "./styles/reset.css";
import "swiper/swiper-bundle.min.css";

// 引入包含所有接口请求函数模块的API对象
import API from "./api";

Vue.prototype.$API = API;

Vue.config.productionTip = false;

new Vue({
  beforeCreate() {
    // 初始化全局事件总线对象
    Vue.prototype.$bus = this;
  },
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
