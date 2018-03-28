import api from '../../../fetch/api'
import { Toast } from 'mint-ui'
export default {
    name: 'revise',
    data () {
      return {
        phoneVal: this.$store.state.findphone,
        passwordVal: '',
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
          'smsType': 2
        }
        this.$store.dispatch("getSmsCode",data)
        // getSmsCode(data)
      },
      findNext(){
        if(!this.phoneVal){
            Toast('请重新输入手机号')
            return
        }
        if (!this.passwordVal|| !this.telVal) {
            Toast('请填写完整')
            return
        }
        let data = {
            'mobileNumber': this.phoneVal,
            'userLoginPass': this.passwordVal,
            'smsCode': this.telVal
        }
        // console.log(JSON.parse(data))
        api.updateLoginPass(data)
        .then(res => {
            if(res.code==0) {
                this.$router.push({
                    path: '/user/password',
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