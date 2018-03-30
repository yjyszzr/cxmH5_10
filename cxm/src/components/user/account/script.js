import api from '../../../fetch/api'
import { Toast } from 'mint-ui'
import { Indicator } from 'mint-ui'
export default {
    name: 'account',
    data () {
      return {
        loading: false,
        amountType: 0,  //账户类型
        pageNum: 1,   //初始页码
        mxList: [],
        bottomStatus: '',
        allLoaded: false,
        totalNum: {}, //合计对象
        searchBarFixed: false
      }
    },
    beforeCreate() {
			Indicator.open()
		},
    created(){
      
    },
    methods: {
      mxfetch(){
        let data = {
          'amountType': this.amountType,
          'pageSize': 10,
          'pageNum': this.pageNum
        }
        api.getUserAccountList(data)
        .then(res => {
          // console.log(res)
            if(res.code==0) {
              if(res.data.isLastPage == 'true') {
                		this.pageNum = -1
                		this.allLoaded = true
              }
              this.mxList = this.mxList.concat(res.data.list)
            }else{
              Toast(res.msg)
            }
            Indicator.close()
        })
        .catch(error => {
            Toast('网络错误')
        })
      },
      handleTopChange(status) {
        	this.bottomStatus = status;
      },
      loadBottom() {
          Indicator.open()
        	setTimeout(() => {
              this.pageNum++
              this.mxfetch()
        			this.$refs.loadmore.onBottomLoaded();
        	}, 700)
      },
      curClick(c){
        $('.cur').removeClass('cur')
        c.target.parentElement.className = 'cur'
        Indicator.open()
        this.mxList = []
        this.pageNum = 1
        if(c.target.innerText=='全部'){
          this.amountType = 0
        }else if(c.target.innerText=='奖金'){
          this.amountType = 1
        }else if(c.target.innerText=='充值'){
          this.amountType = 2
        }else if(c.target.innerText=='购彩'){
          this.amountType = 3
        }else if(c.target.innerText=='提现'){
          this.amountType = 4
        }else if(c.target.innerText=='红包'){
          this.amountType = 5
        }
        this.mxfetch()
      },
      handleScroll(e){
        if(e.target.scrollTop>$('.send').height()){
          this.searchBarFixed = true
        }else{
          this.searchBarFixed = false
        }
      }
    },
    mounted(){
        document.querySelector('#content').addEventListener('scroll', this.handleScroll)
        this.mxfetch()
        let data = {
          'str': ''
        }
        api.countMoneyCurrentMonth(data)
        .then(res => {
          // console.log(res)
            if(res.code==0) {
              this.totalNum = res.data
            }else{
              Toast(res.msg)
            }
        })
        .catch(error => {
            Toast('网络错误')
        })
    }
}