import api from '../../../fetch/api'
import { Toast } from 'mint-ui'
import { Indicator } from 'mint-ui'
import { MessageBox } from 'mint-ui'
export default {
    name: 'index',
    data () {
      return {
        userInfo: {
            totalMoney:'0.00',
            userMoney:'0.00',
            headimg:'',
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
        MessageBox.confirm('是否退出登录?').then(action => {
          api.logout({})
          .then(res => {
              if(res.code==0) {
                //  console.log(res)
                if(localStorage.guide||localStorage.upDateMark){
                    let saveDateMark =  localStorage.upDateMark;
                    let saveGuide = localStorage.guide;
                    localStorage.clear()
                    if(saveGuide){
                      localStorage.setItem('guide',1)
                    }
                    if(saveDateMark){
                      localStorage.setItem('upDateMark',saveDateMark)
                    }
                }else{
                    localStorage.clear()
                }
                this.$router.push({
                    path: '/user/sms',
                    replace: true
                })
                  Toast(res.msg)
              }

          })
        },action => {

        })
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
        })
      },
      gorz(){
        this.$router.push({
          path: '/user/certification',
          replace: false
        })
      },
      goWithdraw(c){
        if(c=='1'){
          this.$router.push({
            path: '/user/withdraw',
            replace: false
          })
        }else{
          Toast('请先实名认证后再申请提现')
        }
      },
      goRecharge(){
        localStorage.removeItem('rval')
        this.$router.push({
          path: '/user/recharge',
          replace: false
        })
      }
    },
    mounted(){
      this.fetchData()
    },
    beforeRouteLeave(to, from, next) {
        next()
        // if(to.path=='/user/record'){
        //   sessionStorage.setItem('firstIn',1)
        // }
        this.$store.state.recordTab = ''
    }
}