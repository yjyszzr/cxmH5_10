import api from '../../../fetch/api'
import { Toast } from 'mint-ui'
export default {
    name: 'register',
    data () {
      return {
        phoneVal: '',
        passwordVal: '',
        telVal: '',
        eyehide: false   //控制眼睛
      }
    },
    created(){
      
    },
    methods: {
      changeNum(){
        //验证码信息
        let data = {
          'mobile': this.phoneVal,
          'smsType': 1
        }
        this.$store.dispatch("getSmsCode",data)
        // getSmsCode(data)
      },
      reg(){
        if (!this.phoneVal || !this.passwordVal|| !this.telVal) {
            Toast('请填写完整')
            return
        }
        let data = {
            'mobile': this.phoneVal,
            'password': this.passwordVal,
            'loginSource': '4',
            'smsCode': this.telVal
        }
        // console.log(JSON.parse(data))
        api.Register(data)
        .then(res => {
            if(res.code==0) {
                Toast('注册成功')
                this.$router.push({
                    path: '/user/password',
                    replace: true
                })
            }else{
              Toast(res.msg)
            }
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