import api from '../../../fetch/api'
import { Toast } from 'mint-ui'
import { Indicator } from 'mint-ui'
export default {
    name: 'index',
    data () {
      return {
        userInfo: {
            totalMoney:'0.00',
            userMoney:'0.00',
            headimg:''
        }
      }
    },
    beforeCreate() {
			Indicator.open()
		},
    created(){
      
    },
    methods:{
      loginout(){
        api.logout({})
        .then(res => {
            if(res.code==0) {
              //  console.log(res)
              localStorage.clear()
              this.$router.push({
                  path: '/user/password',
                  replace: true
              })
                Toast(res.msg)
            }

        })
      },
      handleTopChange(status) {
				this.topStatus = status;
			},
			loadTop() {
        let that = this
        Indicator.open()
				setTimeout(() => {
					that.fetchData()
				}, 700);
      },
      fetchData(){
        let data = {
          str: ''
        }
        api.userInfoExceptPass(data)
        .then(res => {
           //console.log(res)
            if(res.code==0) {
              this.userInfo = res.data
              this.$store.dispatch("changeUserInfo",res.data)
            }
            this.$refs.loadmore.onTopLoaded();
        })
      },
      gorz(){
        this.$router.push({
          path: '/user/certification',
          replace: true
        })
      },
      goWithdraw(c){
        if(c=='1'){
          this.$router.push({
            path: '/user/withdraw',
            replace: true
          })
        }else{
          Toast('请先实名认证后再申请提现')
        }
      }
    },
    mounted(){
      this.fetchData()
    },
    beforeRouteLeave(to, from, next) {
        next()
        if(to.path=='/user/record'){
          sessionStorage.setItem('firstIn',1)
        }
        this.$store.state.recordTab = ''
    }
}