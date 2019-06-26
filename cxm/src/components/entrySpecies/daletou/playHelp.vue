<template>
    <div class="what-dantuo">
        <!--躯干-->
        <div class="body">
            <div class="body-in">
                <p class="body-in-title">投注截止时间</p>
                <p class="p">每周一、三、六19：30截止投注</p>
                <p class="body-in-title">开奖时间</p>
                <p class="p">每周一、三、六20：30开奖</p>
                <p class="body-in-title">玩法规则</p>
                <p class="p">5个红号+2个蓝号=1注（2元），追加投注1元（最高可中1800万）追加投注仅参与一，二等奖的奖金分配，同时追加奖金为当期基本投注对应单注奖金的80%，三至九等奖为固定奖金，无追加奖金。</p>
                <table class="table">
                    <tr>
                        <th>奖级</th>
                        <th>中奖条件</th>
                        <th>中奖说明</th>
                        <th>奖金</th>
                    </tr>
                    <tr>
                        <td>一等奖</td>
                        <td>
                            <div class="td-box">
                                <span class="redBall"></span>
                                <span class="redBall"></span>
                                <span class="redBall"></span>
                                <span class="redBall"></span>
                                <span class="redBall"></span>
                                <span class="blueBall"></span>
                                <span class="blueBall"></span>
                            </div>
                        </td>
                        <td>中5红+2蓝</td>
                        <td>浮动</td>
                    </tr>
                    <tr>
                        <td>二等奖</td>
                        <td>
                            <div class="td-box">
                                <span class="redBall"></span>
                                <span class="redBall"></span>
                                <span class="redBall"></span>
                                <span class="redBall"></span>
                                <span class="redBall"></span>
                                <span class="blueBall"></span>
                            </div>
                        </td>
                        <td>中5红+1蓝</td>
                        <td>浮动</td>
                    </tr>

                    <tr>
                        <td>三等奖</td>
                        <td>
                            <div class="td-box">
                                <div>
                                    <span class="redBall"></span>
                                    <span class="redBall"></span>
                                    <span class="redBall"></span>
                                    <span class="redBall"></span>
                                    <span class="redBall"></span>
                                </div>
                            </div>
                        </td>
                        <td>
                            <p>中5红</p>
                        </td>
                        <td>10000元</td>
                    </tr>
                    <tr>
                        <td>四等奖</td>
                        <td>
                            <div class="td-box">
                                <div>
                                    <span class="redBall"></span>
                                    <span class="redBall"></span>
                                    <span class="redBall"></span>
                                    <span class="redBall"></span>
                                    <span class="blueBall"></span>
                                    <span class="blueBall"></span>
                                </div>
                            </div>
                        </td>
                        <td>
                            <p>中4红+2蓝</p>
                        </td>
                        <td>3000元</td>
                    </tr>
                    <tr>
                        <td>五等奖</td>
                        <td>
                            <div class="td-box">
                                <div>
                                    <span class="redBall"></span>
                                    <span class="redBall"></span>
                                    <span class="redBall"></span>
                                    <span class="redBall"></span>
                                    <span class="blueBall"></span>
                                </div>
                            </div>

                        </td>
                        <td>
                            <p>中4红+1蓝</p>
                        </td>
                        <td>300元</td>
                    </tr>
                    <tr>
                        <td>六等奖</td>
                        <td>
                            <div class="td-box">
                                <div>
                                    <span class="redBall"></span>
                                    <span class="redBall"></span>
                                    <span class="redBall"></span>
                                    <span class="blueBall"></span>
                                    <span class="blueBall"></span>
                                </div>
                            </div>
                        </td>
                        <td>
                            <p>中3红+2蓝</p>
                        </td>
                        <td>200元</td>
                    </tr>
                    <tr>
                        <td>七等奖</td>
                        <td>
                            <div class="td-box">
                                <div>
                                    <span class="redBall"></span>
                                    <span class="redBall"></span>
                                    <span class="redBall"></span>
                                    <span class="redBall"></span>
                                </div>
                            </div>
                        </td>
                        <td>
                            <p>中4红</p>
                        </td>
                        <td>100元</td>
                    </tr>
                    <tr>
                        <td>八等奖</td>
                        <td>
                            <div class="td-box">
                                <div>
                                    <span class="redBall"></span>
                                    <span class="redBall"></span>
                                    <span class="redBall"></span>
                                    <span class="blueBall"></span>
                                </div>
                                <div>
                                    <span class="redBall"></span>
                                    <span class="redBall"></span>
                                    <span class="blueBall"></span>
                                    <span class="blueBall"></span>
                                </div>
                            </div>
                        </td>
                        <td>
                            <p>中3红+1蓝</p>
                            <p>中2红+2蓝</p>
                        </td>
                        <td>15元</td>
                    </tr>
                    <tr>
                        <td>九等奖</td>
                        <td>
                            <div class="td-box">
                                <div>
                                    <span class="redBall"></span>
                                    <span class="redBall"></span>
                                    <span class="redBall"></span>
                                </div>
                                <div>
                                    <span class="redBall"></span>
                                    <span class="redBall"></span>
                                    <span class="blueBall"></span>
                                </div>
                                <div>
                                    <span class="redBall"></span>
                                    <span class="blueBall"></span>
                                    <span class="blueBall"></span>
                                </div>
                                <div>
                                    <span class="blueBall"></span>
                                    <span class="blueBall"></span>
                                </div>
                            </div>
                        </td>
                        <td>
                            <p>中3红</p>
                            <p>中2红+1蓝</p>
                            <p>中1红+2蓝</p>
                            <p>中2蓝</p>
                        </td>
                        <td>5元</td>
                    </tr>
                </table>
            </div>
        </div>


    </div>
</template>
<style scoped lang="scss">
    @import "../../../assets/css/function.scss";

    .what-dantuo {
        .body {
            width: 100%;
            background-color: #ffffff;
            .body-in{
                background-color: #ffffff;
                box-sizing: border-box;
                width: 100%;
                height: auto;
                padding: px2rem(40px);
                color: #505050;
                font-size: px2rem(26px);
                .p{
                    line-height: px2rem(45px);
                }
                .redBall{
                    display: inline-block;
                    height: px2rem(25px);
                    width: px2rem(25px);
                    border-radius: 100%;
                    background-color: #d12120;
                }
                .blueBall{
                    display: inline-block;
                    height: px2rem(25px);
                    width: px2rem(25px);
                    border-radius: 100%;
                    background-color: #007aff;
                }
                .body-in-title{
                    font-weight: 700;
                    padding: px2rem(10px) 0;
                    font-size: px2rem(28px);
                }
                .table{
                    border: 1px solid #c7c7c7;
                    width: 100%;
                    td,th{
                        text-align: center;
                        border: 1px solid #c7c7c7;
                        padding: px2rem(20px) auto;
                    }
                    .td-box{
                        margin: px2rem(20px) 0;
                    }
                }
            }
        }
    }
</style>
<script>
    import {means,nativeApp} from '../../../util/common'
    export default {
        name: "playHelp",
        data() {
            return {}
        },
        created(){},
        mounted(){
            nativeApp({'methodName':'showTitle','title':'玩法帮助'})
            means('玩法帮助').isTitle
        },
        methods:{
            
        },
        computed:{},
        watch: {},
        destroyed(){},
        beforeRouteLeave(to, from, next) {
            next()
        }
    }
</script>