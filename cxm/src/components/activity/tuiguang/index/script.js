import {isTitle} from '../../../../util/common'
import api from '../../../../fetch/api'
import {Indicator, Toast} from 'mint-ui'
import { MessageBox } from 'mint-ui';
export default {
    name: 'index',
    data(){
        return {
            explain:{},
            userId:''
        }
    },
    beforeCreate() {
        Indicator.open()
    },
    created(){
        window.actionMessage = function (arg){
            localStorage.setItem('token',JSON.parse(arg).token)
        }
    },
    mounted(){
        let data = {
            'userId': this.userId
            // 'userId': 400052
        }
        console.log(this.userId)
        api.extension(data)
        .then(res => {
            console.log(res)
            if(res.code==0) {
                this.explain = res.data
            }
        })
            isTitle('推广中心')
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
        },
        detail(userId){
            this.$router.push({
                path: '/activity/income',
                query:{
                    'userId':userId
                },
                replace: false
            })
        },
    }
}