import api from '../../../fetch/api'
import { Indicator } from 'mint-ui'
import { MessageBox } from 'mint-ui';
export default {
    name: 'recharge',
    data () {
      return {
        userInfo: '',
        recharge_val: '',
        list_num: ['20','50','100','200'],
        payText: '为了确保支付成功,请保持网络畅通',
        allPaymentList: [],
        payCode: 'app_weixin',
      }
    },
    beforeCreate() {
			Indicator.open()
		},
    created(){
      
    },
    methods: {
      changenum(c){
        this.recharge_val = c
      },
      determine(){
        Indicator.open()
        let data = {
          'totalAmount': this.recharge_val,
          'payCode': this.payCode
        }
        api.recharge(data)
        .then(res => {
            if(res.code==0) {
              //console.log(res)
              localStorage.setItem('rval',this.recharge_val)
              localStorage.setItem('payLogId',res.data.payLogId)
              localStorage.setItem('payCode',this.payCode)
              MessageBox.confirm('',{
                  message: this.payText,
                  title: '订单支付',
                  confirmButtonText: '已完成支付',
                  cancelButtonText: '重新支付'
              }).then(action => {
                  Indicator.open()
                  this.saveStatus(res.data.payLogId)
              },action => {
                  
              })
              let url =  location.href+'?rechargeStatus=1'
              location.href = res.data.payUrl+ '&h5ck=' + encodeURIComponent(url)
            }
        })
      },
      wxClick(c, index, s) {
        this.payCode = s.payCode
        $('.wxSelected').removeClass('wxSelected')
        this.$refs.wxSelected[index].className = 'wxSelected iconfont icon-icon-29'
      },
      saveStatus(c){
          api.query({'payLogId': c})
              .then(res => {
                  //console.log(res)
                  if (res.code == 0) {
                    MessageBox.alert('',{
                        message: '充值成功',
                        title: '提示',
                        confirmButtonText: '确定'
                    }).then(action => {
                      Indicator.open()
                        this.fetchData()
                    });
                    Indicator.close()
                  }else if(res.code=='304036'){
                      MessageBox.confirm('',{
                          message: '暂未查询到您的支付结果，如果您已经确认支付并扣款，可能存在延迟到账的情况，请到账户明细中查看或联系客服查询',
                          title: '查询失败',
                          confirmButtonText: '继续查询',
                          cancelButtonText: '重新支付'
                      }).then(action => {
                          Indicator.open()
                          this.saveStatus(c)
                      },action => {

                      })
                      Indicator.close()
                  }else if(res.code=='304035'){
                      MessageBox.alert('',{
                          message: '如果您已经确认支付并扣款，可能存在延迟到账情况，请到账户明细中查看或联系客服查询',
                          title: '支付失败',
                          confirmButtonText: '重新支付'
                      }).then(action => {
                          Indicator.close()
                      });
                      Indicator.close()
                  }else{
                      Indicator.close()
                  }
              })
              this.fetchData()
      },
      fetchData(){
        let data = {
          str: ''
        }
        api.userInfoExceptPass(data)
        .then(res => {
           //console.log(res)
            if(res.code==0) {
              this.userInfo = res.data
            }
        })
      },
    },
    mounted(){
      this.fetchData()
      api.allPayment({})
      .then(res => {
          if (res.code == 0) {
              this.allPaymentList = res.data
          } else {
              Toast(res.msg)
          }
})
      if(location.href.split('?')[1]&&location.href.split('?')[1].split('=')[1]==1){
        //console.log(location.href)
            this.recharge_val = localStorage.getItem('rval')
            this.payCode = localStorage.getItem('payCode')
            let payLogId = localStorage.getItem('payLogId')
            MessageBox.confirm('',{
                message: this.payText,
                title: '订单支付',
                confirmButtonText: '已完成支付',
                cancelButtonText: '重新支付'
            }).then(action => {
                Indicator.open()
                this.saveStatus(payLogId)  
            },action => {
               // Indicator.close()
            })
            this.$nextTick(()=>{
                localStorage.removeItem('userInfo')
                localStorage.removeItem('payLogId')
            })  
    }
    },
    beforeRouteEnter(to, from, next){
      if(from.path=='/'){
          next(vm=>{
              //vm.$store.state.matchSaveInfo = JSON.parse(localStorage.getItem('matchSaveInfo'))
              vm.recharge_val = localStorage.getItem('rval')
              let payLogId = localStorage.getItem('payLogId')
              vm.payCode = localStorage.getItem('payCode')
              MessageBox.confirm('',{
                  message: vm.payText,
                  title: '订单支付',
                  confirmButtonText: '已完成支付',
                  cancelButtonText: '重新支付'
              }).then(action => {
                  vm.saveStatus(payLogId)  
              },action => {
                  Indicator.close()
              })
              vm.$nextTick(()=>{
                  localStorage.removeItem('userInfo')
                  localStorage.removeItem('payLogId')
              })          
          })
          //localStorage.removeItem('matchSaveInfo')
      }else{
          next()
      }
  },
}