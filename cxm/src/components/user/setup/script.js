import api from '../../../fetch/api'
import { Toast } from 'mint-ui'
import { Indicator } from 'mint-ui'
export default {
    name: 'record',
    data () {
      return {
          
      }
    },
    created(){
      
    },
    methods:{
    },
    computed: {
        userInfo(){
            return this.$store.state.userInfo
        }
    },  
    watch: {
    },
    mounted(){
    },
}