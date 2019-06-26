<template>
    <div class="product-details">
        <div class="product-box">
            <mt-swipe class="pd-swipe" :show-indicators="true">
                <mt-swipe-item v-for="(data,i) in bannerList" :key="i">
                    <img :src="data.bannerImage" />
                </mt-swipe-item>
            </mt-swipe>
            <div class="main">
                <div class="detail-box">
                    <p class="name">{{datas.description}}</p>
                    <div class="detail">
                        <p class="price">
                            <img src="./img/baozheng@3x.png" alt=""><span>正品保证</span>
                            <img src="./img/baozheng@3x.png" alt=""><span>无忧售后</span>
                        </p>
                        <p class="pay">{{datas.paidNum}}人付款</p>
                    </div>
                </div>
                <div class="mes-body">
                    <p class="title"><span class="line"></span><span>基本信息</span></p>
                    <ul class="base-mes" >
                        <li class="base-li" v-for="(item,index) in datas.baseAttributeList" :key=index>{{item}}</li>
                    </ul>
                </div>
                <div class="mes-body">
                    <p class="title"><span class="line"></span><span>尺码参照</span></p>
                    <ul class="base-mes">
                        <li v-for="(item,index) in datas.detailPicList" :key=index><img :src="item.bannerImage" alt=""></li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="foots">
            <div class="box">
                <p class="price"><span class="now-price">￥{{datas.presentPrice}}</span><span class="original-price">￥{{datas.historyPrice}}</span></p>
                <p class="sub-btn" @click="submitOder()">提交订单</p>
            </div>
        </div>
    </div>
</template>

<script>
    import api from "../../fetch/api";
    export default {
        name: "productDetails",
        components: {

        },
        data(){
            return{
                bannerList: [], //banner
                goodsId:'',
                datas:''
            }
        },
        created(){
            this.goodsId = this.$route.query.goodsId
            this.getShopDetail()
        },
        methods:{
            //获取商品详情
            getShopDetail(){
                let data = {
                    goodsId:this.goodsId
                }
                api.goodsDetail(data).then(res => {
                    if(res.code==0){
                        this.datas = res.data
                        this.bannerList = res.data.bannerList
                    }
                })
            },
            //提交订单
            submitOder(){
                let data = {
                    goodsId:this.goodsId
                }
                api.goodsAdd(data).then(res => {
                    if(res.code==0){
                        this.$router.push({
                            path:'/lottery/orderDetail',
                            query:{goodsId:this.goodsId,orderId:res.data}
                        })
                    }
                })

            }
        },
    }
</script>
<style lang="scss">
    @import "../../assets/css/function.scss";
    .product-details{
        .pd-swipe {
            margin-bottom: 0;
            height: px2rem(640px)!important;
            .mint-swipe-item {
                height: px2rem(640px);
                img{
                    height: 100%;
                    width: 100%;
                }
            }
        }
    }

</style>
<style scoped lang="scss">
    @import "../../assets/css/function.scss";
    .product-details{
        height: 100%;
        .product-box{
            width: 100%;
            background: #ffffff;
            position: absolute;
            top: px2rem(0px);
            bottom: px2rem(0px);
            overflow: auto;
            -webkit-overflow-scrolling: touch !important;
        }
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
            padding-right: px2rem(10px);
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
                    margin-bottom: px2rem(20px);
                    img{
                        width: 100%;
                    }
                }
                .base-li{
                    margin-right: px2rem(30px);
                }
            }
        }
        .foots{
            position: absolute;
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