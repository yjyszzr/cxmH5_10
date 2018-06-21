import api from '../../../fetch/api'
import { Toast } from 'mint-ui'
import { Indicator } from 'mint-ui'
export default {
    name: 'record',
    data () {
      return {
          setingobj:{}
      }
    },
    /*
设置用户登录密码接口
/member/user/setLoginPass

dic["oldLoginPass"] = oldPass
            dic["userLoginPass"] = newPass
            dic["type"] = type


设置密码 type = 0    修改密码  type = 1


    */
    created(){
      
    },
    methods:{
        fetchData(){
            let data = {
                "oldLoginPass": '',
                "userLoginPass" : '',
                "type" : ''
            }
            api.setinglogin(data)
                .then(res => {
                    if(res.code==0) {
                        console.log(res)
                        this.setingobj = res.data

                    }
                })
        },
    },
    computed: {  

    },  
    watch: {
    },
    mounted(){
        this.fetchData()
    },
}