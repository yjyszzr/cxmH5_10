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
                return false;
                location.href = 'https://itunes.apple.com/us/app/彩小秘-你想要的体育资讯/id1390432855?l=zh&ls=1&mt=8'
            } else if (detectpd === 'android') {
                location.href = 'http://a.app.qq.com/o/simple.jsp?pkgname=net.caixiaomi.info'
            }
        }
    },
    mounted(){

    }
}
