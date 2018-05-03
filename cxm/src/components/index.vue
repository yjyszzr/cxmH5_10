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
        margin-top: px2rem(18px);
        font-size: px2rem(30px);
        color: #505050;
      }
    }
    li:nth-child(5),li:nth-child(6),li:nth-child(7){
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
  i {
    color: #ea5504;
    vertical-align: middle;
    font-size: px2rem(30px);
    margin-right: px2rem(15px);
    display: inline-block;
  }
  p {
    font-size: px2rem(28px);
    color: #a0a0a0;
  }
  .scroll-content {
    position: relative;
    transition: top 0.5s;
  }
  .scroll-content li {
    text-align: left;
    font-size: px2rem(28px);
    color: #666;
    height: px2rem(61px);
    display: flex;
    align-items: center;
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
</style>
<!--首页-->
<template>
	<div class="wrap">
		<v-slider :bannerList='bannerList'></v-slider>
		<!--首页-->
		<div class="index_center">
			<div class="carousel">
				<div class="scroll-wrap">
					<i class="iconfont icon-icon-"></i>
					<p v-if='show'>温馨提示:理性投注,长跟长红</p>
					<ul class="scroll-content" :style="{top}" v-if='hide'>
						<li v-for="(data,item) in y_Carousel" :key='item'>
							{{data.winningMsg}}
						</li>
					</ul>
				</div>
			</div>
			<v-activity :activity='activity'></v-activity>
			<div class="section center">
				<p class="boll">竞彩足球</p>
				<ul>
					<li v-for='(item,i) in dlPlay' :key='i' @click="goFreebuy(item.playType,item.playType,item.lotteryId)">
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
					<mt-spinner type="triple-bounce" color="#999"></mt-spinner>&nbsp;<span>正在加载</span>
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
import informal from './public/informal/informalList'
export default {
  name: "index",
  data() {
    return {
      bannerList: [], //banner
      activity: {}, //活动
      y_Carousel: [], //中奖信息
      dlPlay: [],
      activeIndex: -1,
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
  },
  components: {
    "v-slider": silder,
    "v-activity": activity,
    "v-informal": informal
  },
  computed: {
    top() {
      return -this.activeIndex * 0.81333 + "rem";
    }
  },
  methods: {
    goFreebuy(c, s, t) {
      this.$store.state.matchObj = {};
      this.$store.state.freebuyId = c;
      this.$store.state.mark_playObj.bfIdSaveMapFlag = 0;
      this.$store.state.mark_playObj.bfIdSaveMap = new Map();
      this.$router.push({
        path: "/freebuy/singleNote",
        query: {
          id: s,
          cltId: c,
          ltId: t
        },
        replace: false
      });
    },
    fetchData() {
      let data = {
        page: this.page,
        size: 10
      };
      api
        .dllist(data)
        .then(res => {
          if (res.code == 0) {
           // console.log(res);
            this.zxObj = res.data;
            if (this.page == 1) {
              this.zxList = this.zxList.concat(res.data.list);
              this.trFlag = false
            } else {
              setTimeout(() => {
                this.trFlag = false;
                this.isbool = true;
                this.zxList = this.zxList.concat(res.data.list);
              }, 800);
            }
          } else {
            Toast(res.msg);
          }
        })
        .catch(err=>{
          setTimeout(() => {
                this.trFlag = false;
                this.cxLoadFlag = true;
          }, 800);
        })
    },
    cxLoadClick(){
      this.trFlag = true;
      this.cxLoadFlag = false;
      this.fetchData()
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
  },
  created: function() {},
  mounted() {
    localStorage.removeItem('tab')
    //console.log('1')
    document
      .querySelector("#content")
      .addEventListener("scroll", this.handleScroll);
    let data = {};
    api
      .getHallData(data)
      .then(res => {
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
              if (this.activeIndex < this.y_Carousel.length - 2) {
                this.activeIndex += 1;
              } else {
                this.activeIndex = -1;
              }
            }, 3000);
          }
        } else {
          Toast(res.msg);
        }
      })
    this.fetchData();
  }
};
</script>