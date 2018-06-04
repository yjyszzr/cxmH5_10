import api from '../../../../fetch/api.js'
import { Toast } from 'mint-ui'
import { Indicator } from 'mint-ui'
export default {
  name: "match_filter",
  data() {
    return {
        matchFilterList: ['巴西','德国','阿根廷','西班牙','法国','比利时','葡萄牙','英格兰','其他']
    };
  },
  methods: {
    cancel() {
      this.$store.dispatch("getMarkShow",false)
    },
    team(index) {
        if(this.$refs.match_name[index].className == 'filterActive') {
            this.$refs.match_name[index].className = ''
        } else {
            this.$refs.match_name[index].className = 'filterActive'
        }
    },
    confim(){
        let arr = this.$refs.match_name
        let arrTeam = []
        this.$store.dispatch("getMarkShow",false)
        for(let i=0;i<arr.length;i++){
            if(arr[i].className == 'filterActive'){
                arrTeam.push(arr[i].innerText)
            }
        }
        this.$store.state.world_cupObj.worldfliter = arrTeam
    }
  },
  mounted(){
      
  }
};