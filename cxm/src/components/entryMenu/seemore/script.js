import {Indicator,Toast} from 'mint-ui';
import api from '../../../fetch/api'
import {fx_link_rule,getUrlStr} from '../../../util/common'
export default {
    name: 'seemore',
    beforeCreate() {
        Indicator.open()
    },
    data(){
        return {
            list: []
        }
    },
    methods:{
        fetchData(){
              let data = {
                emptyStr: ''
              }
              api.moreDiscoveryClass(data)
                  .then(res => {
                      if(res.code == 0 ){
                         this.list = res.data
                      }
              })
        },
        goItem(c){
            if (c.status == '1') {   //敬请期待提示
                Toast(c.statusReason)
                return false;
            }
            let path = fx_link_rule(getUrlStr('id',c.redirectUrl))
            this.$router.push({
                path: path
            })
        }
    },
    mounted(){
        this.fetchData()
    }
}