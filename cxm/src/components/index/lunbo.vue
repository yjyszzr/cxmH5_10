<template>
	<mt-swipe :show-indicators="true">
		<mt-swipe-item v-for="(data,i) in bannerList" :key="i">
			<img :src="data.bannerImage" @click='lunbo(data.bannerLink)'/>
		</mt-swipe-item>
	</mt-swipe>
</template>

<script>
	import { Toast } from 'mint-ui'
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
				location.href=url
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
		height: px2rem(306px);
		.mint-swipe-item{
			position: relative;
			height: px2rem(306px);
			img{
				display: block;
				width: 100%;
				height: 100%;
			}
		}
	}
</style>