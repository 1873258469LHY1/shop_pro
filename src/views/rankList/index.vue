<template>
  <div class="rankList">
    <!-- 左边排行榜导航 -->
    <div class="rankNav">
      <el-card>
        <div slot="header" class="navHeader">
          <span
            @click="changeRanks(index)"
            :class="{ active: ranksIndex === index }"
            v-for="(list, index) in ranklist"
            :key="list.id"
            >{{ list.name }}</span
          >
        </div>
        <!-- 导航栏数据 -->
        <Billboard :ranks="ranks" />
      </el-card>
    </div>
    <!-- 排行榜信息 -->
    <RankDetail />
  </div>
</template>

<script>
import Billboard from "./billboard";
import RankDetail from "./rankDetail/rankDetail";

export default {
  name: "RankList",
  data() {
    return {
      ranklist: [],
      ranks: [],
      ranksIndex: 0,
    };
  },
  methods: {
    changeRanks(index) {
      this.ranks = this.ranklist[index].list;
      this.ranksIndex = index;
    },

    async getRequest() {
      const { reqRankList } = this.$API.rankList;
      const ranklist = await reqRankList();

      this.ranklist = ranklist.data.splice(0, 3);
    },
  },
  async mounted() {
    await this.getRequest();
    this.changeRanks(0);
  },
  components: {
    Billboard,
    RankDetail,
  },
};
</script>

<style lang="less" scoped>
.rankList {
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
</style>
