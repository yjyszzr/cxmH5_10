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
        if(this.orderObj.lotteryPlayClassifyId=='8'){
          this.$store.dispatch("changefsList", []);
          this.$store.dispatch("changefsNum", '2');
          this.$store.dispatch("changefirstList", []);
          this.$store.state.world_cupObj.worldfliter = []
          this.$router.push({
              path: '/activity/world_matchList',
              query:{
                id: 0
              },
              replace: false
          })
        }else{
          this.$router.push({
            path: '/freebuy/singleNote',
              query:{
                id: this.orderObj.lotteryPlayClassifyId
              },
              replace: false
          })
        }
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