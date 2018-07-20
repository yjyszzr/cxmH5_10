import {Indicator, Toast} from 'mint-ui'
import datefilter from '../../../util/datefilter'
import {weekTime,hour} from '../../../util/common'
import api from '../../../fetch/api'
export default {
    name: 'result',
    beforeCreate() {
        Indicator.open()
    },
    data () {
      return {
          result:{},
          activeName: '1',
          topStatus: '',
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
        },
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
        handleTopChange(status) {
            this.topStatus = status;
        },
        loadTop(){
            this.fetchData()
            setTimeout(()=>{
                this.$refs.loadmore.onTopLoaded();
            },400)
        },
        starTimeFormat(time){
           hour(time*1000);
        },
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
        },
        //点击收藏小星星
        collection(list){
            var that = this
            let data = {
                dateStr:datefilter(this.$store.state.mark_showObj.mark_dateVal,2) ,//收藏日期
                matchId: list.matchId//比赛ID
            }
            if(list.isCollect=="1"){//取消收藏
                api.cancle(data)
                    .then(res => {
                        if (res.code == 0) {
                            let data={
                                dateStr: that.$store.state.mark_showObj.mark_dateVal,
                                leagueIds: that.$store.state.mark_showObj.leagueIds,
                                type:that.$store.state.mark_showObj.lotteryResultTableIndex,
                            }
                            Indicator.open();
                            that.$store.dispatch("getResultList", data);
                        }
                    })

            }else { //收藏
                api.collectMatchId(data)
                    .then(res => {
                        if (res.code == 0) {

                            let data={
                                dateStr: that.$store.state.mark_showObj.mark_dateVal,
                                leagueIds: that.$store.state.mark_showObj.leagueIds,
                                type:that.$store.state.mark_showObj.lotteryResultTableIndex,
                            }
                            Indicator.open();
                            that.$store.dispatch("getResultList", data);
                        }
                    })
            }
        },
    },
    beforeRouteLeave(to, from, next) {
        next()
        this.$store.dispatch("getMarkShow",false)
        this.$store.dispatch("getMarkShowType",'')
        this.$store.dispatch("getMatchFinish",'')
        this.$store.dispatch("getLeagueIds",'')
        this.$store.dispatch("getMarkDateVal",'')
    }
}