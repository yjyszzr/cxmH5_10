import api from '../../../fetch/api'
import { Toast } from 'mint-ui'
import { Indicator } from 'mint-ui'
import { MessageBox } from 'mint-ui'
export default {
    name: 'record',
    data () {
      return {
          
      }
    },
    created(){
      
    },
    methods:{
        nickname(){
            MessageBox.prompt('',{
                title: '给自己取一个喜欢的昵称',
                message: '昵称取好后不能再修改',
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                showCancelButton: true
            }).then(({ value, action }) => {
            },action => {

            })
        }
    },
    computed: {
        userInfo(){
            return this.$store.state.userInfo
        }
    },  
    watch: {
    },
    mounted(){
        console.log(this.userInfo)
    },
}