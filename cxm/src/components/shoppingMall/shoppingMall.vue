<template>
    <div class="shopping-mall">
        <v-slider :bannerList='bannerList' v-show="bannerList.length>0"></v-slider>
        <div class="commodity-box">
            <ul class="commodity-ul">

                <li class="commodity-li">
                    <div class="img-box">
                        <!--<img src="../" alt="">-->
                    </div>
                    <div class="detail-box">
                        <p class="name">Nike/耐克 刺客系列 Vapor12 低帮 AG短钉人草足球鞋 AO9...</p>
                        <div class="detail">
                            <p class="price"><span class="now-price">￥459</span><span class="original-price">￥500</span></p>
                            <p class="pay">8人付款</p>
                        </div>
                    </div>
                </li>
                <li class="commodity-li">
                    <div class="img-box">
                        <!--<img src="../" alt="">-->
                    </div>
                    <div class="detail-box">
                        <p class="name">Nike/耐克 刺客系列 Vapor12 低帮 AG短钉人草足球鞋 AO9...</p>
                        <div class="detail">
                            <p class="price"><span class="now-price">￥459</span><span class="original-price">￥500</span></p>
                            <p class="pay">8人付款</p>
                        </div>
                    </div>
                </li>
                <li class="commodity-li">
                    <div class="img-box">
                        <!--<img src="../" alt="">-->
                    </div>
                    <div class="detail-box">
                        <p class="name">Nike/耐克 刺客系列 Vapor12 低帮 AG短钉人草足球鞋 AO9...</p>
                        <div class="detail">
                            <p class="price"><span class="now-price">￥459</span><span class="original-price">￥500</span></p>
                            <p class="pay">8人付款</p>
                        </div>
                    </div>
                </li>
                <li class="commodity-li">
                    <div class="img-box">
                        <!--<img src="../" alt="">-->
                    </div>
                    <div class="detail-box">
                        <p class="name">Nike/耐克 刺客系列 Vapor12 低帮 AG短钉人草足球鞋 AO9...</p>
                        <div class="detail">
                            <p class="price"><span class="now-price">￥459</span><span class="original-price">￥500</span></p>
                            <p class="pay">8人付款</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import api from "../../fetch/api";
    import silder from "../index/lunbo";
    export default {
        name: "shoppingMall",
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
        },

    }
</script>

<style scoped lang="scss">
    @import "../../assets/css/function.scss";
    .shopping-mall{
        width: 100%;
        background-color: #ffffff;
        .mint-swipe{
            margin-bottom: 0;
        }
        .commodity-box{
            .commodity-ul{
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;

                .commodity-li{
                    box-sizing: border-box;
                    width: px2rem(375px);
                    padding: px2rem(10px);
                    .img-box{
                        width: 100%;
                        height: px2rem(360px);
                        background-color: red;
                    }
                    .detail-box{
                        padding: px2rem(8px);
                        background-color: rgba(244, 244, 244, 1);
                        border:1px solid rgba(245, 243, 248, 1);
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
                            display: flex;
                            flex-direction: row;
                            justify-content: space-between;
                            align-items: center;
                            .now-price{
                                color: rgba(211, 30, 20, 1);
                                font-size: px2rem(30px);
                                font-weight: 700;
                            }
                            .original-price{
                                color: rgba(64, 64, 64, 1);
                                text-decoration: line-through;
                                font-size: px2rem(24px);
                            }
                        }
                    }

                }
                .commodity-li:nth-of-type(odd){
                    padding-right: 0;
                }
            }
        }
    }
</style>