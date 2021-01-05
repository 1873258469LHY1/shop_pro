<template>
  <div class="outer">
    <img
      class="logo"
      src="https://h5static.kuwo.cn/www/kw-www/img/logo.dac7499.png"
    />
    <div class="menu">
      <a class="active" href="###">发现音乐</a>
      <a href="###">下载客户端</a>
      <a href="###">音乐现场</a>
      <a href="###">VIP会员</a>
      <a href="###">酷我畅听</a>
      <a href="###">酷我耳机</a>
<<<<<<< HEAD
      <a>更多</a>
=======
      <router-link>更多</router-link>
>>>>>>> master
    </div>
    <div class="search">
      <i class="iconfont icon-sousuo"></i>
      <input type="text" placeholder="搜索音乐/歌单" />
    </div>

    <img class="touxiang" src="../assets/imgs/touxiang.jpg" alt="" />
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="less" scoped>
.outer {
  min-width: 1180px;
  max-width: 1640px;
  padding: 0 120px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
  .logo {
    width: 131px;
    height: 39px;
  }
  .menu {
    display: flex;
    align-items: center;
    font-weight: 100;
    a {
      flex-shrink: 0;
      height: 67px;
      line-height: 67px;
      font-size: 16px;
      text-decoration: none;
      padding: 0 14px;
      color: #000;
      &.active {
        background-color: #ffe443;
        font-weight: bold;
      }
    }
  }
  .search {
    border-radius: 15px;
    background: #f5f5f5;
    padding-left: 15px;
    input {
      text-indent: 20px;
      width: 246px;
      height: 30px;
      outline: 0;
      border-radius: 15px;
      border: none;
      background: #f5f5f5;
    }
    input::-webkit-input-placeholder {
      color: #ccc;
      text-indent: 20px;
    }
  }
  .touxiang {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    line-height: 36px;
  }
}
</style>
