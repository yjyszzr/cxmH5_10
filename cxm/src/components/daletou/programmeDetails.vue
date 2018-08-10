<template>
    <div class="programme-details">
        <!--头部开始-->
        <div class="head">
            <span class="back-img" @click="goBack()"><img src="../../assets/img/ret.png" alt=""></span>
            <div class="head-text">
                <span>彩小秘·方案详情</span>
            </div>
            <div class="memu"></div>
        </div>
        <!--躯干-->
        <div class="body">
            <div class="body-in">
                <div class="body-title">
                    <div class="title-one">
                        <div class="log">
                            <img class="ltto-log" src="./images/SuperLtto@3x.png" alt="">
                            <div>
                                <p>大乐透  20180528期</p>
                                <p>￥ 20.00</p>
                            </div>
                        </div>
                        <img class="ltto-log" src="./images/Prize@3x.png" alt="">
                    </div>
                    <div class="programme">
                        <div class="programme-type">
                            <p>方案状态</p>
                            <p>中奖金额</p>
                        </div>
                        <div class="programme-money">
                            <p>已中奖</p>
                            <p>￥500000.00</p>
                        </div>
                    </div>
                </div>

                <div class="num">
                    <p>开奖号码</p>
                    <ul class="num-ul">
                        <li>10</li>
                        <li>34</li>
                        <li>12</li>
                        <li>23</li>
                    </ul>
                </div>

                <div class="my-num">
                    <p class="my-num-title">投注信息</p>
                    <div class="my-num-main">
                        <ul class="my-num-ul" >
                            <li class="my-num-li" v-for="(item,index) in ticketSchemeDetailDTOs" :key=index>
                                <ul class="num-sun-ul">
                                    <li class="num-sun-li" v-for="(sunItem,index) in item" :key=index>{{sunItem.cathectic}}</li>
                                </ul>
                                <p class="num-details">单式 1注 1倍 100.00元 已追加</p>
                            </li>
                        </ul>
                    </div>
                    <p class="question">奖金如何计算</p>
                </div>
                <div class="my-num">
                    <p class="my-num-title">
                        <span>方案信息</span>
                        <span>查看出票方案</span>
                    </p>
                    <div class="my-num-main">

                    </div>
                </div>
            </div>
        </div>
        <div class="footer">
            <p>继续购买此号</p>
            <p>继续购买大乐透</p>
        </div>


    </div>
</template>
<style scoped lang="scss">
    @import "../../assets/css/function.scss";

    .programme-details {
        /*.clearfix:after {content:"."; display:block; height:0; visibility:hidden; clear:both; }*/
        /*.clearfix { *zoom:1; }　*/
        .head {
            overflow: hidden;
            height: px2rem(100px);
            background: #f4f4f4;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .back-img {
                display: inline-block;
                height: px2rem(30px);
                width: px2rem(30px);
                margin-left: px2rem(30px);
                img {
                    width: 100%;
                }
            }
            .head-text {
                display: flex;
                align-items: center;
                font-size: px2rem(32px);
                color: #505050;

            }
            .memu {
                width: px2rem(30px);
            }
        }
        .body {
            width: 100%;
            position: absolute;
            top: px2rem(100px);
            bottom: px2rem(100px);
            overflow: auto;
            .body-in{
                /*display: flex;*/
                /*flex-direction: column;*/
                .body-title{
                    background-color: #ffffff;
                    padding: px2rem(20px);
                    .title-one{
                        box-sizing: border-box;
                        padding: 0 px2rem(15px) px2rem(20px) px2rem(15px);
                        border-bottom: 1px solid #c7c7c7;
                        display: flex;
                        justify-content: space-between;
                        .ltto-log{
                            height: px2rem(70px);
                            width: px2rem(70px);
                        }
                        .log{
                            display: flex;
                            flex-direction: row;
                        }
                    }
                    .programme{
                        box-sizing: border-box;
                        padding: px2rem(15px) px2rem(15px) 0 px2rem(15px);
                        display: flex;
                        justify-content: space-between;
                    }
                }
                .num {
                    margin-top: px2rem(20px);
                    display: flex;
                    justify-content: center;
                    height: px2rem(110px);
                    align-items: center;
                    background-color: #ffffff;
                    .num-ul {
                        display: flex;
                        flex-direction: row;
                    }
                }
                .my-num{
                    margin-top: px2rem(20px);
                    background-color: #ffffff;
                    padding: 0 px2rem(15px) px2rem(15px) px2rem(15px);
                    .my-num-title{
                        padding: px2rem(15px);
                        color: #c7c7c7;
                        border-bottom: 1px solid #c7c7c7;
                        display: flex;
                        justify-content: space-between;
                    }
                    .my-num-main{
                        .my-num-ul{
                            .my-num-li{
                                margin-top: px2rem(15px);
                                .num-sun-ul{
                                    display: flex;
                                    flex-direction: row;
                                    .num-sun-li{
                                        line-height: px2rem(60px);
                                        width: px2rem(60px);
                                        border: 1px solid #c7c7c7;
                                        text-align: center;
                                        font-size: px2rem(26px);
                                        border-radius: 100%;
                                        margin: px2rem(15px);
                                    }
                                }
                                .num-details{
                                    font-size: px2rem(28px);
                                    color: #c7c7c7;
                                    padding-left: px2rem(15px);
                                }
                            }
                        }
                    }
                    .question{
                        margin-left: px2rem(15px);
                        margin-top: px2rem(20px);
                        font-size: px2rem(26px);
                        color: #f5911e;
                    }
                }



            }
        }
        .footer {
            box-sizing: border-box;
            width: 100%;
            position: absolute;
            bottom: 0;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            p{
               line-height: px2rem(100px);
                text-align: center;
                color: white;
                width: 49%;
                background-color: #EA5504;
                font-size: px2rem(28px);
            }
        }
    }
</style>
<script>
    import {Indicator} from 'mint-ui';

    export default {
        name: "programmeDetails",
        data() {
            return {
                data: {
                    "programmeSn": "string",
                },
                ticketSchemeDetailDTOs: [
                    {
                        blueCathectics: [
                            {
                                cathectic: "10",
                                isGuess: "string"
                            }
                        ],
                        blueDanCathectics: [
                            {
                                cathectic: "string",
                                isGuess: "string"
                            }
                        ],
                        blueTuoCathectics: [
                            {
                                cathectic: "string",
                                isGuess: "string"
                            }
                        ],
                        redCathectics: [
                            {
                                cathectic: "string",
                                isGuess: "string"
                            }
                        ],
                        redDanCathectics: [
                            {
                                cathectic: "string",
                                isGuess: "string"
                            }
                        ],
                        redTuoCathectics: [
                            {
                                cathectic: "string",
                                isGuess: "string"
                            }
                        ],
                        amount: "string",
                        betNum: 0,
                        cathectic: 0,
                        isAppend: 0,
                        multiple: "string",
                        number: "string",
                        passType: "string",
                        playType: 0,
                        status: 0,
                        tickeContent: "string",
                        ticketSn: "string"
                    }
                ]
            }
        },
        created(){},
        mounted(){},
        methods:{
            // 头部返回
            goBack() {
                this.$router.go(-1);
            },
        },
        computed:{},
        watch: {},
        destroyed(){},
        beforeRouteLeave(to, from, next) {
            next()
        }
    }
</script>