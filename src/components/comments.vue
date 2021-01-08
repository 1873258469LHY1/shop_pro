<template>
  <div class="comments">
    <div class="hotComments">
      <span>{{ title }}</span>
      <span class="count">{{ comments.length }}条</span>
    </div>
    <ul>
      <li class="eachComment" v-for="comment in comments" :key="comment.id">
        <img :src="comment.u_pic" />
        <div class="commentDetail">
          <span class="commentDetail-nickname">{{ comment.like_num }}</span>
          <span class="commentDetail-text">{{ comment.msg }}</span>
          <span class="commentDetail-time"> {{ comment.time }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Comments",
  props: ["title", "comments"],
};
</script>

<style lang="less" scoped>
.comments {
  margin-top: 48px;
  .hotComments {
    font-size: 22px;
    line-height: 30px;
    font-weight: 600;
    margin-bottom: 22px;
    .count {
      margin-left: 18px;
      font-weight: 300;
      font-size: 14px;
    }
  }
  .eachComment {
    display: flex;
    margin: 16px 0 20px;
    img {
      width: 42px;
      height: 42px;
      border-radius: 50%;
      margin-right: 20px;
    }
    .commentDetail {
      display: flex;
      flex-direction: column;
      padding-bottom: 20px;
      width: 100%;
      border-bottom: 1px solid #f2f2f2;
      .commentDetail-nickname {
        height: 22px;
        line-height: 22px;
        font-size: 14px;
        font-weight: 600;
        margin-bottom: 5px;
      }
      .commentDetail-text {
        flex-shrink: 0;
        flex-wrap: wrap;
        font-size: 14px;
        // height: 100px;
        line-height: 26px;
        display: -webkit-box;
        /* 文本行排列方向 */
        -webkit-box-orient: vertical;
        /* 设置几行之后出现溢出省略号 */
        -webkit-line-clamp: 2;
        overflow: hidden;
      }
      .commentDetail-time {
        font-size: 14px;
        opacity: 0.5;
        margin-top: 5px;
      }
    }
  }
}
</style>
