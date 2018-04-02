import api from '../../../fetch/api'
import { Toast } from 'mint-ui'
import { Indicator } from 'mint-ui'
export default {
    name: 'order',
    data () {
      return {
        orderId: this.$route.query.id,
        orderObj: {}
      }
    },
    created(){
      
    },
    methods: {
      goDraw(c){
        this.$router.push({
          path: '/user/draw',
          query: {
            id: c
          },
          replace: false
        })
      }
    },
    mounted(){
        let data = {
          'orderId': this.orderId
        }
        api.getOrderDetail(data)
        .then(res => {
            if(res.code==0) {
              //console.log(res)
              this.orderObj = res.data
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