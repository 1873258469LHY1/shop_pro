<template>
  <div class="outer">
    <div class="container">
      <header>
        <ul>
          <li class="elaborately">
            <div @click.stop="handleClick" style="cursor: pointer">
              <span>{{ tagName }}</span>
              <i
                :class="
                  isSift
                    ? 'iconfont icon-arrow-up-bold'
                    : 'iconfont icon-arrow-down-bold'
                "
              ></i>
            </div>
            <!-- 弹出框 -->
            <div class="pupupWrap" v-if="isSift">
              <ul class="pupup">
                <li class="selectKindList">
                  <p>
                    <i class="iconfont icon-moren">默认</i>
                  </p>
                  <ul class="selectKind">
                    <li>
                      <div
                        class="btn"
                        :class="{ active: tagName === '精选歌单' }"
                        @click="getTagList('', '精选歌单')"
                      >
                        精选歌单
                      </div>
                    </li>
                  </ul>
                </li>
                <li
                  class="selectKindList"
                  v-for="playListTag in playListTagsList"
                  :key="playListTag.id"
                >
                  <p>
                    <i class="iconfont icon-zhuti">{{ playListTag.name }}</i>
                  </p>
                  <ul class="selectKind">
                    <li v-for="playList in playListTag.data" :key="playList.id">
                      <div
                        class="btn"
                        @click="getTagList(playList.id, playList.name)"
                        :class="{
                          active: playListCategory.tagId === playList.id,
                        }"
                      >
                        {{ playList.name }}
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </li>
          <template v-if="tagName === '精选歌单'">
            <li :class="{ active: playlistsParameter.order === 'new' }">
              <span style="cursor: pointer" @click="handleNewHot('new')"
                >最新</span
              >
            </li>
            <li :class="{ active: playlistsParameter.order === 'hot' }">
              <span style="cursor: pointer" @click="handleNewHot('hot')"
                >最热</span
              >
            </li></template
          >
        </ul>
      </header>
      <!-- 歌单 -->
      <div class="songListWarp">
        <ul class="songList">
          <li
            class="song"
            v-for="item of playList"
            :key="item.id"
            @mouseleave="songId = ''"
            @click="handleJump(item.id)"
          >
            <div @mouseenter="songId = item.id" class="bigImg">
              <img v-lazy="item.img" />
            </div>
            <i class="iconfont icon-play1" v-show="songId === item.id"></i>
            <p class="text">
              <span>{{ item.name }}</span>
            </p>
            <p class="icon">
              <i class="iconfont icon-bofang">
                {{
                  item.listencnt / 10000 > 1
                    ? (item.listencnt / 10000).toFixed(1) + "万"
                    : item.listencnt
                }}
              </i>
            </p>
          </li>
        </ul>
      </div>
      <!-- 分页器 -->
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page.sync="playlistsParameter.pn"
        :page-size.sync="playlistsParameter.rn"
        layout=" prev, pager, next"
        :total="total"
        background
        :pager-count="5"
      >
      </el-pagination>
    </div>
  </div>
