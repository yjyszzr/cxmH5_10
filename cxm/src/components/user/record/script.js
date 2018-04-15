import api from '../../../fetch/api'
import { Toast } from 'mint-ui'
import { Indicator } from 'mint-ui'
export default {
    name: 'record',
    data () {
      return {
        loading: false,
        orderStatus: '-1',  //账户类型
        pageNum: 1,   //初始页码
        recordList: [],
        bottomStatus: '',
        allLoaded: false,
        searchBarFixed: false
      }
    },
    beforeCreate() {
			Indicator.open()
    },
    created(){
      
    },
    methods:{
      handleTopChange(status) {
        this.bottomStatus = status;
      },
      loadBottom() {
        Indicator.open()
        setTimeout(() => {
            this.pageNum++
            this.recordFetch()
            this.$refs.loadmore.onBottomLoaded();
        }, 700)
      },
      recordFetch(){
        let data = {
          'lotteryClassifyId': 1,
          'orderStatus': this.orderStatus,
          'pageSize': 10,
          'pageNum': this.pageNum
        }
        api.getOrderInfoList(data)
        .then(res => {
            if(res.code==0) {
              if(res.data.isLastPage == 'true') {
                		this.pageNum = -1
                		this.allLoaded = true
              }
              this.recordList = this.recordList.concat(res.data.list)
            }else{
              Toast(res.msg)
            }
            Indicator.close()
        })
        .catch(error => {
            Toast('网络错误')
        })
      },
      goDetail(c){
        this.$router.push({
          path: '/user/order',
          query: {
            id: c
          },
          replace: false
        })
      }
    },
    computed: {  
      tabstatus() {  
          return this.$store.state.recordTab; 
      }
    },  
    watch: {
      tabstatus(a,b){
        //console.log(a)
        Indicator.open()
        this.recordList = []
        this.pageNum = 1
        if(a=='1'){
          this.orderStatus = '-1'
        }else if(a=='2'){
          this.orderStatus = '5'
        }else if(a=='3'){
          this.orderStatus = '3'
        }
        this.recordFetch()
      }
    },
    mounted(){
      this.recordFetch()
    },
    beforeRouteLeave(to, from, next) {
      next()
      this.$store.state.recordTab = ''
    }
}