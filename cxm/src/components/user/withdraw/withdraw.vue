<style lang='scss' scoped src='./style.scss'>

</style>
<!--提现-->
<template>
    <div class="wrap">
        <section class="section">
            <p class="presented">可提现金额：{{withdrawObj.userMoney}}元</p>
            <ul class=" msg_list">
                <li>
                    <a>
                        <div>
                            <label>银行卡：</label>
                            <p class="text1">{{withdrawObj.defaultBankLabel==''?'请添加银行卡':withdrawObj.defaultBankLabel}}</p>
                            <router-link to="/user/credit_card" class="arrow_right float_right">管理</router-link>
                        </div>
                    </a>
                    <a href="javascript:void(0);">
                        <div>
                            <input v-model="withdrawVal" type="tel" class="text3" placeholder="请输入提现金额"/>
                            <span class="whole" @click="whole()">全部提现</span>
                        </div>
                    </a>
                </li>
            </ul>
        </section>
        <section class="button" @click="determine()">
            <a class="determine">立即提现</a>
        </section>
        <section class="plain">
            <p>温馨提示：</p>
            <p>1.中奖金额在1小时后可提现；</p>
            <p>2.提现金额最低3元，每天提现不超过3次；</p>
            <p>3.提现暂不收取手续费；</p>
            <p>4.为防止恶意提款、洗钱等不法行为，充值金额及活动赠送金额只能用于消费，不可提现；</p>
            <p>5.工作日处理的时间为早10点-晚7点，非工作日发起的提现申请会在工作日的工作时间内进行顺序处理；</p>
            <p>6.如提现中遇到问题，可联系在线客服进行咨询；</p>
        </section>
        <div class="prompt"></div>
    </div>
</template>

<script src='./script.js'>
    // import http from '../api/http'

</script>

