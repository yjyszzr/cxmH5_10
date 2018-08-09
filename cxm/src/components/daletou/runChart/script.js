import api from '../../../fetch/api'
import {mapState} from 'vuex'
import BScroll from 'better-scroll'
export default {
    name: 'runchart',
    data(){
        return {
            runchartTab:[
                '开奖号码','红球走势','蓝球走势','红球冷热','蓝球冷热'
            ],
            h_nums:[],  //保存已选红球号码
            h_scroll: '',  //红球滚动
            s_scroll: '',  //已选滚动
            width: 30.45,  //tabContent宽度
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
        },
        tabClick(i){
            this.$store.commit('DALETOUACTIVE',i+1)
        },
        smjs(c){
            return c<10?'0'+c:c
        },
        hScroll(){
            this.$refs.tabcontent.style.width=this.width+'rem'
            this.$nextTick(()=>{
                this.h_scroll=new BScroll(this.$refs.tab, {
                    startX:0,
                    click:true,
                    scrollX:true,
                    scrollY:false,
                    eventPassthrough:'vertical'
                })
            })
        },
        sScroll(){
            this.$refs.stabcontent.style.width=this.width+'rem'
            this.$nextTick(()=>{
                this.s_scroll=new BScroll(this.$refs.stab, {
                    startX:0,
                    click:true,
                    scrollX:true,
                    scrollY:false,
                    eventPassthrough:'vertical'
                })
            })
        },
    },
    computed: {
      ...mapState({
           daletouActive: state => state.daletouActive,
           runchartfilter: state => state.runchartfilter,
           runchartData: state => state.runchartData
      })
    },
    mounted(){
        this.fetchData()
        this.hScroll()
        this.sScroll()
    }
}