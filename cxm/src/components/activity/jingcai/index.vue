<template>
    <div class="jing-cai" :style="{width:'100%'}">
        <div class="body">
            <p class="active-describe" @click="activeDescribe">活动说明</p>
            <p class="money">2867.22 <span>元</span></p>
            <p class="describe">奖金滚存</p>
            <p class="person">260人次参加竞猜</p>
            <p class="memo">备注：每增加一个用户，奖池增加0.5元</p>
            <div class="history">
                <p>查看上期中奖纪录</p>
                <p>查看我的竞猜纪录</p>
            </div>
            <div class="team">
                <div class="img-box">

                </div>
                <div>
                    <p class="team-name">
                        <span>汗秘尔顿</span>
                        VS
                        <span>凯尔特人</span>
                    </p>
                    <p class="active-time">
                        活动倒计时： <span>01:22:15</span>
                    </p>
                </div>
                <div class="img-box">

                </div>
            </div>
            <p class="once-time">拥有一次竞猜机会，剩余7次奖金翻倍机会</p>
            <ul class="ul-box">
                <li>
                    <p>全场进球数大于2.5</p>
                    <div class="btn-box">
                        <div>是</div>
                        <div>否</div>
                    </div>
                </li>
                <li>
                    <p>全场进球数大于2.5</p>
                    <div class="btn-box">
                        <div>是</div>
                        <div>否</div>
                    </div>
                </li>
            </ul>
            <p class="jingcai-now">立即竞猜</p>
        </div>
    </div>
</template>

<style lang="scss">
    @import "../../../assets/css/function.scss";
    .jing-cai {
        background: url("./images/base.jpg") no-repeat center;
        background-size: 100% auto;
        .body {
            position: relative;
            .active-describe {
                position: absolute;
                padding: 0 px2rem(20px);
                right: 0px;
                top: px2rem(50px);
                line-height: px2rem(48px);
                color: #ffffff;
                border-radius: px2rem(24px) 0 0 px2rem(24px);
                background: rgba(179, 179, 179, .5);
            }
            display: flex;
            /*justify-content: center;*/
            align-items: center;
            flex-direction: column;
            .money {
                margin-top: px2rem(112px);
                font-size: px2rem(76px);
                color: #f8d15c;
                span {
                    font-size: px2rem(48px);
                }
            }
            .describe {
                font-size: px2rem(42px);
                color: #ffffff;
            }
            .person {
                color: #f8d15c;
                font-size: px2rem(36px);
                margin-top: px2rem(12px);
            }
            .memo {
                margin-top: px2rem(22px);
                border: 1px solid #9f9f9f;
                color: #cccccc;
                font-size: px2rem(26px);
                padding: px2rem(5px) px2rem(10px);
            }
            .history {
                margin-top: px2rem(38px);
                display: flex;
                flex-direction: row;
                p {
                    font-size: px2rem(26px);
                    color: #cccccc;
                    padding: 0 px2rem(20px);
                    text-decoration:underline
                }
            }
            .team {
                margin-top: px2rem(48px);
                display: flex;
                flex-direction: row;
                border-radius: px2rem(10px);
                background-color: rgba(49, 60, 19, .5);
                padding: px2rem(36px) px2rem(28px) px2rem(45px) px2rem(28px);
                .team-name {
                    font-size: px2rem(34px);
                    color: #ffffff;
                    span {
                        padding: 0 px2rem(30px);
                    }
                }
                .img-box {
                    height: px2rem(80px);
                    width: px2rem(80px);
                    background-color: red;
                    border-radius: 100%;
                    overflow: hidden;
                }
                .active-time {
                    text-align: center;
                    font-size: px2rem(24px);
                    color: #ffffff;
                    margin-top: px2rem(10px);
                }

            }
            .once-time {
                margin-top: px2rem(24px);
                font-size: px2rem(24px);
                color: #cccccc;

            }
            .ul-box {
                margin-top: px2rem(50px);
                li {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    padding: px2rem(10px) 0;
                    color: white;
                    p {
                        font-size: px2rem(36px);
                    }
                    .btn-box {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        div {
                            margin: px2rem(30px);
                            padding: px2rem(15px) px2rem(120px);
                            border: 1px solid #ffffff;
                            font-size: px2rem(28px);
                        }
                    }
                }
            }
            .jingcai-now {
                width: px2rem(600px);
                color: #ffffff;
                line-height: px2rem(80px);
                background: rgb(234, 85, 4);
                text-align: center;
                font-size: px2rem(24px);
                margin-bottom: px2rem(100px);
            }
        }
    }
</style>
<script>
    import {MessageBox} from 'mint-ui';

    export default {
        name: "jingcai",
        data() {
            return {}
        },
        methods: {
            activeDescribe() {
                MessageBox.alert('', {
                    message: '1.用户累计购彩满50元即可获得1次竞猜机会，\n' +
                    '参与竞猜只能提交一次答案，其余竞猜机会将转\n' +
                    '化为该竞猜答案的获奖次数。例：有3次竞猜机\n' +
                    '会，提交答案后将视为3次竞猜，若最后全部答\n' +
                    '对，即可获得3次瓜分奖池的机会。\n' +
                    '2.需竞猜该场比赛的所有选项，全部答对即可瓜\n' +
                    '分奖池内的奖金。\n' +
                    '3.每1人次参加竞猜，奖池奖金将增加1元，上不\n' +
                    '封顶，若8个选项全部答对，将瓜分奖池内的奖金。\n' +
                    '4. 竞猜所得奖金只可用户购彩不能提现，购彩中\n' +
                    '奖奖金可以提现。\n' +
                    '5. 本活动最终解释权归彩小秘所有。',
                    title: '活动说明 ',
                    // confirmButtonText: '知道了',
                    // closeOnClickModal: false
                }).then(action => {

                });

            }
        }
    }
</script>