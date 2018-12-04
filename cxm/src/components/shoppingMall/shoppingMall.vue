<template>
    <div class="shopping-mall">
        <mt-swipe v-if="bannerList.length != 0">
            <mt-swipe-item v-for="(data,i) in bannerList" :key="i">
                <img :src="data.bannerImage" />
            </mt-swipe-item>
        </mt-swipe>
        <div class="commodity-box">
            <ul class="commodity-ul"
                v-infinite-scroll="loadMore"
                infinite-scroll-disabled=true
                infinite-scroll-distance="0">
                <li class="commodity-li" v-for="(item,index) in shopList" :key=index @click="goDetail(item.goodsId)">
                    <div class="img-box">
                        <img :src="item.mainPic" alt="">
                    </div>
                    <div class="detail-box">
                        <p class="name">{{item.description}}</p>
                        <div class="detail">
                            <p class="price"><span class="now-price">￥{{item.presentPrice}}</span><span class="original-price">￥{{item.historyPrice}}</span>
                            </p>
                            <p class="pay">{{item.paidNum}}人付款</p>
                        </div>
                    </div>
                </li>
                <p v-if=loadinged class="loading-more"><v-loading></v-loading> {{lodMes}}</p>
            </ul>
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
                loadinged:false,
                page:0,
                bannerList: [], //banner
                shopList: [], //商品列表
                lodMes:'加载中...',
                isLastPage:'false'
            }
        },
        created() {
            this.hallData()
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
            //获取商品列表
            getShopList(){
                let data = {
                    page: this.page ,
                    size: 10
                }
                api.goodsList(data).then(res=>{
                    console.log(res);
                    if(res.code == 0){
                        this.isLastPage = res.data.isLastPage
                        this.shopList = this.shopList.concat(res.data.list)
                        this.loadinged = false;
                    }
                })
            },

            //下拉加载更多
            loadMore(){

                if(!this.loadinged){
                    this.loadinged = true;
                    setTimeout(() => {

                        this.page=this.page+1
                        this.getShopList()

                        // if(this.isLastPage == 'false'){
                        //
                        // }else {
                        //     // this.lodMes = "没有数据了..."
                        //     // this.loadinged = false;
                        //     // return false
                        // }
                    }, 1000);
                }

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
                    .img-box {
                        width: 100%;
                        height: px2rem(360px);
                        img{
                            width: 100%;
                            height: 100%;
                        }
                        /*background-color: red;*/
                    }
                    .detail-box {
                        padding: px2rem(8px);
                        background-color: rgba(244, 244, 244, 1);
                        border: 1px solid rgba(245, 243, 248, 1);
                        .name {
                            line-height: px2rem(40px);
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