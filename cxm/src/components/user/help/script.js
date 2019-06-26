import {means,nativeApp,isWebview} from '../../../util/common'
import helpTable from '../../public/help'
export default {
    name: 'help',
    components: {
        "v-table": helpTable
    },
    methods:{
        talkCustom(){
            if(isWebview()){
                nativeApp({'methodName':'pushService'}) //调起原生客服
            }else{
                window.location.href = "https://www.sobot.com/chat/h5/index.html?sysNum=1a549fa1ac1b4c0f9eeda9953f62b9b2&titleFlag=3"
            }
        }
    },
    mounted(){
      nativeApp({'methodName':'showTitle','title':'帮助中心'})
      means('帮助中心').isTitle
    }
}