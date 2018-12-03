import api from '../../../fetch/api'
import { Indicator } from 'mint-ui'
export default {
    name: 'huodong',
    beforeCreate() {
        Indicator.open()
    },
    data(){
        return {
            selectedLabelDefault: '进行中',
            offlineList: [],
            onlineList: []
        }
    },
    methods:{
        goBack(){
            this.$router.go(-1)
        },
        hdtab(c){
            this.selectedLabelDefault = c.target.innerText
        },
        fetchData(){
            api.activeCenter({emptyStr:''})
            .then(res => {
                if(res.code == 0 ){
                   this.offlineList= res.data.offlineList
                   this.onlineList= res.data.onlineList
                }
            })
        }
    },
    mounted(){
        this.fetchData()
    }
}