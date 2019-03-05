<template>
    <div id="touzhu-list">
        <div class="body-title">
            <p>共有<span>8</span>场比赛可投</p>
            <p>注：电竞为单场单项投注</p>
        </div>
        <ul class="game-ul">
            <Li class="game-li">
                <div class="season-title">
                    <p>ECS春季赛</p>
                    <p>2019年03月25日 19:00:00</p>
                    <p>ECS春季赛</p>
                </div>
                <div class="season-body">
                    <div class="season">
                        <div class="season-box">
                            <div class="img-box">
                                <!--<img src="../" alt="">-->
                            </div>
                            <span>F-Soul</span>
                        </div>
                        <span>VS</span>
                        <div class="season-box">
                            <div class="img-box">
                                <!--<img src="../" alt="">-->
                            </div>
                            <span>F-Soul F-Soul</span>
                        </div>
                    </div>
                    <p class="touzhu-btn">玩法投注</p>
                </div>
            </Li>
            <Li class="game-li">
                <div class="season-title">
                    <p>ECS春季赛</p>
                    <p>2019年03月25日 19:00:00</p>
                    <p>ECS春季赛</p>
                </div>
                <div class="season-body">
                    <div class="season">
                        <div class="season-box">
                            <div class="img-box">
                                <!--<img src="../" alt="">-->
                            </div>
                            <span>F-Soul</span>
                        </div>
                        <span>VS</span>
                        <div class="season-box">
                            <div class="img-box">
                                <!--<img src="../" alt="">-->
                            </div>
                            <span>F-Soul F-Soul</span>
                        </div>
                    </div>
                    <p class="touzhu-btn">玩法投注</p>
                </div>
            </Li>
            <Li class="game-li">
                <div class="season-title">
                    <p>ECS春季赛</p>
                    <p>2019年03月25日 19:00:00</p>
                    <p>ECS春季赛</p>
                </div>
                <div class="season-body">
                    <div class="season">
                        <div class="season-box">
                            <div class="img-box">
                                <!--<img src="../" alt="">-->
                            </div>
                            <span>F-Soul</span>
                        </div>
                        <span>VS</span>
                        <div class="season-box">
                            <div class="img-box">
                                <!--<img src="../" alt="">-->
                            </div>
                            <span>F-Soul F-Soul</span>
                        </div>
                    </div>
                    <p class="touzhu-btn">玩法投注</p>
                </div>
            </Li>
            <Li class="game-li">
                <div class="season-title">
                    <p>ECS春季赛</p>
                    <p>2019年03月25日 19:00:00</p>
                    <p>ECS春季赛</p>
                </div>
                <div class="season-body">
                    <div class="season">
                        <div class="season-box">
                            <div class="img-box">
                                <!--<img src="../" alt="">-->
                            </div>
                            <span>F-Soul</span>
                        </div>
                        <span>VS</span>
                        <div class="season-box">
                            <div class="img-box">
                                <!--<img src="../" alt="">-->
                            </div>
                            <span>F-Soul F-Soul</span>
                        </div>
                    </div>
                    <p class="touzhu-btn">玩法投注</p>
                </div>
            </Li>
            <Li class="game-li">
                <div class="season-title">
                    <p>ECS春季赛</p>
                    <p>2019年03月25日 19:00:00</p>
                    <p>ECS春季赛</p>
                </div>
                <div class="season-body">
                    <div class="season">
                        <div class="season-box">
                            <div class="img-box">
                                <!--<img src="../" alt="">-->
                            </div>
                            <span>F-Soul</span>
                        </div>
                        <span>VS</span>
                        <div class="season-box">
                            <div class="img-box">
                                <!--<img src="../" alt="">-->
                            </div>
                            <span>F-Soul F-Soul</span>
                        </div>
                    </div>
                    <p class="touzhu-btn">玩法投注</p>
                </div>
            </Li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "touzhuList"
    }
</script>

<style scoped lang="scss">
    @import '../../../assets/css/function.scss';
    #touzhu-list{
        .body-title{
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background:rgba(249,249,249,1);
            p{
                margin: auto px2rem(27px);
                line-height: px2rem(60px);
                color: #8E8E8E;
                font-size: px2rem(24px);
                span{
                    color: #D31E14;
                }
            }
            p:nth-child(2){
                color: #D31E14;
            }
        }
        .game-ul{
            width: 100%;
            background-color: #ffffff;
            .game-li{
                overflow: hidden;
                width: 100%;
                .season-title{
                    margin: px2rem(28px) px2rem(27px) px2rem(20px) px2rem(27px);
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    p:nth-child(1){
                        color: #1469D3;
                        font-size: px2rem(24px);
                    }
                    p:nth-child(2){
                        color:#404040 ;
                        font-size: px2rem(22px);
                    }
                    p:nth-child(3){
                        visibility: hidden;
                    }
                }
                .season-body{
                    border-bottom: 1px solid #CFCFCF;
                    margin: auto px2rem(48px);
                    .season{
                        display: flex;
                        justify-content: space-around;
                        align-items: center;
                        .season-box{
                            display: flex;
                            align-items: center;
                            flex-direction: column;
                            .img-box{
                                height: px2rem(100px);
                                width: px2rem(100px);
                                background-color: red;
                                img{
                                    height: 100px;
                                }
                            }
                            span{
                                color: #404040;
                                font-size: px2rem(24px);
                            }
                        }
                    }
                    .touzhu-btn{
                        margin-top: px2rem(20px);
                        margin-bottom: px2rem(33px);
                        line-height: px2rem(60px);
                        width: px2rem(613px);
                        border: 1px solid #D31E14;
                        border-radius: px2rem(10px);
                        text-align: center;
                        color: #D31E14;
                    }
                }
            }
        }
    }
</style>