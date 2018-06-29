import {getUrlStr,detect,wxPd} from '../../../util/common'
import api from "../../../fetch/api";
export default{
    name: 'appdownLoad',
    data(){
        return {
            detect: ''
        }
    },
    mounted(){
        this.detect = detect()
        let data = {
            clickTypeId: 'cxmxz_'+getUrlStr('fr',location.href)
        }
        api.clickNum(data)
            .then(res => {
                // this.andrClick()
            })
    },
    methods:{
        andrClick(){
            if(wxPd()){
                location.href = 'https://a.app.qq.com/o/simple.jsp?pkgname=net.caixiaomi.info'
            }else{
                if(getUrlStr('ct',location.href)=='2'){
                    alert(1)
                    location.href = 'https://m.caixiaomi.net/down/cxm106_jc035.apk'
                }else{
                    alert(2)
                    location.href = 'https://m.caixiaomi.net/down/cxm106_zc037.apk'
                }
            }
        }
    }
}