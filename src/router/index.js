// @ts-nocheck
import Vue from "vue";
import VueRouter from "vue-router";
// import store from "../store";

const Home = () => import(/* webpackChunkName: "Home" */"../components/Home");
const App = () => import(/* webpackChunkName: "Home" */"../App");
const Album = () => import(/* webpackChunkName: "Home" */"../views/Album");

// 重写push和replace方法
const push = VueRouter.prototype.push;
const replace = VueRouter.prototype.replace;

VueRouter.prototype.push = function (location, onComplete, onAbort) {
    if (onComplete && onAbort) {
        return push.call(this, location, onComplete, onAbort);
    }
    return push.call(this, location, onComplete, () => { });
};

VueRouter.prototype.replace = function (location, onComplete, onAbort) {
    // 如果用户想处理失败，就处理
    if (onComplete && onAbort) {
        return replace.call(this, location, onComplete, onAbort);
    }
    // 如果用户不处理失败，给默认值：空函数
    return replace.call(this, location, onComplete, () => { });
};

// 安装插件
Vue.use(VueRouter);

const router = new VueRouter({
    // 路由模式
    // mode: "hash",
    mode: "history",
    // 路由配置
    routes: [
        {
            path: "/",
            component: App,
        },
        {
            path: "/home",
            component: Home,
        },
        {
            path: "/Album",
            component: Album,
        },

    ],
    // 每次切换路由页面滚动条位置
    scrollBehavior() {
        return { x: 0, y: 0 };
    },
});

export default router

