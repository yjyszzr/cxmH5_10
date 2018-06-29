import api from '../../../../../fetch/api'
import { Toast } from 'mint-ui'
export default {
    name: 'bankList',
    data () {
      return {
          
      }
    },
    computed: {
        xfbklist() {
          return this.$store.state.xfbanklist;
        }
    },
    methods: {
      tjxkClick(){
        this.$emit('closeMarkCz')
        this.$store.commit('XFBANKLIST',[])
      }
    }
}