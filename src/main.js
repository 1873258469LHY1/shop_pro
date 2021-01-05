import Vue from 'vue'
import App from './App.vue'

<<<<<<< Updated upstream
Vue.config.productionTip = false
=======
import router from "./router";
import store from "./store";

import "./plugins/element.js";
import "./plugins/lazyload.js";
// import 'element-ui/lib/theme-chalk/index.css';

import "./assets/iconfont/iconfont.css"

// import "./mock/mockServer";
import "./styles/reset.css"
import "swiper/swiper-bundle.min.css";

Vue.config.productionTip = false;
>>>>>>> Stashed changes

new Vue({
  render: h => h(App),
}).$mount('#app')
