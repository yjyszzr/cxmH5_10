import {isTitle} from '../../../../util/common'
import api from '../../../../fetch/api'
import {Indicator, Toast} from 'mint-ui'
import dateFilter from '../../../../util/datefilter.js'

export default {
    name: 'incomedetail',
    data(){
        return {
            token: '',
            time:dateFilter(this.$route.params.itemdate,2),
            incomedetail:{}
        }
    },
    beforeCreate() {
        Indicator.open()
    },
    mounted(){
        alert(1)
        console.log(this.time);
        let data = {
            // 'userId': this.orderId
            'userId': 400052
        }
        api.incomedetail(data)
            .then(res => {
                console.log(res)
                if(res.code==0) {
                    this.incomedetail = res.data
                }
            })
            isTitle("推广中心")
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