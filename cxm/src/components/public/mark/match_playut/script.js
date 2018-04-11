import api from '../../../../fetch/api.js'
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
        firstNum: 0
    };
  },
  methods: {
    closeMark(){
        this.$store.state.mark_playObj.mark_play = '' 
        this.firstNum = 0
        this.mup = '5'  
        setTimeout(()=>{
            this.$store.state.mark_playObj.mark_playBox = false
        },250)
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
      this.tapactive(s)
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