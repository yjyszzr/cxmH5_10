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
          this.$store.commit('FREEBUYID',this.orderObj.lotteryPlayClassifyId)
          this.$router.push({
            path: '/lottery/freebuy/singleNote'
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
              this.orderObj = res.data
            }
        })
    },

    beforeRouteLeave(to, from, next) {
      if(to.path!='/freebuy/cathectic'){
        next()
      }else{
        this.$store.state.matchSelectedList = []
        localStorage.removeItem('tab')
        this.$router.push({path: '/'})
      }
    }
}