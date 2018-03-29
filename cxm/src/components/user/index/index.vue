<style lang='scss' scoped src='./style.scss'>

</style>


<!--我的-->
<template>
    <div class="wrap">
        <mt-loadmore :top-method="loadTop" ref="loadmore" @top-status-change="handleTopChange">
        <section class="center">
            <div class="portrait clearfix">
                <div class="people">
                    <img src="../../../assets/img/portrait.png" v-if="userInfo.headimg==''">
                    <img :src="userInfo.headimg" alt="" v-if="userInfo.headimg!=''">
                </div>
                <div class="por-right">
                    <span>{{userInfo.mobile}}</span>
                    <b class="certified" v-show='userInfo.isReal==1'></b>
                    <p v-show='userInfo.isReal!=1' @click='gorz()'>您还未实名认证，尽快实名认证</p>
                </div>
            </div>
            <div class="money clearfix">
                <div class="left">
                    <span>{{userInfo.totalMoney}}元</span>
                    <p>账户余额</p>
                </div>
                <div class="left">
                    <span>{{userInfo.userMoney}}元</span>
                    <p>可提现余额</p>
                </div>
            </div>
            <div class="nav">
                <router-link to='/user/recharge'>充值</router-link>
                <router-link to="/user/withdraw">提现</router-link>
            </div>
        </section>
        <section class="section">
            <ul class="msg_list">
                <li>
                    <router-link to="/user/record">
                        <div>
                            <img src="../../../assets/img/pho_nor.png">
                            <span class="arrow_right float_right"></span>
                            <span class="message">投注记录</span>
                        </div>
                    </router-link>
                    <router-link to='/user/account'>
                        <div>
                            <img src="../../../assets/img/pho_nor.png">
                            <span class="arrow_right float_right"></span>
                            <span class="message">账户明细</span>
                        </div>
                    </router-link>
                    <router-link to='/user/message'>
                        <div>
                            <img src="../../../assets/img/pho_nor.png">
                            <span class="arrow_right float_right"></span>
                            <span class="message">消息中心</span>
                        </div>
                    </router-link>
                    <router-link to='/user/detail'>
                        <div>
                            <img src="../../../assets/img/pho_nor.png">
                            <span class="arrow_right float_right"></span>
                            <span class="message">我的卡卷<em></em></span>
                        </div>
                    </router-link>

                </li>
            </ul>
        </section>
        <section class="section">
            <ul class="msg_list">
                <li>
                    <a>
                        <div>
                            <img src="../../../assets/img/pho_nor.png">
                            <span class="arrow_right float_right"></span>
                            <span class="message">帮助中心</span>
                        </div>
                    </a>
                    <a href="tel:400-123-1234">
                        <div>
                            <img src="../../../assets/img/pho_nor.png">
                            <span class="arrow_kefu float_right">400-123-1234</span>
                            <span class="message">联系客服</span>
                        </div>
                    </a>
                    <router-link to='/user/about'>
                        <div>
                            <img src="../../../assets/img/pho_nor.png">
                            <span class="arrow_right float_right"></span>
                            <span class="message">关于我们</span>
                        </div>
                    </router-link>
                </li>
            </ul>
        </section>
        <section class="button" @click="loginout()">
            <a class="determine">退出登录</a>
        </section>
        </mt-loadmore>
    </div>
</template>

<script src='./script.js'>
    // import http from '../api/http'

</script>

