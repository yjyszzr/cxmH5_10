<template>
  <div id="app">
    <v-header :title='title()' v-show='isShowHeader'></v-header>
    <div class="content">
        <transition  mode="out-in" enter-active-class='bounce-enter' leave-active-class="bounce-leave">
            <router-view></router-view>
        </transition>  
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
import header from './components/header/header'
import footer from './components/footer/footer'
export default {
  name: 'App',
  components: {
    'v-header': header,
    'v-footer': footer
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
              return '账户明细'
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
          }
      }else{
          if(this.$route.path.split('/')[1]=='user'){
            this.isShowHeader=true
          }else{
            this.isShowHeader=false
          }
          //this.isShowHeader=false
          switch (this.$route.path.split('/')[1]) {
            case 'user':
              return "个人中心"
          }
      }
    },
  }
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
    
    a.active {
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
        // padding-top: px2rem(100px);
        // background: #F5F5F5;
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

      //左滑动效
      // .slide-left-enter-active {
      //   animation: slideLeft .3s;
      // }
      // .slide-left-leave-active {
      //   animation: slideRight .3s;
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

    // @keyframes slideLeft {
    //   from {
    //     transform: translate3d(100%, 0, 0);
    //     visibility: visible;
    //   }

    //   to {
    //     transform: translate3d(0, 0, 0);
    //   }
    // }

    // @keyframes slideRight {
    //   from {
    //     transform: translate3d(0, 0, 0);
    //     visibility: hidden;
    //   }

    //   to {
    //     transform: translate3d(-100%, 0, 0);
    //     visibility: visible;
    //   }
    // }

</style>
