<template>
    <div class="ballTeamDetails">
        <!--头部开始-->
        <div class="head">
            <span class="back-img" @click="goBack()"><img src="../../../../assets/img/ret.png" alt=""></span>
            <div class="head-text">
                球队资料
            </div>
            <div style="width:0.9rem;"></div>
        </div>
        <div class="team-details">
            <div class="team-top">
                <img :src="teamObj.teamPic" :alt=teamObj.teamAddr>
                <div class="team-name">{{teamObj.teamAddr}}</div>
                <table>
                    <tbody>
                        <tr>
                            <td colspan="2">球队介绍</td>
                        </tr>
                        <tr>
                            <td>成立时间: {{teamObj.teamTime}}</td>
                            <td>球场: {{teamObj.court}}</td>
                        </tr>
                        <tr>
                            <td>国家地区: {{teamObj.contry}}</td>
                            <td>球场容量: {{teamObj.teamCapacity}}</td>
                        </tr>
                        <tr>
                            <td>所在城市: {{teamObj.city}}</td>
                            <td>球队价值: {{teamObj.teamValue}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <ul class="team-nav">
                <li v-for="(item,i) in navlist" :key=i>
                    <p @click="teamtab($event)" :class="item==selectedMd?'active':''">{{item}}</p>
                </li>
            </ul>
            <div class="team-btm">
                <div class="team-md" v-show="selectedMd=='球员名单'" v-if="teamObj.playerlist">
                    <div class="team-mdBox">
                        <div class="team-zw">
                            {{teamObj.playerlist.goalKeepers.playerType}}
                        </div>
                        <div class="team-person">
                            <p v-for="(data,index) in teamObj.playerlist.goalKeepers.playerList" :key=index>
                                {{data.playerNo}}-{{data.playerName}}
                            </p>
                        </div>
                        <div class="null-statep" v-show="teamObj.playerlist.goalKeepers.playerList.length<=0">暂无数据</div>
                    </div>
                    <div class="team-mdBox">
                        <div class="team-zw">
                            {{teamObj.playerlist.forwards.playerType}}
                        </div>
                        <div class="team-person">
                            <p v-for="(data,index) in teamObj.playerlist.forwards.playerList" :key=index>
                                {{data.playerNo}}-{{data.playerName}}
                            </p>
                        </div>
                        <div class="null-statep" v-show="teamObj.playerlist.forwards.playerList.length<=0">暂无数据</div>
                    </div>
                    <div class="team-mdBox">
                        <div class="team-zw">
                            {{teamObj.playerlist.midPlayers.playerType}}
                        </div>
                        <div class="team-person">
                            <p v-for="(data,index) in teamObj.playerlist.midPlayers.playerList" :key=index>
                                {{data.playerNo}}-{{data.playerName}}
                            </p>
                        </div>
                        <div class="null-statep" v-show="teamObj.playerlist.midPlayers.playerList.length<=0">暂无数据</div>
                    </div>
                    <div class="team-mdBox">
                        <div class="team-zw">
                            {{teamObj.playerlist.backPlayers.playerType}}
                        </div>
                        <div class="team-person">
                            <p v-for="(data,index) in teamObj.playerlist.backPlayers.playerList" :key=index>
                                {{data.playerNo}}-{{data.playerName}}
                            </p>
                        </div>
                        <div class="null-statep" v-show="teamObj.playerlist.backPlayers.playerList.length<=0">暂无数据</div>
                    </div>
                </div>
                <div class="team-zj" v-show="selectedMd=='近期战绩'" v-if="teamObj.recentRecord">
                    <div class="zj-nav" v-show="teamObj.recentRecord.recentRecordList.length>0">
                        <p>最近战绩</p>
                        <p>{{teamObj.recentRecord.matchCount}}场比赛</p>
                        <p>{{teamObj.recentRecord.homeTeam}}</p>
                        <p>
                            <span>{{teamObj.recentRecord.win}}胜</span>
                            <span>{{teamObj.recentRecord.flat}}平</span>
                            <span>{{teamObj.recentRecord.negative}}负</span>
                        </p>
                    </div>
                    <div class="zj-content">
                        <ul class="zj-label" v-show="teamObj.recentRecord.recentRecordList.length>0">
                            <li>赛事</li>
                            <li>日期</li>
                            <li></li>
                            <li>比分</li>
                            <li></li>
                            <li>胜负</li>
                        </ul>
                        <div class="zj-list" v-for="(item,i) in teamObj.recentRecord.recentRecordList" :key=i>
                            <div class="zj-item">
                                {{item.match}}
                            </div>
                            <div class="zj-item">
                                {{item.date}}
                            </div>
                            <div class="zj-item" :style="{'color':item.hTeam==teamObj.recentRecord.homeTeam?color(item.status):'#6f6f6f'}">
                                {{item.hTeam}}
                            </div>
                            <div class="zj-item" :style="{'color':color(item.status)}">
                                {{item.score}}
                            </div>
                            <div class="zj-item" :style="{'color':item.vTeam==teamObj.recentRecord.homeTeam?color(item.status):'#6f6f6f'}">
                                {{item.vTeam}}
                            </div>
                            <div class="zj-item" :style="{'color':color(item.status)}">
                                {{item.status}}
                            </div>
                        </div>
                    </div>
                    <div class="null-state" v-show="teamObj.recentRecord.recentRecordList.length<=0">暂无数据</div>
                </div>
                <div class="team-ss" v-show="selectedMd=='未来赛事'" v-if="teamObj.futureMatch">
                    <table>
                        <tbody>
                            <tr v-show="teamObj.futureMatch.matchInfoFutureList.length>0">
                                <td>比赛时间</td>
                                <td>赛事</td>
                                <td>
                                    <span>主队</span>
                                    <span>客队</span>
                                </td>
                            </tr>
                            <tr v-for="(item,i) in teamObj.futureMatch.matchInfoFutureList" :key=i>
                                <td>{{item.date}}</td>
                                <td>{{item.matchName}}</td>
                                <td>
                                    <span>{{item.hTeam}}</span>
                                    <span>VS</span>
                                    <span>{{item.vTeam}}</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="null-state" v-show="teamObj.futureMatch.matchInfoFutureList.length<=0">暂无数据</div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang='scss' scoped>
@import '../../../../assets/css/function.scss';
.ballTeamDetails{
    .null-state,.null-statep{
        text-align: center;
        color: #ccc;
        font-size: px2rem(26px);
        padding: px2rem(20px) 0;
    }
    .null-statep{
        border-right: 1px solid #f0f0f0;
        border-bottom: 1px solid #f0f0f0;
    }
    .head {
        overflow: hidden;
        height: px2rem(100px);
        background: #d12120;
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
          color: #fff;
        }
        .data-img{
            img{
                width: px2rem(36px);
            }
        }
    }
    .team-details{
        position: absolute;
        top: px2rem(100px);
        overflow: auto;
        bottom: 0;
        -webkit-overflow-scrolling: touch !important;
        width: 100%;
        left: 0;
        .team-top{
            padding-top: px2rem(51px);
            padding-bottom: px2rem(28px);
            background: white;
            img{
                display: block;
                margin: 0 auto px2rem(20px);
                width: px2rem(120px);
            }
            .team-name{
                text-align: center;
                font-size: px2rem(30px);
                font-weight:500;
                color:rgba(25,25,25,1);
            }
            table{
                margin: px2rem(30px) auto 0;
                width: px2rem(696px);
                border: 1px solid #f0f0f0;
                tr{
                    height: px2rem(61px);
                    td{
                        padding-left: px2rem(30px);
                        border: 1px solid #f0f0f0;
                        font-size: px2rem(24px);
                        color: #6F6F6F;
                    }
                }
                tr:first-of-type{
                    background: #EDEDED;
                    td{
                        color: #333;
                        font-weight:bold;
                    }
                }
            }
        }
        .team-nav{
            display: flex;
            align-items: center;
            height: px2rem(68px);
            li{
                flex: 1;
                display: flex;
                justify-content: center;
                font-size: px2rem(24px);
                color: #6f6f6f;
                p{
                    height: 100%;
                    line-height: px2rem(68px);
                    width: px2rem(128px);
                    text-align: center;
                    box-sizing: border-box;
                }
                .active{
                    color: #d12120;
                    border-bottom: 2px solid #d12120;
                }
            }
        }
        .team-btm{
            background: white;
            padding: px2rem(30px);
            .team-mdBox{
                border: 1px solid #f0f0f0;
                border-bottom: none;
                border-right: none;
                margin-bottom: px2rem(30px);
                .team-zw{
                    border-right: 1px solid #f0f0f0;
                    background: #F7F7F7;
                    height: px2rem(60px);
                    line-height: px2rem(60px);
                    border-bottom: 1px solid #f0f0f0;
                    box-sizing: border-box;
                    padding-left: px2rem(30px);
                    font-size: px2rem(24px);
                    color: #333333;
                    font-weight:bold;
                }
                .team-person{
                    overflow: hidden;
                    p{
                        float: left;
                        width: 50%;
                        height: px2rem(60px);
                        line-height: px2rem(60px);
                        box-sizing: border-box;
                        padding-left: px2rem(30px);
                        font-size: px2rem(24px);
                        color: #6F6F6F;
                        border-right: 1px solid #f0f0f0;
                        border-bottom: 1px solid #f0f0f0;
                    }
                }
            }
            .team-mdBox:last-of-type{
                margin: 0;
            }
            .team-zj{
                .zj-nav{
                    border-top: 1px solid #f0f0f0;
                    border-bottom: 1px solid #f0f0f0;
                    height: px2rem(80px);
                    display: flex;
                    align-items: center;
                    p{
                        margin-right: px2rem(10px);
                    }
                    p:first-of-type{
                        font-size: px2rem(26px);
                        color: #333;
                    }
                    p:nth-child(2),p:nth-child(3){
                        font-size: px2rem(24px);
                        color: #6f6f6f;
                    }
                    p:last-of-type{
                        font-size: px2rem(24px);
                        span:first-of-type{
                            color: #d12120;
                        }
                        span:nth-child(2){
                            color: #0099d9;
                        }
                        span:nth-child(3){
                            color: #44ae35;
                        }
                    }
                }
                .zj-content{
                    .zj-label{
                        display: flex;
                        align-items: center;
                        height: px2rem(80px);
                        li{
                            flex: 2;
                            text-align: center;
                            font-size: px2rem(22px);
                            color: #6f6f6f;
                        }
                        li:nth-child(1),li:nth-child(4),li:nth-child(6){
                            flex: 1;
                        }
                    }
                    .zj-list{
                        border-top: 1px solid #f0f0f0;
                        display: flex;
                        align-items: center;
                        height: px2rem(80px);
                        .zj-item{
                            flex: 2;
                            text-align: center;
                            font-size: px2rem(22px);
                            color: #6f6f6f;
                        }
                        .zj-item:nth-child(1),.zj-item:nth-child(4),.zj-item:nth-child(6){
                            flex: 1;
                        }
                    }
                }
            }
            .team-ss{
                table{
                    width: px2rem(696px);
                    margin: 0 auto;
                    border: 1px solid #f0f0f0;
                    tbody{
                        tr{
                            height: px2rem(61px);
                            td{
                                border: 1px solid #f0f0f0;
                                text-align: center;
                                font-size: px2rem(24px);
                                color: #6f6f6f;
                            }
                            td:first-of-type{
                                width: 30%;
                                font-size: px2rem(20px);
                            }
                            td:nth-child(2){
                                width: 20%;
                            }
                            td:last-of-type{
                                width: 50%;
                                span{
                                    float: left;
                                    display: block;
                                    width: 20%;
                                }
                                span:nth-child(1),span:nth-child(3){
                                    width: 40%;
                                }
                            }
                        }
                        tr:first-of-type{
                            background: #EDEDED;
                            td:last-of-type{
                                span:last-of-type{
                                    float: right;
                                    width: 40%;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
<script>
import {Indicator} from 'mint-ui';
import api from '../../../../fetch/api'
export default {
    name: 'ballTeamDetails',
    beforeCreate() {
        Indicator.open()
    },
    data(){
        return {
            selectedMd: '球员名单',
            navlist:[
                '球员名单','近期战绩','未来赛事'
            ],
            teamObj: {}
        }
    },
    methods:{
        goBack(){
            this.$router.go(-1)
        },
        teamtab(c){
            this.selectedMd = c.target.innerText
        },
        color(c){
            switch (c){
                case '负': return '#44ae35';
                case '平': return '#0099d9';
                case '胜': return '#d12120';
            }
        },
        fetchData(){
            let pam = {
                teamId: this.$route.query.teamId
            }
            api.teamDetailForDiscovery(pam)
            .then(res => {
                if(res.code == 0 ){
                    this.teamObj = res.data
                }
            })
        }
    },
    mounted(){
        this.fetchData()
    }
}
</script>


