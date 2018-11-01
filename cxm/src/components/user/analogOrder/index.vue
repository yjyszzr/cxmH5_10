<style lang='scss' scoped src='./style.scss'>

</style>


<!--订单详情-->
<template>
    <div class="wrap order">
        <div class="order-news">
            <h5>方案信息</h5>
            <div class="ddbh">
                <p>
                    <span>预测订单编号:</span>
                    <span style="color:#ea5504;" id='copyText'>{{orderObj.programmeSn}}</span>
                </p>
                <p class="copy" @click="copy()">
                    复制
                </p>
            </div>
            <div class="ddcj">
                <span>订单创建时间:</span>
                <span>{{orderObj.createTime}}</span>
            </div>
        </div>
        <div class="j_onshed">
            <div class="order_center">
                <div class="section table">
                    <h5>方案内容</h5>
                    <ul class="list" v-if="orderObj.lotteryPlayClassifyId!='8'">
                        <div class="title">
                            <p>场次</p>
                            <p>赛事</p>
                            <p>玩法</p>
                            <p>投注</p>
                            <p>赛果</p>
                        </div>
                        <li v-for='(item,i) in orderObj.matchInfos' :key='i'>

                            <div class="item" v-html='item.changci.slice(0,2)+"<br />"+item.changci.slice(2)'></div>
                            <div class="item"><span>{{item.match.split('VS')[0]}}</span><span>VS</span><span>{{item.match.split('VS')[1]}}</span></div>
                            <div class="item">
                                <p v-for='(data,index) in item.cathecticResults' :key='index'>
                                    {{data.playType}}
                                </p>
                            </div>
                            <div class="item">
                                <p v-for='(data,index) in item.cathecticResults' :key='index'>
                                    <span v-for='(data1,index1) in data.cathectics' :key='index1' :style='{"color":data1.isGuess=="1"?"#ea5504":"#505050"}'>{{data1.cathectic}}</span>
                                </p>
                            </div>
                            <div class="item">
                                <span v-for='(data,index) in item.cathecticResults' :key='index'>{{data.matchResult}}</span>
                            </div>
                            <div v-bind:class="{'dan':item.isDan == 1,'kong':item.isDan == 0}">胆</div>
                        </li>
                    </ul>
                    <ul class="list" v-if="orderObj.lotteryPlayClassifyId=='8'">
                        <div class="w_title">
                            <p>猜冠军球队</p>
                            <p>赔率</p>
                            <p>赛果</p>
                        </div>
                        <li v-for='(item,i) in orderObj.matchInfos' :key='i'>
                            <div class="item1"><span>{{item.match}}</span></div>
                            <div class="item1">
                                <p v-for='(data,index) in item.cathecticResults' :key='index'>
                                    <span v-for='(data1,index1) in data.cathectics' :key='index1' :style='{"color":data1.isGuess=="1"?"#ea5504":"#505050"}'>{{data1.cathectic}}</span>
                                </p>
                            </div>
                            <div class="item1">
                                <span v-for='(data,index) in item.cathecticResults' :key='index'>{{data.matchResult}}</span>
                            </div>
                        </li>
                    </ul>
                    <div class="menu">
                        <p v-if="orderObj.passType!=='null'">过关方式：<span>{{orderObj.passType}}</span></p>
                        <p>投注倍数：<span v-if="orderObj.passType==='null'">{{orderObj.betNum}}注{{orderObj.cathectic}}倍</span><span v-else>{{orderObj.cathectic}}倍</span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script src='./script.js'>
    // import http from '../api/http'

</script>

