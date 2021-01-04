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
        <div class="music-play">
          <img class="music-img" src="@/assets/imgs/test.jpg" alt="pic" />
          <p class="music-name">
            <span>一路向北</span>
          </p>
          <p class="music-singer">
            <span>周杰伦</span>
          </p>
        </div>
        <div class="music-play">
          <img class="music-img" src="@/assets/imgs/test.jpg" alt="pic" />
          <p class="music-name">
            <span>一路向北</span>
          </p>
          <p class="music-singer">
            <span>周杰伦</span>
          </p>
        </div>
        <div class="music-play">
          <img class="music-img" src="@/assets/imgs/test.jpg" alt="pic" />
          <p class="music-name">
            <span>一路向北</span>
          </p>
          <p class="music-singer">
            <span>周杰伦</span>
          </p>
        </div>
        <div class="music-play">
          <img class="music-img" src="@/assets/imgs/test.jpg" alt="pic" />
          <p class="music-name">
            <span>一路向北</span>
          </p>
          <p class="music-singer">
            <span>周杰伦</span>
          </p>
        </div>
        <div class="music-play">
          <img class="music-img" src="@/assets/imgs/test.jpg" alt="pic" />
          <p class="music-name">
            <span>一路向北</span>
          </p>
          <p class="music-singer">
            <span>周杰伦</span>
          </p>
        </div>
        <div class="music-play">
          <img class="music-img" src="@/assets/imgs/test.jpg" alt="pic" />
          <p class="music-name">
            <span>一路向北</span>
          </p>
          <p class="music-singer">
            <span>周杰伦</span>
          </p>
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
      isactive: 0, //默认第一个有样式
      arr: ["首播", "华语", "日韩", "网络", "热舞", "现场", "伤感"],
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
  .music-img {
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
