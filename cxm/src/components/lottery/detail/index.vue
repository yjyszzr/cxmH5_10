<style lang='scss' src='./style.scss'></style>
<template>
	<div class="odds">
		<ul class="odd_ul">
			<li class="odd_cur">
				<p @click="deTailTab($event,'1')"></p><span>欧赔</span></li>
			<li>
				<p @click="deTailTab($event,'2')"></p><span>压盘</span></li>
			<li>
				<p @click="deTailTab($event,'3')"></p><span>大小球</span></li>
		</ul>
		<div class="cen_list1" v-if="dFlag=='1'">
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
		<div class="cen_list2" v-if="dFlag=='2'">
			<ul class="box_list_1">
				<li>公司</li>
				<li></li>
				<li>主</li>
				<li>盘口</li>
				<li>负</li>
			</ul>
			<div class="box_list_2">
				<ul v-for="(data,i) in leagueMatchAsias" :key='i'>
					<li>{{data.comName}}</li>
					<li><span>初赔</span><span>即赔</span></li>
					<li><i>{{data.initOdds1}}</i>
						<i v-if="data.odds1Change=='0'">{{data.realOdds1}}</i>
						<i v-if="data.odds1Change=='1'" style="color: #ea5504;">{{data.realOdds1}}↑</i>
						<i v-if="data.odds1Change=='2'" style="color: rgb(68, 174, 53);">{{data.realOdds1}}↓</i>
					</li>
					<li><i>{{data.initRule}}</i><i>{{data.realRule}}</i></li>
					<li><i>{{data.initOdds2}}</i>
						<i v-if="data.odds2Change=='0'">{{data.realOdds2}}</i><i v-if="data.odds2Change=='1'" style="color: #ea5504;">{{data.realOdds2}}↑</i><i v-if="data.odds2Change=='2'" style="color: rgb(68, 174, 53);">{{data.realOdds2}}↓</i>
					</li>
				</ul>
			</div>
		</div>
		<div class="cen_list3" v-if="dFlag=='3'">
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
</template>
<script src='./script.js'>
</script>