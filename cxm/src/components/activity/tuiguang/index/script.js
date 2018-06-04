import {means} from '../../../../util/common'
import api from '../../../../fetch/api'
import {Indicator, Toast} from 'mint-ui'
import {MessageBox} from 'mint-ui';

export default {
    name: 'index',
    data() {
        return {
            explain: {
                inviteNum:0,
                bettingTotalAmount:0
            },
            // userId: this.$route.query.userId,
        }
    },
    beforeCreate() {
        Indicator.open()
    },
    created() {
        window.actionMessage = function (arg) {
            localStorage.setItem('token', JSON.parse(arg).token)
        }
    },
    mounted() {
        setTimeout(() => {
            this.fetchData()
        }, 1000)
        means('推广中心').isTitle
    },
    methods: {
        fetchData() {
            let data = {
                'userId': ''
            }
            api.extension(data)
                .then(res => {
                    if (res.code == 0) {
                        this.explain = res.data
                    }
                })
        },
        goExplain() {
            if(this.$route.query.showtitle&&this.$route.query.showtitle=='1'){
                this.$router.push({path: '/activity/rule',query:{'showtitle':'1'}})
            }else{
                this.$router.push({path: '/activity/rule'})
            }
        },
        //额外奖励弹窗
        go_tost() {
            MessageBox.alert('', {
                message: '每周总收入排名前8的店员可以获得最高100元（如果总收入为0，则不能获得额外奖励）',
                title: '额外奖励',
            }).then(action => {
            });
        },
        goCode(){
            if(this.$route.query.showtitle&&this.$route.query.showtitle=='1'){
                location.href="/activity/mycode?cxmxc=scm&cmshare=1&showtitle=1"
            }else{
                this.$router.push({path: '/activity/mycode'})
            }
        },
        detail(userId) {
            if(this.$route.query.showtitle&this.$route.query.showtitle=='1'){
                location.href="/activity/income?cxmxc=scm&userId="+userId+"&showtitle=1"
            }else{
                this.$router.push({
                    path: '/activity/income',
                    query: {
                        'userId': userId
                    },
                    replace: false
                })
            }
        },
    }
}