import {means} from '../../../../util/common'
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
        means('活动详情').isTitle
    },
    methods: {

        callback(){

        },
        btn(realValue, type){
            //app充值钱
            let price = {"price":realValue}
            means(price).paydata

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
                        if(this.$route.query.cfrom == 'app'){
                            location.href="/user/recharge?cxmxc=scm&type=11&extparam=paydata"
                        }else{
                            this.$router.push({
                                path: '/user/recharge',
                                query: {
                                    'price': price
                                },
                                replace: false
                            })
                        }
                    }
                })
        }
    }
}