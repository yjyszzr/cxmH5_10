<template>
    <div class="select-num">
        <!--头部开始-->
        <div class="head">
            <span class="back-img" @click = "goBack()"><img src="../../assets/img/ret.png" alt=""></span>
            <div class="head-text">
                <span>彩小秘·标准选号</span>
                <span class="header-down" @click="openOrclose()"><img id="downImg" src="../../assets/img/freebuy_img/Collapse@3x.png" alt=""></span>
            </div>
            <div>
                <span class="memu-btn" @click="popShow = !popShow"><img src="./images/More@3x.png" alt=""></span>
            </div>
        </div>
        <!--躯干-->
        <div class="body">
            <div class="body-title" @click = "popupVisible = !popupVisible">
                <p>2018期 截止时间 07-11 19：00</p>
                <p class="history-p">历史开奖 <span class="arrow_right"><img src="../../assets/img/arange.png" alt=""></span></p>
            </div>
            <div class="biaozhun" v-if="false">
                <div class="selection">
                    <div class="phone">
                        <span class="phone-img-box"><img src="./images/IntelligentChoice@3x.png" alt=""></span>
                        <span>机选</span>
                    </div>
                    <div class="bonus-box">
                        奖池： <span>59亿888万</span>
                    </div>
                </div>
                <div class="ball-box">
                    <ul class="red-ball-ul ball-ul">
                        <li class="ball-li">
                            <span class="ball red-ball">01</span>
                            <span class="miss">1</span>
                        </li>
                    </ul>
                    <ul class="blue-ball-ul ball-ul">
                        <li class="ball-li">
                            <span class="ball blue-ball">01</span>
                            <span class="miss">1</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="dantuo">
                <p class="what-dantuo"> 什么是胆拖？</p>
                <div class="selection">
                    <p class="desceibe">胆码-红球，至多选4个，至少选1个</p>
                    <div class="bonus-box">
                        奖池： <span>59亿888万</span>
                    </div>
                </div>
                <div class="ball-box">
                    <ul class="red-ball-ul ball-ul">
                        <li class="ball-li">
                            <span class="ball red-ball">01</span>
                            <span class="miss">1</span>
                        </li>
                    </ul>
                    <ul class="blue-ball-ul ball-ul">
                        <li class="ball-li">
                            <span class="ball blue-ball">01</span>
                            <span class="miss">1</span>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
        <!--底部-->
        <div class="footer">
            <div class="dele">
                <i class="iconfont icon-icon-26"></i>
            </div>
            <div class="text">
                请至少选择 <span class="red">5</span>个红球，<span class="blue">2</span>个篮球
            </div>
            <div class="ok">
                确定
            </div>
            <!--<span><img src="./" alt=""></span>-->
        </div>
        <!--选号方式-->
        <div class="collspce" >
            <transition name="mybox">
                <div class="title-collspce" v-if="collapseShow">
                    <p class="btn-box">标准选号 <span class="img-box"><img src="./images/Check@3x.png" alt=""></span></p>
                    <p class="btn-box">胆拖选号 <span class="img-box"><img src="./images/Check@3x.png" alt=""></span></p>
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
                        <li v-for="(item,index) in memu" @click="goNext()"><i><img :src="item.imgSrc" alt=""></i>{{item.name}}</li>
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
                        <li class="history-li">
                            <span>20180808期</span>
                            <ul class="sun-ul">
                                <li>09</li>
                                <li>90</li>
                                <li>78</li>
                                <li>67</li>
                                <li>67</li>
                                <li>56</li>
                                <li>67</li>
                            </ul>
                        </li>
                        <li class="history-li">
                            <span>20180808期</span>
                            <ul class="sun-ul">
                                <li>09</li>
                                <li>90</li>
                                <li>78</li>
                                <li>67</li>
                                <li>67</li>
                                <li>56</li>
                                <li>67</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </mt-popup>
        </div>


    </div>
