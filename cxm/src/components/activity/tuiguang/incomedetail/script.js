import {isTitle} from '../../../../util/common'
import api from '../../../../fetch/api'
import {Indicator, Toast} from 'mint-ui'
import dateFilter from '../../../../util/datefilter.js'

export default {
    name: 'incomedetail',
    data(){
        return {
            token: '',
            addTime:dateFilter(Number(this.$route.query.addTime),2),
            incomedetail:{},
            userId:this.$route.query.userId
        }
    },
    beforeCreate() {
        Indicator.open()
    },
    mounted(){
        console.log(this.addTime);
        console.log(this.userId);
        let data = {
            'userId': this.userId,
            'addTime':this.addTime
        }
        api.incomedetail(data)
            .then(res => {
                console.log(res)
                if(res.code==0) {
                    this.incomedetail = res.data
                }
            })
            isTitle("收入明细")
            // let that = this
            // window.actionMessage = function (arg){
				// //var uPhone = arg.uPhone;
             //    //console.log(arg)
             //    Toast(JSON.parse(arg).token)
				// //that.phone = uPhone
				// //that.token = arg.token
		    // }
    }
}