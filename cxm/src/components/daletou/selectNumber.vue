<template>
    <div class="select-num">
        <!--头部开始-->
        <div class="head">
            <span class="back-img" @click="goBack()"><img src="../../assets/img/ret.png" alt=""></span>
            <div class="head-text" @click="openOrclose()">
                <span>彩小秘·标准选号</span>
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
                    <p class="history-p">历史开奖 <span class="arrow_right"><img src="../../assets/img/arange.png"
                                                                             alt=""></span></p>
                </div>
                <!--标准选号-->
                <div class="biaozhun" v-if="selectedIndex=='0'">
                    <div class="selection">
                        <div class="phone" @click = "machineSelection()">
                            <span class="phone-img-box"><img src="./images/IntelligentChoice@3x.png" alt=""></span>
                            <span>机选</span>
                        </div>
                        <div class="bonus-box">
                            奖池： <span>{{data.prizes}}</span> 元
                        </div>
                    </div>
                    <div class="ball-box">
                        <ul class="red-ball-ul ball-ul">
                            <li class="ball-li" v-for="(item,index) in preList" :key=index @click="biaozhunSelect(item,'preList')">
                                <span class="ball red-ball" :class="item.selected?'curRedBall':''">{{item.num}}</span>
                                <span class="miss" v-if="historyMiss">{{item.missNum}}</span>
                            </li>
                        </ul>
                        <ul class="blue-ball-ul ball-ul">
                            <li class="ball-li" v-for="(item,index) in postList" :key=index @click="biaozhunSelect(item,'postList')">
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
                            <li class="ball-li" v-for="(item,index) in preList" :key=index @click="danTuoSelect(item,'preList','dan')" >
                                <span class="ball red-ball" :class="item.selected?'curRedBall':''">{{item.num}}</span>
                                <span class="miss" v-if="historyMiss">{{item.missNum}}</span>
                            </li>
                        </ul>
                        <p class="name-ball red-two">拖码-红球，至少选2个</p>
                        <ul class="red-ball-ul ball-ul">
                            <li class="ball-li" v-for="(item,index) in preList" :key=index @click="danTuoSelect(item,'preList','tuo')">
                                <span class="ball red-ball" :class="item.selected?'curRedBall':''">{{item.num}}</span>
                                <span class="miss" v-if="historyMiss">{{item.missNum}}</span>
                            </li>
                        </ul>
                        <p class="name-ball">胆码-篮球，至多选1个</p>
                        <ul class="blue-ball-ul ball-ul">
                            <li class="ball-li" v-for="(item,index) in postList" :key=index @click="danTuoSelect(item,'postList','dan')">
                                <span class="ball blue-ball" :class="item.selected?'curBlueBall':''">{{item.num}}</span>
                                <span class="miss" v-if="historyMiss">{{item.missNum}}</span>
                            </li>
                        </ul>
                        <p class="name-ball">胆码-篮球，至多选2个</p>
                        <ul class="blue-ball-ul ball-ul">
                            <li class="ball-li" v-for="(item,index) in postList" :key=index @click="danTuoSelect(item,'postList','tuo')">
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
                <p v-if="textType">请至少选择 <span class="red">5</span>个红球，<span class="blue">2</span>个篮球</p>
                <p v-if="!textType">共<span class="red">{{selectZhu.zhuNum}}</span>注，合计<span class="blue">{{selectZhu.zhuNum*2}}</span>元</p>
            </div>
            <div class="ok">
                确定
            </div>
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
        .mybox-leave-active, .mybox-enter-active {
            transition: all .5s ease;
        }
        .mybox-leave-active, .mybox-enter {
            height: 0px !important;
        }
        .mybox-leave, .mybox-enter-active {
            height: 100%;
        }
        .ceng-enter-active,
        .ceng-leave-active {
            transition: opacity 0.3s;
        }
        .ceng-enter,
        .ceng-leave-active {
            opacity: 0;
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
        .fade-enter-active,
        .fade-leave-active {
            transition: opacity 0.3s;
        }
        .fade-enter,
        .fade-leave-active {
            opacity: 0;
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
                background-color: #ea5504;
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
    import {getCombinationCount,getArrayItems} from '../../util/common'
    import {MessageBox, Popup} from 'mint-ui';
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
                popdantuo: false,//但拖介绍
                historyMiss: true,//显示历史遗漏
                selectedIndex: '0',//但拖选好
                postList: [],//后区遗漏 ,
                preList: [],//前区遗漏
                prizeList: [],//历史中奖，
                redBallList: [],//选中红球集合
                blueBallList: [],//选中篮球集合,
                danRedMaList:[],//胆码红球集合
                tuoRedMaList:[],//托码红求集合
                danBlueMaList:[],//胆码蓝球集合
                tuoBlueMaList:[],//托码蓝求集合
                redBallBox:['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35'],
                blueBallBox:['01','02','03','04','05','06','07','08','09','10','11','12'],
                textType: true,
                selectZhu:{
                    zhuNum:'',
                    zhuHe:[]
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
        created() {
            this.getTicketInfoFn()
        },
        methods: {
            // 获取详情
            getTicketInfoFn() {
                api.getTicketInfo('')
                    .then(res => {
                        if (res.code == 0) {
                            this.data = res.data
                            this.prizeList = res.data.prizeList
                            res.data.postList.forEach((item, index) => {
                                this.postList.push(
                                    {
                                        num: index + 1,
                                        missNum: item,
                                        selected: false
                                    }
                                )
                            })
                            res.data.preList.forEach((item, index) => {
                                this.preList.push(
                                    {
                                        num: index + 1,
                                        missNum: item,
                                        selected: false
                                    }
                                )

                            })
                        }
                    })

                this.getLocalStorageFn()
            },
            //标准选号
            biaozhunSelect(item, type) {
                this.$set(item, 'selected', !item.selected)
                if (type == 'preList') { //点击前区
                    if (item.selected) {
                        this.redBallList.push(item.num)
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
            viewText(){
                if (this.redBallList.length > 4 && this.blueBallList.length > 1) {
                    this.textType = false
                    this.selectZhu.zhuNum=getCombinationCount(this.redBallList.length, 5)*getCombinationCount(this.blueBallList.length, 2)
                } else {
                    this.textType = true
                }
            },
            //机选
            machineSelection(){
                var that = this
                this.preList.forEach(sunItem=>{
                    sunItem.selected = false
                })
                this.postList.forEach(sunItem=>{
                    sunItem.selected = false
                })
                this.redBallList=[]
                this.blueBallList=[]
                this.redBallList = this.redBallList.concat(getArrayItems(this.redBallBox, 5))
                this.blueBallList = this.blueBallList.concat(getArrayItems(this.blueBallBox, 2))
                getArrayItems(this.redBallBox, 5).forEach(item=>{
                    that.preList.forEach(sunItem=>{
                        if(sunItem.num == item){
                            sunItem.selected = true
                        }
                    })
                })
                getArrayItems(this.blueBallBox, 2).forEach(item=>{
                    that.postList.forEach(sunItem=>{
                        if(sunItem.num == item){
                            sunItem.selected = true
                        }
                    })
                })
                this.viewText()
                this.setLocalStorageFn('biaoZhun')
            },
            // 存储 所选号码
            setLocalStorageFn(type){
                if(type == 'biaoZhun'){
                    localStorage.setItem('redBallList', JSON.stringify(this.redBallList))
                    localStorage.setItem('blueBallList', JSON.stringify(this.blueBallList))
                }else if(type == 'dantuo'){
                    localStorage.setItem('danRedMaList', JSON.stringify(this.danRedMaList))
                    localStorage.setItem('tuoRedMaList', JSON.stringify(this.tuoRedMaList))
                    localStorage.setItem('danBlueMaList', JSON.stringify(this.danBlueMaList))
                    localStorage.setItem('tuoBlueMaList', JSON.stringify(this.tuoBlueMaList))
                }
            },
            // 取出所选号码
            getLocalStorageFn(type){
                if(type == 'biaoZhun'){
                    this.redBallList = JSON.parse(localStorage.getItem(redBallList))
                    this.blueBallList = JSON.parse(localStorage.getItem(redBallList))
                    this.preList.forEach(item=>{
                        this.redBallList.forEach(sunItem=>{
                            if(item.num==sunItem){
                                item.selected = true
                            }
                        })
                    })
                    this.postList.forEach(item=>{
                        this.blueBallList.forEach(sunItem=>{
                            if(item.num==sunItem){
                                item.selected = true
                            }
                        })
                    })
                }else if(type == 'dantuo'){
                    this.danRedMaList = JSON.parse(localStorage.getItem(danRedMaList))
                    this.tuoRedMaList = JSON.parse(localStorage.getItem(tuoRedMaList))
                    this.danBlueMaList = JSON.parse(localStorage.getItem(danBlueMaList))
                    this.tuoBlueMaList = JSON.parse(localStorage.getItem(tuoBlueMaList))
                }
            },
            //列出每注
            combination: (arr /*n需要组合的一维数组*/ , num /*m需要取几个元素来组合*/ , fun /*对组合后的元素的处理函数，如全排列permutate*/ ) => {
                /*这里假设num最大值为10 一般A(n,m)中的m应该不会太大 */
                if(arr.length < num || num > 10) {
                    return [];
                }
                var variable = ["a", "b", "c", "d", "e", "f", "g", "h", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u"];
                var replaceStr = "#$#";
                var str = " var arr=arguments[0]; var fun=arguments[1];  var ret=[]; for (var a = 0; a < arr.length; a++) { " + replaceStr + " } return ret;"
                for(var i = 1; i < num; i++) {
                    str = str.replace(replaceStr, " for (var " + variable[i] + " =" + variable[i - 1] + "+ 1; " + variable[i] + " < arr.length; " + variable[i] + "++) { " + replaceStr + "  }")
                }
                var temp = " var temp= []; ";
                for(var i = 0; i < num; i++) {
                    temp += "temp.push(arr[" + variable[i] + "]); ";
                }
                if(fun) {
                    temp += " ret.push(fun(temp)); ";
                } else {
                    temp += " ret.push(temp); ";
                }
                str = str.replace(replaceStr, temp);
                return(new Function(str)).apply(null, [arr, fun]);
            },
            //删除所选号
            deleFn() {
                if(this.redBallList.length>0||this.blueBallList.length>0){
                    MessageBox({
                        title: '温馨提示',
                        message: '确定删除所选号码吗?',
                        showCancelButton: true
                    }).then(action => {
                        this.redBallList=[]
                        this.blueBallList=[]
                        this.preList.forEach(sunItem=>{
                            sunItem.selected = false
                        })
                        this.postList.forEach(sunItem=>{
                            sunItem.selected = false
                        })
                        this.viewText()
                    });
                }
            },
            // 头部返回
            goBack() {
                this.$router.go(-1);
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
            //种类选择
            numType(index) {
                this.selectedIndex = index
            },
            goNext(item) {
                if (item.name == '隐藏遗漏') {
                    this.historyMiss = !this.historyMiss
                }
            }

        },
        beforeRouteLeave(to, from, next) {
            next()
        }
    }
</script>

