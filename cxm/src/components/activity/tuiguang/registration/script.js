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
            stop:false,
            changeText:'获取验证码',
            remainTime: 60,
            Interval:null
        }
    },
    mounted() {
        means('彩小秘').isTitle
    },
    methods: {
        changeNum(){
            //验证码信息
            let data = {
                'mobile': this.mobileVal,
                'smsType': 1
            }

            api.registration(data);
            //发短信成功了，再调下面这两句
            this.stop = true;
            this.Interval = setInterval(this.update, 1000)
        },
        update(){
            if (this.remainTime <= 1) {
                // 重置计数
                this.remainTime = 60
                // 清除计时器
                clearInterval(this.Interval)

                this.stop = false
            } else {
                // 倒计时
                this.remainTime--;
            }
        },
        reg_btn(){
            let data = {
                channelId :this.$route.query.channelId,  //渠道Id
                mobile :this.phoneVal,
                password :this.passwordVal,
                smsCode : '' ,  //短信验证码
                smsType :1, //短信类型:0-短信登录验证码 1-注册验证码 2-忘记密码验证码
            }
            api.registration(data)
                .then(res => {
                    if (res.code == 0) {

                        console.log(res)
                    }
                })
        }
    },
}
