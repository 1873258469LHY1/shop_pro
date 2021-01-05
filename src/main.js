// @ts-nocheck
import Vue from "vue";
import App from "./App";

import router from "./router";
import store from "./store";

import "./plugins/element.js";
import "./plugins/lazyload.js";
import 'element-ui/lib/theme-chalk/index.css';

import "./assets/iconfont/iconfont.css"

// import "./mock/mockServer";
import "./styles/reset.css"
import "swiper/swiper-bundle.min.css";

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