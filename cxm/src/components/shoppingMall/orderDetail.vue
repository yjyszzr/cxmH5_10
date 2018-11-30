<template>
    <div class="order-detail">
        <div class="item bgw">
            <div class="imgs-box">
                <!--<img src="../" alt="">-->
            </div>
            <div class="mes ">
                <p class="name">Nike/耐克 刺客系列客系列客系列客客系列客系列客系列客客系列客系列客系列客客系列客系列客系列客客系列客系列客系列客客系列客系列客系列客客系列客系列客系列客客系列客系列客系列客客系列客系列客系列客系列客系列客系列客系列客系列客系列客系列客系列客系列客系列客系列客系列客系列客系列</p>
                <div class="money">
                    <p>￥{{money}}</p>
                    <div class="num">
                        <span @click="addOrreduce('reduce')">-</span>
                        <span>{{shopNum}}</span>
                        <span @click="addOrreduce('add')">+</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="base-mes bgw">
            <div class="title"><span class="line"></span><span>收货地址</span></div>
            <p><span class="address">收件人</span><input type="text" placeholder="请输入姓名"></p>
            <p><span class="address">联系电话</span><input type="tel" placeholder="请输入联系电话"></p>
            <p class="area"><span>收货地址</span> <textarea name="" id="" cols="30" rows="10" placeholder="请输入详细收货地址"></textarea></p>
        </div>
        <div class="base-mes bgw">
            <div class="title"><span class="line"></span><span>结算明细</span></div>
            <p><span>商品数量</span><span class="number">{{shopNum}}</span></p>
            <p><span>商品总价</span><span class="number">￥{{money}}</span></p>
        </div>
        <p class="btn-kefu">联系客服</p>
    </div>
</template>

<script>
    export default {
        name: "orderDetail",
        data(){
            return{
                shopNum:'1',
                baseMoney:'437',
                money:'437'
            }
        },
        created(){

        },
        methods:{
            addOrreduce(type){
                if(type=='reduce'&& parseInt(this.shopNum) > 1){
                    this.shopNum = parseInt(this.shopNum)-1
                }
                if(type=='add'){
                    this.shopNum = parseInt(this.shopNum)+1
                }
                this.money = parseInt(this.baseMoney)*parseInt(this.shopNum)
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../../assets/css/function.scss";

    .order-detail {
        .bgw{
            background-color: #ffffff;
        }
        color: rgba(64, 64, 64, 1);
        .item {
            overflow: hidden;
            padding: px2rem(15px);
            .imgs-box {
                float: left;
                height: px2rem(153px);
                width: px2rem(211px);
                background-color: red;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .mes {
                float: left;
                width: px2rem(465px);
                box-sizing: border-box;
                padding: px2rem(10px) px2rem(10px) 0 px2rem(20px);
                .name {
                    font-size: px2rem(24px);
                    font-weight: 700;
                    line-height: px2rem(28px);
                }
                .money {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                    p {
                        font-weight: 700;
                        color: rgba(211, 30, 20, 1);
                        font-size: px2rem(30px);
                    }
                    .num {
                        span{
                            border:1px solid rgba(209, 209, 209, 1);
                            background-color: rgba(248,248,248,1);
                            display: inline-block;
                           line-height: px2rem(34px);
                            width: px2rem(41px);
                            text-align: center;
                        }
                    }
                }
            }
        }
        .base-mes{
            margin-top: px2rem(10px);
            padding: 0 px2rem(20px) px2rem(20px) px2rem(20px);
            p{
                line-height: px2rem(70px);
                font-size: px2rem(28px);
                border-bottom: 1px dashed rgba(208,208,208,1);
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-top: px2rem(20px);
                /*overflow: hidden;*/
                .address{
                    flex: 1;
                }
                input{
                    flex: 4;
                    line-height: 100%;
                    /*float: right;*/
                    outline: 0 none;
                    border: 0 none;
                }
                input::-webkit-input-placeholder {
                    color:rgba(192, 192, 192, 1) ;
                    text-align: right;
                }
            }
            .title{
                line-height: px2rem(70px);
                font-size: px2rem(30px);
                color: rgba(64, 64, 64, 1);
                font-weight: 700;
                display: flex;
                align-items: center;
                flex-direction: row;

                border-bottom:1px solid rgba(208,208,208,1);
                .line{
                    margin-right: px2rem(20px);
                    display: inline-block;
                    height: px2rem(30px);
                    width: px2rem(8px);
                    border-radius: px2rem(8px);
                    background-color:rgba(211, 30, 20, 1) ;
                }
            }
            .area{
                display: flex;
                align-items: flex-start;
                flex-direction: column;
                border-bottom: 0 none;
                textarea{
                    width: 100%;
                    height: px2rem(123px);
                }
                textarea::-webkit-input-placeholder {
                    color:rgba(192, 192, 192, 1) ;
                   margin-left: px2rem(50px);
                }
            }
            .number{
                color:rgba(211, 30, 20, 1) ;
            }
        }
        .btn-kefu{
            position: fixed;
            bottom: 0;
            color: #ffffff;
            line-height: px2rem(90px);
            width: 100%;
            font-size: px2rem(40px);
            text-align: center;
            background-color:rgba(211, 30, 20, 1);
        }
    }

</style>