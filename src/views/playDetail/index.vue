<template>
  <div class="outer">
    <div class="container">
      <div class="info_l">
        <div>
          <img
            src="https://img4.kuwo.cn/star/albumcover/500/73/91/1572221806.jpg"
          />
        </div>
        <div>
          <em>专辑简介</em>
          <p>
            远观天仙舞欢 我今醉酒悠哉 一别寒山 我何时归来
            海伦最新单曲《游山恋》。
          </p>
          <div>
            <i class="iconfont icon-download">下载这首歌</i>
          </div>
        </div>
      </div>
      <div class="info_r" style="width: 1100px; background-color: red"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "playDetail",
  mounted() {
    console.log(this.$route);
  },
};
</script>
<style lang='less'  scoped>
.outer {
  min-width: 1180px;
  max-width: 1640px;
  padding: 0 120px;
  margin: 0 auto;
  .container {
    width: 1400px;
    margin: 0 auto;
    display: flex;
  }
}
</style>