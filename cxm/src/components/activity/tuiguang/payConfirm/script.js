import api from '../../../../fetch/api'
import {Indicator, Toast} from 'mint-ui'
import {means} from '../../../../util/common'

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
        means('支付订单').isTitle
        let data = {
            'cashCouponId': this.$route.query.id
        }
        api.toPaymentPage(data)
            .then(res => {
                if (res.code == 0) {
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
                    if (res.code == 0) {
                        this.$router.go(-1)
                        sessionStorage.setItem('discountTap', '2')
                        Toast(res.data)
                    }
                })
        },
        payBtnDisable() {
            Toast('余额不足')
        }
    }
}