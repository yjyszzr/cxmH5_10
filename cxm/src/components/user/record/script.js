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
        searchBarFixed: false,
        loadText: '上拉加载更多...'
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
      color(c){
        if(c=='5'){
          return '#ea5504'
        }else if(c=='2'||c=='4'){
          return '#c7c7c7'
        }else{
          return '#505050'
        }
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
              //console.log(res)
              if(res.data.isLastPage == 'true') {
                    this.pageNum = -1
                    this.loadText = '暂无更多数据'
                		this.allLoaded = true
              }
              this.recordList = this.recordList.concat(res.data.list)
            }else{
              Toast(res.msg)
            }
            Indicator.close()
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
        this.loadText = '上拉加载更多...'
        this.allLoaded = false
        this.recordFetch()
      }
    },
    mounted(){
      if(this.$store.state.recordTab!=''&&this.$store.state.recordTab!='1'){
        this.orderStatus = this.$store.state.recordTab
      }
      this.recordFetch()
    }
}