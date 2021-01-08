<template>
  <div class="outer">
    <!-- 背景定位 -->
    <div class="bg"></div>
    <div class="singerDetailWrap">
      <!-- 歌手详情 -->
      <div class="singerDetail">
        <!-- 照片 -->
        <div class="singerImg">
          <img :src="singerIntro.pic" alt="" />
        </div>
        <!-- 歌手信息 -->
        <div class="singerInfo">
          <p class="singerName">
            <span>{{ singerIntro.name }}</span>
          </p>
          <div class="singerFlux">
            <strong>
              <span class="active">单曲:</span>
              <em>{{ singerIntro.musicNum }}</em>
            </strong>
            <strong>
              <span>专辑:</span>
              <em>{{ singerIntro.albumNum }}</em>
            </strong>
            <strong>
              <span>MV:</span>
              <em>{{ singerIntro.mvNum }}</em>
            </strong>
            <strong>
              <span>粉丝:</span>
              <em>{{ fansNum }}</em>
            </strong>
          </div>

          <div class="hometown">
            <strong>
              <span>英文名:</span>
              <em>{{ singerIntro.aartist }}</em>
            </strong>
            <strong>
              <span>国际:</span>
              <em>中国台湾</em>
            </strong>
            <strong>
              <span>语言:</span>
              <em>国语</em>
            </strong>
            <strong>
              <span>出生地:</span>
              <em>台湾新北市林口去</em>
            </strong>
            <strong>
              <span>星座:</span>
              <em>摩羯座</em>
            </strong>
            <b>全部 ></b>
          </div>

          <div class="but">
            <el-button round class="iconfont icon-bofang">
              播放全部歌曲</el-button
            >
            <el-button round class="iconfont icon-shoucang"> 收藏</el-button>
            <el-button round class="iconfont icon-computer">
              使用客户端查看歌手</el-button
            >
          </div>
        </div>
      </div>

      <!-- 歌曲列表 -->
      <div class="songWrap">
        <div class="songListLift">
          <!-- 单曲专辑MV简介导航 -->
          <div class="songNav">
            <span class="active">单曲</span>
            <span>专辑</span>
            <span>MV</span>
            <span>简介</span>
          </div>
          <!-- 歌曲列表 -->
          <div class="songList">
            <!-- 头部 -->
            <div class="detailHarder">
              <ul>
                <li class="li01">序号</li>
                <li class="li02">歌曲</li>
                <li class="li03">专辑</li>
                <li class="li04">时长</li>
              </ul>
            </div>
            <!-- 主体 -->
            <div
              class="detail"
              v-for="(single, index) in singleList"
              :key="index"
              :class="{ defaultBgc: index % 2 === 1 }"
            >
              <ul>
                <li class="li11">{{ index + 1 }}</li>
                <li class="li12">
                  <img v-lazy="single.pic" />
                  <a
                    style="cursor: pointer"
                    @click="playMusic(single.musicrid)"
                    >{{ single.name }}</a
                  >
                </li>
                <li class="li13" style="height: 100%">
                  <a>{{ single.album }}</a>
                </li>
                <li class="li14" >
                  <em> {{ single.songTimeMinutes }} </em>
                </li>
                <!-- 显示隐藏播放定位 -->
                <div class="isShowPlay">
                  <i
                    class="iconfont icon-bofang"
                    @click="playMusic(single.musicrid)"
                    style="cursor: pointer;"
                  ></i>
                  <i class="iconfont icon-icon-test"></i>
                  <i class="iconfont icon-shoucang"></i>
                  <i class="iconfont icon-xiazai"></i>
                </div>
              </ul>
            </div>
          </div>

          <!-- 分页 -->
          <el-pagination
            @current-change="handleCurrentChange"
            :current-page.sync="singerParameter.pn"
            :page-size="singerParameter.rn"
            layout=" prev, pager, next"
            :total="total"
            background
            :pager-count="5"
          >
          </el-pagination>

          <!-- 大图 -->
          <div class="bigImg">
            <a href="">
              <img
                src="https://h5static.kuwo.cn/upload/image/625fb48fb5c8d6847f4a5b7f9d285f73661ddf3c6d2281d60f9b4cacb80ab41e.jpg"
              />
            </a>
          </div>
        </div>

        <!-- 右边下载 -->
        <div class="downloadRight">
          <p>
            <em>下载酷我音乐</em>
          </p>
          <p>
            <span>无损音质,还原爱豆动听音乐</span>
          </p>
          <div class="downloadLogo">
            <ul>
              <li>
                <a href="">
                  <i class="iconfont icon-win"></i>
                </a>
                <p>PC版</p>
              </li>
              <li>
                <a href="">
                  <i class="iconfont icon-android"></i>
                </a>
                <p>安卓</p>
              </li>
              <li>
                <a href="">
                  <i class="iconfont icon-iphone"></i>
                </a>
                <p>苹果</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getSingleList } from "../../api/singers";
