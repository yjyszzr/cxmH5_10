import { isShare,getUrlStr } from '../../../../util/common'
import api from '../../../../fetch/api'
import { MessageBox,Indicator,Toast } from 'mint-ui';
export default {
    name: 'world',
    data () {
      return {
        token: '',
        status: 1
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
            if(getUrlStr('cfrom',location.href)=='app'&&this.token===''&&this.status==1){
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
                                if(res.data.bettingNum<=0){
                                    if(getUrlStr('cfrom',location.href)=='app'){
                                        MessageBox.alert('', {
                                            message: '您目前暂无竞猜次数,请前往投注页进行投注,累计消费每200元即可获得1次竞猜资格 ',
                                            title: '提示',
                                            confirmButtonText: '我知道了',
                                            closeOnClickModal: false
                                        }).then(action => {
                                            
                                        });
                                    }else{
                                        MessageBox.confirm('', {
                                            message: '您目前暂无竞猜次数,请前往投注页进行投注,累计消费每200元即可获得1次竞猜资格 ',
                                            title: '提示',
                                            confirmButtonText: '立即购彩'
                                        }).then(action => {
                                            this.$router.replace({
                                                path: '/'
                                            })
                                        },action => {
                        
                                        });
                                    }
                                    return false;
                                }
                                sessionStorage.setItem('teamObj',JSON.stringify(res.data.sixteenGroupSixteen.sixteenGroupFourList))
                                if(getUrlStr('cfrom',location.href)=='app'){
                                    location.href = '/activity/world/sixty?from=worldenter'
                                }else{
                                    this.$router.push({
                                        path: '/activity/world/sixty',
                                        query:{
                                            from: 'worldenter'
                                        }
                                    })
                                }
                            }else if(res.data.jumpStatus=='1'){
                                if(res.data.bettingNum<=0){
                                    if(getUrlStr('cfrom',location.href)=='app'){
                                        MessageBox.alert('', {
                                            message: '您目前暂无竞猜次数,请前往投注页进行投注,累计消费每200元即可获得1次竞猜资格 ',
                                            title: '提示',
                                            confirmButtonText: '我知道了',
                                            closeOnClickModal: false
                                        }).then(action => {
                                            
                                        });
                                    }else{
                                        MessageBox.confirm('', {
                                            message: '您目前暂无竞猜次数,请前往投注页进行投注,累计消费每200元即可获得1次竞猜资格 ',
                                            title: '提示',
                                            confirmButtonText: '立即购彩'
                                        }).then(action => {
                                            this.$router.replace({
                                                path: '/'
                                            })
                                        },action => {
                        
                                        });
                                    }
                                    return false;
                                }
                                if(getUrlStr('cfrom',location.href)=='app'){
                                    location.href = '/activity/world/thirtytwo'
                                }else{
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
            if(getUrlStr('cfrom',location.href)=='app'&&this.token===''&&this.status==1){
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
    },
    beforeRouteEnter(to, from, next) {
        next(vm=>{
            if(from.path=='/activity/world/thirtytwo'||from.path=='/activity/world/sixty'||from.path=='/activity/world/illustrate'||from.path=='/activity/world/record'){
                vm.status = 2
            }
        })
    }
}