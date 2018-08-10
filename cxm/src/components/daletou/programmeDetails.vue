<template>
    <div class="programme-details">
        <!--头部开始-->
        <div class="head">
            <span class="back-img" @click="goBack()"><img src="../../assets/img/ret.png" alt=""></span>
            <div class="head-text">
                <span>彩小秘·方案详情</span>
            </div>
            <div class="memu"></div>
        </div>
        <!--躯干-->
        <div class="body">

        </div>
        <div class="footer">

        </div>


    </div>
</template>
<style scoped lang="scss">
    @import "../../assets/css/function.scss";

    .programme-details {
        /*.clearfix:after {content:"."; display:block; height:0; visibility:hidden; clear:both; }*/
        /*.clearfix { *zoom:1; }　*/
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
            top: px2rem(200px);
            bottom: px2rem(200px);
            overflow: auto;
        }
        .footer {
            box-sizing: border-box;
            width: 100%;
            position: absolute;
            bottom: 0;
            background-color: #ffffff;
            display: flex;
            flex-direction: column;
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