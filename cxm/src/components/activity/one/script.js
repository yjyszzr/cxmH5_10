import { means,isShare,getUrlStr } from '../../../util/common'
import api from '../../../fetch/api'
import { Toast, Indicator } from 'mint-ui'
import { MessageBox } from 'mint-ui';
export default {
	name: 'one',
	data() {
		return {
			token: ''
		}
	},
	created() {
			let that = this
        	window.actionMessage = function (arg) {
        	that.token = JSON.parse(arg).token
            localStorage.setItem('token', JSON.parse(arg).token)
        }
    },
	mounted() {
		document.title = '注册送好礼';
		means('注册送红包').isTitle
		isShare(' 新人注册送好礼，100元红包等你来领', '注册就送100元新人大礼包', '/static/activity_Back/newComerReg/newComerReg.html?id=1','/static/activity_Back/newComerReg/img/logozc.jpg')
	},
	methods: {
		lqBtn() {
			if(getUrlStr('cfrom',location.href)=='app'&&this.token===''){
				location.href = 'http://m.caixiaomi.net?cxmxc=scm&type=6&usinfo=1'
				return false;
			}
			if(!localStorage.getItem('token')) {
				this.$router.push({
					path: '/user/register'
				})
			} else {
				MessageBox.alert('', {
					message: '您已领取新人大礼包,请前往我的卡券查看',
					title: '提示',
					confirmButtonText: '我知道了',
					closeOnClickModal: false
				}).then(action => {

				});
			}
		}
	}
}