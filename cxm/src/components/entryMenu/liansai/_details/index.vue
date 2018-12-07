<template>
    <div class="detail">
        <p v-show="false">{{num}}</p>
        <!--头部开始-->
        <div class="head">
            <span class="back-img" @click="goBack()"><img src="../../../../assets/img/ret.png" alt=""></span>
            <div class="head-text">
                <span>{{datas.leagueAddr}}</span>
            </div>
            <div class="memu-btn"></div>
        </div>
        <div class="body">
            <div class="tops">
                <div class="top-left">
                    <div class="img-box"><img :src='datas.leaguePic' alt="logo"></div>
                    <p class="name">{{datas.leagueAddr}}</p>
                    <div class="select" v-if="leagueSeasonInfoList.length>0">
                        <p class="select-p">{{leagueSeasonInfoList[0].matchSeason}}</p>
                    </div>
                </div>
                <div class="top-right">
                    <p class="name"><span v-if="datas.leagueType=='1'">联赛规则</span><span v-if="datas.leagueType=='0'">杯赛规则</span>
                    </p>
                    <p class="rule" v-bind:class="openDetail?'openDetails':''" v-if="datas.leagueRule!=''">
                        {{datas.leagueRule}}</p>
                    <p class="detail-btn" @click='openDetail=!openDetail'
                       v-show="datas.leagueRule&&datas.leagueRule.length>108"><span v-if="openDetail">收起</span><span
                            v-if="!openDetail">详情</span></p>
                </div>
            </div>
            <ul class="tab-ul">
                <li class="tab-li" v-for="(item,index) in tabArr" :key=index><span :class="item.cur?'curtab':''"
                                                                                   @click='navClick(item,index)'>{{item.name}}</span>
                    <span v-if="index!=5" class="line-clow"></span></li>
            </ul>
            <div class="container">
                <!--积分榜-->
                <div class="containered liansai-score" v-if='navBodyIndex =="0"'>
                    <ul class="score-nav-ul" v-if="leagueScore.matchType=='1'">
                        <li class="score-nav-li" v-for="(item,index) in scoreNavArr" :key=index><span
                                :class="item.cur?'scorecurtab':''"
                                @click="scoreCick(item,index)">{{item.name}}</span><span
                                v-if="index!=2" class="line-row"></span></li>
                    </ul>
                    <div class="score-main shoot">
                        <div v-show="matchScoreDTOList.length>0" v-if="leagueScore.matchType=='1'">
                            <div v-for="(item,index) in matchScoreDTOList" :key=index>
                                <table border="0" cellspacing="0" cellpadding="0" class="hot-table"
                                       v-if="index==scoreMainIndex">
                                    <tr class="t-head" v-if="leagueScore.matchType!='1'">
                                        <td colspan='9'>{{item.groupName}}</td>
                                    </tr>
                                    <tr class="hot-th">
                                        <td>排名</td>
                                        <td>球队</td>
                                        <td>赛</td>
                                        <td>胜</td>
                                        <td>平</td>
                                        <td>负</td>
                                        <td>进</td>
                                        <td>失</td>
                                        <td>积分</td>
                                    </tr>
                                    <tr class="hot-tr" v-for='(sunitem,index) in item.leagueCcoreList' :key=index>
                                        <td>{{sunitem.teamOrder}}</td>
                                        <td>{{sunitem.teamName}}</td>
                                        <td>{{sunitem.matchNum}}</td>
                                        <td>{{sunitem.matchH}}</td>
                                        <td>{{sunitem.matchD}}</td>
                                        <td>{{sunitem.matchL}}</td>
                                        <td>{{sunitem.ballIn}}</td>
                                        <td>{{sunitem.ballIn}}</td>
                                        <td :style="{color:'red'}">{{sunitem.score}}</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div v-show="matchScoreDTOList.length>0" v-if="leagueScore.matchType=='0'">
                            <table border="0" cellspacing="0" cellpadding="0" class="hot-table"
                                   v-for="(item,index) in matchScoreDTOList" :key=index>
                                <tr class="t-head">
                                    <td colspan='9'>{{item.groupName}}</td>
                                </tr>
                                <tr class="hot-th">
                                    <td>排名</td>
                                    <td>球队</td>
                                    <td>赛</td>
                                    <td>胜</td>
                                    <td>平</td>
                                    <td>负</td>
                                    <td>进</td>
                                    <td>失</td>
                                    <td>积分</td>
                                </tr>
                                <tr class="hot-tr" v-for='(sunitem,index) in item.leagueCcoreList' :key=index>
                                    <td>{{sunitem.teamOrder}}</td>
                                    <td>{{sunitem.teamName}}</td>
                                    <td>{{sunitem.matchNum}}</td>
                                    <td>{{sunitem.matchH}}</td>
                                    <td>{{sunitem.matchD}}</td>
                                    <td>{{sunitem.matchL}}</td>
                                    <td>{{sunitem.ballIn}}</td>
                                    <td>{{sunitem.ballIn}}</td>
                                    <td :style="{color:'#d12120'}">{{sunitem.score}}</td>
                                </tr>
                            </table>
                        </div>
                        <div v-show="matchScoreDTOList.length==0">
                            <div class="nullstatus score-nullstatus">
                                <img src="../../../../assets/img/juan.png" alt="">
                                <span>暂无数据</span>
                            </div>
                        </div>
                    </div>
                </div>
                <!--射手榜-->
                <div class="containered shoot" v-if='navBodyIndex =="1"'>
                    <div v-show="leagueShooterInfoList.length>0">
                        <table border="0" cellspacing="0" cellpadding="0" class="hot-table">
                            <tr class="hot-th">
                                <td>排名</td>
                                <td>球员</td>
                                <td>球队</td>
                                <td>球数</td>
                            </tr>
                            <tr class="hot-tr" v-for='(item,index) in leagueShooterInfoList' :key=index>
                                <td>{{item.sort}}</td>
                                <td>{{item.playerName}}</td>
                                <td>{{item.playerTeam}}</td>
                                <td>{{item.inNum}}</td>
                            </tr>
                        </table>
                    </div>
                    <div v-show="leagueShooterInfoList.length==0">
                        <div class="nullstatus score-nullstatus">
                            <img src="../../../../assets/img/juan.png" alt="">
                            <span>暂无数据</span>
                        </div>
                    </div>
                </div>
                <!--赛程安排-->
                <div class="containered shoot match" v-if='navBodyIndex =="2"'>
                    <div v-if="matchTurnGroupList.length>0">
                        <div class="match-nav">
                            <span class="match-nav-left" @click="upOrdown('up')"></span>
                            <ul class="mach-select-ul">
                                <li class="mach-select-li" v-if="item.cur"  v-for='(item,index) in matchTurnGroupList'
                                    :key=index
                                    @click="openMore()">
                                    <span>{{item.turnGroupName}}</span>
                                    <span ref="downImg"><img src="../../../../assets/img/freebuy_img/Collapse@3x.png"
                                                             alt=""></span>
                                </li>
                            </ul>
                            <span class="match-nav-right" @click="upOrdown('down')"></span>
                        </div>
                        <div class="match-navbox" v-show="machItem">
                            <ul class="math-ul">
                                <li class="math-li" v-for='(item,index) in matchTurnGroupList' :key=index
                                    @click="openMore(item,index)">
                                    <span>{{item.turnGroupName}}</span></li>
                            </ul>
                        </div>
                        <div v-for="(item,index) in matchTurnGroupList" :key=index>
                            <table v-show="item.cur" class="hot-table" v-for="(sunitem,index) in item.groupDTOList"
                                   :key=index>
                                <tr class="t-head" v-show="item.groupType=='1'">
                                    <td colspan='4'>{{sunitem.groupName}}</td>
                                </tr>
                                <tr class="hot-th">
                                    <td>比赛时间</td>
                                    <td class="vs-left">主队</td>
                                    <td class='vs'></td>
                                    <td class="vs-right">客队</td>
                                </tr>
                                <tr class="hot-tr" v-for='(grandsunitem,index) in sunitem.futureMatchDTOList'
                                    :key=index>
                                    <td>{{grandsunitem.matchTime}}</td>
                                    <td class="vs-left">{{grandsunitem.homeTeamAbbr}}</td>
                                    <td class='vs' v-html="matchScore(grandsunitem.matchScore)"></td>
                                    <td class="vs-right">{{grandsunitem.visitorTeamAbbr}}</td>
                                </tr>
                            </table>
                        </div>
                    </div>

                    <div v-if="matchTurnGroupList.length==0">
                        <div class="nullstatus score-nullstatus">
                            <img src="../../../../assets/img/juan.png" alt="">
                            <span>暂无数据</span>
                        </div>
                    </div>
                </div>
                <!--球队资料-->
                <div class="containered team" v-if='navBodyIndex =="3"'>
                    <div v-show="leagueTeamInfoDTOList.length>0">
                        <ul class="hot-ul">
                            <li @click="goTeamBall(item)" class="hot-li" v-for="(item,index) in leagueTeamInfoDTOList"
                                :key=index>
                                <div class="nav-img"><img :src="item.teamPic"></div>
                                <p class="nav-name">{{item.teamAddr}}</p>
                            </li>
                        </ul>
                    </div>
                    <div v-show="leagueTeamInfoDTOList.length==0">
                        <div class="nullstatus score-nullstatus">
                            <img src="../../../../assets/img/juan.png" alt="">
                            <span>暂无数据</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {Indicator} from 'mint-ui';
    import api from '../../../../fetch/api'

    export default {
        name: "liansaiDetail",
        beforeCreate() {
            Indicator.open()
        },
        data() {
            return {
                openDetail: false,
                navBodyIndex: 0,
                leagueMes: '',
                detaiNavIndex: 0,//nav index
                machItem: false,
                scoreMainIndex: 0,
                num: 1,
                scoreNavArr: [
                    {name: '总积分', cur: true},
                    {name: '客场积分', cur: false},
                    {name: '主场积分', cur: false},
                ],
                tabArr: [
                    {name: '积分榜', groupId: '0', cur: true,},
                    {name: '射手榜', groupId: '1', cur: false,},
                    {name: '赛程安排', groupId: '2', cur: false,},
                    {name: '球队资料', groupId: '3', cur: false,},
                ],
                datas: {},
                leagueSeasonInfoList: [],
                leagueShooterInfoList: [],
                leagueTeamInfoDTOList: [],
                matchScoreDTOList: [],
                leagueScore: {},
                matchTurnGroupList: []
            }
        },
        created() {
            this.fetchData()
            this.navInit()
        },
        methods: {
            fetchData() {
                let data = {
                    leagueId: this.$route.query.leagueId,
                    seasonId: '0'
                }
                api.leagueDetailForDiscovery(data)
                    .then(res => {
                        if (res.code == 0) {
                            this.datas = res.data
                            this.leagueSeasonInfoList = res.data.leagueSeason.leagueSeasonInfoList //赛季
                            this.leagueShooterInfoList = res.data.leagueShooter.leagueShooterInfoList//射手榜
                            this.leagueTeamInfoDTOList = res.data.leagueTeam.leagueTeamInfoDTOList//球队资料
                            this.matchScoreDTOList = res.data.leagueScore.matchScoreDTOList//积分
                            this.leagueScore = res.data.leagueScore//积分
                            this.matchTurnGroupList = res.data.matchGroupData.matchTurnGroupList//赛程安排
                            this.matchTurnGroupListdata()//添加cur属性
                        }
                    })
            },
            //比分数据处理
            matchScore(scores) {
                let letf = parseInt(scores.split(':')[0])
                let right = parseInt(scores.split(':')[1])
                if (letf != undefined && right != undefined) {
                    if (letf > right) {
                        return "<span class='win'>" + letf + "</span>:<span class='loss'>" + right + "</span>"
                    }
                    if (letf == right) {
                        return "<span class='flat'>" + letf + "</span>:<span class='flat'>" + right + "</span>"
                    }
                    if (letf < right) {
                        return "<span class='loss'>" + letf + "</span>:<span class='win'>" + right + "</span>"
                    }
                    return scores
                }
            },
            matchTurnGroupListdata() {
                this.matchTurnGroupList.forEach((item, index) => {
                    item.cur = false
                    if (index == 0) {
                        item.cur = true
                    }
                })
            },
            //
            openMore(item, index) {
                if (this.machItem) {
                    this.$refs.downImg[0].style.transform = 'rotate(0deg)';
                } else {
                    this.$refs.downImg[0].style.transform = 'rotate(180deg)';
                }
                this.machItem = !this.machItem
                if (item != undefined) {
                    this.matchTurnGroupList.forEach((item, index) => {
                        item.cur = false
                    })
                    this.matchTurnGroupList[index].cur = true
                }

            },
            //赛事类型选择
            upOrdown(type) {
                this.machItem = false
                var that = this
                var ppp = true
                if (type == 'down') {
                    this.matchTurnGroupList.forEach((item, index) => {
                        if (item.cur && ppp) {
                            item.cur = false
                            index = index + 1
                            if (index < that.matchTurnGroupList.length) {
                                that.matchTurnGroupList[index].cur = true
                                that.num++
                                ppp = false
                            } else {
                                that.matchTurnGroupList[0].cur = true
                            }
                        }
                    })
                }
                if (type == 'up') {
                    this.matchTurnGroupList.forEach((item, index) => {
                        if (item.cur && ppp) {
                            item.cur = false
                            index = index - 1
                            if (index >= 0) {
                                that.matchTurnGroupList[index].cur = true
                                ppp = false
                                that.num++
                            } else {
                                that.matchTurnGroupList[this.matchTurnGroupList.length - 1].cur = true
                                ppp = false
                            }
                        }
                    })
                }
            },
            //积分榜点击
            scoreCick(item, index) {
                this.scoreMainIndex = index
                this.scoreNavArr.forEach((item, indexd) => {
                    item.cur = false
                    if (index == indexd) {
                        item.cur = true
                    }
                })
            },
            //nav 初始化
            navInit() {
                if (JSON.parse(sessionStorage.getItem('liansaiMes'))) {
                    var detaiNavIndex = JSON.parse(sessionStorage.getItem('liansaiMes')).detaiNavIndex
                    this.tabArr.forEach((item, index) => {
                        if (detaiNavIndex) {
                            item.cur = false
                            if (index == detaiNavIndex) {
                                item.cur = true
                            }
                        }
                    })
                    if (detaiNavIndex) {
                        this.navBodyIndex = detaiNavIndex
                    } else {
                        this.navBodyIndex = 0
                    }
                }
            },
            //点击联赛
            goTeamBall(item) {
                this.$router.push({
                    path: this.$route.path + '/' + item.teamInitials,
                    query: {
                        teamId: item.teamId
                    }
                })
            },
            goBack() {
                this.$router.go(-1)
            },
            navClick(ite, index) {
                let liansaiMes = JSON.parse(sessionStorage.getItem('liansaiMes'))
                if (!liansaiMes) {
                    liansaiMes = {}
                }
                liansaiMes.detaiNavIndex = index
                sessionStorage.setItem('liansaiMes', JSON.stringify(liansaiMes))
                this.detaiNavIndex = index
                this.tabArr.forEach(item => {
                    item.cur = false
                })
                this.$set(ite, 'cur', true)
                this.navBodyIndex = index
            },
        },
        beforeRouteEnter(to, from, next) {
            next()
        }
    }
