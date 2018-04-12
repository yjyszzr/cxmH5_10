<template>
    <div class="singleNote">
        <div class="matchTitle">
            共有{{$store.state.matchObj.allMatchCount}}场比赛可投
        </div>
       <el-collapse v-model="activeName">
        <el-collapse-item name="1" v-if="$store.state.matchObj.hotPlayList&&$store.state.matchObj.hotPlayList.length>0">
            <template slot="title">
                <span class="hotMatch">热门比赛</span>
            </template>
            <ul class="hotMatchList">
                <li v-for="(data,i) in $store.state.matchObj.hotPlayList" :key='i' :id='data.matchId' :class="data.matchPlays[0].single=='1'?'single':''">
                    <img src="../../../assets/img/freebuy_img/Singlefield@2x.png" alt="" class="dan_icon" v-show="data.matchPlays[0].single=='1'">
                    <div class="matchLeft">
                        <span>{{data.leagueAddr}}</span>
                        <span>{{data.changci}}</span>
                        <span>截止{{datePd(data.matchTime)}}</span>
                        <span>
                            <img src="../../../assets/img/freebuy_img/Collapse@3x.png" alt="">
                        </span>
                    </div>
                    <div class="matchRight" v-if="playType=='1'||playType=='2'">
                        <div class="matchRightBox">
                            <p :class="data.myspf&&data.myspf.indexOf(3)!=-1?'selected':''">
                                <b class="mMark" @click="selectedClick($event)"></b>
                                <span>{{data.homeTeamAbbr}}</span>
                                <span>{{data.matchPlays[0].homeCell.cellName}}{{data.matchPlays[0].homeCell.cellOdds}}</span>
                            </p>
                            <p :class="data.myspf&&data.myspf.indexOf(1)!=-1?'selected':''">
                                <b class="mMark" @click="selectedClick($event)"></b>
                                <span>VS <i :style="{'color':item.matchPlays[0].fixedOdds.substr(0,1)=='+'?'#e85504':'#44ae35'}">{{data.matchPlays[0].fixedOdds}}</i></span>
                                <span>{{data.matchPlays[0].flatCell.cellName}}{{data.matchPlays[0].flatCell.cellOdds}}</span>
                            </p>
                            <p :class="data.myspf&&data.myspf.indexOf(0)!=-1?'selected':''">
                                <b class="mMark" @click="selectedClick($event)"></b>
                                <span>{{data.visitingTeamAbbr}}</span>
                                <span>{{data.matchPlays[0].visitingCell.cellName}}{{data.matchPlays[0].visitingCell.cellOdds}}</span>
                            </p>
                        </div>
                        <div class="matchRightjqs" v-if="playType=='4'">
                            <div class="jqs_title">
                                <span>{{item.homeTeamAbbr}}</span>
                                <span>VS</span>
                                <span>{{item.visitingTeamAbbr}}</span>
                            </div>
                            <div class="matchRightBox">
                                <p v-for='(data,index) in item.matchPlays[0].matchCells' :key='index' :class="item.myspf&&item.myspf.indexOf('jqs:'+data.cellCode)!=-1?'selected':''" >
                                    <b class="mMark" @click="selectedClick($event,data)"></b>
                                    <span>{{data.cellCode}}</span>&nbsp;
                                    <span>
                                        {{data.cellOdds}}
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </el-collapse-item>
        <el-collapse-item :name="activeNameNum(i)" v-for="(data,i) in $store.state.matchObj.playList" :key='i' v-if="$store.state.matchObj.playList&&$store.state.matchObj.playList.length>0">
            <template slot="title">
                <span class="spfList">{{data.matchDay}} 共有{{data.playList.length}}场比赛可投</span>
            </template>
            <ul class="hotMatchList">
                <li v-for="(item,index) in data.playList" :key='index' :id='item.matchId' :class="item.matchPlays[0].single=='1'?'single':''">
                    <img src="../../../assets/img/freebuy_img/Singlefield@2x.png" alt="" class="dan_icon" v-show="item.matchPlays[0].single=='1'">
                    <div class="matchLeft">
                        <span>{{item.leagueAddr}}</span>
                        <span>{{item.changci}}</span>
                        <span>截止{{datePd(item.matchTime)}}</span>
                        <span>
                            <img src="../../../assets/img/freebuy_img/Collapse@3x.png" alt="">
                        </span>
                    </div>
                    <div class="matchRight" v-if="playType=='1'||playType=='2'">
                        <div class="matchRightBox">
                            <p :class="item.myspf&&item.myspf.indexOf(3)!=-1?'selected':''">
                                <b class="mMark" @click="selectedClick($event)"></b>
                                <span>{{item.homeTeamAbbr}}</span>
                                <span>
                                    {{item.matchPlays[0].homeCell.cellName}}{{item.matchPlays[0].homeCell.cellOdds}}
                                </span>
                            </p>
                            <p :class="item.myspf&&item.myspf.indexOf(1)!=-1?'selected':''">
                                <b class="mMark" @click="selectedClick($event)"></b>
                                <span>VS <i :style="{'color':item.matchPlays[0].fixedOdds.substr(0,1)=='+'?'#e85504':'#44ae35'}">{{item.matchPlays[0].fixedOdds}}</i></span>
                                <span>
                                    {{item.matchPlays[0].flatCell.cellName}}{{item.matchPlays[0].flatCell.cellOdds}}
                                </span>
                            </p>
                            <p :class="item.myspf&&item.myspf.indexOf(0)!=-1?'selected':''">
                                <b class="mMark" @click="selectedClick($event)"></b>
                                <span>{{item.visitingTeamAbbr}}</span>
                                <span>
                                    {{item.matchPlays[0].visitingCell.cellName}}{{item.matchPlays[0].visitingCell.cellOdds}}
                                </span>
                            </p>
                        </div>
                    </div>
                    <div class="matchRightjqs" v-if="playType=='4'">
                        <div class="jqs_title">
                            <span>{{item.homeTeamAbbr}}</span>
                            <span>VS</span>
                            <span>{{item.visitingTeamAbbr}}</span>
                        </div>
                        <div class="matchRightBox">
                            <p v-for='(data,index) in item.matchPlays[0].matchCells' :key='index' :class="item.myspf&&item.myspf.indexOf('jqs:'+data.cellCode)!=-1?'selected':''" >
                                <b class="mMark" @click="selectedClick($event,data)"></b>
                                <span>{{data.cellCode}}</span>&nbsp;
                                <span>
                                    {{data.cellOdds}}
                                </span>
                            </p>
                        </div>
                    </div>
                </li>
            </ul>
        </el-collapse-item>
        </el-collapse>
        <div class="match_footer">
            <div class="match_footer_left">
                <div class="match_delete" @click="clear_match()">
                    <img src="../../../assets/img/freebuy_img/trashbin@2x.png" alt="">
                </div>
                <div class="match_test_status" v-html="text">
                    
                </div>
            </div>
            <button class="confirm" :disabled='flag' @click="confirm()" :class="classFlag?'noConfirm':''">
                确定
            </button>
        </div>
    </div>
</template>

<script src='./script.js'>
    
</script>


<style lang='scss' src='./style.scss'>
    
</style>

