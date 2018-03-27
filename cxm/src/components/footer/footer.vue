<template>
    <div class="foot" @touchmove.prevent v-show="isShowTabbar()">
            <router-link to='/'>
                <img src="../../assets/img/dating.png">
                <span>大厅</span>
            </router-link>
            <router-link to='/'>
                <img src="../../assets/img/dating.png">
                <span>开奖</span>
            </router-link>
            <router-link to='/user'>
                <img src="../../assets/img/dating.png">
                <span>我的</span>
            </router-link>
    </div>
</template>

<script>
export default {
	data() {
		return {

		}
	},
	methods: {
		isShowTabbar () {
            let routeLength = this.$route.path.split('/').length
			return routeLength > 2 ? false : true
		}
	}
}
</script>

<style lang='scss'>
    @import '../../assets/css/function.scss';
    .foot {
        flex-grow: 0;
        flex-shrink: 0;
        width: 100%;
        box-shadow: 0px -2px 3px rgba(0,0,0,0.2);
        height: px2rem(98px);
        display: flex;
        background: white;
        a {
            // flex:1;
            display: flex;
            background: white;
            flex-grow: 1;
            flex-shrink: 1;
            align-items: center;
            justify-content: space-around;
            flex-direction: column;
            img{
                width:px2rem(46px);
            }
            span{
                font-size: px2rem(20px);

            }
        }
    }
</style>

