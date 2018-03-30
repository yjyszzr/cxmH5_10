import api from '../../../fetch/api'
import { Toast } from 'mint-ui'
import { Indicator } from 'mint-ui'
export default {
    name: 'detail',
    data () {
      return {
        loading: false,
        status: 0,  //账户类型
        pageNum: 1,   //初始页码
        yhList: [],
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
    methods: {
      handleTopChange(status) {
        this.bottomStatus = status;
      },
      loadBottom() {
        Indicator.open()
        setTimeout(() => {
            this.pageNum++
            this.yhData()
            this.$refs.loadmore.onBottomLoaded();
        }, 700)
      },
      yhData(){
        let data = {
          'status': this.status,
          'pageSize': 10,
          'pageNum': this.pageNum
        }
        api.queryBonusListByStatus(data)
        .then(res => {
            if(res.code==0) {
              if(res.data.isLastPage == 'true') {
                		this.pageNum = -1
                		this.allLoaded = true
              }
              this.yhList = this.yhList.concat(res.data.list)
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
        this.yhList = []
        this.pageNum = 1
        if(c.target.innerText=='未使用'){
          this.status = 0
        }else if(c.target.innerText=='已使用'){
          this.status = 1
        }else if(c.target.innerText=='已过期'){
          this.status = 2
        }
         this.yhData()
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
        this.yhData()
    }
}