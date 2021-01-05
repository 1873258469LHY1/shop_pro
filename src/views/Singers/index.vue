<template>
  <div class="outer">
    <div class="SingersContainer">
      <!-- 歌手音标导航区域 -->
      <div class="singerNavWrap">
        <ul class="singerNav">
          <li class="hot active">热门</li>
          <li>A</li>
          <li>B</li>
          <li>C</li>
          <li>D</li>
          <li>E</li>
          <li>F</li>
          <li>G</li>
          <li>H</li>
          <li>I</li>
          <li>J</li>
          <li>K</li>
          <li>L</li>
          <li>M</li>
          <li>N</li>
          <li>O</li>
          <li>P</li>
          <li>Q</li>
          <li>R</li>
          <li>S</li>
          <li>T</li>
          <li>U</li>
          <li>V</li>
          <li>W</li>
          <li>X</li>
          <li>Y</li>
          <li>Z</li>
          <li>#</li>
        </ul>
        <!-- 歌手地区语种导航 -->
        <ul class="singerDistrict">
          <li class="active">全部</li>
          <li>华语男</li>
          <li>华语女</li>
          <li>华语组合</li>
          <li>日韩男</li>
          <li>日韩女</li>
          <li>日韩组合</li>
          <li>欧美男</li>
          <li>欧美女</li>
          <li>欧美组合</li>
          <li>其他</li>
        </ul>
        <!-- 歌手图片展示 -->
        <div class="singerPictureWrap">
          <!-- 大图 -->
          <ul>
            <li class="bigSingerPicture" v-for="index of 12" :key="index">
              <img
                src="https://img1.kuwo.cn/star/starheads/300/10/6/294045140.jpg"
                class="picture"
              />
              <p class="name">周杰伦</p>
              <p class="text">1386首歌</p>
            </li>
          </ul>
          <!-- 小图 -->
          <ul>
            <li class="smallSingerPicture" v-for="index of 90" :key="index">
              <div class="singerImg">
                <img
                  src="https://img2.kuwo.cn/star/starheads/70/63/17/4141505161.jpg"
                />
              </div>
              <div class="singerName">
                <span>周深</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!-- 轮播图 -->
      <el-pagination
        :current-page="1"
        :page-size="10"
        layout=" prev, pager, next"
        :total="1000"
        pager-count="4"
        background
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "Singers",
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.outer {
  min-width: 1180px;
  max-width: 1640px;
  padding: 0 120px;
  margin: 0 auto;
}
.SingersContainer {
  font-size: 14px;
  width: 1400px;
  margin: 0 auto;
  //歌手音标导航
  .singerNav {
    display: flex;
    li {
      width: 28px;
      height: 28px;
      margin-right: 14px;
      flex-shrink: 0;
      text-align: center;
      line-height: 28px;
      &.active {
        background-color: #ffe443;
        border-radius: 50%;
        font-weight: 700;
      }
      &.hot {
        width: 56px;
        border-radius: 14px;
        font-weight: 700;
      }
    }
  }
  //歌手地区导航
  .singerDistrict {
    margin: 25px 0;
    display: flex;

    li {
      padding: 5px 12px;
      margin-right: 8px;

      &.active {
        background-color: #ffe443;
        border-radius: 15px;
        font-weight: 700;
      }
    }
  }
  //歌手美照跳转
  .singerPictureWrap {
    ul {
      display: flex;
      flex-wrap: wrap;
      //大图
      .bigSingerPicture {
        margin: 22px;
        .picture {
          width: 189px;
          height: 189px;
          border-radius: 50%;
        }
        .name {
          margin: 12px 0 6px 0;
          text-align: center;
          font-size: 16px;
        }
        .text {
          font-size: 12px;
          text-align: center;
          color: #999;
        }
      }
      //小图
      .smallSingerPicture {
        display: flex;
        margin: 22px;
        width: 189px;
        .singerImg {
          img {
            width: 38px;
            height: 38px;
            border-radius: 50%;
          }
        }
        .singerName {
          span {
            line-height: 38px;
            margin-left: 18px;
          }
        }
      }
    }
  }
  .el-pagination {
    text-align: center;
  }
  /deep/ .btn-prev {
    height: 42px;
    width: 42px;
    background-color: #fff;
  }
  /deep/ .el-pager li {
    height: 42px;
    width: 42px;
    background-color: #fff;
    color: #999;
    line-height: 42px;
    font-size: 14px;
    font-weight: 100;
  }
  /deep/ .el-pagination .el-pager li:not(.disabled).active {
    background-color: #ffe443;
    color: #333;
  }
  /deep/ .el-pagination.is-background .el-pager li:not(.disabled):hover {
    background-color: #ffe443;
    color: #333;
  }
  /deep/ .btn-next {
    height: 42px;
    width: 42px;
    background-color: #fff;
  }
}
</style>>
