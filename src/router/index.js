// @ts-nocheck
import Vue from "vue";
import VueRouter from "vue-router";
// import store from "../store";


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
    // 路由模式
    // mode: "hash",
    mode: "history",
    // 路由配置
    routes: [{
            path: "/singers",
            component: Singers,
        },
        {
            path: "/singer_detail",
            component: SingersDetail
        },
        {
            path: "/playlists",
            component: Playlists
        }
    ],
    // 每次切换路由页面滚动条位置
    scrollBehavior() {
        return {
            x: 0,
            y: 0
        };
    },
});

export default router