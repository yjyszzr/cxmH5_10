<template>
    <div class="run-chart">
        <!--头部开始-->
        <div class="head">
            <span class="back-img" @click="goBack()"><img src="../../../assets/img/ret.png" alt=""></span>
            <div class="head-text">
                <span>彩小秘·走势图</span>
            </div>
            <div>
                <span class="memu-btn" @click="popShow = !popShow"><img src="../images/TrendSetting@3x.png" alt=""></span>
            </div>
        </div>
        <ul class="runc-title">
            <li :class="{active: i+1==daletouActive}" v-for="(item,i) in runchartTab" :key='i'>
                <span>{{item}}</span>
            </li>
        </ul>
        <section class="runc-box">
            <div class="box-head">
                <p>期号</p>
                <p>开奖号码</p>
            </div>
            <ul class="box-content">
                <li>
                    <p>2018080期</p>
                    <p>
                        <span>09</span>
                        <span>11</span>
                        <span>11</span>
                        <span>11</span>
                        <span>11</span>
                        <span>11</span>
                        <span>11</span>
                    </p>
                </li>
            </ul>
        </section>
        <footer class="runc-foot">
            <div class="kj-foot">
                第18092期&nbsp;&nbsp;&nbsp;截止时间 07-11 19:00
            </div>
        </footer>
    </div>
</template>
<style lang='scss' src='./style.scss'>

</style>
<script src='./script.js'>

</script>

