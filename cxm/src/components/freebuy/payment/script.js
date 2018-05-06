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
            timeDate: ''
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
                    console.log(res)
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
                            location.href = res.data.payUrl
                        }
                    }
                    Toast(res.msg)
                })
        },
        wxClick(c, index, s) {
            this.payCode = s.payCode
            $('.wxSelected').removeClass('wxSelected')
            this.$refs.wxSelected[index].className = 'wxSelected iconfont icon-icon-29'
        },
        saveStatus(c){
            let i = 0;
            this.timeDate = setInterval(()=>{
                i++;
                api.query({'payLogId': c})
                .then(res => {
                    //console.log(res)
                    if (res.code == 0) {
                        MessageBox('提示', '支付成功');
                        clearInterval(this.timeDate)
                        Indicator.close()
                    }else{
                        if(i>6){
                            MessageBox('提示', res.msg);
                            clearInterval(this.timeDate)
                            Indicator.close()
                        }
                    }
                })
            },3000)
        }
    },
    mounted() {
        
    },
    computed: {
        cc() {
            return this.$store.state.mark_playObj.mybounsId;
        }
    },
    watch: {
        cc(a, b) {
            this.$store.state.matchSaveInfo.bonusId = a
            //console.log(a)
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
                vm.allPaymentList = JSON.parse(localStorage.getItem('allPaymentList'))
                vm.$store.state.mark_playObj.yhList = vm.payment.bonusList
                vm.$store.state.mark_playObj.bounsId = vm.payment.bonusId
                vm.$store.state.matchObj = JSON.parse(localStorage.getItem('matchObj'))
                vm.$store.state.matchSelectedList = JSON.parse(localStorage.getItem('matchSelectedList'))
                let payLogId = localStorage.getItem('payLogId')
                if(vm.$store.state.matchSaveInfo.lotteryPlayClassifyId=='5'||vm.$store.state.matchSaveInfo.lotteryPlayClassifyId=='3'){
                    let map = new Map()
                    JSON.parse(localStorage.getItem('bfIdSaveMap')).forEach(item=>{
                        map.set(item[0],new Set(item[1]))
                    })
                    vm.$store.state.mark_playObj.bfIdSaveMap = map
                }
                vm.saveStatus(payLogId)  
                vm.$nextTick(()=>{
                    localStorage.removeItem('matchSaveInfo')
                    localStorage.removeItem('allPaymentList')
                    localStorage.removeItem('matchObj')
                    localStorage.removeItem('matchSelectedList')
                    localStorage.removeItem('bfIdSaveMap')
                    localStorage.removeItem('payLogId')
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
        clearInterval(this.timeDate)
    }
}