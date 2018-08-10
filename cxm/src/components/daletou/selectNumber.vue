<template>
    <div class="select-num">
        <!--头部开始-->
        <div class="head">
            <span class="back-img" @click="goBack()"><img src="../../assets/img/ret.png" alt=""></span>
            <div class="head-text" @click="openOrclose()">
                <span>彩小秘·<span v-if="selectedIndex=='0'">标准选号</span><span v-if="selectedIndex=='1'">胆拖选号</span></span>
                <span class="header-down"><img id="downImg" src="../../assets/img/freebuy_img/Collapse@3x.png"
                                               alt=""></span>
            </div>
            <div>
                <span class="memu-btn" @click="popShow = !popShow"><img src="./images/More@3x.png" alt=""></span>
            </div>
        </div>
        <!--躯干-->
        <div class="body">
            <div class="body-main">
                <div class="body-title" @click="popupVisible = !popupVisible">
                    <p>{{data.term_num}}期 截止时间 {{data.endDate}}</p>
                    <p class="history-p">历史开奖 <span class="arrow_right"><img src="../../assets/img/arange.png" alt=""></span></p>
                </div>
                <!--标准选号-->
                <div class="biaozhun" v-if="selectedIndex=='0'">
                    <div class="selection">
                        <div class="phone" @click="machineSelection()">
                            <span class="phone-img-box"><img src="./images/IntelligentChoice@3x.png" alt=""></span>
                            <span>机选</span>
                        </div>
                        <div class="bonus-box">
                            奖池： <span>{{data.prizes}}</span> 元
                        </div>
                    </div>
                    <div class="ball-box">
                        <ul class="red-ball-ul ball-ul">
                            <li class="ball-li" v-for="(item,index) in preList" :key=index
                                @click="biaozhunSelect(item,'preList')">
                                <span class="ball red-ball" :class="item.selected?'curRedBall':''">{{item.num}}</span>
                                <span class="miss" v-if="historyMiss">{{item.missNum}}</span>
                            </li>
                        </ul>
                        <ul class="blue-ball-ul ball-ul">
                            <li class="ball-li" v-for="(item,index) in postList" :key=index
                                @click="biaozhunSelect(item,'postList')">
                                <span class="ball blue-ball" :class="item.selected?'curBlueBall':''">{{item.num}}</span>
                                <span class="miss" v-if="historyMiss">{{item.missNum}}</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <!--胆拖选号-->
                <div class="dantuo" v-if="selectedIndex=='1'">
                    <p class="what-dantuo" @click="popdantuo = !popdantuo"> 什么是胆拖？</p>
                    <div class="ball-box">
                        <div class="selection dantuo-selection">
                            <p class="desceibe">胆码-红球，至多选4个，至少选1个</p>
                            <div class="bonus-box">
                                奖池： <span>{{data.prizes}}</span>元
                            </div>
                        </div>
                        <ul class="red-ball-ul ball-ul">
                            <li class="ball-li" v-for="(item,index) in danRedPreList" :key=index
                                @click="danTuoSelect(item,index,'redBall','dan')">
                                <span class="ball red-ball" :class="item.selected?'curRedBall':''">{{item.num}}</span>
                                <span class="miss" v-if="historyMiss">{{item.missNum}}</span>
                            </li>
                        </ul>
                        <p class="name-ball red-two">拖码-红球，至少选2个</p>
                        <ul class="red-ball-ul ball-ul">
                            <li class="ball-li" v-for="(item,index) in tuoRedPreList" :key=index
                                @click="danTuoSelect(item,index,'redBall','tuo')">
                                <span class="ball red-ball" :class="item.selected?'curRedBall':''">{{item.num}}</span>
                                <span class="miss" v-if="historyMiss">{{item.missNum}}</span>
                            </li>
                        </ul>
                        <p class="name-ball">胆码-篮球，至多选1个</p>
                        <ul class="blue-ball-ul ball-ul">
                            <li class="ball-li" v-for="(item,index) in danBluePostList" :key=index
                                @click="danTuoSelect(item,index,'blueBall','dan')">
                                <span class="ball blue-ball" :class="item.selected?'curBlueBall':''">{{item.num}}</span>
                                <span class="miss" v-if="historyMiss">{{item.missNum}}</span>
                            </li>
                        </ul>
                        <p class="name-ball">拖码-篮球，至少选2个</p>
                        <ul class="blue-ball-ul ball-ul">
                            <li class="ball-li" v-for="(item,index) in tuoBluePostList" :key=index
                                @click="danTuoSelect(item,index,'blueBall','tuo')">
                                <span class="ball blue-ball" :class="item.selected?'curBlueBall':''">{{item.num}}</span>
                                <span class="miss" v-if="historyMiss">{{item.missNum}}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!--底部-->
        <div class="footer">
            <div class="dele" @click="deleFn()">
                <i class="iconfont icon-icon-26"></i>
            </div>
            <div class="text">
                <template v-if="selectedIndex == '0'">
                    <p v-if="textType">请至少选择 <span class="red">5</span>个红球，<span class="blue">2</span>个篮球</p>
                    <p v-if="!textType">共<span class="red">{{selectZhu.zhuNum}}</span>注，合计<span class="blue">{{selectZhu.zhuNum*2}}</span>元
                    </p>
                </template>
                <template v-if="selectedIndex =='1'">
                    <p v-if="danTuotextType">请至少选择 <span class="red">6</span>个红球，<span class="blue">2</span>个篮球</p>
                    <p v-if="!danTuotextType">共<span class="red">{{danTuoZhu.zhuNum}}</span>注，合计<span class="blue">{{danTuoZhu.zhuNum*2}}</span>元</p>
                </template>
            </div>
            <template v-if="selectedIndex==0">
                <div  class="ok" :class="!textType?'okcur':''" @click = 'goTouZhuConfirm(!textType)'>
                    确定
                </div>
            </template>
            <template v-if="selectedIndex==1">
                <div  class="ok" :class="!danTuotextType?'okcur':''" @click = 'goTouZhuConfirm(!danTuotextType)'>
                    确定
                </div>
            </template>
            <!--<span><img src="./" alt=""></span>-->
        </div>
        <!--选号方式-->
        <div class="collspce">
            <transition name="mybox">
                <div class="title-collspce" v-if="collapseShow">
                    <p class="btn-box" :class="selectedIndex=='0'?'cur':''" @click="numType('0')">标准选号 <span
                            class="img-box"><img v-show="selectedIndex=='0'" src="./images/Check@3x.png" alt=""></span>
                    </p>
                    <p class="btn-box" :class="selectedIndex=='1'?'cur':''" @click="numType('1')">胆拖选号 <span
                            class="img-box"><img v-show="selectedIndex=='1'" src="./images/Check@3x.png" alt=""></span>
                    </p>
                </div>
            </transition>
            <transition name="ceng">
                <div class="meng-cheng" @click="openOrclose()" v-if="collapseShow"></div>
            </transition>
        </div>
        <!--菜单弹窗-->
        <transition name="fade">
            <div class="pop" @click="popShow = !popShow" v-if="popShow">
                <div class="pop-body">
                    <ul class="memu-ul">
                        <li v-for="(item,index) in memu" @click="goNext(item)" :key="index"><i><img :src="item.imgSrc"
                                                                                                    alt=""></i>{{item.name}}
                        </li>
                    </ul>
                </div>
            </div>
        </transition>
        <!--历史开奖-->
        <div class="history">
            <mt-popup
                    v-model="popupVisible"
                    position="bottom">
                <div class="history-box">
                    <ul class="history-ul">
                        <li class="history-li" v-for="(item,index) in prizeList" :key=index>
                            <span class="history-day">{{item.termNum}}</span>
                            <ul class="sun-ul">
                                <li v-for="(sunItem,sunindex) in item.numList" :key=sunindex>
                                    <span :class="sunindex<5?'redBall':'blueBall'">
                                        {{sunItem}}
                                    </span>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </mt-popup>
        </div>
        <!--胆拖介绍-->
        <div class="popdantuo-box">
            <mt-popup
                    popup-transition="popup-fade"
                    v-model="popdantuo">
                <div class="dantuo-pop">
                    <p class="dantuo-pop-title">活动说明</p>
                    <div class="dantuo-pop-body">
                        <p>1.erwerwerewrwrwerewrw</p>
                    </div>
                </div>
            </mt-popup>
        </div>


    </div>
