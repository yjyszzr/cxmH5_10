<style lang='scss' scoped src='./style.scss'>

</style>


<!--密码登录-->
<template>
  <div class="wrap">
    <ul class="section msg_list">
      <li>
        <a href="javascript:void(0);">
          <div>
            <img src="../../../assets/img/pho_nor.png">
            <input type="tel" v-model="phoneVal" class="text" placeholder="请输入手机号"/>
            <em><img class="img" src="../../../assets/img/sut.png"></em>
          </div>

        </a>
        <a href="javascript:void(0);">
          <div>
            <img src="../../../assets/img/sec_nor.png">
            <input type="password" v-model="passwordVal" class="text" placeholder="请输入密码"/>
            <em><img src="../../../assets/img/hid.png"></em>
          </div>
        </a>
      </li>
    </ul>
    <section class="button">
      <a class="determine" @click="_login">登录</a>
      <router-link to='/user/register' class="mine">新用户注册</router-link>
    </section>
    <section class="forget">
      <router-link to='/user/sms' class="x_in">短信验证码登录</router-link>
      <router-link to='/user/find' class="x_sel">忘记密码？</router-link>

    </section>
    <div class="prompt"></div>
  </div>
</template>

<script src='./script.js'>
  // import http from '../api/http'
  
</script>

