<template>
  <div class="outer">
    <ul class="aside">
      <li>
        <i>反馈</i>
      </li>
      <li>
        <i class="iconfont icon-windows"></i>
      </li>
      <li>
        <i class="iconfont icon-anzhuo"></i>
      </li>
      <li>
        <i class="iconfont icon-pingguo"></i>
      </li>
      <li>
        <i class="iconfont icon-pingguo"></i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "AsideBar",
};
</script>

<style lang="less" scoped>
.outer {
  position: fixed;
  top: 50%;
  transform: translateY(-50px);
  right: 30px;
<<<<<<< HEAD
  ul {
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
=======
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
>>>>>>> master
    }
  }
}
</style>
