<template>
    <div class="tickt-scheme">
        <!--躯干-->
        <div class="body">
            <div class="body-in">
                <p class="body-in-title">方案编号：</p>
                <div class="message">
                    <p>投注信息</p>
                    <p>状态</p>
                </div>

                <ul class="my-num-ul" >
                    <li class="my-num-li" v-for="(item,index) in ticketSchemeDetailDTOs" :key=index :class="ticketSchemeDetailDTOs.length-1==index?'border-none':''">
                        <div class="num-box">
                            <template v-if="item.ballType == 'biaozhun'">
                                <ul class="num-sun-ul" >
                                    <li class="num-sun-li" :class="sunItem.type=='redBall'?'redBall':sunItem.type=='blueBall'?'blueBall':'line'" v-for="(sunItem,index) in item.ballList" :key=index>{{sunItem.num}}</li>
                                </ul>
                                <p class="num-details">单式 1注 1倍 100.00元 已追加</p>
                            </template>
                            <template v-else>
                                <ul class="num-sun-ul" >
                                    <li class="num-sun-li" :class="sunItem.type=='redBall'?'redBall':sunItem.type=='blueBall'?'blueBall':'line'" v-for="(sunItem,index) in item.ballList" :key=index>{{sunItem.num}}</li>
                                </ul>
                                <p class="num-details">单式 1注 1倍 100.00元 已追加</p>
                            </template>
                        </div>
                        <p class="tickt-status">出票成功</p>
                    </li>
                </ul>
            </div>
        </div>


    </div>
</template>
<style scoped lang="scss">
    @import "../../assets/css/function.scss";

    .tickt-scheme {
        .body {
            width: 100%;
            background-color: #ffffff;
            .body-in{
                box-sizing: border-box;
                width: 100%;
                height: 100%;
                padding: px2rem(20px);
                color: #505050;
                font-size: px2rem(26px);
                .border-none{
                    border-bottom: 0 none!important;
                }
                .body-in-title{

                    border-bottom: 1px solid #c7c7c7;
                    padding-bottom: px2rem(20px);
                    padding-left: px2rem(15px);
                    color: #9f9f9f;
                    font-size: px2rem(28px);
                }
                .message{
                    box-sizing: border-box;
                    display: flex;
                    justify-content: space-between;
                    padding: px2rem(15px);
                    color: #9f9f9f;
                    font-size: px2rem(28px);
                }
                .redBall {
                    color: #ea5504 !important;
                    border: 1px solid #c7c7c7;
                }
                .blueBall {
                    color: #0081cc !important;
                    border: 1px solid #c7c7c7;
                }
                .line{
                    width: 8px!important;
                    color: #c7c7c7;
                    text-align: center;
                    overflow: hidden;
                }
                .my-num-ul{
                    .my-num-li{
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        border-bottom: 1px dotted #c7c7c7;
                        padding: px2rem(15px);
                        .num-sun-ul{
                            display: flex;
                            flex-direction: row;
                            flex-wrap: wrap;
                            .num-sun-li{
                                line-height: px2rem(60px);
                                width: px2rem(60px);
                                text-align: center;
                                font-size: px2rem(26px);
                                border-radius: 100%;
                                margin: px2rem(10px) px2rem(5px);
                            }
                        }
                        .num-details{
                            font-size: px2rem(28px);
                            color: #9f9f9f;
                            padding-left: px2rem(15px);
                        }
                        .tickt-status{
                            min-width: px2rem(110px);
                            color: #ea5504;
                        }
                    }
                }
            }
        }
    }
