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
        fetchData(){
            let data={
                compute: this.runchartfilter.compute,
                count: this.runchartfilter.count,
                drop: this.runchartfilter.drop,
                sort: this.runchartfilter.sort
            }
            this.$store.dispatch("getRunchart",data)
        }
    },
    computed: {
      ...mapState({
           daletouActive: state => state.daletouActive,
           runchartfilter: state => state.runchartfilter
      })
    },
    mounted(){
        this.fetchData()
    }
}