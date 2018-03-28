import api from '../../../fetch/api'
import { Toast } from 'mint-ui'
import { getSmsCode } from '../../../util/filter'
export default {
    name: 'sms',
    data () {
      return {
        phoneVal: '',
        telVal: ''
      }
    },
    created(){
      
    },
    methods: {
      changeNum(){
        //验证码信息
        let data = {
          'mobile': this.phoneVal,
          'smsType': 0
        }
        this.$store.dispatch("getSmsCode",data)
        // getSmsCode(data)
      },
      _login(){
        if (!this.phoneVal || !this.telVal) {
            Toast('请填写完整')
            return
        }
        let data = {
            'mobile': this.phoneVal,
            'smsCode': this.telVal,
            'loginSource': '4'
        }
        // console.log(JSON.parse(data))
        api.loginBySms(data)
        .then(res => {
            if(res.code==0) {
                localStorage.setItem('token',res.data.token)
                this.$router.push({
                    path: '/',
                    replace: true
                })
            }
            Toast(res.msg)
        })
        .catch(error => {
            Toast('网络错误')
        })
      }
    },
    mounted(){
        
    },
    beforeRouteLeave (to, from, next) {
        next()
        this.$store.dispatch("reset")
    }
}