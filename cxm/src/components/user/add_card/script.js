import api from '../../../fetch/api'
import {
  Toast,
  Indicator
} from 'mint-ui'
export default {
  name: 'add_card',
  data() {
    return {
      blankNum: '' //银行卡号
    }
  },
  methods: {
    add_card() {
      Indicator.open()
      let data = {
        'bankCardNo': this.blankNum.replace(/\s/g, '')
      }
      api.addBankCard(data)
        .then(res => {
          if (res.code == 0) {
            Toast(res.msg)
            this.$router.go(-1)
          }
        })
    },
    bankCard() {
      //银行卡号合法性输入
      this.blankNum = this.blankNum.replace(/\s/g, '').replace(/[^\d]/g, '').replace(/(\d{4})(?=\d)/g, '$1 ');
    }
  }
}