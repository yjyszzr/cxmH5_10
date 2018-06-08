import {detect} from "../../../../util/common.js";

export default {
    name: 'success',
    data() {
        return {
        }
    },
    methods:{
        go_btn(){
            let detectpd = detect()
            if (detectpd === 'ios') {
                location.href = 'http://m.caixiaomi.net'
            } else if (detectpd === 'android') {
                location.href = 'http://a.app.qq.com/o/simple.jsp?pkgname=net.caixiaomi.info'
            }
        }
    },
    mounted(){
        document.title='注册推广员'
    }
}
