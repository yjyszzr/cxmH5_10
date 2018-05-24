import {isTitle} from '../../../../util/common'
import api from '../../../../fetch/api'
import {Indicator, Toast} from 'mint-ui'
import { MessageBox } from 'mint-ui';
export default {
    name: 'one',
    data(){
        return {
            token: '',
            explain:{}
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
        api.extension(data)
        .then(res => {
            console.log(res)
            if(res.code==0) {
                this.explain = res.data
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
        goExplain() {
            this.$router.push({path: '/activity/rule'})
        },
        //额外奖励弹窗
        go_tost(){
            MessageBox.alert('', {
                message: '每周总收入排名前8的店员可以获得最高100元（如果总收入为0，则不能获得额外奖励）',
                title: '额外奖励',
            }).then(action => {
            });
        }
    }
}