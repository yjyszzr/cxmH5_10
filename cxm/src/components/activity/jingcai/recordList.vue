<template>
    <div class="record-list" :style="{width:'100%'}">
        <div class="body">
            <ul class="ul-list">
                <li @click="goMyRecord(item)" v-for="(item,index) in historyList" :key=index>
                    <p class="left-p">{{item.period}} <span class="img-new"><img v-if="index==0" src="./images/new.png" alt=""></span> </p>
                    <p class="right-p">查看竞猜详情 > </p>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss">
    @import "../../../assets/css/function.scss";
    .record-list {
        background: url("./images/base.jpg") no-repeat center;
        min-height: px2rem(1200px);
        .body {
            .ul-list{
                width: 100%;
                padding: 0 px2rem(32px);
                box-sizing: border-box;
                li{
                    color: #ffffff;
                    font-size: px2rem(30px);
                    overflow: hidden;
                    border-bottom: 1px solid #ffffff;
                    line-height: px2rem(100px);
                    .left-p{
                        float: left;
                        position: relative;
                        .img-new{
                            display: inline-block;
                            height: px2rem(50px);
                            width: px2rem(100px);
                            position: absolute;
                            right: px2rem(-100px);
                            top: px2rem(20px);
                            img{
                                width: 100%;
                            }
                        }
                    }
                    .right-p{
                        float: right;
                    }
                }
            }

        }
    }
</style>
<script>
    import api from '../../../fetch/api'
    export default {
        name: "jingcai",
        data() {
            return {
                historyList:[]
            }
        },
        created(){
          this.getMyhistoryList()
        },
        methods: {
            //获取我的历史记录
            getMyhistoryList(){
                let data = {
                    str:''
                }
                api.userAnswersList(data)
                    .then(res => {
                        if (res.code == 0) {
                            this.historyList = res.data
                        }
                    })
            },
            //去详情页
            goMyRecord(item){
                this.$router.push({
                    path:"/activity/jingcai",
                    query:{
                        matchId:item.matchId
                    }
                })
            }
        }
    }
</script>