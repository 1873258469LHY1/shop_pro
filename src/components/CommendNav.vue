<template>
  <div class="outer">
    <div class="nav">
      <a href="###">推荐</a>
      <a href="###">排行榜</a>
      <a href="###">歌手</a>
      <a href="###">歌单</a>
      <a href="###">MV</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommendNav",
};
</script>

<style lang="less" scoped>
.outer {
  min-width: 1180px;
  max-width: 1640px;
  padding: 0 120px;
  margin: 0 auto;
  .nav {
    display: flex;
    padding-left: 206px;
    height: 54px;
    align-items: center;
    a {
      margin-right: 34px;
      font-weight: 300;
      color: #333;
      font-size: 14px;
    }
  }
}
</style>
