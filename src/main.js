// @ts-nocheck
import Vue from "vue";
import App from "./App";


import router from "./router";
import store from "./store";
import Video from 'video.js'

import 'video.js/dist/video-js.css'
import "./plugins/element.js";
import "./plugins/lazyload.js";

// import "./mock/mockServer";
import "./styles/reset.css"
import "swiper/swiper-bundle.min.css";
import 'element-ui/lib/theme-chalk/index.css'


Vue.config.productionTip = false;

new Vue({
    beforeCreate() {
        // 初始化全局事件总线对象
        Vue.prototype.$bus = this;
        Vue.prototype.$video = Video;
    },
    render: (h) => h(App),
    router,
    store,
}).$mount("#app");
