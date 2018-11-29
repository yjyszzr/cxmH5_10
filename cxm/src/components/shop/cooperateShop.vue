<template>
    <!--合作店铺-->
    <div class="cooperate-shop">
        <ul class="shop-ul">
            <li class="shop-li" v-for="(item,index) in shopList" :key = index @click="goDetail()">
                <div class="shop-log"><img src="./img/dp192@3.png" alt=""></div>
                <div class="shop-descrip">
                    <p class="shop-name">{{item.name}} <span class="collet-img"><img src="./img/shop1_03.png" alt=""></span></p>
                    <p class="collet">{{item.collet}}</p>
                </div>
            </li>
        </ul>
        <p class="what-shop" @click="whatShop">什么是合作店铺</p>
    </div>
</template>

<script>
    export default {
        name: "cooperateShop",
        data() {
            return{
                shopList:[
                    {
                        name:'西安生合理中国体育彩票',
                        collet:"有1234577名用户搜藏此店铺"
                    },
                    {
                        name:'西安生合理中国体育彩票',
                        collet:"有1234577名用户搜藏此店铺"
                    },
                    {
                        name:'西安生合理中国体育彩票',
                        collet:"有1234577名用户搜藏此店铺"
                    }
                ]
            }
        },
        created(){

        },
        methods:{
            whatShop(){
                alert("合作店铺")
            },
            goDetail(){
                this.$router.push({
                    path:'/lottery/shopDetails'
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../../assets/css/function.scss";
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
            margin-top: px2rem(30px);
            text-align: center;
            font-size: px2rem(24px);
            color: rgba(211, 30, 20, 1);
        }
    }
</style>