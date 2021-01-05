import Mock from "mockjs";
import banners from "./banners.json";
import floors from "./rfloors.json";
import recommendSong from "./recommendSong.json";
import rankingList from "./rankingList.json";
import artist from "./artist.json";
import video from "./video.json";

// 一旦运行就会拦截Get请求，请求地址/mock/banners
// 并最后参数作为响应结果响应~

// 请求方式必须写小写（否则拦截不到）
Mock.mock("/mock/banners", "get", {
  code: 200,
  // 当随机数据只有一条时，就不在是数组，而是对象
  // "data|1": [banners],
  // 当随机数据有多条时，才是数组
  data: banners,
});

Mock.mock("/mock/songs", "get", {
  code: 200,
  // 当随机数据只有一条时，就不在是数组，而是对象
  // "data|1": [banners],
  // 当随机数据有多条时，才是数组
  data: recommendSong,
});

Mock.mock("/mock/rankinglist", "get", {
  code: 200,
  // 当随机数据只有一条时，就不在是数组，而是对象
  // "data|1": [banners],
  // 当随机数据有多条时，才是数组
  data: rankingList,
});

Mock.mock("/mock/artist", "get", {
  code: 200,
  // 当随机数据只有一条时，就不在是数组，而是对象
  // "data|1": [banners],
  // 当随机数据有多条时，才是数组
  data: artist,
});

Mock.mock("/mock/video", "get", {
  code: 200,
  // 当随机数据只有一条时，就不在是数组，而是对象
  // "data|1": [banners],
  // 当随机数据有多条时，才是数组
  data: video,
});

Mock.mock("/mock/floors", "get", {
  code: 200,
  // 随机数据要随机数量
  "data|3-5": floors,
  // 原始数据，不能随机数量
  // "data": floors,
});
