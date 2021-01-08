<template>
  <div>
    <el-pagination
      :page-size.sync="limit"
      :pager-count="5"
      layout="prev, pager, next "
      :total="total"
      class="pagination"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: ["total"],
  data() {
    return {
      limit: 5,
    };
  },
  mounted() {},
};
</script>

<style lang="less" scoped>
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
</style>
