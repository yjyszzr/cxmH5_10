import api from '../../../fetch/api'
import { Toast } from 'mint-ui'
import { Indicator } from 'mint-ui'
import datefilter from '../../../util/datefilter'
export default {
    name: 'give_details',
    data () {
      return {
        id: this.$route.query.id,
        giveObj: {}
      }
    },
    beforeCreate() {
			Indicator.open()
		},
    created(){
      
    },
    mounted(){
      let data = {
        'withdraw_sn': this.id
      }
      api.withdrawList(data)
      .then(res => {
         console.log(res)
          if(res.code==0) {
            this.giveObj = res.data
          }
      })
    },
    beforeRouteLeave(to, from, next) {
      next()
  }
}