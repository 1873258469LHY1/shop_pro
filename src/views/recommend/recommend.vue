<template>
  <div class="recommendContainer">
    <div class="rec-title">
      <div class="rec-title-nav">
        <div class="rec-bar active">推荐</div>
        <div class="rec-bar">排行榜</div>
        <div class="rec-bar">歌手</div>
        <div class="rec-bar">歌单</div>
        <div class="rec-bar">MV</div>
      </div>
    </div>
    <div class="rec-nav">
      <el-carousel trigger="click" height="266px">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3 class="small">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
      <div class="nav-footer">
        <div>
          <i class="iconfont icon-iconset0289"></i>
          <span>下载PC版</span>
        </div>
        <div>
          <i class="iconfont icon-iconset0290"></i>
          <span>下载Android版</span>
        </div>
        <div>
          <i class="iconfont icon-iPhone"></i>
          <span>下载iPhone版</span>
        </div>
        <div>
          <i class="iconfont icon-pc1"></i>
          <span>下载其他版本</span>
        </div>
      </div>
    </div>
    <div class="recommendSong">
      <div class="songTop">
        <h3 class="title">推荐歌单</h3>
        <div class="songList">
          <span class="rec-bar active">每日推荐</span>
          <span class="rec-bar">翻唱</span>
          <span class="rec-bar">网络</span>
          <span class="rec-bar">伤感</span>
          <span class="rec-bar">欧美</span>
          <span class="rec-bar">更多 ></span>
        </div>
      </div>
      <div class="song-list">
        <div>
          <div>
            <img
              src="https://img1.kuwo.cn/star/userpl2015/10/13/1608825808384_132026710_150.jpg"
              alt=""
            />
          </div>
          <p class="name">每日最新单曲推荐</p>
          <p class="count">
            <i class="iconfont icon-z"></i>
            <span>20037.3万</span>
          </p>
        </div>
        <div>
          <div>
            <img
              src="https://img1.kuwo.cn/star/userpl2015/10/13/1608825808384_132026710_150.jpg"
              alt=""
            />
          </div>
          <p class="name">每日最新单曲推荐</p>
          <p class="count">
            <i class="iconfont icon-z"></i>
            <span>20037.3万</span>
          </p>
        </div>
        <div>
          <div>
            <img
              src="https://img1.kuwo.cn/star/userpl2015/10/13/1608825808384_132026710_150.jpg"
              alt=""
            />
          </div>
          <p class="name">每日最新单曲推荐</p>
          <p class="count">
            <i class="iconfont icon-z"></i>
            <span>20037.3万</span>
          </p>
        </div>
        <div>
          <div>
            <img
              src="https://img1.kuwo.cn/star/userpl2015/10/13/1608825808384_132026710_150.jpg"
              alt=""
            />
          </div>
          <p class="name">每日最新单曲推荐</p>
          <p class="count">
            <i class="iconfont icon-z"></i>
            <span>20037.3万</span>
          </p>
        </div>
        <div>
          <div>
            <img
              src="https://img1.kuwo.cn/star/userpl2015/10/13/1608825808384_132026710_150.jpg"
              alt=""
            />
          </div>
          <p class="name">每日最新单曲推荐</p>
          <p class="count">
            <i class="iconfont icon-z"></i>
            <span>20037.3万</span>
          </p>
        </div>
      </div>
    </div>
    <div>
      <div class="songTop">
        <h3 class="title">精选活动</h3>
      </div>
      <div class="selected">
        <img
          src="https://img1.kuwo.cn/star/upload/10/10/1608275478570_.jpg"
          alt=""
        />
        <img
          src="https://kwimg1.kuwo.cn/star/upload/33/25/1606123779117_.jpg"
          alt=""
        />
      </div>
    </div>
    <div class="recommendSong">
      <div class="songTop">
        <h3 class="title">排行榜</h3>
        <div class="songList">
          <span class="rec-bar">更多 ></span>
        </div>
      </div>
      <div class="rankingList">
        <el-card class="card" :body-style="{ padding: '0px' }">
          <div class="image">
            <div class="img-top-bg">
              <img
                src="https://h5static.kuwo.cn/upload/image/d8faf807ce667092ef29f8d62237bfbf3a1f127a6370664705722a67c8f9e23b.png"
                class="img-top"
              />
            </div>
            <img
              src="https://img1.kuwo.cn/star/albumcover/500/0/11/759002399.jpg"
              class="img-bottom"
            />
          </div>
          <div class="card-list">
            <ul>
              <li class="card-item">
                <span class="item-name">1</span>
                <div class="item-title">
                  <span class="song-name">踏山河</span>
                  <span class="song-artist">是七叔呢</span>
                </div>
              </li>
              <li class="card-item">
                <span class="item-name">1</span>
                <div class="item-title">
                  <span class="song-name">踏山河</span>
                  <span class="song-artist">是七叔呢</span>
                </div>
              </li>
              <li class="card-item">
                <span class="item-name">1</span>
                <div class="item-title">
                  <span class="song-name">踏山河</span>
                  <span class="song-artist">是七叔呢</span>
                </div>
              </li>
              <li class="card-item">
                <span class="item-name">1</span>
                <div class="item-title">
                  <span class="song-name">踏山河</span>
                  <span class="song-artist">是七叔呢</span>
                </div>
              </li>
              <li class="card-item">
                <span class="item-name">1</span>
                <div class="item-title">
                  <span class="song-name">踏山河</span>
                  <span class="song-artist">是七叔呢</span>
                </div>
              </li>
            </ul>
          </div>
        </el-card>
        <el-card class="card" :body-style="{ padding: '0px' }">
          <div class="image">
            <div class="img-top-bg">
              <img
                src="https://h5static.kuwo.cn/upload/image/d8faf807ce667092ef29f8d62237bfbf3a1f127a6370664705722a67c8f9e23b.png"
                class="img-top"
              />
            </div>
            <img
              src="https://img1.kuwo.cn/star/albumcover/500/0/11/759002399.jpg"
              class="img-bottom"
            />
          </div>
          <div class="card-list">
            <ul>
              <li class="card-item">
                <span class="item-name">1</span>
                <div class="item-title">
                  <span class="song-name">踏山河</span>
                  <span class="song-artist">是七叔呢</span>
                </div>
              </li>
              <li class="card-item">
                <span class="item-name">1</span>
                <div class="item-title">
                  <span class="song-name">踏山河</span>
                  <span class="song-artist">是七叔呢</span>
                </div>
              </li>
              <li class="card-item">
                <span class="item-name">1</span>
                <div class="item-title">
                  <span class="song-name">踏山河</span>
                  <span class="song-artist">是七叔呢</span>
                </div>
              </li>
              <li class="card-item">
                <span class="item-name">1</span>
                <div class="item-title">
                  <span class="song-name">踏山河</span>
                  <span class="song-artist">是七叔呢</span>
                </div>
              </li>
              <li class="card-item">
                <span class="item-name">1</span>
                <div class="item-title">
                  <span class="song-name">踏山河</span>
                  <span class="song-artist">是七叔呢</span>
                </div>
              </li>
            </ul>
          </div>
        </el-card>
        <el-card class="card" :body-style="{ padding: '0px' }">
          <div class="image">
            <div class="img-top-bg">
              <img
                src="https://h5static.kuwo.cn/upload/image/d8faf807ce667092ef29f8d62237bfbf3a1f127a6370664705722a67c8f9e23b.png"
                class="img-top"
              />
            </div>
            <img
              src="https://img1.kuwo.cn/star/albumcover/500/0/11/759002399.jpg"
              class="img-bottom"
            />
          </div>
          <div class="card-list">
            <ul>
              <li class="card-item">
                <span class="item-name">1</span>
                <div class="item-title">
                  <span class="song-name">踏山河</span>
                  <span class="song-artist">是七叔呢</span>
                </div>
              </li>
              <li class="card-item">
                <span class="item-name">1</span>
                <div class="item-title">
                  <span class="song-name">踏山河</span>
                  <span class="song-artist">是七叔呢</span>
                </div>
              </li>
              <li class="card-item">
                <span class="item-name">1</span>
                <div class="item-title">
                  <span class="song-name">踏山河</span>
                  <span class="song-artist">是七叔呢</span>
                </div>
              </li>
              <li class="card-item">
                <span class="item-name">1</span>
                <div class="item-title">
                  <span class="song-name">踏山河</span>
                  <span class="song-artist">是七叔呢</span>
                </div>
              </li>
              <li class="card-item">
                <span class="item-name">1</span>
                <div class="item-title">
                  <span class="song-name">踏山河</span>
                  <span class="song-artist">是七叔呢</span>
                </div>
              </li>
            </ul>
          </div>
        </el-card>
        <el-card class="card" :body-style="{ padding: '0px' }">
          <div class="image">
            <div class="img-top-bg">
              <img
                src="https://h5static.kuwo.cn/upload/image/d8faf807ce667092ef29f8d62237bfbf3a1f127a6370664705722a67c8f9e23b.png"
                class="img-top"
              />
            </div>
            <img
              src="https://img1.kuwo.cn/star/albumcover/500/0/11/759002399.jpg"
              class="img-bottom"
            />
          </div>
          <div class="card-list">
            <ul>
              <li class="card-item">
                <span class="item-name">1</span>
                <div class="item-title">
                  <span class="song-name">踏山河</span>
                  <span class="song-artist">是七叔呢</span>
                </div>
              </li>
              <li class="card-item">
                <span class="item-name">1</span>
                <div class="item-title">
                  <span class="song-name">踏山河</span>
                  <span class="song-artist">是七叔呢</span>
                </div>
              </li>
              <li class="card-item">
                <span class="item-name">1</span>
                <div class="item-title">
                  <span class="song-name">踏山河</span>
                  <span class="song-artist">是七叔呢</span>
                </div>
              </li>
              <li class="card-item">
                <span class="item-name">1</span>
                <div class="item-title">
                  <span class="song-name">踏山河</span>
                  <span class="song-artist">是七叔呢</span>
                </div>
              </li>
              <li class="card-item">
                <span class="item-name">1</span>
                <div class="item-title">
                  <span class="song-name">踏山河</span>
                  <span class="song-artist">是七叔呢</span>
                </div>
              </li>
            </ul>
          </div>
        </el-card>
        <el-card class="card" :body-style="{ padding: '0px' }">
          <div class="image">
            <div class="img-top-bg">
              <img
                src="https://h5static.kuwo.cn/upload/image/d8faf807ce667092ef29f8d62237bfbf3a1f127a6370664705722a67c8f9e23b.png"
                class="img-top"
              />
            </div>
            <img
              src="https://img1.kuwo.cn/star/albumcover/500/0/11/759002399.jpg"
              class="img-bottom"
            />
          </div>
          <div class="card-list">
            <ul>
              <li class="card-item">
                <span class="item-name">1</span>
                <div class="item-title">
                  <span class="song-name">踏山河</span>
                  <span class="song-artist">是七叔呢</span>
                </div>
              </li>
              <li class="card-item">
                <span class="item-name">1</span>
                <div class="item-title">
                  <span class="song-name">踏山河</span>
                  <span class="song-artist">是七叔呢</span>
                </div>
              </li>
              <li class="card-item">
                <span class="item-name">1</span>
                <div class="item-title">
                  <span class="song-name">踏山河</span>
                  <span class="song-artist">是七叔呢</span>
                </div>
              </li>
              <li class="card-item">
                <span class="item-name">1</span>
                <div class="item-title">
                  <span class="song-name">踏山河</span>
                  <span class="song-artist">是七叔呢</span>
                </div>
              </li>
              <li class="card-item">
                <span class="item-name">1</span>
                <div class="item-title">
                  <span class="song-name">踏山河</span>
                  <span class="song-artist">是七叔呢</span>
                </div>
              </li>
            </ul>
          </div>
        </el-card>
      </div>
    </div>
    <div class="recommendSong">
      <div class="songTop">
        <h3 class="title">歌手推荐</h3>
        <div class="songList">
          <span class="rec-bar active">每日推荐</span>
          <span class="rec-bar">翻唱</span>
          <span class="rec-bar">网络</span>
          <span class="rec-bar">伤感</span>
          <span class="rec-bar">欧美</span>
          <span class="rec-bar">更多 ></span>
        </div>
      </div>
      <div class="song-list">
        <div>
          <div class="singer">
            <img
              src="https://img1.kuwo.cn/star/userpl2015/10/13/1608825808384_132026710_150.jpg"
              alt=""
            />
          </div>
          <div class="singer-name">
            <p class="name">周杰伦</p>
            <p class="count">
              <span>1386首歌曲</span>
            </p>
          </div>
        </div>
        <div>
          <div class="singer">
            <img
              src="https://img1.kuwo.cn/star/userpl2015/10/13/1608825808384_132026710_150.jpg"
              alt=""
            />
          </div>
          <div class="singer-name">
            <p class="name">周杰伦</p>
            <p class="count">
              <span>1386首歌曲</span>
            </p>
          </div>
        </div>
        <div>
          <div class="singer">
            <img
              src="https://img1.kuwo.cn/star/userpl2015/10/13/1608825808384_132026710_150.jpg"
              alt=""
            />
          </div>
          <div class="singer-name">
            <p class="name">周杰伦</p>
            <p class="count">
              <span>1386首歌曲</span>
            </p>
          </div>
        </div>
        <div>
          <div class="singer">
            <img
              src="https://img1.kuwo.cn/star/userpl2015/10/13/1608825808384_132026710_150.jpg"
              alt=""
            />
          </div>
          <div class="singer-name">
            <p class="name">周杰伦</p>
            <p class="count">
              <span>1386首歌曲</span>
            </p>
          </div>
        </div>
        <div>
          <div class="singer">
            <img
              src="https://img1.kuwo.cn/star/userpl2015/10/13/1608825808384_132026710_150.jpg"
              alt=""
            />
          </div>
          <div class="singer-name">
            <p class="name">周杰伦</p>
            <p class="count">
              <span>1386首歌曲</span>
            </p>
          </div>
        </div>
        <div>
          <div class="singer">
            <img
              src="https://img1.kuwo.cn/star/userpl2015/10/13/1608825808384_132026710_150.jpg"
              alt=""
            />
          </div>
          <div class="singer-name">
            <p class="name">周杰伦</p>
            <p class="count">
              <span>1386首歌曲</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="songTop">
        <h3 class="title">主播电台</h3>
        <el-button round class="icon">
          <span>畅听更多精品电台</span>
          <i class="el-icon-bottom"></i>
        </el-button>
      </div>
      <div>
        <el-row :gutter="20">
          <el-col :span="8"
            ><div>
              <div class="radio">
                <img
                  src="https://img3.kuwo.cn/star/albumcover/300/30/80/3518428114.jpg"
                />
                <div class="radioContext">
                  <p class="radio-name">佛咒</p>
                  <p class="radio-text">佛学听我的</p>
                </div>
              </div>
            </div></el-col
          >
          <el-col :span="8"
            ><div>
              <div class="radio">
                <img
                  src="https://img3.kuwo.cn/star/albumcover/300/30/80/3518428114.jpg"
                />
                <div class="radioContext">
                  <p class="radio-name">佛咒</p>
                  <p class="radio-text">佛学听我的</p>
                </div>
              </div>
            </div></el-col
          >
          <el-col :span="8"
            ><div>
              <div class="radio">
                <img
                  src="https://img3.kuwo.cn/star/albumcover/300/30/80/3518428114.jpg"
                />
                <div class="radioContext">
                  <p class="radio-name">佛咒</p>
                  <p class="radio-text">佛学听我的</p>
                </div>
              </div>
            </div></el-col
          >
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8"
            ><div>
              <div class="radio">
                <img
                  src="https://img3.kuwo.cn/star/albumcover/300/30/80/3518428114.jpg"
                />
                <div class="radioContext">
                  <p class="radio-name">佛咒</p>
                  <p class="radio-text">佛学听我的</p>
                </div>
              </div>
            </div></el-col
          >
          <el-col :span="8"
            ><div>
              <div class="radio">
                <img
                  src="https://img3.kuwo.cn/star/albumcover/300/30/80/3518428114.jpg"
                />
                <div class="radioContext">
                  <p class="radio-name">佛咒</p>
                  <p class="radio-text">佛学听我的</p>
                </div>
              </div>
            </div></el-col
          >
          <el-col :span="8"
            ><div>
              <div class="radio">
                <img
                  src="https://img3.kuwo.cn/star/albumcover/300/30/80/3518428114.jpg"
                />
                <div class="radioContext">
                  <p class="radio-name">佛咒</p>
                  <p class="radio-text">佛学听我的</p>
                </div>
              </div>
            </div></el-col
          >
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8"
            ><div>
              <div class="radio">
                <img
                  src="https://img3.kuwo.cn/star/albumcover/300/30/80/3518428114.jpg"
                />
                <div class="radioContext">
                  <p class="radio-name">佛咒</p>
                  <p class="radio-text">佛学听我的</p>
                </div>
              </div>
            </div></el-col
          >
          <el-col :span="8"
            ><div>
              <div class="radio">
                <img
                  src="https://img3.kuwo.cn/star/albumcover/300/30/80/3518428114.jpg"
                />
                <div class="radioContext">
                  <p class="radio-name">佛咒</p>
                  <p class="radio-text">佛学听我的</p>
                </div>
              </div>
            </div></el-col
          >
          <el-col :span="8"
            ><div>
              <div class="radio">
                <img
                  src="https://img3.kuwo.cn/star/albumcover/300/30/80/3518428114.jpg"
                />
                <div class="radioContext">
                  <p class="radio-name">佛咒</p>
                  <p class="radio-text">佛学听我的</p>
                </div>
              </div>
            </div></el-col
          >
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "recommend",
};
</script>

