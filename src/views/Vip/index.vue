<template>
  <div class="Content">
    <el-dialog :visible.sync="dialogVisible" width="40%">
      <div>
        <div>
          <i class="i_tab">登录</i>
          <i class="i_tab">注册</i>
        </div>
        <div class="verify_con">
          <el-form
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="ruleForm"
            label-width="15px"
            class="demo-ruleForm"
          >
            <p class="user_context_login">酷我账号登陆</p>
            <el-form-item prop="pass">
              <el-input
                type="password"
                v-model="ruleForm.pass"
                autocomplete="off"
                placeholder="请输入酷我账号"
              ></el-input>
            </el-form-item>
            <el-form-item prop="checkPass">
              <el-input
                type="password"
                v-model="ruleForm.checkPass"
                autocomplete="off"
                placeholder="请输入密码"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-checkbox-group v-model="form">
                <el-checkbox label="自动登录" name="type"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item>
              <button @click="submitForm('ruleForm')" class="loginButton">
                登录
              </button>
            </el-form-item>
          </el-form>
          <div class="more_login_button">
            <p class="more_login_title">其他账号登录</p>
            <el-button round class="icon-qq">QQ账号</el-button>
            <el-button round>新浪微博</el-button>
            <el-button round>微信账号</el-button>
          </div>
        </div>
      </div>
      <span></span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
    <header>
      <div class="topHeader">
        <div class="top1200">
          <router-link to="/vip" class="HeaderLinkx float_l">
            <img
              class="vipLogo"
              src="http://vip1.kuwo.cn/vip/added/vip_2016/img/logo.png"
            />
          </router-link>
          <div class="nava float_l">
            <router-link to="/vip" class="vip_menu">首页</router-link>
            <a href="##" class="vip_menu">豪华VIP</a>
            <a href="##" class="vip_menu">音乐包</a>
          </div>
          <div class="loginout">
            <a href="##" @click="dialogVisible = true">{{
              islogin ? "退出" : "登录"
            }}</a>
          </div>
          <div class="Logindiv" v-if="islogin">
            <img
              class="Logindiv_img1 float_l"
              src="http://q.qlogo.cn/qqapp/100243533/3FAE5A7619CFF3B93AD8CDCFA04D4D31/100"
            />
            <p class="Logindiv_name float_l">这是一个寂寞的天</p>
            <a href="">
              <img
                src="http://vip1.kuwo.cn/vip/added/vip_2016/img/super-hui.png"
                class="Logindiv_img float_l"
              />
            </a>
            <a href="##">
              <img
                src="http://vip1.kuwo.cn/vip/added/vip_2016/img/ylbkt-hui1.png"
                class="Logindiv_img float_l"
              />
            </a>
          </div>
        </div>
      </div>
    </header>
    <!-- 轮播图 -->
    <template>
      <el-carousel
        :interval="2000"
        arrow="never"
        height="400px"
        class="scroll"
        ref="xbx"
      >
        <a href="##"
          ><img
            @click="onclick1"
            src="http://image.kuwo.cn/newvip/index2016/v2/zuo.png"
            class="scroll_left scroll_tap"
        /></a>
        <a href="##"
          ><img
            @click="onclick1"
            src="http://image.kuwo.cn/newvip/index2016/v2/you.png"
            class="scroll_right scroll_tap"
        /></a>
        <el-carousel-item v-for="item in 2" :key="item">
          <li class="scroll_img"></li>
        </el-carousel-item>
      </el-carousel>
    </template>
    <!-- Vip订阅 -->
    <div class="conunt">
      <ul class="sycent">
        <li class="sycent_li">
          <a href="##"
            ><p
              class="wxinz"
              @click="isshow = false"
              :class="{ Active: !isshow }"
            >
              <span class="wxinz_s_l"></span>
              豪华VIP
            </p></a
          >
        </li>
        <li class="sycent_li">
          <a href="##">
            <p class="wxinz" @click="isshow = true" :class="{ Active: isshow }">
              音乐包
            </p>
          </a>
        </li>
      </ul>
    </div>
    <!-- VIP内容 -->
    <el-card class="box-card" v-show="!isshow">
      <div class="vipcon">
        <div class="vip_con_item">
          <img
            class="vip_con_img"
            src="http://vip1.kuwo.cn/vip/added/vip_2016/img/we_01.jpg"
          />
          <div class="vip_con_l">
            <p class="vip_con_l_hao">豪华VIP</p>
            <p class="vip_con_l_money">15&nbsp;元/月</p>
            <p class="vip_con_l_up">
              <a href="##">立即开通</a>
            </p>
            <p class="vip_con_l_zeng">开通立增&nbsp;付费音乐包</p>
          </div>
        </div>
      </div>
      <div class="super_box">
        <div class="super_box_box white">
          <div class="privilege"></div>
          <div class="privilege_con">豪华VIP特权</div>
        </div>
      </div>
      <div class="super_bigg_box">
        <div class="xrw_box white">
          <ul>
            <li class="xrw_li_l">
              <img
                class="img"
                src="http://vip1.kuwo.cn/vip/added/vip_2016/img/kwfx.png"
              />
              <div>
                <p class="xrw_box_box_P">酷我聚星专属座驾</p>
                <p class="xrw_box_box_p2">七日专属聚星座驾</p>
              </div>
            </li>
            <li class="xrw_li_r">
              <img
                class="img"
                src="http://vip1.kuwo.cn/vip/added/vip_2016/img/kwrj.png"
              />
              <div>
                <p class="xrw_box_box_P">酷我耳机现金券</p>
                <p class="xrw_box_box_P2">超划算酷我硬件折扣券</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="super_more_box">
          <ul>
            <li class="super_box_tab">
              <img
                src="http://vip1.kuwo.cn/vip/added/vip_2016/img/zgvipbs.png"
              />
              <p class="box_tab_p1">尊贵身份标识</p>
              <p class="box_tab_p2">尊贵身份标识</p>
            </li>
            <li class="super_box_tab">
              <img
                src="http://vip1.kuwo.cn/vip/added/vip_2016/img/zgvipbs.png"
              />
              <p class="box_tab_p1">尊贵身份标识</p>
              <p class="box_tab_p2">尊贵身份标识</p>
            </li>
            <li class="super_box_tab">
              <img
                src="http://vip1.kuwo.cn/vip/added/vip_2016/img/zgvipbs.png"
              />
              <p class="box_tab_p1">尊贵身份标识</p>
              <p class="box_tab_p2">尊贵身份标识</p>
            </li>
            <li class="super_box_tab">
              <img
                src="http://vip1.kuwo.cn/vip/added/vip_2016/img/zgvipbs.png"
              />
              <p class="box_tab_p1">尊贵身份标识</p>
              <p class="box_tab_p2">尊贵身份标识</p>
            </li>
            <li class="super_box_tab">
              <img
                src="http://vip1.kuwo.cn/vip/added/vip_2016/img/zgvipbs.png"
              />
              <p class="box_tab_p1">尊贵身份标识</p>
              <p class="box_tab_p2">尊贵身份标识</p>
            </li>
            <li class="super_box_tab">
              <img
                src="http://vip1.kuwo.cn/vip/added/vip_2016/img/zgvipbs.png"
              />
              <p class="box_tab_p1">尊贵身份标识</p>
              <p class="box_tab_p2">尊贵身份标识</p>
            </li>
            <li class="super_box_tab">
              <img
                src="http://vip1.kuwo.cn/vip/added/vip_2016/img/zgvipbs.png"
              />
              <p class="box_tab_p1">尊贵身份标识</p>
              <p class="box_tab_p2">尊贵身份标识</p>
            </li>
            <li class="super_box_tab">
              <img
                src="http://vip1.kuwo.cn/vip/added/vip_2016/img/zgvipbs.png"
              />
              <p class="box_tab_p1">尊贵身份标识</p>
              <p class="box_tab_p2">尊贵身份标识</p>
            </li>
            <li class="super_box_tab">
              <img
                src="http://vip1.kuwo.cn/vip/added/vip_2016/img/zgvipbs.png"
              />
              <p class="box_tab_p1">尊贵身份标识</p>
              <p class="box_tab_p2">尊贵身份标识</p>
            </li>
            <li class="super_box_tab">
              <img
                src="http://vip1.kuwo.cn/vip/added/vip_2016/img/zgvipbs.png"
              />
              <p class="box_tab_p1">尊贵身份标识</p>
              <p class="box_tab_p2">尊贵身份标识</p>
            </li>
          </ul>
        </div>
        <div class="zgsf_box">
          <div class="biaoti">
            <img
              class="biaotiImg"
              src="http://vip1.kuwo.cn/vip/added/vip_2016/img/zgvip.png"
            />
            尊贵身份标识
          </div>
          <p class="zg_text">
            独一无二的豪华VIP标识，彰显尊贵身份。您的图标将在酷我客户全平台展示，见证您为中国正版付费音乐贡献力量，呼吁好友一起支持偶像的正版音乐！
          </p>
          <p class="zg_img">
            <img src="http://image.kuwo.cn/newvip/mbox/v1/xq_022.jpg" />
          </p>
        </div>
      </div>
    </el-card>
    <el-card class="box-card" v-show="isshow">
      <div class="vipcon">
        <div class="vip_con_item">
          <img
            class="vip_con_img"
            src="http://vip1.kuwo.cn/vip/added/vip_2016/img/we_02.jpg"
          />
          <div class="vip_con_l">
            <p class="vip_con_l_hao">音乐包</p>
            <p class="vip_con_l_money">8&nbsp;元/月</p>
            <p class="vip_con_l_up">
              <a href="##">立即开通</a>
            </p>
            <p class="vip_con_l_zeng">开通立享付费曲库</p>
          </div>
        </div>
      </div>
      <div class="super_box">
        <div class="super_box_box white">
          <div class="privilege"></div>
          <div class="privilege_con">音乐包特权</div>
        </div>
      </div>
      <div class="super_bigg_box">
        <div class="super_more_box">
          <ul>
            <li class="super_box_tab2">
              <img
                src="http://vip1.kuwo.cn/vip/added/vip_2016/img/ctffqk.png"
              />
              <p class="box_tab_p1">畅听付费曲库</p>
              <p class="box_tab_p2">畅听付费曲库</p>
            </li>
            <li class="super_box_tab2">
              <img
                src="http://vip1.kuwo.cn/vip/added/vip_2016/img/ctffqk.png"
              />
              <p class="box_tab_p1">畅听付费曲库</p>
              <p class="box_tab_p2">畅听付费曲库</p>
            </li>
            <li class="super_box_tab2">
              <img
                src="http://vip1.kuwo.cn/vip/added/vip_2016/img/ctffqk.png"
              />
              <p class="box_tab_p1">畅听付费曲库</p>
              <p class="box_tab_p2">畅听付费曲库</p>
            </li>
            <li class="super_box_tab2">
              <img
                src="http://vip1.kuwo.cn/vip/added/vip_2016/img/ctffqk.png"
              />
              <p class="box_tab_p1">畅听付费曲库</p>
              <p class="box_tab_p2">畅听付费曲库</p>
            </li>
            <li class="super_box_tab2">
              <img
                src="http://vip1.kuwo.cn/vip/added/vip_2016/img/ctffqk.png"
              />
              <p class="box_tab_p1">畅听付费曲库</p>
              <p class="box_tab_p2">畅听付费曲库</p>
            </li>
          </ul>
        </div>
        <div class="zgsf_box">
          <div class="biaoti">
            <img
              class="biaotiImg"
              src="http://vip1.kuwo.cn/vip/added/vip_2016/img/ctxiao.png"
            />
            畅听付费曲库
          </div>
          <p class="zg_text">
            海量高品质音乐资源，无限畅听！听音乐还得是正版！
          </p>
          <p class="zg_img">
            <img src="http://image.kuwo.cn/newvip/mbox/v1/xq_06.jpg" />
          </p>
        </div>
      </div>
    </el-card>
    <div class="fei"></div>
    <!-- 底部 -->
    <div class="footer">
      <div class="footer-son">
        <div class="footer_son_l">
          <p>
            常见问题
            <a href="##">
              <span class="footer_span1">查看更多&nbsp;&gt;&gt;</span>
            </a>
          </p>
          <ul>
            <li>
              <a href="##">开通豪华VIP之后，下载付费音乐还需要开通音乐包吗？</a>
            </li>
            <li>
              <a href="##"
                >现在的VIP不含付费歌曲试听下载了，那之前开通的怎么办？</a
              >
            </li>
            <li><a href="##">音乐包提供哪些服务？</a></li>
            <li><a href="##">海外用户可以使用音乐包下载付费歌曲吗？</a></li>
          </ul>
        </div>
        <div class="footer_son_r">
          <p class="footer_son_r_p1">联系我们</p>
          <a href="##">
            <span class="footer_son_r_span1"></span>
          </a>
          <p class="footer_son_r_p2">周一至周五 9:30--18:30</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// 引入防抖函数的封装
