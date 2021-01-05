
<template>
  <div class="outer">
    <div class="loginBG"></div>
    <div class="registerContainer">
      <div class="user">
        <p>新用户注册</p>
        <i @click="cancel">x</i>
      </div>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        class="demo-ruleForm"
        style="width: 100%; height: 100%; margin: 20px auto"
      >
        <el-form-item prop="phone">
          <p>手机号</p>
          <el-input
            type="text"
            v-model="ruleForm.phone"
            placeholder="请输入手机号码"
          ></el-input>
        </el-form-item>
        <el-form-item prop="pass">
          <p>设置密码</p>
          <el-input
            type="password"
            v-model="ruleForm.pass"
            placeholder="6~16位，字母、数字、组合"
          ></el-input>
        </el-form-item>
        <el-form-item prop="checkPass">
          <p>验证码</p>
          <el-input
            type="text"
            v-model="ruleForm.checkPass"
            placeholder="请输入右侧验证码"
          ></el-input>
        </el-form-item>

        <el-form-item>
          <el-button
            style="
              width: 100%;
              height: 40px;
              background-color: rgb(255, 238, 102);
            "
            >下一步</el-button
          >
          <div class="has">已有账号<a href="###">立即登录</a></div>
          <div class="next">
            <span>同意</span><a href="###">《酷我音乐用户服务协议》</a
            ><a href="###">《隐私政策》</a>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      ruleForm: {
        phone: "",
        pass: "",
        checkPass: "",
      },
      rules: {
        pass: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { type: "number", message: "必须为数字值", trigger: "change" },
        ],
        checkPass: [
          { required: true, message: "请再次输入密码", trigger: "blur" },
          { type: "number", message: "必须为数字值", trigger: "change" },
        ],
        phone: [
          { required: true, message: "请输入账号", trigger: "blur" },
          { type: "number", message: "必须为数字值", trigger: "change" },
        ],
      },
    };
  },
  methods: {
    cancel() {
      this.$router.back();
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
    p {
      font-size: 16px;
      font-weight: bold;
    }
    .user {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 10px;
      border-bottom: 1px solid #eee;
      i {
        font-size: 20px;
      }
    }
    .has {
      font-size: 14px;
      width: 100%;
      text-align: center;
      margin: 0 0 5px;
      height: 20px;
      a {
        margin: 0 5px;
        color: blue;
      }
    }
    .next {
      font-size: 12px;
      width: 100%;
      text-align: center;
      position: relative;
      height: 20px;

      span::after {
        content: "";
        display: block;
        position: absolute;
        z-index: 50;
        width: 10px;
        height: 10px;
        background-color: yellow;
        left: 35px;
        top: 100%;
        transform: translate(-100%, -50%);
      }
    }
  }
}
</style>
