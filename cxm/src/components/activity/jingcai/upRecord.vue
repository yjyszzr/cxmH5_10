<template>
    <div class="Uprecord" :style="{width:'100%'}">
        <div class="main">
            <div v-if="!login">
                <div class="yes" v-if="true" >
                    <div class="title-box">
                        <div class="left-box">
                            <p class="money"><span>28657.95</span>元</p>
                            <p class="money-text">奖池累计金额</p>
                        </div>
                        <p class="line"></p>
                        <div class="right-box">
                            <p class="money"><span>28657.95</span>元</p>
                            <p class="money-text">奖池累计金额</p>
                        </div>
                    </div>
                    <div class="body-box">
                        <div class="img-box">
                            <img src="./images/cup.png" alt="">
                        </div>
                        <p class="text-one">恭喜你获得奖金 <span>200</span> 元</p>
                        <p class="text-tow">恭喜你获得奖金恭喜你获得奖金恭喜你获得奖金恭喜你获得奖金恭喜你获得奖金恭喜你获得奖金 <span>200</span> 元</p>
                    </div>
                </div>
                <div class="no" v-if="!true">
                    <div class="body-box">
                        <div class="img-box">
                            <img src="./images/nocup.png" alt="">
                        </div>
                        <p class="text-one">很抱歉，您本期未参与竞猜</p>
                        <p class="text-tow">恭喜你获得奖金恭喜你获得奖金恭喜你获得奖金恭喜你获得奖金恭喜你获得奖金恭喜你获得奖金 <span>200</span> 元</p>
                    </div>
                </div>
            </div>
            <div v-if="login">
                <div class="yes">
                    <div class="title-box">
                        <div class="left-box">
                            <p class="money"><span>28657.95</span>元</p>
                            <p class="money-text">奖池累计金额</p>
                        </div>
                        <p class="line"></p>
                        <div class="right-box">
                            <p class="money"><span>28657.95</span>元</p>
                            <p class="money-text">奖池累计金额</p>
                        </div>
                    </div>
                    <div class="body-box">
                        <div class="img-box">
                            <img src="./images/cup.png" alt="">
                        </div>
                        <p class="text-one">恭喜你获得奖金 <span>200</span> 元</p>
                        <p class="text-tow">恭喜你获得奖金恭喜你获得奖金恭喜你获得奖金恭喜你获得奖金恭喜你获得奖金恭喜你获得奖金 <span>200</span> 元</p>
                    </div>
                </div>
                <div class="no">
                    <div class="body-box">
                        <div class="img-box">
                            <img src="./images/nocup.png" alt="">
                        </div>
                        <p class="text-one">很抱歉，您本期未参与竞猜</p>
                        <p class="text-tow">恭喜你获得奖金恭喜你获得奖金恭喜你获得奖金恭喜你获得奖金恭喜你获得奖金恭喜你获得奖金 <span>200</span> 元</p>
                    </div>
                </div>
            </div>


        </div>
    </div>
</template>

<style lang="scss">
    @import "../../../assets/css/function.scss";

    .Uprecord {
        background: url("./images/base.jpg") no-repeat center;
        min-height: px2rem(1200px);
        .main {
            .title-box {
                display: flex;
                justify-content: center;
                align-items: center;
                border-bottom: 1px solid #ffffff;
                height: px2rem(234px);
                .money{
                    color:#f8d15c;
                    font-size: px2rem(30px);
                    span{
                        font-size: px2rem(48px);
                    }
                }
                .money-text{
                    color: #FFFFFF;
                    font-size: px2rem(26px);
                }
                .left-box{
                    width: 49%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                }
                .line{
                    height: 100%;
                    border-right: 1px solid #ffffff;
                }
                .right-box{
                    width: 49%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                }
            }
            .body-box{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                .img-box{
                    margin-top: px2rem(200px);
                    height: px2rem(250px);
                    width: px2rem(250px);
                    overflow: hidden;
                    img{
                        width: 100%;
                    }
                }
                .text-one{
                    margin-top: px2rem(50px);
                    font-size: px2rem(36px);
                    color: #f8d15c;
                }
                .text-tow{
                    text-align: center;
                    width: px2rem(450px);
                    margin-top: px2rem(15px);
                    font-size: px2rem(18px);
                    color: #ffffff;

                }
            }
        }
    }
</style>
<script>
    import api from '../../../fetch/api'
    export default {
        name: "jingcai",
        data() {
            return {
                login:false
            }
        },
        created(){
            this.getMyhistoryList()
        },
        methods: {
            //获取竞猜详情
            getMyhistoryList(){
                alert("222")
                let data = {
                    str:''
                }
                api.userAnswersList(data)
                    .then(res => {
                        if (res.code == 0) {
                            console.log(res);
                        }
                    })
            }
        }
    }
</script>