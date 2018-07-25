import {
	means,
	isShare	
} from '../../../util/common'
import api from '../../../fetch/api'
import {
	Toast,
	Indicator
} from 'mint-ui'
import {
	MessageBox
} from 'mint-ui';
export default {
	name: 'one',
	data() {
		return {
			mobileVal: '',
			telVal: '',
			stop:false,
			changeText:'获取验证码',
			remainTime: 60,
		}
	},
	mounted() {
		means('注册送红包').isTitle
		isShare(' 新人注册送好礼，100元红包等你来领', '注册就送100元新人大礼包', '/static/activity_Back/newComerReg/newComerReg.html?id=1', '/static/activity_Back/newComerReg/img/logozc.jpg')
	},
	methods: {
		changeNum() {
            //验证码信息
            let data = {
                'mobile': this.mobileVal,
                'smsType': 1
            }
            api.SendSmsCode(data)
                .then(res => {
                    if (res.code == 0) {
                        //发短信成功了，再调下面这两句
                        this.stop = true;
                        this.Interval = setInterval(this.update, 1000)
                    }else if (res.code == '301010') {
						MessageBox.alert('', {
							message: '您已领取，可在’我的卡券’里查看，将这个好消息告诉好友！',
							title: '提示',
							confirmButtonText: '我知道了',
							closeOnClickModal: false
						}).then(action => {
		
						});
					}else if(res.code>=30000&&res.code<=310000){
						Toast(res.msg)
					}
                })
        },
        update(){
                if (this.remainTime <= 1) {
                    // 重置计数
                    this.remainTime = 60
                    // 清除计时器
                    clearInterval(this.Interval)
                    this.changeText = '重新获取'
                    this.stop = false
                } else {
                    // 倒计时
                    this.remainTime--;
                }
		},
		lqbtn(){
			//验证码信息
            let data = {
                'mobile': this.mobileVal,
				'smsCode': this.telVal,
				'loginSource': '4',
				'passWord': -1
            }
            api.Register(data)
                .then(res => {
                    if (res.code == 0) {
                        Toast('领取成功')
                    }else if(res.code>=30000&&res.code<=310000){
						Toast(res.msg)
					}
                })
		}
	},
	destroyed(){
		clearInterval(this.Interval)
	}
}