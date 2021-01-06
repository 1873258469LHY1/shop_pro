<template>
  <div class="recommendContainer">
    <div class="rec-nav">
      <el-carousel trigger="click" height="266px">
        <el-carousel-item v-for="item in bannersList" :key="item.id">
          <img :src="item.imgUrl" alt="" />
        </el-carousel-item>
      </el-carousel>
      <div class="nav-footer">
        <div>
          <i class="iconfont icon-iconset0289"></i>
          <span>下载PC版</span>
        </div>
        <div>
          <i class="iconfont icon-iconset0290"></i>
          <span>下载Android版</span>
        </div>
        <div>
          <i class="iconfont icon-iPhone"></i>
          <span>下载iPhone版</span>
        </div>
        <div>
          <i class="iconfont icon-pc1"></i>
          <span>下载其他版本</span>
        </div>
      </div>
    </div>
    <div>
      <div class="songTop">
        <h3 class="title">推荐歌单</h3>
        <div class="songList">
          <span class="rec-bar active">每日推荐</span>
          <span class="rec-bar">翻唱</span>
          <span class="rec-bar">网络</span>
          <span class="rec-bar">伤感</span>
          <span class="rec-bar">欧美</span>
          <span class="rec-bar">更多 ></span>
        </div>
      </div>
      <div class="song-list">
        <div class="song-container" v-for="song in songs" :key="song.id">
          <div class="img-bg">
            <i class="iconfont icon-bofang"></i>
            <img :src="song.imgUrl" />
          </div>
          <p class="name">{{ song.name }}</p>
          <p class="count">
            <i class="iconfont icon-z"></i>
            <span>{{ song.number }}万</span>
          </p>
        </div>
      </div>
    </div>
    <div>
      <div class="songTop">
        <h3 class="title">精选活动</h3>
      </div>
      <div class="selected">
        <img
          src="https://img1.kuwo.cn/star/upload/10/10/1608275478570_.jpg"
          alt=""
        />
        <img
          src="https://kwimg1.kuwo.cn/star/upload/33/25/1606123779117_.jpg"
          alt=""
        />
      </div>
    </div>
    <div>
      <div class="songTop">
        <h3 class="title">排行榜</h3>
        <div class="songList">
          <span class="rec-bar">更多 ></span>
        </div>
      </div>
      <div class="rankingList">
        <el-card
          class="card"
          :body-style="{ padding: '0px' }"
          v-for="list in rankingList"
          :key="list.id"
        >
          <div class="image">
            <div class="img-top-bg">
              <img :src="list.imgUrl" class="img-top" />
            </div>
            <img :src="list.bigImg" class="img-bottom" />
          </div>
          <ul class="card-list">
            <li
              class="card-item"
              v-for="(item, index) in list.songList"
              :key="index"
            >
              <span class="item-name">{{ index + 1 }}</span>
              <div class="item-title">
                <span class="song-name">{{ item.name }}</span>
                <span class="song-artist">{{ item.artiste }}</span>
              </div>
            </li>
          </ul>
        </el-card>
      </div>
    </div>
    <div>
      <div class="songTop">
        <h3 class="title">歌手推荐</h3>
        <div class="songList">
          <span class="rec-bar active">每日推荐</span>
          <span class="rec-bar">翻唱</span>
          <span class="rec-bar">网络</span>
          <span class="rec-bar">伤感</span>
          <span class="rec-bar">欧美</span>
          <span class="rec-bar">更多 ></span>
        </div>
      </div>
      <div class="song-list">
        <div v-for="item in artist" :key="item.id">
          <div class="singer">
            <img :src="item.imgUrl" />
          </div>
          <div class="singer-name">
            <p class="name">{{ item.name }}</p>
            <p class="count">
              <span>{{ item.number }}首歌曲</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="songTop">
        <h3 class="title">主播电台</h3>
        <el-button round class="icon">
          <span>畅听更多精品电台</span>
          <i class="el-icon-bottom"></i>
        </el-button>
      </div>
      <div>
        <el-row :gutter="20">
          <el-col :span="8" v-for="video in videoList" :key="video.id">
            <div>
              <div class="radio">
                <img :src="video.imgUrl" />
                <div class="radioContext">
                  <p class="radio-name">{{ video.direction }}</p>
                  <p class="radio-text">{{ video.name }}</p>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import {
  reqRecommendBanner,
  reqRecommendSong,
  reqRankingList,
  reqArtist,
  reqVideo,
} from "../../api/recommend";

