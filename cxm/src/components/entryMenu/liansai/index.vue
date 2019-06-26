<template>
  <div class="liansai">
    <ul class="tab-ul">
      <li class="tab-li" v-for="(item,index) in tabArr" :key=index><span :class="item.cur?'curtab':''" @click='navClick(item,index)'>{{item.name}}</span>
        <span v-show="index!=5" class="line-clow"></span></li>
    </ul>
    <div class="container">
      <!--热门-->
      <div class="containered container-one" v-show='navBodyIndex =="0"'>
        <ul class="container-ul" v-show="leagueInfoList.length>0">
          <li class="container-li" v-for="(item,index) in leagueInfoList" :key=index @click="linsaiClick(item)">
            <div class="container-img-box"><img :src="item.leaguePic" alt=""></div>
            <p class="container-name">{{item.leagueAddr}}</p>
          </li>
        </ul>
        <div v-show="leagueInfoList.length<1">
          <div style="margin: 0 auto;" class="nullstatus pop-content pop-nomes">
            <img src="../../../assets/img/juan.png" alt="">
            <span>暂无数据</span>
          </div>
        </div>
      </div>
      <!--国际-->
      <div class="containered container-two" v-show='navBodyIndex =="1"'>
        <ul class="container-ul" v-show="leagueInfoList.length>0">
          <li class="container-li" v-for="(item,index) in leagueInfoList" :key=index @click="linsaiClick(item)">
            <div class="container-img-box"><img :src="item.leaguePic" alt=""></div>
            <p class="container-name">{{item.leagueAddr}}</p>
          </li>
        </ul>
        <div v-show="leagueInfoList.length<1">
          <div style="margin: 0 auto;" class="nullstatus pop-content pop-nomes">
            <img src="../../../assets/img/juan.png" alt="">
            <span>暂无数据</span>
          </div>
        </div>
      </div>
      <!--亚洲，欧洲，。。。-->
      <div class="containered container-two" v-show='navBodyIndex =="2"'>
        <div class="match">
          <ul class="container-ul">
            <li class="title-ou">{{matchName}}赛事</li>
            <li v-show="countryArr.length>0" class="container-li" v-for="(item,index) in countryArr" :key=index @click="countryClick(item)">
              <div class="container-img-box"><img :src="item.contryPic" alt=""></div>
              <p class="container-name">{{item.contryName}}</p>
            </li>
            <li class="match-no" v-show="countryArr.length<1">
              <div class="nullstatus pop-content pop-nomes">
                <img src="../../../assets/img/juan.png" alt="">
                <span>暂无数据</span>
              </div>
            </li>
          </ul>
        </div>
        <div class="match">
          <ul class="container-ul">
            <li class="title-ou">杯赛</li>
            <li v-show="leagueInfoList.length>0" class="container-li" v-for="(item,index) in leagueInfoList" :key=index @click="linsaiClick(item)">
              <div class="container-img-box"><img :src="item.leaguePic" alt=""></div>
              <p class="container-name">{{item.leagueAddr}}</p>
            </li>
            <li v-show="leagueInfoList.length<1">
              <div class="nullstatus pop-content pop-nomes">
                <img src="../../../assets/img/juan.png" alt="">
                <span>暂无数据</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <mt-popup
      v-model="popupVisible"
      popup-transition="popup-fade">
      <div class="pop-content" v-show="popArr.length>0">
        <p class="pop-title">西班牙</p>
        <div class="pop-body">
          <ul class="pop-ul">
            <li class="pop-li" v-for="(item,index) in popArr" :key=index @click='linsaiClick(item)'>
              {{item.leagueAddr}}
            </li>
          </ul>
        </div>
        <!--<div class="pop-btn">-->
        <!--<p @click="ok()">确定</p>-->
        <!--<p @click="cancels()">取消</p>-->
        <!--</div>-->
      </div>
      <div v-show="popArr.length<1">
        <div class="nullstatus pop-content pop-nomes">
          <img src="../../../assets/img/juan.png" alt="">
          <span>暂无数据</span>
        </div>
      </div>
    </mt-popup>
  </div>


