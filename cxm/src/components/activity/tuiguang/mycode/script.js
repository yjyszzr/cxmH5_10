import {isTitle,isShare} from '../../../../util/common'
import api from '../../../../fetch/api'
import {Indicator, Toast} from 'mint-ui'
import QRCode from 'qrcode';
export default {
    name: 'mycode',
    data(){
        return {
            token: '',
            qrcodeUrl:'',
            userId:this.$route.query.userId,
        }
    },
    beforeCreate() {
        Indicator.open()
    },
    mounted(){
        this.fetchData()
        isShare('刚刚地方地方第三方的','地方地方地方上的','http://192.168.31.232:8080:/activity/mycode?cxmxc=scm&cmshare=1')
        isTitle('我的二维码')
    },
    methods:{
        fetchData(){
            let data = {
                'userId': this.userId,
                'url': 'url',
            }
            api.mycode(data)
                .then(res => {
                    console.log(res)
                    if(res.code==0) {
                        this.mycode = res.data
                        let canvas = document.getElementById('qrcode');
                        QRCode.toCanvas(canvas, res.data.url+"id="+res.data.userId, function (error) {
                            if (error) console.error(error)
                            console.log('success!');
                        })
                    }
                })

        },
        Download(){
            //cavas 保存图片到本地  js 实现
            //------------------------------------------------------------------------
            //1.确定图片的类型  获取到的图片格式 data:image/Png;base64,......
            var type ='jpg';//你想要什么图片格式 就选什么吧
            var d=document.getElementById("qrcode");
            var imgdata=d.toDataURL(type);
            //2.0 将mime-type改为image/octet-stream,强制让浏览器下载
            var fixtype=function(type){
                type=type.toLocaleLowerCase().replace(/jpg/i,'jpeg');
                var r=type.match(/png|jpeg|bmp|gif/)[0];
                return 'image/'+r;
            };
            imgdata=imgdata.replace(fixtype(type),'image/octet-stream');
            //3.0 将图片保存到本地
            var savaFile=function(data,filename)
            {
                var save_link=document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
                save_link.href=data;
                save_link.download=filename;
                var event=document.createEvent('MouseEvents');
                event.initMouseEvent('click',true,false,window,0,0,0,0,0,false,false,false,false,0,null);
                save_link.dispatchEvent(event);
            };
            var filename=''+new Date().getSeconds()+'.'+type;
            //我想用当前秒是可以解决重名的问题了 不行你就换成毫秒
            savaFile(imgdata,filename);
        },
    },
}
