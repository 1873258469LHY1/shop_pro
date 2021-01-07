import request from "../../utils/request";

export default {
  reqRankList() {
    return request({
      method: "GET",
      url: "/rank",
    });
  },
  reqRankDetail(bangId, rn) {
    return request({
      method: "GET",
      url: `/rank/musicList/${bangId}?${rn}`,
    });
  },
};
