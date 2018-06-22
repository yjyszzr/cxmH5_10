<template>
    <div class="singleNote">
        <div class="matchTitle">
            共有{{$store.state.matchObj.allMatchCount}}场比赛可投
        </div>
       <el-collapse v-model="activeName">
        <el-collapse-item name="1" v-if="$store.state.matchObj.hotPlayList&&$store.state.matchObj.hotPlayList.length>0">
            <template slot="title">
                <span class="iconfont icon-icon-23"></span>
                <span class="hotMatch">热门比赛</span>
            </template>
            <ul class="hotMatchList">
                <li v-for="(item,i) in $store.state.matchObj.hotPlayList" :key='i' :id='item.matchId' :class="item.matchPlays[0].single=='1'?'single':''">
                    <img src="../../../assets/img/freebuy_img/Singlefield@2x.png" alt="" class="dan_icon" v-show="item.matchPlays[0].single=='1'||(item.matchPlays[1]&&item.matchPlays[1].single=='1')">
                    <div class="matchLeft">
                        <p @click="matchDetail(item.matchId,$event)"></p>
                        <span>{{item.leagueAddr}}</span>
                        <span>{{item.changci}}</span>
                        <span>截止{{datePd(item.betEndTime)}}</span>
                        <span>
                            <!-- <i class="iconfont icon-icon-22"></i> -->
                            <img src="../../../assets/img/freebuy_img/Collapse@3x.png" alt="">
                        </span>
                    </div>
                    <div class="matchRight" v-if="playType=='1'||playType=='2'">
                        <div class="matchRightBox">
                            <p :class="item.myspf&&item.myspf.indexOf(3)!=-1?'selected':''">
                                <b class="mMark" @click="selectedClick($event)"></b>
                                <span><em v-if="item.homeTeamRank!==''">[{{item.homeTeamRank}}]</em>{{item.homeTeamAbbr}}</span>
                                <span>{{item.matchPlays[0].homeCell.cellName}}{{item.matchPlays[0].homeCell.cellOdds}}</span>
                            </p>
                            <p :class="item.myspf&&item.myspf.indexOf(1)!=-1?'selected':''">
                                <b class="mMark" @click="selectedClick($event)"></b>
                                <span>VS <i :style="{'color':item.matchPlays[0].fixedOdds.substr(0,1)=='+'?'#e85504':'#44ae35'}">{{item.matchPlays[0].fixedOdds}}</i></span>
                                <span>{{item.matchPlays[0].flatCell.cellName}}{{item.matchPlays[0].flatCell.cellOdds}}</span>
                            </p>
                            <p :class="item.myspf&&item.myspf.indexOf(0)!=-1?'selected':''">
                                <b class="mMark" @click="selectedClick($event)"></b>
                                <span><em v-if="item.visitingTeamRank!==''">[{{item.visitingTeamRank}}]</em>{{item.visitingTeamAbbr}}</span>
                                <span>{{item.matchPlays[0].visitingCell.cellName}}{{item.matchPlays[0].visitingCell.cellOdds}}</span>
                            </p>
                        </div>
                    </div>
                        <div class="matchRightjqs" v-if="playType=='4'">
                            <div class="jqs_title">
                                <span><span v-if="item.homeTeamRank!==''">[{{item.homeTeamRank}}]</span>{{item.homeTeamAbbr}}</span>
                            <span>VS</span>
                            <span><span v-if="item.visitingTeamRank!==''">[{{item.visitingTeamRank}}]</span>{{item.visitingTeamAbbr}}</span>
                            </div>
                            <div class="matchRightBox">
                                <p v-for='(data,index) in item.matchPlays[0].matchCells' :key='index' :class="item.myspf&&item.myspf.indexOf('jqs:'+data.cellCode)!=-1?'selected':''" >
                                    <b class="mMark" @click="selectedClick($event,data)"></b>
                                    <span>{{data.cellName}}</span>&nbsp;
                                    <span>
                                        {{data.cellOdds}}
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div class="matchRightbf" v-if="playType=='3'">
                        <div class="bf_title">
                            <span><span v-if="item.homeTeamRank!==''">[{{item.homeTeamRank}}]</span>{{item.homeTeamAbbr}}</span>
                            <span>VS</span>
                            <span><span v-if="item.visitingTeamRank!==''">[{{item.visitingTeamRank}}]</span>{{item.visitingTeamAbbr}}</span>
                        </div>
                        <div v-if="mapKey.indexOf(item.matchId)==-1" class="matchRightbfBox" @click="bfBtn(item)">
                            点击进行比分投注
                        </div>
                        <div v-if="mapKey.indexOf(item.matchId)!=-1" class="matchRightbfBox selectedBf" @click="bfBtn(item)">
                            <span v-for="(data,index) in matchSelectObj.get(item.matchId)?matchSelectObj.get(item.matchId):[]" :key='index'>
                                {{data}}&nbsp;
                            </span>
                        </div>
                    </div>
                    <div class="matchRightbf" v-if="playType=='5'">
                        <div class="bf_title">
                            <span><span v-if="item.homeTeamRank!==''">[{{item.homeTeamRank}}]</span>{{item.homeTeamAbbr}}</span>
                            <span>VS</span>
                            <span><span v-if="item.visitingTeamRank!==''">[{{item.visitingTeamRank}}]</span>{{item.visitingTeamAbbr}}</span>
                        </div>
                        <div v-if="mapKey.indexOf(item.matchId)==-1" class="matchRightbfBox" @click="bfBtn(item)">
                            点击进行半全场投注
                        </div>
                        <div v-if="mapKey.indexOf(item.matchId)!=-1" class="matchRightbfBox selectedBf" @click="bfBtn(item)">
                            <span v-for="(data,index) in matchSelectObj.get(item.matchId)?matchSelectObj.get(item.matchId):[]" :key='index'>
                                {{data}}&nbsp;
                            </span>
                        </div>
                    </div>
                    <div class="matchRightbf" v-if="playType=='7'">
                        <div class="bf_title">
                            <span><span v-if="item.homeTeamRank!==''">[{{item.homeTeamRank}}]</span>{{item.homeTeamAbbr}}</span>
                            <span>VS</span>
                            <span><span v-if="item.visitingTeamRank!==''">[{{item.visitingTeamRank}}]</span>{{item.visitingTeamAbbr}}</span>
                        </div>
                        <div class="matchRightstoneBox">
                            <p :class="item.myspf&&item.myspf.indexOf(item.matchPlays[0].homeCell.cellName)!=-1?'selected':''">
                                <b class="mMark" @click="selectedTwoClick($event,item.matchPlays[0].homeCell.cellName)"></b>
                                <span>{{item.matchPlays[0].homeCell.cellName}}</span>
                                <span>{{item.matchPlays[0].homeCell.cellOdds}}</span>
                            </p>
                            <p :class="item.myspf&&item.myspf.indexOf(item.matchPlays[0].visitingCell.cellName)!=-1?'selected':''">
                                <b class="mMark" @click="selectedTwoClick($event,item.matchPlays[0].visitingCell.cellName)"></b>
                                <span>{{item.matchPlays[0].visitingCell.cellName}}</span>
                                <span>{{item.matchPlays[0].visitingCell.cellOdds}}</span>
                            </p>
                        </div>
                    </div>
                    <div class="matchRightbf" v-if="playType=='6'">
                        <div class="bf_title">
                            <span><span v-if="item.homeTeamRank!==''">[{{item.homeTeamRank}}]</span>{{item.homeTeamAbbr}}</span>
                            <span>VS</span>
                            <span><span v-if="item.visitingTeamRank!==''">[{{item.visitingTeamRank}}]</span>{{item.visitingTeamAbbr}}</span>
                        </div>
                        <div class="matchRighthhBox">
                            <div class="team_left">
                            		<div class="team_top" v-if="item.matchPlays[1].isShow=='0'">
                            			<p>0</p>
                            			<p style="flex: 9;">未开售</p>
                            		</div>
                                <div class="team_top" v-if="item.matchPlays[1].isShow=='1'" :style="{'border':item.matchPlays[1]&&item.matchPlays[1].single=='1'?'1px solid #ea5504':'','margin':item.matchPlays[1]&&item.matchPlays[1].single=='1'?'-1px 0 0 -1px':''}">
                                    <p>0</p>
                                    <p :class="item.matchPlays[1].homeCell.isSelected?'selected':''" @click="unSelectedClickspf($event,item)">{{item.matchPlays[1].homeCell.cellName}} {{item.matchPlays[1].homeCell.cellOdds}}</p>
                                    <p :class="item.matchPlays[1].flatCell.isSelected?'selected':''" @click="unSelectedClickspf($event,item)">{{item.matchPlays[1].flatCell.cellName}} {{item.matchPlays[1].flatCell.cellOdds}}</p>
                                    <p :class="item.matchPlays[1].visitingCell.isSelected?'selected':''" @click="unSelectedClickspf($event,item)">{{item.matchPlays[1].visitingCell.cellName}} {{item.matchPlays[1].visitingCell.cellOdds}}</p>
                                </div>
                                <div class="team_bottom" :style="{'border':item.matchPlays[0]&&item.matchPlays[0].single=='1'?'1px solid #ea5504':'','margin':item.matchPlays[0]&&item.matchPlays[0].single=='1'?'0 0 -1px -1px':''}">
                                    <p :style="{'background':item.matchPlays[0].fixedOdds.substr(0,1)=='+'?'#f5ac41':'#85c368'}">{{item.matchPlays[0].fixedOdds}}</p>
                                    <p :class="item.matchPlays[0].homeCell.isSelected?'selected':''" @click="unSelectedClickrq($event,item)">{{item.matchPlays[0].homeCell.cellName}} {{item.matchPlays[0].homeCell.cellOdds}}</p>
                                    <p :class="item.matchPlays[0].flatCell.isSelected?'selected':''" @click="unSelectedClickrq($event,item)">{{item.matchPlays[0].flatCell.cellName}} {{item.matchPlays[0].flatCell.cellOdds}}</p>
                                    <p :class="item.matchPlays[0].visitingCell.isSelected?'selected':''" @click="unSelectedClickrq($event,item)">{{item.matchPlays[0].visitingCell.cellName}} {{item.matchPlays[0].visitingCell.cellOdds}}</p>
                                </div>
                            </div>
                            <div class="team_right" v-if="item.selectedNum<=0" @click="bfBtn(item)">
                                <span>更多</span>
                                <span>玩法</span>
                            </div>
                            <div class="team_right" v-if="item.selectedNum>0" @click="bfBtn(item)">
                                <span>已选</span>
                                <span><b style="color: #ea5504;font-wight: 400;">{{item.selectedNum}}</b>项</span>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </el-collapse-item>
        <el-collapse-item :name="activeNameNum(i)" v-for="(data,i) in $store.state.matchObj.playList" :key='i' v-if="$store.state.matchObj.playList&&$store.state.matchObj.playList.length>0">
            <template slot="title">
                <span class="spfList">{{data.matchDay}}&nbsp;&nbsp;共有<b style="font-weight:400;color:#505050;">{{data.playList.length}}场</b>比赛可投</span>
            </template>
            <ul class="hotMatchList">
                <li v-for="(item,index) in data.playList" :key='index' :id='item.matchId' :class="item.matchPlays[0].single=='1'?'single':''">
                    <img src="../../../assets/img/freebuy_img/Singlefield@2x.png" alt="" class="dan_icon" v-show="item.matchPlays[0].single=='1'||(item.matchPlays[1]&&item.matchPlays[1].single=='1')">
                    <div class="matchLeft">
                        <p @click="matchDetail(item.matchId,$event)"></p>
                        <span>{{item.leagueAddr}}</span>
                        <span>{{item.changci}}</span>
                        <span>截止{{datePd(item.betEndTime)}}</span>
                        <span>
                            <!-- <i class="iconfont icon-icon-22"></i> -->
                            <img src="../../../assets/img/freebuy_img/Collapse@3x.png" alt="">
                        </span>
                    </div>
                    <div class="matchRight" v-if="playType=='1'||playType=='2'">
                        <div class="matchRightBox">
                            <p :class="item.myspf&&item.myspf.indexOf(3)!=-1?'selected':''">
                                <b class="mMark" @click="selectedClick($event)"></b>
                                <span><em v-if="item.homeTeamRank!==''">[{{item.homeTeamRank}}]</em>{{item.homeTeamAbbr}}</span>
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
                                <span><em v-if="item.visitingTeamRank!==''">[{{item.visitingTeamRank}}]</em>{{item.visitingTeamAbbr}}</span>
                                <span>
                                    {{item.matchPlays[0].visitingCell.cellName}}{{item.matchPlays[0].visitingCell.cellOdds}}
                                </span>
                            </p>
                        </div>
                    </div>
                    <div class="matchRightjqs" v-if="playType=='4'">
                        <div class="jqs_title">
                            <span><span v-if="item.homeTeamRank!==''">[{{item.homeTeamRank}}]</span>{{item.homeTeamAbbr}}</span>
                            <span>VS</span>
                            <span><span v-if="item.visitingTeamRank!==''">[{{item.visitingTeamRank}}]</span>{{item.visitingTeamAbbr}}</span>
                        </div>
                        <div class="matchRightBox">
                            <p v-for='(data,index) in item.matchPlays[0].matchCells' :key='index' :class="item.myspf&&item.myspf.indexOf('jqs:'+data.cellCode)!=-1?'selected':''" >
                                <b class="mMark" @click="selectedClick($event,data)"></b>
                                <span>{{data.cellName}}</span>&nbsp;
                                <span>
                                    {{data.cellOdds}}
                                </span>
                            </p>
                        </div>
                    </div>
                    <div class="matchRightbf" v-if="playType=='3'">
                        <div class="bf_title">
                            <span><span v-if="item.homeTeamRank!==''">[{{item.homeTeamRank}}]</span>{{item.homeTeamAbbr}}</span>
                            <span>VS</span>
                            <span><span v-if="item.visitingTeamRank!==''">[{{item.visitingTeamRank}}]</span>{{item.visitingTeamAbbr}}</span>
                        </div>
                        <div v-if="mapKey.indexOf(item.matchId)==-1" class="matchRightbfBox" @click="bfBtn(item)">
                            点击进行比分投注
                        </div>
                        <div v-if="mapKey.indexOf(item.matchId)!=-1" class="matchRightbfBox selectedBf" @click="bfBtn(item)">
                            <span v-for="(data,index) in matchSelectObj.get(item.matchId)?matchSelectObj.get(item.matchId):[]" :key='index'>
                                {{data}}&nbsp;
                            </span>
                        </div>
                    </div>
                    <div class="matchRightbf" v-if="playType=='5'">
                        <div class="bf_title">
                            <span><span v-if="item.homeTeamRank!==''">[{{item.homeTeamRank}}]</span>{{item.homeTeamAbbr}}</span>
                            <span>VS</span>
                            <span><span v-if="item.visitingTeamRank!==''">[{{item.visitingTeamRank}}]</span>{{item.visitingTeamAbbr}}</span>
                        </div>
                        <div v-if="mapKey.indexOf(item.matchId)==-1" class="matchRightbfBox" @click="bfBtn(item)">
                            点击进行半全场投注
                        </div>
                        <div v-if="mapKey.indexOf(item.matchId)!=-1" class="matchRightbfBox selectedBf" @click="bfBtn(item)">
                            <span v-for="(data,index) in matchSelectObj.get(item.matchId)?matchSelectObj.get(item.matchId):[]" :key='index'>
                                {{data}}&nbsp;
                            </span>
                        </div>
                    </div>
                    <div class="matchRightbf" v-if="playType=='7'">
                        <div class="bf_title">
                            <span><span v-if="item.homeTeamRank!==''">[{{item.homeTeamRank}}]</span>{{item.homeTeamAbbr}}</span>
                            <span>VS</span>
                            <span><span v-if="item.visitingTeamRank!==''">[{{item.visitingTeamRank}}]</span>{{item.visitingTeamAbbr}}</span>
                        </div>
                        <div class="matchRightstoneBox">
                            <p :class="item.myspf&&item.myspf.indexOf(item.matchPlays[0].homeCell.cellName)!=-1?'selected':''">
                                <b class="mMark" @click="selectedTwoClick($event,item.matchPlays[0].homeCell.cellName)"></b>
                                <span>{{item.matchPlays[0].homeCell.cellName}}</span>
                                <span>{{item.matchPlays[0].homeCell.cellOdds}}</span>
                            </p>
                            <p :class="item.myspf&&item.myspf.indexOf(item.matchPlays[0].visitingCell.cellName)!=-1?'selected':''">
                                <b class="mMark" @click="selectedTwoClick($event,item.matchPlays[0].visitingCell.cellName)"></b>
                                <span>{{item.matchPlays[0].visitingCell.cellName}}</span>
                                <span>{{item.matchPlays[0].visitingCell.cellOdds}}</span>
                            </p>
                        </div>
                    </div>
                    <div class="matchRightbf" v-if="playType=='6'">
                        <div class="bf_title">
                            <span><span v-if="item.homeTeamRank!==''">[{{item.homeTeamRank}}]</span>{{item.homeTeamAbbr}}</span>
                            <span>VS</span>
                            <span><span v-if="item.visitingTeamRank!==''">[{{item.visitingTeamRank}}]</span>{{item.visitingTeamAbbr}}</span>
                        </div>
                        <div class="matchRighthhBox">
                            <div class="team_left" :class="item.matchPlays[1]&&item.matchPlays[1].single=='1'?'signleSected':''">
                            		<div class="team_top" v-if="item.matchPlays[1].isShow=='0'">
                            			<p>0</p>
                            			<p style="flex: 9;">未开售</p>
                            		</div>
                                <div class="team_top" v-if="item.matchPlays[1].isShow=='1'" :style="{'border':item.matchPlays[1]&&item.matchPlays[1].single=='1'?'1px solid #ea5504':'','margin':item.matchPlays[1]&&item.matchPlays[1].single=='1'?'-1px 0 0 -1px':''}">
                                    <p>0</p>
                                    <p :class="item.matchPlays[1].homeCell.isSelected?'selected':''" @click="unSelectedClickspf($event,item)">{{item.matchPlays[1].homeCell.cellName}} {{item.matchPlays[1].homeCell.cellOdds}}</p>
                                    <p :class="item.matchPlays[1].flatCell.isSelected?'selected':''" @click="unSelectedClickspf($event,item)">{{item.matchPlays[1].flatCell.cellName}} {{item.matchPlays[1].flatCell.cellOdds}}</p>
                                    <p :class="item.matchPlays[1].visitingCell.isSelected?'selected':''" @click="unSelectedClickspf($event,item)">{{item.matchPlays[1].visitingCell.cellName}} {{item.matchPlays[1].visitingCell.cellOdds}}</p>
                                </div>
                                <div class="team_bottom" :style="{'border':item.matchPlays[0]&&item.matchPlays[0].single=='1'?'1px solid #ea5504':'','margin':item.matchPlays[0]&&item.matchPlays[0].single=='1'?'0 0 -1px -1px':''}">
                                    <p :style="{'background':item.matchPlays[0].fixedOdds.substr(0,1)=='+'?'#f5ac41':'#85c368'}">{{item.matchPlays[0].fixedOdds}}</p>
                                    <p :class="item.matchPlays[0].homeCell.isSelected?'selected':''" @click="unSelectedClickrq($event,item)">{{item.matchPlays[0].homeCell.cellName}} {{item.matchPlays[0].homeCell.cellOdds}}</p>
                                    <p :class="item.matchPlays[0].flatCell.isSelected?'selected':''" @click="unSelectedClickrq($event,item)">{{item.matchPlays[0].flatCell.cellName}} {{item.matchPlays[0].flatCell.cellOdds}}</p>
                                    <p :class="item.matchPlays[0].visitingCell.isSelected?'selected':''" @click="unSelectedClickrq($event,item)">{{item.matchPlays[0].visitingCell.cellName}} {{item.matchPlays[0].visitingCell.cellOdds}}</p>
                                </div>
                            </div>
                            <div class="team_right" v-if="item.selectedNum<=0" @click="bfBtn(item)">
                                <span>更多</span>
                                <span>玩法</span>
                            </div>
                            <div class="team_right" v-if="item.selectedNum>0" @click="bfBtn(item)">
                                <span>已选</span>
                                <span><b style="color: #ea5504;font-wight: 400;">{{item.selectedNum}}</b>项</span>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </el-collapse-item>
        </el-collapse>
        <div class="match_footer fixBottom">
            <i style="display:none;">{{$store.state.mark_playObj.bfIdSaveMapFlag}}</i>
            <div class="match_footer_left">
                <div class="match_delete" @click="clear_matchClick()">
                    <i class="iconfont icon-icon-26"></i>
                    <!--<img src="../../../assets/img/freebuy_img/trashbin@2x.png" alt="">-->
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

