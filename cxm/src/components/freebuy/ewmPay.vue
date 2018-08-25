<template>
    <div class="ewm-pay">
        <div class="img-box" id="qrcode">
            <img :src='imgUrl' alt="">
        </div>
        <p class="p1">请将二维码保存到相册,然后打开微信扫描二维码进行支付</p>
        <p class="p2">*支付时请注意收款方为cxm</p>
        <div class="help">
            <img src="./img/4321_02.jpeg" alt="">
        </div>
    </div>
</template>

<script>
    // import {getCsUrl} from '../../util/common'
    // import QRCode from 'qrcode';
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
            ewmPay(){
                let data = {
                    base64Id:window.location.href.split('=')[1]
                }
                console.log(data);
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
        justify-content: center;
        align-items: center;
        flex-direction: column;
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
</style>