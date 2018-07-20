<template>
    <div class="main-body">
        <div class="event">
            <p class="title"> <i class="vertical-line"></i>事件</p>
            <div>
                <div class="event-box">
                    <!--进程图-->
                    <div class="img-star-box">
                        <img class="img-star" src="./images/star@3x.png" alt="">
                    </div>
                    <div class="tree-ul" v-for="(item,index) in eventList" :key=index>
                        <p class="line-one"></p>
                        <div class="tree-li">
                            <div class="left-box">
                                <template v-if='item.isHa == "h"'>
                                    <div class="event-card">
                                        <!--红盘-->
                                        <img v-show='item.eventCode == "RC"' class="card-img" src="./images/redcard_2@3x.png" alt="">
                                        <!--黄盘-->
                                        <img v-show='item.eventCode == "YC"' class="card-img" src="./images/Yellowcard_2@3x.png" alt="">
                                        <!--二黄变红-->
                                        <img v-show='item.eventCode == "Y2C"' class="card-img" src="./images/Redden@3x.png" alt="">
                                        <!--换上-->
                                        <img v-show='item.eventCode == "SI"' class="up-down-img " src="./images/Play_2@3x.png" alt="">
                                        <!--换下-->
                                        <img v-show='item.eventCode == "SO"' class="up-down-img" src="./images/final_2@3x.png" alt="">
                                        <!--进球-->
                                        <img v-show='item.eventCode == "G"' class="ball-img" src="./images/Goals_2@3x.png" alt="">
                                        <!--点球未进-->
                                        <img v-show='item.eventCode == "PSM"' class="ball-img" src="./images/Iost Penalty@3x.png" alt="">
                                        <!--点球进球-->
                                        <div class="poin-ball"  v-show='item.eventCode == "PSG"'>
                                            <img class="point-img" src="./images/Penalty@3x.png" alt="点">
                                            <img class="ball-img" src="./images/Goals_2@3x.png" alt="">
                                        </div>
                                        <!--乌龙球-->
                                        <img v-show='item.eventCode == "OG"' class="ball-img" src="./images/Owngoals_2@3x.png" alt="">
                                        <!--入球无效-->
                                        <img v-show='item.eventCode == ""' class="ball-img" src="./images/Invalid goal@3x.png" alt="">
                                        <!--助攻-->
                                        <img v-show='item.eventCode == "AS"' class="ball-img" src="./images/Assist@3x.png" alt="">
                                    </div>
                                    <!--比分-->
                                    <div v-if="item.eventCode=='G'||
                                               item.eventCode=='PSM'||
                                               item.eventCode=='PSG'||
                                               item.eventCode==''||
                                               item.eventCode=='OG'" class="score">
                                        <span class="score-text">{{res.fsH}}:{{res.fsA}}</span>
                                    </div>
                                    <!--人-->
                                    <div class=person>
                                        <span class="person-text">{{item.person}}</span>
                                    </div>
                                </template>
                            </div>
                            <div class="circle">
                                {{item.minute}}`
                            </div>
                            <div class="right-box" >
                                <template v-if='item.isHa == "a"'>
                                    <div class="event-card">
                                        <!--红盘-->
                                        <img v-show='item.eventCode == "RC"' class="card-img" src="./images/redcard_2@3x.png" alt="">
                                        <!--黄盘-->
                                        <img v-show='item.eventCode == "YC"' class="card-img" src="./images/Yellowcard_2@3x.png" alt="">
                                        <!--二黄变红-->
                                        <img v-show='item.eventCode == "Y2C"' class="card-img" src="./images/Redden@3x.png" alt="">
                                        <!--换上-->
                                        <img v-show='item.eventCode == "SI"' class="up-down-img " src="./images/Play_2@3x.png" alt="">
                                        <!--换下-->
                                        <img v-show='item.eventCode == "SO"' class="up-down-img" src="./images/final_2@3x.png" alt="">
                                        <!--进球-->
                                        <img v-show='item.eventCode == "G"' class="ball-img" src="./images/Goals_2@3x.png" alt="">
                                        <!--点球未进-->
                                        <img v-show='item.eventCode == "PSM"' class="ball-img" src="./images/Iost Penalty@3x.png" alt="">
                                        <!--点球进球-->
                                        <div class="poin-ball"  v-show='item.eventCode == "PSG"'>
                                            <img class="ball-img" src="./images/Goals_2@3x.png" alt="">
                                            <img class="point-img" src="./images/Penalty@3x.png" alt="点">
                                        </div>
                                        <!--乌龙球-->
                                        <img v-show='item.eventCode == "OG"' class="ball-img" src="./images/Owngoals_2@3x.png" alt="">
                                        <!--入球无效-->
                                        <img v-show='item.eventCode == ""' class="ball-img" src="./images/Invalid goal@3x.png" alt="">
                                        <!--助攻-->
                                        <img v-show='item.eventCode == "AS"' class="ball-img" src="./images/Assist@3x.png" alt="">
                                    </div>
                                    <!--点球-->
                                    <!--<div class="point-ball">-->
                                        <!--<img class="ball-img" src="./images/Owngoals_2@3x.png" alt="">-->
                                    <!--</div>-->
                                    <!--比分-->
                                    <div v-if="item.eventCode=='G'||
                                               item.eventCode=='PSM'||
                                               item.eventCode=='PSG'||
                                               item.eventCode==''||
                                               item.eventCode=='OG'" class="score">
                                        <span class="score-text">{{res.fsH}}:{{res.fsA}}</span>
                                    </div>
                                    <!--人-->
                                    <div class=person>
                                        <span class="person-text">{{item.person}}</span>
                                    </div>
                                </template>

                            </div>
                        </div>
                    </div>
                    <!--图例-->
                    <div class="Legend">
                        <ul class="Legend-ul">
                            <li>
                                <div><img class='ball-img' src="./images/Goals_2@2x.png" alt=""></div>
                                <span>入球</span>
                            </li>
                            <li>
                                <div><img class="ball-img" src="./images/Owngoals_2@2x.png" alt=""></div>
                                <span>乌龙</span>
                            </li>
                            <li>
                                <div><img class="card-img" src="./images/Yellowcard_1@3x.png" alt=""></div>
                                <span>黄牌</span>
                            </li>
                            <li>
                                <div><img class="card-img" src="./images/redcard_1@3x.png" alt=""></div>
                                <span>红牌</span>
                            </li>
                            <li>
                                <div><img class="up-down-img" src="./images/Play_1@3x.png" alt=""></div>
                                <span>换上</span>
                            </li>
                            <li>
                                <div><img class="up-down-img" src="./images/final_1@3x.png" alt=""></div>
                                <span>换下</span>
                            </li>

                            <li>
                                <div><img class="up-down-img" src="./images/Invalid goal@3x.png" alt=""></div>
                                <span>入球无效</span>
                            </li>
                            <li>
                                <div><img class="up-down-img" src="./images/Iost Penalty@3x.png" alt=""></div>
                                <span>点球未进</span>
                            </li>
                            <li>
                                <div><img class="up-down-img" src="./images/Redden@3x.png" alt=""></div>
                                <span>两黄变红</span>
                            </li>
                            <li>
                                <div><img class="up-down-img" src="./images/Assist@3x.png" alt=""></div>
                                <span>助攻</span>
                            </li>
                        </ul>
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
                            <img class="tem-img"  :src="matchInfo.homeTeamPic" alt="">
                            <p class="name">{{matchInfo.homeTeamAbbr}}</p>
                        </div>
                        <div class="center-text">
                            <p>vs</p>
                        </div>
                        <div class="right-text">
                            <img class="tem-img" :src="matchInfo.visitingTeamPic" alt="">
                            <p class="name">{{matchInfo.visitingTeamAbbr}}</p>
                        </div>
                    </div>

                    <div v-for="(item,index) in matchLiveStatisticsDTO" :key=index class="skill-box-body skill">
                        <div class="left-text">
                            <div class="bar-out">
                                <div :style="{width:filt(item,item.teamHData)}" class="bar-in"></div>
                            </div>
                            <span class="bar-text">{{item.teamHData}}</span>
                        </div>
                        <div class="center-text ">
                            <p>{{item.dataName}}</p>
                        </div>
                        <div class="right-text">
                            <div class="bar-out">
                                <div :style="{width:filt(item,item.teamAData)}" class="bar-in"></div>
                            </div>
                            <span class="bar-text">{{item.teamAData}}</span>
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
        props:[
            'matchInfo'
        ],
        data(){
            return{
                setIntervalTime:'',
                eventList:[],//事件列表 ,
                matchLiveStatisticsDTO:[],//统计数据,
                res:{},//赛况数据
            }
        },
        created(){
            this.getInfo()
            console.log(this.matchInfo)
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
                           dataFn(res)
                       }
                   })
               that.setInterval = setInterval(function () {
                   api.info(data)
                       .then(res=>{
                           if(res.code == 0){
                               dataFn(res)
                           }
                       })
               },60000)
               function dataFn (res) {
                   console.log(res);
                   that.res = res.data
                   that.eventList = res.data.eventList
                   that.matchLiveStatisticsDTO = res.data.matchLiveStatisticsDTO
               }
           },
            //计算个数比例
           filt(item,num){
               if(item.dataType=="0"){
                   console.log(((num/(Number(item.teamAData)+Number(item.teamHData)))*100+'%')+"")
                   return ((num/(Number(item.teamAData)+Number(item.teamHData)))*100+'%')+""

               }else {
                   if(num == ''){
                     return '0%'
                   }
                   return num+""
               }
           }
        },
        computed:{

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
            .card-img{
                height: px2rem(32px);
                width: px2rem(32px);
            }
            .ball-img{
                height: px2rem(36px);
                width: px2rem(36px);
                margin: 0 auto;
            }
            .up-down-img{
                height: px2rem(30px);
                width: px2rem(30px);
                margin: 0 auto;
            }
            .poin-ball{
                width: px2rem(80px);
                display: flex;
                flex-direction: row;
                align-items: center;
            }
            .point-img{
                height: px2rem(25px);
                width: px2rem(25px);
            }
            .Legend{
                margin-top:px2rem(108px) ;
                .Legend-ul{
                    display: flex;
                    flex-direction: row;
                    flex-wrap:wrap;
                    li{
                        display: flex;
                        flex-direction: row;
                        width: auto;
                        align-items: center;
                        text-align: left;
                        padding: px2rem(8px) px2rem(15px);
                    }
                }
            }
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
                       display: inline-block;
                       font-size: px2rem(26px);
                       color: #505050;
                       width: px2rem(140px);
                       overflow: hidden;
                       text-overflow:ellipsis;
                       white-space: nowrap;
                       margin-top: px2rem(6px);
                   }
                   .score-text{
                       font-size: px2rem(26px);
                       color: #f08c1e;
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
                           margin-right:px2rem(20px);
                           /*width: px2rem(36px);*/
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
                           text-align:left;
                       }
                   }
                   .right-box{
                       display: flex;
                       flex-direction: row;
                       align-items: center;
                       width: px2rem(300px);
                       .event-card{
                           margin-left:px2rem(20px) ;
                           /*width: px2rem(36px);*/
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
                           text-align: right;
                       }
                   }

               }
            }
        }
        .skill-box{
            .tem-img{
                height:px2rem(80px) !important ;
                width:px2rem(80px)!important; ;
            }
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
                    height: 2px;
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