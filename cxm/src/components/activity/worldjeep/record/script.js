import api from '../../../../fetch/api'
import { MessageBox,Indicator } from 'mint-ui';
export default {
    name: 'record',
    beforeCreate() {
        Indicator.open()
    },
    data(){
        return {
            recordList: []
        }
    },
    methods:{
        paymentBtn(){
            MessageBox.alert('', {
                message: '竞猜结果将在7月16日12:00:00公布，请耐心等待',
                title: '提示',
                confirmButtonText: '我知道了',
                closeOnClickModal: false
            }).then(action => {

            });
        }
    },
    mounted(){
          // document.title='我的竞猜记录'
          api.worldCupPlanlist({})
            .then(res => {
              if (res.code == 0) {
                this.recordList = res.data
              }
            })
    }
}