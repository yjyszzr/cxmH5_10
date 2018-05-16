<template>
	<mt-swipe :show-indicators="true">
		<mt-swipe-item v-for="(data,i) in bannerList" :key="i">
			<img :src="data.bannerImage" @click='lunbo(data.bannerLink)'/>
		</mt-swipe-item>
	</mt-swipe>
</template>

<script>
	import { Toast } from 'mint-ui'
	import {getUrlStr} from '../../util/common'
	export default {
		name: 'lunbo',
		data() {
			return {
				url: ''
			}
		},
		props:[
			'bannerList'
		],
		mounted() {
			
		},
		methods: {
			lunbo(url) {
				if(getUrlStr('type',url)=='3'){
					this.$store.state.matchObj = {};
					this.$store.state.mark_playObj.bfIdSaveMapFlag = 0;
					this.$store.state.mark_playObj.bfIdSaveMap = new Map();
					this.$store.state.freebuyId = getUrlStr('subid',url);
					this.$router.push({
						path: "/freebuy/singleNote",
						query: {
							id: getUrlStr('subid',url)
						},
						replace: false
					});
				}else if(getUrlStr('type',url)=='4'){
					 this.$router.push({
						path: '/lottery/teamDetail',
						query:{
							id: getUrlStr('id',url)
						},
						replace: false
					})
				}else if(getUrlStr('type',url)=='8'){
					 this.$router.push({
							path: "/index/consult",
							query: {
							id: getUrlStr('id',url)
							},
							replace: false
					});
				}else{
					location.href=url
				}
			}
		}
	}
</script>

<style lang='scss'>
	@import '../../assets/css/function.scss';
	.mint-swipe-indicators {
		bottom: 0;
	}
	.mint-swipe{
		height: px2rem(306px)!important;
		overflow: hidden;
		.mint-swipe-item{
			//position: relative;
			height: px2rem(306px);
			margin-top: px2rem(-1px);
			img{
				display: block;
				width: 100%;
				height: 100%;
			}
		}
	}
</style>