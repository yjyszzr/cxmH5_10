import api from '../../../fetch/api'
import { MessageBox } from 'mint-ui';
// import {
//     detect
// } from '../../../util/common'
import {
    Toast
} from 'mint-ui'
import {
    Indicator
} from 'mint-ui'
export default {
    name: 'payment',
    beforeCreate() {
       Indicator.open()
    },
    data() {
        return {
            payment: {},
            allPaymentList: [],
            payCode: 'app_weixin',
            payText: '为了确保支付成功,请保持网络畅通',
            orderId: ''
        }
    },
    created() {
        
    },
    methods: {
        yhClick() {
            this.$store.state.mark_playObj.mark_playBox = true
            this.$store.state.mark_playObj.mark_play = '3'
        },
        fetchData(c) {
            let saveObjInfo = c
            if(saveObjInfo.lotteryPlayClassifyId=='7'){
                if(saveObjInfo.playType != '6'){
                saveObjInfo.playType = '6'
                saveObjInfo.matchBetPlays.map(item=>{
                    //console.log(item)
                    let arr = []
                    item.matchBetCells.forEach(kk=>{
                        kk.betCells.forEach(gg=>{
                            let obj = {}
                            if(gg.cellCode=='30'){
                                obj.playType = '2'
                                gg.cellCode = '0'
                                gg.cellName = '客胜'
                            }else if(gg.cellCode=='31'){
                                obj.playType = '2'
                                gg.cellCode = '3'
                                gg.cellName = '主胜'
                            }else if(gg.cellCode=='32'){
                                obj.playType = '1'
                                gg.cellCode = '3'
                                gg.cellName = '让球主胜'
                            }else if(gg.cellCode=='33'){
                                obj.playType = '1'
                                gg.cellCode = '0'
                                gg.cellName = '让球客胜'
                            }
                            obj.single = '0'
                            obj.betCells = gg
                            arr.push(obj)
                        })
                    })
                    item.matchBetCells = arr
                    return item;
                })
            }
            }
            let data = saveObjInfo
            api.saveBetInfo(data)
                .then(res => {
                    //console.log(res)
                    if (res.code == 0) {
                        this.payment = res.data
                        this.$store.state.mark_playObj.yhList = res.data.bonusList
                        this.$store.state.mark_playObj.bounsId = res.data.bonusId
                    } else {
                        Toast(res.msg)
                    }
                })
            api.allPayment({})
                .then(res => {
                    if (res.code == 0) {
                        this.allPaymentList = res.data
                    } else {
                        Toast(res.msg)
                    }
                })
        },
        payBtn() {
            //let agent = detect();
            if (Number(this.payment.thirdPartyPaid) > 0) {
                Indicator.open()
                var data = {
                    'payCode': this.payCode,
                    'payToken': this.payment.payToken
                }
                // if (agent == 'ios') {
                //     var newTab = window.open('about:blank');
                // }
            } else {
                Indicator.open()
                var data = {
                    'payCode': '',
                    'payToken': this.payment.payToken
                }
            }
            api.app(data)
                .then(res => {
                    //console.log(res)
                    if (data.payCode == '') {
                        if (res.code == 0) {
                            this.$router.push({
                                path: '/user/order',
                                query: {
                                    id: res.data.orderId,
                                },
                                replace: false
                            })
                        }
                    } else {
                        if (res.code == 0) {
                            localStorage.setItem('matchSaveInfo',JSON.stringify(this.payment))
                            localStorage.setItem('allPaymentList',JSON.stringify(this.allPaymentList))
                            //localStorage.setItem('matchSaveInfo',JSON.stringify(this.$store.state.matchSaveInfo))
                            localStorage.setItem('matchObj',JSON.stringify(this.$store.state.matchObj))
                            localStorage.setItem('matchSelectedList',JSON.stringify(this.$store.state.matchSelectedList))
                            localStorage.setItem('bfIdSaveMap',JSON.stringify([...this.$store.state.mark_playObj.bfIdSaveMap]))
                            localStorage.setItem('orderId',res.data.orderId)
                            localStorage.setItem('payCode',this.payCode)
                            //console.log(res)
                            // if (agent == 'ios') {
                            //     newTab.location.href = res.data.payUrl
                            // } else {
                            //     var $tempForm = $('<form method="post" target="_blank" action="' + res.data.payUrl + '"></form>');
                            //     $("body").append($tempForm);
                            //     $tempForm.submit();
                            //     $tempForm.remove();
                            // }
                            localStorage.setItem('payLogId',res.data.payLogId)
                            this.orderId = res.data.orderId
                            MessageBox.confirm('',{
                                message: this.payText,
                                title: '订单支付',
                                confirmButtonText: '已完成支付',
                                cancelButtonText: '重新支付'
                            }).then(action => {
                                Indicator.open()
                                this.saveStatus(res.data.payLogId)
                            },action => {
                                Indicator.close()
                            })
                            let url =  location.href+'?orderStatus=1'
                            location.href = res.data.payUrl+ '&h5ck=' + encodeURIComponent(url)
                        }
                    }
                    //Toast(res.msg)
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
                        this.$router.push({
                            path: '/user/order',
                            query: {
                                id: this.orderId,
                            },
                            replace: false
                        })
                    }else if(res.code=='304036'){
                        this.payText = '暂未查询到您的支付结果，如果您已经确认支付并扣款，可能存在延迟到账的情况，请到账户明细中查看或联系客服查询'
                        MessageBox.confirm('',{
                            message: this.payText,
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
        }
    },
    mounted() {
        //console.log(this.$store.state.matchSaveInfo.bonusId)
        if(location.href.split('?')[1]&&location.href.split('?')[1].split('=')[1]==1){
            //console.log(location.href)
            this.payment = JSON.parse(localStorage.getItem('matchSaveInfo'))
            this.orderId = localStorage.getItem('orderId')
            this.allPaymentList = JSON.parse(localStorage.getItem('allPaymentList'))
            this.$store.state.mark_playObj.yhList = this.payment.bonusList
            this.$store.state.mark_playObj.bounsId = this.payment.bonusId
            this.$store.state.matchObj = JSON.parse(localStorage.getItem('matchObj'))
            this.$store.state.matchSelectedList = JSON.parse(localStorage.getItem('matchSelectedList'))
            this.payCode = localStorage.getItem('payCode')
                let payLogId = localStorage.getItem('payLogId')
                if(this.$store.state.matchSaveInfo.lotteryPlayClassifyId=='5'||this.$store.state.matchSaveInfo.lotteryPlayClassifyId=='3'){
                    let map = new Map()
                    JSON.parse(localStorage.getItem('bfIdSaveMap')).forEach(item=>{
                        map.set(item[0],new Set(item[1]))
                    })
                    this.$store.state.mark_playObj.bfIdSaveMap = map
                }
                MessageBox.confirm('',{
                    message: this.payText,
                    title: '订单支付',
                    confirmButtonText: '已完成支付',
                    cancelButtonText: '重新支付'
                }).then(action => {
                    Indicator.open()
                    this.saveStatus(payLogId)  
                },action => {
                    Indicator.close()
                })
                this.$nextTick(()=>{
                    localStorage.removeItem('matchSaveInfo')
                    localStorage.removeItem('allPaymentList')
                    localStorage.removeItem('matchObj')
                    localStorage.removeItem('matchSelectedList')
                    localStorage.removeItem('bfIdSaveMap')
                    localStorage.removeItem('payLogId')
                    localStorage.removeItem('orderId')
                })  
        }
    },
    computed: {
        cc() {
            return this.$store.state.mark_playObj.mybounsId;
        }
    },
    watch: {
        cc(a, b) {
            this.$store.state.matchSaveInfo.bonusId = a
            Indicator.open()
            this.fetchData(this.$store.state.matchSaveInfo)
            // if(b!==''){
            //     this.$store.state.matchSaveInfo.bonusId = a
            //     this.fetchData()
            // }
        }
    },
    beforeRouteEnter(to, from, next){
        if(from.path=='/'){
            next(vm=>{
                //vm.$store.state.matchSaveInfo = JSON.parse(localStorage.getItem('matchSaveInfo'))
                vm.payment = JSON.parse(localStorage.getItem('matchSaveInfo'))
                vm.orderId = localStorage.getItem('orderId')
                vm.allPaymentList = JSON.parse(localStorage.getItem('allPaymentList'))
                vm.$store.state.mark_playObj.yhList = vm.payment.bonusList
                vm.$store.state.mark_playObj.bounsId = vm.payment.bonusId
                vm.$store.state.matchObj = JSON.parse(localStorage.getItem('matchObj'))
                vm.$store.state.matchSelectedList = JSON.parse(localStorage.getItem('matchSelectedList'))
                vm.payCode = localStorage.getItem('payCode')
                let payLogId = localStorage.getItem('payLogId')
                if(vm.$store.state.matchSaveInfo.lotteryPlayClassifyId=='5'||vm.$store.state.matchSaveInfo.lotteryPlayClassifyId=='3'){
                    let map = new Map()
                    JSON.parse(localStorage.getItem('bfIdSaveMap')).forEach(item=>{
                        map.set(item[0],new Set(item[1]))
                    })
                    vm.$store.state.mark_playObj.bfIdSaveMap = map
                }
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
                    localStorage.removeItem('matchSaveInfo')
                    localStorage.removeItem('allPaymentList')
                    localStorage.removeItem('matchObj')
                    localStorage.removeItem('matchSelectedList')
                    localStorage.removeItem('bfIdSaveMap')
                    localStorage.removeItem('payLogId')
                    localStorage.removeItem('orderId')
                })          
            })
            //localStorage.removeItem('matchSaveInfo')
        }else{
            next(vm=>{
                vm.fetchData(vm.$store.state.matchSaveInfo)
            })
        }
    },
    beforeRouteLeave(to, from, next) {
        next()
        this.$store.state.mark_playObj.mark_playBox = false
        this.$store.state.mark_playObj.mark_play = ''
        this.$store.state.mark_playObj.bonusId = ''
        this.$store.state.mark_playObj.mybounsId = ''
    }
}