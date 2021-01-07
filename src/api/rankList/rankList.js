import request from "../../utils/request";

export default {
  reqRankList() {
    return request({
      method: "GET",
      url: "/rank",
    });
  },
  reqRankDetail(bangId) {
    return request({
      method: "GET",
      url: "/rank/musicList",
      params: { bangId },
    });
  },
};
