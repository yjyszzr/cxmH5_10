import {isTitle} from '../../../../util/common'
import api from '../../../../fetch/api'
import {Indicator, Toast} from 'mint-ui'
import datefilter from "../../../../util/datefilter";
export default {
    name: 'income',
    data(){
        return {
            token: '',
            income:{},
            userId:this.$route.query.userId
        }
    },
    beforeCreate() {
        Indicator.open()
    },
    mounted(){
        let data = {
            'userId': this.userId
        }
        api.income(data)
            .then(res => {
                console.log(this.userId)
                if(res.code==0) {
                    this.income = res.data
                }
            })
            isTitle('我的推广收入')
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
        golist(itemdate){
            this.$router.push({
                path: '/activity/incomedetail',
                query:{
                    'addTime':new Date(itemdate.replace(/-/g,'/')).getTime(),
                    'userId':this.userId
                },
                replace: false
            })
        }

    }
}