export default {
  name: "SingerDetail",
  data() {
    return {
      // 音乐播放地址
      //   musicUrl: "",
      // 请求参数
      singerParameter: {
        artistid: "",
        rn: 20,
        pn: 1,
      },
      // 单曲列表
      singleList: [],
      // 总条数
      total: 0,
      //歌手简介
      singerIntro: {},
    };
  },
  computed: {
    fansNum() {
      let fansNum = this.singerIntro.artistFans;
      if (fansNum / 10000 > 1) {
        fansNum = fansNum / 10000;
        fansNum = fansNum.toFixed(1) + "W";
      }
      return fansNum;
    },
  },
  methods: {
    // 播放音乐
    playMusic(rid) {
      this.$router.push(`/play_detail/${rid}`);
    },
    //改变页码
    handleCurrentChange() {
      this.getSingleList();
    },
    //获取单曲列表
    getSingleList() {
      getSingleList(this.singerParameter).then((res) => {
        this.total = +res.data.total;
        this.singleList = res.data.list;
      });
    },
  },
  mounted() {
    this.singerParameter.artistid = this.$route.params.artistid;
    const singerIntro = JSON.parse(sessionStorage.getItem("singerIntro"));
    this.singerIntro = singerIntro;
    this.getSingleList();
  },
};
</script>
<style lang='less' rel='stylesheet/less' scoped>
.outer {
  min-width: 1180px;
  max-width: 1640px;
  padding: 0 132px;
  margin: 0 auto;
  position: relative;
}
//背景
.bg {
  width: 100%;
  height: 314px;
  background-color: #f5f5f5;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  // transform: translateX(-50%);
}
.singerDetailWrap {
  width: 1400px;
  margin: 0 auto;

  .singerDetail {
    height: 272px;
    padding: 42px 0 60px 0;

    .singerImg {
      width: 230px;
      height: 230px;
      border-radius: 50%;
      overflow: hidden;
      float: left;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .singerInfo {
      float: left;
      margin: 40px;
      .singerName {
        height: 42px;
        line-height: 42px;
        font-size: 30px;
        font-weight: 500;
      }
      .singerFlux {
        margin: 16px 0;
        font-size: 18px;
        line-height: 25px;
        color: #333;
        font-weight: 300;
        strong {
          margin-right: 40px;
          font-weight: 300;
          span {
            margin-right: 10px;
            color: #999;
          }
        }
      }
      .hometown {
        font-size: 14px;
        color: #999;
        b {
          color: #296294;
        }
        strong {
          margin-right: 24px;
          span {
            margin-right: 10px;
          }
        }
      }
      .but {
        margin-top: 30px;
        button {
          background: #ebebeb;
          border: none;
          &:hover {
            color: #333;
          }
          &:focus {
            color: #333;
          }
        }
        .icon-bofang {
          background-color: #ffe12c;
          color: #333;
        }
      }
    }
  }

  //歌曲列表
  .songWrap {
    overflow: hidden;
    //
    .songListLift {
      float: left;
      .songNav {
        font-size: 22px;
        color: #666;
        span {
          margin-right: 44px;
          &.active {
            font-weight: 600;
            color: #000;
            position: relative;
            &::before {
              position: absolute;
              content: "";
              left: 0;
              bottom: 6px;
              width: 100%;
              height: 6px;
              background: #ffe443;
              z-index: -1;
            }
          }
        }
      }
      .songList {
        margin-top: 20px;
        margin-bottom: 40px;
        .detailHarder {
          background-color: #fafafa;
          > ul {
            overflow: hidden;
            margin: 26px 0 0 26px;
            > li {
              float: left;
              height: 46px;
              line-height: 46px;
              font-size: 14px;
              color: #999;
            }
            .li01 {
              width: 155px;
            }
            .li02 {
              width: 445px;
            }
            .li03 {
              width: 370px;
            }
            .li04 {
              width: 70px;
            }
          }
        }
      }
      .detail {
        &.defaultBgc {
          background: #fafafa;
        }
        &:hover {
          background-color: #f5f5f5;
          & .isShowPlay{
            display: block;
          }
          & .li14{
            display: none;
          }
        }
        
        > ul {
          margin-left: 40px;
          overflow: hidden;
          height: 70px;
          line-height: 70px;
          font-size: 14px;
          position: relative;
          // 移入播放定位
          .isShowPlay {
            width: 160px;
            height: 100%;
            position: absolute;
            z-index: 1;
            right: 28px;
            display: none;
            > i {
              font-size: 18px;
              color: #333;
              margin: 0 10px;
            }
          }
          > li {
            float: left;
          }
          .li11 {
            width: 50px;
            font-weight: 600;
          }
          .li12 {
            width: 534px;
            img {
              width: 54px;
              height: 54px;
              vertical-align: middle;
            }
            > a {
              margin-left: 34px;
              color: #333;
            }
          }
          .li13 {
            width: 370px;
          }
          .li14 {
            width: 59px;
          }
        }
      }

      // 分页
      .el-pagination {
        text-align: center;
      }
      //大图
      .bigImg {
        margin-top: 40px;
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
    // 下载
    .downloadRight {
      margin-top: 60px;
      float: right;
      p {
        margin-top: 10px;
        em {
          font-size: 22px;
        }
        span {
          font-size: 14px;
          color: #999;
        }
      }
      .downloadLogo {
        ul {
          display: flex;
          margin-top: 28px;
          li {
            a {
              display: block;
              i {
                display: block;
                font-size: 40px;
                color: #fff;
                height: 70px;
                line-height: 70px;
                width: 70px;
                text-align: center;
                margin-right: 20px;
                &.icon-win {
                  background-color: #3998f3;
                }
                &.icon-android {
                  background-color: #13ba82;
                }
                &.icon-iphone {
                  background-color: #666;
                }
              }
            }

            .icon-win {
              font-size: 30px;
            }
          }
        }
      }
    }
  }
}
</style>