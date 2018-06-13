<template>
	<div v-if="activity != null" class="activity section">
        <img :src="activity.actImg" alt="" @click="ac(activity.actUrl)">
    </div>
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
			'activity'
		],
		mounted() {

		},
		methods: {
			ac(url) {
				this.$router.push({'path':'/activity/one?cxmxc=scm&usinfo=2&showtitle=1&cmshare=1&type=1'})
				// location.href=url
			}
		}
	}
</script>

<style lang='scss'>
	@import '../../assets/css/function.scss';
	.activity{
		height: px2rem(186px);
		overflow: hidden;
        img{
			display: block;
			margin: 0 auto;
			//width: 100%;
			height: 100%;
        }
    }
</style>