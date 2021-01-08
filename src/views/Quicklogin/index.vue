<template>
  <div class="outer">
    <div class="loginBG"></div>
    <div class="registerContainer">
      <div class="user">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="账号登录" name="first"> </el-tab-pane>
        </el-tabs>

        <p @click="cancel">x</p>
      </div>
      <div class="pic"><img :src="imgUrl" /></div>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        style="width: 100%; height: 100%; margin: -20px -20px"
        label="left"
      >
        <el-form-item
          prop="phone"
          label-width="40px"
          style="margin-bottom: 35px"
        >
          <el-input
            type="text"
            placeholder="请输入手机号码"
            v-model="ruleForm.phone"
            prefix-icon="el-icon-mobile-phone"
          ></el-input>
        </el-form-item>
        <el-form-item prop="pass" label-width="40px">
          <el-input
            type="password"
            placeholder="6~16位，字母、数字、组合"
            v-model="ruleForm.pass"
            prefix-icon="el-icon-lock"
          ></el-input>
        </el-form-item>
        <el-form-item style="text-align: right">
          <span style="cursor: pointer"> <a href="##">注册账号</a></span>
        </el-form-item>
        <el-form-item>
          <div>
            <el-button
              @click.prevent="login"
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
import { mapActions } from "vuex";
export default {
  name: "Quicklogin",
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
    return {
      imgUrl: require("../../assets/imgs/login_bg.png"),
      activeName: "second",
      ruleForm: {
        phone: "19116305526",
        pass: "jie123456",
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        // checkPass: [{ validator: validatePass2, trigger: "blur" }],
        phone: [{ validator: checkphone, trigger: "blur" }],
      },
    };
  },
  props: ["funShowRegister"],
  methods: {
    ...mapActions(["reqPhoneLogin"]),
    cancel() {
      this.funShowRegister();
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    submitForm(ruleform) {
      // console.log(this.$refs);
      this.$refs[ruleform].validate((valid, err) => {
        if (valid) {
          console.log(valid);
        }
        if (err) {
          // console.log(err);
          this.ruleForm[ruleform] = err;
        }
      });
    },

    // submitForm(formName) {
    //   this.$refs[formName].validate((valid) => {
    //     if (valid) {
    //       alert("submit!");
    //     } else {
    //       console.log("error submit!!");
    //       return false;
    //     }
    //   });
    // },

    // getCaptcha() {
    //   const { phone } = this.ruleForm;
    //   if (this.ruleForm.phone == "") {
    //     return;
    //   }
    //   try {
    //     console.log(this.$store, phone);
    //     this.$store.dispatch("reqGetCaptcha", phone);
    //   } catch (error) {
    //     alert(error.message);
    //   }
    // },
    login() {
      const { phone, pass: password } = this.ruleForm;
      if (phone == "" || password == "") {
        return;
      }
      this.reqPhoneLogin({
        phone,
        password,
      }).then((res) => {
        console.log(res);
      });
      // try {
      //   let users = await this.reqPhoneLogin({
      //     phone,
      //     password,
      //   });
      //   console.log(users);
      //   // if()
      // } catch (error) {
      //   alert(error.message);
      // }
    },
  },
};
</script>

<style lang="less" scoped>
.el-input__inner {
  margin-bottom: 35px0;
}
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
