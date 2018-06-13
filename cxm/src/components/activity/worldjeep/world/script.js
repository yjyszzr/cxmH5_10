import { isShare,getUrlStr } from '../../../../util/common'
import api from '../../../../fetch/api'
import { MessageBox,Indicator,Toast } from 'mint-ui';
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
                path: '/activity/world/illustrate'
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
                                MessageBox.alert('', {
                                    message: '您目前暂无竞猜次数,请前往投注页进行投注,累计消费每200元即可获得1次竞猜资格 ',
                                    title: '提示',
                                    confirmButtonText: '我知道了',
                                    closeOnClickModal: false
                                }).then(action => {
                                    // this.$router.go(-1);
                                },action => {
                
                                });
                            }else{
                                if(res.data.jumpStatus<=0){
                                    MessageBox.alert('', {
                                        message: '本期竞猜活动已结束,敬请期待下次活动',
                                        title: '提示',
                                        confirmButtonText: '我知道了',
                                        closeOnClickModal: false
                                    }).then(action => {
                    
                                    });
                                }else if(res.data.jumpStatus=='2'){
                                    MessageBox.alert('', {
                                        message: res.data.describetion,
                                        title: '提示',
                                        confirmButtonText: '我知道了',
                                        closeOnClickModal: false
                                    }).then(action => {
                    
                                    });
                                }else if(res.data.jumpStatus=='3'){
                                    sessionStorage.setItem('teamObj',JSON.stringify(res.data.sixteenGroupSixteen.sixteenGroupFourList))
                                    this.$router.push({
                                        path: '/activity/world/sixty',
                                        query:{
                                            from: 'worldenter'
                                        }
                                    })
                                }else if(res.data.jumpStatus=='1'){
                                    this.$router.push({
                                        path: '/activity/world/thirtytwo'
                                    })
                                }
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
					path: '/activity/world/record'
				})
            }
        }
    },
    mounted(){
        document.title='世界杯冠军之路'
        isShare('竞猜世界杯冠军之路，50万奖金等你瓜分', '点击这里，参与世界杯竞猜，跟我一起瓜分大奖!', '/activity/world/worldenter?cxmxc=scm&usinfo=2&cmshare=1&type=1','/static/activity_Back/newComerReg/img/logowd.jpg')
    },
    beforeRouteLeave(to, from, next) {
      to.meta.keepAlive = false
      next()
    }
}