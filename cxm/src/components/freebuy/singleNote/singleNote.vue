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
                <li v-for="(data,i) in $store.state.matchObj.hotPlayList" :key='i'>
                    <div class="matchLeft">
                        <span>{{data.leagueAddr}}</span>
                        <span>{{data.changci}}</span>
                        <span>截止{{datePd(data.matchTime)}}</span>
                        <!-- <span>⬇</span> -->
                    </div>
                    <div class="matchRight">
                        <p>
                            <span>{{data.homeTeamAbbr}}</span>
                            <span>{{data.homeCell.cellName}}{{data.homeCell.cellOdds}}</span>
                        </p>
                        <p>
                            <span>VS</span>
                            <span>{{data.flatCell.cellName}}{{data.flatCell.cellOdds}}</span>
                        </p>
                        <p>
                            <span>{{data.visitingTeamAbbr}}</span>
                            <span>{{data.visitingCell.cellName}}{{data.visitingCell.cellOdds}}</span>
                        </p>
                    </div>
                </li>
            </ul>
        </el-collapse-item>
        <el-collapse-item :name="activeNameNum(i)" v-for="(data,i) in $store.state.matchObj.playList" :key='i' v-if="$store.state.matchObj.playList&&$store.state.matchObj.playList.length>0">
            <template slot="title">
                <span class="spfList">{{data.matchDay}} 共有{{data.playList.length}}场比赛可投</span>
            </template>
            <ul class="hotMatchList">
                <li v-for="(item,index) in data.playList" :key='index'>
                    <div class="matchLeft">
                        <span>{{item.leagueAddr}}</span>
                        <span>{{item.changci}}</span>
                        <span>截止{{datePd(item.matchTime)}}</span>
                        <!-- <span>⬇</span> -->
                    </div>
                    <div class="matchRight">
                        <p>
                            <span>{{item.homeTeamAbbr}}</span>
                            <span>{{item.homeCell.cellName}}{{item.homeCell.cellOdds}}</span>
                        </p>
                        <p>
                            <span>VS</span>
                            <span>{{item.flatCell.cellName}}{{item.flatCell.cellOdds}}</span>
                        </p>
                        <p>
                            <span>{{item.visitingTeamAbbr}}</span>
                            <span>{{item.visitingCell.cellName}}{{item.visitingCell.cellOdds}}</span>
                        </p>
                    </div>
                </li>
            </ul>
        </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script src='./script.js'>
    
</script>


<style lang='scss' src='./style.scss'>
    
</style>

