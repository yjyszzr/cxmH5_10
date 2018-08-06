<template>
    <div class="touzhu-confirm">
        <!--头部开始-->
        <div class="head">
            <span class="back-img" @click="goBack()"><img src="../../assets/img/ret.png" alt=""></span>
            <div class="head-text">
                <span>彩小秘·投注确认</span>
            </div>
            <div class="memu"></div>
        </div>
        <!--躯干-->
        <div class="body">
            <div class="add">
                <div class="add-item">
                    <span class="img-box"><img src="./images/AddManully@3x.png" alt=""></span>
                    <p>手动添加</p>
                </div>
                <div class="add-item">
                    <span class="img-box"><img src="./images/Add@3x.png" alt=""></span>
                    <p>机选1注</p>
                </div>
                <div class="add-item">
                    <span class="img-box"><img src="./images/Add@3x.png" alt=""></span>
                    <p>机选5注</p>
                </div>
            </div>
            
            <div class="zhu-box">
                <ul>
                    <li>
                        <div>
                            <span><img src="./images/Add@3x.png" alt=""></span>
                            <div>
                                <div>
                                    <ul>
                                        <li>1</li>
                                        <li>4</li>
                                        <li>4</li>
                                        <li>4</li>
                                        <li>4</li>
                                    </ul>
                                    <ul>
                                        <li>9</li>
                                        <li>9</li>
                                    </ul>
                                </div>
                                <p>但式 1注 1倍 100.00元</p>
                            </div>
                            <span><img src="../../assets/img/arange.png" alt=""></span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>


    </div>
</template>
<style scoped lang="scss">
    @import "../../assets/css/function.scss";

    .touzhu-confirm {
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
            .memu{
                width: px2rem(30px);
            }
        }
        .body{
            .add{
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: row;
                background-color: #ffffff;
                .add-item{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: px2rem(200px);
                    height: px2rem(70px);
                    background: rgba(0,0,0,.2);
                    margin: px2rem(20px);
                    border-radius: px2rem(20px);
                    .img-box{
                        display: inline-block;
                        height:px2rem(40px) ;
                        width: px2rem(40px);
                        overflow: hidden;
                        margin-right: px2rem(20px);
                        img{
                            width: 100%;
                        }
                    }
                }
            }
            .zhu-box{

            }
        }
    }
</style>
<script>

    import {MessageBox, Popup} from 'mint-ui';

    export default {
        name: "touZhuConfirm",
        data() {
            return{

            }
        },
        created() {

        },
        methods:{
            // 头部返回
            goBack() {
                this.$router.go(-1);
            },
        },
        beforeRouteLeave(to, from, next) {
            next()
        }
    }
</script>

