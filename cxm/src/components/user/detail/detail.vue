<style lang='scss' scoped src='./style.scss'>

</style>

<!--账户明细-->
<template>
    <div class="wrap bonus">
        <ul class="send isFixed" v-if="searchBarFixed==true">
            <li class="cur"><p @click='curClick($event)'>未使用</p></li>
            <li><p @click='curClick($event)'>已使用</p></li>
            <li><p @click='curClick($event)'>已过期</p></li>
        </ul>
        <ul class="send">
            <li class="cur"><p @click='curClick($event)'>未使用</p></li>
            <li><p @click='curClick($event)'>已使用</p></li>
            <li><p @click='curClick($event)'>已过期</p></li>
        </ul>
        <mt-loadmore :bottom-method="loadBottom" :auto-fill="false" :bottom-all-loaded="allLoaded" ref="loadmore" @bottom-status-change="handleTopChange" @scroll='handleScroll($event)'>
                <div class="yh_Item" v-for="(item,i) in yhList" :key='i'>
                        <img src="../../../assets/img/guoqi.png" alt="" v-if="item.bonusStatus==0">
                        <img src="../../../assets/img/yiguoqi.png" alt="" v-if="item.bonusStatus==2">
                        <img src="../../../assets/img/shiyong.png" alt="" v-if="item.bonusStatus==1">
                        <div class="yh_ItemTop">
                            <p>
                                <span>¥</span><span>{{item.bonusPrice}}</span>
                            </p>
                            <p>
                                <span>{{item.minGoodsAmount}}</span>
                                <span>{{item.useRange}}</span>
                            </p>
                        </div>
                        <div class="yh_ItemBottom">
                            <p>
                                <span>有效期:</span>
                                <span>{{item.limitTime}}</span>
                            </p>
                            <p>
                                <span>使用说明:</span>
                                <span>{{item.useHelp}}</span>
                            </p>
                        </div>
                </div>
                <div class="nullstatus" v-if="yhList.length==0">
                    <img src="../../../assets/img/juan.png" alt="">
                    <span>暂无优惠券</span>
                </div>
                <div slot="bottom" class="mint-loadmore-bottom">
					<span v-show="bottomStatus !== 'loading'" :class="{ 'rotate': bottomStatus === 'drop' }">↓</span>
					<mt-spinner :type="1" v-show="bottomStatus === 'loading'" color="#e82822"></mt-spinner>
				</div>
			</mt-loadmore>
    </div>
</template>

<script src='./script.js'>
    // import http from '../api/http'

</script>

