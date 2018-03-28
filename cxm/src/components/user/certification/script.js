import api from '../../../fetch/api'
import { Toast } from 'mint-ui'
export default {
    name: 'certification',
    data () {
      return {
        userName: '',
        userToken: ''
      }
    },
    created(){
      
    },
    methods: {
        rzBtn(){
            let data = {
                'idcode': this.userToken,
                'realName': this.userName
            }
            api.realNameAuth(data)
            .then(res => {
                if(res.code==0) {
                    this.$router.push({
                        path: '/user',
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