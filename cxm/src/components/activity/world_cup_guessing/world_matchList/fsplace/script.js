import api from '../../../../../fetch/api'
import {
  Indicator
} from 'mint-ui'
export default {
    name: 'fsplace',
    data(){
        return {
            list: []
        }
    },
    beforeCreate() {
        Indicator.open()
    },
    mounted(){
        this.fetchData()
    },
    methods:{
        fetchData(){
            api.gyjs({})
            .then(res => {
                console.log(res)
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