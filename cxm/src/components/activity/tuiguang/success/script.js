import {detect} from '../../../../util/common'

export default {
    name: 'success',
    data() {
        return {
        }
    },
    methods:{
        go_btn(){
            console.log(detect)
            let detect = detect()
            if (detect === 'ios') {
                location.href = 'https://itunes.apple.com/us/app/彩小秘-你想要的体育资讯/id1390432855?l=zh&ls=1&mt=8'
            } else if (detect === 'android') {
                location.href = 'http://a.app.qq.com/o/simple.jsp?pkgname=net.caixiaomi.info'
            }
        }
    },
}
