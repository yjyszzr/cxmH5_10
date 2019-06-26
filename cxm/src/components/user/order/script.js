import api from '../../../fetch/api'
// import { Toast } from 'mint-ui'
import { Indicator } from 'mint-ui'
import {nativeApp,isWebview,isShare} from '../../../util/common.js'
import {mapState} from 'vuex'
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
      isShare(this.$route.query.orderSn, '', '/user/analogOrder?id='+this.$route.query.orderSn, '/static/activity_Back/newComerReg/img/ttlogo.png')
      nativeApp({'methodName':'showTitle','title':'方案详情'})
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
        if(!isWebview()){
          this.$store.commit('FREEBUYID',this.orderObj.lotteryPlayClassifyId)
          this.$router.push({
            path: '/lottery/freebuy/singleNote'
          })
        }else{
          nativeApp({'methodName':'pushUrl','url':'http://caixiaomi.net?cxmxc=scm&type=3&id='+this.orderObj.lotteryClassifyId})
        }
      },
      color(){
        let channelcolor = "#d12120"
        if(isWebview()){
          channelcolor = this.channelObj.color
        }
        return channelcolor;
      },
        sharOder(){
            this.$store.dispatch("getMarkShow", true);
            this.$store.dispatch("getMarkShowType", 4);
        },
        //引导
        initGuide(){
          this.$store.dispatch("getMarkShow", true);
          this.$store.dispatch("getMarkShowType", 6);
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
                this.$store.state.order.orderNum = res.data.orderSn
                this.$store.state.order.addFriendsQRBarUrl = res.data.addFriendsQRBarUrl
            }
        })
        if(!localStorage.getItem('guide')){
          localStorage.setItem('guide',1)
          this.initGuide()
        }
    },
    computed: {
      ...mapState({
           channelObj: state => state.channelObj
      })
    },
    destroyed() {
      this.$store.dispatch("getMarkShow", false)
    }
}