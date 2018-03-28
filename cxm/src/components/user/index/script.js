import api from '../../../fetch/api'
import { Toast } from 'mint-ui'
import { Indicator } from 'mint-ui'
export default {
    name: 'index',
    data () {
      return {
        userInfo: {}
      }
    },
    beforeCreate() {
			Indicator.open()
		},
    created(){
      
    },
    methods:{
      loginout(){
        api.logout({})
        .then(res => {
            if(res.code==0) {
              localStorage.clear()
              this.$router.push({
                  path: '/user/password',
                  replace: true
              })
            }
            Toast(res.msg)
        })
        .catch(error => {
            Toast('网络错误')
        })
      },
      handleTopChange(status) {
				this.topStatus = status;
			},
			loadTop() {
        let that = this
        Indicator.open()
				setTimeout(() => {
					that.fetchData()
				}, 700);
      },
      fetchData(){
        let data = {
          str: ''
        }
        api.userInfoExceptPass(data)
        .then(res => {
          // console.log(res)
            if(res.code==0) {
              this.userInfo = res.data
              this.$store.state.userInfo = res.data
            }else{
              Toast(res.msg)
            }
            Indicator.close()
            this.$refs.loadmore.onTopLoaded();
        })
        .catch(error => {
            Toast('网络错误')
        })
      },
      gorz(){
        this.$router.push({
          path: '/user/certification',
          replace: true
        })
      }
    },
    mounted(){
      this.fetchData()
    }
}