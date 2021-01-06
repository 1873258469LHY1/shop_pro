// @ts-nocheck
import Vue from "vue";
import VueRouter from "vue-router";
import Vip from "../views/Vip";
import Downtingshu from "../views/Downtingshu";

const Musicion = () => import("../views/Musicion");
const Login = () => import("../views/Login");
const Register = () => import("../views/Register");
// const App = () => import(/* webpackChunkName: "Home" */ "../App");
const RankList = () =>
  import( /* webpackChunkName: "RankList" */ "../views/rankList/rankList.vue");
const Recommend = () =>
  import( /* webpackChunkName: "RankList" */ "../views/recommend/recommend.vue");
//歌手
const Singers = () => import( /* webpackChunkName: "Home" */ "../views/Singers");
//歌手详情
const SingersDetail = () => import( /* webpackChunkName: "Home" */ "../views/SingerDetail");

const Playlists = () => import( /* webpackChunkName: "Home" */ "../views/Playlists");

// 重写push和replace方法
const push = VueRouter.prototype.push;
const replace = VueRouter.prototype.replace;

VueRouter.prototype.push = function (location, onComplete, onAbort) {
  if (onComplete && onAbort) {
    return push.call(this, location, onComplete, onAbort);
  }
  return push.call(this, location, onComplete, () => {});
};

VueRouter.prototype.replace = function (location, onComplete, onAbort) {
  // 如果用户想处理失败，就处理
  if (onComplete && onAbort) {
    return replace.call(this, location, onComplete, onAbort);
  }
  // 如果用户不处理失败，给默认值：空函数
  return replace.call(this, location, onComplete, () => {});
};

// 安装插件
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  // 路由配置
  routes: [{
      path: "/musicion",
      component: Musicion,
    }, {
      path: "/singers",
      component: Singers,
    }, {
      path: "/singer_detail",
      component: SingersDetail
    }, {
      path: "/playlists",
      component: Playlists
    },
    {
      path: "/login",
      component: Login,
    }, {
      path: "/register",
      component: Register,
    }, {
      path: "/vip",
      component: Vip,
    }, {
      path: "/downtingshu",
      component: Downtingshu,
    }, {
      path: "/ranklist",
      component: RankList,
    }, {
      path: "/",
      component: Recommend,
    },
  ],
  scrollBehavior() {
    return {
      x: 0,
      y: 0
    };
  },

})
// 路由模式
// mode: "hash",

// 每次切换路由页面滚动条位置

export default router