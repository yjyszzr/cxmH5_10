<style lang='scss' scoped src='./style.scss'>

</style>
<template>
    <div class="sixty">
			<div data-v-5521cdf9="" id="part2">
				<p style="display:none;">{{num}}</p>
				<div class="med"></div>
				<div data-v-5521cdf9="" class="contentBox">
					<transition name="fade"> 
						<div class="fixedTop" v-show="show">
						<p class="fixtd">请点击国旗进行操作</p>
							<p @click="close()">X</p>
						</div>
					</transition>
					<div data-v-5521cdf9="" class="grounp-8-left">
						<div data-v-5521cdf9="" class="grounp-8" v-for="(item,i) in arrLeft" :key='i'>
							<div data-v-5521cdf9="" class="team-16" v-for="(data,index) in item" :key='index'>
								<div data-v-5521cdf9="" class="team">
									<p data-v-5521cdf9="" class="team-number">{{data.sld}}</p>
									<p data-v-5521cdf9="" class="team-icon" @click='teamclick(data)'><img data-v-5521cdf9="" :src="data.icon" alt=""> <span data-v-5521cdf9="" class="">{{data.name}}</span></p>
									<div data-v-5521cdf9="" class="screen" style="display: none;"></div>
									<p data-v-5521cdf9="" class="link-down"></p>
									<p data-v-5521cdf9="" class="link-up"></p>
								</div>
								<p data-v-5521cdf9="" class="link-row"></p>
							</div>
						</div>
					</div>
					<div data-v-5521cdf9="" class="grounp-4-left">
						<div data-v-5521cdf9="" class="grounp-4" v-for="(item,i) in team8Left" :key='i'>
							<div data-v-5521cdf9="" class="team-8" v-for="(data,index) in item" :key='index'>
								<div data-v-5521cdf9="">
									<div data-v-5521cdf9="" class="team-icon" @click="teamC(data)"><img :src="data.icon" data-v-5521cdf9="" alt="">
										<div data-v-5521cdf9="" class="screen" style="display: none;"></div>
									</div>
									<p data-v-5521cdf9="" class="link-down" v-if="index==0||index==2"></p>
									<p data-v-5521cdf9="" class="link-up" v-if="index==1||index==3"></p>
								</div>
							</div>
							<p data-v-5521cdf9="" class="link-row"></p>
						</div>
					</div>
					<div data-v-5521cdf9="" class="grounp-2-left">
						<div data-v-5521cdf9="">
							<div data-v-5521cdf9="" class="grounp-2" v-for="(item,i) in team4Left" :key='i'>
								<div data-v-5521cdf9="" class="team-icon" @click="teamTwoLeft(item)">
									<div data-v-5521cdf9=""><img :src="item.icon" data-v-5521cdf9="" alt="">
										<div data-v-5521cdf9="" class="screen" style="display: none;"></div>
									</div>
								</div>
								<p data-v-5521cdf9="" class="link-down" v-if="i==0"></p>
								<p data-v-5521cdf9="" class="link-up" v-else></p>
							</div>
							<p data-v-5521cdf9="" class="link-row"></p>
						</div>
					</div>
					<div data-v-5521cdf9="" class="grounp-1-center"><img data-v-5521cdf9="" src="https://static1.dongqiudi.com/topic/static/img/cup.6f2339f.png" alt="" class="cup">
						<div data-v-5521cdf9="" class="link-row"></div>
						<div data-v-5521cdf9="" class="grounp-1">
							<!---->
							<div data-v-5521cdf9="" class="team-icon" @click="teamOne(team2Left)"><img :src="team2Left.icon" data-v-5521cdf9="" alt="">
								<div data-v-5521cdf9="" class="screen" style="display: none;"></div>
							</div>
							<p data-v-5521cdf9="" class="line-right"></p>
						</div>
						<div data-v-5521cdf9="" class="grounp-1">
							<p data-v-5521cdf9="" class="line-left"></p>
							<div data-v-5521cdf9="" class="team-icon" @click="teamOne(team2Right)"><img :src="team2Right.icon" data-v-5521cdf9="" alt="">
								<div data-v-5521cdf9="" class="screen" style="display: none;"></div>
							</div>
							<!---->
						</div>
						<div data-v-5521cdf9="" class="champion">
							<div data-v-5521cdf9="" class="icon-box">
								<div data-v-5521cdf9="" class="screen">
									<img :src="winner.icon" alt="" class="winner">
								</div>
							</div>
							<p data-v-5521cdf9="" class="champion-name"> </p> 
							<span  style="font-size:0.35rem;">冠军</span>
						</div>
					</div>
					<div data-v-5521cdf9="" class="grounp-8-right">
						<div data-v-5521cdf9="" class="grounp-8" v-for="(item,i) in arrRight" :key='i'>
							<div data-v-5521cdf9="" class="team-16" v-for="(data,index) in item" :key='index'>
								<div data-v-5521cdf9="" class="team">
									<p data-v-5521cdf9="" class="team-number">{{data.sld}}</p>
									<p data-v-5521cdf9="" class="team-icon" @click='teamclick(data)'><img data-v-5521cdf9="" :src="data.icon" alt=""> <span data-v-5521cdf9="" class="">{{data.name}}</span></p>
									<div data-v-5521cdf9="" class="screen" style="display: none;"></div>
									<p data-v-5521cdf9="" class="link-down"></p>
									<p data-v-5521cdf9="" class="link-up"></p>
								</div>
								<p data-v-5521cdf9="" class="link-row"></p>
							</div>
						</div>
					</div>
					<div data-v-5521cdf9="" class="grounp-4-right">
						<div data-v-5521cdf9="" class="grounp-4" v-for="(item,i) in team8Right" :key='i'>
							<div data-v-5521cdf9="" class="team-8"  v-for="(data,index) in item" :key='index'>
								<div data-v-5521cdf9="">
									<div data-v-5521cdf9="" class="team-icon" @click="teamC(data)"><img :src='data.icon' data-v-5521cdf9="" alt="">
										<div data-v-5521cdf9="" class="screen" style="display: none;"></div>
									</div>
									<p data-v-5521cdf9="" class="link-down" v-if="index%2==0"></p>
									<p data-v-5521cdf9="" class="link-up" v-else></p>
								</div>
							</div>
							<p data-v-5521cdf9="" class="link-row"></p>
						</div>
					</div>
					<div data-v-5521cdf9="" class="grounp-2-right">
						<div data-v-5521cdf9="">
							<div data-v-5521cdf9="" class="grounp-2" v-for="(item,i) in team4Right" :key='i'>
								<div data-v-5521cdf9="" class="team-icon" @click="teamTwo(item)">
									<div data-v-5521cdf9=""><img :src="item.icon" data-v-5521cdf9="" alt="">
										<div data-v-5521cdf9="" class="screen" style="display: none;"></div>
									</div>
								</div>
								<p data-v-5521cdf9="" class="link-down" v-if="i==0"></p>
								<p data-v-5521cdf9="" class="link-up" v-if="i==1"></p>
							</div>
							<p data-v-5521cdf9="" class="link-row"></p>
						</div>
					</div>
				</div>
				<table class="jcTable">
                <tr>
                    <td>16强</td>
                    <td>8强</td>
                    <td>4强</td>
                    <td>冠亚军</td>
                    <td>冠军</td>
                    <td style="font-weight:600;">终极大奖</td>
                </tr>
                <tr>
                    <td>15万</td>
                    <td>8万</td>
                    <td>4万</td>
                    <td>2万</td>
                    <td>1万</td>
                    <td style="font-weight:600;">20万</td>
                </tr>
            </table>
            <div class="zidj">
                <b>终极大奖:</b>
                <span>猜对16强、8强、4强、冠亚军和冠军所有赛果，可平分20万巨额奖金</span>
            </div>
            <div class="jdfj">
                <b>阶段分奖:</b>
                <span>(每阶段猜对赛果，均可平分巨额奖金)</span>
            </div>
				<!---->
				
				<!---->
			</div>
			<div data-v-5521cdf9="" class="confirm gray" v-show="winner===''">提交竞猜方案</div>
			<div data-v-5521cdf9="" class="confirm"  v-show="winner!==''" @click="submitPlan()">提交竞猜方案</div>
		</div>
</template>
<script src='./script.js'>

</script>