</template>

<script>
  import {Popup, Indicator} from 'mint-ui';
  import api from '../../../fetch/api'

  export default {
    name: "liansai",
    beforeCreate() {
        Indicator.open()
    },
    data() {
      return {
        navBodyIndex: '0',
        navIndex: '0', //,导航index
        popupVisible: false,
        countryArr: [],//国家列表
        leagueInfoList: [],
        popArr: [],
        tabArr: [
          {
            name: '热门',
            groupId: '0',
            cur: true,
          },
          {
            name: '国际',
            groupId: '4',
            cur: false,

          },
          {
            name: '欧洲',
            groupId: '1',
            cur: false,
          },
          {
            name: '亚洲',
            groupId: '3',
            cur: false,
          },
          {
            name: '美洲',
            groupId: '2',
            cur: false,
          },
          {
            name: '非洲',
            groupId: '5',
            cur: false,
          },
        ]
      }
    },
    mounted() {
      this.getDetial('0')
      this.navInit()
    },
    computed:{
      matchName: function () {
        return this.tabArr[this.navIndex].name
      }
    },
    methods: {
      // nav 初始化
      navInit() {
        if (JSON.parse(sessionStorage.getItem('liansaiMes'))) {
          if(JSON.parse(sessionStorage.getItem('liansaiMes')).navIndex){
            this.navIndex = JSON.parse(sessionStorage.getItem('liansaiMes')).navIndex
            this.tabArr.forEach((item, index) => {
              item.cur = false
              if (index == this.navIndex) {
                this.$set(item, 'cur', true)
              }
            })
            if (this.navIndex > 1) {
              this.navBodyIndex = '2'
            }else {
              this.navBodyIndex = this.navIndex
            }
            this.getDetial(this.tabArr[this.navIndex].groupId)
          }

        }else {
          let liansaiMes = {}
          liansaiMes.navIndex = '0'
          sessionStorage.setItem('liansaiMes', JSON.stringify(liansaiMes))
        }
      },
      //nav 点击
      navClick(ite, index) {
        let liansaiMes = {}
        liansaiMes.navIndex = index
        sessionStorage.setItem('liansaiMes', JSON.stringify(liansaiMes))
        this.tabArr.forEach(item => {
          item.cur = false
        })
        this.$set(ite, 'cur', true)
        this.navIndex = index
        if (index > 1) {
          this.navBodyIndex = '2'
        } else {
          this.navBodyIndex = index
        }
        this.getDetial(ite.groupId)
      },
      //获取详情
      getDetial(index) {
        Indicator.open()
        let data = {
          groupId: index
        }
        api.leagueHomePageByGroupId(data)
            .then(res => {
                if(res.code == 0 ){
                   this.countryArr = res.data.contrys
                  this.leagueInfoList = res.data.groupLeagues
                }
        })
      },
      //点击国家
      countryClick(item) {
        this.popupVisible = true
        this.popArr = item.leagueInfoList
      },
      //点击联赛
      linsaiClick(item) {
        this.$router.push({
          path: '/lottery/liansai/' + item.leagueInitials,
          query: {leagueId: item.leagueId}
        })
      },
      //确定
      ok() {

      },
      //取消
      cancels() {
        this.popupVisible = false
      }
    }

  }
</script>

