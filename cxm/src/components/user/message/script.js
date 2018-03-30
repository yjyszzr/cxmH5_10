import api, {fetchPost} from '../../../fetch/api'
import {Indicator, Toast} from 'mint-ui'
export default {
    name: 'message',
    data () {
      return {
          mess : [],
          msgType:0
      }
    },
    beforeCreate() {
        Indicator.open()
    },
    created(){
      
    },
    mounted(){
        console.log(1)
        let data = {
            msgType : this.msgType,
            pageNum : 10,
            pageSize : 10,
        }
        api.newlist(data)
            .then(res => {
                console.log(res)
                if(res.code==0) {
                    console.log(res)
                }else{
                    Toast(res.msg)
                }
                Indicator.close()
            })
            .catch(error => {
                Toast('网络错误')
            })
    }
}