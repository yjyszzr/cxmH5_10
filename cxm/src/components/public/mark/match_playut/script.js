import api from '../../../../fetch/api.js'
import score from './score/index.vue'
import bqc from './bqc/index.vue'
import mix from './mix/index.vue'
import matchDetail from './matchDetail/index.vue'
import { Toast } from 'mint-ui'
import { Indicator } from 'mint-ui'
export default {
  name: "match_playut",
  data() {
    return {
        list: new Set(),
        mapArr: [5,10,20,50,100],
        numList: [1,2,3,4,5,6,7,8,9,'',0,''],
        mup: '5',
        firstNum: 0,
        bounsId: ''
    };
  },
  components:{
    'v-score': score,
    'v-bqc': bqc,
    'v-mix': mix,
    'v-matchdetail': matchDetail
  },
  methods: {
    closeMarkCz(){
      this.$store.state.mark_playObj.mark_play = '' 
      setTimeout(()=>{
        this.$store.state.mark_playObj.mark_playBox = false
      },250)
    },
    closeMarkCzZz(){
      if(this.$store.state.mark_playObj.matchDetailFlag==false){
          this.$store.dispatch("getMatchDetailFlag",true)
      }else{
          this.$store.dispatch("getMatchDetailFlag",false)
      }
      this.closeMarkCz()
    },
    closeMark(){
        this.firstNum = 0
        this.mup = '5'  
        this.closeMarkCz()
    },
    mupNumber(c,s){
       this.mup = c+''
       this.firstNum = 0
       this.tapactive(s)
    },
    tapactive(s){
      s.target.className = 'tapActive'
      setTimeout(()=>{
        s.target.className = ''
      },150)
    },
    numClick(c,s){
      if(c!==''){
        if(c!==0){
          this.firstNum++
        }
        if(this.firstNum==1){
          if(c!==0){
            this.mup = c+''
            this.firstNum++
          }
        }else if(this.firstNum>1){
          if(this.mup.length>4){
            Toast('最大投注倍数为99999')
          }else{
            this.mup = this.mup+''+c
          }
        }
        this.tapactive(s)
      }
    },
    deleteNum(s){
      // basic = basic.substr(0, basic.length - 1);
      this.mup = this.mup.substr(0, this.mup.length - 1)
      this.firstNum = 0
      this.tapactive(s)
    },
    changeColor(c,s){
      if(c.target.className=='current'&&this.list.size>1){
        c.target.className=''
        this.list.delete(s)
      }else{
        c.target.className='current'
        this.list.add(s)
      }
    },
    confirm(){
      this.closeMarkCz()
      this.$store.state.mark_playObj.playutText = Array.from(this.list)
      this.$store.state.mark_playObj.playutText.sort((a,b)=>{
        return a.split('&')[0]-b.split('&')[0]
      })
      Indicator.open()
    },
    confirm_num(){
      if(this.mup === ''){
        this.mup = '1'
      }
      this.$store.state.mark_playObj.mupNum = this.mup
      this.closeMark()
    },
    bounsSelected(c,i){
      if(this.$refs.userBonusIdS[i].className == 'bounsId'){
        this.$refs.userBonusIdS[i].className = ''
      }else{
        $('.bounsId').removeClass('bounsId')
        this.$refs.userBonusIdS[i].className = 'bounsId'
      }
      //console.log($('.bounsId').length)
      if($('.bounsId').length<=0){
        this.bounsId = -1
      }else{
        this.bounsId = c.userBonusId
      }
    },
    yhBtn(){
       this.closeMarkCz()
       this.$store.state.mark_playObj.mybounsId = this.bounsId
    }
  },
  mounted(){
    
  },
  computed: {  
    status() {  
        return this.$store.state.mark_playObj.playutText; 
    }  
  },  
  watch: {
    status(a,b){
      this.list = new Set(this.$store.state.mark_playObj.playutText)
    }
  },
  mounted(){

  },
};