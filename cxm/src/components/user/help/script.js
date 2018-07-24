import api from '../../../fetch/api'
import {means} from '../../../util/common'
export default {
    name: 'help',
    data () {
      return {
          activeNames: ['1']
      }
    },
    created(){
      
    },
    methods:{
        handleChange(val) {
            console.log(val);
        }
    },
    mounted(){
      means('帮助中心').isTitle
    }
}