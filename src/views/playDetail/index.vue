<template>
  <div class="outer">
    <audio
      controls="controls"
      :src="musicUrl"
      ref="songsPlay"
      class="playControl"
    ></audio>
    <div class="container">
      <div class="info_l">
        <div class="poster">
          <img :src="musicObj.img" />
        </div>
        <div class="text">
          <em>专辑简介</em>
          <p>
            【周杰伦全新数字专辑《周杰伦的床边故事》震撼上线！
            预购用户以及当前购买用户可收听、下载专辑内全部歌曲。】 夜深了
            猫头鹰出没 数完第一千零一个尖叫声 开始听 周杰伦 的床边故事 Jay Chou’
          </p>
          <div class="btn">
            <i class="iconfont icon-xiazai"> 下载这首歌</i>
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
            <em>{{ musicObj.musicName }}</em>
            <i class="iconfont icon-mv"></i>
          </p>
          <p class="name">{{ musicObj.name }}</p>
          <p class="albumName">
            <span class="albumNameTT">专辑:</span>
            <span class="albumNameWW" style="cursor: pointer">{{
              musicObj.album
            }}</span>
            <span class="albumNameTT">发行时间:</span>
            <span class="albumNameWW">{{ musicObj.releaseDate }}</span>
          </p>
          <!-- 按钮区域 -->
          <div class="but">
            <el-button
              round
              :class="{
                iconfont: true,
                'icon-bofang': !isPlay,
                'icon-icon_bofang': isPlay,
              }"
              @click="playSongs"
            >
              立即播放</el-button
            >
            <el-button round class="iconfont icon-icon-test"> 添加</el-button>
            <el-button round class="iconfont icon-shoucang"> 收藏</el-button>
            <el-button round class="iconfont icon-share"> 分享</el-button>
            <el-button round class="iconfont icon-pinglun"> 评论</el-button>
          </div>
          <!-- 歌词区域 -->
          <div class="lyrics">
            <p>告白气球 - 周杰伦</p>
            <p>词：方文山</p>
            <p>曲：周杰伦</p>
            <p v-for="index in num" :key="index">塞纳河畔 左岸的咖啡</p>
            <div class="down" @click="handleDown">
              <span>{{ isDown ? "收集 " : "展开 " }}</span>
              <i
                class="iconfont"
                :class="isDown ? 'icon-arrow-up-bold' : 'icon-arrow-down-bold'"
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getMusicUrl } from "../../api/singers";
export default {
  name: "playDetail",
  data() {
    return {
      num: 12,
      isDown: false,
      musicUrl: "",
      isPlay: false,
      musicObj: {},
    };
  },
  methods: {
    //   播放
    playSongs() {
      this.isPlay = !this.isPlay;
      if (!this.isPlay) {
        this.$refs.songsPlay.pause();
      } else {
        this.$refs.songsPlay.play();
      }
    },
    handleDown() {
      this.isDown = !this.isDown;
      if (this.isDown) {
        this.num = 33;
        return;
      }
      this.num = 12;
    },
  },
  async mounted() {
    /* 请求音频地址 */
    // console.log(this.$route.params);
    const { rid } = this.$route.params;
    const res1 = await getMusicUrl(rid);
    this.musicUrl = res1.url;

    this.musicObj = JSON.parse(sessionStorage.getItem("music"));
  },
};
</script>
<style lang='less'  scoped>
.outer {
  min-width: 1180px;
  max-width: 1640px;
  padding: 0 120px;
  margin: 0 auto;
  .playControl {
    //   background-color: #bfa;
    position: fixed;
    right: -257px;
    top: 20%;
    transition: all 500ms;
    outline: none;
    &:hover {
      right: 0;
    }
  }
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
      color: #999;
      font-weight: 400;
      margin-right: 10px;
    }
    .albumNameWW {
      margin-right: 60px;
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
    .icon-bofang,
    .icon-icon_bofang {
      background-color: #ffe12c;
      color: #333;
    }
  }
  .lyrics {
    font-size: 14px;
    line-height: 24px;
    color: #666;
    margin-top: 40px;
    .down {
      line-height: 28px;
      cursor: pointer;
      span {
        color: #296294;
      }
    }
  }
}
</style>