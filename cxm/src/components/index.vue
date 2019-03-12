<style scoped lang="scss">
@import "../assets/css/function.scss";

.header {
  position: relative;
  height: px2rem(100px);
  line-height: px2rem(100px);
  background-color: #fff;
}

.mation p {
  font-size: px2rem(28px);
  color: #a0a0a0;
  span {
    color: #505050;
  }
}

.fixedRight {
  position: fixed;
  right: px2rem(20px);
  bottom: px2rem(190px);
  z-index: 200;
  background: #d12120;
  padding: px2rem(10px) px2rem(15px);
  font-size: px2rem(24px);
  color: #fff;
  border-radius: px2rem(10px);
  line-height: px2rem(32px);
}

/*.mation p*/

.center {
  margin-bottom: px2rem(20px);
  width: 100%;
  background: #fff;
  ul {
    padding-bottom: px2rem(28px);
    overflow: hidden;
    li {
      width: 25%;
      text-align: center;
      font-size: px2rem(30px);
      margin-top: px2rem(32px);
      float: left;
      position: relative;
      .entry_status {
        position: absolute;
        top: px2rem(-12px);
        right: px2rem(5px);
        width: px2rem(60px);
      }
      .lottery {
        width: px2rem(64px);
        top: px2rem(-7px);
        right: px2rem(0px);
      }
      p {
        margin-top: px2rem(16px);
        font-size: px2rem(28px);
        color: #505050;
      }
      .subTitle {
        font-size: px2rem(20px);
      }
    }
    li:nth-child(5),
    li:nth-child(6),
    li:nth-child(7),
    li:nth-child(8) {
      margin-top: px2rem(52px);
    }
    .entry_icon {
      width: px2rem(93px);
      margin: 0 auto;
    }
  }
}
.fd-news {
  background: white;
  margin: px2rem(20px) 0;
  ul {
    overflow: hidden;
    padding-top: px2rem(34px);
    li {
      float: left;
      width: 33.3%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-bottom: px2rem(34px);
      img {
        width: px2rem(109px);
        margin-bottom: px2rem(10px);
      }
      p {
        font-size: px2rem(28px);
        color: #505050;
      }
    }
  }
}

.scroll-wrap {
  background: #fff;
  height: px2rem(61px);
  padding-left: px2rem(30px);
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
  i {
    color: #d12120;
    vertical-align: middle;
    font-size: px2rem(30px);
    display: inline-block;
  }
  p {
    font-size: px2rem(28px);
    color: #a0a0a0;
  }
  .scroll-content {
    position: absolute;
    transition: top 0.5s;
    left: px2rem(72px);
  }
  .scroll-content li {
    text-align: left;
    font-size: px2rem(28px);
    color: #666;
    height: px2rem(61px);
    display: flex;
    align-items: center;
    overflow: hidden;
  }
}

.information {
  background: #fff;
  padding: 0 px2rem(20px);
  ul {
    li {
      width: 100%;
    }
  }
}

