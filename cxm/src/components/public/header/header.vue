<template>
    <div class="Header" @touchmove.prevent>
        <div class="headerTop" v-show="showTitle">
            <a @click="return_back()" class="go_return"></a>
            <p class="headerText">彩小秘·{{title}}</p>
            <p class="filter" v-show="menuDisplay==true">
                <span @click='filter()' v-if="$route.path.split('/')[2]=='singleNote'" class="iconfont icon-icon-21"></span>
                <span v-if="$route.path.split('/')[2]=='singleNote'" @click="goInToplay()">帮助</span>
                <span v-if="$route.path.split('/')[2]=='consult'" style="opacity:0;">分享</span>
                <span v-if="$route.path.split('/')[2]=='consult'&&getUrl()" :class="$store.state.zxDetailObj.isCollect=='1'?'icon-icon-32':'icon-icon-34'" class="iconfont" @click="collection($event)"></span>
                <span v-if="$route.path.split('/')[2]=='collection'" @click="colMenu($event)" class="colMenu">{{deleteFlag?'取消':'编辑'}}</span>
            </p>
            <p class="filter" v-show="menuDisplay==false"></p>
        </div>
        <ul class="send" v-if="$route.path.split('/')[2]&&$route.path.split('/')[2]=='record'">
            <li :class="$store.state.recordTab==''||$store.state.recordTab=='1'?'cur':''"><p @click='curClick($event)'>全部</p></li>
            <li :class="$store.state.recordTab=='2'?'cur':''"><p @click='curClick($event)'>中奖</p></li>
            <li :class="$store.state.recordTab=='3'?'cur':''"><p @click='curClick($event)'>待开奖</p></li>
        </ul>
        <ul class="sendaccount" id='searchBar' v-if="$route.path.split('/')[2]&&$route.path.split('/')[2]=='account'">
            <li :class="$store.state.recordTab==''||$store.state.recordTab=='a1'?'cur1':''"><p @click='curClick1($event)'>全部</p></li>
            <li :class="$store.state.recordTab=='a2'?'cur1':''"><p @click='curClick1($event)'>奖金</p></li>
            <li :class="$store.state.recordTab=='a3'?'cur1':''"><p @click='curClick1($event)'>充值</p></li>
            <li :class="$store.state.recordTab=='a4'?'cur1':''"><p @click='curClick1($event)'>购彩</p></li>
            <li :class="$store.state.recordTab=='a5'?'cur1':''"><p @click='curClick1($event)'>提现</p></li>
            <li :class="$store.state.recordTab=='a6'?'cur1':''"><p @click='curClick1($event)'>红包</p></li>
        </ul>
        <ul class="senddetail" id='searchBar' v-if="$route.path.split('/')[2]&&$route.path.split('/')[2]=='detail'">
            <li class="cur2"><p @click='curClick2($event)'>未使用</p></li>
            <li><p @click='curClick2($event)'>已使用</p></li>
            <li><p @click='curClick2($event)'>已过期</p></li>
        </ul>
        <ul class="send" id='searchBar' v-if="$route.path.split('/')[2]&&$route.path.split('/')[2]=='message'">
            <li :class="$store.state.recordTab==''||$store.state.recordTab=='m1'?'cur3':''"><p @click='curClick3($event)'>通知</p></li>
            <li :class="$store.state.recordTab=='m2'?'cur3':''"><p @click='curClick3($event)'>消息</p></li>
        </ul>
        <p class="matchHeader"  v-if="$route.path.split('/')[2]&&$route.path.split('/')[2]=='cathectic'">已选{{$store.state.matchSelectedList.length}}场比赛&nbsp;&nbsp;&nbsp;投注截止时间：<span>{{$store.state.arrTime.length==0?'00-00 00:00':datePd($store.state.arrTime[0])}}</span></p>
        <ul class="help_ul" v-if="$route.path.split('/')[2]&&$route.path.split('/')[2]=='help'">
            <li><a href="" @click.prevent="custormAnchor('a1')">账户问题</a></li>
            <li><a href="" @click.prevent="custormAnchor('a2')">充值问题</a></li>
            <li><a href="" @click.prevent="custormAnchor('a3')">提现问题</a></li>
            <li><a href="" @click.prevent="custormAnchor('a4')">购彩问题</a></li>
            <li><a href="" @click.prevent="custormAnchor('a5')">中奖派奖问题</a></li>
        </ul>
        <ul class="list" v-if="$route.path.split('/')[1]=='lotteryResult'">
            <li @click='data_time()'>{{$store.state.mark_showObj.mark_dateVal}}<i class="iconfont icon-icon-31"></i></li>
            <li @click='more()'>更多条件<i class="iconfont icon-icon-31"></i></li>
            <li @click='all($event)' v-if="flag==true">全部<i class="iconfont icon-icon-31"></i></li>
            <li @click='all($event)' v-if="flag==false">已结束<i class="iconfont icon-icon-31"></i></li>
        </ul>
        <div class="swiper-container findTab" v-if="$route.path.split('/')[1]=='find'">
          <div class="swiper-wrapper">
                <div class="swiper-slide" @click="findTabClick($event,item.cat)" v-for="item in findTab" :key='item.cat' :class="item.cat==findStatus?'findactive':''">
                  <p>{{item.catName=='世界杯'?'其他':(item.catName=='竞彩预测'?'重心推荐':item.catName)}}</p>	
                </div>		        
          </div>
        </div>
        <!-- //世界杯头部 -->
        <ul class="world_top" v-if="$route.path.split('/')[2]&&$route.path.split('/')[2]=='world_matchList'">
            <li><p @click="tabSilde(1,$event)" :class="!$route.path.split('/')[3]||$route.path.split('/')[3]=='worldwinner'?'worldActive':''">冠军竞猜</p></li>
            <li><p @click="tabSilde(2,$event)" :class="$route.path.split('/')[3]&&$route.path.split('/')[3]=='fsplace'?'worldActive':''">冠亚军竞猜</p></li>
        </ul>
        <p class="wd_nav" v-if="$route.path.split('/')[2]&&$route.path.split('/')[2]=='world_detail'">已选{{$store.state.world_cupObj.fsNum}}场比赛</p>
    </div>
