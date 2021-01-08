<template>
  <div class="outer">
    <div class="container">
      <div class="info_l">
        <div class="poster">
          <img :src="playlist.img500" />
        </div>
        <div class="text">
          <em>歌单简介</em>
          <p>
            {{ playlist.info }}
          </p>
          <div class="btn">
            <i class="iconfont icon-xiazai"> 下载该歌单</i>
          </div>
        </div>
        <div class="qrCode">
          <img
            src="https://h5static.kuwo.cn/www/kw-www/img/qrcode.d53daff.png"
          />
          <p>手机扫描二维码下载客户端</p>
        </div>
      </div>
      <div class="info_r">
        <div>
          <p class="songName">
            <em>{{ playlist.name }}</em>
            <i class="iconfont icon-mv"></i>
          </p>
          <p class="name">{{ playlist.userName }}</p>
          <p class="albumName">
            <span class="albumNameTT">{{ playlist.tag }}</span>
          </p>
          <!-- 按钮区域 -->
          <div class="but">
            <el-button round class="iconfont icon-bofang"> 立即播放</el-button>
            <el-button round class="iconfont icon-icon-test"> 添加</el-button>
            <el-button round class="iconfont icon-shoucang"> 收藏</el-button>
            <el-button round class="iconfont icon-share"> 分享</el-button>
            <el-button round class="iconfont icon-pinglun"> 评论</el-button>
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
              v-for="(musicList, index) in musicList"
              :key="index"
              :class="{ defaultBgc: index % 2 === 1 }"
            >
              <ul>
                <li class="li11">{{ index + 1 }}</li>
                <li class="li12" @click="playMusic(musicList.rid, musicList)">
                  <img v-lazy="musicList.pic" />
                  <a style="cursor: pointer">{{ musicList.name }}</a>
                </li>
                <li class="li13" style="height: 100%">
                  <a>{{ musicList.artist }}</a>
                </li>
                <li class="li14">
                  <em> {{ musicList.songTimeMinutes }} </em>
                </li>
                <!-- 显示隐藏播放定位 -->
                <div class="isShowPlay">
                  <i
                    class="iconfont icon-bofang"
                    @click="playMusic(musicList.rid, musicList)"
                    style="cursor: pointer"
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
            :current-page.sync="property.pn"
            :page-size="property.rn"
            layout=" prev, pager, next"
            :total="total"
            background
            :pager-count="5"
          >
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getPlaylistSongList } from "../../api/playlistDetail";
export default {
  name: "playlistDetail",
  data() {
    return {
      // 请求歌曲列表参数
      property: {
        pid: 0,
        rn: 10,
        pn: 1,
      },
      total: 0,
      playlist: {},
      musicList: [],
    };
  },
  methods: {
    //跳转到播放页面
    playMusic(rid) {
      this.$router.push(`/play_detail/${rid}`);
    },
    async getPlaylistSongList() {
      const res = await getPlaylistSongList(this.property);
      this.total = res.data.total;
      this.playlist = res.data;
      this.musicList = res.data.musicList;
    },

    //改变页码
    handleCurrentChange() {
      this.getPlaylistSongList();
      console.log(111);
    },
  },
  async mounted() {
    this.property.pid = this.$route.params.pid;
    this.getPlaylistSongList();
  },
};
</script>
<style lang='less'  scoped>
.outer {
  min-width: 1180px;
  max-width: 1640px;
  padding: 0 120px;
  margin: 0 auto;
  .container {
    max-width: 1400px;

    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
}
.info_l {
  width: 22%;
  .poster {
    padding-bottom: 40px;
    img {
      width: 100%;
    }
  }
  .text {
    em {
      font-size: 20px;
      font-weight: 700;
    }
    p {
      color: #666;
      font-size: 14px;
      padding: 20px 9px 0;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 4;
      overflow: hidden;
    }
    .btn {
      display: flex;
      justify-content: center;
      padding-top: 36px;

      i {
        background: #ffe12c;
        box-shadow: 0 4px 10px 0 rgba(255, 223, 31, 0.3);
        padding: 10px 50px;
        border-radius: 20px 20px;
      }
    }
  }
  .qrCode {
    border-top: 1px solid #efefef;
    margin: 36px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      margin: 36px 0 20px;
      width: 50%;
    }
    p {
      font-size: 16px;
      font-weight: 300;
      color: #666;
    }
  }
}
.info_r {
  width: 70%;
  .songName {
    line-height: 40px;
    font-size: 30px;
    font-weight: 600;
    i {
      font-size: 22px;
      margin-left: 20px;
    }
  }
  .name {
    font-size: 18px;
    margin: 12px 0;
    height: 25px;
    color: #666;
    line-height: 25px;
  }
  .albumName {
    font-size: 14px;
    .albumNameTT {
      color: #296294;
      font-weight: 400;
      margin-right: 10px;
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
          width: 68px;
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
      & .isShowPlay {
        display: block;
      }
      & .li14 {
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
        width: 442px;
        img {
          width: 54px;
          height: 54px;
          vertical-align: middle;
        }
        > a {
          padding: 0 36px;
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
</style>