<template>
  <div class="comments">
    <div class="hotComments">
      <span>{{ title }}</span>
      <span class="count">42条</span>
    </div>
    <ul>
      <li class="eachComment">
        <img
          src="https://img1.kuwo.cn/star/userhead/33/75/1609210368733_325783533s.jpg"
        />
        <div class="commentDetail">
          <span class="commentDetail-nickname">╰把曾经 谱写成童話╮</span>
          <span class="commentDetail-text">许嵩有十多首歌曲都在飙升榜前列</span>
          <span class="commentDetail-time"> 2019-06-28 11:35:32 </span>
        </div>
      </li>
      <li class="eachComment">
        <img
          src="https://img1.kuwo.cn/star/userhead/33/75/1609210368733_325783533s.jpg"
        />
        <div class="commentDetail">
          <span class="commentDetail-nickname">╰把曾经 谱写成童話╮</span>
          <span class="commentDetail-text">许嵩有十多首歌曲都在飙升榜前列</span>
          <span class="commentDetail-time"> 2019-06-28 11:35:32 </span>
        </div>
      </li>
      <li class="eachComment">
        <img
          src="https://img1.kuwo.cn/star/userhead/33/75/1609210368733_325783533s.jpg"
        />
        <div class="commentDetail">
          <span class="commentDetail-nickname">╰把曾经 谱写成童話╮</span>
          <span class="commentDetail-text">许嵩有十多首歌曲都在飙升榜前列</span>
          <span class="commentDetail-time"> 2019-06-28 11:35:32 </span>
        </div>
      </li>
      <li class="eachComment">
        <img
          src="https://img1.kuwo.cn/star/userhead/33/75/1609210368733_325783533s.jpg"
        />
        <div class="commentDetail">
          <span class="commentDetail-nickname">╰把曾经 谱写成童話╮</span>
          <span class="commentDetail-text">许嵩有十多首歌曲都在飙升榜前列</span>
          <span class="commentDetail-time"> 2019-06-28 11:35:32 </span>
        </div>
      </li>
      <li class="eachComment">
        <img
          src="https://img1.kuwo.cn/star/userhead/33/75/1609210368733_325783533s.jpg"
        />
        <div class="commentDetail">
          <span class="commentDetail-nickname">╰把曾经 谱写成童話╮</span>
          <span class="commentDetail-text">许嵩有十多首歌曲都在飙升榜前列</span>
          <span class="commentDetail-time"> 2019-06-28 11:35:32 </span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Comments",
  props: ["title"],
  
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
    height: 91px;
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
        font-size: 14px;
        line-height: 26px;
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
