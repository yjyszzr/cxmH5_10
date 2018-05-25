import { isShare,isTitle } from '../../../../util/common'
import api from '../../../../fetch/api'
import { Indicator} from 'mint-ui'
import dateFilter from '../../../../util/datefilter'
export default {
	name: 'discount',
	data() {
		return {
			discountList: [],
			selected: '1',
			list: []
		}
	},

	beforeCreate() {
		Indicator.open()
	},
	created(){
		window.actionMessage = function(arg) {
			localStorage.setItem('token', JSON.parse(arg).token)
		}
	},
	mounted() {
		isShare('彩小秘体育', '含笑哈哈哈','http://192.168.31.205:8080/activity/discount?cxmxc=scm&usinfo=1&cmshare=1')
		isTitle('代金券')
		this.fetchData()
	},
	methods: {
		goPayconfirm(c) {
			this.$router.push({
				path: '/activity/payConfirm',
				query:{
					id: c
				}
			})
		},
		date(c){
			dateFilter(c,2)
		},
		fetchData(){
			let data = {
				'userId': 1
			}
			if(this.selected=='1'){
				api.cashCouponList(data)
					.then(res => {
						if(res.code == 0) {
							this.discountList = res.data
						}
					})	
			}else{
				api.userCashCouponUserList(data)
					.then(res => {
//						console.log(res)
						if(res.code == 0) {
							this.list = res.data
						}
					})
			}
		}
	},
	watch:{
		selected(a,b){
			Indicator.open()
			this.fetchData()
		}
	}
}