
<template>
  <div class="outer">
    <div class="loginBG"></div>
    <div class="registerContainer">
      <div class="user">
        <p>新用户注册</p>
        <i @click="cancel" class="el-icon-close"></i>
      </div>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        class="demo-ruleForm"
        inline-message
        style="width: 100%; height: 100%; margin: 0 auto"
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
          <p @click="getCaptcha">获取验证码</p>
          <el-input
            type="password"
            v-model="ruleForm.checkPass"
            placeholder="请输入验证码"
          ></el-input>
        </el-form-item>
        <el-form-item prop="username">
          <p>设置昵称</p>
          <el-input
            type="text"
            v-model="ruleForm.nickname"
            placeholder="请输入昵称"
          ></el-input>
        </el-form-item>

        <el-form-item>
          <el-button
            style="
              width: 100%;
              height: 40px;
              background-color: rgb(255, 238, 102);
            "
            @click="GETregister"
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
    var checkphone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请输入内容"));
      }
      setTimeout(() => {
        if (!Number.isInteger(+value)) {
          return callback(new Error("请输入数字值"));
        } else {
          if (value.length !== 11) {
            return callback(new Error("手机号不符合规范"));
          } else {
            callback();
          }
        }
      }, 500);
    };
    var validatePass = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.pass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
      }
      callback();
    };
    var validatePass2 = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请输入内容"));
      } else {
        callback();
      }
    };
    var validatePass3 = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请输入内容"));
      } else {
        callback();
      }
    };
    return {
      // 表单校验
      ruleForm: {
        phone: "",
        pass: "",
        checkPass: "",
        nickname: "",
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        phone: [{ validator: checkphone, trigger: "blur" }],
        nickname: [{ validator: validatePass3, trigger: "blur" }],
      },
    };
  },
  props: ["funShowRegister", "funShowLogin"],
  methods: {
    // 获取验证码
    getCaptcha() {
      const { phone } = this.ruleForm;
      if (this.ruleForm.phone == "") {
        return;
      }
      // try {
      //   console.log(this.$store, phone);
      this.$store.dispatch("reqGetCaptcha", phone);
      // } catch (error) {
      //   alert(error.message);
      // }
    },
    cancel() {
      this.funShowRegister();
      this.funShowLogin();
      this.$refs.ruleForm.clearValidate();
    },
    GETregister() {
      console.log(1111);
      let { phone, pass, checkPass, nickname } = this.ruleForm;
      if (phone == "" || pass == "" || checkPass == "" || nickname == "") {
        return;
      }
      if (this.$store.state.code) {
        if (checkPass !== this.$store.state.code) return;
      }
      console.log(111, this.$store);
      this.$store.dispatch("reqgetPhoneRegister", {
        phone,
        pass,
        checkPass,
        nickname,
      });
    },
    // submitForm(formName) {
    //   this.$refs[formName].validate((valid, err) => {
    //     if (valid) {
    //       console.log(valid);
    //     }
    //     if (err) {
    //       console.log(err);
    //       this.ruleForm[formName] = err;
    //       // event.preventDefault();
    //     }
    //   });
    // },
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