</template>
<style scoped lang="scss">
    @import "../../assets/css/function.scss";

    .select-num {
        .curRedBall {
            color: #ffffff !important;
            background-color: #eb1c24 !important;
            border: 1px solid #eb1c24 !important;
        }
        .curBlueBall {
            color: #ffffff !important;
            background-color: #0081cc !important;
            border: 1px solid #0081cc !important;
        }
        .cur {
            color: #ea5504 !important;
            border: 1px solid #ea5504 !important;
        }
        .redBall {
            color: #ea5504 !important;
        }
        .blueBall {
            color: #0081cc !important;
        }
        .okcur{
            background-color: #ea5504!important;
        }
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
                .header-down {
                    display: inline-block;
                    margin-left: px2rem(10px);
                    height: px2rem(30px);
                    width: px2rem(30px);
                    img {
                        width: 100%;
                    }
                }
            }
            .memu-btn {
                display: inline-block;
                height: px2rem(30px);
                width: px2rem(30px);
                margin-right: px2rem(30px);
                img {
                    width: 100%;
                }
            }

        }
        .popdantuo-box {
            .dantuo-pop {
                width: px2rem(600px);
                margin: 0 auto;
                padding: px2rem(40px) px2rem(30px);
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                .dantuo-pop-title {
                    line-height: px2rem(60px);
                    font-size: 0.4rem;
                    font-weight: 700;
                }
                .dantuo-pop-body {
                    p {
                        font-size: 0.4rem;
                        color: #666;
                        line-height: px2rem(50px)
                    }
                }
            }
        }

        .tranform180 {
            transform: rotate(180deg)
        }
        .meng-cheng {
            z-index: 1;
            position: absolute;
            top: px2rem(100px);
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, .5);
        }
        /*top:px2rem(100px);*/
        .title-collspce {
            z-index: 2;
            position: absolute;
            width: 100%;
            height: px2rem(100px);
            border-top: 1px solid #9f9f9f;
            display: flex;
            justify-content: center;
            flex-direction: row;
            align-items: center;
            overflow: hidden;
            background: #f4f4f4;
            .btn-box {
                line-height: px2rem(60px);
                width: px2rem(180px);
                text-align: center;
                font-size: px2rem(26px);
                color: #c7c7c7;
                border: 1px solid #c7c7c7;
                position: relative;
                margin: 0 px2rem(30px);
                .img-box {
                    display: inline-block;
                    height: px2rem(36px);
                    width: px2rem(36px);
                    position: absolute;
                    bottom: -1px;
                    right: -1px;
                    img {
                        width: 100%;
                    }
                }
            }
        }
        .pop {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.5);
            .pop-body {
                position: absolute;
                /*height: px2rem(200px);*/
                /*width: px2rem(100px);*/
                background-color: #ffffff;
                right: px2rem(20px);
                top: px2rem(100px);
            }
            .pop-body::before {
                width: 0;
                height: 0;
                border-width: 0 px2rem(20px) px2rem(20px);
                border-style: solid;
                border-color: transparent transparent #ffffff; /*透明 透明  灰*/

                top: -10.5px;
                right: 0px;
                position: absolute;
                content: "";
            }
        }
        .memu-ul {
            width: px2rem(183px);
            li {
                height: px2rem(72px);
                border-bottom: 1px solid #555555;
                display: flex;
                align-items: center;
                justify-content: left;
                i {
                    height: px2rem(30px);
                    width: px2rem(30px);
                    display: inline-block;
                    margin: 0 px2rem(10px);
                    img {
                        width: 100%;
                    }
                }
            }
        }
        .history {
            width: 100%;
            .mint-popup {
                width: 100%;
            }
            .history-box {
                height: px2rem(500px);
                overflow: auto;
                .history-ul {
                    padding: 0 px2rem(15px);
                    .history-li {
                        padding-left: 10px;
                        display: flex;
                        flex-direction: row;
                        line-height: px2rem(72px);
                        border-bottom: 1px solid #e8e8e8;
                        font-size: px2rem(28px);
                        .history-day {
                            padding-right: px2rem(50px);
                            color: #787878;
                            font-size: px2rem(26px);
                        }
                        .sun-ul {
                            display: flex;
                            flex-direction: row;
                            align-items: center;
                            li {
                                padding: 0 px2rem(10px);
                            }
                        }
                    }
                }
            }

        }
        .body {
            position: absolute;
            top: px2rem(100px);
            bottom: px2rem(100px);
            overflow: auto;
            -webkit-overflow-scrolling: touch !important;
            box-sizing: border-box;
            width: 100%;
            height: auto;
            /*background-color: #ffffff;*/
            .body-main {
                padding: 0 px2rem(8px);
                background-color: white;
                margin-bottom: px2rem(10px);
            }
            .body-title {
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: px2rem(80px);
                color: #9f9f9f;
                font-size: px2rem(26px);
                border-bottom: 1px solid #787878;
                padding: 0 px2rem(15px);
            }
            .dantuo {
                .dantuo-selection {
                    height: px2rem(70px);
                }
                .what-dantuo {
                    margin-left: px2rem(22px);
                    margin-top: px2rem(30px);
                    color: #F5911e;
                }
                .desceibe {
                    color: #c7c7c7;
                }
                .name-ball {
                    margin-left: px2rem(20px);
                    color: #c7c7c7;
                    margin-top: px2rem(20px);
                }
                .red-ball-ul {
                    border-bottom: 0 none !important;
                }
            }
            .selection {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                height: px2rem(100px);
                padding: 0 px2rem(20px);
                .phone {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: px2rem(60px);
                    width: px2rem(168px);
                    background: rgba(245, 145, 30, .2);
                    border-radius: px2rem(20px);
                    font-size: px2rem(26px);
                    color: #f5911e;
                    .phone-img-box {
                        padding-right: px2rem(20px);
                        display: inline-block;
                        height: px2rem(36px);
                        width: px2rem(36px);
                        overflow: hidden;
                        img {
                            width: 100%;
                        }
                    }
                }
                .bonus-box {
                    font-size: px2rem(26px);
                    color: #787878;
                    span {
                        color: #ea5504;
                    }
                }
            }
            .ball-box {
                margin-top: px2rem(20px);
                .red-two {
                    margin-bottom: px2rem(20px);
                }
                .red-ball-ul {
                    border-bottom: 1px solid #c7c7c7;
                    .red-ball {
                        color: #eb1c24;
                    }
                }
                .blue-ball-ul {
                    margin-top: px2rem(20px);
                    .blue-ball {
                        color: #0081cc;
                    }
                }
                .ball-ul {
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    flex-wrap: wrap;
                    .ball-li {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        padding: 0 px2rem(14px);
                    }
                    .ball {
                        display: inline-block;
                        line-height: px2rem(72px);
                        width: px2rem(72px);
                        border-radius: 100%;
                        border: 1px solid #c7c7c7;
                        text-align: center;
                        font-size: px2rem(30px);
                        margin: px2rem(12px) 0;

                    }
                    .miss {
                        color: #c7c7c7;
                        font-size: px2rem(22px);
                    }

                }
            }
        }
        .footer {
            box-sizing: border-box;
            width: 100%;
            background-color: #ffffff;
            position: absolute;
            bottom: 0;
            display: flex;
            height: px2rem(100px);
            justify-content: space-between;
            align-items: center;
            .dele {
                width: px2rem(100px);
                border-right: 1px solid #c7c7c7;
                text-align: center;
                line-height: px2rem(70px);
                i {
                    font-size: px2rem(40px);
                }
            }
            .text {
                color: #787878;
                .red {
                    color: #EA5504;
                }
                .blue {
                    color: #0081cc;
                }
            }
            .ok {
                width: px2rem(250px);
                text-align: center;
                line-height: px2rem(100px);
                color: #ffffff;
                font-size: px2rem(28px);
                background-color: #c7c7c7;
            }
        }
        .history-p {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .arrow_right {
            margin-left: px2rem(10px);
            height: px2rem(28px);
            width: px2rem(15px);
            img {
                width: 100%;
            }
        }
    }
