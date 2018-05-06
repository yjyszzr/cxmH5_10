import api from '../../../fetch/api'
import {Indicator, Toast} from 'mint-ui'
import datefilter from '../../../util/datefilter'
import detail from '../detail/index'
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
    components:{
    		'v-detail': detail
    },
    methods:{
      fetchData(){
        let data = {
            'matchId': this.$route.query.id
        }
        api.matchTeamInfos(data)
            .then(res => {
                if(res.code==0) {
                   // console.log(res)
                  this.ckxqObj = res.data
                }
            })
      },
      matchTimeDate(c){
          return datefilter(c*1000,0)+' '+ datefilter(c*1000,1)
      },
      goTZ(){
      	this.$router.go(-2)
      },
      fxTab(c,s){
      	$('.currer').removeClass('currer')
      	c.target.parentElement.className='currer'
      	if(s=='1'){
      		this.flag=false
      	}else{
      		this.flag=true
      	}
      },
      colorMatchRs(c){
          switch (c) {
              case '胜':
                return '#ea5504'
              case '平':
                return '#0099d9'
              case '负':
                return '#44ae35'
          }
      }
    },
    mounted(){
      this.fetchData()
    },
}