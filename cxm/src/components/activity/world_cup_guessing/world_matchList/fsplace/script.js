import api from '../../../../../fetch/api'
import {means} from '../../../../../util/common'
import {
  Indicator
} from 'mint-ui'
export default {
    name: 'fsplace',
    data(){
        return {
            status: 0,
        }
    },
    beforeCreate() {
        if(!this.$store.state.world_cupObj.world_tab){
            Indicator.open()
        }
    },
    mounted(){
        means('世界杯').isTitle
        if(!this.$store.state.world_cupObj.world_tab){
            this.fetchData()
        }
    },
    computed: {
        fsList() {
          return this.$store.state.world_cupObj.fsList;
        },
        fsNum() {
            return this.$store.state.world_cupObj.fsNum;
        },
        worldfliter(){
            return this.$store.state.world_cupObj.worldfliter;
        }
    },
    methods:{
        fetchData(){
            api.gyjs({})
            .then(res => {
                if (res.code == 0) {
                    this.$store.state.world_cupObj.fsplaceObj = JSON.parse(JSON.stringify(res.data))
                    this.$store.dispatch("changefsList", res.data);
                }
            })
        },
        markClick(c){
            if(c.betStatus=='1'||c.isSell=='1'){
                return false;
            }
            if(c.selected&&c.selected=='sld'){
                c.selected=''
                this.$store.dispatch("changefsNum", '0');
            }else{
                c.selected='sld'
                this.$store.dispatch("changefsNum", '1');
            }
        }
    },
    watch:{
        worldfliter(a,b){
            let arr = JSON.parse(JSON.stringify(this.$store.state.world_cupObj.fsplaceObj))
            if(a.length>0){
                _.remove(arr, function(n) {
                    return a.indexOf(n.homeContryName)==-1&&a.indexOf(n.visitorContryName)==-1;
                });
            }
            this.$store.dispatch("changefsList", arr);
            this.$store.dispatch("changefsNum", '2');
            this.status++
        }
    }
}