<template>
    <div class="header">
        <a @click="return_back()" class="go_return"></a>
        <p>彩小秘·{{title}}</p>
    </div>
</template>

<script>
	export default {
        name: 'header',
        props:[
            'title'
        ],
		data() {
			return {
				
			}
		},
		methods: {
			return_back() {
				this.$router.go(-1)
			}
		}
	}
</script>


<style lang='scss'>
    .header{
        width: 100%;
    }
</style>

