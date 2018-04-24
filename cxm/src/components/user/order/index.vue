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
                        <p>
                            <span>￥{{orderObj.moneyPaid}}</span>
                            <span>{{orderObj.forecastMoney}}</span>
                        </p>
                        
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
                        <div class="item"><span>{{item.match.split('VS')[0]}}</span><span>VS</span><span>{{item.match.split('VS')[1]}}</span></div>
                        <div class="item">{{item.playType}}</div>
                        <div class="item">
                            <p v-for='(data,index) in item.cathecticResults' :key='index'>
                                <span v-for='(data1,index1) in data.cathectics' :key='index1' :style='{"color":data1.isGuess=="1"?"#de3434":"#333"}'>{{data1.cathectic}}</span>
                            </p>
                        </div>
                        <div class="item">
                            <span v-for='(data,index) in item.cathecticResults' :key='index' v-if='item.cathecticResults==""'>{{data.matchResult}}</span>
                            <span v-if='item.cathecticResults!=""'>待定</span>
                        </div>
                    </li>
                </ul>
                <div class="menu">
                    <p>过关方式：<span>{{orderObj.passType}}</span></p>
                    <p>投注倍数：<span>{{orderObj.cathectic}}</span></p>
                </div>
            </div>
        </div>
        <div class=" section plan">
            <div class="solecd" >方案内容<span @click='goDraw(orderObj.programmeSn)'>查看出票方案<i class="iconfont icon-icon-14"></i></span></div>
            <div>
                <p>方案编号： <span>{{orderObj.programmeSn}}</span></p>
                <p>创建时间：<span>{{orderObj.createTime}}</span></p>
                <p>店主接单：<span>{{orderObj.acceptTime}}</span></p>
                <p>店主出票：<span>{{orderObj.ticketTime}}</span></p>
            </div>
        </div>
        <button class="jxtz" @click="jxtz()">
            继续投注
        </button>
    </div>
</template>

<script src='./script.js'>
    // import http from '../api/http'

</script>

