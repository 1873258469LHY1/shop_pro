<template>
  <div class="outer">
    <div class="nav">
      <router-link
        to="/"
        ref="tuijian"
        :class="$route.path == '/' ? 'active' : ''"
        >推荐</router-link
      >
      <router-link
        :class="$route.path == '/ranklist' ? 'active' : ''"
        to="/ranklist"
        >排行榜</router-link
      >
      <a :class="$route.path == '/singers' ? 'active' : ''">歌手</a>
      <a href="###" :class="$route.path !== '/playlists' ? 'active' : ''"
        >歌单</a
      >
      <a href="###" :class="$route.path !== '/mvs' ? 'active' : ''">MV</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommendNav",
  data() {
    return {
      isDefault: true,
    };
  },
  methods: {

  },
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
      &.active {
        color: rgb(255, 228, 67);
        font-weight: bold;
      }
      &:focus {
        color: rgb(255, 228, 67);
        font-weight: bold;
      }
    }
  }
}
</style>
