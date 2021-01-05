<template>
<<<<<<< Updated upstream
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
=======
  <div class="outer">
    <Header />
    <CommendNav />
    <AsideBar />
    <!-- <router-view></router-view> -->
    <Footer />
>>>>>>> Stashed changes
  </div>
</template>

<script>
<<<<<<< Updated upstream
import HelloWorld from './components/HelloWorld.vue'

=======
import Header from "./components/Header";
import Footer from "./components/Footer";
import CommendNav from "./components/CommendNav";
import AsideBar from "./components/AsideBar";
>>>>>>> Stashed changes
export default {
  name: 'App',
  components: {
<<<<<<< Updated upstream
    HelloWorld
  }
}
=======
    Header,
    Footer,
    CommendNav,
    AsideBar,
  },
};
>>>>>>> Stashed changes
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
