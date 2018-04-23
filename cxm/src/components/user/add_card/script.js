import api from '../../../fetch/api'
import { Toast } from 'mint-ui'
import { Indicator } from 'mint-ui'
export default {
    name: 'add_card',
    data () {
      return {
        blankNum: ''
      }
    },
    created(){
      
    },
    methods: {
      add_card(){
        Indicator.open()
        let data = {
          'bankCardNo': this.blankNum
        }
        api.addBankCard(data)
        .then(res => {
            Toast(res.msg)
            Indicator.close()
            this.$router.go(-1)
        })
      }
    },
    mounted(){
   
    }
}