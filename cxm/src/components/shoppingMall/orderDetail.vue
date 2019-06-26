<template>
    <div class="order-detail">
        <div class="order-box">
            <div class="item bgw">
                <div class="imgs-box">
                    <img :src="dataed.orderPic" alt="">
                </div>
                <div class="mes ">
                    <p class="name">{{dataed.description}}</p>
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
                <div class="title"><span class="line"></span><span>收货信息</span></div>
                <p><span class="address">收件人</span><input type="text" placeholder="请输入姓名" v-model=baseMes.linkName></p>
                <p><span class="address">联系电话</span><input type="tel" placeholder="请输入联系电话" v-model=baseMes.phoneNum></p>
                <p class="area"><span>收货地址</span> <textarea name="" id="" cols="30" rows="10" placeholder="请输入详细收货地址" v-model=baseMes.address></textarea></p>
            </div>
            <div class="base-mes bgw">
                <div class="title"><span class="line"></span><span>结算明细</span></div>
                <p><span>商品数量</span><span class="number">{{shopNum}}</span></p>
                <p><span>商品总价</span><span class="number">￥{{money}}</span></p>
            </div>
        </div>
        <p class="btn-kefu" @click="subOrder()">联系客服</p>
    </div>
</template>

<script>
    import api from "../../fetch/api";
    import {Toast} from "mint-ui";

    export default {
        name: "orderDetail",
        data(){
            return{
                pp:'',
                baseMes:{
                    linkName:'',
                    phoneNum:'',
                    address:''
                },
                shopNum:1,//商品数量
                money:'',//商品总价
                baseMoney:'',
                orderId:'',
                dataed:''
            }
        },
        created(){
            this.orderId = this.$route.query.orderId
            this.getOrderDetail()



        },
        methods:{
            //商品增加或减少
            addOrreduce(type){
                if(type=='reduce'&& parseFloat(this.shopNum) > 1){
                    this.shopNum = parseFloat(this.shopNum)-1
                }
                if(type=='add'){
                    this.shopNum = parseFloat(this.shopNum)+1
                }
                this.money = (parseFloat(this.baseMoney)*parseFloat(this.shopNum)).toFixed(2)
            },
            //获取订单详情
            getOrderDetail(){
                let data = {
                    orderId:this.orderId
                }
                api.orderDetail(data).then(res=>{
                    if(res.code==0){
                        this.baseMoney = res.data.price
                        this.money = res.data.price
                        this.dataed = res.data
                    }
                })
            },
            //提交订单
            subOrder(){
                if(this.baseMes.linkName!=''&&this.baseMes.phoneNum!=''&&this.baseMes.address!=''){
                    let data = {
                        address: this.baseMes.address,
                        contactsName: this.baseMes.linkName,
                        orderId: this.$route.query.orderId,
                        num: this.shopNum,
                        phone: this.baseMes.phoneNum
                    }
                    api.goodsUpdate(data).then(res=>{
                        if(res.code==0){
                            window.location.href = "https://www.sobot.com/chat/h5/index.html?sysNum=1a549fa1ac1b4c0f9eeda9953f62b9b2&titleFlag=3"
                        }
                    })
                }else {
                    Toast('请将收货基本信息填写完整！')
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../../assets/css/function.scss";

    .order-detail {
        .order-box{
            width: 100%;
            background: #ffffff;
            position: absolute;
            top: px2rem(0px);
            bottom: px2rem(90px);
            overflow: auto;
            -webkit-overflow-scrolling: touch !important;
        }
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
               // background-color: red;
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
            position: absolute;
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