</template>

<script>
import datefilter from "../../../util/datefilter";
import { Indicator } from "mint-ui";
import { getUrlStr } from "../../../util/common";
export default {
  name: "Header",
  props: {
    title: String,
    menuDisplay: Boolean,
    menuNosult: Boolean,
    showTitle: Boolean
  },
  data() {
    return {
      flag: true
    };
  },
  methods: {
    return_back() {
      if (this.$route.path.split("/")[2]) {
        if (this.$route.path.split("/")[2] == "singleNote") {
          this.$store.dispatch("getmatchSelectedList", []);
        } else if (
          location.href.split("?")[1] &&
          location.href.split("?")[1].split("=")[0] == "orderStatus"
        ) {
          this.$router.push({
            path: "/",
            replace: false
          });
          return false;
        }
      }
      this.$router.go(-1);
    },
    datePd(c) {
      return datefilter(Number(c * 1000), 3);
    },
    goInToplay() {
      this.$router.push({
        path: "/freebuy/inToplay",
        replace: false
      });
    },
    custormAnchor(anchorName) {
      // 找到锚点
      let anchorElement = document.getElementById(anchorName);
      // 如果对应id的锚点存在，就跳转到锚点
      if (anchorElement) {
        anchorElement.scrollIntoView();
      }
    },
    filter() {
      this.$store.dispatch("getMarkShow", true);
      this.$store.dispatch("getMarkShowType", "2");
    },
    colMenu(c) {
      if (this.deleteFlag == false) {
        this.$store.dispatch("deleteMyFlag", true);
      } else {
        this.$store.dispatch("deleteMyFlag", false);
      }
    },
    curClick(c) {
      $(".cur").removeClass("cur");
      c.target.parentElement.className = "cur";
      if (c.target.innerText == "全部") {
        this.$store.dispatch("changeRecordTab", "1");
      } else if (c.target.innerText == "中奖") {
        this.$store.dispatch("changeRecordTab", "2");
      } else if (c.target.innerText == "待开奖") {
        this.$store.dispatch("changeRecordTab", "3");
      }
    },
    curClick1(c) {
      $(".cur1").removeClass("cur1");
      c.target.parentElement.className = "cur1";
      if (c.target.innerText == "全部") {
        this.$store.dispatch("changeRecordTab", "a1");
      } else if (c.target.innerText == "奖金") {
        this.$store.dispatch("changeRecordTab", "a2");
      } else if (c.target.innerText == "充值") {
        this.$store.dispatch("changeRecordTab", "a3");
      } else if (c.target.innerText == "购彩") {
        this.$store.dispatch("changeRecordTab", "a4");
      } else if (c.target.innerText == "提现") {
        this.$store.dispatch("changeRecordTab", "a5");
      } else if (c.target.innerText == "红包") {
        this.$store.dispatch("changeRecordTab", "a6");
      }
    },
    curClick2(c) {
      $(".cur2").removeClass("cur2");
      c.target.parentElement.className = "cur2";
      if (c.target.innerText == "未使用") {
        this.$store.dispatch("changeRecordTab", "d1");
      } else if (c.target.innerText == "已使用") {
        this.$store.dispatch("changeRecordTab", "d2");
      } else if (c.target.innerText == "已过期") {
        this.$store.dispatch("changeRecordTab", "d3");
      }
    },
    curClick3(c) {
      $(".cur3").removeClass("cur3");
      c.target.parentElement.className = "cur3";
      if (c.target.innerText == "通知") {
        localStorage.setItem("itemStatus", 1);
        this.$store.dispatch("changeRecordTab", "m1");
      } else if (c.target.innerText == "消息") {
        localStorage.setItem("itemStatus", 2);
        this.$store.dispatch("changeRecordTab", "m2");
      }
    },
    collection(c) {
      if (c.target.className == "iconfont icon-icon-34") {
        this.$store.dispatch("getCollectionFlag", true);
        c.target.className = "iconfont icon-icon-32";
      } else {
        this.$store.dispatch("getCollectionFlag", false);
        c.target.className = "iconfont icon-icon-34";
      }
    },
    data_time() {
      this.$store.dispatch("getMarkShow", true);
      this.$store.dispatch("getMarkShowType", 1);
    },
    more() {
      this.$store.dispatch("getMarkShow", true);
      this.$store.dispatch("getMarkShowType", 2);
    },
    all(c) {
      if (c.target.innerText == "全部") {
        this.flag = false;
        this.$store.dispatch("getMatchFinish", "1");
      } else {
        this.flag = true;
        this.$store.dispatch("getMatchFinish", "");
      }
      Indicator.open();
      let data = {
        dateStr: this.$store.state.mark_showObj.mark_dateVal,
        isAlreadyBuyMatch: this.$store.state.mark_showObj.isAlreadyBuyMatch,
        leagueIds: this.$store.state.mark_showObj.leagueIds,
        matchFinish: this.$store.state.mark_showObj.matchFinish
      };
      this.$store.dispatch("getResultList", data);
    },
    getUrl() {
      if (getUrlStr("frz", location.href) == undefined) {
        return true;
      } else {
        if (getUrlStr("frz", location.href) == "1") {
          return true;
        } else {
          return false;
        }
      }
    },
    findTabClick(c,s){
      if(c.target.localName=='p'&&c.target.parentElement.className.indexOf('findactive')==-1){
        Indicator.open()
        $('.findactive').removeClass('findactive')
        c.target.parentElement.className = "swiper-slide findactive";
        this.$store.dispatch("changeFinActive",s)
      }
    },
    tabSilde(c,s){
      $('.worldActive').removeClass('worldActive')
      s.target.className= 'worldActive'
      localStorage.removeItem('world_tab')
      if(c==1){
        this.$store.dispatch("changefsNum", '2');
        if(getUrlStr('showtitle',location.href)=='1'){
          this.$router.replace({
            path: '/activity/world_matchList/worldwinner',
            query:{
              'showtitle': '1'
            }
          })
        }else{
          this.$router.replace({
            path: '/activity/world_matchList/worldwinner'
          })
        }
      }else{
        this.$store.dispatch("changefsNum", '2');
        if(getUrlStr('showtitle',location.href)=='1'){
          this.$router.replace({
            path: '/activity/world_matchList/fsplace',
            query:{
              'showtitle': '1'
            }
          })
        }else{
          this.$router.replace({
            path: '/activity/world_matchList/fsplace'
          })
        }
      }
    }
  },
  computed: {
    deleteFlag() {
      return this.$store.state.deleteFlag;
    },
    zxCollectionFlag() {
      return this.$store.state.zxCollectionFlag;
    },
    findTab() {
      return this.$store.state.findObj.findTab;
    },
    findStatus() {
      return this.$store.state.findObj.findActive;
    }
  }
};
</script>


