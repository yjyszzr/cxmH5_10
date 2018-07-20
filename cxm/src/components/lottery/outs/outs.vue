<template>
    <div class="main-body">
        <div class="event">
            <p class="title"> <i class="vertical-line"></i>事件</p>
            <div>
                <div class="event-box">
                    <div class="img-star-box">
                        <img class="img-star" src="./images/star@3x.png" alt="">
                    </div>

                    <div class=tree-ul >
                        <p class="line-one"></p>
                        <div class="tree-li">
                            <div class="left-box">
                                <div class="event-card">
                                    <!--吃盘-->
                                    <!--<img class="card-img" src="./images/Yellowcard_2@3x.png" alt="">-->
                                    <!--入球、乌龙球-->
                                    <img class="ball-img" src="./images/Owngoals_2@3x.png" alt="">
                                </div>
                                <!--点球-->
                                <div class="point-ball">
                                    <img class="ball-img" src="./images/Owngoals_2@3x.png" alt="">
                                </div>
                                <!--比分-->
                                <div class="score">
                                    <span class="score-text">1:0</span>
                                </div>
                                <!--人-->
                                <div class=person>
                                    <span class="person-text">九巴</span>
                                </div>
                            </div>
                            <div class="circle">
                                12
                            </div>
                            <div class="right-box">
                                <div class="event-card">
                                    <!--吃盘-->
                                    <!--<img class="card-img" src="./images/Yellowcard_2@3x.png" alt="">-->
                                    <!--入球、乌龙球-->
                                    <img class="ball-img" src="./images/Owngoals_2@3x.png" alt="">
                                </div>
                                <!--点球-->
                                <div class="point-ball">
                                    <img class="ball-img" src="./images/Owngoals_2@3x.png" alt="">
                                </div>
                                <!--比分-->
                                <div class="score">
                                    <span class="score-text">1:0</span>
                                </div>
                                <!--人-->
                                <div class=person>
                                    <span class="person-text">九巴</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="event">
            <p class="title"> <i class="vertical-line"></i>技术统计</p>
            <div class="skill-tongji">
                <div class="skill-box">
                    <div class="skill-box-head skill">
                        <div class="left-text">
                            <img src="./images/Owngoals_1@3x.png" alt="">
                            <p class="name">西班牙</p>
                        </div>
                        <div class="center-text">
                            <p>vs</p>
                        </div>
                        <div class="right-text">
                            <img src="./images/Owngoals_1@3x.png" alt="">
                            <p class="name">西班牙</p>
                        </div>
                    </div>

                    <div class="skill-box-body skill">
                        <div class="left-text">
                            <div class="bar-out">
                                <div class="bar-in"></div>
                            </div>
                            <span class="bar-text">60%</span>
                        </div>
                        <div class="center-text ">
                            <p>控球率</p>
                        </div>
                        <div class="right-text">
                            <div class="bar-out">
                                <div class="bar-in"></div>
                            </div>
                            <span class="bar-text">60%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import api from "../../../fetch/api"
    export default {
        name: "outs",
        data(){
            return{
                setIntervalTime:''
            }
        },
        created(){
            this.getInfo()
        },
        methods:{
            // 获取比赛赛况
           getInfo(){
               var that = this
               let data = {
                   matchId: that.$route.query.id
               }
               api.info(data)
                   .then(res=>{
                       if(res.code == 0){
                           console.log(res);
                       }
                   })
               that.setInterval = setInterval(function () {
                   api.info(data)
                       .then(res=>{
                           if(res.code == 0){
                               console.log(res);
                           }
                       })
               },60000)
           }
        },
        destroyed(){
            clearInterval(this.setInterval)
        }
    }

</script>

