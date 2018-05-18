import api from '../../../fetch/api'
import {
    Indicator
} from 'mint-ui'
import {
    Toast
  } from 'mint-ui'
import {
    MessageBox
} from 'mint-ui';
import {
    wxPd
} from '../../../util/common'
export default {
    name: 'recharge',
    data() {
        return {
            userInfo: '',
            recharge_val: '',
            list_num: ['20', '50', '100', '200'],
            payText: '为了确保支付成功,请保持网络畅通',
            allPaymentList: [],
            payCode: 'app_weixin',
        }
    },
    beforeCreate() {
        Indicator.open()
    },
    created() {

    },
    methods: {
        changenum(c) {
            this.recharge_val = c
        },
        determine() {
            let regex = /^[1-9]\d*$/;
            if(!regex.test(this.recharge_val)){
                Toast('请输入正确的金额')
                return false
            }
            Indicator.open()
            let innerWechat = '',payTypePd=''
            if(this.payCode == 'app_weixin'){  //wx支付逻辑
                if (wxPd()) {
                    innerWechat = '1'
                } else {
                    innerWechat = '0'
                }
                payTypePd = 'wx'
            }else if(this.payCode == 'app_rongbao'){  //rongbao支付逻辑
                innerWechat = '0'
                payTypePd = 'rb'
            }
            this.payFlag(innerWechat,payTypePd)
        },
        payFlag(c,s){
            let data = {
                'totalAmount': this.recharge_val,
                'payCode': this.payCode,
                'innerWechat': c,
                'isH5': '1'
            }
            api.recharge(data)
                .then(res => {
                    if (res.code == 0) {
                        //console.log(res)
                        localStorage.setItem('rval', this.recharge_val)
                        if(s=='rb'){
                            localStorage.setItem('payLogId', res.data.payLogId)
                            localStorage.setItem('payCode', this.payCode)
                            MessageBox.confirm('', {
                                message: this.payText,
                                title: '订单支付',
                                confirmButtonText: '已完成支付',
                                cancelButtonText: '重新支付',
                                closeOnClickModal: false
                            }).then(action => {
                                Indicator.open()
                                this.saveStatus(res.data.payLogId)
                            }, action => {

                            })
                            let url = location.href + '?rechargeStatus=1'
                            location.href = res.data.payUrl + '&h5ck=' + encodeURIComponent(url)
                        }else if(s=='wx'){
                            //location.href = './static/payCallBack/payCallBack.html?logid='+res.data.payLogId
                            // $('#ifr1').attr('src',res.data.payUrl)
                            location.href = res.data.payUrl
                        }
                    }
            })
        },
        wxClick(c, index, s) {
            this.payCode = s.payCode
            $('.wxSelected').removeClass('wxSelected')
            this.$refs.wxSelected[index].className = 'wxSelected iconfont icon-icon-29'
        },
        saveStatus(c) {
            api.query({
                    'payLogId': c
                })
                .then(res => {
                    //console.log(res)
                    if (res.code == 0) {
                        MessageBox.alert('', {
                            message: '充值成功',
                            title: '提示',
                            confirmButtonText: '确定',
                            closeOnClickModal: false
                        }).then(action => {
                            //Indicator.open()
                            //this.fetchData()
                        });
                        //Indicator.close()
                    } else if (res.code == '304036') {
                        MessageBox.confirm('', {
                            message: '暂未查询到您的支付结果，如果您已经确认支付并扣款，可能存在延迟到账的情况，请到账户明细中查看或联系客服查询',
                            title: '查询失败',
                            confirmButtonText: '继续查询',
                            cancelButtonText: '重新支付',
                            closeOnClickModal: false
                        }).then(action => {
                            Indicator.open()
                            setTimeout(()=>{
                                this.saveStatus(c)
                            },3000)
                        }, action => {

                        })
                        //Indicator.close()
                    } else if (res.code == '304035') {
                        MessageBox.alert('', {
                            message: '如果您已经确认支付并扣款，可能存在延迟到账情况，请到账户明细中查看或联系客服查询',
                            title: '支付失败',
                            confirmButtonText: '重新支付',
                            closeOnClickModal: false
                        }).then(action => {
                            //Indicator.close()
                        });
                        //Indicator.close()
                    } else {
                        // Indicator.close()
                    }
                    this.fetchData()
                })
        },
        fetchData() {
            let data = {
                str: ''
            }
            api.userInfoExceptPass(data)
                .then(res => {
                    //console.log(res)
                    if (res.code == 0) {
                        this.userInfo = res.data
                    }
                })
        },
        rbCallback(){
            if (location.href.split('?')[1] && location.href.split('?')[1].split('=')[1] == 1&&localStorage.getItem('payCode')) {
                //console.log(location.href)
                this.recharge_val = localStorage.getItem('rval')
                this.payCode = localStorage.getItem('payCode')
                let payLogId = localStorage.getItem('payLogId')
                MessageBox.confirm('', {
                    message: this.payText,
                    title: '订单支付',
                    confirmButtonText: '已完成支付',
                    cancelButtonText: '重新支付',
                    closeOnClickModal: false
                }).then(action => {
                    Indicator.open()
                    this.saveStatus(payLogId)
                }, action => {
                    // Indicator.close()
                })
                this.$nextTick(() => {
                    localStorage.removeItem('rval')
                    localStorage.removeItem('payLogId')
                    localStorage.removeItem('payCode')
                })
            }else{
                this.recharge_val = localStorage.getItem('rval')
                this.$nextTick(() => {
                    localStorage.removeItem('rval')
                })
            }
        }
    },
    mounted() {
        this.fetchData()
        api.allPayment({})
            .then(res => {
                if (res.code == 0) {
                    this.allPaymentList = res.data
                } else {
                    Toast(res.msg)
                }
            })
        this.rbCallback()
        
    },
    beforeRouteEnter(to, from, next) {
        if (from.path == '/'&&localStorage.getItem('payCode')) {
            next(vm => {
                //vm.$store.state.matchSaveInfo = JSON.parse(localStorage.getItem('matchSaveInfo'))
                vm.recharge_val = localStorage.getItem('rval')
                let payLogId = localStorage.getItem('payLogId')
                vm.payCode = localStorage.getItem('payCode')
                MessageBox.confirm('', {
                    message: vm.payText,
                    title: '订单支付',
                    confirmButtonText: '已完成支付',
                    cancelButtonText: '重新支付',
                    closeOnClickModal: false
                }).then(action => {
                    Indicator.open()
                    vm.saveStatus(payLogId)
                }, action => {
                    Indicator.close()
                })
                vm.$nextTick(() => {
                    localStorage.removeItem('rval')
                    localStorage.removeItem('payLogId')
                    localStorage.removeItem('payCode')
                })
            })
            //localStorage.removeItem('matchSaveInfo')
        } else {
            next(vm=>{
                vm.recharge_val = localStorage.getItem('rval')
                vm.$nextTick(() => {
                    localStorage.removeItem('rval')
                })
            })
        }
    },
    beforeRouteLeave(to, from, next) {
        localStorage.removeItem('rval')
		next()
	}
}