// import VueDebounce from "../../utils/VueDebounce";
export default {
  name: "Vip",
  data() {
    return {
      isshow: false,
      islogin: false,
      dialogVisible: false,
      ruleForm: {
        pass: "",
        checkPass: "",
        age: "",
      },
      form: {},
      rules: {},
    };
  },
  methods: {
    onclick1() {
      this.$refs.xbx.prev();
    },
    // onclick2() {
    //   this.$refs.xbx.next();
    // },
    // demo_l() {
    //   this.$refs.xbx.prev();
    // },
    // demo_r() {
    //   this.$refs.xbx.next();
    // },
    // Vip: VueDebounce(this.onclick1, 1000),
  },
};
</script>
<style scoped>
.more_login_title {
  margin: 20px 0 10px 5px;
  font-size: 14px;
  color: #333;
}
.more_login_button {
  display: flex;
  flex-direction: column;
  margin-left: 35px;
}
.user_context_login {
  margin: 20px 0 20px 15px;
}
.el-form-item__content {
  margin-left: 10px !important;
}
.el-form {
  padding-right: 50px;
  border-right: 1px solid #dddddd;
}
.verify_con {
  display: flex;
}
.Active {
  border-bottom: 3px solid #ff6600;
}
/* 头部 */
.topHeader {
  height: 80px;
  background: #1c0d0d;
}
.float_l {
  float: left;
}
.top1200 {
  width: 1200px;
  overflow: hidden;
  margin: 0 auto;
}
.vipLogo {
  width: 135px;
  height: 44px;
  padding: 15px 0;
}
.nava {
  width: 40%;
  margin: 0 40px;
}
.vip_menu {
  padding: 0 15px;
  text-align: center;
  font-size: 16px;
  line-height: 80px;
  color: #d1d1d1;
}
.loginout {
  float: right;
  font-size: 16px;
  line-height: 80px;
}
.loginout a {
  padding: 0 15px;
  color: #d1d1d1;
}
.Logindiv {
  margin: 0 15px;
  line-height: 80px;
  float: right;
}
.Logindiv_img1 {
  width: 44px;
  height: 44px;
  margin: 18px 10px;
  border-radius: 50%;
}
.Logindiv_name {
  font-size: 16px;
  color: #d1d1d1;
}
.Logindiv_img {
  margin: 25px 0 0 10px;
}
.top1200 .Content .box-card {
  width: 1221px !important;
  margin: 0 auto;
}
.white {
  background: #ffffff;
}
.Content {
  background: #f1f1f1;
}
.scroll_img {
  width: 100%;
  background: url("http://image.kuwo.cn/newvip/vip_2016/0617_3.png") 50% 100%
    no-repeat rgb(137, 51, 244);
  height: 400px;
}
.scroll {
  position: relative;
}
.scroll_tap {
  z-index: 10;
  opacity: 0.7;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.scroll_left {
  left: 15%;
}
.scroll_right {
  right: 15%;
}
.conunt {
  width: 1221px;
  margin: 0 auto;
  margin-top: 20px;
}
.sycent {
  margin-top: 10px;
  display: flex;
  justify-content: center;
}
.sycent_li {
  font-size: 24px;
  line-height: 43px;
  width: 15%;
  text-align: center;
  margin: 0 20px 0;
}
.wxinz .wxinz_s_l {
  background: url("http://vip1.kuwo.cn/vip/added/vip_2016/img/tjian.png") 50%
    100% no-repeat;
  width: 38px;
  height: 28px;
  display: inline-block;
}
.vipcon {
  width: 1221px;
  margin: 0 auto;
  background: #ffffff;
}
.vip_con_item {
  margin-left: 100px;
}
.vip_con_item {
  display: flex;
}
.vip_con_l {
  margin: 100px 0 0 20px;
}
.vip_con_l_hao {
  font-size: 24px;
  margin-bottom: 5px;
}
.vip_con_l_money {
  font-size: 13px;
  margin-bottom: 10px;
}
.vip_con_l_up {
  width: 100px;
  height: 25px;
  background-color: #f60;
  border-radius: 5px;
  text-align: center;
  margin-bottom: 10px;
}
.vip_con_l_up a {
  font-size: 13px;
  line-height: 25px;
  color: #ffffff;
}
.vip_con_l_zeng {
  font-size: 12px;
  margin-bottom: 10px;
}
.super_box {
  width: 1221px;
  height: 50px;
  margin: 0 auto;
  text-align: center;
  background: #ffffff;
}
.super_box_box {
  width: 900px;
  margin: 0 auto;
}
.privilege {
  height: 25px;
  border-bottom: 2px solid #e4e4e4;
}
.privilege_con {
  font-size: 19px;
  margin: -15px auto 0;
  width: 130px;
  background: #ffffff;
}
.Content .super_bigg_box {
  width: 1221px;
  margin: 0 auto;
  background: #ffffff;
}
.xrw_box {
  width: 1221px;
  display: inline-block;
}
.xrw_box ul {
  text-align: center;
  margin-top: 15px;
  display: flex;
  justify-content: center;
}
.xrw_box ul li {
  margin: 0 10px;
  display: flex;
  padding: 10px;
  width: 230px;
  border-radius: 3px;
  -webkit-box-shadow: #ccc 0px 10px 10px;

  -moz-box-shadow: #ccc 0px 10px 10px;

  box-shadow: #ccc 0px 10px 10px;
}
.xrw_box_box_P {
  font-size: 14px;
  margin-top: 10px;
  color: #3c4d73;
  margin-left: 10px;
}
.xrw_box_box_P2 {
  font-size: 12px;
  color: rgba(51, 51, 51, 0.8);
  text-align: left;
  margin-top: 2px;
  margin-left: 10px;
}
.super_more_box {
  border-bottom: 1px solid #eaeaea;
  width: 900px;
  margin: 0 auto;
  position: relative;
}
.super_more_box ul {
  width: 100%;
  text-align: center;
  margin: 30px auto 0;
}
.super_more_box ul li {
  width: 19%;
  display: inline-block;
  text-align: center;
  padding: 20px 0;
}
.super_more_box ul li:hover {
  -webkit-box-shadow: #ccc 0px 5px 5px;

  -moz-box-shadow: #ccc 0px 5px 5px;

  box-shadow: #ccc 0px 5px 5px;

  margin-top: -20px;
}
.box_tab_p1 {
  font-size: 14px;
  margin-top: 10px;
}
.box_tab_p2 {
  font-size: 12px;
  margin-top: 2px;
  color: rgba(51, 51, 51, 0.8);
}
.zgsf_box {
  width: 900px;
  margin: 0 auto;
  border-top: 1px solid #eaeaea;
}
.biaoti {
  font-size: 15px;
  display: flex;
  height: 55px;
  line-height: 55px;
}
.biaotiImg {
  display: inline-block;
  width: 34px;
  height: 31px;
  margin: 9px 10px 15px 10px;
}
.zg_text {
  color: rgba(51, 51, 51, 0.8);
  font-size: 12px;
  line-height: 20px;
  margin-bottom: 20px;
}
.zgsf_box .zg_img {
  margin: 20px auto;
  text-align: center;
}
/* tab切换组件 */
.super_box_tab2 {
  width: 16%;
  display: inline-block;
  text-align: center;
  padding: 20px 0;
  margin-bottom: 20px;
}
.super_box_tab2:hover {
  -webkit-box-shadow: #ccc 0px 5px 5px;

  -moz-box-shadow: #ccc 0px 5px 5px;

  box-shadow: #ccc 0px 5px 5px;

  margin-top: -20px;
}
.fei {
  height: 20px;
  background: #ffffff;
  -webkit-box-shadow: #ccc 0px 5px 5px;

  -moz-box-shadow: #ccc 0px 5px 5px;

  box-shadow: #ccc 0px 5px 5px;
  width: 1221px;
  margin: 30px auto 50px;
}
.footer {
  -webkit-box-shadow: #ccc 5px 5px 5px;

  -moz-box-shadow: #ccc 5px 5px 5px;

  box-shadow: #ccc 5px 5px 25px;
  height: 170px;
  background-color: #ffffff;
  overflow: hidden;
}
.footer-son {
  width: 1200px;
  margin: 0 auto;
  display: flex;
}
.footer_son_l {
  width: 820px;
  margin-top: 30px;
}
.footer_son_l p {
  font-size: 20px;
  color: #181818;
  font-weight: 600;
}
.footer_son_l p a .footer_span1 {
  font-size: 12px;
  color: red;
  margin-left: 30px;
  font-weight: 400;
}

.footer_son_l ul li {
  float: left;
  height: 40px;
  line-height: 40px;
  overflow: hidden;
  width: 370px;
  margin-right: 40px;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.footer_son_l ul li a {
  font-size: 16px;
  color: #8b8b8b;
}
.footer_son_l ul li a:hover {
  color: #ff0017;
}
.footer_son_r {
  float: right;
  width: 200px;
  height: 170px;
  padding-top: 40px;
  padding-left: 130px;
  font-size: 18px;
  color: #181818;
  text-align: left;
  border-left: 2px solid #f0f0f0;
}
.footer_son_r_p1 {
  margin-bottom: 15px;
}
.footer_son_r_span1 {
  width: 192px;
  height: 38px;
  background: url("http://image.kuwo.cn/newvip/index2016/v2/newbtn.gif") 0 -54px;
  display: block;
  margin-bottom: 10px;
}
.footer_son_r_span1:hover {
  background: url("http://image.kuwo.cn/newvip/index2016/v2/newbtn.gif") 0 231px;
}
.footer_son_r_p2 {
  font-size: 18px;
  color: #aeaeae;
}
</style>