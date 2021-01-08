<template>
  <div class="outer">
    <div class="loginBG"></div>
    <div class="registerContainer">
      <div class="user">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="账号登录" name="first"> </el-tab-pane>
          <el-tab-pane label="快捷登录" name="second"> </el-tab-pane>
        </el-tabs>

        <i
          @click="handleShowQui"
          style="font-size: 20px; transform: translateY(-5px)"
          class="el-icon-close"
        ></i>
      </div>
      <div class="pic"><img v-lazy="imgUrl" /></div>
      <el-form
        style="width: 100%; height: 100%; margin: -20px -20px"
        label="left"
      >
        <el-form-item prop="phone" label-width="40px">
          <el-input
            type="text"
            placeholder="请输入手机号码"
            prefix-icon="el-icon-mobile-phone"
          ></el-input>
        </el-form-item>
        <el-form-item prop="pass" label-width="40px">
          <el-input
            type="password"
            placeholder="请输入验证码"
            prefix-icon="el-icon-lock"
          ></el-input>
        </el-form-item>
        <el-form-item prop="checkPass">
          <el-input
            type="text"
            prefix-icon="el-icon-key"
            placeholder="请输入验证码"
            style="width: 167px; height: 40px; padding: 0 0 0 40px"
          ></el-input>
          <el-button
            style="
              width: 102px;
              height: 40px;
              text-align: center;
              background: #ffe200;
              border-radius: 2px;
              color: #333;
              margin-left: 10px;
              cursor: pointer;
            "
            >获取验证码</el-button
          >
        </el-form-item>
        <el-form-item style="text-align: right">
          <span style="cursor: pointer"> <a href="##">注册账号</a></span>
        </el-form-item>
        <el-form-item>
          <div>
            <el-button
              style="
                width: 100%;
                height: 40px;
                background-color: #ffe200;
                margin-left: 20px;
              "
              >登录</el-button
            >
          </div>

          <div class="hasother">其它账户登录</div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Quicklogin",
  data() {
    return {
      imgUrl: require("../../assets/imgs/login_bg.png"),
      activeName: "second",
      // ruleForm: {
      //   phone: "",
      //   pass: "",
      //   checkPass: "",
      // },
      // rules: {
      //   pass: [
      //     { required: true, message: "请输入密码", trigger: "blur" },
      //     { type: "number", message: "必须为数字值", trigger: "change" },
      //   ],
      //   checkPass: [
      //     { required: true, message: "请再次输入密码", trigger: "blur" },
      //     { type: "number", message: "必须为数字值", trigger: "change" },
      //   ],
      //   phone: [
      //     { required: true, message: "请输入账号", trigger: "blur" },
      //     { type: "number", message: "必须为数字值", trigger: "change" },
      //   ],
      // },
    };
  },
  props: ["handleShowQui"],
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style lang="less" scoped>
.outer {
  width: 100%;
  height: 100%;
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
  .registerContainer {
    position: absolute;
    padding: 16px 20px;
    box-sizing: border-box;
    z-index: 50;
    width: 360px;
    height: 540px;
    background-color: #fff;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    .user {
      display: flex;
      align-items: center;
      justify-content: space-between;
      /deep/.el-tabs__item.is-active {
        font-weight: 700;
        color: #000;
      }
      /deep/.el-tabs__item:hover {
        color: #000;
      }
      /deep/.el-tabs__item {
        font-size: 16px;
      }
      /deep/.el-tabs__active-bar {
        background-color: #ffe200;
        left: 15px;
        width: 32px !important;
      }
    }
    /deep/.el-icon-key:before {
      padding-left: 45px;
    }
    /deep/.el-tabs.el-tabs--top {
      width: 100%;
    }

    .pic img {
      width: 278px;
      margin-top: 7px;
      margin-bottom: 10px;
    }
    /deep/.el-form-item {
      margin-bottom: 10px;
    }
    .hasother {
      font-size: 14px;
      width: 100%;
      text-align: center;
      margin: 0 0 5px;
      height: 20px;
    }
  }
}
</style>
