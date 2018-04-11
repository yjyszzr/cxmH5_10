<template>
    <div class="header">
        <a @click="return_back()" class="go_return"></a>
        <p>彩小秘·{{title}}</p>
        <p class="filter" v-show="menuDisplay">
            <span @click='filter()'>筛选</span>
            <span>帮助</span>
        </p>
    </div>
</template>

<script>
	export default {
        name: 'header',
        props: {
            title: String,
            menuDisplay: Boolean,
        },
		data() {
			return {
				
			}
		},
		methods: {
			return_back() {
                if(this.$route.path.split('/')[2]){
                    if(this.$route.path.split('/')[2]=='singleNote'){
                        this.$store.state.matchSelectedList = []
                    }
                }
				this.$router.go(-1)
            },
            filter(){
                this.$store.state.mark_show = true
            }
		}
	}
</script>


<style lang='scss'>
    @import '../../../assets/css/function.scss';
    .header{
        width: 100%;
        .filter{
            position: absolute;
            top: 0;
            right: 0;
            margin: 0;
            display: flex;
            padding-right: px2rem(29px);
            span{
                display: block;
                height: 100%;
                padding: 0 px2rem(5px);
            }
        }
    }
</style>

