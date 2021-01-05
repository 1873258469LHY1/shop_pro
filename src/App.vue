<template>
  <div id="app">
    <Hader />
    <router-view />
  </div>
</template>

<script>
import Hader from "./components/Hader";
export default {
  name: "App",
  components: { Hader },
};
</script>

<style lang="less" scoped>
</style>