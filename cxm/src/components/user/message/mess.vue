<style lang='scss' scoped src='./style.scss'>

</style>


<!--消息中心-->
<template>
    <div class="wrap">
        <ul class="send isFixed" v-if="searchBarFixed==true">
            <li class="cur"><p @click='curClick($event)'>通知</p></li>
            <li><p @click='curClick($event)'>消息</p></li>
        </ul>
        <ul class="send">
            <li class="cur"><p @click='curClick($event)'>通知</p></li>
            <li><p @click='curClick($event)'>消息</p></li>
        </ul>
        <mt-loadmore :bottom-method="loadBottom" :auto-fill="false" :bottom-all-loaded="allLoaded" ref="loadmore" @bottom-status-change="handleTopChange" @scroll='handleScroll($event)'>
                <section class="box_cen" v-for="(item,i) in mess" :key='i'>
                        <div class="box1">
                            <h5>{{item.title}}</h5>
                            <span>{{item.sendTime}}</span>
                        </div>
                        <!--<div class="box2">-->
                        <!--<p>中奖3000.00元</p>-->
                        <!--<span>奖金已打入您的可用余额</span>-->
                        <!--</div>-->
                        <!--<div class="box4">-->
                        <!--<p>中奖3000.00元</p>-->
                        <!--<span>奖金已打入您的可用余额</span>-->
                        <!--</div>-->
                        <div class="box5">
                            <p>{{item.content}}</p>
                        </div>
                        <div class="box3">
                            <!-- <p>彩种：<span>竞彩足球 </span></p>
                            <p>投注金额：<span>50.00元</span> </p>
                            <p>投注时间：<span>2018年02月03日</span></p> -->
                            <p v-html="item.msgDesc"></p>
                        </div>
                        <a class="rout">查看详情></a>

                </section>
                <div slot="bottom" class="mint-loadmore-bottom">
					<span v-show="bottomStatus !== 'loading'" :class="{ 'rotate': bottomStatus === 'drop' }">↓</span>
					<mt-spinner :type="1" v-show="bottomStatus === 'loading'" color="#e82822"></mt-spinner>
				</div>
		</mt-loadmore>
        <div class="nullstatus" v-if="mess.length==0">
                <img src="../../../assets/img/juan.png" alt="">
                <span>暂无消息</span>
        </div>
    </div>
</template>

<script src='./script.js'>
// import http from '../api/http'
</script>

