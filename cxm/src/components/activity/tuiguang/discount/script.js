export default {
	name: 'discount',
	data(){
		return {
			
		}
	},
	mounted(){
		
	},
	methods:{
		goPayconfirm(){
			this.$router.push({
				'path': '/activity/payConfirm'
			})
		}
	}
}
