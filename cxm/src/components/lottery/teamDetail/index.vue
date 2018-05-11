<style lang='scss' src='./style.scss'></style>
<template>
    <div class="wrap teamDetail">
        <section v-if="ckxqObj.matchInfo">
            <div class="team">
                <p class="p1">
                    {{ckxqObj.matchInfo.changci}} {{ckxqObj.matchInfo.leagueAddr}} {{matchTimeDate(ckxqObj.matchInfo.matchTime)}}
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
                        <i>客胜{{ckxqObj.matchInfo.aOdds}}</i>
                    </li>
                </ul>
            </div>
            <ul class="analytical">
                <li class="currer"><p @click="fxTab($event,'1')"></p><span>分析</span></li>
                <li><p @click="fxTab($event,'2')"></p><span>赔率</span></li>
            </ul>
            <!--分析-->
            <div class="analysis" v-if="flag==false">
                <div class="detail_list">
                    <p>历史交锋<span>近{{ckxqObj.hvMatchTeamInfo.total}}场比赛</span><span>主队</span><span>{{ckxqObj.hvMatchTeamInfo.win}}胜</span><span>{{ckxqObj.hvMatchTeamInfo.draw}}平</span><span>{{ckxqObj.hvMatchTeamInfo.lose}}负</span></p>
                </div>
                <div class="progress">
                    <div class="h_progress">
                        <span>主胜</span>
                        <el-progress :percentage="(ckxqObj.hvMatchTeamInfo.win/ckxqObj.hvMatchTeamInfo.total)*100" status="exception"></el-progress>
                    </div>
                    <div class="p_progress">
                        <span>平</span>
                        <el-progress :percentage="(ckxqObj.hvMatchTeamInfo.draw/ckxqObj.hvMatchTeamInfo.total)*100" :show-text='false'></el-progress>
                    </div>
                    <div class="f_progress">
                        <span>客胜</span>
                        <el-progress :percentage="(ckxqObj.hvMatchTeamInfo.lose/ckxqObj.hvMatchTeamInfo.total)*100" status="success"></el-progress>
                    </div>
                </div>
                <div class="cen_list">
                    <ul class="box_list_1">
                        <li>赛事</li>
                        <li>日期</li>
                        <li>比分</li>
                        <li>胜负</li>
                    </ul>
                    <div class="box_list_2">
                        <ul v-for="(item,i) in ckxqObj.hvMatchTeamInfo.matchInfos" :key='i'>
                            <li class="list_cur">{{item.leagueAddr}}</li>
                            <li>{{item.matchDay}}</li>
                            <li><span :style="{'color':ckxqObj.matchInfo.homeTeamAbbr==item.homeTeamAbbr?'#505050':'#9f9f9f'}">{{item.homeTeamAbbr}}</span>
                            <span>{{item.whole}}</span>
                            <span :style="{'color':ckxqObj.matchInfo.homeTeamAbbr==item.visitingTeamAbbr?'#505050':'#9f9f9f'}">{{item.visitingTeamAbbr}}</span></li>
                            <li :style="{'color':colorMatchRs(item.matchRs)}">{{item.matchRs}}</li>
                        </ul>
                    </div>
                </div>
                <div class="cen_list">
                    <div class="detail_list" style="border-bottom:1px solid #f0f0f0;">
                        <p>最近战绩<span>近{{ckxqObj.hMatchTeamInfo.total}}场比赛</span><span style="color: #505050;">{{ckxqObj.matchInfo.homeTeamAbbr}} (主队)</span><span>{{ckxqObj.hMatchTeamInfo.win}}胜</span><span>{{ckxqObj.hMatchTeamInfo.draw}}平</span><span>{{ckxqObj.hMatchTeamInfo.lose}}负</span></p>
                    </div>
                    <ul class="box_list_1">
                        <li>赛事</li>
                        <li>日期</li>
                        <li>比分</li>
                        <li>胜负</li>
                    </ul>
                    <div class="box_list_2">
                        <ul v-for="(item,i) in ckxqObj.hMatchTeamInfo.matchInfos" :key='i'>
                            <li class="list_cur">{{item.leagueAddr}}</li>
                            <li>{{item.matchDay}}</li>
                            <li><span :style="{'color':ckxqObj.matchInfo.homeTeamAbbr==item.homeTeamAbbr?'#505050':'#9f9f9f'}">{{item.homeTeamAbbr}}</span>
                            <span>{{item.whole}}</span>
                            <span :style="{'color':ckxqObj.matchInfo.homeTeamAbbr==item.visitingTeamAbbr?'#505050':'#9f9f9f'}">{{item.visitingTeamAbbr}}</span></li>
                            <li :style="{'color':colorMatchRs(item.matchRs)}">{{item.matchRs}}</li>
                        </ul>
                    </div>
                </div>
                <div class="cen_list">
                    <div class="detail_list" style="border-bottom:1px solid #f0f0f0;">
                        <p>最近战绩<span>近{{ckxqObj.vMatchTeamInfo.total}}场比赛</span><span style="color: #505050;">{{ckxqObj.matchInfo.visitingTeamAbbr}} (客队)</span><span>{{ckxqObj.vMatchTeamInfo.win}}胜</span><span>{{ckxqObj.vMatchTeamInfo.draw}}平</span><span>{{ckxqObj.vMatchTeamInfo.lose}}负</span></p>
                    </div>
                    <ul class="box_list_1">
                        <li>赛事</li>
                        <li>日期</li>
                        <li>比分</li>
                        <li>胜负</li>
                    </ul>
                    <div class="box_list_2">
                        <ul v-for="(item,i) in ckxqObj.vMatchTeamInfo.matchInfos" :key='i'>
                            <li class="list_cur">{{item.leagueAddr}}</li>
                            <li>{{item.matchDay}}</li>
                            <li><span :style="{'color':ckxqObj.matchInfo.visitingTeamAbbr==item.homeTeamAbbr?'#505050':'#9f9f9f'}">{{item.homeTeamAbbr}}</span>
                            <span>{{item.whole}}</span>
                            <span :style="{'color':ckxqObj.matchInfo.visitingTeamAbbr==item.visitingTeamAbbr?'#505050':'#9f9f9f'}">{{item.visitingTeamAbbr}}</span></li>
                            <li :style="{'color':colorMatchRs(item.matchRs)}">{{item.matchRs}}</li>
                        </ul>
                    </div>
                </div>
                <div class="ranking" style="display:none;">
                    <p>积分排名</p>
                    <div class="zcScore">
						<div class="zcTitle">
							阿森纳(主场)
						</div>
						<div class="tbLIst">
							<ul class="tbListNav">
								<li></li>
								<li>场</li>
								<li>胜</li>
								<li>平</li>
								<li>负</li>
								<li>进/失</li>
								<li>积分</li>
								<li>名次</li>
							</ul>
							<div class="tbListBottom">
								<div class="tabListLeft">
									<span>总</span>
									<span>主</span>
									<span>客</span>
								</div>
								<div class="tabListRight">
									<ul>
										<li>29</li>
										<li>13</li>
										<li>9</li>
										<li>7</li>
										<li>51/36</li>
										<li>48</li>
										<li>4</li>
									</ul>
									<ul>
										<li>29</li>
										<li>13</li>
										<li>9</li>
										<li>7</li>
										<li>51/36</li>
										<li>48</li>
										<li>4</li>
									</ul>
									<ul>
										<li>29</li>
										<li>13</li>
										<li>9</li>
										<li>7</li>
										<li>51/36</li>
										<li>48</li>
										<li>4</li>
									</ul>
								</div>
							</div>
						</div>
                    </div>
                    <div class="kcScore">
						<div class="zcTitle">
							阿森纳(客场)
						</div>
						<div class="tbLIst">
                            <ul class="tbListNav">
								<li></li>
								<li>场</li>
								<li>胜</li>
								<li>平</li>
								<li>负</li>
								<li>进/失</li>
								<li>积分</li>
								<li>名次</li>
							</ul>
							<div class="tbListBottom">
								<div class="tabListLeft">
									<span>总</span>
									<span>主</span>
									<span>客</span>
								</div>
								<div class="tabListRight">
									<ul>
										<li>29</li>
										<li>13</li>
										<li>9</li>
										<li>7</li>
										<li>51/36</li>
										<li>48</li>
										<li>4</li>
									</ul>
									<ul>
										<li>29</li>
										<li>13</li>
										<li>9</li>
										<li>7</li>
										<li>51/36</li>
										<li>48</li>
										<li>4</li>
									</ul>
									<ul>
										<li>29</li>
										<li>13</li>
										<li>9</li>
										<li>7</li>
										<li>51/36</li>
										<li>48</li>
										<li>4</li>
									</ul>
                                </div>
							</div>
						</div>
                    </div>
                </div>
            </div>
            <!--赔率-->
            <v-detail v-if="flag==true" :leagueMatchAsias='ckxqObj.leagueMatchAsias' :leagueMatchEuropes='ckxqObj.leagueMatchEuropes'></v-detail>
        </section>
    </div>
</template>
<script src='./script.js'>

</script>