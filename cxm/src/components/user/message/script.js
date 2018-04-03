import api, {
    fetchPost
} from '../../../fetch/api'
import {
    Indicator,
    Toast
} from 'mint-ui'
export default {
    name: 'message',
    data() {
        return {
            mess: [],
            msgType: 0,
            pageNum: 1,
            loading: false,
            bottomStatus: '',
            allLoaded: false,
            searchBarFixed: false
        }
    },
    beforeCreate() {
        Indicator.open()
    },
    created() {

    },
    methods: {
        handleTopChange(status) {
            this.bottomStatus = status;
        },
        loadBottom() {
            Indicator.open()
            setTimeout(() => {
                this.pageNum++
                this.newsfetch()
                this.$refs.loadmore.onBottomLoaded();
            }, 700)
        },
        curClick(c) {
            $('.cur').removeClass('cur')
            c.target.parentElement.className = 'cur'
            Indicator.open()
            this.mess = []
            this.pageNum = 1
            if (c.target.innerText == '通知') {
                this.msgType = 0
            } else if (c.target.innerText == '消息') {
                this.msgType = 1
            }
            this.newsfetch()
        },
        newsfetch() {
            let data = {
                msgType: this.msgType,
                pageNum: this.pageNum,
                pageSize: 1,
            }
            api.newlist(data)
                .then(res => {
                    if (res.code == 0) {
                        //console.log(res)
                        if(res.data.isLastPage == 'true') {
                            this.pageNum = -1
                            this.allLoaded = true
                        }
                        this.mess = this.mess.concat(res.data.list)
                    } else {
                        Toast(res.msg)
                    }
                    Indicator.close()
                })
                .catch(error => {
                    Toast('网络错误')
                })
        }
    },
    mounted() {
        this.newsfetch()
    }
}