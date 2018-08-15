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
            <div class="body-top">
                <div class="body-title">
                    <div class="title-one">
                        <div class="log">
                            <img class="ltto-log" src="./images/SuperLtto@3x.png" alt="">
                            <div class="log-text">
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
                        <li :class="[index==4||index==5?'allblueBall':'allredBall',index==4?'spance':'']" v-for="(item,index) in kaijiangNum" :key=index >{{item}}</li>
                    </ul>
                </div>
            </div>

            <div class="my-num">
                <div class="touzhu-mes">
                    <p class="my-num-title">投注信息</p>
                    <div class="my-num-main">
                        <ul class="my-num-ul" >
                            <li class="my-num-li" v-for="(item,index) in ticketSchemeDetailDTOs" :key=index>
                                <template v-if="item.ballType == 'biaozhun'">
                                    <ul class="num-sun-ul" >
                                        <li class="num-sun-li" :class="sunItem.isGuess=='1'?sunItem.type=='redBall'?'allredBall':sunItem.type=='blueBall'?'allblueBall':'line':sunItem.type=='redBall'?'redBall':sunItem.type=='blueBall'?'blueBall':'line'" v-for="(sunItem,index) in item.ballList" :key=index>{{sunItem.num}}</li>
                                    </ul>
                                    <p class="num-details">单式 1注 1倍 100.00元 已追加</p>
                                </template>
                                <template v-else>
                                    <ul class="num-sun-ul" >
                                        <li class="num-sun-li" :class="sunItem.isGuess=='1'?sunItem.type=='redBall'?'allredBall':sunItem.type=='blueBall'?'allblueBall':'line':sunItem.type=='redBall'?'redBall':sunItem.type=='blueBall'?'blueBall':'line'" v-for="(sunItem,index) in item.ballList" :key=index>{{sunItem.num}}</li>
                                    </ul>
                                    <p class="num-details">单式 1注 1倍 100.00元 已追加</p>
                                </template>
                            </li>
                        </ul>
                    </div>
                    <router-link to="/lottery/daletou/playHelp"> <p class="question"> 奖金如何计算</p></router-link>
                </div>

                <div class="touzhu-mes">
                    <div class="my-num-title">
                        <span>方案信息</span>
                        <div class="look-programme" @click = "goProm()">
                            <span>查看出票方案</span><img src="../../assets/img/arange.png" alt="">
                        </div>
                    </div>
                    <div class="my-num-main">
                        <ul>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>


        <div class="footer">
            <p>继续购买此号</p>
            <p @click="goSelectNum()">继续购买大乐透</p>
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


        .spance{
            margin-left: px2rem(30px) !important;
        }
        .allredBall{
            background-color: #ea5504 !important;
            border: 1px solid #ea5504 !important;
            color: #ffffff;
        }
        .allblueBall{
            background-color: #0081cc !important;
            border: 1px solid #0081cc !important;
            color: #ffffff;
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

        .num {
            box-sizing: border-box;
            margin-top: px2rem(10px);
            padding-left: px2rem(32px);
            display: flex;
            height: px2rem(110px);
            align-items: center;
            background-color: #ffffff;
            p{
                font-size: px2rem(30px);
                color: #9f9f9f;
            }
            .num-ul {
                display: flex;
                flex-direction: row;
                margin-left: px2rem(20px);
                li{
                    line-height: px2rem(60px);
                    width: px2rem(60px);
                    text-align: center;
                    font-size: px2rem(26px);
                    color: #ffffff;
                    background-color: black;
                    border-radius: 100%;
                    margin: 0 px2rem(5px);
                }
            }
        }
        .body{
            width: 100%;
            box-sizing: border-box;
            position: absolute;
            bottom: px2rem(100px);
            top: px2rem(100px);
            position: absolute;
            overflow: auto;
            .body-top{
                width: 100%;
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
                            .log-text{
                                p:nth-child(1){
                                    font-weight: 700;
                                    font-size: px2rem(28px);
                                    color: #505050;
                                }
                                p:nth-child(2){
                                    color: #9f9f9f;
                                }
                                margin-left: px2rem(20px);
                            }
                        }
                    }
                    .programme{
                        box-sizing: border-box;
                        padding: px2rem(15px) px2rem(15px) 0 px2rem(15px);
                        display: flex;
                        justify-content: space-between;
                        flex-direction: column;
                        div{
                            display: flex;
                            justify-content: space-between;
                        }
                        .programme-type{
                            color: #9f9f9f;
                            font-size: px2rem(28px);
                        }
                        .programme-money{
                            margin-top: px2rem(5px);
                            p:nth-child(1){
                                color: #505050;
                            }
                            p:nth-child(2){
                                color: #EA5504;
                            }
                        }
                    }
                }
            }
            .my-num{
                box-sizing: border-box;
                width: 100%;
                .touzhu-mes{
                    margin-top: px2rem(10px);
                    background-color: #ffffff;
                    padding-bottom: px2rem(20px);
                }
                /*padding: 0 px2rem(15px) px2rem(15px) px2rem(15px);*/
                .my-num-title{
                    padding: px2rem(15px);
                    margin: 0 px2rem(15px);
                    color: #9f9f9f;
                    border-bottom: 1px solid #c7c7c7;
                    display: flex;
                    font-size: px2rem(26px);
                    justify-content: space-between;
                    .look-programme{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        color: #505050;
                        img{
                            margin-left: px2rem(15px);
                            height: px2rem(25px);
                            width: px2rem(15px);
                        }
                    }

                }
                .my-num-main{
                    box-sizing: border-box;
                    width: 100%;
                    padding: 0 px2rem(20px);
                    .my-num-ul{
                        .my-num-li{
                            margin-top: px2rem(15px);
                            .num-sun-ul{
                                display: flex;
                                flex-direction: row;
                                flex-wrap: wrap;
                                margin-top: px2rem(20px);
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
                                padding-left: px2rem(10px);
                            }
                        }
                    }
                }
                .question{
                    margin-left: px2rem(30px);
                    margin-top: px2rem(20px);
                    font-size: px2rem(26px);
                    color: #f5911e;
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
                color: #ffffff;
                width: 49%;
                background-color: #EA5504;
                font-size: px2rem(28px);
            }
        }
    }
