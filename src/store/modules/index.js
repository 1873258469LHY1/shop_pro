// 汇总所有vuex的模块
import user from "./user";
import recommend from "./recommend";
import rankList from "./rankList";

// 统一暴露出去
export default {
  user,
  recommend,
  rankList,
};
