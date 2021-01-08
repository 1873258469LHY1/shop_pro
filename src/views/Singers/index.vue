<template>
  <div class="outer">
    <div class="SingersContainer">
      <!-- 歌手音标导航区域 -->
      <div class="singerNavWrap">
        <ul class="singerNav" @click="handleLetter">
          <li :class="{ active: singerParameter.prefix === '', hot: true }">
            热门
          </li>
          <li
            v-for="(item, index) in letter"
            :key="index"
            :class="{ active: item === singerParameter.prefix }"
          >
            {{ item }}
          </li>
        </ul>
        <!-- 歌手地区语种导航 -->
        <ul class="singerDistrict">
          <li
            :class="{ active: singerParameter.category === 0 }"
            @click="handleDistrict(0)"
          >
            全部
          </li>
          <li
            :class="{ active: singerParameter.category === 1 }"
            @click="handleDistrict(1)"
          >
            华语男
          </li>
          <li
            :class="{ active: singerParameter.category === 2 }"
            @click="handleDistrict(2)"
          >
            华语女
          </li>
          <li
            :class="{ active: singerParameter.category === 3 }"
            @click="handleDistrict(3)"
          >
            华语组合
          </li>
          <li
            :class="{ active: singerParameter.category === 4 }"
            @click="handleDistrict(4)"
          >
            日韩男
          </li>
          <li
            :class="{ active: singerParameter.category === 5 }"
            @click="handleDistrict(5)"
          >
            日韩女
          </li>
          <li
            :class="{ active: singerParameter.category === 6 }"
            @click="handleDistrict(6)"
          >
            日韩组合
          </li>
          <li
            :class="{ active: singerParameter.category === 7 }"
            @click="handleDistrict(7)"
          >
            欧美男
          </li>
          <li
            :class="{ active: singerParameter.category === 8 }"
            @click="handleDistrict(8)"
          >
            欧美女
          </li>
          <li
            :class="{ active: singerParameter.category === 9 }"
            @click="handleDistrict(9)"
          >
            欧美组合
          </li>
          <li
            :class="{ active: singerParameter.category === 10 }"
            @click="handleDistrict(10)"
          >
            其他
          </li>
        </ul>
        <!-- 歌手图片展示 -->
        <div class="singerPictureWrap">
          <!-- 大图 -->
          <ul>
            <li
              class="bigSingerPicture"
              v-for="singerBig of singerListBig"
              :key="singerBig.id"
              @click="handleClickDetail(singerBig.id, singerBig)"
              style="cursor: pointer"
            >
              <img v-lazy="singerBig.pic" class="picture" />
              <p class="name">{{ singerBig.name }}</p>
              <p class="text">{{ singerBig.musicNum }}首歌</p>
            </li>
          </ul>
          <!-- 小图 -->
          <ul>
            <li
              class="smallSingerPicture"
              v-for="singerSmall of singerListSmall"
              :key="singerSmall.id"
              @click="handleClickDetail(singerSmall.id, singerSmall)"
              style="cursor: pointer"
            >
              <div class="singerImg">
                <img v-lazy="singerSmall.pic70" />
              </div>
              <div class="singerName">
                <span>{{ singerSmall.name }}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!-- 分页器 -->
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page.sync="singerParameter.pn"
        :page-size="singerParameter.rn"
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
import { getAllSingerList } from "../../api/singers";
export default {
  name: "Singers",
  data() {
    return {
      letter: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
      ],
      singerParameter: {
        category: 0,
        rn: 36,
        pn: 1,
        prefix: "",
      },
      singerList: [],
      singerListBig: [],
      singerListSmall: [],
      // 总条数
      total: 0,
    };
  },
  methods: {
    //地区男女分类
    handleDistrict(category) {
      if (category === this.singerParameter.category) return;
      this.singerParameter.category = category;
      this.singerParameter.pn = 1;
      this.getSingerList();
    },
    //点击字母分类
    handleLetter(e) {
      if (this.singerParameter.prefix === e.target.innerHTML.trim()) return;
      if (
        this.singerParameter.prefix === "" &&
        e.target.innerHTML.trim() === "热门"
      )
        return;
      if (e.target.localName === "li") {
        if (e.target.innerHTML.trim() === "热门") {
          this.singerParameter.prefix = "";
          this.pn = 1;
          this.getSingerList();
          return;
        }
        this.singerParameter.pn = 1;
        this.singerParameter.prefix = e.target.innerHTML.trim();
        this.getSingerList();
      }
    },
    // 跳转到歌手详情页面
    handleClickDetail(artistid, singerIntro) {
      singerIntro = JSON.stringify(singerIntro);
      sessionStorage.setItem("singerIntro", singerIntro);
      this.$router.push({
        name: "singersDetail",
        params: { artistid },
      });
    },
    //获取歌手列表
    getSingerList() {
      getAllSingerList(this.singerParameter).then((res) => {
        res = res.data;
        this.total = +res.total;
        this.singerList = res.artistList;
        this.singerListBig = res.artistList.slice(0, 12);
        this.singerListSmall = res.artistList.slice(12);
      });
    },
    //修改页码触发
    handleCurrentChange() {
      this.getSingerList();
    },
  },
  mounted() {
    this.getSingerList();
  },
};
</script>

<style lang="less" scoped>
.outer {
  min-width: 1180px;
  max-width: 1640px;
  padding: 0 120px;
  margin: 0 auto;
}
.SingersContainer {
  font-size: 14px;
  max-width: 1400px;
  margin: 0 auto;
  //歌手音标导航
  .singerNav {
    display: flex;
    li {
      width: 28px;
      height: 28px;
      margin-right: 14px;
      flex-shrink: 0;
      text-align: center;
      line-height: 28px;
      cursor: pointer;
      &.active {
        background-color: #ffe443;
        border-radius: 50%;
        font-weight: 700;
      }
      &.hot {
        width: 56px;
        border-radius: 14px;
        font-weight: 700;
      }
      &:focus {
        color: #ffe443 !important;
      }
    }
  }
  //歌手地区导航
  .singerDistrict {
    margin: 25px 0;
    display: flex;

    li {
      padding: 5px 12px;
      margin-right: 8px;
      cursor: pointer;

      &.active {
        background-color: #ffe443;
        border-radius: 15px;
        font-weight: 700;
      }
    }
  }
  //歌手美照跳转
  .singerPictureWrap {
    ul {
      display: flex;
      flex-wrap: wrap;
      //大图
      .bigSingerPicture {
        width: 16.6%;
        box-sizing: border-box;
        padding: 21px;
        .picture {
          width: 189px;
          height: 189px;
          border-radius: 50%;
        }
        .name {
          margin: 12px 0 6px 0;
          text-align: center;
          font-size: 16px;
        }
        .text {
          font-size: 12px;
          text-align: center;
          color: #999;
        }
      }
      //小图
      .smallSingerPicture {
        display: flex;
        margin: 22px;
        width: 189px;
        .singerImg {
          img {
            width: 38px;
            height: 38px;
            border-radius: 50%;
          }
        }
        .singerName {
          span {
            line-height: 38px;
            margin-left: 18px;
          }
        }
      }
    }
  }
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
</style>>
