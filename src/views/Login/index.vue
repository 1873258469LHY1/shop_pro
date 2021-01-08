<template>
  <div class="outer">
    <div v-if="!isShowQuickLogin">
      <div class="loginBG"></div>
      <div class="loginContainer">
        <p class="top el-icon-close" @click="funShowLogin"></p>
        <div class="inner">
          <div class="owner">
            <div class="box" @click="toQQ">
              <span class="iconfont"></span>
              <p>QQ</p>
            </div>
            <div class="box" @click="toWX">
              <span class="iconfont"></span>
              <p>微信</p>
            </div>
          </div>
          <div class="owner">
            <div class="box" @click="toWB">
              <span class="iconfont"></span>
              <p>新浪微博</p>
            </div>
            <div class="box">
              <span class="iconfont"></span>
              <p>酷我账号</p>
            </div>
          </div>
        </div>
        <p>
          <span @click="isShowQuickLogin = true">快速登录</span>|<span
            @click="funHideRegister"
            >注册</span
          >
        </p>
        <p>
          <span>同意</span><a href="###">《酷我音乐用户服务协议》</a
          ><a href="###">《隐私政策》</a>
        </p>
      </div>
    </div>
    <Quicklogin  :handleShowQui="handleShowQui" />
  </div>
</template>

<script>
import Quicklogin from "../Quicklogin/index";
export default {
  name: "Login",
  data() {
    return {
      isShowQuickLogin: false,
    };
  },
  props: ["funShowLogin", "funShowRegister", "funHideRegister"],
  components: {
    Quicklogin,
  },
  methods: {
    handleShowQui() {
      this.isShowQuickLogin = false;
      this.funShowLogin();
    },
    // cancel() {
    //   this.funShowLogin();
    // },
    toQQ() {
      window.open(
        "https://graph.qq.com/oauth/show?which=ConfirmPage&display=pc&client_id=100243533&response_type=code&scope=get_user_info,add_share&redirect_uri=http%3A%2F%2Fi.kuwo.cn%2FUS%2Fplatform%2Fqq.jsp%3Ff%3Dweb%26callbackUrl%3Dhttps%253A%252F%252Fwww.kuwo.cn%252Fcallback",
        "newwindow",
        "height=600, width=800, top=50, left=100, toolbar=no, menubar=no, scrollbars=1, resizable=no,location=no, status=no"
      );
    },
    toWX() {
      window.open(
        " https://open.weixin.qq.com/connect/qrconnect?appid=wx41c1275bb3e28427&response_type=code&scope=snsapi_login&redirect_uri=http%3A%2F%2Fi.kuwo.cn%2FUS%2Fplatform%2FWeixinCallback.jsp%3Ff%3Dweb%26callbackUrl%3Dhttps%253A%252F%252Fwww.kuwo.cn%252Fcallback",
        "newwindow",
        "height=600, width=800, top=50, left=100, toolbar=no, menubar=no, scrollbars=1, resizable=no,location=no, status=no"
      );
    },
    toWB() {
      window.open(
        "https://api.weibo.com/oauth2/authorize?client_id=2972927130&response_type=code&display=popup&redirect_uri=http%3A%2F%2Fi.kuwo.cn%2FUS%2Fplatform%2Fweibo.jsp%3Ff%3Dweb%26callbackUrl%3Dhttps%253A%252F%252Fwww.kuwo.cn%252Fcallback",
        "newwindow",
        "height=600, width=800, top=50, left=100, toolbar=no, menubar=no, scrollbars=1, resizable=no,location=no, status=no"
      );
    },
  },
};
</script>

<style lang="less" scoped>
.loginBG {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.3;
}
.loginContainer {
  position: absolute;
  z-index: 50;
  width: 360px;
  height: 540px;
  background-color: #fff;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  p.top {
    width: 95%;
    text-align: right;
    font-size: 25px;
    line-height: 55px;
    height: 60px;
    margin-right: 30px;
  }
  .inner {
    width: 218px;
    height: 296px;
    margin: 45px auto 60px;
    .owner {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 40px;
      .box {
        width: 80px;
        text-align: center;
        span {
          //   font-size: 60px;
          width: 70px;
          height: 70px;
          border: 1px solid #ddd;
          border-radius: 50%;
          display: inline-block;
        }

        p {
          margin-top: 20px;
        }
      }
    }
    div.owner:nth-of-type(1) {
      div.box:nth-of-type(1) span {
        background-image: url("../../assets/imgs/img.f1b1f82(1).png");
        background-repeat: no-repeat;
        background-position: 13px -157px;
      }
      div.box:nth-of-type(2) span {
        background-image: url("../../assets/imgs/img.f1b1f82(1).png");
        background-repeat: no-repeat;
        background-position: 14px 13px;
      }
    }
    div.owner:nth-of-type(2) {
      div.box:nth-of-type(1) span {
        background-image: url("../../assets/imgs/img.f1b1f82(1).png");
        background-repeat: no-repeat;
        background-position: 14px -43px;
      }
      div.box:nth-of-type(2) span {
        background-image: url("../../assets/imgs/img.f1b1f82(1).png");
        background-repeat: no-repeat;
        background-position: 14px -100px;
      }
    }
  }
  p:nth-of-type(2) {
    font-size: 14px;
    width: 100%;
    text-align: center;
    margin: 0 0 10px;
    span {
      margin: 0 5px;
    }
  }
  p:nth-of-type(3) {
    font-size: 12px;
    width: 100%;
    text-align: center;
    position: relative;
    span::after {
      content: "";
      display: block;
      position: absolute;
      z-index: 50;
      width: 10px;
      height: 10px;
      background-color: yellow;
      left: 55px;
      top: 50%;
      transform: translate(-100%, -50%);
    }
  }
}
</style>
