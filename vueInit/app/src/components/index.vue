<style scoped rel="stylesheet/less" type="text/less" lang="less">
  .header{
    position: relative;
    height: 1rem;
    line-height: 1rem;
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
    background: #fff;
    display: table-cell;
    line-height: 0.61rem;
    padding-left: 0.3rem;
    display: block;
  }
  .mation img{
    vertical-align: middle;
    width: 0.3rem;
    margin-right: 0.15rem;
    display: inline-block;
  }
  .mation p{
    font-size: 0.28rem;
    color: #A0A0A0;
  }
  .mation p span{
    color: #505050;
  }
  .center{
    width: 100%;
    background: #fff;
  }
  .center ul li{
    width: 22%;
    text-align: center;
    font-size: 0.3rem;
    margin-top: 0.32rem;
  }
  .center ul li img{
    width: 0.93rem;
    margin: 0 auto;
  }
  .center ul li p{
    margin-top: 0.18rem;
    font-size: 0.3rem;
    color: #505050;
  }
  .boll{
    height: 0.8rem;
    font-size: 0.3rem;
    line-height: 0.8rem;
    margin-left: 0.3rem;
    border-bottom: 1px solid #f1f1f1;
  }
  .foot{
    height: 0.98rem;
    background: #fff;
  }
  .foot ul li{
    width: 33%;
    float: left;
    text-align: center;
    padding-top: 0.1rem;
  }
  .foot ul li img{
    width: 0.46rem;
    text-align: center;
    margin: 0 auto;
  }
  .foot ul li p{
    color: #A0A0A0;
    font-size: 0.2rem;
    margin-top: 0.1rem;
  }
</style>
<!--首页-->
<template>
  <div class="wrap">
    <div class="header">
      <a href="javascript:history.go(-1);" class="go_return"></a>
      <p>彩小秘·购彩大厅</p>
    </div>
    <div class="banner">
      <swiper :options="swiperOption" ref="mySwiperA">
        <swiper-slide>
          <img src="../../src/assets/img/banner.jpg">
        </swiper-slide>
        <swiper-slide>
          <img src="../../src/assets/img/banner.jpg">
        </swiper-slide>
        <swiper-slide>
          <img src="../../src/assets/img/banner.jpg">
        </swiper-slide>
        <swiper-slide>
          <img src="../../src/assets/img/banner.jpg">
        </swiper-slide>

        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
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
    <div class="section foot">
      <ul>
        <li>
          <img src="../assets/img/dating.png">
          <p>大厅</p>
        </li>
        <li>
          <img src="../assets/img/dating.png">
          <p>开奖</p>
        </li>
        <li>
          <img src="../assets/img/dating.png">
          <p>大厅</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import units from '../tools/units'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import 'swiper/dist/css/swiper.css'
  // import swiperer from 'swiper.js'
  // import 'swiper/vue.min.js'
  // import 'swiper/dist/vue-awesome-swiper.js'
  export default{
    name: 'index',
    data () {
      return {
        host: units.getHost(),
        swiperOption: {
          autoplay: 5000,
          loop: true,
          pagination: '.swiper-pagination',
          onSlideChangeEnd: swiper => {}
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiperA.swiper
      }
    },
    components: {
      swiper,
      swiperSlide
    },
  }
</script>

