<style scoped>
  .header{
    /*height: 1.8rem;*/
  }
  .msg_list li>a>div em .img{
    float: left;
    width: 0.3rem;
    padding-top: 0.35rem;
    margin-right: 0.15rem;
    display: none;
  }
  .head{
    /*height: 0.8rem;*/
    font-size: 0.26rem;
    color: #A0A0A0;
    background: #f4f4f4;
    position: absolute;
    top: 7%;
    text-align: center;
    width: 100%;

  }
  .msg_list li>a>div .text2 {
    width: 65%;
    float: left;
    border: none;
    height: 0.87rem;
    line-height: 1.09rem;
  }
</style>
<!--找回密码-->
<template>
  <div class="wrap">
      <div class="header">
        <a href="javascript:history.go(-1);" class="go_return">返回</a>
        <p>彩小秘·找回密码</p>
      </div>
      <span class="head">身份信息是领奖和提款的重要依据，请您如实填写</span>
    <ul class="section msg_list">
      <li>
        <a href="javascript:void(0);">
          <div>
            <img src="../assets/img/pho_nor.png">
            <label>真实姓名：</label>
            <input type="text" class="text2" placeholder="确认后不可修改"/>
            <em><img class="img" src="../assets/img/sut.png"></em>
          </div>
        </a>
        <a href="javascript:void(0);">
          <div>
            <img src="../assets/img/pho_nor.png">
            <label>身份证号：</label>
            <input type="text" class="text2" placeholder="确认后不可修改"/>
            <em><img class="img" src="../assets/img/sut.png"></em>
          </div>
        </a>
      </li>
    </ul>
    <section class="button">
      <a class="determine">认证</a>
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

