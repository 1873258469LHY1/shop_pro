<template>
  <div class="warp">
    <div warp-top>
      <!-- 头部切换点击处 -->
      <ul class="musicList">
        <li
          v-for="(item, index) in arr"
          :class="{ bg: index == isactive }"
          @click="fn(index)"
          v-bind:key="index"
        >
          {{ item }}
        </li>
      </ul>
    </div>
    <!-- 播放mv列表处 -->
    <div class="songListWarp">
      <ul class="songList">
        <li
          class="song"
          v-for="index of 30"
          :key="index"
          @mouseleave.stop="isShow = ''"
        >
          <div @mouseenter.stop="isShow = index" class="bigImg">
            <img
              @click="toVideo"
              src="https://img1.kuwo.cn/star/userpl2015/93/13/1607939343323_436245493_500.jpg"
            />
          </div>
          <i class="iconfont icon-play1" v-show="isShow === index"></i>
          <p class="text">
            <span>轻音乐||独处时,热闹与我无关</span>
          </p>
          <p class="icon">
            <i class="iconfont icon-bofang"> 2.3万 </i>
          </p>
        </li>
      </ul>
    </div>
    <!-- 底部分页 -->
    <div class="page-warp">
      <el-pagination background layout="prev, pager, next" :total="1000">
      </el-pagination>
    </div>
  </div>
</template>
<script>
import { reqMvList } from "../../api/mv";
export default {
  name: "Album",
  data() {
    return {
      isactive: 0, //默认第一个有样式
      arr: ["首播", "华语", "日韩", "网络", "热舞", "现场", "伤感"],
      isShow: "",
    };
  },
  methods: {
    fn(index) {
      //点击切换 变量的值 赋值为 index
      this.isactive = index;
      console.log(index);
    },
    toVideo() {
      window.open(
        "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",
        "newwindow",
        "height=700, width=1200, top=0, left=0, toolbar=no, menubar=no, scrollbars=1, resizable=no,location=no, status=no"
      );
    },
  },
  async mounted() {
    const res = await reqMvList();
    console.log(res);
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

