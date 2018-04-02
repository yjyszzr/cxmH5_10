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
      curClick(c){
        $('.cur').removeClass('cur')
        c.target.parentElement.className = 'cur'
        Indicator.open()
        this.recordList = []
        this.pageNum = 1
        if(c.target.innerText=='全部'){
          this.orderStatus = '-1'
        }else if(c.target.innerText=='中奖'){
          this.orderStatus = '5'
        }else if(c.target.innerText=='待开奖'){
          this.orderStatus = '3'
        }
        this.recordFetch()
      },
      handleScroll(e){
        if(e.target.scrollTop>0){
          this.searchBarFixed = true
        }else{
          this.searchBarFixed = false
        }
      },
      status(c){
        switch (c){
          case '2' : return '出票失败'
          case '3' : return '待开奖'
          case '4' : return '未中奖'
          case '5' : return '已中奖'
        }
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
    mounted(){
      document.querySelector('#content').addEventListener('scroll', this.handleScroll)
      this.recordFetch()
    }
}