</style>
<script>
    import {getCombinationCount, getArrayItems,danTuoCount} from '../../util/common'
    import {MessageBox, Popup,Indicator} from 'mint-ui';
    import api from '../../fetch/api'
    import GameDescription from "./images/GameDescription@3x.png"
    import LotteryResult from "./images/LotteryResult@3x.png"
    import Trend from "./images/Trend@3x.png"
    import Missing from "./images/Missing@3x.png"

    export default {
        name: "select-number",
        data() {
            return {
                popShow: false, //菜单列表弹窗
                collapseShow: false, //折叠选号方式
                popupVisible: false,//历史开奖列表
                popdantuo: false,//胆拖介绍
                historyMiss: true,//显示历史遗漏
                selectedIndex: JSON.parse(localStorage.getItem('selectedIndex'))?JSON.parse(localStorage.getItem('selectedIndex')):'0',//'0'标准选号 '1'胆拖选号
                preList: [],//前区遗漏
                postList: [],//后区遗漏 ,
                danRedPreList: [],//胆前区遗漏
                tuoRedPreList: [],//拖前区遗漏
                danBluePostList: [],//胆后区遗漏 ,
                tuoBluePostList: [],//拖后区遗漏 ,
                prizeList: [],//历史中奖，
                redBallList: [],//标准选号选中红球集合
                blueBallList: [],//标准选号选中篮球集合,
                danRedMaList: [],//胆码选号红球集合
                tuoRedMaList: [],//托码选号红求集合
                danBlueMaList: [],//胆码选号蓝球集合
                tuoBlueMaList: [],//托码选号蓝求集合
                redBallBox: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35'],
                blueBallBox: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
                textType: true, //标准选号提示文字
                danTuotextType: true, //胆拖选号提示文字
                selectZhu: {
                    zhuNum: '',//标注选号注数
                    zhuHe: []  //标准选号组合
                },
                danTuoZhu:{
                    zhuNum:'', //胆拖选号注数
                    zhuHe:[]  // 标准选号组合
                },
                data: {},
                memu: [
                    {
                        name: '走势图',
                        imgSrc: Trend
                    },
                    {
                        name: '玩法帮助',
                        imgSrc: GameDescription
                    },
                    {
                        name: '开奖结果',
                        imgSrc: LotteryResult
                    },
                    {
                        name: '隐藏遗漏',
                        imgSrc: Missing
                    }
                ]
            }
        },
        beforeCreate() {
            Indicator.open()
        },
        created() {
            this.getTicketInfoFn()
        },
        methods: {
            // 头部返回
            goBack() {
                this.$router.go(-1);
            },
            //通过路由来回填选中号码集合
            setSelectByrouter(){
                var that = this
                let ballList = this.$route.query.ballList
                if (ballList!=undefined){
                    if(localStorage.getItem('selectedIndex')=='0'){
                        ballList.forEach(item=>{
                            if(item.type == 'redBall'){
                                that.redBallList.push(item.num)
                            }
                            if(item.type == 'blueBall'){
                                that.blueBallList.push(item.num)
                            }
                        })
                        console.log(that.redBallList);
                        this.setSelectBallFn('biaoZhun')
                    }
                    if(localStorage.getItem('selectedIndex')=='1'){
                        ballList.forEach(item=>{
                            if(item.type == 'danRedBall'){
                                that.danRedMaList.push(item.num)
                            }
                            if(item.type == 'tuoRedBall'){
                                that.tuoRedMaList.push(item.num)
                            }
                            if(item.type == 'danBlueBall'){
                                that.danBlueMaList.push(item.num)
                            }
                            if(item.type == 'tuoBlueBall'){
                                that.tuoBlueMaList.push(item.num)
                            }
                        })
                        this.setSelectBallFn('dantuo')
                    }
                }
            },
            //回显选中球号
            setSelectBallFn(type){
                if (type == 'biaoZhun') {
                    var that = this
                    this.preList.forEach(item => {
                        that.redBallList.forEach(sunItem => {
                            if (item.num == sunItem) {
                                item.selected = true
                            }
                        })
                    })
                    this.postList.forEach(item => {
                        this.blueBallList.forEach(sunItem => {
                            if (item.num == sunItem) {
                                item.selected = true
                            }
                        })
                    })

                } else if (type == 'dantuo') {
                    this.danRedPreList.forEach(item => {
                        this.danRedMaList.forEach(sunItem => {
                            if (item.num == sunItem) {
                                item.selected = true
                            }
                        })
                    })
                    this.tuoRedPreList.forEach(item => {
                        this.tuoRedMaList.forEach(sunItem => {
                            if (item.num == sunItem) {
                                item.selected = true
                            }
                        })
                    })
                    this.danBluePostList.forEach(item => {
                        this.danBlueMaList.forEach(sunItem => {
                            if (item.num == sunItem) {
                                item.selected = true
                            }
                        })
                    })
                    this.tuoBluePostList.forEach(item => {
                        this.tuoBlueMaList.forEach(sunItem => {
                            if (item.num == sunItem) {
                                item.selected = true
                            }
                        })
                    })
                }
                this.viewText()
            },
            //获取详情
            getTicketInfoFn() {
                api.getTicketInfo('')
                    .then(res => {
                        if (res.code == 0) {
                            Indicator.close()
                            this.data = res.data
                            this.prizeList = res.data.prizeList
                            res.data.postList.forEach((item, index) => {
                                this.postList.push(
                                    {
                                        num: (index + 1)<10?'0'+(index + 1):(index + 1),
                                        missNum: item,
                                        selected: false
                                    }
                                )
                                this.danBluePostList.push(
                                    {
                                        num: (index + 1)<10?'0'+(index + 1):(index + 1),
                                        missNum: item,
                                        selected: false
                                    }
                                )
                                this.tuoBluePostList.push(
                                    {
                                        num: (index + 1)<10?'0'+(index + 1):(index + 1),
                                        missNum: item,
                                        selected: false
                                    }
                                )
                            })
                            res.data.preList.forEach((item, index) => {
                                this.preList.push(
                                    {
                                        num: (index + 1)<10?'0'+(index + 1):(index + 1),
                                        missNum: item,
                                        selected: false
                                    }
                                )
                                this.danRedPreList.push(
                                    {
                                        num: (index + 1)<10?'0'+(index + 1):(index + 1),
                                        missNum: item,
                                        selected: false
                                    }
                                )
                                this.tuoRedPreList.push(
                                    {
                                        num: (index + 1)<10?'0'+(index + 1):(index + 1),
                                        missNum: item,
                                        selected: false
                                    }
                                )

                            })
                        }
                        this.setSelectByrouter()
                        //this.getLocalStorageFn('biaoZhun')
                    })
            },
            //标准选号
            biaozhunSelect(item, type) {
                this.$set(item, 'selected', !item.selected)
                if (type == 'preList') { //点击前区
                    if (item.selected) {
                        this.redBallList.push(item.num);
                    } else {
                        var index = this.redBallList.indexOf(item.num);
                        if (index > -1) {
                            this.redBallList.splice(index, 1);
                        }
                    }
                }
                if (type == 'postList') { //点后区
                    if (item.selected) {
                        this.blueBallList.push(item.num)
                    } else {
                        var index = this.blueBallList.indexOf(item.num);
                        if (index > -1) {
                            this.blueBallList.splice(index, 1);
                        }
                    }
                }
                this.viewText()
                this.setLocalStorageFn('biaoZhun')
            },
            //提示信息
            viewText() {
                if(this.selectedIndex=='0'){
                    if (this.redBallList.length > 4 && this.blueBallList.length > 1) {
                        this.textType = false
                        this.selectZhu.zhuNum = getCombinationCount(this.redBallList.length, 5) * getCombinationCount(this.blueBallList.length, 2)
                    } else {
                        this.textType = true
                    }
                }
                if(this.selectedIndex=='1'){
                    console.log(this.danBlueMaList.length + this.tuoBlueMaList.length);
                    if (this.danRedMaList.length > 0 && this.tuoRedMaList.length > 1 && this.tuoBlueMaList.length > 1&& (this.danRedMaList.length+this.tuoRedMaList.length)>5 && (this.danBlueMaList.length+this.tuoBlueMaList.length)>1) {
                        this.danTuotextType = false
                        this.danTuoZhu.zhuNum = danTuoCount(this.danRedMaList.length,this.tuoRedMaList.length,this.danBlueMaList.length,this.tuoBlueMaList.length)
                    } else {
                        this.danTuotextType = true
                    }
                }
            },
            //机选
            machineSelection() {
                var that = this
                this.preList.forEach(sunItem => {
                    sunItem.selected = false
                })
                this.postList.forEach(sunItem => {
                    sunItem.selected = false
                })
                this.redBallList = []
                this.blueBallList = []
                this.redBallList = this.redBallList.concat(getArrayItems(this.redBallBox, 5))
                this.blueBallList = this.blueBallList.concat(getArrayItems(this.blueBallBox, 2))
                this.setSelectBallFn('biaoZhun')
                this.setLocalStorageFn('biaoZhun')
                setTimeout(function () {
                    that.goTouZhuConfirm(!this.textType)
                },500)

            },
            //胆拖选号
            danTuoSelect(item, index, ballType, type) {
                if (ballType == 'redBall') {
                    if (type == 'dan') {
                        let danRedIndex = this.danRedMaList.indexOf(item.num)
                        if(danRedIndex>-1){
                            this.$set(item, 'selected', !item.selected)
                            this.danRedMaList.splice(danRedIndex, 1);
                        }else if(this.danRedMaList.length<4) {
                            this.$set(item, 'selected', !item.selected)
                            this.danRedMaList.push(item.num);
                            this.tuoRedPreList[index].selected = false
                            let tuoIndex = this.tuoRedMaList.indexOf(item.num)
                            if (tuoIndex != -1) {
                                this.tuoRedMaList.splice(tuoIndex, 1);
                            }
                        }
                    }
                    if (type == 'tuo') {
                        let tuoRedIndex = this.tuoRedMaList.indexOf(item.num)
                        if(tuoRedIndex>-1){
                            this.$set(item, 'selected', !item.selected)
                            this.tuoRedMaList.splice(tuoRedIndex, 1);
                        }else {
                            this.$set(item, 'selected', !item.selected)
                            this.tuoRedMaList.push(item.num);
                            this.danRedPreList[index].selected = false
                            let danindex = this.danRedMaList.indexOf(item.num)
                            if (danindex != -1) {
                                this.danRedMaList.splice(danindex, 1);
                            }
                        }
                    }
                }
                if (ballType == 'blueBall') {
                    if (type == 'dan') {
                        let danBlueIndex = this.danBlueMaList.indexOf(item.num)
                        if(danBlueIndex>-1){
                            this.$set(item, 'selected', !item.selected)
                            this.danBlueMaList.splice(danBlueIndex, 1);
                        }else if(this.danBlueMaList.length<1){
                            this.$set(item, 'selected', !item.selected)
                            this.danBlueMaList.push(item.num);
                            this.tuoBluePostList[index].selected = false
                            let tuoIndex = this.tuoBlueMaList.indexOf(item.num)
                            if (tuoIndex != -1) {
                                this.tuoBlueMaList.splice(tuoIndex, 1);
                            }
                        }
                    }
                    if (type == 'tuo') {
                        let tuoBlueIndex =  this.tuoBlueMaList.indexOf(item.num)
                        if(tuoBlueIndex>-1){
                            this.$set(item, 'selected', !item.selected)
                            this.tuoBlueMaList.splice(tuoBlueIndex,1)
                        }else{
                            this.$set(item, 'selected', !item.selected)
                            this.tuoBlueMaList.push(item.num);
                            this.danBluePostList[index].selected = false
                            let danIndex = this.danBlueMaList.indexOf(item.num)
                            if (danIndex != -1) {
                                this.danBlueMaList.splice(danIndex, 1);
                            }
                        }
                    }
                }
                this.viewText()
                this.setLocalStorageFn('dantuo')
            },
            //存储 所选号码
            setLocalStorageFn(type) {
                if (type == 'biaoZhun') {
                    localStorage.setItem('redBallList', JSON.stringify(this.redBallList))
                    localStorage.setItem('blueBallList', JSON.stringify(this.blueBallList))
                } else if (type == 'dantuo') {
                    localStorage.setItem('danRedMaList', JSON.stringify(this.danRedMaList))
                    localStorage.setItem('tuoRedMaList', JSON.stringify(this.tuoRedMaList))
                    localStorage.setItem('danBlueMaList', JSON.stringify(this.danBlueMaList))
                    localStorage.setItem('tuoBlueMaList', JSON.stringify(this.tuoBlueMaList))
                }
            },
            //内存中取出所选号码
            getLocalStorageFn(type) {
                if (type == 'biaoZhun') {
                    var that = this
                    if (JSON.parse(localStorage.getItem('redBallList')) != null) {
                        this.redBallList = JSON.parse(localStorage.getItem('redBallList'))
                    }
                    if (JSON.parse(localStorage.getItem('redBallList')) != null) {
                        this.blueBallList = JSON.parse(localStorage.getItem('blueBallList'))
                    }
                    this.setSelectBallFn('biaoZhun')

                } else if (type == 'dantuo') {
                    if (JSON.parse(localStorage.getItem('danRedMaList')) != null) {
                        this.danRedMaList = JSON.parse(localStorage.getItem('danRedMaList'))
                    }
                    if (JSON.parse(localStorage.getItem('tuoRedMaList')) != null) {
                        this.tuoRedMaList = JSON.parse(localStorage.getItem('tuoRedMaList'))
                    }
                    if (JSON.parse(localStorage.getItem('danBlueMaList')) != null) {
                        this.danBlueMaList = JSON.parse(localStorage.getItem('danBlueMaList'))
                    }
                    if (JSON.parse(localStorage.getItem('tuoBlueMaList')) != null) {
                        this.tuoBlueMaList = JSON.parse(localStorage.getItem('tuoBlueMaList'))
                    }
                    this.setSelectBallFn('dantuo')
                }
                this.viewText()
            },
            //删除所选号
            deleFn() {
                if (this.selectedIndex == '0') {
                    if (this.redBallList.length > 0 || this.blueBallList.length > 0) {
                        MessageBox({
                            title: '温馨提示',
                            message: '确定删除所选号码吗?',
                            showCancelButton: true
                        }).then(action => {
                            if(this.redBallList.length>0){
                                this.preList.forEach(sunItem => {
                                    sunItem.selected = false
                                })
                            }
                            if(this.blueBallList.length>0){
                                this.postList.forEach(sunItem => {
                                    sunItem.selected = false
                                })
                            }
                            this.redBallList = []
                            this.blueBallList = []
                            this.setLocalStorageFn('biaoZhun')
                            this.viewText()
                        });
                    }
                }
                if (this.selectedIndex == '1') {
                    if (this.danRedMaList.length > 0 || this.tuoRedMaList.length > 0 || this.danBlueMaList.length > 0 || this.tuoBlueMaList.length > 0) {
                        MessageBox({
                            title: '温馨提示',
                            message: '确定删除所选号码吗?',
                            showCancelButton: true
                        }).then(action => {
                            if(this.danRedMaList.length>0){
                                this.danRedPreList.forEach(sunItem => {
                                    sunItem.selected = false
                                })
                            }
                            if(this.tuoRedMaList.length>0){
                                this.tuoRedPreList.forEach(sunItem => {
                                    sunItem.selected = false
                                })
                            }
                            if(this.danBlueMaList.length>0){
                                this.danBluePostList.forEach(sunItem => {
                                    sunItem.selected = false
                                })
                            }
                            if(this.tuoBlueMaList.length>0){
                                this.tuoBluePostList.forEach(sunItem => {
                                    sunItem.selected = false
                                })
                            }
                            this.danRedMaList = [],//胆码选号红球集合
                                this.tuoRedMaList = [],//托码选号红求集合
                                this.danBlueMaList = [],//胆码选号蓝球集合
                                this.tuoBlueMaList = [],//托码选号蓝求集合
                                this.setLocalStorageFn('dantuo')
                            this.viewText()
                        });
                    }
                }

            },
            //大乐透选号头部是否展开
            openOrclose(event) {
                if ($('#downImg').hasClass('tranform180')) {
                    $('#downImg').removeClass('tranform180')
                } else {
                    $('#downImg').addClass('tranform180')
                }
                this.collapseShow = !this.collapseShow
            },
            //投注方式选择
            numType(index) {
                localStorage.setItem('selectedIndex', '0')
                this.selectedIndex = index
                if (index == '1') {
                    this.getLocalStorageFn('dantuo')
                }
            },

            goNext(item) {
                if (item.name == '隐藏遗漏') {
                    this.historyMiss = !this.historyMiss
                }
            },
            // 投注确认
            goTouZhuConfirm(key){
                if(key){
                    localStorage.setItem('selectedIndex', JSON.stringify(this.selectedIndex))
                    this.dataProcess()
                    this.$router.push({
                        path:'/lottery/daletou/touZhuConfirm'
                    })
                }
            },
            // 所选球大小排序
            sortFn(Arr){
                let min;
                for(var i=0; i<Arr.length; i++){
                    for(var j=i; j<Arr.length;j++){
                        if(Arr[i]>Arr[j]){
                            min=Arr[j];
                            Arr[j]=Arr[i];
                            Arr[i]=min;
                        }
                    }
                }
                return Arr
            },
            // 去投注数据处理
            dataProcess(){
                var that = this
                let a = false
                let b = false
                let c = false
                let d = false
                let ballList = []
                let conformBallList = []
                // 判断所选号码是否与已有的重复
                if(JSON.parse(localStorage.getItem('conformBallList'))!=null){
                    conformBallList = JSON.parse(localStorage.getItem('conformBallList'))
                    if(this.selectedIndex=='0'){
                        conformBallList.forEach(item=>{
                            let redBallLength=0
                            let blueBallLength=0
                            item.ballList.forEach(sunItem=>{
                                if(sunItem.type == 'redBall'){
                                    redBallLength++
                                    that.redBallList.forEach( redItem=>{
                                        if(sunItem.num == redItem){
                                            if(that.redBallList.length == redBallLength){
                                                a = true
                                            }
                                        }
                                    })
                                }
                                if(sunItem.type == 'blueBall'){
                                    blueBallLength++
                                    that.blueBallList.forEach( blueItem=>{
                                        if(sunItem.num == blueItem){
                                            if(that.blueBallList.length == blueBallLength){
                                                b = true
                                            }
                                        }
                                    })
                                }
                            })
                        })
                        if(a&&b){
                            return
                        }
                    }
                    if(this.selectedIndex=='1'){
                        conformBallList.forEach(item=>{
                            let danRedBallLength=0
                            let tuoRedBallLength=0
                            let danBlueBallLength=0
                            let tuoBlueBallLength=0
                            item.ballList.forEach(sunItem=>{
                                if(sunItem.type == 'danRedBall'){
                                    danRedBallLength++
                                    that.danRedMaList.forEach( redItem=>{
                                        if(sunItem.num == redItem){
                                            if(that.danRedMaList.length == danRedBallLength){
                                                a = true
                                            }
                                        }
                                    })
                                }
                                if(sunItem.type == 'tuoRedBall'){
                                    tuoRedBallLength++
                                    that.tuoRedMaList.forEach( redItem=>{
                                        if(sunItem.num == redItem){
                                            if(that.tuoRedMaList.length == tuoRedBallLength){
                                                b = true
                                            }
                                        }
                                    })
                                }
                                if(sunItem.type == 'danBlueBall'){
                                    danBlueBallLength++
                                    that.danBlueMaList.forEach( redItem=>{
                                        if(sunItem.num == redItem){
                                            if(that.danBlueMaList.length == danBlueBallLength){
                                                c = true
                                            }
                                        }
                                    })
                                }
                                if(sunItem.type == 'tuoBlueBall'){
                                    tuoBlueBallLength++
                                    that.tuoBlueMaList.forEach( redItem=>{
                                        if(sunItem.num == redItem){
                                            if(that.tuoBlueMaList.length == tuoBlueBallLength){
                                                d = true
                                            }
                                        }
                                    })
                                }
                            })
                        })
                        if(a&&b&&c&&d){
                            return
                        }
                    }
                }
                // 将数据整理
                if(this.selectedIndex=='0'){
                    this.sortFn(this.redBallList).forEach(item=>{
                        ballList.push({
                            num:item,
                            type:'redBall'
                        })
                    })
                    this.sortFn(this.blueBallList).forEach(item=>{
                        ballList.push({
                            num:item,
                            type:'blueBall'
                        })
                    })
                    conformBallList.push({
                        ballList:ballList,
                        ballType:'biaozhun',
                        msg:{
                            zhuNum:this.selectZhu.zhuNum,
                            danFn:ballList.length>7?'复试':'单式',
                            bei:JSON.parse(localStorage.getItem('adds'))!=null?JSON.parse(localStorage.getItem('adds')).bei:1,
                            money:this.selectZhu.zhuNum*2,
                            baseMoney:this.selectZhu.zhuNum*2,
                        }
                    })
                }
                if(this.selectedIndex=='1'){
                    for(let i=0;i<this.sortFn(this.danRedMaList).length+1;i++){
                        if(i<this.danRedMaList.length){
                            ballList.push({
                                num:this.danRedMaList[i],
                                type:'danRedBall'
                            })
                        }else{
                            ballList.push({
                                num:'—',
                                type:'line'
                            })
                        }
                    }
                    for(let i=0;i<this.sortFn(this.tuoRedMaList).length+1;i++){
                        if(i<this.tuoRedMaList.length){
                            ballList.push({
                                num:this.tuoRedMaList[i],
                                type:'tuoRedBall'
                            })
                        }else{
                            ballList.push({
                                num:'—',
                                type:'line'
                            })
                        }
                    }
                    for(let i=0;i<this.sortFn(this.danBlueMaList).length+1;i++){
                        if(i<this.danBlueMaList.length){
                            ballList.push({
                                num:this.danBlueMaList[i],
                                type:'danBlueBall'
                            })
                        }else{
                            ballList.push({
                                num:'—',
                                type:'line'
                            })
                        }
                    }
                    for(let i=0;i<this.sortFn(this.tuoBlueMaList).length+1;i++){
                        if(i<this.tuoBlueMaList.length){
                            ballList.push({
                                num:this.tuoBlueMaList[i],
                                type:'tuoBlueBall'
                            })
                        }
                    }
                    conformBallList.push({
                        ballList:ballList,
                        ballType:'dantuo',
                        msg:{
                            zhuNum:this.danTuoZhu.zhuNum,
                            danFn:ballList.length>7?'复试':'单式',
                            bei:JSON.parse(localStorage.getItem('adds'))!=null?JSON.parse(localStorage.getItem('adds')).bei:1,
                            money:this.danTuoZhu.zhuNum*2,
                            baseMoney:this.danTuoZhu.zhuNum*2,
                        }
                    })
                }
                localStorage.setItem('conformBallList',JSON.stringify(conformBallList))
            },
            //获得注数
            combination: (arr /*n需要组合的一维数组*/, num /*m需要取几个元素来组合*/, fun /*对组合后的元素的处理函数，如全排列permutate*/) => {
                /*这里假设num最大值为10 一般A(n,m)中的m应该不会太大 */
                if (arr.length < num || num > 10) {
                    return [];
                }
                var variable = ["a", "b", "c", "d", "e", "f", "g", "h", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u"];
                var replaceStr = "#$#";
                var str = " var arr=arguments[0]; var fun=arguments[1];  var ret=[]; for (var a = 0; a < arr.length; a++) { " + replaceStr + " } return ret;"
                for (var i = 1; i < num; i++) {
                    str = str.replace(replaceStr, " for (var " + variable[i] + " =" + variable[i - 1] + "+ 1; " + variable[i] + " < arr.length; " + variable[i] + "++) { " + replaceStr + "  }")
                }
                var temp = " var temp= []; ";
                for (var i = 0; i < num; i++) {
                    temp += "temp.push(arr[" + variable[i] + "]); ";
                }
                if (fun) {
                    temp += " ret.push(fun(temp)); ";
                } else {
                    temp += " ret.push(temp); ";
                }
                str = str.replace(replaceStr, temp);
                return (new Function(str)).apply(null, [arr, fun]);
            },
        },
        beforeRouteLeave(to, from, next) {
            next()
        }
    }
</script>