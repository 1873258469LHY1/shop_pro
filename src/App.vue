<template>
  <div class="outer">
    <div class="contain">
      <Header v-show="isShowHome" />
      <CommendNav v-show="isShowHome" />
      <AsideBar v-show="isShowHome" />
      <router-view></router-view>
      <Footer v-show="isShowHome" />
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
      isShowHome: true,
    };
  },
  components: {
    Header,
    Footer,
    CommendNav,
    AsideBar,
  },
  watch: {
    $route(val) {
      if (val.path === "/musicion") {
        this.isShowHome = false;
      } else {
        this.isShowHome = true;
      }
    },
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