</template>
<script>
import {
  getPlayList,
  getPlayListTags,
  getCategoryPlayList,
} from "../../api/playList";
export default {
  name: "Playlists",
  data() {
    return {
      songId: "",
      isSift: false,
      //歌单列表
      playList: [],
      //歌单分类列表
      playListTagsList: [],
      // 请求参数
      playlistsParameter: {
        order: "new",
        rn: 15,
        pn: 1,
      },
      total: 0,
      //分类歌单标签名称
      tagName: "精选歌单",
      //获取歌单分类列表请求数据
      playListCategory: {
        tagId: "",
        rn: 12,
        pn: 1,
      },
    };
  },
  methods: {
    //跳转到歌单播放列表
    handleJump(pid) {
      console.log(this.$route);
      this.$router.push(`/playlist_detail/${pid}`);
    },
    //点击分类标签获取分类歌单列表
    getTagList(id, tagName) {
      if (id === this.playListCategory.tagId) return;
      this.playlistsParameter.pn = 1;
      this.playListCategory.tagId = id;
      this.tagName = tagName;
      if (this.tagName === "精选歌单") {
        this.getPlayList();
        return;
      }
      getCategoryPlayList(this.playListCategory).then((res) => {
        res = res.data;
        this.total = res.total;
        this.playList = res.data;
      });
    },

    //歌单最新最热
    handleNewHot(order) {
      if (this.playlistsParameter.order === order) return;
      this.playlistsParameter.order = order;
      this.getPlayList();
    },

    //改变页码
    handleCurrentChange() {
      this.getPlayList();
    },

    //获取歌单列表
    getPlayList() {
      getPlayList(this.playlistsParameter).then((res) => {
        res = res.data;
        this.total = +res.total;
        this.playList = res.data;
      });
    },

    handleClick() {
      this.isSift = !this.isSift;
      window.onclick = () => {
        this.isSift = false;
      };
    },
  },
  mounted() {
    // 获取歌单列表
    this.getPlayList();
    //获取歌单标签列表
    getPlayListTags().then((res) => {
      res.data.pop();
      this.playListTagsList = res.data;
    });
  },
};
</script>
<style lang='less'  scoped>
.outer {
  min-width: 1180px;
  max-width: 1640px;
  padding: 0 120px;
  margin: 0 auto;
  .container {
    max-width: 1400px;
    margin: 0 auto;

    header {
      margin-top: 38px;
      margin-bottom: 28px;
      > ul {
        display: flex;
        line-height: 31px;
        li {
          margin-right: 10px;
          margin-top: 10px;
          font-size: 14px;
          font-weight: 300;
          color: #333;
          &.active {
            font-weight: 600;
            color: #000;
            position: relative;
            & span::before {
              position: absolute;
              content: "";
              left: 0;
              bottom: 9px;
              width: 100%;
              height: 6px;
              background: #ffe443;
              z-index: -1;
            }
          }
        }
        //精选
        .elaborately {
          font-size: 22px;
          font-weight: 600;
          display: flex;
          position: relative;
          i {
            margin-left: 10px;
          }

          //弹出框
          .pupupWrap {
            position: absolute;
            left: 0;
            top: 40px;
            z-index: 1;
            overflow-y: scroll;
            padding: 30px 10px 0 36px;
            background-color: #fff;
            box-shadow: 0 4px 20px 0 rgba(65, 67, 70, 0.08);
            .pupup {
              width: 836px;
              height: 586px;
              .selectKindList {
                padding-top: 16px;
                padding-bottom: 10px;
                p {
                  i {
                    font-size: 14px;
                    color: #000;
                    font-weight: 700;
                  }
                }
                .selectKind {
                  display: flex;
                  flex-wrap: wrap;

                  li {
                    flex-shrink: 0;
                    cursor: pointer;
                    .btn {
                      background: #f7f7f7;
                      border: none;
                      border-radius: 16px;
                      padding: 2px 18px;
                      &.active {
                        background-color: #ffe12c;
                        font-weight: 700;
                      }
                      &:hover {
                        background-color: #ffe12c;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    //歌单
    .songListWarp {
      .songList {
        display: flex;
        flex-wrap: wrap;
        .song {
          width: 20%;
          padding-right: 20px;
          margin-bottom: 40px;
          box-sizing: border-box;
          position: relative;
          cursor: pointer;
          &:hover img {
            transform: scale(1.1);
            -ms-transform: scale(1.1);
          }
          // flex-shrink: 0;
          .bigImg {
            overflow: hidden;
            img {
              width: 260px;
              height: 260px;
              overflow: hidden;
              transition: all 0.5s;
              -ms-transition: all 0.5s;
            }
          }
          //播放显示隐藏
          .icon-play1 {
            position: absolute;
            font-size: 30px;
            height: 20%;
            width: 24%;
            text-align: center;
            line-height: 70px;
            border-radius: 50%;
            color: #333;
            left: 34%;
            top: 30%;
            z-index: 1;
            background-color: #fff;
          }
          .text {
            margin: 16px 0;
            font-size: 16px;
            &:hover {
              font-weight: 700;
            }
          }

          .icon {
            .icon-bofang {
              font-size: 14px;
              color: #999;
            }
          }
        }
      }
    }

    //分页器
    .el-pagination {
      text-align: center;
    }
    /deep/ .btn-prev {
      height: 42px;
      width: 42px;
      background-color: #fff;
    }
    /deep/ .el-pager li {
      height: 42px;
      width: 42px;
      background-color: #fff;
      color: #999;
      line-height: 42px;
      font-size: 14px;
      font-weight: 100;
    }
    /deep/ .el-pagination .el-pager li:not(.disabled).active {
      background-color: #ffe443;
      color: #333;
    }
    /deep/ .el-pagination.is-background .el-pager li:not(.disabled):hover {
      background-color: #ffe443;
      color: #333;
    }
    /deep/ .btn-next {
      height: 42px;
      width: 42px;
      background-color: #fff;
    }
  }
}
</style>