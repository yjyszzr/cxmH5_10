import { isShare,getUrlStr } from '../../../../util/common'
import api from '../../../../fetch/api'
import { MessageBox,Indicator } from 'mint-ui';
export default {
    name: 'world',
    data () {
      return {
        token: ''
      }
    },
    created(){
        let that = this
        window.actionMessage = function (arg) {
        	that.token = JSON.parse(arg).token
            localStorage.setItem('token', JSON.parse(arg).token)
        }
    },
    methods:{
        xqsmBtn(){
            this.$router.push({
                path: '/activity/world/record'
            })
        },
        ksjcBtn(){
            if(getUrlStr('cfrom',location.href)=='app'&&this.token===''){
				location.href = 'http://m.caixiaomi.net?cxmxc=scm&type=5&usinfo=1'
				return false;
			}
			if(!localStorage.getItem('token')) {
				this.$router.push({
					path: '/user/sms'
				})
			} else {
                Indicator.open()
                let data={
                    str: ''
                }
                api.guessingCompetition(data)
                    .then(res => {
                        if (res.code == 0) {
                            if(res.data.bettingNum<=0){
                                MessageBox.confirm('', {
                                    message: '您目前暂无竞猜次数,请前往投注页进行投注,累计消费每200元即可获得1次竞猜资格 ',
                                    title: '提示',
                                    confirmButtonText: '立即购彩'
                                }).then(action => {
                                    this.$router.go(-1);
                                },action => {
                
                                });
                            }else if(res.data.jumpStatus){
                                MessageBox.alert('', {
                                    message: '本期竞猜活动已结束,敬请期待下次活动',
                                    title: '提示',
                                    confirmButtonText: '我知道了',
                                    closeOnClickModal: false
                                }).then(action => {
                
                                });
                            }
                        }
                    })
			}
        },
        activity_smClick(){
            if(getUrlStr('cfrom',location.href)=='app'&&this.token===''){
				location.href = 'http://m.caixiaomi.net?cxmxc=scm&type=5&usinfo=1'
				return false;
			}
			if(!localStorage.getItem('token')) {
				this.$router.push({
					path: '/user/sms'
				})
			} else {
                this.$router.push({
					path: '/activity/world/illustrate'
				})
            }
        }
    },
    mounted(){
        isShare('注册送好礼', '注册就送100元新人大礼包', location.href,'/static/activity_Back/newComerReg/img/logozc.jpg')
    }
}