</script>
<style>
    .win {
        color: RGBA(234, 86, 6, 1) !important;
    }

    .loss {
        color: RGBA(111, 111, 111, 1) !important;
    }

    .flat {
        color: RGBA(76, 156, 216, 1) !important;
    }
</style>
<style scoped lang="scss">
    @import '../../../../assets/css/function.scss';

    .detail {
        background-color: #ffffff;
        .curtab {
            border-bottom: 2px solid #d12120 !important;
            color: #d12120 !important;
        }
        .scorecurtab {
            background-color: #d12120;
            color: #ffffff !important;
        }
        .line-row {
            display: inline-block;
            height: px2rem(30px);
            border-left: 1px solid #f0f0f0;
        }
        .openDetails {
            overflow: auto !important;
            height: auto !important;
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
            .memu-btn {
                width: px2rem(50px);
            }
        }
        .body {
            width: 100%;
            background: #ffffff;
            position: absolute;
            top: px2rem(100px);
            bottom: 0;
            overflow: auto;
            -webkit-overflow-scrolling: touch !important;
            .tops {
                box-sizing: border-box;
                padding: px2rem(20px) px2rem(10px) 0 px2rem(10px);
                display: flex;
                justify-content: space-around;
                align-items: flex-start;
                flex-direction: row;
                .top-left {
                    flex: 2;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    .name {
                        margin-top: px2rem(10px);
                        color: RGBA(25, 25, 25, 1);
                        font-size: px2rem(30px);
                    }
                    .select {
                        margin-top: px2rem(10px);
                        width: px2rem(250px);
                        .select-p {
                            background: rgba(247, 247, 247, 1);
                            height: px2rem(60px);
                            line-height: px2rem(60px);
                            color: #d12120;
                            text-align: center;
                            font-size: px2rem(25px);
                        }
                    }
                    .img-box {
                        height: px2rem(200px);
                        width: px2rem(200px);
                        img {
                            width: 100%;
                        }
                    }
                }
                .top-right {
                    flex: 3;
                    .name {
                        font-size: px2rem(30px);
                        font-weight: 700;
                    }
                    .rule {
                        margin-top: px2rem(15px);
                        font-size: px2rem(24px);
                        color: RGBA(111, 111, 111, 1);
                        height: px2rem(200px);
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                    .detail-btn {
                        color: #d12120;
                        font-size: px2rem(26px);
                    }
                }
            }
            .tab-ul {
                box-sizing: border-box;
                background: rgba(247, 247, 247, 1);
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                font-size: px2rem(24px);
                color: rgb(51, 51, 51);
                height: px2rem(68px);
                margin-top: px2rem(30px);
                .tab-li {
                    box-sizing: border-box;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex: 1;

                    span:nth-child(1) {
                        display: inline-block;
                        /*padding: px2rem(20px) px2rem(15px) px2rem(18px) px2rem(15px);*/
                        width: 70%;
                        text-align: center;
                        line-height: px2rem(60px);
                        margin: 0 px2rem(20px);
                        border-bottom: 2px solid rgba(247, 247, 247, 1);
                    }
                }
            }
            .container {
                box-sizing: border-box;
                width: 100%;
                padding: 0 px2rem(10px);
                background-color: #ffffff;
                /*height: 100%;*/
                .score-nullstatus {
                    padding-top: px2rem(150px) !important;
                }
                .containered {
                    width: 100%;
                    padding-top: px2rem(20px);
                    .hot-item {
                        margin-top: px2rem(30px);
                        margin-bottom: px2rem(30px);
                        width: 100%;
                    }
                }
                .liansai-score {
                    .score-main {
                        margin-top: px2rem(20px);
                    }
                    .score-nav-ul {
                        border: 1px solid #f0f0f0;
                        box-sizing: border-box;
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                        align-items: center;
                        font-size: px2rem(24px);
                        color: rgb(51, 51, 51);
                        .score-nav-li {
                            line-height: px2rem(50px);
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            flex: 1;
                            span:nth-child(1) {
                                color: RGBA(111, 111, 111, 1);
                                height: 100%;
                                text-align: center;
                                width: 100%;
                            }
                        }
                    }
                }
                .shoot {
                    margin-bottom: px2rem(30px);
                    width: 100%;
                    .hot-table {
                        margin: 0 auto;
                        width: 100%;
                        margin-bottom: px2rem(40px);
                        .t-head {
                            td {
                                border: 1px solid #f0f0f0;
                                line-height: px2rem(50px);
                                font-size: px2rem(24px);
                                padding-left: px2rem(30px);
                                color: RGBA(51, 51, 51, 1);
                                font-weight: 700;
                            }
                        }
                        .hot-th {
                            line-height: px2rem(50px);
                            background-color: RGBA(247, 247, 247, 1);
                            td {
                                text-align: center;
                                border: 1px solid #f0f0f0;
                                color: RGBA(111, 111, 111, 1);
                                font-size: px2rem(24px);
                            }
                        }
                        .hot-tr {
                            line-height: px2rem(50px);
                            td {
                                border: 1px solid #f0f0f0;
                                text-align: center;
                                white-space: nowrap;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                font-size: px2rem(24px);
                                color: RGBA(111, 111, 111, 1);
                            }
                        }
                    }
                }
                .team {
                    width: 100%;
                    padding-bottom: px2rem(40px);

                    .hot-ul {
                        margin: 0 auto;
                        width: px2rem(720px);
                        overflow: hidden;
                        .hot-li {
                            box-sizing: border-box;
                            float: left;
                            padding: px2rem(25px) px2rem(30px) px2rem(10px) px2rem(30px);
                            width: 25%;
                            height: px2rem(220px);
                            .nav-img {
                                height: px2rem(100px);
                                width: px2rem(100px);
                                margin: 0 auto;
                                img {
                                    width: 100%;
                                }
                            }
                            .nav-name {
                                margin-top: px2rem(10px);
                                font-size: px2rem(25px);
                                text-align: center;
                            }
                        }
                    }
                }
                .match {
                    .vs {
                        border-right: 0 none !important;
                        border-left: 0 none !important;
                        /*border-top: 0 none!important;*/

                    }
                    .vs-left {
                        border-right: 0 none !important;
                    }
                    .vs-right {
                        border-left: 0 none !important;
                    }
                    .mach-select-ul {
                        overflow: hidden;
                        height: px2rem(40px);
                        width: px2rem(300px);
                        text-align: center;
                        .mach-select-li {
                            width: px2rem(200px);
                            margin: 0 auto;
                            color: RGBA(111, 111, 111, 1);
                            font-size: px2rem(30px);
                            display: flex;
                            flex-direction: row;
                            align-items: center;
                            justify-content: center;
                            span:nth-child(1) {

                            }
                            span:nth-child(2) {
                                margin-left: px2rem(10px);
                                display: inline-block;
                                height: px2rem(30px);
                                width: px2rem(30px);
                                img {
                                    width: 100%;
                                }
                            }

                        }
                    }
                    .match-navbox {
                        border: 1px solid #f0f0f0;
                        margin-bottom: px2rem(50px);
                        .math-ul {
                            overflow: hidden;
                            width: px2rem(730px);
                            box-sizing: border-box;
                            .math-li {
                                padding: px2rem(20px) 0;
                                box-sizing: border-box;
                                width: 25%;
                                float: left;
                                text-align: center;
                                span {
                                    display: inline-block;
                                    width: 80%;
                                    line-height: px2rem(50px);
                                    border: 1px solid #f0f0f0;
                                }
                            }
                        }
                    }
                    .match-nav {
                        margin-bottom: px2rem(30px);
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: center;
                        .match-nav-left {
                            flex: 1;
                            font-size: 0;
                            line-height: 0;
                            border-width: px2rem(15px);
                            border-color: red;
                            border-left-width: 0;
                            border-style: dashed;
                            border-right-style: solid;
                            border-top-color: transparent;
                            border-bottom-color: transparent;
                        }
                        .match-nav-right {
                            flex: 1;
                            font-size: 0;
                            line-height: 0;
                            border-width: px2rem(15px);
                            border-color: red;
                            border-right-width: 0;
                            border-style: dashed;
                            border-left-style: solid;
                            border-top-color: transparent;
                            border-bottom-color: transparent;
                        }
                    }
                }
            }
        }
    }

</style>


