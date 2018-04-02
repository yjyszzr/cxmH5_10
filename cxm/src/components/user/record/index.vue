<style lang='scss' scoped src='./style.scss'>

</style>

<!--购彩记录-->
<template>
    <div class="wrap">
        <section>
            <ul class="send" :class="searchBarFixed?'isFixed':''">
                <li class="cur"><p @click='curClick($event)'>全部</p></li>
                <li><p @click='curClick($event)'>中奖</p></li>
                <li><p @click='curClick($event)'>待开奖</p></li>
            </ul>
            <div class="zwf" v-show="searchBarFixed"></div>
            <mt-loadmore :bottom-method="loadBottom" :bottom-distance='-20' :auto-fill="false" :bottom-all-loaded="allLoaded" ref="loadmore" @bottom-status-change="handleTopChange" @scroll='handleScroll($event)'>
                <div class="section cont" v-for="(item,i) in recordList" :key='i'>
                    <a @click="goDetail(item.orderId)">
                        <p class="picker_p1">{{item.lotteryName}}<span>{{status(item.orderStatus)}}&gt;</span></p>
                        <p class="picker_p2">¥ {{item.moneyPaid}}</p>
                        <p class="picker_p3">{{item.payTime}}<span>{{item.orderStatusInfo}}</span></p>
                    </a>
                </div>
                <div class="nullstatus" v-if="recordList.length==0">
                        <img src="../../../assets/img/juan.png" alt="">
                        <span>暂无投注记录</span>
                </div>
                <div slot="bottom" class="mint-loadmore-bottom">
					    <span v-show="bottomStatus !== 'loading'" :class="{ 'rotate': bottomStatus === 'drop' }">↓</span>
					    <mt-spinner :type="1" v-show="bottomStatus === 'loading'" color="#e82822"></mt-spinner>
				</div>
			</mt-loadmore>
        </section>
    </div>
</template>
<script src='./script.js'>
// import http from '../api/http'
</script>
