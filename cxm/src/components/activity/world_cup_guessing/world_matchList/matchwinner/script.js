import api from '../../../../../fetch/api'
import {
  Indicator
} from 'mint-ui'
import {means} from '../../../../../util/common'
export default {
    name: 'matchwinner',
    beforeCreate() {
        if(!localStorage.getItem('world_tab')){
            Indicator.open()
        }
    },
    data(){
        return {
            
        }
    },
    mounted(){
        means('世界杯').isTitle
        if(!localStorage.getItem('world_tab')){
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