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
        if(localStorage.getItem('activefrom')=='0'){
            this.open = true
        }
        let data = {
            payLogId: localStorage.getItem('payLogId')
        }
        api.rechargeSucReiceiveBonus(data)
            .then(res => {
                if (res.code == 0) {
                    this.donationPrice = res.data.donationPrice
                }
                localStorage.removeItem('payLogId')
                localStorage.removeItem('activefrom')
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