import {isTitle} from '../../../../util/common'
import api from '../../../../fetch/api'
import {Indicator, Toast} from 'mint-ui'
import dateFilter from '../../../../util/datefilter.js'

export default {
    name: 'incomedetail',
    data() {
        return {
            token: '',
            addTime: dateFilter(Number(this.$route.query.addTime), 2),
            incomedetail: {},
            userId: this.$route.query.userId
        }
    },
    beforeCreate() {
        Indicator.open()
    },
    mounted() {
        let data = {
            'userId': this.userId,
            'addTime': this.addTime
        }
        api.incomedetail(data)
            .then(res => {
                if (res.code == 0) {
                    this.incomedetail = res.data
                }
            })
        isTitle("收入明细")
    },
    methods:{
        goInclude() {
            if(this.$route.query.showtitle&&this.$route.query.showtitle=='1'){
                this.$router.push({
                    path: "/activity/include",
                    query:{
                        'showtitle': '1'
                    },
                    replace: false
                });
            }else{
                this.$router.push({
                    path: "/activity/include",
                    replace: false
                });
            }
        },
    }
}