import { getPhoneLogin } from "@api/login.js";

export default {
  state: {
    phone: "",
    password: "",
  },
  getters: {},
  actions: {
    async reqPhoneLogin({ commit }, { phone, password }) {
      const PhoneLogin = await getPhoneLogin(phone, password);
      commit("REQ_PHONELOGIN", PhoneLogin);
    },
  },
  mutations: {
    REQ_PHONELOGIN(state, { phone, password }) {
      state.phone = phone;
      state.password = password;
    },
  },
};
