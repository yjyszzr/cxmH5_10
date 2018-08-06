import {
	means,
	isShare
} from '../../../util/common'
import api from '../../../fetch/api'
import {
	Indicator
} from 'mint-ui'
export default {
    name: 'oldbeltnew',
    beforeCreate() {
        // Indicator.open()
    },
    data(){
        return {
            nums: [
                '15','35','50','70','80','200'
            ],
            oldObj:{
                'invitationNum': '-',
                'reward': '-'
            },
            uid:'',
            numList:[0,0,0,0,0,0],
            login: this.$route.query.isLogin,
            token: ''
        }
    },
    created(){
        let that = this
            window.actionMessage = (arg) => {
                if(JSON.parse(arg).token!==''){
                    that.token = JSON.parse(arg).token
                    localStorage.setItem('token', JSON.parse(arg).token)
                    let data = {
                        'str': ''
                    }
                    api.shareMyLinks(data)
                        .then(res => {
                            if (res.code == 0) {
                                isShare('新人注册送好礼，100元红包等你来领', '注册就送100元新人大礼包', '/activity/one?type=isShare&from=ldx&uid='+res.data.userld, '/static/activity_Back/newComerReg/img/logozc.jpg')
                                window.reload()
                            }
                        })
                    that.fetchData()
                }
            }
    },
    methods:{
        fetchData(){
			let data = {
				'str': ''
			}
			api.invitationNumAndReward(data)
				.then(res => {
					if (res.code == 0) {
                        this.oldObj = res.data
                        if(res.data.invitationNum=='-'){
                            return false;
                        }
                        if(res.data.invitationNum<=10){
                            this.numList[0] = (res.data.invitationNum/10)*100
                        }else if(res.data.invitationNum>10&&res.data.invitationNum<=20){
                            this.numList[0] = 100
                            this.numList[1] = ((res.data.invitationNum)-10/10)*100
                        }else if(res.data.invitationNum>20&&res.data.invitationNum<=30){
                            this.numList[0] = 100
                            this.numList[1] = 100
                            this.numList[2] = ((res.data.invitationNum-20)/10)*100
                        }else if(res.data.invitationNum>30&&res.data.invitationNum<=40){
                            this.numList[0] = 100
                            this.numList[1] = 100
                            this.numList[2] = 100
                            this.numList[3] = ((res.data.invitationNum)-30/10)*100
                        }else if(res.data.invitationNum>40&&res.data.invitationNum<=50){
                            this.numList[0] = 100
                            this.numList[1] = 100
                            this.numList[2] = 100
                            this.numList[3] = 100
                            this.numList[4] = ((res.data.invitationNum)-40/10)*100
                        }else{
                            this.numList[0] = 100
                            this.numList[1] = 100
                            this.numList[2] = 100
                            this.numList[3] = 100
                            this.numList[4] = 100
                            this.numList[5] = res.data.invitationNum>=100?100:((res.data.invitationNum)-50/50)*100
                        }
					}
				})
        },
        fx(){
            if(this.login=='0'&&this.token==''){
                location.href = 'http://m.caixiaomi.net?cxmxc=scm&type=5&usinfo=1'
            }else{
                alert('分享')
            }
        }
    },
    mounted(){
        if(this.$route.query.cfrom=='app'){
            if(this.login!='0'||this.token!=''){
                this.fetchData()
            }
        }else{
            this.fetchData()
        }
        means('邀请得红包').isTitle
    }
}