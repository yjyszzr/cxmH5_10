import api from '../../../fetch/api'
import {mapState} from 'vuex'
export default {
    name: 'runchart',
    data(){
        return {
            runchartTab:[
                '开奖号码','红球走势','蓝球走势','红球冷热','蓝球冷热'
            ]
        }
    },
    methods:{
        // 头部返回
        goBack() {
            this.$router.go(-1);
        },
    },
    computed: {
      ...mapState({
           daletouActive: state => state.daletouActive
      })
    }
}