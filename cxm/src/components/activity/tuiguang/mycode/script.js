import {isTitle} from '../../../../util/common'
import api from '../../../../fetch/api'
import {Indicator, Toast} from 'mint-ui'
import qrcode from 'vue-qrcode';
// import
export default {
    name: 'one',
    data(){
        return {
            token: '',
            qrcodeUrl:''
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
        api.mycode(data)
            .then(res => {
                console.log(res)
                if(res.code==0) {
                    this.mycode = res.data
                }
            })
         // isTitle('活动详情')
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