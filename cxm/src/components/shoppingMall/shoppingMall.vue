<template>
    <div class="shopping-mall">
        <mt-swipe v-if="bannerList.length != 0">
            <mt-swipe-item v-for="(data,i) in bannerList" :key="i">
                <img :src="data.bannerImage" />
            </mt-swipe-item>
        </mt-swipe>
        <div class="commodity-box" ref="wrapper" :style="{ height: (wrapperHeight-50) + 'px' }">
            <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" :autoFill="isAutoFill" :bottomDistance=10>
                <ul class="commodity-ul">
                    <li class="commodity-li" v-for="(item,index) in shopList" :key=index @click="goDetail(item.goodsId)">
                        <div class="img-box">
                            <img :src="item.mainPic" alt="">
                        </div>
                        <div class="detail-box">
                            <p class="name" style="-webkit-box-orient: vertical;">{{item.description}}</p>
                            <div class="detail">
                                <p class="price"><span class="now-price">￥{{item.presentPrice}}</span><span class="original-price">￥{{item.historyPrice}}</span>
                                </p>
                                <p class="pay">{{item.paidNum}}人付款</p>
                            </div>
                        </div>
                    </li>
                    <p v-if=loadinged class="loading-more">已全部加载完...</p>
                </ul>
            </mt-loadmore>

        </div>
    </div>
</template>

<script>
    import api from "../../fetch/api";
    import loading from  "../public/loading/loading"
    export default {
        name: "shoppingMall",
        components: {
            "v-loading":loading
        },
        data() {
            return {
                allLoaded: false,
                loadinged:false,
                isAutoFill:false,
                page:1,
                bannerList: [], //banner
                shopList: [], //商品列表
                isLastPage:'false',
                wrapperHeight: 0,
            }
        },
        created() {
            this.hallData()
            // this.page=1
            // this.getShopList()
            this.loadBottom()
        },
        mounted() {
            // 父控件要加上高度，否则会出现上拉不动的情况
            // this.wrapperHeight =
            //     document.documentElement.clientHeight -
            //     this.$refs.wrapper.getBoundingClientRect().top;
        },
        methods: {
            // 轮播图
            hallData() {
                let data = {};
                api.bannerList(data).then(res => {
                    if (res.code == 0) {
                        this.bannerList = res.data.bannerList;
                    }
                });
            },
            //跳转详情
            goDetail(shopId) {
                this.$router.push({
                    path: '/lottery/productDetails',
                    query:{goodsId:shopId}
                })
            },
            //上拉加载更多
            loadBottom() {
                let data = {
                    page: this.page ,
                    size: 20
                }
                api.goodsList(data).then(res=>{
                    if(res.code == 0){
                        if(res.data.isLastPage == 'true'){
                            this.allLoaded = true;// 若数据已全部获取完毕
                            this.loadinged = true;
                        }
                        this.isLastPage = res.data.isLastPage
                        this.shopList = this.shopList.concat(res.data.list)
                        this.page=this.page+1
                        this.$refs.loadmore.onBottomLoaded();
                    }
                })
            },
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
                justify-content: center;
                .loading-more{
                    display: flex;
                    align-items: center;
                    flex-direction: row;
                }

                .commodity-li {
                    box-sizing: border-box;
                    width: px2rem(375px);
                    padding: px2rem(10px);
                    overflow: hidden;
                    .img-box {
                        width: 100%;
                        height: px2rem(360px);
                        overflow: hidden;
                        img{
                            width: 100%;
                            height: 100%;
                        }
                        /*background-color: red;*/
                    }
                    .detail-box {
                        overflow: hidden;
                        height: px2rem(120px);
                        padding: px2rem(8px);
                        background-color: rgba(244, 244, 244, 1);
                        border: 1px solid rgba(245, 243, 248, 1);
                        .name {
                            line-height: px2rem(40px);
                            color: rgba(64, 64, 64, 1);
                            font-size: px2rem(28px);
                            display: -webkit-box;
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
                            .pay{
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