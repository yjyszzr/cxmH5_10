<style scoped>
  .msg_list li>a>div em .img{
    float: left;
    width: 0.3rem;
    padding-top: 0.35rem;
    margin-right: 0.15rem;
    display: none;
  }

</style>
<!--密码登录-->
<template>
  <div class="wrap">
    <div class="header">
      <a href="javascript:history.go(-1);" class="go_return">返回</a>
      <p>彩小秘·注册</p>
      <a class="right_btn">登录</a>
    </div>
    <ul class="section msg_list">
      <li>
        <a href="javascript:void(0);">
          <div>
            <img src="../assets/img/pho_nor.png">
            <input type="text" class="text" placeholder="请输入手机号"/>
            <em><img class="img" src="../assets/img/sut.png"></em>
          </div>

        </a>
        <a href="javascript:void(0);">
          <div>
            <img src="../assets/img/sec_nor.png">
            <input type="text" class="text" placeholder="请输入密码"/>
            <em><img src="../assets/img/hid.png"></em>
          </div>
        </a>
      </li>
    </ul>
    <section class="button">
      <a class="determine">登录</a>
      <a class="mine">新用户注册</a>
    </section>
    <section class="forget">
      <a class="x_in">短信验证码登录</a>
      <a class="x_sel">忘记密码？</a>

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

