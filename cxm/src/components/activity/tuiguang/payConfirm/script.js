import api from '../../../../fetch/api'
import { Indicator } from 'mint-ui'
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
		api.toCreateOrder(data)
			.then(res => {
				console.log(res)
				if(res.code == 0) {
					this.orderObj = res.data
				}
			})
	},
	methods: {
		payBtn() {

		}
	}
}