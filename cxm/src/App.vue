<template>
  <div id="app">
    <v-header :title='title()' v-show='isShowHeader'></v-header>
    <div class="content">
        <transition name="slide-left">
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
          }
      }else{
        this.isShowHeader=false
          // switch (this.$route.path.split('/')[1]) {
          //   case '':
          //     return "首页"
          // }
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
      .slide-left-enter-active {
        animation: slideLeft .3s;
      }
    }

    @keyframes slideLeft {
      from {
        transform: translate3d(100%, 0, 0);
        visibility: visible;
      }

      to {
        transform: translate3d(0, 0, 0);
      }
    }
</style>
