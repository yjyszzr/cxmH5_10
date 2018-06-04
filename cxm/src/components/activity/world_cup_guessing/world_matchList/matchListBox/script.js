import { MessageBox } from 'mint-ui'
import { getUrlStr } from "../../../../../util/common";
export default {
    name: 'world_matchList',
    data() {
        return {
            flag: true,
            classFlag: true,
            transitionName: 'slide-left',
            matchText: '请选择比赛'
        }
    },
    mounted() {
        let num = 0
        if(this.$store.state.world_cupObj.world_tab){
            if(this.$route.path.split("/")[3]&&this.$route.path.split("/")[3]=='fsplace'){
                _.forEach(this.fsList, function(value, key) {
                    if(value.selected=='sld'){
                        num++
                    }
                });
            }else{
                _.forEach(this.firstList, function(value, key) {
                    if(value.selected=='sld'){
                        num++
                    }
                });
            }
        }
        if(num==0){
            this.matchText = '请选择比赛'
            this.flag = true
            this.classFlag = true
        }else{
                let type = ''
                if(this.$route.path.split("/")[3]&&this.$route.path.split("/")[3]=='fsplace'){
                    type = '冠亚军对决'
                }else{
                    type = '冠军对决'
                }
                this.matchText = `已选择<span style='color:#ea5504;'>${num}</span>场${type}`
                this.flag = false
                this.classFlag = false
        }
        if(num==0){
            this.$store.dispatch("changefsNum", '2');
        }
    },
    methods:{
        confirm(){
            let showtitle = '0'
            if(getUrlStr('showtitle',location.href)=='1'){
                showtitle = '1'
            }
            this.$router.push({
                path: '/activity/world_detail',
                query:{
                    id: this.$route.path.split("/")[3]&&this.$route.path.split("/")[3]=='fsplace'?'1':'0',
                    showtitle: showtitle
                }
            })
        },
        deleteClear(){
            MessageBox.confirm('',{message:'您确认清空已选赛事？',title:'提示',closeOnClickModal:false}).then(action => {
                if(this.$route.path.split("/")[3]&&this.$route.path.split("/")[3]=='fsplace'){
                    _.forEach(this.fsList, function(value, key) {
                        _.unset(value,'selected');
                    });
                }else{
                    _.forEach(this.firstList, function(value, key) {
                        _.unset(value,'selected');
                    });
                }
                this.$store.dispatch("changefsNum", '2');
            },action => {
      
            })
        },
        filter() {
            this.$store.dispatch("getMarkShow", true);
            this.$store.dispatch("getMarkShowType", "world");
        }
    },
    computed: {
      fsNum() {
        return this.$store.state.world_cupObj.fsNum;
      },
      firstList() {
        return this.$store.state.world_cupObj.firstList;
      },
      fsList() {
        return this.$store.state.world_cupObj.fsList;
      }
    },
    watch: {　　
        '$route' (to, from) {　　 
            //console.log('现在路由:',to.path.split('/')[1],'来自路由:',from.path.split('/')[1],'现在的动画:',this.transitionName)　　　
            const toDepth = to.path 
            this.transitionName = toDepth =='/activity/world_matchList/worldwinner' ? 'slide-right' : 'slide-left'　　　　
        },　　
        fsNum(a,b){
            if(a==0){
                this.matchText = '请选择比赛'
                this.flag = true
                this.classFlag = true
            }else{
                let type = ''
                if(this.$route.path.split("/")[3]&&this.$route.path.split("/")[3]=='fsplace'){
                    type = '冠亚军对决'
                }else{
                    type = '冠军对决'
                }
                this.matchText = `已选择<span style='color:#ea5504;'>${a}</span>场${type}`
                this.flag = false
                this.classFlag = false
            }
        }
    },
    beforeRouteLeave(to, from, next) {
      next()
      this.$store.state.mark_playObj.mupNum = '5'
      this.$store.state.world_cupObj.world_tab = false
    }
}