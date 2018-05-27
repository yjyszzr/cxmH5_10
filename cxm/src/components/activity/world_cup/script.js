import {isTitle} from '../../../util/common'
import api from '../../../fetch/api'
import { Toast } from 'mint-ui'
import QRCode from "qrcode";
export default {
    name: 'world_cup',
    data(){
        return {
            token: '',
            zxList:[]
        }
    },
    beforeCreate() {
        Indicator.open();
    },
    components: {
        "v-informal": informal
    },
    mounted(){
        isTitle('世界杯')
    },
    methods:{

    },
    fetchData() {
        let data = {
            page: this.page,
            size: 20
        };
        api
            .dllist(data)
            .then(res => {
                if (res.code == 0) {
                    //console.log(res);
                    this.zxObj = res.data;
                    if (this.page == 1) {
                        this.zxList = this.zxList.concat(res.data.list);
                        this.trFlag = false
                    } else {
                        setTimeout(() => {
                            this.trFlag = false;
                            this.isbool = true;
                            this.zxList = this.zxList.concat(res.data.list);
                        }, 800);
                    }
                }
            })
            .catch(err=>{
                setTimeout(() => {
                    this.trFlag = false;
                    this.cxLoadFlag = true;
                }, 800);
            })
    },
}