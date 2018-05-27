import {isTitle,isShare} from '../../../../util/common'
import api from '../../../../fetch/api'
import {Indicator, Toast} from 'mint-ui'
import QRCode from 'qrcode';
export default {
    name: 'mycode',
    data(){
        return {
            token: '',
            qrcodeUrl:'',
            userId:this.$route.query.userId,
        }
    },
    beforeCreate() {
        Indicator.open()
    },
    mounted(){
        this.fetchData()
        isShare('刚刚地方地方第三方的','地方地方地方上的','http://192.168.31.232:8080:/activity/mycode?cxmxc=scm&cmshare=1')
        isTitle('我的二维码')
    },
    methods:{
        fetchData(){
            let data = {
                'userId': this.userId,
                'url': 'url',
            }
            api.mycode(data)
                .then(res => {
                    if(res.code==0) {
                        this.mycode = res.data
                        let canvas = document.getElementById('qrcode');
                        QRCode.toCanvas(canvas, res.data.url+"id="+res.data.userId, function (error) {
                            
                        })
                    }
                })

        }
    },
}
