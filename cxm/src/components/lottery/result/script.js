import api from '../../../fetch/api'
import {Indicator, Toast} from 'mint-ui'
import datefilter from '../../../util/datefilter'
export default {
    name: 'result',
    beforeCreate() {
        Indicator.open()
    },
    data () {
      return {
          result:{},
          activeName: '1',
          flag: true,
      }
    },
    created(){
      
    },
    mounted(){
        this.$store.dispatch("getMarkDateVal",datefilter(new Date().getTime(),2))
        this.fetchData()
    },
    computed: {
        status() {
          return this.$store.state.mark_showObj.mark_dateVal;
        }
      },
      watch: {
        status(a, b) {
            this.$store.dispatch("getMarkDateVal",a)
            Indicator.open()
            this.fetchData()
        }
      },
    methods:{
        data_time(){
            this.$store.dispatch("getMarkShow",true)
            this.$store.dispatch("getMarkShowType",1)
        },
        more(){
            this.$store.dispatch("getMarkShow",true)
            this.$store.dispatch("getMarkShowType",2)
        },
        all(c){
            if(c.target.innerText == '全部'){
                this.flag=false
                this.$store.dispatch("getMatchFinish",'1')
            }else{
                this.flag=true
                this.$store.dispatch("getMatchFinish",'')
            }
            Indicator.open()
            this.fetchData()
        },
        fetchData(){
            let data={
                dateStr: this.$store.state.mark_showObj.mark_dateVal,
                isAlreadyBuyMatch: this.$store.state.mark_showObj.isAlreadyBuyMatch,
                leagueIds: this.$store.state.mark_showObj.leagueIds,
                matchFinish: this.$store.state.mark_showObj.matchFinish
            }
            this.$store.dispatch("getResultList",data)
        },
        matchFilsh(){
            let num = 0;
            this.$store.state.resultList.forEach(item => {
                if(item.matchFinish=='1'){
                    num++
                }
            });
            return num;
        }
    },
    beforeRouteLeave(to, from, next) {
        next()
        this.$store.dispatch("getMarkShow",false)
        this.$store.dispatch("getMarkShowType",'')
        this.$store.dispatch("getMatchFinish",'')
        this.$store.dispatch("getLeagueIds",'')
        this.$store.dispatch("getisAlreadyBuyMatch",'')
        this.$store.dispatch("getMarkDateVal",'')
      }
}