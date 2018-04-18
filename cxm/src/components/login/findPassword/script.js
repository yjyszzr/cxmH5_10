import api from '../../../fetch/api'
import { Toast } from 'mint-ui'
export default {
    name: 'find',
    data () {
      return {
        phoneVal: ''
      }
    },
    methods:{
      next(){
        let data = {
          'mobileNumber': this.phoneVal
        }
        api.validateMobile(data)
        .then(res => {
            if(res.code==0) {
              this.$store.dispatch("changeFindphone",this.phoneVal)
              this.$router.push({
                  path: '/user/revise',
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
    created(){
      
    },
    mounted(){
        
    }
}