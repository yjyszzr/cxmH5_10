import api from '../../../../fetch/api'
import { MessageBox,Indicator } from 'mint-ui';
export default {
    name: 'record',
    beforeCreate() {
        Indicator.open()
    },
    data(){
        return {
            recordList: [],
            rewardList: []
        }
    },
    methods:{
        paymentBtn(){
            this.$router.push({
                path: '/activity/world/result'
            })
        }
    },
    mounted(){
          api.worldCupPlanlist({})
            .then(res => {
              if (res.code == 0) {
                this.recordList = res.data
              }
            })
          api.rewardList('')
            .then(res => {
              if (res.code == 0) {
                this.rewardList = res.data
              }
            })
    }
}