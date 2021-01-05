// @ts-nocheck
import Vue from "vue";
import App from "./App";

<<<<<<< HEAD
<<<<<<< Updated upstream
Vue.config.productionTip = false
=======
=======
>>>>>>> master
import router from "./router";
import store from "./store";

import "./plugins/element.js";
import "./plugins/lazyload.js";
<<<<<<< HEAD
// import 'element-ui/lib/theme-chalk/index.css';
=======
import 'element-ui/lib/theme-chalk/index.css';
>>>>>>> master

import "./assets/iconfont/iconfont.css"

// import "./mock/mockServer";
import "./styles/reset.css"
import "swiper/swiper-bundle.min.css";

Vue.config.productionTip = false;
<<<<<<< HEAD
>>>>>>> Stashed changes
=======
>>>>>>> master

new Vue({
    beforeCreate() {
        // 初始化全局事件总线对象
        Vue.prototype.$bus = this;
    },
    render: (h) => h(App),
    router,
    store,
}).$mount("#app");
