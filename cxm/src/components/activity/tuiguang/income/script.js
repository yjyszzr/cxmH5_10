import {isTitle} from '../../../../util/common'
import api from '../../../../fetch/api'
import {Indicator, Toast} from 'mint-ui'
import datefilter from "../../../../util/datefilter";
export default {
    name: 'tuiguang',
    data(){
        return {
            token: '',
            income:{}
        }
    },
    beforeCreate() {
        Indicator.open()
    },
    mounted(){
        let data = {
            // 'userId': this.orderId
            'userId': 400052
        }
        api.income(data)
            .then(res => {
                console.log(res)
                if(res.code==0) {
                    this.income = res.data
                }
            })
            isTitle('推广中心')
            // let that = this
            // window.actionMessage = function (arg){
				// //var uPhone = arg.uPhone;
             //    //console.log(arg)
             //    Toast(JSON.parse(arg).token)
				// //that.phone = uPhone
				// //that.token = arg.token
		    // }
    },
    methods:{
        goDetail(itemdate){
            this.$router.push({
                path: '/active/incomedetail',
                query:{
                    'time':new Date(itemdate.replace(/-/g,'/')).getTime()
                },
                replace: false
            })
        },
        // go_to() {
        //     this.$router.push({path: '/activity/incomedetail'})
        // },

    }
}