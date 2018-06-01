import {isTitle} from '../../../../util/common'
import api from '../../../../fetch/api'
import { Toast } from 'mint-ui'
import countDown from '../count_down/count_down'

export default {
    name: 'red_packet',
    data(){
        return {
            token: '',
            packet:{},
        }
    },
    components: {
        "v-countDown": countDown,
    },
    mounted(){
        let data = {
            pageNum:1,
            pageSize:10
        }
        api.toRechange(data)
            .then(res => {
                if (res.code == 0) {
                    console.log(res)
                    this.packet = res.data
                }
            })
        isTitle('活动详情')
    },
    methods: {
        callback(){}
    }
}