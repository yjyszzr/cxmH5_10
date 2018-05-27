import api from '../../../../fetch/api'
import { Indicator,Toast } from 'mint-ui'
export default {
	name: 'payConfirm',
	data() {
		return {
			orderObj: {}
		}
	},
	beforeCreate() {
		Indicator.open()
	},
	mounted() {
		let data = {
			'cashCouponId': this.$route.query.id
		}
		api.toPaymentPage(data)
			.then(res => {
				if(res.code == 0) {
					this.orderObj = res.data
				}
			})
	},
	methods: {
		payBtn() {
			let data = {
				'cashCouponId': this.$route.query.id
			}
			api.toCreateOrder(data)
				.then(res => {
					if(res.code == 0) {
						this.$router.go(-1)
						sessionStorage.setItem('discountTap','2')
						Toast(res.data)
					}
			})
		},
		payBtnDisable(){
			Toast('可提现余额不足')
		}
	}
}