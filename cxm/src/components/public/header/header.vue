<template>
    <div class="header">
        <div class="headerTop">
            <a @click="return_back()" class="go_return"></a>
            <p>彩小秘·{{title}}</p>
            <p class="filter" v-show="menuDisplay">
                <span @click='filter()'>筛选</span>
                <span>帮助</span>
            </p>
        </div>
        <ul class="send" v-if="$route.path.split('/')[2]&&$route.path.split('/')[2]=='record'">
            <li class="cur"><p @click='curClick($event)'>全部</p></li>
            <li><p @click='curClick($event)'>中奖</p></li>
            <li><p @click='curClick($event)'>待开奖</p></li>
        </ul>
        <ul class="sendaccount" id='searchBar' v-if="$route.path.split('/')[2]&&$route.path.split('/')[2]=='account'">
            <li class="cur"><p @click='curClick1($event)'>全部</p></li>
            <li><p @click='curClick1($event)'>奖金</p></li>
            <li><p @click='curClick1($event)'>充值</p></li>
            <li><p @click='curClick1($event)'>购彩</p></li>
            <li><p @click='curClick1($event)'>提现</p></li>
            <li><p @click='curClick1($event)'>红包</p></li>
        </ul>
        <ul class="senddetail" id='searchBar' v-if="$route.path.split('/')[2]&&$route.path.split('/')[2]=='detail'">
            <li class="cur"><p @click='curClick2($event)'>未使用</p></li>
            <li><p @click='curClick2($event)'>已使用</p></li>
            <li><p @click='curClick2($event)'>已过期</p></li>
        </ul>
        <ul class="send" id='searchBar' v-if="$route.path.split('/')[2]&&$route.path.split('/')[2]=='message'">
            <li class="cur"><p @click='curClick3($event)'>通知</p></li>
            <li><p @click='curClick3($event)'>消息</p></li>
        </ul>
    </div>
</template>

<script>
export default {
  name: "header",
  props: {
    title: String,
    menuDisplay: Boolean
  },
  data() {
    return {};
  },
  methods: {
    return_back() {
      if (this.$route.path.split("/")[2]) {
        if (this.$route.path.split("/")[2] == "singleNote") {
          this.$store.state.matchSelectedList = [];
        }
      }
      this.$router.go(-1);
    },
    filter() {
      this.$store.state.mark_show = true;
      this.$store.state.mark_showObj.mark_show_type = '2'
    },
    curClick(c){
        $('.cur').removeClass('cur')
        c.target.parentElement.className = 'cur'
        if(c.target.innerText=='全部'){
          this.$store.state.recordTab = '1'
        }else if(c.target.innerText=='中奖'){
          this.$store.state.recordTab = '2'
        }else if(c.target.innerText=='待开奖'){
          this.$store.state.recordTab = '3'
        }
    },
    curClick1(c){
        $('.cur').removeClass('cur')
        c.target.parentElement.className = 'cur'
        if(c.target.innerText=='全部'){
          this.$store.state.recordTab = 'a1'
        }else if(c.target.innerText=='奖金'){
          this.$store.state.recordTab = 'a2'
        }else if(c.target.innerText=='充值'){
          this.$store.state.recordTab = 'a3'
        }else if(c.target.innerText=='购彩'){
          this.$store.state.recordTab = 'a4'
        }else if(c.target.innerText=='提现'){
          this.$store.state.recordTab = 'a5'
        }else if(c.target.innerText=='红包'){
          this.$store.state.recordTab = 'a6'
        }
      },
      curClick2(c){
        $('.cur').removeClass('cur')
        c.target.parentElement.className = 'cur'
        if(c.target.innerText=='未使用'){
          this.$store.state.recordTab = 'd1'
        }else if(c.target.innerText=='已使用'){
          this.$store.state.recordTab = 'd2'
        }else if(c.target.innerText=='已过期'){
          this.$store.state.recordTab = 'd3'
        }
      },
      curClick3(c) {
            $('.cur').removeClass('cur')
            c.target.parentElement.className = 'cur'
            if (c.target.innerText == '通知') {
                this.$store.state.recordTab = 'm1'
            } else if (c.target.innerText == '消息') {
                this.$store.state.recordTab = 'm2'
            }
    },
  }
};
</script>


<style lang='scss'>
@import "../../../assets/css/function.scss";
.header {
  width: 100%;
  .filter {
    position: absolute;
    top: 0;
    right: 0;
    margin: 0;
    display: flex;
    padding-right: px2rem(29px);
    span {
      display: block;
      height: 100%;
      padding: 0 px2rem(5px);
    }
  }
  .send,.sendaccount,.senddetail {
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
    .cur p {
      color: #e95504;
      width: 50%;
      border-bottom: 2px solid #e95504;
      display: block;
    }
    li:last-child {
      border-right: none;
    }
  }
}
</style>

