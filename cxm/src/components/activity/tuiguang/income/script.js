import {isTitle} from '../../../../util/common'
import api from '../../../../fetch/api'
import {Indicator, Toast} from 'mint-ui'
import datefilter from "../../../../util/datefilter";

export default {
    name: 'income',
    data() {
        return {
            token: '',
            income: {},
            userId: this.$route.query.userId
        }
    },
    beforeCreate() {
        Indicator.open()
    },
    mounted() {
        let data = {
            'userId': this.userId
        }
        api.income(data)
            .then(res => {
                if (res.code == 0) {
                    this.income = res.data
                }
            })
        isTitle('我的推广收入')
    },
    methods: {
        golist(itemdate) {
            this.$router.push({
                path: '/activity/incomedetail',
                query: {
                    'addTime': new Date(itemdate.replace(/-/g, '/')).getTime(),
                    'userId': this.userId
                },
                replace: false
            })
        }

    }
}