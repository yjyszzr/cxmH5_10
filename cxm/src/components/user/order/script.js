import api from '../../../fetch/api'
import { Toast } from 'mint-ui'
import { Indicator } from 'mint-ui'
export default {
    name: 'order',
    beforeCreate() {
			Indicator.open()
    },
    data () {
      return {
        orderId: this.$route.query.id,
        orderObj: ''
      }
    },
    created(){
      
    },
    methods: {
      goDraw(c){
        this.$router.push({
          path: '/user/draw',
          query: {
            id: c,
            orderSn: this.orderObj.orderSn
          },
          replace: false
        })
      },
      jxtz(){
        this.$router.push({
          path: '/freebuy/singleNote',
          query:{
            id: this.orderObj.playType,
            cltId: this.orderObj.lotteryPlayClassifyId,
            ltId: this.orderObj.lotteryClassifyId
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
             console.log(res)
              this.orderObj = res.data
            }else{
              Toast(res.msg)
            }
        })
    },
    beforeRouteLeave(to, from, next) {
      if(to.path!='/freebuy/payment'){
        next()
      }else{
        this.$store.state.matchSelectedList = []
        localStorage.removeItem('tab')
        this.$router.push({path: '/'})
      }
    }
}