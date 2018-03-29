<style lang='scss' scoped src='./style.scss'>

</style>


<!--订单详情-->
<template>
    <div class="wrap">
        <div class="order_center">
            <div class="subnav">
                <div class="box1">
                    <img src="../../../assets/img/img1.png">
                    <div>
                        <p>竞彩足球<span>再接再厉</span></p>
                        <span>￥25.00</span>
                    </div>
                </div>
                <div class="box2">
                    <span>方案状态</span>
                    <p>未中奖<span>感谢您助力公益事业</span></p>
                </div>
            </div>
            <div class="section table">
                <h5>方案内容</h5>
                <ul class="list">
                    <div class="title">
                        <p>场次</p>
                        <p>场次</p>
                        <p>场次</p>
                        <p>场次</p>
                        <p>场次</p>
                    </div>
                    <li>
                        <div class="item">周一001</div>
                        <div class="item"><span>巴萨罗那</span><span>VS</span><span>切尔西</span></div>
                        <div class="item">胜平负</div>
                        <div class="item"><span>主胜</span><spna>【1.33】</spna><span><img src="../../../assets/img/cue.png"></span></div>
                        <div class="item">主胜</div>
                    </li>
                </ul>
                <div class="menu">
                    <p>过关方式：<span>2串1&nbsp;&nbsp;3串1</span></p>
                    <p>投注倍数：<span>4注2倍</span></p>
                </div>
            </div>
        </div>
        <div class=" section plan">
            <router-link to="/user/draw" class="solecd" >方案内容<span>查看出票方案></span></router-link>
            <div>
                <p>方案编号： <span>10000010001010adbd</span></p>
                <p>创建时间：<span>2018-03-17  11:34:02 </span></p>
                <p>店主接单：<span>2018-03-17  11:38:02 </span></p>
                <p>店主出票：<span>2018-03-17  11:52:02</span></p>
            </div>
        </div>
    </div>
</template>

<script src='./script.js'>
    // import http from '../api/http'

</script>

