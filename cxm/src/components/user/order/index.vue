<style lang='scss' scoped src='./style.scss'>

</style>


<!--订单详情-->
<template>
    <div class="wrap">
        <div class="order_center">
            <div class="subnav">
                <div class="box1">
                    <img :src="orderObj.lotteryClassifyImg">
                    <div>
                        <p>{{orderObj.lotteryClassifyName}}<span :style="{'color':orderObj.orderStatus=='5'?'#e95504':'#505050'}">{{orderObj.processResult}}</span></p>
                        <span>￥{{orderObj.moneyPaid}}</span>
                    </div>
                </div>
                <div class="box2">
                    <p>
                        <span style="color: #999;">方案状态</span>
                        <span :style="{'color':orderObj.orderStatus=='2'?'#f7931e':'#505050'}">{{orderObj.orderStatusDesc}}</span>
                    </p>
                    <p>
                        <span v-if="orderObj.orderStatus=='5'">中奖金额</span>
                        <span>{{orderObj.processStatusDesc}}</span>
                    </p>
                </div>
            </div>
            <div class="section table">
                <h5>方案内容</h5>
                <ul class="list">
                    <div class="title">
                        <p>场次</p>
                        <p>赛事</p>
                        <p>玩法</p>
                        <p>投注</p>
                        <p>赛果</p>
                    </div>
                    <li v-for='(item,i) in orderObj.matchInfos' :key='i'>
                        <div class="item">{{item.changci}}</div>
                        <div class="item">{{item.match}}</div>
                        <div class="item">{{item.playType}}</div>
                        <div class="item"><span>{{item.cathectic}}</span><span><img src="../../../assets/img/cue.png" v-if="item.matchResult=='0'"><img src="../../../assets/img/accont_img/guess@2x.png" v-if="item.matchResult=='1'"></span></div>
                        <div class="item">{{item.result}}</div>
                    </li>
                </ul>
                <div class="menu">
                    <p>过关方式：<span>{{orderObj.passType}}</span></p>
                    <p>投注倍数：<span>{{orderObj.cathectic}}</span></p>
                </div>
            </div>
        </div>
        <div class=" section plan">
            <div class="solecd" >方案内容<span @click='goDraw(orderObj.programmeSn)'>查看出票方案></span></div>
            <div>
                <p>方案编号： <span>{{orderObj.programmeSn}}</span></p>
                <p>创建时间：<span>{{orderObj.createTime}}</span></p>
                <p>店主接单：<span>{{orderObj.acceptTime}}</span></p>
                <p>店主出票：<span>{{orderObj.ticketTime}}</span></p>
            </div>
        </div>
    </div>
</template>

<script src='./script.js'>
    // import http from '../api/http'

</script>

