import {isTitle} from '../../../../util/common'
import api from '../../../../fetch/api'
import {Indicator, Toast} from 'mint-ui'
import dateFilter from '../../../../util/datefilter'

export default {
    name: 'discount',
    data() {
        return {
            discountList: [],
            selected: sessionStorage.getItem('discountTap') != '2' ? '1' : '2',
            list: []
        }
    },

    beforeCreate() {
        Indicator.open()
    },
    created() {
        let that = this
        window.actionMessage = function (arg) {
            localStorage.setItem('token', JSON.parse(arg).token)
        }
    },
    mounted() {
        isTitle('优惠兑换')
        setTimeout(() => {
            this.fetchData()
        }, 1000)
    },
    methods: {
        goPayconfirm(c) {
            this.$router.push({
                path: '/activity/payConfirm',
                query: {
                    id: c,
                    showtitle: this.$route.query.showtitle=='1'?'1':'0'
                }
            })
        },
        date(c) {
            return dateFilter(c * 1000, 2)
        },
        fetchData() {
            let data = {
                'userId': 1
            }
            if (this.selected == '1') {
                api.cashCouponList(data)
                    .then(res => {
                        if (res.code == 0) {
                            this.discountList = res.data
                        }
                    })
            } else {
                api.userCashCouponUserList(data)
                    .then(res => {
                        if (res.code == 0) {
                            this.list = res.data
                        }
                    })
            }
        }
    },
    watch: {
        selected(a, b) {
            Indicator.open()
            this.fetchData()
        }
    },
    beforeRouteLeave(to, from, next) {
        next()
        sessionStorage.removeItem('discountTap')
    }
}