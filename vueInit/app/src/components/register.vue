<style scoped>
  .msg_list li>a>div em .img{
    float: left;
    width: 0.3rem;
    padding-top: 0.35rem;
    margin-right: 0.15rem;
    display: none;
  }
</style>
<!--注册-->
<template>
  <div class="wrap">
    <div class="header">
      <a href="javascript:history.go(-1);" class="go_return">返回</a>
      <p>彩小秘·注册</p>
    </div>
      <ul class="msg_list">
       <li>
         <a href="javascript:void(0);">
           <div>
             <img src="../assets/img/pho_nor.png">
             <input type="text" class="text"/>
             <em><img class="img" src="../assets/img/sut.png"></em>
           </div>

         </a>
         <a href="javascript:void(0);">
           <div>
             <img src="../assets/img/sec_nor.png">
             <input type="text" class="text"/>
             <em><img src="../assets/img/hid.png"></em>
           </div>
         </a>
         <a href="javascript:void(0);">
           <div>
             <img src="../assets/img/tes_nor.png">
             <input type="text" class="text1"/>
             <a>获取短信验证码</a>
           </div>
         </a>
       </li>
      </ul>
    <section class="button">
      <a class="determine">注册</a>
    </section>
    <p class="ment">注册表明您已同意<span>《彩小秘彩票服务协议》</span></p>
    <div class="prompt">请您输入合法的手机号</div>
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

