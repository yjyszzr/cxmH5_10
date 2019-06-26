import api from '../../../fetch/api'
import { Toast,Indicator } from 'mint-ui'
export default {
    name: 'kaijiang',
    beforeCreate() {
        Indicator.open()
    },
    data(){
        return {
            openPrize: ''
        }
    },
    mounted(){
        this.fetchData();
    },
    methods:{
        goPlayList(c){
            this.$router.push({
                path: '/servicemd/kaijiang/'+c.lotteryInitials,
                query:{
                    lotteryId: c.lotteryId
                }
            })
        },
        fetchData(){
              api.openPrize({emptyStr:''})
              .then(res => {
                  if(res.code == 0 ){
                     this.openPrize= res.data
                  }
              })
        }
    }
}