<style lang='scss' scoped>
@import "../../../assets/css/function.scss";
.Header {
  width: 100%;
  .headerTop {
    overflow: hidden;
    height: px2rem(100px);
    background: #f4f4f4;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .go_return {
      flex: 1;
      // padding-left: px2rem(80px);
      height: 100%;
      background: url("../../../assets/img/ret.png") no-repeat;
      background-position: px2rem(34px) center;
      background-size: px2rem(30px) auto;
      vertical-align: middle;
    }
    .filter {
      flex: 1;
      display: flex;
      height: 100%;
      width: px2rem(138px);
      box-sizing: border-box;
      span {
        display: block;
        height: 100%;
        padding: 0 px2rem(10px) 0 px2rem(10px);
        display: flex;
        align-items: center;
        font-size: px2rem(28px);
        color: #787878;
      }
      .actine_sms {
        font-size: px2rem(18px);
      }
      .iconfont {
        font-size: px2rem(30px);
      }
      .colMenu {
        width: 100%;
        justify-content: flex-end;
        padding-right: px2rem(30px);
        box-sizing: border-box;
      }
      .active_sm {
        width: 100%;
        justify-content: flex-end;
        padding-right: px2rem(30px);
        box-sizing: border-box;
        display: block;
      }
      .icon-icon-44 {
        color: #787878;
      }
    }
    .headerText {
      flex: 3;
      height: 100%;
      display: flex;
      align-items: center;
      //width: px2rem(500px);
      font-size: px2rem(32px);
      color: #505050;
      justify-content: center;
    }
  }
  .send,
  .sendaccount,
  .senddetail {
    height: px2rem(88px);
    background: #fff;
    overflow: hidden;
    display: flex;
    border-bottom: 1px solid #f0f0f0;
    li {
      flex: 1;
      height: px2rem(48px);
      margin-top: px2rem(20px);
      border-right: 1px solid #f1f1f1;
      color: #505050;
      font-size: px2rem(30px);
      text-align: center;
      p {
        height: px2rem(64px);
        display: block;
        margin: 0 auto;
      }
    }
    .cur p,
    .cur1 p,
    .cur2 p,
    .cur3 p {
      color: #e95504;
      width: 50%;
      border-bottom: 2px solid #e95504;
      display: block;
    }
    li:last-child {
      border-right: none;
    }
  }
  .share {
    display: flex;
    height: 100%;
    width: 1.84rem;
    font-size: 0.37333rem;
    color: #505050;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    img {
      display: inline-block;
      width: px2rem(32px);
      height: px2rem(32px);
      margin-right: px2rem(10px);
      vertical-align: middle;
    }
  }
  .matchHeader,.wd_nav {
    background: #fff;
    height: px2rem(72px);
    line-height: px2rem(72px);
    padding: 0 px2rem(30px);
    box-sizing: border-box;
    font-size: px2rem(28px);
    color: #a0a0a0;
    width: 100%;
    border-bottom: 1px solid #f0f0f0;
    span {
      color: #e95504;
    }
  }
  .help_ul {
    background: #fff;
    padding: 0 px2rem(32px) px2rem(36px);
    li {
      background: #f6921e;
      display: inline-block;
      font-size: px2rem(26px);
      border-radius: px2rem(10px);
      width: px2rem(200px);
      height: px2rem(57px);
      text-align: center;
      line-height: px2rem(57px);
      margin-top: px2rem(36px);
      margin-right: px2rem(25px);
      a {
        color: #fff;
      }
    }
    li:nth-child(3) {
      margin-right: 0;
    }
  }
  .list {
    height: px2rem(88px);
    //line-height: px2rem(88px);
    display: flex;
    background: #fff;
    -webkit-box-flex: 1;
    width: 100%;
    border-bottom: 1px solid #f1f1f1;
    box-sizing: border-box;
    li {
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1;
      height: px2rem(88px);
      text-align: center;
      border-right: 1px solid #f1f1f1;
      color: #9f9f9f;
      font-size: px2rem(28px);
      position: relative;
      i {
        color: #ea5504;
        font-size: px2rem(20px);
        right: 0;
        position: absolute;
        bottom: 0;
      }
    }
  }
  .findTab {
    background: white;
    height: px2rem(88px);
    line-height: px2rem(88px);
  }
  .swiper-slide {
    width: 25%;
    background: url("../../../assets/img/freebuy_img/line3.png") no-repeat right
      center;
    background-size: 1px px2rem(40px);
    text-align: center;
    color: #505050;
    p {
      margin: 0 px2rem(38px);
      height: px2rem(84px);
      font-size: px2rem(26px);
    }
  }
  .findactive {
    color: #ea5504;
    p {
      border-bottom: px2rem(4px) solid #ea5504;
    }
  }
  .swiper-slide:last-of-type {
    background: none;
  }
  .world_top{
    display: flex;
    background: white;
    height: px2rem(88px);
    li{
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      p{
        height: 100%;
        font-size: px2rem(28px);
        color: #505050;
        line-height: px2rem(88px);
        box-sizing: border-box;
      }
      .worldActive{
        color: #ea5504;
        border-bottom: 2px solid #ea5504;
      }
    }
    li:first-of-type{
      background: url('../../../assets/img/freebuy_img/line3.png') no-repeat right center;
      background-size: 1px px2rem(50px);
    }
  }
}
</style>

