<style lang='scss' scoped src='./style.scss'>

</style>

<template>
    <!-- <h2>活动首页</h2> -->
    <div class="twoActive">
        <div class="box1">
            <p>推广总收入（元）</p>
            <p>9880.00<i>元</i></p>
            <p>今日+256.00</p>
        </div>
        <ul class="list">
            <router-link to="/activity/income"><img src="../tuiguang/img.png">收入明细</router-link>
            <router-link to="/activity/mycode"><img src="../tuiguang/img2.png">我的二维码</router-link>
        </ul>
        <div class="statistics">
            <p><i></i>推广数据统计</p>
            <ul>
                <li><span>19,873名</span>邀请用户数量</li>
                <li><span>2,76,778,50元</span>邀请用户的投注金额</li>
                <li><span>第9名</span>我的收入排名</li>
            </ul>
        </div>
        <div class="ranking">
            <p><img src="../tuiguang/img1.png">收入排行榜</p>
            <ul class="box_ul1">
                <li>名次</li>
                <li>推广员</li>
                <li>额外奖励<i @click="go_tost()">?</i></li>
                <li>总收入（元）</li>
            </ul>
            <ul class="box_ul2">
                <li class="listed">1</li>
                <li class="listed">138****9999</li>
                <li class="listed">100元</li>
                <li class="listed">333.00</li>
            </ul>
        </div>
    </div>
</template>
<script src='./script.js'>

</script>