<style lang="less" scoped>
.recommendContainer {
  width: 1100px;
  padding: 0 110px;
  .rec-title {
    height: 54px;
    line-height: 54px;
    padding-left: 206px;
    .rec-title-nav {
      display: flex;
      justify-content: flex-start;
      width: 25%;
      justify-content: space-between;
    }
  }
  .rec-bar {
    color: #333;
    font-weight: 300;
    font-size: 14px;
  }
  .rec-bar.active {
    color: #000;
    font-weight: 600;
  }
  .rec-nav {
    height: 317px;
    .nav-footer {
      display: flex;
      justify-content: space-around;
      background: rgba(0, 0, 0, 0.15);
      div {
        display: flex;
        align-items: center;
        height: 50px;
        line-height: 50px;
        color: #fff;
        .iconfont {
          font-size: 28px;
          margin-right: 10px;
        }
        span {
          font-size: 15px;
        }
      }
    }
  }
  .songTop {
    margin-top: 60px;
    margin-bottom: 24px;
    display: flex;
    align-items: baseline;
  }
  .title {
    font-size: 28px;
    margin-right: 40px;
  }
  .songList {
    display: flex;
    width: 338px;
    justify-content: space-between;
  }
  .song-list {
    display: flex;
    justify-content: space-between;
    img {
      width: 207px;
      height: 207px;
    }
    .name {
      font-size: 16px;
      height: 22px;
      line-height: 22px;
      margin-top: 16px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .count {
      margin-top: 10px;
      color: #999;
      height: 15px;
      line-height: 15px;
      font-size: 14px;
    }
  }
  .selected {
    width: 49.2%;
    display: flex;
    img {
      width: 100%;
      height: 152px;
      padding-right: 20px;
    }
  }
  .rankingList {
    display: flex;
    justify-content: space-between;
  }
  .card {
    width: 206px;
    height: 498px;
    .image {
      position: relative;
      width: 100%;
      height: 123px;
      overflow: hidden;
      .img-top-bg {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background: rgba(46, 32, 60, 0.7);
        z-index: 10;
        .img-top {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 54.3%;
          z-index: 10;
        }
      }
      .img-bottom {
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        transform: translateY(-50%);
      }
    }
    .card-list {
      padding: 28px 20px 26px;
      .card-item {
        display: flex;
        .item-name {
          font-size: 16px;
          width: 20px;
          font-weight: 600;
          text-align: center;
        }
        .item-title {
          display: flex;
          flex-direction: column;
          width: 85%;
          padding-left: 10px;
          .song-name {
            font-size: 16px;
            font-weight: 400;
            height: 22px;
            line-height: 22px;
            width: 100%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .song-artist {
            width: 100%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            margin-top: 4px;
            font-size: 14px;
            font-weight: 300;
            color: #999;
            height: 20px;
            line-height: 20px;
          }
        }
      }
    }
    .card-list li + li {
      margin-top: 23px;
    }
  }
  .singer {
    img {
      width: 143px;
      height: 143px;
      border-radius: 50%;
    }
  }
  .singer-name {
    text-align: center;
  }
  .icon {
    display: flex;
    width: 170px;
    height: 32px;
    background: #ffdf1f;
    color: #333;
    align-items: center;
    justify-content: center;
    span {
      height: 18px;
      line-height: 18px;
      padding-right: 9px;
      border-right: 1px solid rgba(0, 0, 0, 0.05);
      margin-right: 9px;
    }
  }
  .radio {
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
    img {
      width: 70px;
      height: 70px;
    }
    .radioContext {
      width: 75.66%;
      border-bottom: 1px solid rgba(0, 0, 0, 0.04);
      display: flex;
      flex-direction: column;
      justify-content: center;
      .radio-name {
        height: 22px;
        font-size: 16px;
        line-height: 22px;
        font-weight: 400;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      .radio-text {
        margin-top: 14px;
        color: #999;
      }
    }
  }
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
