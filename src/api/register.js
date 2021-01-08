import request from "../utils/request.js";

// 手机密码登录
export const getPhoneRegister = (captcha, phone, password, nickname) => {
  return request({
    method: "post",
    url: "/register/cellphone",
    data: {
      captcha,
      phone,
      password,
      nickname,
    },
  });
};
