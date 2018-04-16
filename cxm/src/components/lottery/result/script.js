import api from '../../../fetch/api'
import {Indicator, Toast} from 'mint-ui'
export default {
    name: 'result',
    beforeCreate() {
        Indicator.open()
    },
    data () {
      return {
          result:{}
      }
    },
    created(){
      
    },
    mounted(){
        let data={
            dateStr:'2018-04-15',
            isAlreadyBuyMatch:'',
            leagueIds :[],
        }
        api.queryMatchResult(data)
            .then(res => {
                if(res.code==0) {
                    console.log(res)
                    this.result = res.data
                }else{
                    Toast(res.msg)
                }
                Indicator.close()
            })
            .catch(error => {
                Toast('网络错误')
            })
    },
    methods:{
        data_time(){
            this.$store.state.mark_show = true
            this.$store.state.mark_show_type = 1
        },
        more(){
            this.$store.state.mark_show = true
            this.$store.state.mark_show_type = 2
        },

    },

}