</style>
<script>
    import {Indicator} from 'mint-ui';

    export default {
        name: "ticktScheme",
        data() {
            return {
                ticketSchemeDetailDTOs:[
                    {
                        ballList:[
                            {num:'12', type:'redBall',isGuess:'1'},
                            {num:'12', type:'redBall',isGuess:'0'},
                            {num:'12', type:'redBall',isGuess:'0'},
                            {num:'12', type:'redBall',isGuess:'0'},
                            {num:'12', type:'redBall',isGuess:'0'},
                            {num:'——', type:'line',isGuess:'0'},
                            {num:'13', type:'blueBall',isGuess:'0'},
                            {num:'13', type:'blueBall',isGuess:'1'},
                        ],
                        ballType:"biaozhun",
                        amount: "string",
                        betNum: 0,
                        cathectic: 0, //投注倍数 ,
                        isAppend: 0,
                        multiple: "string",
                        number: "string",
                        passType: "string",
                        playType: 0,
                        status: 0,
                        tickeContent: "string",
                        ticketSn: "string"
                    },
                    {
                        ballList:[
                            {num:'12', type:'redBall',isGuess:'1'},
                            {num:'12', type:'redBall',isGuess:'0'},
                            {num:'12', type:'redBall',isGuess:'0'},
                            {num:'12', type:'redBall',isGuess:'0'},
                            {num:'12', type:'redBall',isGuess:'0'},
                            {num:'——', type:'line',isGuess:'0'},
                            {num:'13', type:'blueBall',isGuess:'0'},
                            {num:'13', type:'blueBall',isGuess:'1'},
                        ],
                        ballType:"biaozhun",
                        amount: "string",
                        betNum: 0,
                        cathectic: 0, //投注倍数 ,
                        isAppend: 0,
                        multiple: "string",
                        number: "string",
                        passType: "string",
                        playType: 0,
                        status: 0,
                        tickeContent: "string",
                        ticketSn: "string"
                    },
                    {
                        ballList:[
                            {num:'12', type:'redBall',isGuess:'1'},
                            {num:'12', type:'redBall',isGuess:'0'},
                            {num:'12', type:'redBall',isGuess:'0'},
                            {num:'12', type:'redBall',isGuess:'0'},
                            {num:'12', type:'redBall',isGuess:'0'},
                            {num:'——', type:'line',isGuess:'0'},
                            {num:'13', type:'blueBall',isGuess:'0'},
                            {num:'13', type:'blueBall',isGuess:'1'},
                        ],
                        ballType:"biaozhun",
                        amount: "string",
                        betNum: 0,
                        cathectic: 0, //投注倍数 ,
                        isAppend: 0,
                        multiple: "string",
                        number: "string",
                        passType: "string",
                        playType: 0,
                        status: 0,
                        tickeContent: "string",
                        ticketSn: "string"
                    },
                    {
                        ballList:[
                            {num:'12', type:'redBall',isGuess:'1'},
                            {num:'12', type:'redBall',isGuess:'0'},
                            {num:'12', type:'redBall',isGuess:'0'},
                            {num:'12', type:'redBall',isGuess:'0'},
                            {num:'12', type:'redBall',isGuess:'0'},
                            {num:'——', type:'line',isGuess:'0'},
                            {num:'13', type:'blueBall',isGuess:'0'},
                            {num:'13', type:'blueBall',isGuess:'1'},
                        ],
                        ballType:"biaozhun",
                        amount: "string",
                        betNum: 0,
                        cathectic: 0, //投注倍数 ,
                        isAppend: 0,
                        multiple: "string",
                        number: "string",
                        passType: "string",
                        playType: 0,
                        status: 0,
                        tickeContent: "string",
                        ticketSn: "string"
                    },
                    {
                        ballList:[
                            {num:'12', type:'redBall',isGuess:'1'},
                            {num:'12', type:'redBall',isGuess:'0'},
                            {num:'12', type:'redBall',isGuess:'0'},
                            {num:'12', type:'redBall',isGuess:'0'},
                            {num:'12', type:'redBall',isGuess:'0'},
                            {num:'——', type:'line',isGuess:'0'},
                            {num:'13', type:'blueBall',isGuess:'0'},
                            {num:'13', type:'blueBall',isGuess:'1'},
                        ],
                        ballType:"biaozhun",
                        amount: "string",
                        betNum: 0,
                        cathectic: 0, //投注倍数 ,
                        isAppend: 0,
                        multiple: "string",
                        number: "string",
                        passType: "string",
                        playType: 0,
                        status: 0,
                        tickeContent: "string",
                        ticketSn: "string"
                    },
                    {
                        ballList:[
                            {num:'12', type:'redBall',isGuess:'1'},
                            {num:'12', type:'redBall',isGuess:'0'},
                            {num:'12', type:'redBall',isGuess:'0'},
                            {num:'12', type:'redBall',isGuess:'0'},
                            {num:'12', type:'redBall',isGuess:'0'},
                            {num:'——', type:'line',isGuess:'0'},
                            {num:'13', type:'blueBall',isGuess:'0'},
                            {num:'13', type:'blueBall',isGuess:'1'},
                        ],
                        ballType:"biaozhun",
                        amount: "string",
                        betNum: 0,
                        cathectic: 0, //投注倍数 ,
                        isAppend: 0,
                        multiple: "string",
                        number: "string",
                        passType: "string",
                        playType: 0,
                        status: 0,
                        tickeContent: "string",
                        ticketSn: "string"
                    },
                    {
                        ballList:[
                            {num:'12', type:'redBall',isGuess:'0'},
                            {num:'12', type:'redBall',isGuess:'1'},
                            {num:'12', type:'redBall',isGuess:'0'},
                            {num:'12', type:'redBall',isGuess:'0'},
                            {num:'—', type:'line'},
                            {num:'12', type:'redBall',isGuess:'0'},
                            {num:'12', type:'redBall',isGuess:'0'},
                            {num:'12', type:'redBall',isGuess:'0'},
                            {num:'12', type:'redBall',isGuess:'0'},
                            {num:'12', type:'redBall',isGuess:'0'},
                            {num:'—', type:'space',isGuess:'0'},
                            {num:'13', type:'blueBall',isGuess:'0'},
                            {num:'—', type:'space',isGuess:'0'},
                            {num:'13', type:'blueBall',isGuess:'1'},
                            {num:'13', type:'blueBall',isGuess:'0'},
                            {num:'13', type:'blueBall',isGuess:'0'},
                            {num:'13', type:'blueBall',isGuess:'1'},
                        ],
                        ballType:"dantuo",
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
                ],
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