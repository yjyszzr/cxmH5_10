import {detect} from "../../../../util/common.js";

export default {
    name: 'success',
    data() {
        return {
        }
    },
    created(){

    },
    mounted() {
        if(detect()==='ios'){
            $('.buton').css('display','none')
        }
        document.title='注册推广员'
    },
    methods:{

        //下载
        go_btn(){
            let detectpd = detect()
            if (detectpd === 'ios') {
                location.href = 'http://m.caixiaomi.net'
            } else if (detectpd === 'android') {
                location.href = 'http://a.app.qq.com/o/simple.jsp?pkgname=net.caixiaomi.info'
            }
        },
        //使用
        downLoadGoto(){
            location.href = 'http://m.caixiaomi.net'
        }
    },
}
