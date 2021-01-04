<template>
  <div class="Content">
    <!-- 轮播图 -->
    <template>
      <el-carousel :interval="2000" arrow="never" height="400px" class="scroll">
        <a href="##"
          ><img
            src="http://image.kuwo.cn/newvip/index2016/v2/zuo.png"
            class="scroll_left scroll_tap"
        /></a>
        <a href="##"
          ><img
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
            ><p class="wxinz">
              <span class="wxinz_s_l"></span>
              豪华VIP
            </p></a
          >
        </li>
        <li class="sycent_li">
          <a href="##">
            <p class="wxinz">音乐包</p>
          </a>
        </li>
      </ul>
    </div>
    <!-- VIP内容 -->
    <el-card class="box-card">
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
  </div>
</template>
<script>
export default {
  name: "Vip",
};
</script>
<style scoped>
.Content .box-card {
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
  width: 25%;
  text-align: center;
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
</style>