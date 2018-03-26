<style lang='scss' scoped src='./style.scss'>

</style>


<!--我的-->
<template>
    <div class="wrap">
        <div class="header">
            <a href="javascript:history.go(-1);" class="go_return">返回</a>
            <p>彩小秘·充值</p>
        </div>
        <span class="head">小秘提示：充值金额可购彩但不能提现，中奖金额可提现</span>
        <div class="section current clearfix">
            <p>当前账号：18910****4060 <br/>当前余额：100000.00元</p>
        </div>
        <section class="section amount">
            <p>充值金额</p>
            <input type="text" class="money" placeholder="确认后不可修改"/>
            <ul class="clearfix">
                <li>20</li>
                <li>50</li>
                <li>100</li>
                <li>200</li>
            </ul>
        </section>
        <section class="section wechat ">
            <p>微信支付</p>
            <ul class="msg_list">
                <li>
                    <a href="javascript:void(0);">
                        <div>
                            <img src="../../../assets/img/wei.png">
                            <span class="arrow_kefu float_right"><img src="../../../assets/img/cue.png"></span>
                            <span class="message">投注记录</span>
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

