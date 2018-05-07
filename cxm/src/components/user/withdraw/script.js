import api from '../../../fetch/api'
import { Toast } from 'mint-ui'
import { Indicator } from 'mint-ui'
export default {
    name: 'withdraw',
    data () {
      return {
        withdrawObj: {
          
        },
        withdrawVal: ''
      }
    },
    beforeCreate() {
			Indicator.open()
    },
    created(){
      
    },
    mounted(){
        this.fetchData()
    },
    methods:{
      whole(){
        this.withdrawVal = this.withdrawObj.userMoney
      },
      fetchData(){
        let data = {
          str: ''
        }
        api.queryWithDrawShow(data)
        .then(res => {
            if(res.code==0) {
              this.withdrawObj = res.data
              //console.log(res)
            }
        })
      },
      determine(){
        Indicator.open()
        let data = {
          totalAmount: this.withdrawVal,
          userBankId: this.withdrawObj.userBankId
        }
        api.withdraw(data)
        .then(res => {
            if(res.code==0) {
              //console.log(res)
              Toast(res.msg)
              this.fetchData()
            }
        })
      }
    }
}