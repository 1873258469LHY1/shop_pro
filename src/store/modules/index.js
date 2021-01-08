// 汇总所有vuex的模块
import user from "./user";
import login from "./login";
import captcha from "./captcha";
import register from "./register";

// 统一暴露出去
export default {
  user,
  register,
  login,
  captcha,
};
