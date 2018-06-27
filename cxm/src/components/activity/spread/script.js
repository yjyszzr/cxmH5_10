import {
	means,
	isShare,
	getUrlStr,detect
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
            detect:''
		}
	},
	mounted() {
	},
	methods: {
		lqBtn() {
            if(detect() === 'ios'){
                location.href="http://m.caixiaomi.net"
            }else{
                if(this.fr){
                    location.href="http://m.caixiaomi.net/down/cxm106_j"+this.$route.query.fr+".apk"
                }else {
                    location.href="https://m.caixiaomi.net/down/cxm106_jc035.apk"
                }
			}
		}
	}
}