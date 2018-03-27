import api from '../../../fetch/api'
import { Toast } from 'mint-ui'
export default {
    name: 'index',
    data () {
      return {
        phoneVal: '',
        passwordVal: ''
      }
    },
    created(){
      
    },
    methods:{
      _login(){
        if (!this.phoneVal || !this.passwordVal) {
            Toast('请填写完整')
            return
        }
        let data = {
            'mobile': this.phoneVal,
            'password': this.passwordVal,
            'loginSource': '4'
        }
        // console.log(JSON.parse(data))
        api.Login(data)
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
      
    }
}