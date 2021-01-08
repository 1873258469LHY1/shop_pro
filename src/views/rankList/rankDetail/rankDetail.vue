<template>
  <div class="rankDetail">
    <audio ref="audio" :src="url"></audio>
    <!-- 头部标题 -->
    <div>
      <h3 class="title">{{ bangTitle }}</h3>
      <span class="update-time">更新时间: {{ date }}</span>
    </div>
    <!-- 按钮 -->
    <div class="btns">
      <el-button round class="active" @click="playMusic">
        <i class="iconfont icon-bofang"></i>
        播放全部
      </el-button>
      <el-button round @click="pauseMusic">
        <i class="iconfont icon-zanting"></i>
        暂停
      </el-button>
      <el-button round @click="addSong(1)">
        <i class="iconfont icon-icon-test"></i>
        添加
      </el-button>
      <el-button round @click="addSong(0)">
        <i class="iconfont icon-shoucang"></i>
        收藏
      </el-button>
      <a href="#commends">
        <el-button round>
          <!-- <a class="iconfont icon-pinglun"></a> -->
          <i class="iconfont icon-pinglun"></i>
          评论
        </el-button>
      </a>
    </div>
    <!-- 歌曲信息 -->
    <div>
      <el-table
        :data="rankSongs"
        stripe
        style="width: 100%; overflow: hidden"
        v-loading="loading"
        @row-click="playEachSong"
      >
        <el-table-column type="index" label="序号" width="100">
        </el-table-column>
        <el-table-column prop="name" label="歌曲" width="220">
          <template slot-scope="scope">
            <div>
              <img
                v-lazy="scope.row.pic"
                alt=""
                style="width: 54px; height: 54px; margin-right: 15px"
              />
            </div>
            <div>{{ scope.row.name }}</div>
          </template>
        </el-table-column>
        <el-table-column prop="artist" label="歌手" width="180">
        </el-table-column>
        <el-table-column prop="album" label="专辑" width="250">
        </el-table-column>
        <el-table-column prop="songTimeMinutes" label="时长" width="80">
        </el-table-column>
      </el-table>
    </div>
    <Pagination :total="total1" />
    <a name="commends"></a>
    <!-- 热门评论 -->
    <Comments :title="title1" :comments="comments1" />
    <!-- 最新评论 -->
    <Comments :title="title2" :comments="comments2" />
    <Pagination :total="total1" />
  </div>
</template>

<script>
import Pagination from "./pagination";
import Comments from "../../../components/comments";

export default {
  name: "RankDetail",
  data() {
    return {
      rankSongs: [],
      total1: 0,
      title1: "热门评论",
      title2: "最新评论",
      date: "2021-01-06",
      bangTitle: "",
      limit: 20,
      sId: "",
      comments1: [],
      comments2: [],
      loading: false,
      url: "",
      isShow: true,
    };
  },
  watch: {
    sId(val) {
      this.getComments(val);
      this.getUrl(val);
    },
  },
  methods: {
    async playEachSong(e) {
      await this.getUrl(e.rid);
      this.$refs.audio.play();
    },
    pauseMusic() {
      this.$refs.audio.pause();
    },
    playMusic() {
      this.$refs.audio.play();
    },
    async getUrl(rid) {
      const songUrl = await this.$API.rankList.reqSongUrl(rid);
      this.url = songUrl.url;
    },
    async getComments(sid) {
      const comments1 = await this.$API.rankList.reqGetComments(
        sid,
        "get_rec_comment"
      );
      this.comments1 = comments1.rows;
      const comments2 = await this.$API.rankList.reqGetComments(
        sid,
        "get_comment"
      );
      this.comments2 = comments2.rows;
    },
    addSong(id) {
      this.$alert(
        `使用酷我音乐客户端${id === 1 ? "添加" : "收藏"}该歌单`,
        "提示",
        {
          showCancelButton: true,
          cancelButtonText: "下载酷我音乐",
          confirmButtonText: "已安装酷我音乐",
        }
      );
    },

    getRequest() {
      this.$bus.$on("changeDetail", async (bangId, name) => {
        const { reqRankDetail } = this.$API.rankList;
        this.bangTitle = name;
        this.loading = true;
        const rankSongs = await reqRankDetail(bangId);
        this.loading = false;
        this.rankSongs = rankSongs.data.musicList;
        this.date = rankSongs.data.pub;
        this.total1 = this.rankSongs.length;
        this.sId = this.rankSongs[0].rid;

        this.getComments(this.sId);
      });
    },
  },
  async mounted() {
    await this.getRequest();
  },
  components: {
    Pagination,
    Comments,
  },
};
</script>

<style lang="less" scoped>
.rankDetail {
  width: 80%;
  margin-left: 50px;
  .title {
    display: inline-block;
    font-size: 38px;
    font-weight: 600;
    margin-top: 14px;
    height: 53px;
    line-height: 53px;
  }
  .update-time {
    height: 20px;
    line-height: 20px;
    margin-left: 10px;
    color: #999;
    font-size: 14px;
  }
  .btns {
    margin-top: 23px;
    margin-bottom: 40px;
    .el-button {
      font-size: 16px;
      background: #f2f2f2;
      color: #333;
    }
    i {
      font-size: 18px;
      margin-left: 5px;
    }
    .active {
      background: #ffe12c;
    }
    a {
      margin-left: 10px;
    }
  }
  .pagination {
    margin: 48px 0 0;
    text-align: center;
  }

  /deep/.el-pager li.active {
    width: 42px;
    height: 30px;
    background: #ffe12c; // 进行修改选中项背景和字体
    color: #000;
  }
  /deep/.el-pager li {
    color: #999;
    font-size: 14px;
  }
  /deep/.el-pagination {
    padding: 0;
    font-weight: normal;
  }
}
</style>