<style scoped lang="scss">
    @import '../../../assets/css/function.scss';
    .main-body{
        width: 100%;
        margin: 0 auto;
        .skill-tongji{
            margin-top: px2rem(40px);
        }
        .event{
            background-color: #FFFFFF;
            margin-top:px2rem(20px) ;
            padding: 0 px2rem(20px);
            padding-bottom: px2rem(40px);
        }
        .vertical-line{
            position: absolute;
            display: inline-block;
            height: px2rem(26px);
            width: px2rem(3px);
            background-color: #f08c1e;
            top: px2rem(21px);
            left: px2rem(10px);
        }
        .title{
            position: relative;
            padding-left: .3rem;
            line-height: px2rem(72px);
            border-bottom: 1px solid #9f9f9f;
            font-size: px2rem(26px);
            color: #9f9f9f;
        }
        .event-box{
            overflow: hidden;
            display: flex;

            flex-direction: column;
            align-items: center;
            .line-one{
                height:px2rem(42px);
                width: 1px;
                border-left: 1px solid rgb(240, 140,30);
            }
            .img-star-box {
                margin-top: px2rem(72px);
                height: px2rem(54px);
                width: px2rem(54px);
                /*background-color: rgba(240, 140, 30, .5);*/
                .img-star {
                    height: 100%;
                    width: 100%;
                }
            }
            .tree-ul{
                display: flex;
                align-items: center;
                flex-direction: column;
               .tree-li{
                   display: flex;
                   justify-content: center;
                   flex-direction: row;
                   .person-text{
                       font-size: px2rem(26px);
                       color: #505050;
                   }
                   .score-text{
                       font-size: px2rem(26px);
                       color: #f08c1e;
                   }
                   .card-img{
                       height: px2rem(32px);
                       width: px2rem(32px);
                   }
                   .ball-img{
                       height: px2rem(36px);
                       width: px2rem(36px);
                   }

                   .circle{
                       line-height: px2rem(54px);
                       width: px2rem(54px);
                       border: 2px solid #f08c1e;
                       border-radius: 100%;
                       font-size: px2rem(24px);
                       color: #505050;
                       text-align: center;
                   }
                   .left-box{
                       display: flex;
                       flex-direction: row-reverse;
                       align-items: center;
                       width: px2rem(300px);
                       .event-card{
                           margin-right:px2rem(20px) ;
                       }
                       .point-ball{
                           margin-right: px2rem(10px);
                       }
                       .score{
                           margin-right: px2rem(16px);
                       }
                       .person{
                           position: absolute;
                           left: px2rem(50px);
                       }
                   }
                   .right-box{
                       display: flex;
                       flex-direction: row;
                       align-items: center;
                       width: px2rem(300px);
                       .event-card{
                           margin-left:px2rem(20px) ;
                       }
                       .point-ball{
                           margin-left: px2rem(10px);
                       }
                       .score{
                           margin-left: px2rem(16px);
                       }
                       .person{
                           position: absolute;
                           right: px2rem(50px);
                       }
                   }

               }
            }
        }
        .skill-box{
            .skill{
                display: flex;
                justify-content: center;
            }
            .center-text{
                display: flex;
                align-items: center;
                font-size: px2rem(28px);
                color: #9f9f9f;
            }
            .left-text{
                display: flex;
                flex-direction:row-reverse ;
                width: px2rem(300px);
                align-items: center;
                .name{
                    font-size: px2rem(28px);
                    color: #505050;
                    margin-right: px2rem(28px);
                }
                img{
                    margin-right: px2rem(70px);
                }
            }
            .right-text{
                display: flex;
                flex-direction:row ;
                width: px2rem(300px);
                align-items: center;
                .name{
                    font-size: px2rem(28px);
                    color: #505050;
                    margin-left: 28px;
                }
                img{
                    margin-left: px2rem(70px);
                }
            }
            .skill-box-head{
                img{
                    height: px2rem(60px);
                    width: px2rem(60px);
                }
            }
            .skill-box-body{
                margin-top: px2rem(50px);
                padding-bottom: px2rem(50px);
                .bar-out{
                    height: px2rem(4px);
                    width: px2rem(206px);
                    background-color: #666666;
                    display: flex;
                    flex-direction: row-reverse;
                }
                .bar-in{
                    height: 100%;
                    width: px2rem(106px);
                    background-color: #ea5504;
                }
                .center-text{
                    font-size: px2rem(26px);
                    color: #505050;
                    width: px2rem(168px);
                    justify-content: center;
                }
                .left-text{
                    .bar-out{
                        flex-direction: row-reverse;
                    }
                    .bar-text{
                       margin-right: px2rem(10px);
                    }
                }
                .right-text{
                    .bar-out{
                        flex-direction: row;
                    }
                    .bar-text{
                        margin-left: px2rem(10px);
                    }
                }
            }
        }
    }

</style>