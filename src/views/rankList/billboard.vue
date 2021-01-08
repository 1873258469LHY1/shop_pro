<template>
  <div>
    <ul>
      <li
        :class="{ navItem: true, active: rankIndex === index }"
        v-for="(rank, index) in ranks"
        :key="rank.id"
        @click="handleChange(index, rank.sourceid, rank.name)"
      >
        <img v-lazy="rank.pic" />
        <div class="navContainer">
          <span class="name">{{ rank.name }}</span>
          <span class="time">{{ rank.pub }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "BillBoard",
  props: ["ranks"],
  data() {
    return {
      rankIndex: 0,
      rankData: {},
    };
  },
  methods: {
    handleChange(index, id, name) {
      this.rankIndex = index;

      this.$bus.$emit("changeDetail", id, name);
    },
  },
  watch: {
    ranks(val) {
      this.rankData = val[0];
      // console.log(val, this.rankData);
      const { sourceid, name } = this.rankData;

      this.handleChange(0, sourceid, name);
    },
  },
  mounted() {},
};
</script>

<style lang="less" scoped>
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
</style>
