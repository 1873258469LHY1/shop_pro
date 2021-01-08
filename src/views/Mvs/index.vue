<template>
  <div class="warp">
    <div warp-top>
      <!-- 头部切换点击处 -->
      <ul class="musicList">
        <li
          v-for="(item, index) in arr"
          :class="{ bg: index == isactive }"
          @click="fn(index, item)"
          v-bind:key="index"
        >
          {{ item }}
        </li>
      </ul>
    </div>
    <VideoPlay :src="src" v-if="src" />
    <!-- 播放mv列表处 -->
    <div class="songListWarp" v-else>
      <ul class="songList">
        <li
          class="song"
          v-for="(item, index) in mvList"
          :key="index"
          @click="toVideo(item.id)"
          @mouseleave.stop="isShow = ''"
        >
          <div @mouseenter.stop="isShow = index" class="bigImg">
            <img :src="item.cover" />
          </div>
          <i class="iconfont icon-play1" v-show="isShow === index"></i>
          <p class="text">
            <span>{{ item.artistName }}</span>
          </p>
          <p class="icon">
            <i class="iconfont icon-bofang"> {{ item.playCount / 1000 }}万 </i>
          </p>
        </li>
      </ul>
    </div>

    <!-- 底部分页 -->
    <div class="page-warp" v-show="!src">
      <el-pagination
        background
        layout="prev, pager, next"
        :page-size.sync="sizes"
        :total="total"
        @current-change="handlePage"
      >
      </el-pagination>
    </div>
  </div>
</template>
<script>
import VideoPlay from "./VideoPlay/index";
import { reqMvsList, reqMvDetail } from "../../api/mv";
export default {
  name: "Album",
  data() {
    return {
      isactive: 0, //默认第一个有样式
      arr: ["全部", "内地", "港台", "欧美", "日本", "韩国"],
      isShow: "",
      mvList: [],
      total: 0,
      sizes: 30,
      limit: 30,
      src: "",
    };
  },
  components: {
    VideoPlay,
  },
  methods: {
    async handlePage(val) {
      //   console.log(val);
      const res = await reqMvsList(this.type, val * 30);
      let first = val * 30 - 30;
      let last = val * 30;
      this.mvList = res.data.slice(first, last);
    },
    //   请求音乐类别
    async fn(index, item) {
      //点击切换 变量的值 赋值为 index
      this.isactive = index;
      this.type = item;
      const res = await reqMvsList(item, "30");
      this.mvList = res.data;
    },
    async toVideo(id) {
      const res = await reqMvDetail(id);
      let src = res.data.brs[480];
      this.src = src;
    },
  },
  async mounted() {
    const res = await reqMvsList("全部", "30");
    this.total = res.count;
    this.mvList = res.data;
    console.log(this.mvList);
  },
};
</script>
<style scoped lang="less">
.warp {
  margin: 0 120px;
}
.musicList {
  display: flex;
  margin-top: 22px;
  margin-bottom: 48px;
  align-items: center;
  font-size: 14px;
  line-height: 1;
  font-family: "Microsoft YaHei", "Helvetica Neue", Helvetica, STHeiTi,
    sans-serif;
  li {
    padding: 7px 14px;
    text-align: center;
    border-radius: 14px;
    font-weight: 300;
    cursor: pointer;
    &.bg {
      background-color: #ffe443;
      font-weight: 700;
    }
  }
}
.page-warp {
  display: flex;
  justify-content: center;
  /deep/.el-pagination {
    &.is-background {
      .el-pager {
        li {
          &:not(.disabled).active {
            background-color: yellow;
            color: #333;
          }
        }
      }
    }
  }
}
.music-box {
  .music-top {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .music-name {
    cursor: pointer;
    font-size: 18px;
    font-weight: 400;
    line-height: 25px;
    margin-top: 12px;
  }
  .music-name :hover {
    font-weight: 700;
  }
  .music-singer {
    cursor: pointer;
    color: #999;
    font-weight: 300;
    margin-top: 8px;
    margin-bottom: 26px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .music-singer :hover {
    color: rgb(12, 12, 12);
  }
  //   新移入样式
}
.songListWarp {
  .songList {
    display: flex;
    flex-wrap: wrap;
    .song {
      width: 20%;
      padding-right: 20px;
      margin-bottom: 40px;
      box-sizing: border-box;
      position: relative;
      cursor: pointer;
      &:hover img {
        transform: scale(1.1);
        -ms-transform: scale(1.1);
      }
      // flex-shrink: 0;
      .bigImg {
        overflow: hidden;
        img {
          width: 250px;
          height: 150px;
          overflow: hidden;
          transition: all 0.5s;
          -ms-transition: all 0.5s;
        }
      }
      //播放显示隐藏
      .icon-play1 {
        position: absolute;
        font-size: 30px;
        height: 70px;
        width: 70px;
        text-align: center;
        line-height: 70px;
        border-radius: 50%;
        color: #333;
        left: 34%;
        top: 20%;
        z-index: 1;
        background-color: #fff;
      }
      .text {
        margin: 16px 0;
        font-size: 16px;
        &:hover {
          font-weight: 700;
        }
      }

      .icon {
        .icon-bofang {
          font-size: 14px;
          color: #999;
        }
      }
    }
  }
}
</style>

