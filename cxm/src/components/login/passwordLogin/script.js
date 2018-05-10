import api from '../../../fetch/api'
import { Toast } from 'mint-ui'
export default {
    name: 'password',
    data () {
      return {
        phoneVal: '',
        passwordVal: '',
        eyehide: false,   //控制眼睛
        returnGo: false
      }
    },
    created(){
      
    },
    methods:{
      _login(){
        if (!this.phoneVal || !this.passwordVal) {
            Toast('请填写完整')
            return
        }
        let data = {
            'mobile': this.phoneVal,
            'password': this.passwordVal,
            'loginSource': '4'
        }
        // console.log(JSON.parse(data))
        api.LoginByPass(data)
        .then(res => {
            if(res.code==0) {
                localStorage.setItem('token',res.data.token)
                if(this.returnGo){
                  this.$router.go(-1)
                }else{
                  this.$router.push({
                    path: '/',
                    replace: true
                  })
                }
                //this.$router.go(-1);
                Toast(res.msg)
            }

        })
      },
      handleCommentFocus(){
        this.$refs.sjh.style.color = '#505050'
      },
      handleCommentBlur(c){
        if(c.target.value==''){
          this.$refs.sjh.style.color = '#9f9f9f'
        }
      },
      handleCommentFocus1(){
        this.$refs.mima.style.color = '#505050'
      },
      handleCommentBlur1(c){
        if(c.target.value==''){
          this.$refs.mima.style.color = '#9f9f9f'
        }
      },
    },
    mounted(){
    },
    beforeRouteEnter(to, from, next){
      //console.log(from)
      if(from.path=='/freebuy/payment'){
          next(vm=>{
               vm.returnGo =  true 
               //console.log(vm.returnGo)
          })
          //localStorage.removeItem('matchSaveInfo')
      }else{
          next(vm=>{
            vm.returnGo =  false 
          })
      }
    },
    beforeRouteLeave(to, from, next) {
      next()
      if(to.path=='/user'){
        this.$router.push({
            path: '/',
            replace: true
        })
      }
    }
}