export default {
  name: "recommend",
  data() {
    return {
      bannersList: [],
      songs: [],
      rankingList: [],
      artist: [],
      videoList: [],
    };
  },
  methods: {
    async getRequset() {
      const result = await reqRecommendBanner();
      this.bannersList = result;
      const songs = await reqRecommendSong();
      this.songs = songs;
      const rankingList = await reqRankingList();
      this.rankingList = rankingList;
      const artist = await reqArtist();
      this.artist = artist;
      const videoList = await reqVideo();
      this.videoList = videoList;
    },
  },
  mounted() {
    this.getRequset();
  },
};
</script>

<style lang="less" scoped>
.recommendContainer {
  padding: 0 110px;
  .rec-nav {
    height: 317px;
    img {
      width: 100%;
      height: 100%;
    }
    .nav-footer {
      display: flex;
      justify-content: space-around;
      background: rgba(0, 0, 0, 0.1);
      div {
        display: flex;
        align-items: center;
        height: 50px;
        line-height: 50px;
        color: #fff;
        .iconfont {
          font-size: 28px;
          margin-right: 10px;
        }
        span {
          font-size: 15px;
        }
      }
    }
  }
  .songTop {
    margin-top: 60px;
    margin-bottom: 24px;
    display: flex;
    align-items: baseline;
  }
  .title {
    font-size: 28px;
    margin-right: 40px;
  }
  .songList {
    display: flex;
    width: 338px;
    justify-content: space-between;
  }
  .song-list {
    display: flex;
    justify-content: space-between;
    .song-container {
      width: 200px;
    }
    .img-bg {
      position: relative;
      overflow: hidden;
      width: 200px;
      height: 200px;
      i {
        position: absolute;
        z-index: 5;
        left: 75px;
        top: 71px;
        font-size: 50px;
        color: #fff;
        opacity: 0;
      }
      img {
        width: 100%;
        height: 100%;
        transition: transform 0.6s;
      }
    }
    .img-bg:hover {
      i.icon-bofang {
        opacity: 1;
      }
      img {
        transform: scale(1.1);
      }
    }
    .name {
      font-size: 16px;
      height: 30px;
      line-height: 30px;
      margin-top: 16px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    .count {
      margin-top: 10px;
      color: #999;
      font-size: 14px;
    }
  }
  .selected {
    width: 49.2%;
    display: flex;
    img {
      width: 100%;
      height: 152px;
      padding-right: 20px;
    }
  }
  .rankingList {
    display: flex;
    justify-content: space-between;
  }
  .card {
    width: 206px;
    height: 498px;
    .image {
      position: relative;
      width: 100%;
      height: 123px;
      overflow: hidden;
      .img-top-bg {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background: rgba(46, 32, 60, 0.7);
        z-index: 10;
        .img-top {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 54.3%;
          z-index: 10;
        }
      }
      .img-bottom {
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        transform: translateY(-50%);
      }
    }
    .card-list {
      padding: 28px 20px 26px;
      .card-item {
        display: flex;
        .item-name {
          font-size: 16px;
          width: 20px;
          font-weight: 600;
          text-align: center;
        }
        .item-title {
          display: flex;
          flex-direction: column;
          width: 85%;
          padding-left: 10px;
          .song-name {
            font-size: 16px;
            font-weight: 400;
            height: 22px;
            line-height: 22px;
            width: 100%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .song-artist {
            width: 100%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            margin-top: 4px;
            font-size: 14px;
            font-weight: 300;
            color: #999;
            height: 20px;
            line-height: 20px;
          }
        }
      }
    }
    .card-list li + li {
      margin-top: 23px;
    }
  }
  .singer {
    img {
      width: 143px;
      height: 143px;
      border-radius: 50%;
    }
  }
  .singer-name {
    text-align: center;
  }
  .icon {
    display: flex;
    width: 170px;
    height: 32px;
    background: #ffdf1f;
    color: #333;
    align-items: center;
    justify-content: center;
    span {
      height: 18px;
      line-height: 18px;
      padding-right: 9px;
      border-right: 1px solid rgba(0, 0, 0, 0.05);
      margin-right: 9px;
    }
  }
  .radio {
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
    img {
      width: 70px;
      height: 70px;
    }
    .radioContext {
      width: 75.66%;
      border-bottom: 1px solid rgba(0, 0, 0, 0.04);
      display: flex;
      flex-direction: column;
      justify-content: center;
      .radio-name {
        height: 22px;
        font-size: 16px;
        line-height: 22px;
        font-weight: 400;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      .radio-text {
        margin-top: 14px;
        color: #999;
      }
    }
  }
}
</style>
