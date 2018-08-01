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
/*.mation p*/

.center {
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

.boll {
  height: px2rem(80px);
  font-size: px2rem(30px);
  line-height: px2rem(80px);
  margin-left: px2rem(30px);
  border-bottom: 1px solid #f1f1f1;
  color: #505050;
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
    color: #ea5504;
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
  margin-top: px2rem(20px);
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
      color: #fff;
      font-size: px2rem(26px);
    }
  }
}
</style>
<!--首页-->
<template>
	<div class="wrap">
    <div class="downDrop" @click="goDownLoad()">
      <div class="downLeft">
        <img src="../assets/img/downIocn.png" alt="">
        <span>下载彩小秘APP 购彩更轻松</span>
      </div>
      <div class="downRight">
        <span>立即打开</span>
      </div>
    </div>
		<v-slider :bannerList='bannerList'></v-slider>
		<!--首页-->
		<div class="index_center">
			<div class="carousel" style="margin-top: 0.24rem;">
				<div class="scroll-wrap">
					<i class="iconfont icon-icon-"></i>
					<!-- <p v-if='show'>温馨提示:理性投注,长跟长红</p> -->
					<ul class="scroll-content" :style="{top}" v-if='hide'>
						<li v-for="(data,item) in y_Carousel" :key='item' v-html="carouselMoney(data)">
						</li>
					</ul>
				</div>
			</div>
			<v-activity :activity='activity'></v-activity>
      <!-- <router-link to='/activity/world/thirtytwo'>啦啦啦啦啦</router-link> -->
			<div class="section center">
				<p class="boll">竞彩足球</p>
				<ul>
					<li v-for='(item,i) in dlPlay' :key='i' @click="goFreebuy(item.playType)">
						<img :src="item.playClassifyImg" class="entry_icon">
						<p>{{item.playClassifyName}}</p>
						<img src="../assets/img/Awards@2x.png" class="entry_status" alt="" v-if="item.playClassifyLabelId=='3'">
						<img src="../assets/img/Lottery@2x.png" class="entry_status lottery" alt="" v-if="item.playClassifyLabelId=='2'">
						<img src="../assets/img/Popular@2x.png" class="entry_status" alt="" v-if="item.playClassifyLabelId=='4'">
						<img src="../assets/img/Singlepass@2x.png" class="entry_status" alt="" v-if="item.playClassifyLabelId=='1'">
					</li>
				</ul>
			</div>
		</div>
		<!--资讯-->
		<div class="information">
			<ul>
				<li>
					<v-informal :zxList='zxList'></v-informal>
				</li>
				<div class="triple" v-show="trFlag">
					<v-loading></v-loading>&nbsp;<span style="font-size:0.34rem;">正在加载...</span>
				</div>
        <div class="cxLoad" v-show="cxLoadFlag" @click="cxLoadClick()">
          加载失败,点击重试
        </div>
			</ul>
		</div>
	</div>
</template>

<script>
// import http from '../api/http'
import api from "../fetch/api";
import { Toast } from "mint-ui";
import { Indicator } from "mint-ui";
import silder from "./index/lunbo";
import activity from "./index/activity";
import informal from "./public/informal/informalList";
import Loading from './public/loading/loading.vue'
export default {
  name: "index",
  data() {
    return {
      bannerList: [], //banner
      activity: {}, //活动
      y_Carousel: [], //中奖信息
      dlPlay: [],
      activeIndex: 0,
      show: true,
      hide: false,
      page: 1,
      zxList: [],
      zxObj: {},
      trFlag: true,
      isbool: true,
      cxLoadFlag: false
    };
  },
  beforeCreate() {
    Indicator.open();
    if (
      localStorage.getItem("activefrom") &&
      localStorage.getItem("payLogId") != ""
    ) {
      api
        .query({
          payLogId: localStorage.getItem("payLogId")
        })
        .then(res => {
          if (res.code == 0) {
            this.$store.state.mark_showAc = true;
          } else {
            let num = 0;
            this.$store.state.timertz = setInterval(() => {
              num++;
              api
                .query({
                  payLogId: localStorage.getItem("payLogId")
                })
                .then(res => {
                  if (res.code == 0) {
                    this.$store.state.mark_showAc = true;
                    //Toast('成功')
                    clearInterval(this.$store.state.timertz);
                  } else if(res.code == '304036') {
                    if (num >= 3) {
                      localStorage.removeItem("payLogId");
                      localStorage.removeItem("activefrom");
                      clearInterval(this.$store.state.timertz);
                    }
                  } else{
                    localStorage.removeItem("payLogId");
                    localStorage.removeItem("activefrom");
                    clearInterval(this.$store.state.timertz);
                  }
                });
            }, 3000);
          }
        });
    }
  },
  components: {
    "v-slider": silder,
    "v-activity": activity,
    "v-informal": informal,
    "v-loading": Loading
  },
  computed: {
    top() {
      return -this.activeIndex * 0.81333 + "rem";
    }
  },
  methods: {
    goFreebuy(c) {
      this.$store.state.matchObj = {};
      this.$store.state.freebuyId = c;
      this.$store.state.mark_playObj.bfIdSaveMapFlag = 0;
      this.$store.state.mark_playObj.bfIdSaveMap = {};
      this.$store.dispatch("changefsList", []);
      this.$store.dispatch("changefsNum", "2");
      this.$store.dispatch("changefirstList", []);
      this.$store.state.world_cupObj.worldfliter = [];
      if (c == "0") {
        this.$router.push({
          path: "/activity/world_matchList",
          query: {
            id: c
          },
          replace: false
        });
      } else {
        this.$router.push({
          path: "/freebuy/singleNote",
          query: {
            id: c
          },
          replace: false
        });
      }
    },
    fetchData() {
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
      this.trFlag = true;
      this.cxLoadFlag = false;
      this.fetchData();
    },
    carouselMoney(c) {
      return (
        c.winningMsg +
        '<b style="color:#ea5504;font-weight:400;">' +
        c.winningMoney +
        "</b>元"
      );
    },
    handleScroll(e) {
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
    goDownLoad() {
      this.$router.push({
        path: "/activity/down/cxm?ct=2&fr=cxm_h5home"
      });
    }
  },
  created: function() {},
  mounted() {
    localStorage.removeItem("tab");
    document
      .querySelector("#content")
      .addEventListener("scroll", this.handleScroll);
    let data = {};
    api.getHallData(data).then(res => {
      //console.log(res)
      if (res.code == 0) {
        this.bannerList = res.data.navBanners;
        this.activity = res.data.activity;
        this.y_Carousel = res.data.winningMsgs;
        this.dlPlay = res.data.dlPlayClassifyDetailDTOs;
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
    this.fetchData();
  },
  activated() {
    document.getElementById("content").scrollTop = this.$root.consultScrolltop;
  }
};
</script>