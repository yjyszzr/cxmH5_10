import api from '../../../fetch/api'
import { Toast } from 'mint-ui'
import { Indicator } from 'mint-ui'
export default {
    name: 'payment',
    beforeCreate() {
        Indicator.open()
    },
    data () {
      return {
          payment:{}
      }
    },
    created(){
      
    },
    methods: {
        yhClick(){
            this.$store.state.mark_playObj.mark_playBox = true
            this.$store.state.mark_playObj.mark_play = '3'
        },
        fetchData(){
            let data = this.$store.state.matchSaveInfo
            api.saveBetInfo(data)
            .then(res => {
                //console.log(res)
                if(res.code==0) {
                    this.payment = res.data
                    this.$store.state.mark_playObj.yhList = res.data.bonusList 
                    this.$store.state.mark_playObj.bounsId = res.data.bonusId
                }else{
                    Toast(res.msg)
                }
            })
        },
        payBtn(){
            if(Number(this.payment.thirdPartyPaid)>0){
                if(this.$refs.wxSelected.className=='wxSelected iconfont icon-icon-29'){
                    Indicator.open()
                    var data = {
                        'payCode': 'app_rongbao',
                        'payToken': this.payment.payToken
                    }
                    var newTab = window.open('about:blank'); 
                }else{
                    Toast('请选择支付方式')
                    return false;
                }
            }else{
                Indicator.open()
                var data = {
                    'payCode': '',
                    'payToken': this.payment.payToken
                }
            }
            api.app(data)
            .then(res => {
                if(data.payCode==''){
                    if(res.code==0) {
                        this.$router.push({
                            path: '/user/order',
                            query: {
                              id: res.data.orderId,
                            },
                            replace: false
                        })
                    }
                }else{
                    if(res.code==0) {
                        newTab.location.href = res.data.payUrl
                    }
                }
                Toast(res.msg)
            })
        },
        wxClick(){
            if(this.$refs.wxSelected.className=='wxSelected iconfont icon-icon-29'){
                this.$refs.wxSelected.className='iconfont icon-icon-29'
            }else{
                this.$refs.wxSelected.className='wxSelected iconfont icon-icon-29'
            }
        }
    },
    mounted(){
        this.fetchData()
    },
    computed: {  
        cc() {
            return this.$store.state.mark_playObj.mybounsId; 
        }
    }, 
    watch: {
        cc(a,b){
            this.$store.state.matchSaveInfo.bonusId = a
            //console.log(a)
            Indicator.open()
            this.fetchData()
            // if(b!==''){
            //     this.$store.state.matchSaveInfo.bonusId = a
            //     this.fetchData()
            // }
        }
    },
    beforeRouteLeave(to, from, next) {
        next()
        this.$store.state.mark_playObj.mark_playBox = false
        this.$store.state.mark_playObj.mark_play = '' 
        this.$store.state.mark_playObj.bonusId = ''
    }
}