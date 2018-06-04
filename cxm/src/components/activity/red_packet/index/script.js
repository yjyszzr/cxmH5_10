import {means} from '../../../../util/common'
import api from '../../../../fetch/api'
import { Toast } from 'mint-ui'
export default {
    name: 'red_packet',
    data(){
        return {
            token: ''
        }
    },
    mounted(){
        means('活动详情').isTitle
    }
}