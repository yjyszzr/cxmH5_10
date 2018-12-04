import {Indicator} from 'mint-ui';
import api from '../../../fetch/api'
export default {
    name: 'ketang',
    beforeCreate() {
        Indicator.open()
    },
    data(){
        return {
            noviceClassroomList: []
        }
    },
    methods:{
        fetchData(){
            api.noviceClassroom({emptyStr:''})
                  .then(res => {
                      if(res.code == 0 ){
                         this.noviceClassroomList = res.data.noviceClassroomList
                      }
            })
        }
    },
    mounted(){
        this.fetchData()
    }
}