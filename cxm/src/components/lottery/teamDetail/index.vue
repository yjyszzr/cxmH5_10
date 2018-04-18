<style lang='scss' src='./style.scss'></style>
<template>
    <div class="wrap teamDetail">
        <section v-if="ckxqObj.matchInfo">
            <div class="team">
                <p class="p1">
                    {{ckxqObj.matchInfo.changci.substr(-3)}} {{ckxqObj.matchInfo.leagueAddr}} {{matchTimeDate(ckxqObj.matchInfo.matchTime)}}
                </p>
                <ul>
                    <li>
                         <img :src="ckxqObj.matchInfo.homeTeamPic" alt="">
                        <span>{{ckxqObj.matchInfo.homeTeamAbbr}}</span>
                        <i>主胜{{ckxqObj.matchInfo.hOdds}}</i>
                    </li>
                    <p>VS<b>平{{ckxqObj.matchInfo.dOdds}}</b></p>
                    <li>
                        <img :src="ckxqObj.matchInfo.visitingTeamPic" alt="">
                        <span>{{ckxqObj.matchInfo.visitingTeamAbbr}}</span>
                        <i>主胜{{ckxqObj.matchInfo.aOdds}}</i>
                    </li>
                </ul>
            </div>
            <ul class="analytical">
                <li class="currer"><span>分析</span></li>
                <li><span>赔率</span></li>
            </ul>
            <!--分析-->
            <div class="analysis" v-if="flag==false">
                <div class="detail_list">
                    <p>历史交锋<span>近{{ckxqObj.hvMatchTeamInfo.total}}场比赛</span><span>主队</span><span>{{ckxqObj.hvMatchTeamInfo.win}}胜</span><span>{{ckxqObj.hvMatchTeamInfo.draw}}平</span><span>{{ckxqObj.hvMatchTeamInfo.lose}}负</span></p>
                </div>
                <div class="cen_list">
                    <ul class="box_list_1">
                        <li>赛事</li>
                        <li>日期</li>
                        <li>比分</li>
                        <li>胜负</li>
                    </ul>
                    <div class="box_list_2">
                        <ul>
                            <li class="list_cur">德甲德甲</li>
                            <li>2017-08-05</li>
                            <li><span>阿森纳</span>
                            <span>1:1</span>
                            <span>AC米兰</span>   </li>
                            <li>负</li>
                        </ul>
                    </div>
                </div>
                <div class="ranking">
                    <p>积分排名</p>
                    <div>

                    </div>
                </div>
            </div>
            <!--赔率-->
            <div class="odds" v-if="flag==true">
                <ul class="odd_ul">
                    <li class="odd_cur"><span>欧赔</span></li>
                    <li><span>压盘</span></li>
                    <li><span>大小球</span></li>
                </ul>
                <div class="cen_list">
                    <ul class="box_list_1">
                        <li>赛事</li>
                        <li>日期</li>
                        <li></li>
                        <li>比分</li>
                        <li></li>
                        <li>胜负</li>
                    </ul>
                    <div class="box_list_2">
                        <ul>
                            <li>澳彩</li>
                            <li><span>初赔</span><span>初赔</span></li>
                            <li><i>4.25</i><i>4.25</i></li>
                            <li><i>4.25</i><i>4.25</i></li>
                            <li><i>4.25</i><i>4.25</i></li>
                        </ul>
                        <ul>
                            <li>澳彩</li>
                            <li><span>初赔</span><span>初赔</span></li>
                            <li><i>4.25</i><i>4.25</i></li>
                            <li><i>4.25</i><i>4.25</i></li>
                            <li><i>4.25</i><i>4.25</i></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="bottom">去投注</div>
        </section>
    </div>
</template>
<script src='./script.js'>
// import http from '../api/http'
</script>