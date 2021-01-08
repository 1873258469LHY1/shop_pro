import { getPhoneRegister } from "@api/register.js";

export default {
  state: {},
  getters: {},
  actions: {
    async reqgetPhoneRegister(
      { commit },
      { captcha, phone, password, nickname }
    ) {
      console.log(222, getPhoneRegister);

      const PhoneRegister = await getPhoneRegister(
        captcha,
        phone,
        password,
        nickname
      );
      console.log(commit, PhoneRegister);
      //   commit("REQ_PHONELOGIN", PhoneRegister);
    },
  },
  mutations: {
    // REQ_PHONELOGIN(state, PhoneRegister) {
    //   state.profile = PhoneRegister;
    // },
  },
};
