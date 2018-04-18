import api from '../../../fetch/api'
import {Indicator, Toast} from 'mint-ui'
import datefilter from '../../../util/datefilter'
export default {
    name: 'teamDetail',
    beforeCreate() {
        Indicator.open()
    },
    data () {
      return {
        flag: false,
        ckxqObj:{

        }
      }
    },
    created(){
      
    },
    methods:{
      fetchData(){
        let data = {
            'matchId': this.$route.query.id
        }
        api.matchTeamInfos(data)
            .then(res => {
                if(res.code==0) {
                  this.ckxqObj = res.data
                }else{
                    Toast(res.msg)
                }
                Indicator.close()
            })
            .catch(error => {
                Toast('网络错误')
        })
      },
      matchTimeDate(c){
          return datefilter(c*1000,0)+' '+ datefilter(c*1000,1)
      }
    },
    mounted(){
      this.fetchData()
      console.log(this.ckxqObj)
    },
}