import {Indicator, Toast} from 'mint-ui'
import datefilter from '../../../util/datefilter'
import {weekTime} from '../../../util/common'
export default {
    name: 'result',
    beforeCreate() {
        Indicator.open()


    },
    data () {
      return {
          result:{},
          activeName: '1',
        //   flag: true,
      }
    },
    created(){

    },
    mounted(){
        this.$store.dispatch("getMarkDateVal",datefilter(new Date().getTime(),2))
    },
    computed: {
        weekDate(){
          return weekTime(this.$store.state.mark_showObj.mark_dateVal)
        },
        status() {
          return this.$store.state.mark_showObj.mark_dateVal;
        },
        listd(){
            return this.$store.state.resultList
        }
      },
      watch: {
        status(a, b) {
            this.$store.dispatch("getMarkDateVal",a)
            this.$store.dispatch("getLeagueIds",'')
            Indicator.open()
            this.fetchData()
        }
      },
    methods:{
        goDetail(c){
            this.$router.push({
                path: '/lottery/teamDetail',
                query:{
                    id: c
                },
                replace: true
            })
        },
        fetchData(){
            let data={
                dateStr: this.$store.state.mark_showObj.mark_dateVal,
                // isAlreadyBuyMatch: this.$store.state.mark_showObj.isAlreadyBuyMatch,
                leagueIds: this.$store.state.mark_showObj.leagueIds,
                type:this.$store.state.mark_showObj.lotteryResultTableIndex,
                // matchFinish: this.$store.state.mark_showObj.matchFinish
            }
            this.$store.dispatch("getResultList",data)
        },
        matchFilsh(){
            let num = 0;
            this.$store.state.resultList.lotteryMatchDTOList.forEach(item => {
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