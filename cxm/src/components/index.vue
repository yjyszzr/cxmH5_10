<style scoped lang="scss">
	@import "../assets/css/function.scss";
	.header {
		position: relative;
		height: px2rem(100px);
		line-height: px2rem(100px);
		background-color: #fff;
	}
	
	.mation p {
		font-size: px2rem(28px);
		color: #a0a0a0;
		span {
			color: #505050;
		}
	}
	/*.mation p*/
	
	.center {
		width: 100%;
		background: #fff;
		ul {
			padding-bottom: px2rem(28px);
			overflow: hidden;
			li {
				width: 25%;
				text-align: center;
				font-size: px2rem(30px);
				margin-top: px2rem(32px);
				float: left;
				position: relative;
				.entry_status {
					position: absolute;
					top: px2rem(-12px);
					right: px2rem(5px);
					width: px2rem(60px);
				}
				.lottery {
					width: px2rem(64px);
					top: px2rem(-7px);
					right: px2rem(0px);
				}
				p {
					margin-top: px2rem(18px);
					font-size: px2rem(30px);
					color: #505050;
				}
			}
			.entry_icon {
				width: px2rem(93px);
				margin: 0 auto;
			}
		}
	}
	
	.boll {
		height: px2rem(80px);
		font-size: px2rem(30px);
		line-height: px2rem(80px);
		margin-left: px2rem(30px);
		border-bottom: 1px solid #f1f1f1;
	}
	
	.scroll-wrap {
		background: #fff;
		height: px2rem(61px);
		padding-left: px2rem(30px);
		display: flex;
		align-items: center;
		overflow: hidden;
		img {
			vertical-align: middle;
			width: px2rem(30px);
			margin-right: px2rem(15px);
			display: inline-block;
		}
		p {
			font-size: px2rem(28px);
			color: #a0a0a0;
		}
		.scroll-content {
			position: relative;
			transition: top 0.5s;
		}
		.scroll-content li {
			text-align: left;
			font-size: px2rem(28px);
			color: #666;
			height: px2rem(61px);
			display: flex;
			align-items: center;
		}
	}
	
	.information {
		margin-top: px2rem(20px);
		background: #fff;
		padding: 0 px2rem(20px);
		ul {
			li {
				padding: px2rem(20px) 0;
				border-bottom: 1px solid #f0f0f0;
				.choice {
					h5 {
						color: #505050;
						font-size: px2rem(30px);
						margin-bottom: px2rem(10px);
					}
					p {
						font-size: px2rem(24px);
						color: #666666;
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 2;
						margin-bottom: px2rem(15px);
					}
					span {
						color: #9f9f9f;
						margin-right: px2rem(30px);
						font-size: px2rem(22px);
					}
				}
			}
		}
	}
</style>
<!--首页-->
<template>
	<div class="wrap">
		<v-slider :bannerList='bannerList'></v-slider>
		<!--首页-->
		<div class="index_center">
			<div class="carousel">
				<div class="scroll-wrap">
					<img src="../assets/img/not.png">
					<p v-if='show'>温馨提示:理性投注,长跟长红</p>
					<ul class="scroll-content" :style="{top}" v-if='hide'>
						<li v-for="(data,item) in y_Carousel" :key='item'>
							{{data.winningMsg}}
						</li>
					</ul>
				</div>
			</div>
			<v-activity :activity='activity'></v-activity>
			<div class="section center">
				<p class="boll">竞彩足球</p>
				<ul>
					<li v-for='(item,i) in dlPlay' :key='i' @click="goFreebuy(item.playType,item.playType,item.lotteryId)">
						<img :src="item.playClassifyImg" class="entry_icon">
						<p>{{item.playClassifyName}}</p>
						<img src="../assets/img/Awards@2x.png" class="entry_status" alt="" v-if="item.playClassifyLabelId=='3'">
						<img src="../assets/img/Lottery@2x.png" class="entry_status lottery" alt="" v-if="item.playClassifyLabelId=='2'">
						<img src="../assets/img/Popular@2x.png" class="entry_status" alt="" v-if="item.playClassifyLabelId=='4'">
						<img src="../assets/img/Singlepass@2x.png" class="entry_status" alt="" v-if="item.playClassifyLabelId=='1'">
					</li>
				</ul>
			</div>
		</div>
		<!--资讯-->
		<div class="information">
			<ul>
				<li>
					<div class="choice">
						<h5>意甲争四进入百色花，罗马双雄被看好</h5>
						<p>意甲争四进入百色花意甲争四进入百色花意甲争四进入百色花意甲争四进入百色花意甲争四进入百色花意甲争四进入百色花意甲争四进入百色花意甲争四进入百色花意甲争四进入百色花意甲争四进入百色花意甲争四进入百色花意甲争四进入百色花</p>
						<span>彩小秘精选</span><span>今日04-17</span><span>阅读9898989</span>
					</div>
				</li>
				<li></li>
			</ul>

		</div>
	</div>
</template>

<script>
	// import http from '../api/http'
	import api from "../fetch/api";
	import { Toast } from "mint-ui";
	import { Indicator } from "mint-ui";
	import silder from "./index/lunbo"
	import activity from './index/activity'
	export default {
		name: "index",
		data() {
			return {
				bannerList: [], //banner
				activity: {}, //活动
				y_Carousel: [], //中奖信息
				dlPlay: [],
				activeIndex: -1,
				show: true,
				hide: false,
			}
		},
		beforeCreate() {
			Indicator.open()
		},
		components: {
			'v-slider': silder,
			'v-activity': activity
		},
		computed: {
			top() {
				return -this.activeIndex * 0.81333 + 'rem';
			}
		},
		methods: {
			goFreebuy(c, s, t) {
				this.$store.state.matchObj = {}
				this.$store.state.freebuyId = c
				this.$store.state.mark_playObj.bfIdSaveMapFlag = 0
				this.$store.state.mark_playObj.bfIdSaveMap = new Map()
				this.$router.push({
					path: '/freebuy/singleNote',
					query: {
						id: s,
						cltId: c,
						ltId: t
					},
					replace: false
				})
			},
			fetchData() {
				let data = {
					'page': 1,
					'size': 10
				};
				api
					.dllist(data)
					.then(res => {
						if(res.code == 0) {
							console.log(res)
						} else {
							Toast(res.msg);
						}
					})
					.catch(error => {
						Toast("网络错误");
					});
			}
		},
		created: function() {},
		mounted() {
			let data = {

			};
			api
				.getHallData(data)
				.then(res => {
					if(res.code == 0) {
						this.bannerList = res.data.navBanners
						this.activity = res.data.activity
						this.y_Carousel = res.data.winningMsgs
						this.dlPlay = res.data.dlPlayClassifyDetailDTOs
						if(this.y_Carousel.length == 0) {
							this.show = true;
							this.hide = false;
						} else {
							this.show = false;
							this.hide = true;
							setInterval(_ => {
								if(this.activeIndex < this.y_Carousel.length - 2) {
									this.activeIndex += 1;
								} else {
									this.activeIndex = -1;
								}
							}, 3000);
						}
					} else {
						Toast(res.msg);
					}
					Indicator.close();
				})
				.catch(error => {
					Toast("网络错误");
				});
				this.fetchData()
		}
	};
</script>