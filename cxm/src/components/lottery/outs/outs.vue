<template>
    <div class="main-body">
        <p class="title"> <i class="vertical-line"></i>事件</p>
        <div>
            <div class="event-box">
                <div class="img-star-box">
                    <img class="img-star" src="./images/star@3x.png" alt="">
                </div>

                <div class=tree-ul>
                    <p class="line-one"></p>
                    <div class="tree-li">
                        <div class="left-box">
                            <div class="event-card">
                                <img class="card-img" src="./images/Yellowcard_2@3x.png" alt="">
                                <img class="ball-img" src="./images/Owngoals_2@3x.png" alt="">
                            </div>
                        </div>
                        <div class="circle">
                            kkkk
                        </div>
                        <div class="right-box">
                            <div class="event-card">
                                <img class="card-img" src="./images/Yellowcard_2@3x.png" alt="">
                            </div>
                        </div>

                        <!--<p>33</p>-->
                    </div>
                </div>
                <div class=tree-ul>
                    <p class="line-one"></p>
                    <div class="tree-li">
                        <p>11</p>
                        <p>22</p>
                        <p>33</p>
                    </div>
                </div>
                <div class=tree-ul>
                    <p class="line-one"></p>
                    <div class="tree-li">
                        <p>11</p>
                        <p>33</p>
                        <p>33</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "outs"
    }
</script>

<style scoped lang="scss">
    @import '../../../assets/css/function.scss';
    .main-body{
        width: 95%;
        margin: 0 auto;
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
                   .card-img{
                       height: px2rem(32px);
                       width: px2rem(32px);
                   }
                   .ball-img{
                       height: px2rem(36px);
                       width: px2rem(36px);
                   }
                   .left-box{
                       display: flex;
                       flex-direction: row-reverse;
                       align-items: center;
                       width: px2rem(300px);
                       .event-card{
                           margin-right:px2rem(20px) ;
                       }
                   }
                   .circle{
                       height: px2rem(54px);
                       width: px2rem(54px);
                       border: 2px solid #f08c1e;
                       border-radius: 100%;
                   }
                   .right-box{
                       display: flex;
                       flex-direction: row;
                       align-items: center;
                       width: px2rem(300px);
                       .event-card{
                           margin-left:px2rem(20px) ;
                       }
                   }

               }
            }
        }
    }

</style>