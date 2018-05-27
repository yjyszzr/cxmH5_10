import {isTitle} from '../../../util/common'
import api from '../../../fetch/api'
import { Toast } from 'mint-ui'
import QRCode from "qrcode";
export default {
    name: 'one',
    data(){
        return {
            token: ''
        }
    },
    mounted(){
        isTitle('世界杯')

        api.worldcup()
            .then(res => {
                console.log(this.userId)
                if(res.code==0) {
                    this.income = res.data
                }
            })
    },
    methods:{

    }
}