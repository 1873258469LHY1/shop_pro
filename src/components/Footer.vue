<template>
  <div class="outer">
    <div class="top">
      <div class="load">
        <p>下载酷我音乐客户端</p>
        <div class="con">
          <div class="detail">
            <i class="iconfont icon-windows"></i>
            <p>PC版</p>
          </div>
          <div class="detail">
            <i class="iconfont icon-anzhuo"></i>
            <p>android</p>
          </div>
          <div class="detail">
            <i class="iconfont icon-pingguo"></i>
            <p>iPhone</p>
          </div>
        </div>
      </div>
      <div class="shengming">
        <p>协议与声明</p>
        <div>
          <div class="detail">
            <p>用户协议</p>
            <p>负责声明</p>
          </div>
          <div class="detail">
            <p>隐私政策</p>
            <p>权利声明</p>
          </div>
        </div>
      </div>
      <div class="others">
        <p>其他</p>
        <div>
          <div class="detail">
            <p>联系我们</p>
            <p>腾讯音乐</p>
            <p>诚聘英才</p>
          </div>
          <div class="detail">
            <p>广告服务</p>
            <p>更多服务</p>
            <p>网上有害信息举报专区</p>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="nav">
        <p>
          <a href="###">北京酷我科技有限公司版权所有</a> 丨
          <a href="###">网络文化经营许可证：京网文[2015]0525-205号</a> 丨
          <a href="###">信息网络传播视听节目许可证0109362号</a> 丨
          <a href="###">增值电信业务经营许可证B2-20090418</a> 丨
          <a href="###">京ICP证060261号</a>
        </p>
        <p>
          <a href="###">广播电视节目制作经营许可证京字第2037号</a> 丨
          <a href="###">营业性演出许可证京市演1574</a> 丨
          <a href="###">京公网安备11010502030216号</a> 丨
          <a href="###">京ICP备09014827号</a>
        </p>
        <p>举报电话：010-87939949丨 举报邮箱：support@kuwo.cn</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="less" scoped>
.outer {
  .top {
    height: 220px;
    display: flex;
    font-size: 13px;
    // min-width: 1180px;
    // max-width: 1640px;
    padding: 0 120px;
    margin: 0 auto;
    margin-top: 62px;
    background-color: #282828;
    .load {
      width: 415px;
      & > p {
        color: #fff;
        width: 415px;
        padding: 36px 0 50px;
      }
      & div.con {
        display: flex;
        .detail {
          margin-top: -10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-evenly;
          margin-right: 35px;
          i {
            font-size: 40px;
            color: #ccc;
          }
          p {
            color: grey;
          }
        }
      }
    }
    .shengming {
      width: 415px;
      & > p {
        color: #fff;
        width: 415px;
        padding: 36px 0 50px;
      }
      & div.detail {
        display: flex;
        p {
          color: grey;
          margin-right: 40px;
          margin-bottom: 26px;
        }
      }
    }
    .others {
      width: 415px;
      & > p {
        color: #fff;
        // width: 415px;
        padding: 36px 0 50px;
      }
      & div.detail {
        display: flex;
        p {
          color: grey;
          margin-right: 40px;
          margin-bottom: 26px;
        }
      }
    }
  }
  .bottom {
    background-color: #1f1f1f;
    // min-width: 1180px;
    // max-width: 1640px;
    padding: 0 120px;
    margin: 0 auto;
    height: 182px;
    .nav {
      height: 61px;
      padding: 22px 0 99px;

      p {
        text-align: center;
        color: grey;
        font-size: 12px;
        padding: 5px 0;
        a {
          text-decoration: none;
        }
        a:hover {
          color: yellow;
        }
      }
    }
  }
}
</style>
