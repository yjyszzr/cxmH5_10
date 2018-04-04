import api from '../../../../fetch/api.js'
import { Toast } from 'mint-ui'
import { Indicator } from 'mint-ui'
export default {
  name: "match_filter",
  data() {
    return {
        matchFilterList: [],
        playType: this.$route.query.id,
    };
  },
  methods: {
    cancel() {
      this.$store.state.mark_show = false;
    },
    team(index) {
        if(this.$refs.match_name[index].className == 'filterActive') {
            this.$refs.match_name[index].className = ''
        } else {
            this.$refs.match_name[index].className = 'filterActive'
        }
    },
    allFilter() {
        let arr = this.$refs.match_name
        for(let i = 0; i < arr.length; i++) {
            this.$refs.match_name[i].className = 'filterActive'
        }
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
    },
    hotFilter() {
        let arr = this.$refs.match_name
        for(let i = 0; i < arr.length; i++) {
            this.$refs.match_name[i].className = ''
            if(arr[i].innerText == '德甲' || arr[i].innerText == '法甲' || arr[i].innerText == '西甲' || arr[i].innerText == '意甲' || arr[i].innerText == '英超') {
                this.$refs.match_name[i].className = 'filterActive'
            }
        }
    },
    confim(){
        let arr = this.$refs.match_name
        let arrTeam = []
        this.matchFilterList.forEach(item=>{
            for(let i=0;i<arr.length;i++){
                if(arr[i].innerText==item.leagueAddr){
                    arrTeam.push(item.leagueId)
                }
            }
        })
        let data = {
            'leagueId': arrTeam.join(','),
            'playType': this.playType
        }
        Indicator.open()
        this.$store.dispatch("getMatchList",data)
        this.$store.state.mark_show = false
    }
  },
  mounted(){
    api.filterConditions({})
        .then(res => {
            if(res.code==0) {
                console.log(res)
                this.matchFilterList = res.data
            }else{
                Toast(res.msg)
            }
        })
        .catch(error => {
            Toast('网络错误')
    })
  }
};