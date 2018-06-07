import {means} from '../../../../util/common'
import api from '../../../../fetch/api'
import {Indicator, Toast} from 'mint-ui'

export default {
    name: 'mycode',
    data() {
        return {
            token: '',
            mobileVal: '',
            passwordVal: '',
            telVal: '',
            eyehide:'' ,
        }
    },
    mounted() {
        means('彩小秘').isTitle
    },
    methods: {
        changeNum(){
            //验证码信息
            let data = {
                'mobile': this.phoneVal,
                'smsType': 1
            }
            this.$store.dispatch("getSmsCode",data)
            // getSmsCode(data)
        },
        reg_btn(){
            let data = {
                channelId :this.$route.query.channelId,  //渠道Id
                mobile :this.phoneVal,
                password :this.passwordVal,
                smsCode : '' ,  //短信验证码
                smsType :1, //短信类型:0-短信登录验证码 1-注册验证码 2-忘记密码验证码
            }
            api.registration(data)  //这个
                .then(res => {
                    if (res.code == 0) {

                        console.log(res)
                    }
                })
        }
    },
}
