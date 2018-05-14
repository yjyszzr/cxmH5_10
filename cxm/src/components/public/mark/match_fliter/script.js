import api from '../../../../fetch/api.js'
import time from '../data/data.vue'
import { Toast } from 'mint-ui'
import { Indicator } from 'mint-ui'
export default {
  name: "match_filter",
  data() {
    return {
        matchFilterList: [],
        playType: this.$route.query.id
    };
  },
    components:{
      'v-time': time
    },
  methods: {
    cancel() {
      this.$store.dispatch("getMarkShow",false)
      this.$store.dispatch("getMarkReset",0)
    },
    team(index) {
        if(this.$refs.match_name[index].className == 'filterActive') {
            this.$refs.match_name[index].className = ''
        } else {
            this.$refs.match_name[index].className = 'filterActive'
        }
        this.$refs.lookac.className = ''
    },
    allFilter() {
        let arr = this.$refs.match_name
        for(let i = 0; i < arr.length; i++) {
            this.$refs.match_name[i].className = 'filterActive'
        }
        this.$refs.lookac.className = ''
    },
    reserveFilter() {
        let arr = this.$refs.match_name
        for(let i = 0; i < arr.length; i++) {
            if(this.$refs.match_name[i].className == 'filterActive') {
                this.$refs.match_name[i].className = ''
            } else {
                this.$refs.match_name[i].className = 'filterActive'
            }
        }
        this.$refs.lookac.className = ''
    },
    hotFilter() {
        let arr = this.$refs.match_name
        for(let i = 0; i < arr.length; i++) {
            this.$refs.match_name[i].className = ''
            if(arr[i].innerText == '德甲' || arr[i].innerText == '法甲' || arr[i].innerText == '西甲' || arr[i].innerText == '意甲' || arr[i].innerText == '英超') {
                this.$refs.match_name[i].className = 'filterActive'
            }
        }
        this.$refs.lookac.className = ''
    },
    lookClick(){
        if(this.$refs.lookac.className == 'lookactive') {
            this.$refs.lookac.className = ''
        } else {
            this.$refs.lookac.className = 'lookactive'
            let arr = this.$refs.match_name
            for(let i = 0; i < arr.length; i++) {
                this.$refs.match_name[i].className = ''
            }
        }
    },
    confim(){
        let arr = this.$refs.match_name
        let arrTeam = []
        this.matchFilterList.forEach(item=>{
            for(let i=0;i<arr.length;i++){
                if(arr[i].className == 'filterActive'){
                    if(arr[i].innerText==item.leagueAddr){
                        arrTeam.push(item.leagueId)
                    }
                }
            }
        })
        Indicator.open()
        if(this.$route.path.split('/')[1]=='lotteryResult'){
            if(this.$refs.lookac.className == 'lookactive'){
                this.$store.dispatch("getisAlreadyBuyMatch",'1')
            }else{
                this.$store.dispatch("getisAlreadyBuyMatch",'')
            }
            this.$store.dispatch("getLeagueIds",arrTeam.join(','))
            let data={
                dateStr: this.$store.state.mark_showObj.mark_dateVal,
                isAlreadyBuyMatch: this.$store.state.mark_showObj.isAlreadyBuyMatch,
                leagueIds: this.$store.state.mark_showObj.leagueIds,
                matchFinish: this.$store.state.mark_showObj.matchFinish
            }
            this.$store.dispatch("getResultList",data)
        }else{
            let data = {
                'leagueId': arrTeam.join(','),
                'playType': this.playType
            }
            this.$store.dispatch("getLeagueIds",arrTeam.join(','))
            this.$store.dispatch("getMatchList",data)
            this.$store.dispatch("getMarkReset",1)
        }
        this.$store.dispatch("getMarkShow",false)
    },
    lotteryResultFilter(c){
        api.getFilterConditionsSomeDay({'dateStr':c})
        .then(res => {
            if(res.code==0) {
                this.matchFilterList = res.data
                if(this.$store.state.mark_showObj.leagueIds==''){
                    let arr = res.data.map((item)=>{
                        return item.leagueId
                    })
                    this.$store.dispatch("getLeagueIds",arr.join(','))
                }
            }
        })
    }
  },
  mounted(){
      if(this.$route.path.split('/')[1]=='lotteryResult'){
        this.lotteryResultFilter(this.$store.state.mark_showObj.mark_dateVal)
      }else{
        api.filterConditions({})
        .then(res => {
            if(res.code==0) {
                this.matchFilterList = res.data
                if(this.$store.state.mark_showObj.leagueIds==''){
                    let arr = res.data.map((item)=>{
                        return item.leagueId
                    })
                    this.$store.dispatch("getLeagueIds",arr.join(','))
                }
            }
        })
      }
  }
};