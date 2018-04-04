import api from '../../../fetch/api'
import datefilter from '../../../util/datefilter'
import {
  Toast
} from 'mint-ui'
import {
  Indicator
} from 'mint-ui'
export default {
  name: 'singleNote',
  data() {
    return {
      activeName: '1',
      playType: this.$route.query.id,
      leagueId: '',
      matchObj: {}
    }
  },
  beforeCreate() {
    Indicator.open()
  },
  components: {

  },
  methods: {
    fetchData(){
      let data = {
        'leagueId': this.leagueId,
        'playType': this.playType
      }
      this.$store.dispatch("getMatchList",data)
    },
    datePd(c){
       return datefilter(Number(c*1000),1)
    },
    activeNameNum(c){
      if(this.$store.state.matchObj.hotPlayList.length>0){
        return Number(c+2)+''
      }else{
        return Number(c+1)+''
      }
    }
  },
  mounted(){
    this.fetchData()
  },
  beforeRouteLeave (to, from, next) {
      next()
      this.$store.state.mark_show = false
  }
}