<template>
	<div class="shortcut" @click="shortcutClick()" @touchmove.prevent>
        <img src="../../assets/img/shortcutmb.jpg" alt="">
    </div>
</template>

<script>
	export default {
		name: 'shortcut',
		data() {
			return {
				
			}
		},
		mounted() {

		},
		methods: {
			shortcutClick(){
                this.$store.commit('MARKSHORTCUT',false)
            }
		}
	}
</script>

<style lang='scss'>
	@import '../../assets/css/function.scss';
	.shortcut{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        z-index: 210;
        img{
            width: 70%;
            position: absolute;
            bottom: 0;
            left: px2rem(150px);
        }
    }
</style>