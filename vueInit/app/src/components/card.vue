<style scoped>
  .give{
    padding: 0.3rem;
    margin-top: 0;
    background: #fff;
  }
  .card{
    background: #cc4050;
    border-radius: 0.1rem;
    color: #fff;
    padding: 0.24rem;
  }
  .china_bank .img{
    width: 0.53rem;
    float: left;
    margin-right: 0.2rem;
  }
  .china_bank p{
    font-size: 0.28rem;
    float: left;
    line-height: 0.3rem;
  }
  .china_bank .img1{
    float: right;
    width: 0.3rem;
  }
  .china_bank_card{
    font-size: 0.36rem;
    text-align: center;
    margin-top: 0.3rem;
  }
  .china_bank_default{
    font-size: 0.24rem;
    margin-top: 0.3rem;
  }
  .china_bank_default img{
    width: 0.3rem;
    float: left;
    margin-right: 0.2rem;
  }
  .msg_list li>a {
    margin-left: 0;
  }
</style>
<!--找回密码-->
<template>
  <div class="wrap">
    <div class="header">
      <a href="javascript:history.go(-1);" class="go_return">返回</a>
      <p>彩小秘·管理银行卡</p>
    </div>
    <section class="give">
      <div class="card clearfix">
        <div class="china_bank clearfix">
          <img class="img" src="../assets/img/img1.png">
          <p>中国银行<br/><span>储蓄卡</span></p>
          <img class="img1" src="../assets/img/sut.png">
        </div>
        <div class="china_bank_card">6224&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;&nbsp;5643</div>
        <div class="china_bank_default"><img src="../assets/img/cue.png">默认收款卡</div>
      </div>
    </section>
    <section class="section">
      <ul class="msg_list">
        <li>
          <a href="javascript:void(0);">
            <div>
              <img src="../assets/img/pho_nor.png">
              <span class="arrow_right float_right"></span>
              <span class="message">添加银行卡</span>
            </div>
          </a>
        </li>
      </ul>
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

