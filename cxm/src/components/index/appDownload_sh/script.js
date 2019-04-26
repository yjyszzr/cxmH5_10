import {detect,wxPd} from '../../../util/common'
export default{
    name: 'appdownLoad',
    data(){
        return {
            detect: '',  //平台
            flag: 0  //控制按钮切换
        }
    },
    mounted(){
        this.detect = detect();
    },
    methods:{
        androidload(){
            location.href = 'http://szcq-apk.oss-cn-beijing.aliyuncs.com/shenghe_c11110_1.1.0.release.apk';
        },
        iosload(){
            if(wxPd()){
                this.$store.commit("MARKSHORTCUT", true);
                return false;
            }
            if(this.flag==2){
                location.href = 'https://szcq-apk.oss-cn-beijing.aliyuncs.com/embedded.mobileprovision';
            }else{
                location.href = 'itms-services://?action=download-manifest&url=https://szcq-apk.oss-cn-beijing.aliyuncs.com/shenghe.plist';
                this.flag = 1;
                setTimeout(()=>{
                    this.flag = 2;
                },12000)
            }
        }
    }
}