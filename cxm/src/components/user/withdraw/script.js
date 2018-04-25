import api from '../../../fetch/api'
import { Toast } from 'mint-ui'
import { Indicator } from 'mint-ui'
export default {
    name: 'withdraw',
    data () {
      return {
        withdrawObj: {

        }
      }
    },
    beforeCreate() {
			Indicator.open()
    },
    created(){
      
    },
    mounted(){
        let data = {
          str: ''
        }
        api.queryWithDrawShow(data)
        .then(res => {
            if(res.code==0) {
              this.withdrawObj = res.data
              //console.log(res)
            }else{
              Toast(res.msg)
            }
            Indicator.close()
        })
    }
}