import {means} from '../../../../util/common'
import api from '../../../../fetch/api'
import { Toast } from 'mint-ui'
export default {
    name: 'red_packet',
    data(){
        return {
            donationPrice: 0,
            open: false
        }
    },
    mounted(){
        means('活动详情').isTitle
        let data = {
            payLogId: localStorage.getItem('payLogId')
        }
        api.rechargeSucReiceiveBonus(data)
            .then(res => {
                if (res.code == 0) {
                    this.donationPrice = res.data.donationPrice
                }
                localStorage.removeItem('payLogId')
            })
    },
    methods: {
        close(){
            this.$store.state.mark_showAc = false
        },
        goCard(){
            this.close()
            this.$router.push({
                path: '/user/detail'
            })
        },
        sjhbClick(){
            this.open = true
        }
    }
}