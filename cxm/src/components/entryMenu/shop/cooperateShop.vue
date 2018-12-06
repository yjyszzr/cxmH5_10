<template>
    <!--合作店铺-->
    <div class="cooperate-shop">
        <ul class="shop-ul">
            <li class="shop-li" v-for="(item,index) in shopList" :key = index @click="goDetail(item.storeId)">
                <div class="shop-log"><img :src="item.logo" alt=""></div>
                <div class="shop-descrip">
                    <p class="shop-name">{{item.name}} <span v-if="item.cooperAuth=='1'" class="collet-img"><img src="./img/shop1_03.png" alt=""></span></p>
                    <p class="collet">有{{item.collNum}}名用户访问过此店铺</p>
                </div>
            </li>
        </ul>
        <a v-if="protocalUrl!=''" class="what-shop" :href="protocalUrl">什么是合作店铺</a>
    </div>
</template>

<script>
    import api from "../../../fetch/api";

    export default {
        name: "cooperateShop",
        data() {
            return{
                shopList:[],
                protocalUrl:'',
            }
        },
        created(){
            this.getStorelist()
        },
        methods:{
            //获取线下店铺列表
            getStorelist(){
                let data = ''
                api.storelist(data).then(res=>{
                    //console.log(res);
                    if(res.code==0){
                        this.shopList = res.data.list
                        this.protocalUrl = res.data.protocalUrl
                    }
                })
            },
            //去店铺详情
            goDetail(id){
                this.$router.push({
                    path:'/lottery/shopDetails',
                    query:{id:id}
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../../../assets/css/function";
    .cooperate-shop{
        position: absolute;
        top: 0;
        bottom: 0;
        width: 100%;
        background-color: #ffffff;
        .shop-ul{
            padding: 0 px2rem(40px);
            .shop-li{
                padding: px2rem(30px) 0;
                display: flex;
                flex-direction: row;
                align-items: center;
                border-bottom:1px solid rgba(207, 207, 207, 1) ;
                .shop-log{
                    width: px2rem(150px);
                    img{
                        width:100%;
                    }
                }
                .shop-descrip{
                    margin-left: px2rem(40px);
                    .shop-name{
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        font-size: px2rem(30px);
                        color: rgba(64, 64, 64, 1);
                        font-weight: 700;
                        .collet-img{
                            margin-left: px2rem(20px);
                            width: px2rem(40px);
                            img{
                                width: 100%;
                            }
                        }
                    }
                    .collet{
                        line-height: px2rem(48px);
                        font-size: px2rem(24px);
                        color: rgba(64, 64, 64, 1);
                    }
                }
            }
        }
        .what-shop{
            display: block;
            margin-top: px2rem(30px);
            text-align: center;
            font-size: px2rem(24px);
            color: rgba(211, 30, 20, 1);
        }
    }
</style>