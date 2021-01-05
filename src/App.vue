<template>
<<<<<<< HEAD

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
=======
  <div class="outer">
    <!-- <Header />
    <CommendNav />
    <AsideBar /> -->
    <router-view></router-view>
    <!-- <Footer /> -->
>>>>>>> master
  </div>
</template>

<script>
<<<<<<< HEAD

import Header from "./components/Header";
import Footer from "./components/Footer";
import CommendNav from "./components/CommendNav";
import AsideBar from "./components/AsideBar";

=======
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import CommendNav from "./components/CommendNav";
// import AsideBar from "./components/AsideBar";
>>>>>>> master
export default {
  name: "App",
  components: {
<<<<<<< HEAD
    HelloWorld,
    Header,
    Footer,
    CommendNav,
    AsideBar,
=======
    // Header,
    // Footer,
    // CommendNav,
    // AsideBar,
>>>>>>> master
  },
};
</script>

<style lang="less" scoped>
html,
body,
.outer {
<<<<<<< HEAD
  width: 100vm;
=======
  width: 100%;
>>>>>>> master
  height: 100%;
}
</style>