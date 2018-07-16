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
            if (detect() === 'ios') {
                location.href = "https://itunes.apple.com/cn/app/id1402481777?mt=8"
            } else {
                if(wxPd()){
                    location.href = 'https://a.app.qq.com/o/simple.jsp?pkgname=net.caixiaomi.info'
                }else{
                    if(this.fr >= 'c042'  && this.fr <= 'c052'){
                        if(this.fr == 'c044'){
                            let self = this
                            this._sql.report('transfer', {}, function (res) {
                                location.href="https://m.caixiaomi.net/down/cxm106_j"+self.$route.query.fr+".apk"  
                            }, function (code) {
                                location.href="https://m.caixiaomi.net/down/cxm106_j"+self.$route.query.fr+".apk"
                            });
                        }else{
                            location.href="https://m.caixiaomi.net/down/cxm106_j"+this.$route.query.fr+".apk"
                        }
                    }else {
                        location.href = "https://m.caixiaomi.net/down/cxm106_jc035.apk"
                    }
                }
            }
        }
    }
}