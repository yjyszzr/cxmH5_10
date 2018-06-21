import api from '../../../fetch/api'
import { Toast } from 'mint-ui'
import { Indicator } from 'mint-ui'
export default {
    name: 'record',
    data () {
      return {
          haspass:{}
      }
    },
    created(){
      
    },
    methods:{
    },
    computed: {
        userInfo(){
            return this.$store.state
        }
    },  
    watch: {
    },
    mounted(){
    },
}