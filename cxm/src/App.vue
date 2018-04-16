<template>
  <div id="app">
    <v-header :title='title()' :menu-display="menuDisplay()" v-show='isShowHeader'></v-header>
    <div id='content' class="content">
        <!-- <transition  mode="out-in" enter-active-class='bounce-enter' leave-active-class="bounce-leave">
            <router-view></router-view>
        </transition>   -->
        <router-view></router-view>
    </div>
    <v-footer></v-footer>
    <transition name="fade"> 
      <v-mark v-if="this.$store.state.mark_show"></v-mark>
    </transition>
    <v-pmark v-show="this.$store.state.mark_playObj.mark_playBox"></v-pmark>
  </div>
</template>

<script>
import header from './components/public/header/header'
import footer from './components/public/footer/footer'
import mark from './components/public/mark/mark'
import pmark from './components/public/mark/match_playut/mark_playut'
export default {
  name: 'App',
  components: {
    'v-header': header,
    'v-footer': footer,
    'v-mark': mark,
    'v-pmark': pmark
  },
  data(){
    return {
      isShowHeader: false
    }
  },
  methods: {
    title () {
      if(this.$route.path.split('/')[2]){
          this.isShowHeader=true
          switch (this.$route.path.split('/')[2]) {
            case 'register':
              return '注册'
            case 'password':
              return '密码登录'
            case 'sms':
              return '短信登录'
            case 'find':
              return '找回密码'
            case 'revise':
              return '修改密码'
            case 'about':
              return '关于我们'
            case 'detail':
              return '优惠券'
            case 'certification':
              return '实名认证'
            case 'insurance':
              return '安全保障'
            case 'suggestion':
              return '投诉建议'
            case 'recharge':
              return '充值'
            case 'withdraw':
              return '提现'
            case 'record':
              return '投注记录'
            case 'add_card':
              return '添加银行卡'
            case 'credit_card':
              return '管理银行卡'
            case 'account':
              return '账户明细'
            case 'message':
              return '消息中心'
            case 'order':
              return '订单详情'
            case 'draw':
              return '出票方案'
              case 'payment':
                  return '支付订单'
            case 'singleNote':
              if(this.$store.state.freebuyId=='1'){
                return '胜平负'
              }
            case 'cathectic':
              return '投注确认'
          }
      }else{
          if(this.$route.path.split('/')[1]=='user' || this.$route.path.split('/')[1]=='lotteryResult'){
            this.isShowHeader=true
          }else{
            this.isShowHeader=false
          }
          //this.isShowHeader=false
          switch (this.$route.path.split('/')[1]) {
            case 'user':
              return "个人中心"
              case 'lotteryResult':
                  return "比赛结果"
          }
      }
    },
    menuDisplay () {
        if (this.$route.path.split('/')[2] == 'singleNote') {
          return true
        } else {
          return false
        }
    },
  },
}
</script>

<style lang='scss'>
    @import "./assets/css/public.scss";
    body ,html{
        background-color: #f5f5f5;
        height: 100%;
    }

    .color {
        background-color: #ffffff;
    }
    
    a:hover {
      text-decoration: none;
    }

    #app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      height: 100%;
      background: #F5F5F5;
      display: flex;
      flex-flow: column;
      justify-content: space-between;
      align-items: center;
      .content{
        width: 100%;
        flex-grow: 1;
        flex-shrink: 1;
        overflow: scroll;
        padding-bottom: px2rem(20px);
        -webkit-overflow-scrolling: touch!important;
      }
      // .tabar {
      //   margin-bottom: px2rem(120px);
      // }
      //渐变动效
      // .slide-left-enter-active,
      // .slide-left-leave-active {
      //   transition: all .1s ease-in;
      //   opacity: 1;
      // }
      // .slide-left-enter,
      // .slide-left-leave-active {
      //   opacity: 0;
      // }
      /*
      从右至左切入
      */
      .bounce-enter {
        animation: bounce-in .3s;
      }
      .bounce-leave {
        animation: bounce-out .3s;
      }
      .fade-enter-active, .fade-leave-active {
        transition: opacity .3s
      }
      .fade-enter, .fade-leave-active {
        opacity: 0
      }
    }

    @keyframes bounce-in {
      0% {
        opacity: 0;
        -webkit-transform: translateX(100%);
      }
      100% {
        opacity: 1;
        -webkit-transform: translateX(0);
      }
    }
    @keyframes bounce-out {
      0% {
        opacity: 0;
        -webkit-transform: translateX(0);
      }
      100% {
        opacity: 1;
        -webkit-transform: translateX(-100%);
      }
    }

</style>
