<style lang='scss' src='./style.scss'>

</style>
<template>
    <div class="wrap matchDetail">
        <section>
            <div class="matchDetail_box" v-if="matchDetailObj.matchInfo">
                <div class="matchDetail_top">
                    {{matchDetailObj.matchInfo.changci.substr(-3)}} {{matchDetailObj.matchInfo.leagueAddr}} {{matchTimeDate(matchDetailObj.matchInfo.matchTime)}}
                </div>
                <div class="matchDetail_content">
                    <div class="md_left">
                        <img :src="matchDetailObj.matchInfo.homeTeamPic" alt="">
                        <p>{{matchDetailObj.matchInfo.homeTeamAbbr}}</p>
                        <p>主胜{{matchDetailObj.matchInfo.hOdds}}</p>
                    </div>
                    <div class="md_middle">
                        <p>VS</p>
                        <p>平{{matchDetailObj.matchInfo.dOdds}}</p>
                    </div>
                    <div class="md_right">
                        <img :src="matchDetailObj.matchInfo.visitingTeamPic" alt="">
                        <p>{{matchDetailObj.matchInfo.visitingTeamAbbr}}</p>
                        <p>客胜{{matchDetailObj.matchInfo.aOdds}}</p>
                    </div>
                </div>
            </div>
            <ul class="matchDetailList" v-if="matchDetailObj.hvMatchTeamInfo">
                <li>
                    <p>近期状态</p>
                    <p>主队{{matchDetailObj.hMatchTeamInfo.win}}胜{{matchDetailObj.hMatchTeamInfo.draw}}平{{matchDetailObj.hMatchTeamInfo.lose}}负 
                    客队{{matchDetailObj.vMatchTeamInfo.win}}胜{{matchDetailObj.vMatchTeamInfo.draw}}平{{matchDetailObj.vMatchTeamInfo.lose}}负</p>
                </li>
                <li>
                    <p>主队主场</p>
                    <p>主队{{matchDetailObj.hhMatchTeamInfo.win}}胜{{matchDetailObj.hhMatchTeamInfo.draw}}平{{matchDetailObj.hhMatchTeamInfo.lose}}负</p>
                </li>
                <li>
                    <p>客队客场</p>
                    <p>主队{{matchDetailObj.vvMatchTeamInfo.win}}胜{{matchDetailObj.vvMatchTeamInfo.draw}}平{{matchDetailObj.vvMatchTeamInfo.lose}}负</p>
                </li>
                <li>
                    <p>相对交锋</p>
                    <p>共{{matchDetailObj.hvMatchTeamInfo.total}}次交锋 主队 
                        <span style="color: #ea5504;">{{matchDetailObj.hvMatchTeamInfo.win}}胜</span>
                        <span style="color: #0099d9;">{{matchDetailObj.hvMatchTeamInfo.draw}}平</span>
                        <span style="color: #44ae35;">{{matchDetailObj.hvMatchTeamInfo.lose}}负</span>
                    </p>
                </li>
                <li>
                    <p>投注比例</p>
                    <p>
                        <span>
                            <b>0</b>
                            <b>77%</b>
                            <b>16%</b>
                            <b>7%</b>
                        </span>
                        <span>
                            <b>+1</b>
                            <b>49%</b>
                            <b>26%</b>
                            <b>25%</b>
                        </span>
                    </p>
                </li>
            </ul>
            <div class="confim_btn">
                <p @click="confirm()">查看详情</p>
                <p @click="cancel()">取消</p>
            </div>
        </section>
    </div>
</template>
<script src='./script.js'>
    // import http from '../api/http'

</script>