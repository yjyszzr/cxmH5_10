import api from '../../../fetch/api'
import { Toast } from 'mint-ui'
export default {
    name: 'payment',
    data () {
      return {
          betType:31,
          bonusId:'',
          lotteryClassifyId:'',
          lotteryPlayClassifyId:'',
          matchBetCells:'',
          playType:'',
          times:'',
          payment:{}
      }
    },
    created(){
      
    },
    mounted(){
        api.saveBetInfo(data)
            .then(res => {
                if(res.code==0) {
                    console.log(res)
                    this.payment = res.data
                }else{
                    Toast(res.msg)
                }
                Indicator.close()
            })
            .catch(error => {
                Toast('网络错误')
            })
    },
    mounted(){
      
    }
}