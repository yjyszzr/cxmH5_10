<template>
    <div class="product-details">
        <v-slider :bannerList='bannerList' v-show="bannerList.length>0"></v-slider>
        <div class="main">
            <div class="detail-box">
                <p class="name">Nike/耐克 刺客系列 Vapor12 低帮 AG短钉人草足球鞋 AO9...</p>
                <div class="detail">
                    <p class="price">
                        <img src="./img/baozheng@3x.png" alt=""><span>正品保证</span>
                        <img src="./img/baozheng@3x.png" alt=""><span>无忧售后</span>
                    </p>
                    <p class="pay">8人付款</p>
                </div>
            </div>
            <div class="mes-body">
                <p class="title"><span class="line"></span><span>基本信息</span></p>
                <ul class="base-mes">
                    <li>鞋钉：TF碎钉</li>
                    <li>鞋钉：TF碎钉</li>
                    <li>鞋钉：TF碎钉</li>
                    <li>鞋钉：TF碎钉</li>
                </ul>
            </div>
            <div class="mes-body">
                <p class="title"><span class="line"></span><span>尺码参照</span></p>
                <ul class="base-mes">
                    <li>鞋钉：TF碎钉</li>
                    <li>鞋钉：TF碎钉</li>
                    <li>鞋钉：TF碎钉</li>
                    <li>鞋钉：TF碎钉</li>
                </ul>
            </div>
            <div class="mes-body">
                <p class="title"><span class="line"></span><span>尺码参照</span></p>
                <ul class="base-mes">
                    <li>鞋钉：TF碎钉</li>
                    <li>鞋钉：TF碎钉</li>
                    <li>鞋钉：TF碎钉</li>
                    <li>鞋钉：TF碎钉</li>
                </ul>
            </div>
        </div>


        <div class="foots">
            <div class="box">
                <p class="price"><span class="now-price">￥459</span><span class="original-price">￥500</span></p>
                <p class="sub-btn" @click="submitOder()">提交订单</p>
            </div>
        </div>
    </div>
</template>

<script>
    import api from "../../fetch/api";
    import silder from "../public/lunbo";
    export default {
        name: "productDetails",
        components: {
            "v-slider": silder
        },
        data(){
            return{
                bannerList: [], //banner
            }
        },
        created(){
            this.hallData()
        },
        methods:{
            hallData(){ //大厅请求
                let data = {};
                api.getHallData(data).then(res => {
                    //console.log(res)
                    if (res.code == 0) {
                        this.bannerList = res.data.dlHallDTO.navBanners;
                        if (this.y_Carousel.length == 0) {
                            this.show = true;
                            this.hide = false;
                        } else {
                            this.show = false;
                            this.hide = true;
                            setInterval(_ => {
                                if (this.activeIndex < this.y_Carousel.length - 1) {
                                    this.activeIndex += 1;
                                } else {
                                    this.activeIndex = 0;
                                }
                            }, 3000);
                        }
                    }
                });
            },
            //提交订单
            submitOder(){
                this.$router.push({
                    path:'/lottery/orderDetail'
                })
            }
        },
    }
</script>

<style scoped lang="scss">
    @import "../../assets/css/function.scss";
    .product-details{
        .main{
            margin-bottom: px2rem(120px);
        }
        .detail-box{
            padding: px2rem(20px);
            background-color: #ffffff;
            .name{
                line-height: px2rem(36px);
                color: rgba(64, 64, 64, 1);
                font-size: px2rem(30px);
                font-weight: 700;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
            }
            .detail{
                margin-top: px2rem(20px);
                margin-bottom: px2rem(10px);
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                .price{
                    align-items: center;
                    display: flex;
                    flex-direction: row;
                    font-size: px2rem(28px);
                    img{
                        margin-right: px2rem(10px);
                        width: px2rem(35px);
                        height: px2rem(35px);
                    }
                    span{
                        margin-right: px2rem(20px);
                    }
                }
            }
        }
        .mes-body{
            background-color: #ffffff;
            margin-top: px2rem(20px);
            padding-left: px2rem(10px);
            overflow: hidden;
            .title{
                margin: px2rem(20px) auto px2rem(20px) px2rem(10px);
                font-size: px2rem(30px);
                color: rgba(64, 64, 64, 1);
                font-weight: 700;
                display: flex;
                align-items: center;
                flex-direction: row;
                .line{
                    margin-right: px2rem(20px);
                    display: inline-block;
                    height: px2rem(30px);
                    width: px2rem(8px);
                    border-radius: px2rem(8px);
                    background-color:rgba(211, 30, 20, 1) ;
                }
            }
            .base-mes{
                font-size: px2rem(30px);
                color: rgba(64, 64, 64, 1);
                overflow: hidden;
                li{
                    float: left;
                    margin-right: px2rem(40px);
                    margin-bottom: px2rem(20px);
                }
            }
        }
        .foots{
            position: fixed;
            bottom: 0;
            .box{
                box-sizing: border-box;
                width: px2rem(750px);
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                line-height: px2rem(90px);
                .price{
                    width: 70%;
                    background-color: #ffffff;
                    .now-price{
                        margin-left: px2rem(20px);
                        color: rgba(211, 30, 20, 1);
                        font-size: px2rem(30px);
                        font-weight: 700;
                    }
                    .original-price{
                        margin-left: px2rem(30px);
                        color: rgba(64, 64, 64, 1);
                        text-decoration: line-through;
                        font-size: px2rem(24px);
                    }
                }
                .sub-btn{
                    width: 30%;
                    background-color: rgba(209, 33, 32, 1);
                    color: #ffffff;
                    font-size: px2rem(40px);
                    text-align: center;
                }
            }
        }
    }
</style>