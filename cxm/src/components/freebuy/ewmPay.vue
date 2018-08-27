<template>
    <div class="ewm-pay">
        <!--头部开始-->
        <div class="head">
            <span class="back-img" @click="goBack()"><img src="../../assets/img/ret.png" alt=""></span>
            <div class="head-text">
                <span>微信支付</span>
            </div>
            <div>
                <span></span>
            </div>
        </div>
        <div class="bodyed">
            <div class="img-box" id="qrcode">
                <img :src='imgUrl' alt="">
            </div>
            <p class="p1">请将二维码保存到相册,然后打开微信扫描二维码进行支付</p>
            <p class="p2">*支付时请注意收款方为cxm</p>
            <div class="help">
                <img src="./img/4321_02.jpeg" alt="">
            </div>
        </div>

    </div>
</template>

<script>
    import api from '../../fetch/api'
    export default {
        name: "ewm-pay",
        data() {
            return {
                imgUrl:''
            }
        },
        created(){

        },
        mounted(){
            this.ewmPay()
        },
        methods:{
            goBack(){
                this.$router.go(-1)
            },
            ewmPay(){
                let data = {
                    base64Id:window.location.href.split('=')[1]
                }
                api.base64Id(data)
                    .then(res => {
                        if (res.code == 0) {
                           this.imgUrl =  res.data.base64Url
                        }
                    })
            },
        }
    }
</script>

<style scoped lang='scss'>
    @import '../../assets/css/function.scss';
    .ewm-pay{
        display: flex;
        flex-direction: column;
        justify-content: center;
        .head {
            overflow: hidden;
            height: px2rem(100px);
            background: #f4f4f4;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .back-img {
                display: inline-block;
                height: px2rem(30px);
                width: px2rem(30px);
                margin-left: px2rem(30px);
                img {
                    width: 100%;
                }
            }
            .head-text {
                display: flex;
                align-items: center;
                font-size: px2rem(32px);
                color: #505050;
            }


        }
        .bodyed{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .img-box{
                margin-top: px2rem(50px);
                margin-bottom: px2rem(30px);
                width: px2rem(700px);
                height: px2rem(700px);
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .help{
                width: 100%;
                img{
                    width: 100%;
                }
            }
            .p1{
                width: 90%;
                text-align: center;
                font-size: 12px;
            }
            .p2{
                width: 80%;
                text-align: center;
                color: #8C1B01;
                font-size: 16px;
            }
        }



    }
</style>