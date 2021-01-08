<template>
  <div>
    <div class="feedback" v-show="isShowFeed">
      <div class="yijian">
        意见反馈<i class="el-icon-close" @click="isShowFeed = false"></i>
      </div>
      <div class="con">
        <div>
          <span>反馈内容</span>
          <textarea placeholder="请输入反馈内容，我们会尽快安排~"> </textarea>
        </div>
        <div>
          <span>联系方式</span>
          <textarea placeholder="请输入QQ、电话或邮箱~"></textarea>
        </div>
      </div>
      <div>
        <el-button class="btn" type="primary">提交</el-button>
      </div>
    </div>
    <div class="outer">
      <ul class="aside">
        <li @click="isShowFeed = !isShowFeed">
          <i>反馈</i>
        </li>
        <li v-show="isHideLoad">
          <i class="iconfont icon-windows" @click="toLoad"></i>
        </li>
        <li v-show="isHideLoad">
          <i class="iconfont icon-anzhuo" @click="toLoad"></i>
        </li>
        <li v-show="isHideLoad">
          <i class="iconfont icon-pingguo" @click="toLoad"></i>
        </li>
        <li @click="isHideLoad = !isHideLoad">
          <i class="iconfont icon-arrow-up-bold"></i>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "AsideBar",
  data() {
    return {
      isShowFeed: false,
      isHideLoad: true,
    };
  },
  methods: {
    toLoad() {
      window.open("http://www.kuwo.cn/down");
    },
  },
};
</script>

<style lang="less" scoped>
// 侧边栏
.outer {
  position: fixed;
  top: 50%;
  transform: translateY(-50px);
  right: 30px;
  li {
    width: 52px;
    height: 52px;
    text-align: center;
    line-height: 52px;
    background-color: #f5f5f5;
    cursor: pointer;
    margin-bottom: 8px;
    i {
      font-size: 20px;
    }
  }
}
/* 反馈弹出框 */
.feedback {
  position: fixed;
  z-index: 100;
  //   top: -200px;
  //   left: -900px;
  top: 20%;
  left: 35%;
  width: 400px;
  padding: 30px;
  box-sizing: border-box;
  background-color: #fff;
  border: 1px solid #ccc;
  .yijian {
    height: 40px;
    //   background-color: #fff;
    font-size: 14px;
    font-weight: bold;
    line-height: 40px;
    margin-bottom: 10px;
    i {
      transform: translateX(260px);
      font-size: 20px;
    }
  }
  .con {
    div {
      width: 100%;
      height: 100px;
      display: flex;
      margin-bottom: 10px;
      textarea {
        margin-left: 10px;
        outline: none;
        width: 260px;
        border-radius: 5px;
        border: 1px solid #aaa;
        background-color: rgb(245, 245, 245);
      }
    }
  }
  .btn {
    height: 40px;
    width: 80px;
    //   background-color: yellow;
    transform: translateX(240px);
  }
}
</style>
