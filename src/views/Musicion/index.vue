<template>
  <div class="outer">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="face">
            <!-- <img
              style="width: 100%; height: 100vh"
              src="https://h5static.kuwo.cn/www/kw-www/img/assets_bg.e64d9e3.png"
              alt=""
            /> -->
            <div class="header">
              <div class="left">
                <img
                  src="https://h5static.kuwo.cn/www/kw-www/img/pic_logo@2x.5cdfa84.png"
                  alt=""
                />
                <img
                  src="https://h5static.kuwo.cn/www/kw-www/img/pic_misician@2x.a7dd2df.png"
                  alt=""
                />
              </div>
              <div class="right">
                <button class="btn">
                  <i class="iconfont icon-xiazai"></i> 下载客户端
                </button>
                <button class="btn">
                  <i class="iconfont icon-yonghutouxiang"></i> 登录/注册
                </button>
              </div>
            </div>
            <div class="content">
              <img
                src="https://h5static.kuwo.cn/www/kw-www/img/pic_type@2x.a372931.png"
                alt=""
              />
              <ul>
                <li>
                  <span class="iconfont icon-shuqian"></span>
                  <p>身份标识</p>
                </li>
                <li>
                  <span class="iconfont icon-zhuye"></span>
                  <p>歌手主页</p>
                </li>
                <li>
                  <span class="iconfont icon-tupian"></span>
                  <p>发布动态</p>
                </li>
                <li>
                  <span class="iconfont icon-liuliang"></span>
                  <p>流量扶持</p>
                </li>
              </ul>
              <p>
                酷我音乐人是酷我音乐为广大音乐人提供的一站式数字音乐服务。我们为热爱音乐的你准备了最具影响力的内容平台和最丰富的曝光渠道，助力你的音乐梦想。
              </p>
              <button class="btn">登录/注册</button>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="join">
            <p>如何加入酷我音乐</p>
            <ul>
              <li>
                <img
                  src="https://h5static.kuwo.cn/www/kw-www/img/dialog_pic_music@2x.f58dc30.png"
                  alt=""
                />
                <p>第一步</p>
                <p class="big">登录/注册</p>
                <p>支持酷我账号、手机号及第三方登录与注册。</p>
              </li>
              <li>
                <img
                  src="https://h5static.kuwo.cn/www/kw-www/img/pic_tijiao@2x.9568411.png"
                  alt=""
                />
                <p>第二步</p>
                <p class="big">提交资料</p>
                <p>提交歌手信息及实名信息，信息不会透露给第三方。</p>
              </li>
              <li>
                <img
                  src="https://h5static.kuwo.cn/www/kw-www/img/pic_shenhe@2x.c34c658.png"
                  alt=""
                />
                <p>第三步</p>
                <p class="big">资料审核</p>
                <p>预计48h内完成资料审核，您也可在此查看您的审核进度。</p>
              </li>
              <li>
                <img
                  src="https://h5static.kuwo.cn/www/kw-www/img/dialog_pic_vinyl@2x.e2a5b84.png"
                  alt=""
                />
                <p>第四步</p>
                <p class="big">上传作品</p>
                <p>上传作品，与粉丝互动，让世界听到你的声音。</p>
              </li>
            </ul>
          </div>
          <p class="copyright">
            Copyright © 2005 - 2008 All Rights Reserved Powered by kuwo music
          </p>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper, { Navigation, Pagination, Mousewheel } from "swiper";
Swiper.use([Navigation, Pagination, Mousewheel]);
export default {
  name: "Musicion",
  mounted() {
    new Swiper(".swiper-container", {
      autoplay: true, //可选选项，自动滑动
      pagination: {
        el: ".swiper-pagination",
      },
      mousewheel: true,
      direction: "vertical",
    });
  },
};
</script>

<style lang="less" scoped>
html,
body,
.outer {
  width: 100%;
  height: 100%;
}
.swiper-container {
  width: 100%;
  height: 100vh;
  .swiper-slide:first-of-type {
    position: relative;
    width: 100%;
    height: 100%;
    .face {
      width: 100%;
      height: 100%;
      background-image: url(https://h5static.kuwo.cn/www/kw-www/img/assets_bg.e64d9e3.png);
      background-repeat: no-repeat;
      background-size: cover;
    }
    div.header {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 1200px;
      height: 70px;
      .left {
        img:first-of-type {
          width: 136px;
          height: 50px;
          margin-right: 37px;
        }
        img:last-of-type {
          width: 214;
          height: 50px;
        }
      }
      .right {
        display: flex;
        align-items: center;
        button.btn {
          i {
            margin-right: 8px;
          }
          &:first-of-type {
            margin-right: 16px;
          }
          font-size: 14px;
          padding-left: 20px;
          display: flex;
          align-items: center;
          width: 136px;
          height: 38px;
          opacity: 0.8;
          border-radius: 25px;
          background-color: rgb(26, 26, 59);
          border: 1px solid hsla(0, 0%, 100%, 0.2);
          color: #fff;
          cursor: pointer;
        }
      }
    }
    div.content {
      width: 1200px;
      margin: 0 auto;
      padding-top: 170px;
      img {
        width: 560px;
        height: 80px;
      }
      ul {
        display: flex;
        padding-top: 35px;
        li {
          display: flex;
          margin-right: 70px;
          font-size: 14px;
          align-items: center;
          color: #fff;
          span {
            font-size: 23px;
            margin-right: 8px;
          }
        }
      }
      & > p {
        font-size: 16px;
        margin-top: 47px;
        width: 640px;
        color: #fff;
        line-height: 30px;
      }
      .btn {
        display: inline-block;
        margin-top: 62px;
        min-width: 210px;
        height: 60px;
        background: #ffdf1f;
        box-shadow: 0 3px 40px 0 rgba(255, 223, 31, 0.2);
        border-radius: 2px;
        border: none;
        font-size: 18px;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.8);
        line-height: 25px;
      }
    }
  }
  --swiper-pagination-color: #00ff33;
}
.swiper-slide:last-of-type {
  position: relative;
  .join {
    width: 100%;
    height: 508px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    // background-color: yellow;
    text-align: center;
    & > p {
      font-size: 44px;
      position: relative;
      &::after {
        content: "";
        display: block;
        position: absolute;
        z-index: -1;
        width: 188px;
        height: 16px;
        background-color: #ffdf1f;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
    ul {
      margin-top: 87px;
      padding: 0 150px;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      li {
        width: 258px;
        height: 360px;
        padding: 52px 34px;
        box-sizing: border-box;
        background-color: #fafafa;
        img {
          width: 68px;
        }
        p {
          font-size: 16px;
          &:first-of-type {
            margin-top: 34px;
          }
          &:nth-of-type(2) {
            margin-top: 5px;
          }
          &:last-of-type {
            margin-top: 23px;
          }
        }
        p.big {
          font-size: 24px;
        }
      }
    }
  }
  .copyright {
    position: absolute;
    bottom: 50px;
    left: 0;
    width: 100%;
    text-align: center;
    font-size: 12px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.4);
    line-height: 18px;
  }
}
</style>
