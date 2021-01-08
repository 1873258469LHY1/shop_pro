//推荐
import request from "../../utils/request";

export default {
  //获取轮播图
  reqRecommendBanner() {
    return request({
      method: "GET",
      url: "/banner",
    });
  },
  //推荐歌单信息
  reqRecommendSong() {
    return request({
      method: "GET",
      url: "/rec_gedan",
    });
  },
  //排行榜信息
  reqRankList() {
    return request({
      method: "GET",
      url: "/rank/rec_bangList",
    });
  },
  //推荐歌手
  reqArtist() {
    return request({
      method: "GET",
      url: "/rec_singer",
    });
  },
  //主播电台
  reqRadio() {
    return request({
      method: "GET",
      url: "/radio",
    });
  },
};
