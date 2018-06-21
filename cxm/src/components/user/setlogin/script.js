import api from '../../../fetch/api'
import { Toast } from 'mint-ui'
import { Indicator } from 'mint-ui'
export default {
    name: 'setlogin',
    data () {
      return {
          setingobj:{},
          newpassval: '', //新密码
          confirmpassval:'', //确认密码
          xeyehide: false,
          qeyehide: false,
      }
    },
    created(){
      
    },
    methods:{
        setlogin(){
            if(!this.newpassval){
                Toast('请输入新密码')
                return
            }else if(!this.confirmpassval){
                Toast('请输入确认密码')
                return
            }
            let data = {
                "oldLoginPass": '',
                "userLoginPass" : this.newpassval,
                "type" :0
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