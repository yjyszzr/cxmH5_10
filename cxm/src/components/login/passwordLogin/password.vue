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
            <mt-field type='tel' placeholder="请输入手机号" v-model="phoneVal"></mt-field>
            <em><img class="img" src="../../../assets/img/sut.png"></em>
          </div>

        </a>
        <a href="javascript:void(0);">
          <div>
            <img src="../../../assets/img/sec_nor.png">
            <input v-model="passwordVal" placeholder="请输入密码" type="password" class="text" v-show="eyehide==false"/>
            <input v-model="passwordVal" placeholder="请输入密码" type="text" class="text" v-show="eyehide==true"/>
            <em @click="eyehide==false?eyehide = true:eyehide = false"><img src="../../../assets/img/hid.png" v-show="eyehide==false"><img src="../../../assets/img/show.png" v-show="eyehide==true"/></em>
          </div>
        </a>
      </li>
    </ul>
    <section class="button">
      <a class="determine" @click="_login">登录</a>
    </section>
    <section class="buttonZc">
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