.downDrop {
  background: rgb(59, 60, 61);
  height: px2rem(88px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 px2rem(30px);
  .downLeft {
    display: flex;
    align-items: center;
    img {
      width: px2rem(48px);
      margin-right: px2rem(20px);
    }
    span {
      color: white;
      font-size: px2rem(28px);
    }
  }
  .downRight {
    padding: px2rem(5px) px2rem(15px);
    border: 1px solid #fff;
    box-sizing: border-box;
    border-radius: px2rem(5px);
    span {
      a{
        color: #fff;
        font-size: px2rem(26px);
      }
    }
  }
}
</style>
<!--首页-->
<template>
  <div class="wrap">
    <div v-if="detect!='ios'&&!wxPd" class="downDrop">
            <div class="downLeft">
                <!-- <img src="../assets/img/downIcon.png" alt=""> -->
                <span>下载球多多APP 购彩更轻松</span>
            </div>
            <div class="downRight">
                <span>
                  <a href="https://szcq-apk.oss-cn-beijing.aliyuncs.com/%E6%B8%A0%E9%81%931_c30039_3.1.0.apk" v-if="$route.query.fr=='c30039'">立即下载</a>
                  <a href="https://szcq-apk.oss-cn-beijing.aliyuncs.com/%E6%B8%A0%E9%81%932_c30040_3.1.0.apk" v-else-if="$route.query.fr=='c30040'">立即下载</a>
                  <a href="https://szcq-apk.oss-cn-beijing.aliyuncs.com/qiuduoduocp_c11111.apk" v-else>立即下载</a>
                </span>
            </div>
    </div>
    <!-- 桌面引导 -->
    <div v-if="detect=='ios'" class="fixedRight" @click="shortClick()">
      <p>放到</p>
      <p>桌面</p>
    </div>
    <!-- 轮播占位 -->
    <v-slider :bannerList="bannerList" v-if="bannerList.length!=0"></v-slider>
    <!--首页-->
    <div class="index_center">
      <div
        class="carousel"
        style="margin-top: 0.24rem;"
        v-if="y_Carousel.length>0&&$store.state.turnOn!=0"
      >
        <div class="scroll-wrap">
          <i class="iconfont icon-icon-"></i>
          <!-- <p v-if='show'>温馨提示:理性投注,长跟长红</p> -->
          <ul class="scroll-content" :style="{top}" v-if="hide">
            <li v-for="(data,item) in y_Carousel" :key="item" v-html="carouselMoney(data)"></li>
          </ul>
        </div>
      </div>
      <!-- 活动广告位 -->
      <v-activity :activity="activity" v-show="$store.state.turnOn!=0"></v-activity>
      <!-- 拓展 -->
      <div class="fd-news" v-if="fdNewsList.length>0">
        <ul>
          <li v-for="(item,i) in fdNewsList" :key="i" @click="goDetails(item)">
            <img :src="item.classImg" class="fd-entry_icon">
            <p>{{item.className}}</p>
          </li>
        </ul>
      </div>
      <!-- 玩法入口 -->
      <div class="section center" v-show="$store.state.turnOn!=0">
        <ul>
          <li v-for="(item,i) in dlPlay" :key="i" @click="goFreebuy(item.redirectUrl,item)">
            <img :src="item.lotteryImg" class="entry_icon">
            <p>{{item.lotteryName}}</p>
            <div
              class="subTitle"
              :style="{'color':item.status=='0'?'#d12120':'#9f9f9f'}"
            >{{item.subTitle}}</div>
          </li>
        </ul>
      </div>
    </div>
    <!--资讯-->
    <div class="information">
      <ul>
        <li>
          <v-informal :zxList="zxList"></v-informal>
        </li>
        <div class="triple" v-show="trFlag">
          <v-loading></v-loading>&nbsp;
          <span style="font-size:0.34rem;">正在加载...</span>
        </div>
        <div class="cxLoad" v-show="cxLoadFlag" @click="cxLoadClick()">加载失败,点击重试</div>
      </ul>
    </div>
  </div>
</template>

<script>
// import http from '../api/http'
import api from "../fetch/api";
import { Toast, Indicator } from "mint-ui";
import { getUrlStr, nativeApp, fx_link_rule, detect,wxPd } from "../util/common";
import silder from "./index/lunbo";
import activity from "./index/activity";
import informal from "./public/informal/informalList";
import Loading from "./public/loading/loading.vue";
import { getCurrentCityPosition } from "../util/getUserLocation.js";
export default {
  name: "index",
  data() {
    return {
      bannerList: [], //banner
      activity: {}, //活动
      y_Carousel: [], //中奖信息
      dlPlay: [],  //玩法列表
      fdNewsList: [], //信息区
      activeIndex: 0, //纵向轮播索引
      //控制纵向轮播显示
      show: true,  
      hide: false,
      page: 1,  //资讯初始化页码
      zxList: [],  //资讯列表
      zxObj: {},  //资讯接口数据
      trFlag: true,  //正在加载显示开关
      isbool: true,   //最后一页停止加载控制
      cxLoadFlag: false, //重新加载显示开关
      detect: "", //判断设备信息
      wxPd: ""
    };
  },
  beforeCreate() {
    Indicator.open();
  },
  components: {
    "v-slider": silder,
    "v-activity": activity,
    "v-informal": informal,
    "v-loading": Loading
  },
  mounted() {
    //平台
    this.detect = detect();
    //wx
    this.wxPd = wxPd();
    localStorage.removeItem("tab");
    //监听滚动
    document
      .querySelector("#content")
      .addEventListener("scroll", this.handleScroll);
    if (!sessionStorage.getItem("pos")) {
      this.getCurrentPosition();
      sessionStorage.setItem("pos", 1);
    } else {
      this.homeData();
    }
  },
  computed: {
    top() {
      //播报滚动距离计算
      return -this.activeIndex * 0.81333 + "rem";
    }
  },
  methods: {
    //开平弹窗
    kqMark() {
      api.openNavs({ str: "" }).then(res => {
        if (res.code == 0) {
          if (
            res.data.bannerImage != "" &&
            localStorage.getItem("upDateMark") != res.data.bannerImage
          ) {
            this.$store.commit("KPDATA", res.data);
            this.$store.dispatch("getMarkShow", true);
            this.$store.state.mark_showObj.mark_show_type = 7;
            localStorage.setItem("upDateMark", res.data.bannerImage);
          }
        }
      });
    },
    shortClick() {
      //放到桌面弹窗
      this.$store.commit("MARKSHORTCUT", true);
    },
    goDetails(item) {
      if (item.status == "0") {
        //敬请期待提示
        Toast(item.statusReason);
        return false;
      }
      let path = fx_link_rule(getUrlStr("id", item.redirectUrl));
      this.$router.push({
        path: path
      });
    },
    goFreebuy(url, s) {
      //进入玩法
      if (s.status == "1") {
        //敬请期待提示
        Toast(s.statusReason);
        return false;
      }
      //清空赛事信息
      this.$store.state.matchObj = {};
      this.$store.state.mark_playObj.bfIdSaveMapFlag = 0;
      this.$store.state.mark_playObj.bfIdSaveMap = {};
      let go_id = getUrlStr("id", url);
      //区分跳转玩法页面
      if (go_id == "1") {
        this.$store.commit("FREEBUYID", "6");
        this.$router.push({
          path: "/lottery/freebuy/singleNote"
        });
      } else if (go_id == "2") {
        this.$router.push({
          path: "/lottery/daletou/selectnumber"
        });
      }
    },
    hallData() {
      //大厅请求
      let data = {};
      api.getHallData(data).then(res => {
        //console.log(res)
        if (res.code == 0) {
          this.bannerList = res.data.dlHallDTO.navBanners;
          this.activity = res.data.dlHallDTO.activity;
          this.y_Carousel = res.data.dlHallDTO.winningMsgs;
          this.dlPlay = res.data.dlHallDTO.lotteryClassifys;
          this.fdNewsList = res.data.dlHallDTO.discoveryHallClassifyDTOList;
          if (this.y_Carousel.length == 0) {
            this.show = true;
            this.hide = false;
          } else {
            this.show = false;
            this.hide = true;
            setInterval(_ => {
              if (this.activeIndex < this.y_Carousel.length - 1) {
                this.activeIndex += 1;
              } else {
                this.activeIndex = 0;
              }
            }, 3000);
          }
        }
      });
      this.kqMark();
    },
    fetchData() {
      //资讯请求
      let data = {
        page: this.page,
        size: 20
      };
      api
        .dllist(data)
        .then(res => {
          if (res.code == 0) {
            //console.log(res);
            this.zxObj = res.data;
            if (this.page == 1) {
              this.zxList = this.zxList.concat(res.data.list);
              this.trFlag = false;
            } else {
              setTimeout(() => {
                this.trFlag = false;
                this.isbool = true;
                this.zxList = this.zxList.concat(res.data.list);
              }, 800);
            }
          }
        })
        .catch(err => {
          setTimeout(() => {
            this.trFlag = false;
            this.cxLoadFlag = true;
          }, 800);
        });
    },
    cxLoadClick() {
      //加载失败，重新加载
      this.trFlag = true;
      this.cxLoadFlag = false;
      this.hallData();
      this.fetchData();
    },
    carouselMoney(c) {
      //播报
      return (
        c.winningMsg +
        '<b style="color:#d12120;font-weight:400;">' +
        c.winningMoney +
        "</b>"
      );
    },
    handleScroll(e) {
      //滚动加载
      if (
        document.querySelector("#content").scrollHeight -
          document.querySelector("#content").clientHeight -
          document.querySelector("#content").scrollTop <=
          0 &&
        this.isbool == true
      ) {
        if (this.zxObj.isLastPage == "false") {
          this.page++;
          this.fetchData();
          this.trFlag = true;
          this.isbool = false;
        }
      }
    },
    //获取城市经位置信息
    getCurrentPosition() {
      getCurrentCityPosition()
        .then(pos => {
          this.$store.commit("POSITION", pos);
          this.homeData();
        })
        .catch(err => {
          let obj = {
            lat: "", //纬度
            lng: "", //经度
            city: "中国", //当前城市位置
            province: "" //省
          };
          this.$store.commit("POSITION", obj);
          //Toast(err);
          this.homeData();
        });
    },
    //首页数据
    homeData() {
      this.hallData();
      this.fetchData();
    }
    // goDownLoad() {  //跳转下载
    //     this.$router.push({
    //         path: "/activity/down/cxm?ct=2&fr=cxm_h5home"
    //     });
    // }
  },
  activated() {
    //保存滚动距离
    document.getElementById("content").scrollTop = this.$root.consultScrolltop;
  },
  destroyed() {
      //删除滚动监听
    document
      .querySelector("#content")
      .removeEventListener("scroll", this.handleScroll);
      //关闭mark
    this.$store.commit("MARKSHORTCUT", false);
  }
};
</script>