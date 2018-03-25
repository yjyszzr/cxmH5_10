<style scoped>
  .center{

    background: #fff;
  }
  .portrait{
    padding: 0.28rem 0.47rem;
  }
  .people{
    float: left;
    margin-right: 0.3rem;
  }
  .people img{
    width: 1.13rem;
    display: block;
  }
  .por-right{
    float: left;
  }
  .certified{
    background: url(../assets/img/certified.png) no-repeat;
    background-size: 100%;
    margin-top: 0.15rem;
    width: 1.32rem;
    height: 0.35rem;
    display: block;
  }
  .por-right span{
    color: #505050;
    font-size: 0.32rem;
    display: -webkit-box;
    margin-top: 0.1rem;
  }
  .por-right p{
    /*width: 4.53rem;*/
    height: 0.37rem;
    line-height: 0.36rem;
    background: #fbddcd url(../assets/img/poser.png) 0.1rem no-repeat;
    color: #E95504;
    font-size: 0.22rem;
    margin-top: 0.1rem;
    background-size: 95%;
    padding: 0 0.4rem;
    border-radius: 0.1rem;
  }
  .money{
    clear: both;
    display: flex;
    margin-top: 0.24rem;
  }
  .money .left{
    text-align: center;
    flex: 1;
    display: grid;
  }
  .money  span{
    font-size: 0.42rem;
    color: #E95504;
  }
  .money .left p{
    font-size: 0.24rem;
    color: #A0A0A0;
    height: 0.5rem;
  }
  .nav{
    display: flex;
    height: 0.88rem;
    line-height: 0.88rem;
    border-top: 1px solid #f1f1f1;
  }
  .nav a{
    flex: 1;
    border-right: 1px solid #f1f1f1;
    display: block;
    font-size: 0.28rem;
    color: #F7931E;
    height: 0.88rem;
    text-align: center;
  }
  .nav a:last-child{
    border-right: none;
  }
</style>
<!--找回密码-->
<template>
  <div class="wrap">
    <div class="header">
      <a href="javascript:history.go(-1);" class="go_return">返回</a>
      <p>彩小秘·我的</p>
    </div>
    <section class="center">
      <div class="portrait clearfix">
        <div class="people">
          <img src="../assets/img/portrait.png">
        </div>
        <div class="por-right">
          <span>189****9000</span>
          <b class="certified"></b>
          <!--<p>您还未实名认证，尽快实名认证</p>-->
        </div>
      </div>
        <div class="money clearfix">
          <div class="left">
            <span>100.00元</span>
            <p>账户余额</p>
          </div>
          <div class="left">
            <span>100.00元</span>
            <p>账户余额</p>
          </div>
        </div>
      <div class="nav">
        <a>充值</a>
        <a>提现</a>
      </div>
    </section>
    <section class="section">
      <ul class="msg_list">
        <li>
          <a href="javascript:void(0);">
            <div>
              <img src="../assets/img/pho_nor.png">
              <span class="arrow_right float_right"></span>
              <span class="message">投注记录</span>
            </div>
          </a>
          <a href="javascript:void(0);">
            <div>
              <img src="../assets/img/pho_nor.png">
              <span class="arrow_right float_right"></span>
              <span class="message">账户明细</span>
            </div>
          </a>
          <a href="javascript:void(0);">
            <div>
              <img src="../assets/img/pho_nor.png">
              <span class="arrow_right float_right"></span>
              <span class="message">我的卡卷<em></em></span>
            </div>
          </a>

        </li>
      </ul>
    </section>
    <section class="section">
      <ul class="msg_list">
        <li>
          <a href="javascript:void(0);">
            <div>
              <img src="../assets/img/pho_nor.png">
              <span class="arrow_right float_right"></span>
              <span class="message">帮助中心</span>
            </div>
          </a>
          <a href="javascript:void(0);">
            <div>
              <img src="../assets/img/pho_nor.png">
              <span class="arrow_kefu float_right">400-123-1234</span>
              <span class="message">联系客服</span>
            </div>
          </a>
          <a href="javascript:void(0);">
            <div>
              <img src="../assets/img/pho_nor.png">
              <span class="arrow_right float_right"></span>
              <span class="message">关于我们</span>
            </div>
          </a>
        </li>
      </ul>
    </section>
    <section class="button">
      <a class="determine">退出登录</a>
    </section>
  </div>
</template>
<script>
  import http from '../api/http'
  export default {
    name: 'index',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    created:function () {}
  }
</script>
