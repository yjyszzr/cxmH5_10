import api from '../../../fetch/api'
import { Toast } from 'mint-ui'
import { Indicator } from 'mint-ui'
export default {
    name: 'draw',
    data () {
      return {
        id: this.$route.query.id,
        drawObj: {}
      }
    },
    created(){
      
    },
    mounted(){
      let data = {
        'programmeSn': this.id
      }
      api.getTicketScheme(data)
      .then(res => {
          if(res.code==0) {
            console.log(res)
            this.drawObj = res.data
          }else{
            Toast(res.msg)
          }
          Indicator.close()
      })
      .catch(error => {
          Toast('网络错误')
      })
    }
}