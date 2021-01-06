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
    <div class="music-box">
      <div class="music-top">
        <!-- <div class="music-play"> -->
        <div class="music-play" v-for="(item, index) in videoList" :key="index">
          <!-- <img :src="imgUrl" /> -->
          <video
            :id="item.id"
            class="video-js"
            autoplay
            controls
            loop
            style="width= 100%; height=100%; object-fit: fill"
            poster="../../assets/imgs/test.jpg"
          >
            <source :src="item.src" type="video/mp4" />
          </video>
          <div class="music-text">
            <p class="music-name"><span>一路向北</span></p>
            <p class="music-singer">
              <span>周杰伦</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部分页 -->
    <div class="page-warp">
      <el-pagination background layout="prev, pager, next" :total="1000">
      </el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  name: "Album",
  data() {
    return {
      // imgUrl: require(),
      isactive: 0, //默认第一个有样式
      arr: ["首播", "华语", "日韩", "网络", "热舞", "现场", "伤感"],
      videoList: [
        {
          id: 0,
          src: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",
        },
        {
          id: 1,
          src: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",
        },
        {
          id: 2,
          src: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",
        },
        {
          id: 3,
          src: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",
        },
        {
          id: 4,
          src: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",
        },
        {
          id: 5,
          src: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",
        },
      ],
    }
  },
  methods: {
    fn(index) {
      //点击切换 变量的值 赋值为 index
      this.isactive = index
      console.log(index)
    },
  },
}
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

  .video-js:hover {
    transform: scale(1.1, 1.1);
    width: 250px;
  }
  .video-js {
    width: 250px;
    height: 150px;
    cursor: pointer;
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
}
</style>
