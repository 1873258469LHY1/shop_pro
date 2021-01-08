import axios from "axios";
import { Message } from "element-ui";
// store就是vuex的store，也是this.$store
import store from "../store";
// 引入进度条插件
import NProgress from "nprogress";
import "nprogress/nprogress.css";

// 通过其值来区分运行环境
// console.log(process.env.NODE_ENV); // development  production
const prefix_url =
  process.env.NODE_ENV === "development" ? "/" : "http://tph.cool/";

const instance = axios.create({
  //  / 就是当前服务器地址
  baseURL: `${prefix_url}api`, // 公共的基础路径

  // baseURL: "/api", // 公共的基础路径
  headers: {
    // token: 'xxx' // 不行，登录接口不需要
  },
});

// 设置请求拦截器
instance.interceptors.request.use(
  (config) => {
    NProgress.start();

    // 修改config，用来添加公共的请求参数
    const token = store.state.user.token;
    if (token) {
      config.headers.token = token;
    }

    // config.headers.userTempId = userTempId;

    return config;
  }
  // 初始化Promise.resolve()返回默认成功的Promise，只会触发成功的回调
  // () => {},
);
// 设置响应拦截器
instance.interceptors.response.use(
  // 响应成功：当响应状态码为 2xx
  (response) => {
    NProgress.done();
    if (response.data.code === 200) {
      console.log(111, response);

      // 返回成功的响应数据
      let data = response.data;
      console.log(333, response.data);
      return data;
    }

    const { message } = response.data;
    // 提示错误
    Message.error(message);
    // 功能失败 --> 返回失败的Promise
    return Promise.reject(message);
  },
  // 响应失败：当响应状态码不是 2xx
  (error) => {
    // console.dir(error);
    // 进度条结束
    NProgress.done();
    const message = error.message || "网络错误";
    // 提示错误
    Message.error(message);
    return Promise.reject(message);
  }
);

export default instance;