</style>
<script>
    import api from '../../fetch/api'
    import {Indicator} from 'mint-ui';

    export default {
        name: "programmeDetails",
        data() {
            return {
                data: {
                    "programmeSn": "string",
                },
                kaijiangNum:['01','02','23','12','34','12'],
                ticketSchemeDetailDTOs:[
                    {
                        ballList:[
                            {num:'12', type:'redBall',isGuess:'1'},
                            {num:'12', type:'redBall',isGuess:'0'},
                            {num:'12', type:'redBall',isGuess:'0'},
                            {num:'12', type:'redBall',isGuess:'0'},
                            {num:'12', type:'redBall',isGuess:'0'},
                            {num:'', type:'space',isGuess:'0'},
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
                            {num:'', type:'space',isGuess:'0'},
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
                            {num:'', type:'space',isGuess:'0'},
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
                            {num:'', type:'space',isGuess:'0'},
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
                            {num:'', type:'space',isGuess:'0'},
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
                            {num:'', type:'space',isGuess:'0'},
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
                ticketSchemeDetailDTOsxxxxxx: [
                    {
                        blueCathectics: [
                            {
                                cathectic: "10",
                                isGuess: "string"
                            },
                            {
                                cathectic: "12",
                                isGuess: "string"
                            }
                        ],
                        redCathectics: [
                            {
                                cathectic: "01",
                                isGuess: "string"
                            },
                            {
                                cathectic: "01",
                                isGuess: "string"
                            },
                            {
                                cathectic: "01",
                                isGuess: "string"
                            },
                            {
                                cathectic: "01",
                                isGuess: "string"
                            },
                            {
                                cathectic: "01",
                                isGuess: "string"
                            },
                        ],
                        blueDanCathectics: [
                            {
                                cathectic: "23",
                                isGuess: "string"
                            }
                        ],
                        blueTuoCathectics: [
                            {
                                cathectic: "24",
                                isGuess: "string"
                            },
                            {
                                cathectic: "24",
                                isGuess: "string"
                            }
                        ],
                        redDanCathectics: [
                            {
                                cathectic: "13",
                                isGuess: "string"
                            },
                            {
                                cathectic: "13",
                                isGuess: "string"
                            },
                            {
                                cathectic: "13",
                                isGuess: "string"
                            },
                            {
                                cathectic: "13",
                                isGuess: "string"
                            }
                        ],
                        redTuoCathectics: [
                            {
                                cathectic: "16",
                                isGuess: "string"
                            },
                            {
                                cathectic: "16",
                                isGuess: "string"
                            },
                            {
                                cathectic: "16",
                                isGuess: "string"
                            },
                            {
                                cathectic: "16",
                                isGuess: "string"
                            },
                            {
                                cathectic: "16",
                                isGuess: "string"
                            },
                            {
                                cathectic: "16",
                                isGuess: "string"
                            },
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
                    },
                    {
                        blueCathectics: [
                            {
                                cathectic: "10",
                                isGuess: "string"
                            },
                            {
                                cathectic: "12",
                                isGuess: "string"
                            }
                        ],
                        redCathectics: [
                            {
                                cathectic: "01",
                                isGuess: "string"
                            },
                            {
                                cathectic: "01",
                                isGuess: "string"
                            },
                            {
                                cathectic: "01",
                                isGuess: "string"
                            },
                            {
                                cathectic: "01",
                                isGuess: "string"
                            },
                            {
                                cathectic: "01",
                                isGuess: "string"
                            },
                        ],
                        blueDanCathectics: [
                            {
                                cathectic: "23",
                                isGuess: "string"
                            }
                        ],
                        blueTuoCathectics: [
                            {
                                cathectic: "24",
                                isGuess: "string"
                            },
                            {
                                cathectic: "24",
                                isGuess: "string"
                            }
                        ],
                        redDanCathectics: [
                            {
                                cathectic: "13",
                                isGuess: "string"
                            },
                            {
                                cathectic: "13",
                                isGuess: "string"
                            },
                            {
                                cathectic: "13",
                                isGuess: "string"
                            },
                            {
                                cathectic: "13",
                                isGuess: "string"
                            }
                        ],
                        redTuoCathectics: [
                            {
                                cathectic: "16",
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
                    },
                    {
                        blueCathectics: [
                            {
                                cathectic: "10",
                                isGuess: "string"
                            },
                            {
                                cathectic: "12",
                                isGuess: "string"
                            }
                        ],
                        redCathectics: [
                            {
                                cathectic: "01",
                                isGuess: "string"
                            },
                            {
                                cathectic: "01",
                                isGuess: "string"
                            },
                            {
                                cathectic: "01",
                                isGuess: "string"
                            },
                            {
                                cathectic: "01",
                                isGuess: "string"
                            },
                            {
                                cathectic: "01",
                                isGuess: "string"
                            },
                        ],
                        blueDanCathectics: [
                            {
                                cathectic: "23",
                                isGuess: "string"
                            }
                        ],
                        blueTuoCathectics: [
                            {
                                cathectic: "24",
                                isGuess: "string"
                            },
                            {
                                cathectic: "24",
                                isGuess: "string"
                            }
                        ],
                        redDanCathectics: [
                            {
                                cathectic: "13",
                                isGuess: "string"
                            },
                            {
                                cathectic: "13",
                                isGuess: "string"
                            },
                            {
                                cathectic: "13",
                                isGuess: "string"
                            },
                            {
                                cathectic: "13",
                                isGuess: "string"
                            }
                        ],
                        redTuoCathectics: [
                            {
                                cathectic: "16",
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
        created(){
            this.getLottoOrderDetailFn()
        },
        mounted(){},
        methods:{
            // 头部返回
            goBack() {
                this.$router.go(-1);
            },
            goProm(){
                this.$router.push({
                    path:"/lottery/daletou/ticketScheme"
                })
            },
            //获取详情
            getLottoOrderDetailFn() {
                api.getLottoOrderDetail('')
                    .then(res => {
                        if (res.code == 0) {
                            Indicator.close()
                            console.log(res);
                        }
                    })
            },
            //跳转到订单详情
            goSelectNum(){
                this.$router.push({
                    path:'/lottery/daletou/selectnumber'
                })
            }
        },
        computed:{},
        watch: {},
        destroyed(){},
        beforeRouteLeave(to, from, next) {
            next()
        }
    }
</script>