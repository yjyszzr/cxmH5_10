<template>
    <div class="jing-cai" :style="{width:'100%'}">
        <div class="body">
            <div class="team">
                <div class="img-box">

                </div>
                <div>
                    <p class="team-name">
                        <span>汗秘尔顿</span>
                        VS
                        <span>凯尔特人</span>
                    </p>
                    <p class="active-time">
                        活动倒计时： <span>01:22:15</span>
                    </p>
                </div>
                <div class="img-box">

                </div>
            </div>
            <p class="wait">等待开奖 （如中奖 奖金*8）</p>
            <p class="continue">再投注20元即可享受8次奖金翻倍机会，快去投注吧</p>
            <ul class="ul-box">
                <li>
                    <p>全场进球数大于2.5</p>
                    <div class="btn-box">
                        <div>
                            是
                            <span><img src="./images/yes.png" alt=""></span>
                        </div>
                        <div>
                            否
                            <span><img src="./images/yes.png" alt=""></span>
                        </div>
                    </div>
                </li>
                <li>
                    <p>全场进球数大于2.5</p>
                    <div class="btn-box">
                        <div>是</div>
                        <div>否</div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss">
    @import "../../../assets/css/function.scss";
    .jing-cai {
        background: url("./images/base.jpg") no-repeat center;
        background-size: 100% auto;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        .body {
            position: relative;
            display: flex;
            /*justify-content: center;*/
            align-items: center;
            flex-direction: column;
            .wait{
                font-size: px2rem(30px);
                color: #ffffff;
                margin-top: px2rem(60px);
            }
            .continue{
                color: #FFFFFF;
                font-size: px2rem(18px);
                margin-top: px2rem(20px);
            }
            .team {
                margin-top: px2rem(48px);
                display: flex;
                flex-direction: row;
                border-radius: px2rem(10px);
                background-color: rgba(49, 60, 19, .5);
                padding: px2rem(36px) px2rem(28px) px2rem(45px) px2rem(28px);
                .team-name {
                    font-size: px2rem(34px);
                    color: #ffffff;
                    span {
                        padding: 0 px2rem(30px);
                    }
                }
                .img-box {
                    height: px2rem(80px);
                    width: px2rem(80px);
                    background-color: red;
                    border-radius: 100%;
                    overflow: hidden;
                }
                .active-time {
                    text-align: center;
                    font-size: px2rem(24px);
                    color: #ffffff;
                    margin-top: px2rem(10px);
                }

            }
            .ul-box {
                margin-top: px2rem(50px);
                li {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    padding: px2rem(10px) 0;
                    color: white;
                    p {
                        font-size: px2rem(36px);
                    }
                    .btn-box {
                        display: flex;
                        justify-content: center;
                        align-items: center;

                        div {
                            margin: px2rem(30px);
                            padding: px2rem(15px) px2rem(120px);
                            border: 1px solid #ffffff;
                            font-size: px2rem(28px);
                            position: relative;
                            span{
                                display: inline-block;
                                position: absolute;
                                height: px2rem(40px);
                                width: px2rem(40px);
                                right: px2rem(0px);
                                bottom: px2rem(0px);
                                img{
                                    width: 100%;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>
<script>
    import {MessageBox} from 'mint-ui';

    export default {
        name: "jingcai",
        data() {
            return {}
        },
        methods: {

        }
    }
</script>