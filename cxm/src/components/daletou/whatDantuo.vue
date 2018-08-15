<template>
    <div class="what-dantuo">
        <!--头部开始-->
        <div class="head">
            <span class="back-img" @click="goBack()"><img src="../../assets/img/ret.png" alt=""></span>
            <div class="head-text">
                <span>彩小秘·什么是胆拖</span>
            </div>
            <div class="memu"></div>
        </div>
        <!--躯干-->
        <div class="body">
            <div class="body-in">
                <p class="body-in-title">什么是胆拖？</p>
                <p>在胆拖投注中，我们把号码分成胆码和托码两部分，胆码就是您认为出现机会最大的号码，它在所投注的每一注彩票里都固定出现，托码即补充的其他可能出现的不同号码，由托码和胆码共同组成的一注完整的投注号码。</p>
                <p class="title-two">以双色球为例</p>
                <p>假设您认为红球 01 02 03 04 05 必出，红球 31 32 33 可能会出，篮球选择16，那么则01 02 03 04 05作为胆码，他们在每注彩票都固定出现，将31 32 33 作为托码， 表示为（01 02 03 04 05）31 32 33 ：16</p>
                <p>这样胆码和托码组合出来就是一下几注号码</p>
                <p>01 02 03 04 05 31 ： 16</p>
                <p>01 02 03 04 05 32 ： 16</p>
                <p>01 02 03 04 05 33 ： 16</p>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
    @import "../../assets/css/function.scss";

    .what-dantuo {
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
            .memu {
                width: px2rem(30px);
            }
        }
        .body {
            width: 100%;
            position: absolute;
            top: px2rem(100px);
            bottom: 0;
            overflow: auto;
            .body-in{
                background-color: #ffffff;
                box-sizing: border-box;
                width: 100%;
                height: 100%;
                padding: px2rem(40px);
                padding-top: px2rem(60px);
                color: #505050;
                font-size: px2rem(26px);
                p{
                    line-height: px2rem(48px);
                }
                .body-in-title{
                    font-size: px2rem(28px);
                    color: #EA5504;
                }
                .title-two{
                    margin-top: px2rem(30px);
                    font-size: px2rem(28px);
                    font-weight: 700;
                }
            }
        }
    }
</style>
<script>
    import {Indicator} from 'mint-ui';

    export default {
        name: "programmeDetails",
        data() {
            return {}
        },
        created(){},
        mounted(){},
        methods:{
            // 头部返回
            goBack() {
                this.$router.go(-1);
            },
        },
        computed:{},
        watch: {},
        destroyed(){},
        beforeRouteLeave(to, from, next) {
            next()
        }
    }
</script>