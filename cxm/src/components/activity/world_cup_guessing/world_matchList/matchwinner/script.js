import api from '../../../../../fetch/api'
import {
  Indicator
} from 'mint-ui'
import {means} from '../../../../../util/common'
export default {
    name: 'matchwinner',
    beforeCreate() {
        if(!this.$store.state.world_cupObj.world_tab){
            Indicator.open()
        }
    },
    data(){
        return {
            
        }
    },
    mounted(){
        window.getCxmTitle = function(){
            return '世界杯'
        }
        if(!this.$store.state.world_cupObj.world_tab){
            this.fetchData()
        }
    },
    computed: {
        firstList() {
          return this.$store.state.world_cupObj.firstList;
        },
        fsNum() {
            return this.$store.state.world_cupObj.fsNum;
        }
    },
    methods:{
        fetchData(){
            api.gjs({})
            .then(res => {
                if (res.code == 0) {
                   this.$store.dispatch("changefirstList", res.data);
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
    }
}