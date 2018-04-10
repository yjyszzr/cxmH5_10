import api from '../../../../fetch/api.js'
import { Toast } from 'mint-ui'
import { Indicator } from 'mint-ui'
export default {
  name: "match_playut",
  data() {
    return {
        list: new Set(this.$store.state.mark_playObj.playutText)
    };
  },
  methods: {
    closeMark(){
        this.$store.state.mark_playObj.mark_play = ''   
        setTimeout(()=>{
            this.$store.state.mark_playObj.mark_playBox = false
        },250)
    },
    changeColor(c,s){
      if(c.target.className=='current'){
        c.target.className=''
        this.list.delete(s)
      }else{
        c.target.className='current'
        this.list.add(s)
      }
    },
    confirm(){
      this.closeMark()
      this.$store.state.mark_playObj.playutText = Array.from(this.list)
    }
  },
  mounted(){
    
  },
};