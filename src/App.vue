<template>
  <div class="outer">
    <div class="contain">
      <Header />
      <CommendNav />
      <AsideBar />
      <router-view></router-view>
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import CommendNav from "./components/CommendNav";
import AsideBar from "./components/AsideBar";
export default {
  name: "App",
  data() {
    return {
      isShowHome: false,
    };
  },
  components: {
    Header,
    Footer,
    CommendNav,
    AsideBar,
  },
};
</script>

<style lang="less" scoped>
html,
body,
.outer {
  width: 100vm;
  height: 100%;
}
</style>