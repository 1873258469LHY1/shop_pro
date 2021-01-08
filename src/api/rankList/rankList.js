//排行榜
import request from "../../utils/request";

export default {
  //获取排行榜数据
  reqRankList() {
    return request({
      method: "GET",
      url: "/rank",
    });
  },
  //获取排行榜歌曲数据
  reqRankDetail(bangId) {
    return request({
      method: "GET",
      url: "/rank/musicList",
      params: { bangId },
    });
  },
  //获取评论数据
  reqGetComments(sid, type) {
    return request({
      method: "GET",
      url: `/comment?sid=${sid}&type=${type}`,
      // params: { sid, type: aaa },
    });
  },
  //获取歌曲地址
  reqSongUrl(rid) {
    return request({
      method: "GET",
      url: `/url?rid=${rid}`,
    });
  },
};