<style scoped lang="scss">
  @import '../../../assets/css/function.scss';

  .liansai {
    min-height: 100%;
    position: absolute;
    width: 100%;
    .pop-nomes{
      padding-top: px2rem(50px);
      padding-bottom: px2rem(50px);
      /*width: 100;*/
    }
    .pop-content {
      width: px2rem(700px);
      background-color: #ffffff;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      align-items: center;
      .pop-title {
        line-height: px2rem(102px);
        border-bottom: 1px solid #f0f0f0;
        width: 100%;
        text-align: center;
      }
      .pop-body {
        width: 100%;
        margin-top: px2rem(30px);
        margin-bottom: px2rem(50px);
        display: flex;
        .pop-ul {
          width: 98%;
          box-sizing: border-box;
          overflow: hidden;
          margin: 0 auto;
          .pop-li {
            text-align: center;
            box-sizing: border-box;
            width: 30.2%;
            line-height: px2rem(60px);
            float: left;
            margin: px2rem(10px) px2rem(10px);
            border: 1px solid #c7c7c7;
          }
        }
      }
      .pop-btn {
        width: 100%;
        line-height: px2rem(80px);
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        border-top: 1px solid #c7c7c7;
        /*align-items: center;*/
        p {
          flex: 1;
          text-align: center;
        }
        p:nth-child(1) {
          color: #d12120;
        }
        p:nth-child(2) {
          border-left: 1px solid #c7c7c7;
        }
      }
    }
    .curtab {
      border-bottom: 2px solid #d12120 !important;
      color: #d12120 !important;
    }
    .line-clow {
      display: inline-block;
      height: px2rem(30px);
      border-right: 1px solid #c7c7c7;
    }
    .match-no{
      overflow: hidden;
      border-right: 1px solid #f0f0f0!important;
      border-bottom: 1px solid #f0f0f0!important;
    }
    .tab-ul {
      box-sizing: border-box;
      background-color: #ffffff;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      font-size: px2rem(24px);
      color: rgb(51, 51, 51);
      .tab-li {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;

        span:nth-child(1) {
          display: inline-block;
          /*padding: px2rem(20px) px2rem(15px) px2rem(18px) px2rem(15px);*/
          width: 100%;
          line-height: px2rem(80px);
          text-align: center;
          margin: 0 px2rem(20px);
          border-bottom: 2px solid #ffffff;
        }
      }
    }
    .container {
      .containered {
        width: 100%;
        position: absolute;
        background: #ffffff;
        top: px2rem(100px);
        padding-top: px2rem(30px);
        padding-bottom: px2rem(30px);
        .title-ou {
          box-sizing: border-box;
          border-bottom: 1px solid #f0f0f0;
          border-right: 1px solid #f0f0f0;
          font-size: px2rem(24px);
          line-height: px2rem(60px);
          padding-left: px2rem(20px);
          color: RGBA(51, 51, 51, 1);
          font-weight: 700;
        }
        .match {
          background-color: #ffffff;
          padding-bottom: px2rem(30px);
        }

        .container-ul {
          overflow: hidden;
          width: px2rem(700px);
          margin: 0 auto;
          box-sizing: border-box;
          .container-li {
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: left;
            float: left;
            text-align: center;
            .container-img-box {
              overflow: hidden;
              img {
                width: 100%;
                height: 100%;
              }
            }
            .container-name {
              font-size: px2rem(24px);
            }
          }
        }
      }
      .container-one {
        .container-ul {
          .container-li {
            width: 25%;
            flex-direction: column;
            padding: px2rem(20px);
            .container-img-box {
              height: px2rem(100px);
              width: px2rem(100px);
            }
            .container-name {
              margin-top: px2rem(10px);
            }
          }
        }
      }
      .container-two {
        .container-ul {
          border-top: 1px solid #f0f0f0;
          border-left: 1px solid #f0f0f0;
          .container-li {
            width: 33.33%;
            height: px2rem(80px);
            flex-direction: row;
            border-right: 1px solid #f0f0f0;
            border-bottom: 1px solid #f0f0f0;
            padding-left: px2rem(30px);
            .container-img-box {
              height: px2rem(30px);
              width: px2rem(45px);
            }
            .container-name {
              margin-left: px2rem(20px);
            }
          }
        }
      }
    }
  }

</style>
