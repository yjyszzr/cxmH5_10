import {isTitle} from '../../../../util/common'
import api from '../../../../fetch/api'
import { Toast } from 'mint-ui'
export default {
    name: 'tuiguang',
    data(){
        return {
            token: ''
        }
    },
    mounted(){
            // isTitle('活动详情')
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
        go_to() {
            this.$router.push({path: '/activity/incomedetail'})
        }
    }
}