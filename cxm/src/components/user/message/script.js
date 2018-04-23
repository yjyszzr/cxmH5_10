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
        }
    },
    beforeCreate() {
        Indicator.open()
    },
    created() {

    },
    computed: {  
        tabstatus() {  
            return this.$store.state.recordTab; 
        }
      },  
      watch: {
        tabstatus(a,b){
            Indicator.open()
            this.mess = []
            this.pageNum = 1
            if (a == 'm1') {
                this.msgType = 0
            } else if (a == 'm2') {
                this.msgType = 1
            }
            this.newsfetch()
        }
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
        }
    },
    mounted() {
        this.newsfetch()
    },
    beforeRouteLeave(to, from, next) {
        next()
        this.$store.state.recordTab = ''
    }
}