<template>
  <div>
    <div class="container">
      <div class="outer">
        <img
          class="logo"
          src="https://h5static.kuwo.cn/www/kw-www/img/logo.dac7499.png"
        />
        <div class="menu">
          <router-link to="/" :class="$route.path == '/' ? 'active' : ''"
            >发现音乐</router-link
          >
          <a href="http://www.kuwo.cn/down">下载客户端</a>
          <a href="http://jx.kuwo.cn/">音乐现场</a>
          <router-link to="/vip" :class="$route.path == '/vip' ? 'active' : ''"
            >VIP会员</router-link
          >
          <router-link
            :class="$route.path == '/downtingshu' ? 'active' : ''"
            to="/downtingshu"
            >酷我畅听</router-link
          >
          <a
            href="https://kuwosm.tmall.com/?spm=a1z10.1-b.w5001-22211151763.4.5223b735CyzwnI&scene=taobao_shop"
            >酷我耳机</a
          >
          <a class="more"
            >更多
            <i class="iconfont icon-jiantou9"></i>
            <i class="iconfont icon-arrow-up-bold"></i>
          </a>
          <ul class="moreOption">
            <li><router-link to="/musicion">酷我音乐人</router-link></li>
            <li><router-link to="/musicion">HiFi音乐</router-link></li>
            <li><router-link to="/musicion">酷我视频</router-link></li>
            <li><router-link to="/musicion">主播电台</router-link></li>
          </ul>
        </div>
        <div class="search">
          <i class="iconfont icon-sousuo"></i>
          <input type="text" placeholder="搜索音乐/歌单" />
        </div>
        <span style="font-size: 16px"
          ><a to="/login" @click="showLogin = true">登录</a>/<a
            @click="showRegister = true"
            >注册</a
          ></span
        >

        <!-- <img class="touxiang" src="../assets/imgs/touxiang.jpg" alt="" /> -->
      </div>
      <Login
        v-show="showLogin"
        :funShowLogin="funShowLogin"
        :funHideRegister="funHideRegister"
      />
      <Register
        v-show="showRegister"
        :funShowRegister="funShowRegister"
        :funShowLogin="funShowLogin"
      />
    </div>
  </div>
</template>

<script>
import Login from "../views/Login";
import Register from "../views/Register";
export default {
  name: "Header",
  data() {
    return {
      showLogin: false,
      showRegister: false,
    };
  },
  components: {
    Register,
    Login,
  },
  methods: {
    funShowLogin() {
      this.showLogin = false;
    },
    funShowRegister() {
      this.showRegister = false;
    },
    funHideRegister() {
      this.showRegister = true;
    },
  },
};
</script>

<style lang="less" scoped>
.container {
  .outer {
    max-width: 1400px;
    padding: 0 120px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #eee;
    .logo {
      width: 131px;
      height: 39px;
    }
    .menu {
      position: relative;
      display: flex;
      align-items: center;
      font-weight: 100;
      a {
        flex-shrink: 0;
        height: 67px;
        line-height: 67px;
        font-size: 16px;
        text-decoration: none;
        padding: 0 14px;
        color: #000;
        &.active {
          background-color: #ffe443;
          font-weight: bold;
        }
        i.iconfont {
          margin-left: 10px;
          font-size: 12px;
        }
        i.icon-arrow-up-bold {
          opacity: 0;
        }
        &.more:hover {
          .icon-jiantou9 {
            opacity: 0;
          }
          .icon-arrow-up-bold {
            position: relative;
            left: -25%;
            opacity: 1;
          }
        }
      }
      a:last-of-type:hover + ul.moreOption {
        display: flex;
      }
      .moreOption:hover {
        display: flex;
      }
      .moreOption {
        position: absolute;
        background: #fff;
        z-index: 10;
        top: 61px;
        right: -20px;
        width: 170px;
        height: 205px;
        margin: 0;
        box-shadow: 0 0 30px 0 rgba(65, 67, 70, 0.08);
        font-size: 16px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

        display: none;
        li {
          list-style: none;
          &:hover {
            background-color: rgb(255, 228, 67);
          }

          a {
            font-size: 16px;
            height: 40px;
            line-height: 40px;
          }
        }
      }
    }
    .search {
      border-radius: 15px;
      background: #f5f5f5;
      padding-left: 15px;
      input {
        text-indent: 20px;
        width: 175px;
        height: 30px;
        outline: 0;
        border-radius: 15px;
        border: none;
        background: #f5f5f5;
      }
      input::-webkit-input-placeholder {
        color: #ccc;
        text-indent: 20px;
      }
    }
    .touxiang {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      line-height: 36px;
    }
  }
}
</style>
