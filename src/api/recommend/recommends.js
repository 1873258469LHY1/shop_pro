import request from "../../utils/request";

export default {
  reqRecommendBanner() {
    return request({
      method: "GET",
      url: "/banner",
    });
  },

  reqRecommendSong() {
    return request({
      method: "GET",
      url: "/rec_gedan",
    });
  },

  palyListTags() {
    return request({
      method: "GET",
      url: "/playList_tags",
    });
  },
};
