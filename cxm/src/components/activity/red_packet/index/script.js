import {isTitle} from '../../../../util/common'
import api from '../../../../fetch/api'
import {Indicator, Toast} from 'mint-ui'
import countDown from '../count_down/count_down'

export default {
    name: 'red_packet',
    data(){
        return {
            token: '',
            packet:{},
            countUserInfo:{},
        }
    },
    beforeCreate() {
        Indicator.open()
    },
    components: {
        "v-countDown": countDown,
    },
    created() {
        window.actionMessage = function (arg) {
            localStorage.setItem('token', JSON.parse(arg).token)
        }
    },
    mounted(){
        // setTimeout(() => {
        //     this.fetchData()
        // }, 1000)

        //app充值钱
        window.getCxmMoney = function (){
            return realValue
        };
        let data = {
            pageNum:1,
            pageSize:10
        }
        api.toRechange(data)
            .then(res => {
                if (res.code == 0) {
                    // console.log(res)
                    this.packet = res.data
                }
            })
        isTitle('活动详情')
    },
    methods: {
        callback(){
            console.log(3338)
        },
        btn(realValue, type){
            let data = {
                str:''
            }
            api.countUser(data)
                .then(res => {
                    if (res.code == 0) {
                        console.log(res)
                        this.countUserInfo = res.data;
                        //0未充值 1充值
                        if(this.countUserInfo.yesOrNo == 0 && type == 1){
                            Toast('有新用户专享');
                            return false;
                        }else if(this.countUserInfo.yesOrNo == 1 && type == 0){
                            Toast('只限新用户');
                            return false;
                        }
                        //跳轉，跟app交互从url传参
                        if(this.$route.query.showtitle&this.$route.query.showtitle=='1'){
                            location.href="/user/recharge?cxmxc=scm&type=11&extparam=getCxmMoney"
                        }else{
                            this.$router.push({
                                path: '/user/rec harge',
                                query: {
                                    'realValue': realValue
                                },
                                replace: false
                            })
                        }
                    }
                })
        }
    }
}