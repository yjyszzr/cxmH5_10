<template>
    <div class="shopping-mall">
        <mt-swipe v-if="bannerList.length != 0">
            <mt-swipe-item v-for="(data,i) in bannerList" :key="i">
                <img :src="data.bannerImage" />
            </mt-swipe-item>
        </mt-swipe>
        <div class="commodity-box">
            <ul class="commodity-ul">
                <li class="commodity-li" @click="goDetail()">
                    <div class="img-box">
                        <!--<img src="../" alt="">-->
                    </div>
                    <div class="detail-box">
                        <p class="name">Nike/耐克 刺客系列 Vapor12 低帮 AG短钉人草足球鞋 AO9...</p>
                        <div class="detail">
                            <p class="price"><span class="now-price">￥459</span><span class="original-price">￥500</span>
                            </p>
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
    export default {
        name: "shoppingMall",
        components: {
        },
        data() {
            return {
                bannerList: [], //banner
                shopList: [
                    {}
                ],
            }
        },
        created() {
            this.hallData()
        },
        methods: {
            hallData() { //大厅请求
                let data = {};
                api.bannerList(data).then(res => {
                    console.log(res)
                    if (res.code == 0) {
                        this.bannerList = res.data.bannerList;
                    }
                });
            },
            //跳转详情
            goDetail() {
                this.$router.push({
                    path: '/lottery/productDetails'
                })
            }
        },

    }
</script>

<style scoped lang="scss">
    @import "../../assets/css/function.scss";

    .shopping-mall {
        width: 100%;
        background-color: #ffffff;
        .commodity-box {
            .commodity-ul {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;

                .commodity-li {
                    box-sizing: border-box;
                    width: px2rem(375px);
                    padding: px2rem(10px);
                    .img-box {
                        width: 100%;
                        height: px2rem(360px);
                        background-color: red;
                    }
                    .detail-box {
                        padding: px2rem(8px);
                        background-color: rgba(244, 244, 244, 1);
                        border: 1px solid rgba(245, 243, 248, 1);
                        .name {
                            line-height: px2rem(36px);
                            color: rgba(64, 64, 64, 1);
                            font-size: px2rem(30px);
                            font-weight: 700;
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            -webkit-line-clamp: 2;
                            overflow: hidden;
                        }
                        .detail {
                            display: flex;
                            flex-direction: row;
                            justify-content: space-between;
                            align-items: center;
                            .now-price {
                                color: rgba(211, 30, 20, 1);
                                font-size: px2rem(30px);
                                font-weight: 700;
                            }
                            .original-price {
                                color: rgba(64, 64, 64, 1);
                                text-decoration: line-through;
                                font-size: px2rem(24px);
                            }
                        }
                    }

                }
                .commodity-li:nth-of-type(odd) {
                    padding-right: 0;
                }
            }
        }
    }
</style>
<style lang="scss">
    @import "../../assets/css/function.scss";
    .shopping-mall {
        .mint-swipe {
            margin-bottom: 0;
            height: px2rem(306px);
            .mint-swipe-item {
                height: px2rem(306px);
                img{
                    height: 100%;
                    width: 100%;
                }
            }
        }
    }

</style>