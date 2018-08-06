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
             //console.log(res)
              this.orderObj = res.data
                // if(orderObj.isDan == 0){
                //
                // }else if(orderObj.isDan == 1){
                //
                // }
            }
        })
    },

    beforeRouteLeave(to, from, next) {
      if(to.path!='/freebuy/cathectic'&&to.path!='/activity/world_detail'){
        next()
      }else{
        this.$store.state.matchSelectedList = []
        localStorage.removeItem('tab')
        this.$store.state.world_cupObj.world_tab = false
        this.$router.push({path: '/'})
      }
    }
}