import api from '../../../../../fetch/api'
import { Toast } from 'mint-ui'
export default {
    name: 'score',
    data () {
      return {
          scoreObj: {
              flag: '1'
          },
          scoreArr: new Set()
      }
    },
    methods: {
        cancel(){
            this.$emit('closeMarkCz')
        },
        confirm(){
            this.$emit('closeMarkCz')
            if(this.scoreArr.size==0){
                this.$store.state.mark_playObj.bfIdSaveMap.delete(this.scoreObj.matchId)
            }else{
                this.$store.state.mark_playObj.bfIdSaveMap.set(this.scoreObj.matchId,this.scoreArr)
            }
            this.$store.state.mark_playObj.bfIdSaveMapFlag+=1
        },
        bfClick(c){
            if(c.target.parentElement.className == ''){
                c.target.parentElement.className = 'bfSelected'
                this.scoreArr.add(c.target.parentElement.children[1].innerText)
            }else{
                c.target.parentElement.className = ''
                this.scoreArr.delete(c.target.parentElement.children[1].innerText)
            }
        }
    },
    mounted(){
        this.$store.state.matchObj.playList.forEach(item => {
            for(let i = 0;i < item.playList.length;i ++){
                if(item.playList[i].matchId == this.$store.state.mark_playObj.bfmatchId){
                   this.scoreObj =  item.playList[i]
                }
            }
        });
        this.$store.state.matchObj.hotPlayList.forEach(item => {
            if(item.playList[i].matchId == this.$store.state.mark_playObj.bfmatchId){
                this.scoreObj =  item.playList[i]
            }
        });
        if(this.$store.state.mark_playObj.bfIdSaveMap.has(this.scoreObj.matchId)){
            this.scoreArr = new Set()
            for (let [key, value] of this.$store.state.mark_playObj.bfIdSaveMap) {
                if ( this.scoreObj.matchId == key) {
                    //this.scoreArr = value
                    value.forEach(item=>{
                        this.scoreArr.add(item)
                    })
                }
            }
        }else{
            this.scoreArr = new Set()
        }
    }
}