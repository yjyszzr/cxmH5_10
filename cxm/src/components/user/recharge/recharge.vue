<style lang='scss' scoped src='./style.scss'>

</style>


<!--我的-->
<template>
    <div class="wrap">
        <span class="head">小秘提示：充值金额可购彩但不能提现，中奖金额可提现</span>
        <div style="margin-top:0.5rem;" class="section current clearfix">
            <p>当前账号：{{userInfo.mobile}} <br/>当前余额：{{userInfo.totalMoney}}元</p>
        </div>
        <section class="section amount">
            <p>充值金额</p>
            <input v-model="recharge_val" type="tel" class="money" placeholder="确认后不可修改"/>
            <ul>
                <li v-for="(item,i) in list_num" :key='i' @click='changenum(item)'>{{item}}</li>
            </ul>
        </section>
        <section class="section wechat">
            <p>支付方式</p>
            <ul class="msg_list">
                <li>
                    <a href="javascript:void(0);">
                        <div>
                            <img style="margin-left:0.25rem;width: 0.68rem;" src="../../../assets/img/wei.png">
                            <span class="arrow_kefu float_right">
                                <i class="iconfont icon-icon-29"></i>
                            </span>
                            <span class="message">微信支付</span>
                        </div>
                    </a>
                </li>
            </ul>
        </section>
        <section class="button">
            <a class="determine">立即支付</a>
        </section>
        <div class="prompt"></div>
    </div>
</template>

<script src='./script.js'>
    // import http from '../api/http'

</script>

