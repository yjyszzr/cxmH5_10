import {means, isShare,getCsUrl} from '../../../../util/common'
import api from '../../../../fetch/api'
import {Indicator, Toast} from 'mint-ui'
import QRCode from 'qrcode';

export default {
    name: 'mycode',
    data() {
        return {
            token: '',
            qrcodeUrl: '',
            userId: '',
        }
    },
    beforeCreate() {
        Indicator.open()
    },
    created(){
        this.fetchData()
    },
    mounted() {
        isShare('注册送好礼', '"每一天"助力2018世界杯，110元彩金等您来领', '/static/activity_Back/tuiguang/index.html?id='+this.userId,'/static/activity_Back/tuiguang/img/logo.jpg')
        means('我的二维码').isTitle
    },
    methods: {
        fetchData() {
            let data = {
                'url': '',
            }
            api.mycode(data)
                .then(res => {
                    if (res.code == 0) {
                        this.mycode = res.data
                        this.userId = res.data.userId
                        let canvas = document.getElementById('qrcode');
                        QRCode.toCanvas(canvas, getCsUrl() + "/static/activity_Back/tuiguang/index.html?id=" + res.data.userId, function (error) {

                        })
                    }
                })

        }
    },
}
