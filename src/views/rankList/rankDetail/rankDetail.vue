<template>
  <div class="rankDetail">
    <div>
      <h3 class="title">{{ bangTitle }}</h3>
      <span class="update-time">更新时间: {{ date }}</span>
    </div>
    <div class="btns">
      <el-button round class="active">
        <i class="iconfont icon-bofang1"></i>
        播放全部
      </el-button>
      <el-button round>
        <i class="iconfont icon-icon-test"></i>
        添加
      </el-button>
      <el-button round>
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
    <div>
      <el-table :data="rankSongs" stripe style="width: 100%">
        <el-table-column type="index" label="序号" width="100">
        </el-table-column>
        <el-table-column prop="name" label="歌曲" width="220">
          <template slot-scope="scope">
            <div>
              <img
                :src="scope.row.pic"
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
        <el-table-column prop="songTimeMinutes" label="时长"> </el-table-column>
      </el-table>
    </div>
    <Pagination :total="total1" />
    <a name="commends"></a>
    <Comments :title="title1" />
    <Comments :title="title2" />
    <Pagination />
  </div>
</template>

<script>
import Pagination from "./pagination";
import Comments from "./comments";

export default {
  name: "RankDetail",
  data() {
    return {
      rankSongs: [],
      total1: 0,
      title1: "热门评论",
      title2: "111评论",
      date: "2021-01-06",
      bangTitle: "",
      limit: 20,
    };
  },
  mounted() {
    this.$bus.$on("changeDetail", async (bangId, name) => {
      this.bangTitle = name;
      const rankSongs = await this.$API.rankList.reqRankDetail(bangId);
      this.rankSongs = rankSongs.data.musicList;
      this.date = rankSongs.data.pub;
      this.total1 = this.rankSongs.length;
    });
  },
  components: {
    Pagination,
    Comments,
  },
};
</script>

<style lang="less" scoped>
.rankDetail {
  width: 100%;
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
      margin-right: 5px;
    }
    .active {
      background: #ffe12c;
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
