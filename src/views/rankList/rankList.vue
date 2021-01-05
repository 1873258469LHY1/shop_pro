<template>
  <div class="rankList">
    <div class="rankNav">
      <el-card>
        <div slot="header" class="navHeader">
          <span class="active">官方榜</span>
          <span>特色榜</span>
          <span>场景榜</span>
        </div>
        <ul>
          <li class="navItem active">
            <img src="https://img3.kuwo.cn/star/upload/5/6/1609800091.png" />
            <div class="navContainer">
              <span class="name">酷我飙升榜</span>
              <span class="time">今日更新</span>
            </div>
          </li>
          <li class="navItem">
            <img src="https://img3.kuwo.cn/star/upload/5/6/1609800091.png" />
            <div class="navContainer">
              <span class="name">酷我飙升榜</span>
              <span class="time">今日更新</span>
            </div>
          </li>
          <li class="navItem">
            <img src="https://img3.kuwo.cn/star/upload/5/6/1609800091.png" />
            <div class="navContainer">
              <span class="name">酷我飙升榜</span>
              <span class="time">今日更新</span>
            </div>
          </li>
          <li class="navItem">
            <img src="https://img3.kuwo.cn/star/upload/5/6/1609800091.png" />
            <div class="navContainer">
              <span class="name">酷我飙升榜</span>
              <span class="time">今日更新</span>
            </div>
          </li>
          <li class="navItem">
            <img src="https://img3.kuwo.cn/star/upload/5/6/1609800091.png" />
            <div class="navContainer">
              <span class="name">酷我飙升榜</span>
              <span class="time">今日更新</span>
            </div>
          </li>
        </ul>
      </el-card>
    </div>
    <div class="rankDetail">
      <div>
        <h3 class="title">酷我飙升榜</h3>
        <span class="update-time">更新时间: 2021-01-05</span>
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
        <el-button round>
          <i class="iconfont icon-pinglun"></i>
          评论
        </el-button>
      </div>
      <div>
        <el-table :data="rankSongs" stripe style="width: 100%">
          <el-table-column prop="index" label="序号"> </el-table-column>
          <el-table-column prop="name" label="歌曲" width="220">
            <template slot-scope="scope">
              <div>
                <img
                  :src="scope.row.url"
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
          <el-table-column prop="time" label="时长"> </el-table-column>
        </el-table>
      </div>
      <el-pagination
        :page-size="30"
        :pager-count="5"
        layout="prev, pager, next"
        :total="total"
        class="pagination"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      rankSongs: [
        {
          index: 1,
          name: "简单的幸福",
          artist: "罗聪",
          album: "小幸福",
          time: "04:09",
          url: "https://img2.kuwo.cn/star/albumcover/120/87/25/2241738210.jpg",
        },
        {
          index: 1,
          name: "简单的幸福",
          artist: "罗聪",
          album: "小幸福",
          time: "04:09",
        },
        {
          index: 1,
          name: "简单的幸福",
          artist: "罗聪",
          album: "小幸福",
          time: "04:09",
        },
        {
          index: 1,
          name: "简单的幸福",
          artist: "罗聪",
          album: "小幸福",
          time: "04:09",
        },
      ],
      total: 300,
    };
  },
};
</script>

<style lang="less" scoped>
.rankList {
  width: 1100px;
  padding: 0 110px;
  margin-top: 38px;
  display: flex;
  .rankNav {
    width: 210px;
    flex-shrink: 0;
    .navHeader {
      display: flex;
      justify-content: space-between;
      span {
        font-size: 16px;
        color: #333;
        font-weight: 300;
      }
      span.active {
        font-weight: 600;
      }
    }
    ul {
      width: 210px;
      .navItem {
        display: flex;
        height: 80px;
        align-items: center;
        flex-shrink: 0;
        padding-left: 20px;
        img {
          width: 60px;
          height: 60px;
          padding-right: 15px;
        }
        .navContainer {
          display: flex;
          flex-direction: column;
          font-size: 14px;
          .name {
            font-weight: 600;
            margin-bottom: 6px;
          }
          .time {
            color: #999;
          }
        }
      }
    }

    .navItem.active {
      background-color: #f2f2f2;
    }
  }
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
  }
}

/deep/.el-card__body {
  padding-left: 0;
}
/deep/.cell {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

/deep/.el-pager li.active {
  background: #ffe12c; // 进行修改选中项背景和字体
  color: #000;
}
/deep/.el-pager li {
  color: #999;
}
</style>
