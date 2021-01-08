import request from "../utils/request.js";

// 手机密码登录
export const getPhoneLogin = (phone, password) => {
  return request({
    method: "post",
    url: "/wy/login/cellphone",
    data: {
      phone,
      password,
    },
  }).then((res) => {
    console.log(res);
    return Promise.resolve(res);
  });
};
