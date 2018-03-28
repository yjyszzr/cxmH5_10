import api from '../../../fetch/api'
export default {
    name: 'recharge',
    data () {
      return {
        userInfo: this.$store.state.userInfo,
        recharge_val: '',
        list_num: ['20','50','100','200']
      }
    },
    created(){
      
    },
    methods: {
      changenum(c){
        this.recharge_val = c
      }
    },
    mounted(){
        
    }
}