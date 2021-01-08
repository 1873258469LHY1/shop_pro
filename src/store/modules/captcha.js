import { getCaptcha } from "../../api/captcha.js";

export default {
  state: {
    code: "",
  },
  getters: {},
  actions: {
    async reqGetCaptcha({ commit }, phone) {
      const Captcha = await getCaptcha(phone);
      commit("REQ_GETCAPTCHA", Captcha);
      // console.log(commit, 111);
    },
  },
  mutations: {
    REQ_GETCAPTCHA(state, Captcha) {
      state.code = Captcha;
    },
  },
};
