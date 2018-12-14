<template>
    <div class="oder">
        <div class="title">
            <p class="order-text">预测订单号: </p>
            <p class="order-nun"> {{orderLink}}</p>
        </div>
        <div class="body">
            <div>
                <p>第一步：长按复制链接</p>
                <p>第二步：打开微信分享给微信好友</p>
                <p>第三步：发送成功等待预测结果</p>
                <p>提示:若长按无法复制,请<a @click="reload()">刷新页面</a>再试</p>
            </div>
        </div>
        <div class="ok" @click="okClick()">
            确定
        </div>
    </div>
</template>

<script>
    import {getCsUrl} from '../../../../util/common.js'
    export default {
        name: "oderNum",
        data(){
            return{
                orderLink : getCsUrl()+'/user/analogOrder?id='+this.$store.state.order.orderNum
            }
        },
        methods:{
            okClick(){
                this.$store.dispatch("getMarkShow", false)
            },
            reload(){
                location.reload();
            }
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
            width: 100%;
            box-sizing: border-box;
            padding: px2rem(15px);
            p{
                width: 90%;
                word-wrap:break-word;  
                word-break:break-all;  
                overflow: hidden;
            }
            .order-text{
                color: RGBA(80, 80, 80, 1);
                font-size: px2rem(28px);
            }
            .order-nun{
                color:#d12120 ;
                font-size: px2rem(28px);
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
            div{
                p{
                    text-align: center;
                }
                p:last-of-type{
                    margin-top: px2rem(10px);
                    a{
                        color: #d12120;
                    }
                }
            }
        }
        .ok{
            text-align: center;
            width: 100%;
            padding-bottom: px2rem(20px);
            padding-top: px2rem(20px);
            color:#d12120;
            font-size: px2rem(35px);
        }
    }
</style>