<template>
    <div class="shop-Details">
        <div class="title">
            <p class="name">西安圣和路第2011394号中国体育彩票投注店</p>
            <div class="card">
                <p><img src="./img/shop1_03.png" alt=""> <span>合作认证</span></p>
                <p><img src="./img/shopDetails1_03.png" alt=""> <span>营业许可证</span></p>
            </div>
        </div>
        <div class="ewm-body">
            <div class="ewm-box">
                <img src="./img/店铺-详情1_07.png" alt="">
            </div>
            <p class="shop-main">店主微信：SDJDJHUU</p>
            <p class="link">联系店主</p>
        </div>

    </div>
</template>

<script>
    export default {
        name: "shopDetails"
    }
</script>

<style scoped lang="scss">
    @import "../../../assets/css/function";
    .shop-Details{
        box-sizing: border-box;
        position: absolute;
        top: 0;
        bottom: 0;
        width: 100%;
        background-color: #ffffff;
        padding: px2rem(20px) px2rem(40px);
        color: rgba(64, 64, 64, 1);
        .title{
            display: flex;
            flex-direction: column;
            color: rgba(64, 64, 64, 1);
            font-size: px2rem(30px);
            border-bottom: 1px solid  rgba(207, 207, 207, 1);
            .name{
                font-weight: 700;
            }
            .card{
                display: flex;
                flex-direction: row;
                margin-bottom: px2rem(30px);
                p{
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    font-size: px2rem(24px);
                    color: rgba(255, 126, 26, 1);
                    line-height: px2rem(80px);
                    margin-right: px2rem(30px);
                    img{
                        margin-right: px2rem(10px);
                        width: px2rem(30px);
                    }
                }
            }
        }
        .ewm-body{
            display: flex;
            flex-direction: column;
            align-items: center;
            .ewm-box{
                margin: px2rem(30px);
                width: px2rem(400px);
                img{
                    width: 100%;
                }
            }
            .shop-main{
                font-size: px2rem(28px);
            }
            .link{
                margin-top: px2rem(40px);
                font-size: px2rem(30px);
                line-height: px2rem(90px);
                width:px2rem(600px);
                background-color: rgba(211, 30, 20, 1);
                color: #ffffff;
                font-weight: 700;
                text-align: center;
                border-radius: px2rem(5px);
            }
        }

    }
</style>