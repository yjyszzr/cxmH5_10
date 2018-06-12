<style lang='scss' scoped src='./style.scss'>

</style>
<template>
    <div class="sixty">
			<div data-v-5521cdf9="" id="part2">
				<p style="display:none;">{{num}}</p>
				<div class="med">彩小秘 </div>
				<div data-v-5521cdf9="" class="contentBox">
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
									<div data-v-5521cdf9="" class="team-icon"><img :src="data.icon" data-v-5521cdf9="" alt="">
										<div data-v-5521cdf9="" class="screen" style="display: none;"></div>
									</div>
									<p data-v-5521cdf9="" class="link-down" v-if="i%2==0"></p>
									<p data-v-5521cdf9="" class="link-up" v-else></p>
								</div>
							</div>
							<p data-v-5521cdf9="" class="link-row"></p>
						</div>
					</div>
					<div data-v-5521cdf9="" class="grounp-2-left">
						<div data-v-5521cdf9="">
							<div data-v-5521cdf9="" class="grounp-2">
								<div data-v-5521cdf9="" class="team-icon">
									<div data-v-5521cdf9=""><img data-v-5521cdf9="" alt="">
										<div data-v-5521cdf9="" class="screen" style="display: none;"></div>
									</div>
								</div>
								<p data-v-5521cdf9="" class="link-down"></p>
							</div>
							<div data-v-5521cdf9="" class="grounp-2">
								<div data-v-5521cdf9="" class="team-icon">
									<div data-v-5521cdf9=""><img data-v-5521cdf9="" alt="">
										<div data-v-5521cdf9="" class="screen" style="display: none;"></div>
									</div>
								</div>
								<p data-v-5521cdf9="" class="link-up"></p>
							</div>
							<p data-v-5521cdf9="" class="link-row"></p>
						</div>
					</div>
					<div data-v-5521cdf9="" class="grounp-1-center"><img data-v-5521cdf9="" src="https://static1.dongqiudi.com/topic/static/img/cup.6f2339f.png" alt="" class="cup">
						<div data-v-5521cdf9="" class="link-row"></div>
						<div data-v-5521cdf9="" class="grounp-1">
							<!---->
							<div data-v-5521cdf9="" class="team-icon"><img data-v-5521cdf9="" alt="">
								<div data-v-5521cdf9="" class="screen" style="display: none;"></div>
							</div>
							<p data-v-5521cdf9="" class="line-right"></p>
						</div>
						<div data-v-5521cdf9="" class="grounp-1">
							<p data-v-5521cdf9="" class="line-left"></p>
							<div data-v-5521cdf9="" class="team-icon"><img data-v-5521cdf9="" alt="">
								<div data-v-5521cdf9="" class="screen" style="display: none;"></div>
							</div>
							<!---->
						</div>
						<div data-v-5521cdf9="" class="champion">
							<div data-v-5521cdf9="" class="icon-box">
								<div data-v-5521cdf9="" class="screen"></div>
							</div>
							<p data-v-5521cdf9="" class="champion-name"> </p> <img data-v-5521cdf9="" src="data:image/png;base64,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" alt="" class="champion-logo"></div>
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
									<div data-v-5521cdf9="" class="team-icon"><img :src='data.icon' data-v-5521cdf9="" alt="">
										<div data-v-5521cdf9="" class="screen" style="display: none;"></div>
									</div>
									<p data-v-5521cdf9="" class="link-down" v-if="i%2==0"></p>
									<p data-v-5521cdf9="" class="link-up" v-else></p>
								</div>
							</div>
							<p data-v-5521cdf9="" class="link-row"></p>
						</div>
					</div>
					<div data-v-5521cdf9="" class="grounp-2-right">
						<div data-v-5521cdf9="">
							<div data-v-5521cdf9="" class="grounp-2">
								<div data-v-5521cdf9="" class="team-icon">
									<div data-v-5521cdf9=""><img data-v-5521cdf9="" alt="">
										<div data-v-5521cdf9="" class="screen" style="display: none;"></div>
									</div>
								</div>
								<p data-v-5521cdf9="" class="link-down"></p>
							</div>
							<div data-v-5521cdf9="" class="grounp-2">
								<div data-v-5521cdf9="" class="team-icon">
									<div data-v-5521cdf9=""><img data-v-5521cdf9="" alt="">
										<div data-v-5521cdf9="" class="screen" style="display: none;"></div>
									</div>
								</div>
								<p data-v-5521cdf9="" class="link-up"></p>
							</div>
							<p data-v-5521cdf9="" class="link-row"></p>
						</div>
					</div>
				</div>
				<!---->
				<div data-v-5521cdf9="" class="confirm gray">完成</div>
				<!---->
			</div>
		</div>
</template>
<script src='./script.js'>

</script>

