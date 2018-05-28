import {isTitle, isShare} from '../../../../util/common'
import api from '../../../../fetch/api'
import {Indicator, Toast} from 'mint-ui'
import QRCode from 'qrcode';

export default {
    name: 'mycode',
    data() {
        return {
            token: '',
            qrcodeUrl: '',
            userId: this.$route.query.userId,
        }
    },
    beforeCreate() {
        Indicator.open()
    },
    mounted() {
        this.fetchData()
        isShare('注册送好礼', '天”助力2018世界杯，110元彩金等您来领', 'http://39.106.18.39:9805:/activity/mycode?cxmxc=scm&cmshare=1')
        isTitle('我的二维码')
    },
    methods: {
        fetchData() {
            let data = {
                'userId': this.userId,
                'url': 'url',
            }
            api.mycode(data)
                .then(res => {
                    if (res.code == 0) {
                        this.mycode = res.data
                        let canvas = document.getElementById('qrcode');
                        QRCode.toCanvas(canvas, res.data.url + "id=" + res.data.userId, function (error) {

                        })
                    }
                })

        }
    },
}
