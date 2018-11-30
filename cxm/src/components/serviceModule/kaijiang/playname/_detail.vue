<template>
    <div class="kj-detail">
        <!--头部开始-->
        <div class="head">
            <span class="back-img" @click="goBack()"><img src="~/assets/img/ret.png" alt=""></span>
            <div class="head-text">
                {{numsObj.lotteryName}}期次详情
            </div>
            <div style="width:0.9rem;"></div>
        </div>
        <div class="d-content">
            <div class="d-info">
                <div class="dc-top">
                    <p>{{numsObj.lotteryName}}</p>
                    <p>{{numsObj.period}}</p>
                    <p>{{numsObj.prizeDate}}</p>
                </div>
                <div class="dc-btm">
                    <div class="ball">
                        <p class="redball" v-for="(r,i) in numsObj.redPrizeNumList" :key='i'>
                            {{r}}
                        </p>
                        <p class="blueball" v-for="b in numsObj.bluePrizeNumList" :key=b>
                            {{b}}
                        </p>
                    </div>
                </div>
            </div>
            <div class="jcje">
                <div class="first-xl">
                            <p>
                               <span>
                                   本期销量（元）
                                </span> 
                               <span class="redcolor">
                                   {{numsObj.sellAmount}}
                               </span>
                            </p>
                            <p>
                                <span>
                                   奖池奖金（元）
                                </span> 
                               <span class="redcolor">
                                   {{numsObj.prizes}}
                               </span>
                            </p>
                </div>
                <table>
                    <tbody>
                        <tr>
                            <td>奖项</td>
                            <td>中奖数目（注）</td>
                            <td>每注金额（元）</td>
                        </tr>
                        <tr v-for="(item,i) in numsObj.superLottoRewardDetailsList" :key=i>
                            <td>{{item.rewardLevelName}}</td>
                            <td>{{item.rewardNum}}</td>
                            <td class='redcolor'>{{item.rewardPrice}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<style lang='scss' scoped>
@import '~/assets/css/function.scss';
.kj-detail{
    .head {
        position: fixed;
        z-index: 10;
        top: 0;
        left: 0;
        width: 100%;
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
        .data-img{
            img{
                width: px2rem(36px);
            }
        }
    }
    .d-content{
        position: absolute;
        top: px2rem(100px);
        width: 100%;
        .d-info{
            background: white;
            padding: px2rem(37px) px2rem(31px);
            .dc-top{
                display: flex;
                align-items: center;
                justify-content: space-between;
                p:first-of-type{
                    font-size: px2rem(32px);
                    color: #191919;
                }
                p:nth-child(2){
                    color: #191919;
                    font-size: px2rem(28px);
                }
                p:last-of-type{
                    color: #a7a7a7;
                    font-size: px2rem(22px);
                }
            }
            .dc-btm{
                display: flex;
                align-items: center;
                justify-content: space-between;
                .ball{
                    margin-top: px2rem(30px);
                    display: flex;
                    p{
                        width: px2rem(48px);
                        height: px2rem(48px);
                        border-radius: 100%;
                        color: #fff;
                        margin-right: px2rem(10px);
                        text-align: center;
                        line-height: px2rem(48px);
                    }
                    .redball{
                        background: #DB1D36;
                    }
                    .blueball{
                        background: #268CDF;
                    }
                }
            }
        }
        .jcje{
            background: white;
            margin-top: px2rem(20px);
            padding: px2rem(20px) 0;
            table{
                border: 1px solid #f0f0f0;
                width: px2rem(696px);
                margin: 0 auto;
                tr{
                    td{
                        height: px2rem(61px);
                        width: 33.3%;
                        border: 1px solid #f0f0f0;
                        text-align: center;
                        font-size: px2rem(26px);
                        color: #191919;
                    }
                    .redcolor{
                        color: #DB1D36;
                    }
                }
                tr:nth-child(2){
                    td{
                        height: px2rem(61px);
                    }
                }
            }
        }
    }
    .first-xl{
        width: px2rem(696px);
        margin: 0 auto;
        height: px2rem(134px);
        display: flex;
        align-items: center;
        border-top: 1px solid #f0f0f0;
        border-left: 1px solid #f0f0f0;
        p{
            width: 50%;
            border-right: 1px solid #f0f0f0;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            span{
                font-size: px2rem(26px);
            }
            span:last-of-type{
                color: #DB1D36;
            }
        }
    }
}
</style>
<script>
import axios from '~/plugins/axios'
export default {
    name: 'termnum',
    head(){
        return {
            title: `${this.numsObj.period}${this.numsObj.lotteryName}开奖结果查询_${this.numsObj.lotteryName}开奖结果公告 - 彩小秘彩票`,
            meta: [
              { name: 'keywords', content: `${this.numsObj.period}${this.numsObj.lotteryName}开奖结果，${this.numsObj.period}${this.numsObj.lotteryName}开奖公告，${this.numsObj.period}${this.numsObj.lotteryName}开奖查询`},
              { hid: 'description', name: 'description', content: `彩小秘彩票网为您提供最新最快的${this.numsObj.lotteryName}开奖结果，${this.numsObj.period}${this.numsObj.lotteryName}开奖结果查询，包括${this.numsObj.lotteryName}历史中奖结果查询，历史走势查询等信息！` }
            ]
        }
    },
    async asyncData({ params,query }) {
        let pam = {
            lotteryClassify: query.lotteryId,
            termNum: params.detail
        }
        let { data } = await axios.querySzcOpenPrizesByDate(pam);
        if(data.code==0){
            return {
                numsObj: data.data
            };
        }
    },
    methods:{
        goBack(){
            this.$router.go(-1)
        },
    }
}
</script>


