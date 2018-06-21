import api from '../../../fetch/api'
import { Toast } from 'mint-ui'
import { Indicator } from 'mint-ui'
export default {
    name: 'record',
    data () {
      return {
          setingobj:{},
          yeyehide: false,
          xeyehide: false,
          qeyehide: false,
          cipherpassval:'', //原密码
          newpassval:'',    //新密码
          confirmpassval:'' //确认密码
      }
    },
    created(){
      
    },
    methods:{
        setchange(){
            if (!this.cipherpassval) {
                Toast('请输入原密码')
                return
            }else if(!this.newpassval){
                Toast('请输入新密码')
                return
            }else if(!this.confirmpassval){
                Toast('请输入确认密码')
                return
            }

            let data = {
                "oldLoginPass": this.cipherpassval,
                "userLoginPass" : '',
                "type" :1
            }
            api.setinglogin(data)
                .then(res => {
                    if(res.code==0) {
                        console.log(res)
                        this.setingobj = res.data
                        if(this.returnGo){
                            this.$router.go(-1)
                        }else{
                            this.$router.push({
                                path: '/',
                                replace: true
                            })
                        }
                        Toast(res.msg)
                    }
                })
        },
    },
    computed: {  

    },  
    watch: {
    },
    mounted(){
    },
}