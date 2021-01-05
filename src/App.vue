<template>

  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

  <div class="outer">
    <Header />
    <CommendNav />
    <AsideBar />

    <!-- <router-view></router-view> -->
    <Footer />

    <router-view></router-view>
    <Footer />
>>>>>>> Stashed changes
  </div>
</template>

<script>

import Header from "./components/Header";
import Footer from "./components/Footer";
import CommendNav from "./components/CommendNav";
import AsideBar from "./components/AsideBar";

export default {
  name: 'App',
  components: {
    HelloWorld,
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
