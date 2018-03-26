<style scoped lang="scss">
  @import '../assets/css/function.scss';
  .header{
    position: relative;
    height: px2rem(100px);
    line-height: px2rem(100px);
    background-color: #fff;
  }
  .banner{
    width: 100%;
    display: block;
  }
  .banner img{
    width: 100%;
    display: block;
  }
  .mation{
    /*height: 0.61rem;*/
    background: #fff;
    display: table-cell;
    line-height: px2rem(61px);
    padding-left: px2rem(30px);
    display: block;
  }
  .mation img{
    vertical-align: middle;
    width: px2rem(30px);
    margin-right: px2rem(15px);
    display: inline-block;
  }
  .mation p{
    font-size: px2rem(28px);
    color: #A0A0A0;
  }
  .mation p span{
    color: #505050;
  }
  .center{
    width: 100%;
    background: #fff;
  }
  .center ul{
    padding-bottom:px2rem(28px) ;
    overflow: hidden;
  }
  .center ul li{
    width: 25%;
    text-align: center;
    font-size: px2rem(30px);
    margin-top: px2rem(32px);
    float: left;
  }
  .center ul li img{
    width: px2rem(93px);
    margin: 0 auto;
  }
  .center ul li p{
    margin-top: px2rem(18px);
    font-size: px2rem(30px);
    color: #505050;
  }
  .boll{
    height: px2rem(80px);
    font-size: px2rem(30px);
    line-height: px2rem(80px);
    margin-left: px2rem(30px);
    border-bottom: 1px solid #f1f1f1;
  }

</style>
<!--首页-->
<template>
  <div class="wrap">
    <div class="banner">
      <img src="../assets/img/banner.jpg">
    </div>
    <div class="section mation">
      <p><img src="../assets/img/not.png">恭喜【138…672】投注竟足中奖<span>1888888.88</span>元</p>
    </div>
    <div class="section banner">
      <img src="../assets/img/img.jpg">
    </div>
    <div class="section center">
      <p class="boll">竞彩足球</p>
      <ul>
        <li>
          <img src="../assets/img/img1.png">
          <p>胜平负</p>
        </li>
        <li>
          <img src="../assets/img/img1.png">
          <p>胜平负</p>
        </li>
        <li>
          <img src="../assets/img/img1.png">
          <p>胜平负</p>
        </li>
        <li>
          <img src="../assets/img/img1.png">
          <p>胜平负</p>
        </li>
        <li>
        <img src="../assets/img/img1.png">
        <p>胜平负</p>
      </li>
        <li>
          <img src="../assets/img/img1.png">
          <p>省省</p>
        </li>
        <li>
          <img src="../assets/img/img1.png">
          <p>胜平负</p>
        </li>
        <li>
          <img src="../assets/img/img1.png">
          <p>省省</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  // import http from '../api/http'
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

