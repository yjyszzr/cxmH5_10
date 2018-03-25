<style scoped>
  .header{
    height: 1.8rem;
  }
  .msg_list li>a>div em .img{
    float: left;
    width: 0.3rem;
    padding-top: 0.35rem;
    margin-right: 0.15rem;
    display: none;
  }
  .head{
    font-size: 0.26rem;
    color: #F7931E;
    background: #f4f4f4;
    position: absolute;
    top: 8.9%;
    width: 100%;
    text-align: center;
  }
  .current{
    font-size: 0.3rem;
    color: #505050;
    height: 0.8rem;
    padding: 0.3rem;
  }
  .amount{
    /*width: 100%;*/
    padding: 0.3rem;
  }
  .amount p{
    color: #505050;
    font-size: 0.45rem;
  }
  .amount .money{
    padding: 0.2rem;
    border: 1px solid #f1f1f1;
    border-radius: 0.1rem;
    font-size: 0.26rem;
    margin-top: 0.25rem;
    display: block;
    width: 94%;
    color: #e95504;
    }
  .amount ul{
    display: block;
    margin-top: 0.25rem;
  }
  .amount ul li{
    float: left;
    width: 14%;
    border: 1px solid #f1f1f1;
    font-size:0.26rem;
    color: #505050;
    padding: 0.2rem;
    text-align: center;
    border-radius: 0.1rem;
    margin-right: 0.41rem;
  }
  .amount ul li:last-child{
    margin-right: 0;
  }
  .wechat{
    padding:0 0.2rem;
  }
  .wechat p{
    color: #505050;
    padding-left: 0.2rem;
    height: 1rem;
    display: block;
    border-bottom: 1px solid #f1f1f1;
    font-size: 0.3rem;
    line-height: 1rem;
  }
  .msg_list li>a {
    display: block;
    position: relative;
    margin-left: 0.2rem;
    height: 0.87rem;
  }
</style>
<!--找回密码-->
<template>
  <div class="wrap">
    <div class="header">
      <a href="javascript:history.go(-1);" class="go_return">返回</a>
      <p>彩小秘·充值</p>
    </div>
    <span class="head">小秘提示：充值金额可购彩但不能提现，中奖金额可提现</span>
    <div class="section current clearfix">
      <p>当前账号：18910****4060 <br/>当前余额：100000.00元</p>
    </div>
    <section class="section amount">
      <p>充值金额</p>
      <input type="text" class="money" placeholder="确认后不可修改"/>
      <ul class="clearfix">
        <li>20</li>
        <li>50</li>
        <li>100</li>
        <li>200</li>
      </ul>
    </section>
    <section class="section wechat ">
      <p>微信支付</p>
      <ul class="msg_list">
        <li>
          <a href="javascript:void(0);">
            <div>
              <img src="../assets/img/wei.png">
              <span class="arrow_kefu float_right"><img src="../assets/img/cue.png"></span>
              <span class="message">投注记录</span>
            </div>
          </a>
        </li>
      </ul>
    </section>
    <section class="button">
      <a class="determine">立即支付</a>
    </section>
    <div class="prompt"></div>
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

