import {isTitle} from '../../../../util/common'
import api from '../../../../fetch/api'
import { Toast } from 'mint-ui'
export default {
    name: 'one',
    data(){
        return {
            token: ''
        }
    },
    mounted(){
        isTitle('活动详情')
    }
}