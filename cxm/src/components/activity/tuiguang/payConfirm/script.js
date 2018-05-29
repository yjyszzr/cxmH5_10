import api from '../../../../fetch/api'
import {Indicator, Toast} from 'mint-ui'
import {isTitle} from '../../../../util/common'

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
        isTitle('支付订单')
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