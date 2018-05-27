import {isTitle} from '../../../../util/common'
import api from '../../../../fetch/api'
import {Indicator, Toast} from 'mint-ui'
import QRCode from 'qrcode';
// import
export default {
    name: 'mycode',
    data(){
        return {
            token: '',
            qrcodeUrl:'',
            userId:this.$route.query.userId
        }
    },
    beforeCreate() {
        Indicator.open()
    },

    mounted(){
        let data = {
            'userId': this.userId,
            'url': 'url',
        }
        api.mycode(data)
            .then(res => {
                if(res.code==0) {
                    this.mycode = res.data
                }
            })
        let canvas = document.getElementById('qrcode');
        QRCode.toCanvas(canvas, data.url, function (error) {
            
        })
         isTitle('我的二维码')
    },
    methods:{

        Download(){
            		var mycanvas = document.getElementById("qrcode");  
                // here is the most important part because if you dont replace you will get a DOM 18 exception.  
                // var image = myCanvas.toDataURL("image/png").replace("image/png", "image/octet-stream;Content-Disposition: attachment;filename=foobar.png");  
                var image = mycanvas.toDataURL("image/png").replace("image/png", "image/octet-stream");   
                window.location.href=image; // it will save locally  
        },
        detail(){
            this.$router.push({
                path: '/',
                query:{
                    'userId':this.userId
                },
                replace: false
            })
        },
    }
}
