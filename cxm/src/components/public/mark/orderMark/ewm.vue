<template>
    <div class="oder">
        <div class="body">
            <div class="img-box">
                <img :src="imgUrl" alt="">
            </div>
        </div>
        <div class="ok" @click="okClick()">
            确定
        </div>
    </div>
</template>

<script>
    export default {
        name: "oderNum",
        data(){
            return{
                imgUrl:this.$store.state.order.addFriendsQRBarUrl,
                oderNum : this.$store.state.order.orderNum
            }
        },
        methods:{
            okClick(){
                this.$store.dispatch("getMarkShow", false)
            },
        }
    }
</script>

<style scoped lang="scss">
    @import "../../../../assets/css/function.scss";
    .oder{
        color: RGBA(80, 80, 80, 1);
        width: px2rem(550px);
        background-color: #ffffff;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: px2rem(10px);
        .title{
            line-height: px2rem(100px);
            display: flex;
            flex-direction: row;
            align-items: center;
            .order-text{
                color: RGBA(80, 80, 80, 1);
                font-size: px2rem(28px);
                margin-right: px2rem(10px);
            }
            .order-nun{
                color:RGBA(234, 85, 4, 1) ;
            }
        }
        .body{
            padding-top: px2rem(40px);
            padding-bottom: px2rem(40px);
            border-bottom: 1px solid silver;
            width: 100%;
            background:rgba(248,248,248,1);
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            .img-box{
                width: px2rem(500px);
                height: px2rem(500px);
                img{
                    height: 100%;
                    width: 100%;
                }
            }
        }
        .ok{
            text-align: center;
            width: 100%;
            padding-bottom: px2rem(30px);
            padding-top: px2rem(30px);
            color:RGBA(234, 85, 4, 1)

        }
    }
</style>