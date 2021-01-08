// @ts-nocheck
import Vue from "vue";
import VueRouter from "vue-router";
import Vip from "../views/Vip";
import Downtingshu from "../views/Downtingshu";
import Quicklogin from "../views/Quicklogin";
const Musicion = () => import("../views/Musicion");
const Login = () => import("../views/Login");
const Register = () => import("../views/Register");
// const App = () => import(/* webpackChunkName: "Home" */ "../App");
//排行榜页面
const RankList = () =>
  import(/* webpackChunkName: "RankList" */ "../views/rankList/index.vue");
//推荐页面
const Recommend = () => import("../views/recommend/recommend.vue");
//歌手
const Singers = () => import("../views/Singers");
//歌手详情
const SingersDetail = () => import("../views/SingerDetail");

const Playlists = () => import("../views/Playlists");

const Mvs = () => import("../views/Mvs");

const PlayDetail = () =>
  import(/* webpackChunkName: "Home" */ "../views/playDetail");
import(/* webpackChunkName: "RankList" */ "../views/recommend/recommend.vue");
// 重写push和replace方法
const push = VueRouter.prototype.push;
const replace = VueRouter.prototype.replace;

VueRouter.prototype.push = function(location, onComplete, onAbort) {
  if (onComplete && onAbort) {
    return push.call(this, location, onComplete, onAbort);
  }
  return push.call(this, location, onComplete, () => {});
};

VueRouter.prototype.replace = function(location, onComplete, onAbort) {
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
  routes: [
    {
      path: "/singers",
      component: Singers,
    },
    {
      path: "/singer_detail/:artistid",
      component: SingersDetail,
      name: "singersDetail",
    },
    {
      path: "/playlists",
      component: Playlists,
    },
    {
      path: "/musicion",
      component: Musicion,
    },
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/register",
      component: Register,
    },
    {
      path: "/vip",
      component: Vip,
    },
    {
      path: "/downtingshu",
      component: Downtingshu,
    },
    {
      //排行榜
      path: "/ranklist",
      component: RankList,
    },
    {
      //推荐
      path: "/",
      component: Recommend,
    },

    {
      path: "/mvs",
      component: Mvs,
    },
    {
      path: "/play_detail/:rid?",
      component: PlayDetail,
      name: "playDetail",
      meta: "isShowCommendNav",
    },
    {
      path: "/Quicklogin",
      component: Quicklogin,
    },
  ],

  scrollBehavior() {
    return {
      x: 0,
      y: 0,
    };
  },
});

export default router;
