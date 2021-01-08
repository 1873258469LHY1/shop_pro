import request from "../utils/request.js";

// 发送验证码
export const getCaptcha = (phone) => {
  return request({
    method: "get",
    url: `/wy/captcha/sent?phone=${phone}`,
  });
};
