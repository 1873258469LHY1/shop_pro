<template>
  <div>
    <div class="video">
      <video
        :src="src"
        autoplay
        controls
        height="500px"
        width="800px"
        style="margin: 0 auto; border: 20px solid #333"
        outline="none"
      ></video>
    </div>
  </div>
</template>

<script>
export default {
  name: "Video",
  data() {
    return {};
  },
  props: ["src"],
  mounted() {},
};
</script>

<style lang="less" scoped>
</style>