</template>
<style scoped lang="scss">
    @import "../../assets/css/function.scss";
    .select-num{
        .head{
            overflow: hidden;
            height: px2rem(100px);
            background: #f4f4f4;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .back-img{
                display: inline-block;
                height:px2rem(30px) ;
                width:px2rem(30px) ;
                margin-left: px2rem(50px);
                img{
                    width: 100%;
                }
            }
            .head-text{
                display: flex;
                align-items: center;
                font-size: px2rem(32px);
                color: #505050;
                .header-down{
                    display: inline-block;
                    margin-left: px2rem(10px);
                    height:px2rem(30px) ;
                    width:px2rem(30px) ;
                    img{
                        width: 100%;
                    }
                }
            }
            .memu-btn{
                display: inline-block;
                height: px2rem(30px);
                width: px2rem(30px);
                margin-right: px2rem(30px);
                img{
                    width: 100%;
                }
            }

        }
        .tranform180{
            transform:rotate(180deg)
        }
        .mybox-leave-active,.mybox-enter-active{
            transition:  all .5s ease;
        }
        .mybox-leave-active,.mybox-enter{
            height:0px !important;
        }
        .mybox-leave,.mybox-enter-active{
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
        .meng-cheng{
            z-index: 1;
            position: absolute;
            top: px2rem(100px);
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0,0,0,.5);
        }
        /*top:px2rem(100px);*/
        .title-collspce{
            z-index: 2;
            position: absolute;
            width: 100%;
            height: px2rem(100px);
            border-top: 1px solid #9f9f9f;
            display: flex;
            justify-content:center;
            flex-direction: row;
            align-items: center;
            overflow: hidden;
            background: #f4f4f4;
            .btn-box{
                line-height: px2rem(60px);
                width: px2rem(180px);
                text-align: center;
                font-size: px2rem(26px);
                color: #ea5504;
                border: 1px solid #ea5504;
                position: relative;
                margin:  0 px2rem(30px);
                .img-box{
                    display: inline-block;
                    height:px2rem(36px);
                    width: px2rem(36px);
                    position:absolute;
                    bottom: -1px;
                    right: -1px;
                    img{
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
        .pop{
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0,0,0,0.5);
            .pop-body{
                position: absolute;
                /*height: px2rem(200px);*/
                /*width: px2rem(100px);*/
                background-color: #ffffff;
                right: px2rem(20px);
                top: px2rem(100px);
            }
            .pop-body::before{
                width:0;
                height:0;
                border-width:0 px2rem(20px) px2rem(20px) ;
                border-style:solid;
                border-color:transparent transparent #ffffff;/*透明 透明  灰*/

                top: -10.5px;
                right: 0px;
                position: absolute;
                content: "";
            }
        }
        .memu-ul{
            width: px2rem(183px);
            li{
                height:px2rem(72px);
                border-bottom: 1px solid #555555;
                display: flex;
                align-items: center;
                justify-content: left;
                i{
                    height: px2rem(30px);
                    width: px2rem(30px);
                    display: inline-block;
                    margin: 0 px2rem(10px);
                    img{
                        width: 100%;
                    }
                }
            }
        }
        .history{
            width: 100%;
            .mint-popup{
                width: 100%;
            }
            .history-box{
                height: px2rem(800px);
                overflow: auto;
                .history-ul{
                    padding: 0 px2rem(15px);
                    .history-li{
                        padding-left: 10px;
                        display: flex;
                        flex-direction: row;
                        line-height: px2rem(72px);
                        border-bottom: 1px solid #e8e8e8;
                        font-size: px2rem(28px);
                        span{
                            padding-right: px2rem(50px);
                            color: #787878;
                            font-size: px2rem(26px);
                        }
                        .sun-ul{
                            display: flex;
                            flex-direction: row;
                            align-items: center;
                            li{
                                padding: 0 px2rem(10px);
                            }
                        }
                    }
                }
            }


        }
        .body{
            position: absolute;
            top: px2rem(100px);
            bottom: px2rem(100px);
            overflow: auto;
            -webkit-overflow-scrolling: touch !important;
            box-sizing: border-box;
            width: 100%;
            height: px2rem(500px);
            background-color: #ffffff;
            padding: 0 px2rem(8px);
            .body-title{
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: px2rem(80px);
                color: #9f9f9f;
                font-size: px2rem(26px);
                border-bottom: 1px solid #787878;
                padding: 0 px2rem(15px);
            }
            .dantuo{
                .desceibe{
                    color: #c7c7c7;
                }
            }
            .selection{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                height: px2rem(100px);
                padding: 0 px2rem(20px);
                .phone{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: px2rem(60px);
                    width: px2rem(168px);
                    background: rgba(245,145,30,.2);
                    border-radius: px2rem(20px);
                    font-size: px2rem(26px);
                    color: #f5911e;
                    .phone-img-box{
                        padding-right: px2rem(20px);
                        display: inline-block;
                        height:px2rem(36px) ;
                        width: px2rem(36px);
                        overflow: hidden;
                        img{
                            width: 100%;
                        }
                    }
                }
                .bonus-box{
                    font-size: px2rem(26px);
                    color: #787878;
                    span{
                        color: #ea5504;
                    }
                }
            }
            .ball-box{
                margin-top: px2rem(20px);
                .red-ball-ul{
                    border-bottom: 1px solid #c7c7c7;
                    .red-ball{
                        color: #eb1c24;
                    }
                }
                .blue-ball-ul{
                    margin-top: px2rem(20px) ;
                    .blue-ball{
                        color:#0081cc ;
                    }
                }
                .ball-ul{
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    flex-wrap: wrap;
                    .ball-li{
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        padding: 0 px2rem(14px);
                    }
                    .ball{
                        display: inline-block;
                        line-height:px2rem(72px) ;
                        width:px2rem(72px) ;
                        border-radius: 100%;
                        border: 1px solid #c7c7c7;
                        text-align: center;
                        font-size: px2rem(30px);

                    }
                    .miss{
                        margin-top: px2rem(10px);
                        color: #c7c7c7;
                        font-size:px2rem(22px);
                        margin-bottom: px2rem(10px);
                    }

                }
            }
        }
        .footer{
            box-sizing: border-box;
            width: 100%;
            background-color: #ffffff;
            position: absolute;
            bottom: 0;
            display: flex;
            height: px2rem(100px);
            justify-content: space-between;
            align-items: center;
            .dele{
                width: px2rem(100px);
                border-right: 1px solid #c7c7c7;
                text-align: center;
                line-height: px2rem(70px);
                i{
                    font-size: px2rem(40px);
                }
            }
            .text{
                color: #787878;
                .red{
                    color: #EA5504;
                }
                .blue{
                    color: #0081cc;
                }
            }
            .ok{
                width: px2rem(250px);
                text-align: center;
                line-height: px2rem(100px);
                color: #ffffff;
                font-size: px2rem(28px);
                background-color: #ea5504;
            }
        }
        .history-p{
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .arrow_right{
            margin-left: px2rem(10px);
            height: px2rem(28px);
            width: px2rem(15px);
            img{
                width: 100%;
            }
        }
    }
</style>
<script>
    import GameDescription from "./images/GameDescription@3x.png"
    import LotteryResult from "./images/LotteryResult@3x.png"
    import Trend from "./images/Trend@3x.png"
    import Missing from "./images/Missing@3x.png"
    export default {
        name: "select-number",
        data(){
          return{
              popShow : false, //菜单列表弹窗
              collapseShow: false, //折叠选号方式
              popupVisible:false,//历史开奖列表
              memu:[
                  {
                      name:'走势图',
                      imgSrc:Trend
                  },
                  {
                      name:'玩法帮助',
                      imgSrc: GameDescription
                  },
                  {
                      name:'开奖结果',
                      imgSrc:LotteryResult
                  },
                  {
                      name:'隐藏遗漏',
                      imgSrc:Missing
                  }
              ]
          }
        },
        created(){

        },
        methods:{
            // 头部返回
            goBack() {
                this.$router.go(-1);
            },
            //大乐透选号头部是否展开
            openOrclose(event){
                if($('#downImg').hasClass('tranform180')){
                    $('#downImg').removeClass('tranform180')
                }else{
                    $('#downImg').addClass('tranform180')
                }
                this.collapseShow = !this.collapseShow
            },
            goNext(){
                alert("ewee")
            }

        },
        beforeRouteLeave(to, from, next) {
            // next()
            // if(to.path!='/lottery/teamDetail'){
            //     this.$store.dispatch("getMarkShow",false)
            //     this.$store.dispatch("getMarkShowType",'')
            //     this.$store.dispatch("getLeagueIds",'')
            //     this.$store.dispatch("getMarkDateVal",'')
            // }
        }
    }
</script>

