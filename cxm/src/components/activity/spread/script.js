import {
	means,
	isShare,
    getUrlStr,detect,wxPd
} from '../../../util/common'
import api from '../../../fetch/api'
import {
	Toast,
	Indicator
} from 'mint-ui'
import {
	MessageBox
} from 'mint-ui';
export default {
    name: 'one',
    data() {
        return {
            fr: this.$route.query.fr,
            detect: '',
            _sql:''
        }
    },
    mounted() {
        if(this.$route.query.fr == 'c044'){
            this._sql = new Squirrel();
        }
    },
    methods: {
        lqBtn() {
            let _sql;
            if(this.$route.query.fr == 'c044'){
                _sql = new Squirrel();
             }
                if (detect() === 'ios') {
                    location.href = "https://m.caixiaomi.net"
                } else {
                    if(wxPd()){
                        location.href = 'https://a.app.qq.com/o/simple.jsp?pkgname=net.caixiaomi.info'
                    }else{
                        if(this.$route.query.fr == 'c042'){
                            location.href="https://m.caixiaomi.net/down/cxm106_jc042.apk"
                        }else if(this.$route.query.fr == 'c043'){
                            location.href="https://m.caixiaomi.net/down/cxm106_jc043.apk"
                        }else if(this.$route.query.fr == 'c044'){
                            this._sql.report('transfer', {}, function (res) {
                            }, function (code) {
                            });
                            location.href="https://m.caixiaomi.net/down/cxm106_jc044.apk"
                        }else if(this.$route.query.fr == 'c045'){
                            location.href="https://m.caixiaomi.net/down/cxm106_jc045.apk"
                        }else {
                            location.href = "https://m.caixiaomi.net/down/cxm106_jc035.apk"
                        }
                    }
                }

        }
    }
}