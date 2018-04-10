import api from '../../../fetch/api'
import { Toast } from 'mint-ui'
import { Indicator } from 'mint-ui'
import datefilter from '../../../util/datefilter'
export default {
    name: 'cathectic',
    data () {
      return {
        arrTime: [],
        matchSelectObj: new Map(),
        id: '',
        arr: new Set(),
        mupNum: '5',  //倍数
        betObj: {},
        matchBetCells: [],
      }
    },
    beforeCreate() {
			Indicator.open()
    },
    created(){
      
    },
    methods: {
      datePd(c) {
        return datefilter(Number(c * 1000), 1)
      },
      deleteList(c,s){
        this.$store.state.matchSelectedList.forEach(item => {
          if(item.matchId == c){
            this.$store.state.matchSelectedList.splice(s,1)
          }
        });
        this.$store.state.matchObj.hotPlayList.forEach(data => {
          if(data.matchId == c){
            delete data.myspf
          }
        });
        this.$store.state.matchObj.playList.forEach(data => {
          for(let i=0;i<data.playList.length;i++){
            if(data.playList[i].matchId == c){
              delete data.playList[i].myspf
            }
          }
        });
        this.nonTouDate()
        this.playt()
      },
      datep(c){
        return datefilter(Number(c * 1000), 3)
      },
      nonTouDate(){
        this.arrTime = [] 
        this.$store.state.matchSelectedList.forEach(item=>{
          this.arrTime.push(item.matchTime)
        })
        this.arrTime.sort((a,b)=>{
          return a - b;
        })
      },
      playt(){
        let arr = []
        this.$store.state.mark_playObj.playtList = []
        this.$store.state.mark_playObj.playutText = []
        this.$store.state.matchSelectedList.forEach(item => {
          this.matchSelectObj.set(item.matchId, new Set(item.myspf))
          arr.push(item.single)
        })
        if(arr.length>0){
          if(arr.indexOf('0')!=-1){
            for(let i=2;i<=arr.length;i++){
              if(i<=8){
                this.$store.state.mark_playObj.playtList.push(i+'&'+ 1)
              }
            }
          }else{
            this.playutList = ['单关']
            for(let i=2;i<=arr.length;i++){
              if(i<=8){
                this.$store.state.mark_playObj.playtList.push(i+'&'+ 1)
              }
            }
          }
        }
        this.$store.state.mark_playObj.playutText.push(this.$store.state.mark_playObj.playtList[this.$store.state.mark_playObj.playtList.length-1])
      },
      selectedClick(c){
        if (c.target.parentElement.parentElement.parentElement.id != this.id) {
          this.arr = new Set()
          for (let [key, value] of this.matchSelectObj) {
            if (c.target.parentElement.parentElement.parentElement.id == key) {
              this.arr = value
            }
          }
          this.id = c.target.parentElement.parentElement.parentElement.id
        }
        if (c.target.parentElement.className == 'cont_cur') {
          if (c.target.parentElement.children[2].innerText.indexOf('主') != -1) {
            this.arr.delete(3)
          } else if (c.target.parentElement.children[2].innerText.indexOf('平') != -1) {
            this.arr.delete(1)
          } else if (c.target.parentElement.children[2].innerText.indexOf('客') != -1) {
            this.arr.delete(0)
          }
          if (this.arr.size <= 0) {
            this.matchSelectObj.delete(c.target.parentElement.parentElement.parentElement.id)
          } else {
            this.matchSelectObj.set(c.target.parentElement.parentElement.parentElement.id, this.arr)
          }
        } else {
          if (c.target.parentElement.children[2].innerText.indexOf('主') != -1) {
            this.arr.add(3)
          } else if (c.target.parentElement.children[2].innerText.indexOf('平') != -1) {
            this.arr.add(1)
          } else if (c.target.parentElement.children[2].innerText.indexOf('客') != -1) {
            this.arr.add(0)
          }
          this.matchSelectObj.set(c.target.parentElement.parentElement.parentElement.id, this.arr)
        }
        this.$store.state.matchSelectedList = []

        this.$store.state.matchObj.hotPlayList.forEach(item => {
          delete item.myspf
          for (let [key, value] of this.matchSelectObj) {
            if (key == item.matchId) {
              item.myspf = Array.from(value)
              this.$store.state.matchSelectedList.push(item)
            }
          }
        });
        this.$store.state.matchObj.playList.forEach(item => {
          for (let i = 0; i < item.playList.length; i++) {
            delete item.playList[i].myspf
            for (let [key, value] of this.matchSelectObj) {
              if (key == item.playList[i].matchId) {
                item.playList[i].myspf = Array.from(value)
                this.$store.state.matchSelectedList.push(item.playList[i])
              }
            }
          }
        });
        this.nonTouDate()
        this.fetchData()
      },
      cgClick(){
        this.$store.state.mark_playObj.mark_playBox = true
        this.$store.state.mark_playObj.mark_play = '1'       
      },
      fetchData(){
        this.matchBetCells = []
        this.$store.state.matchSelectedList.forEach(item => {
          let obj = {}
          obj.changci = item.changci
          obj.matchId = item.matchId
          obj.matchTime = item.matchTime
          obj.playType = item.playType
          obj.playCode = item.playCode
          obj.matchTeam = item.homeTeamName+ 'VS' + item.visitingTeamName
          obj.isDan = 0
          obj.lotteryClassifyId = this.$route.query.lottoyId
          obj.lotteryPlayClassifyId = this.$route.query.classlootoyId
          let arr1 = []
          for(let i=0;i<item.myspf.length;i++){
            let obj1 = {}
            if(item.myspf[i]==3){
              obj1.cellName = item.homeCell.cellName
              obj1.cellCode = item.homeCell.cellCode
              obj1.cellOdds = item.homeCell.cellOdds
              obj1.cellSons = item.homeCell.cellSons
            }else if(item.myspf[i]==1){
              obj1.cellName = item.flatCell.cellName
              obj1.cellCode = item.flatCell.cellCode
              obj1.cellOdds = item.flatCell.cellOdds
              obj1.cellSons = item.flatCell.cellSons
            }else{
              obj1.cellName = item.visitingCell.cellName
              obj1.cellCode = item.visitingCell.cellCode
              obj1.cellOdds = item.visitingCell.cellOdds
              obj1.cellSons = item.visitingCell.cellSons
            }
            arr1.push(obj1)
          }
          obj.betCells = arr1
          this.matchBetCells.push(obj)
        })
        let data = {
          'betType': this.$store.state.mark_playObj.playutText.join(',').replace(/&/g,''),
          'bonusId': '',
          'lotteryClassifyId': this.$route.query.lottoyId,
          'lotteryPlayClassifyId': this.$route.query.classlootoyId,
          'times': this.mupNum,
          'playType': this.$route.query.playType,
          'matchBetCells': this.matchBetCells
        };
        api
          .getBetInfo(data)
          .then(res => {
            if (res.code == 0) {
              console.log(res)
              this.betObj = res.data
            } else {
              Toast(res.msg);
            }
            Indicator.close();
          })
          .catch(error => {
            Toast("网络错误");
        });
      }
    },
    mounted(){
      console.log(this.$store.state.matchSelectedList)
      this.nonTouDate()
      this.playt()
    },
    computed: {  
      status() {  
          return this.$store.state.mark_playObj.playutText; 
      }  
    },  
    watch: {
      status(a,b){
        this.fetchData()
      }
    },
    beforeRouteLeave(to, from, next) {
      next()
      this.$store.state.mark_playObj.mark_playBox = false
      this.$store.state.mark_playObj.mark_play = '' 
    }
}