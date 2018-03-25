<style scoped>
  .msg_list li>a>div em .img{
    float: left;
    width: 0.3rem;
    padding-top: 0.35rem;
    margin-right: 0.15rem;
    display: none;
  }
</style>
<!--找回密码-->
<template>
  <div class="wrap">
    <div class="header">
      <a href="javascript:history.go(-1);" class="go_return">返回</a>
      <p>彩小秘·找回密码</p>
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
      </li>
    </ul>
    <section class="button">
      <a class="determine">下一步</a>
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

