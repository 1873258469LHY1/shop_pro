<template>
  <div>
    <div class="loginBG"></div>
    <div class="loginContainer">
      <p class="top" @click="cancel">x</p>
      <div class="inner">
        <div class="owner">
          <div class="box">
            <span class="iconfont icon-windows"></span>
            <p>QQ</p>
          </div>
          <div class="box">
            <span class="iconfont icon-windows"></span>
            <p>微信</p>
          </div>
        </div>
        <div class="owner">
          <div class="box">
            <span class="iconfont icon-windows"></span>
            <p>新浪微博</p>
          </div>
          <div class="box">
            <span class="iconfont icon-windows"></span>
            <p>酷我账号</p>
          </div>
        </div>
      </div>
      <p><span>快速登录</span>|<span>注册</span></p>
      <p>
        <span>同意</span><a href="###">《酷我音乐用户服务协议》</a
        ><a href="###">《隐私政策》</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  methods:{
      cancel(){
          this.$router.back()
      }
  }
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
  .top {
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
          font-size: 60px;
        }
        p {
          margin-top: 20px;
        }
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
