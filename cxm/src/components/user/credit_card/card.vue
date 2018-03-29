<style lang='scss' scoped src='./style.scss'>

</style>

<!--我的-->
<template>
    <div class="wrap">
        <section class="give">
            <div class="card clearfix">
                <div class="china_bank clearfix">
                    <img class="img" src="../../../assets/img/img1.png">
                    <p>中国银行<br/><span>储蓄卡</span></p>
                    <img class="img1" src="../../../assets/img/sut.png">
                </div>
                <div class="china_bank_card">6224&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;&nbsp;5643</div>
                <div class="china_bank_default"><img src="../../../assets/img/cue.png">默认收款卡</div>
            </div>
        </section>
        <section class="section">
            <ul class="msg_list">
                <li>
                    <router-link to="/user/credit_card">
                        <div>
                            <img src="../../../assets/img/pho_nor.png">
                            <span class="arrow_right float_right"></span>
                            <span class="message">添加银行卡</span>
                        </div>
                    </router-link>
                </li>
            </ul>
        </section>

    </div>
</template>

<script src='./script.js'>
    // import http from '../api/http'

</script>

