import api from '../../../../../fetch/api'
import {
  Indicator
} from 'mint-ui'
export default {
    name: 'matchwinner',
    beforeCreate() {
        Indicator.open()
    },
    data(){
        return {
            list: []
        }
    },
    mounted(){
        this.fetchData()
    },
    methods:{
        fetchData(){
            api.gjs({})
            .then(res => {
                if (res.code == 0) {
                   this.list = res.data
                }
            })
        },
        markClick(index){
            if(this.$refs.teamDetail[index].className=='teamDetail tActive'){
                this.$refs.teamDetail[index].className='teamDetail'
            }else{
                this.$refs.teamDetail[index].className='teamDetail tActive'
            }
        }
    }
}