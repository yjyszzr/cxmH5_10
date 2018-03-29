<style lang='scss' scoped src='./style.scss'>

</style>
<!--提现-->
<template>
    <div class="wrap">
        <section class="section">
            <p class="presented">可提现金额：{{userInfo.userMoney}}元</p>
            <ul class=" msg_list">
                <li>
                    <router-link to="/user/credit_card">
                        <div>
                            <label>银行卡：</label>
                            <input type="tel" class="text1" placeholder="请添加银行卡"/>
                            <router-link to="/user/credit_card" class="arrow_right float_right">管理</router-link>
                        </div>
                    </router-link>
                    <a href="javascript:void(0);">
                        <div>
                            <input type="tel" class="text3" placeholder="请输入提现金额"/>
                            <span class="whole">全部提现</span>
                        </div>
                    </a>
                </li>
            </ul>
        </section>
        <section class="button">
            <a class="determine">立即支付</a>
        </section>
        <section class="plain">
            <p>说明：</p>
            <p>1.中奖金额在1小时候可提现</p>
            <p>2.提现不收手续费</p>
            <p>3.为防止洗钱等不法行为，充值金额只能用于消费或退款；</p>
            <p>4.每天提现不超过3次，每次最低3元；</p>
            <p>5.活动赠送金额不可提现；</p>
        </section>
        <div class="prompt"></div>
    </div>
</template>

<script src='./script.js'>
    // import http from '../api/http'

</script>

