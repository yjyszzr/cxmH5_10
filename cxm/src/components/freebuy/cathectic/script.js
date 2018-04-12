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
        betObj: {},
        matchBetPlays: [],
        disable: false,
        danNUm: 0,  //统计胆数量
        matchSave: {},  //接口数据保存
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
      betObjFun(){
        this.betObj.betNum = 0
            this.betObj.times = 0
            this.betObj.money = 0.0
            this.betObj.minBonus = 0.00
            this.betObj.maxBonus = 0.00
            this.disable = true
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
        for (let [key, value] of this.matchSelectObj) {
          if (key == c) {
            this.matchSelectObj.delete(key)
          }
        }
        this.nonTouDate()
        if(this.$store.state.matchSelectedList.length>1){
          this.playt()
        }else if(this.$store.state.matchSelectedList.length==1){
          if(this.$store.state.matchSelectedList[0].matchPlays[0].single!='1'){
            this.betObjFun()
          }else{
            this.playt()
          }
        }else{
          this.betObjFun()
        }
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
          if(arr.length==1&&arr.indexOf('0')==-1){
            for(let i=1;i<=arr.length;i++){
              if(i<=8){
                this.$store.state.mark_playObj.playtList.push(i+'&'+ 1)
              }
            }
          }else{
            for(let i=2;i<=arr.length;i++){
              if(i<=8){
                this.$store.state.mark_playObj.playtList.push(i+'&'+ 1)
              }
            }
          }
        }
        this.$store.state.mark_playObj.playutText.push(this.$store.state.mark_playObj.playtList[this.$store.state.mark_playObj.playtList.length-1])
      },
      selectedClick(c,s){
        let n = this.$store.state.matchSelectedList  //初始化比赛条目
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
          } else {
            this.arr.delete('jqs:'+s.cellCode)
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
          } else {
            this.arr.add('jqs:'+s.cellCode)
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
        if(this.$store.state.matchSelectedList.length>1){
          Indicator.open()
          if(n.length>this.$store.state.matchSelectedList.length){
            this.playt()
          }else{
            this.fetchData()
          }
        }else if(this.$store.state.matchSelectedList.length==1){
          if(this.$store.state.matchSelectedList[0].matchPlays[0].single!='1'){
            this.betObjFun()
          }else{
            this.playt()
          }
        }else{
          this.betObjFun()
        }
      },
      cgClick(){
        this.$store.state.mark_playObj.mark_playBox = true
        this.$store.state.mark_playObj.mark_play = '1'       
      },
      mupClick(){
        this.$store.state.mark_playObj.mark_playBox = true
        this.$store.state.mark_playObj.mark_play = '2'  
      },
      fetchData(c){
        this.matchBetPlays = []
        this.$store.state.matchSelectedList.forEach(item => {
          let obj = {}
          obj.isDan = 0
          if(c == 'dan'){
            if(this.danNUm>=Number(this.$store.state.mark_playObj.playutText[0].split('&')[0]-1)){
              if(item.selectedDan==false){
                item.isDan = true
              }
            }else{
              item.isDan = false
            }
            if(item.selectedDan==false){
              obj.isDan = 0
            }else{
              obj.isDan = 1
            }
          }
          if(c=='watch'){
            if(this.$store.state.matchSelectedList.length==Number(this.$store.state.mark_playObj.playutText[this.$store.state.mark_playObj.playutText.length-1].split('&')[0])){
              item.isDan = true
            }else{
              item.isDan = false
            }
            item.selectedDan = false
          }
          obj.changci = item.changci
          obj.matchId = item.matchId
          obj.matchTime = item.matchTime
          obj.playCode = item.playCode
          obj.matchTeam = item.homeTeamName+ 'VS' + item.visitingTeamName
          obj.lotteryClassifyId = this.$route.query.lottoyId
          obj.lotteryPlayClassifyId = this.$route.query.classlootoyId
          let matchBetCells = [],matchBetCellsObj = {}
          let arr1 = []
          for(let i=0;i<item.myspf.length;i++){
            let obj1 = {}
            if(item.myspf[i]==3){
              obj1.cellName = item.matchPlays[0].homeCell.cellName
              obj1.cellCode = item.matchPlays[0].homeCell.cellCode
              obj1.cellOdds = item.matchPlays[0].homeCell.cellOdds
              obj1.cellSons = item.matchPlays[0].homeCell.cellSons
            }else if(item.myspf[i]==1){
              obj1.cellName = item.matchPlays[0].flatCell.cellName
              obj1.cellCode = item.matchPlays[0].flatCell.cellCode
              obj1.cellOdds = item.matchPlays[0].flatCell.cellOdds
              obj1.cellSons = item.matchPlays[0].flatCell.cellSons
            }else if(item.myspf[i]==0){
              obj1.cellName = item.matchPlays[0].visitingCell.cellName
              obj1.cellCode = item.matchPlays[0].visitingCell.cellCode
              obj1.cellOdds = item.matchPlays[0].visitingCell.cellOdds
              obj1.cellSons = item.matchPlays[0].visitingCell.cellSons
            } else {
              for(let j=0;j<item.matchPlays[0].matchCells.length;j++){
                if(item.myspf[i].split(':')[1]==item.matchPlays[0].matchCells[j].cellCode){
                  obj1.cellName = item.matchPlays[0].matchCells[j].cellName
                  obj1.cellCode = item.matchPlays[0].matchCells[j].cellCode
                  obj1.cellOdds = item.matchPlays[0].matchCells[j].cellOdds
                  obj1.cellSons = item.matchPlays[0].matchCells[j].cellSons
                }
              }
            }
            arr1.push(obj1)
          }
          matchBetCellsObj.betCells = arr1
          matchBetCellsObj.playType = item.matchPlays[0].playType
          matchBetCells.push(matchBetCellsObj)
          obj.matchBetCells = matchBetCells
          this.matchBetPlays.push(obj)
        })
        let data = {
          'betType': this.$store.state.mark_playObj.playutText.join(',').replace(/&/g,''),
          'bonusId': '',
          'lotteryClassifyId': this.$route.query.lottoyId,
          'lotteryPlayClassifyId': this.$route.query.classlootoyId,
          'times': this.$store.state.mark_playObj.mupNum,
          'playType': this.$route.query.playType,
          'matchBetPlays': this.matchBetPlays
        };
        this.matchSave = data
        api
          .getBetInfo(data)
          .then(res => {
            if (res.code == 0) {
              this.betObj = res.data
            } else {
              Toast(res.msg);
            }
            Indicator.close();
          })
          .catch(error => {
            Toast("网络错误");
        });
      },
      danClick(c,s){
        //console.log(c)
        if(s.target.id=='isDan'){
          s.target.id=''
          c.selectedDan = false
          this.danNUm --
        }else{
          s.target.id='isDan'
          c.selectedDan = true
          this.danNUm ++
        }
        this.fetchData('dan')
      },
      saveGo(){
        this.$store.state.matchSaveInfo = this.matchSave
        this.$router.push({
          path: '/freebuy/payment',
          replace: false
        })
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
      },
      mupStatus(){
          return this.$store.state.mark_playObj.mupNum; 
      }
    },  
    watch: {
      status(a,b){
        this.fetchData('watch')
        for(let i=0;i<this.$refs.isdan.length;i++){
          this.$refs.isdan[i].id = ''
        }
        this.danNUm = 0
      },
      mupStatus(a,b){
        this.fetchData()
      }
    },
    beforeRouteLeave(to, from, next) {
      next()
      this.$store.state.mark_playObj.mark_playBox = false
      this.$store.state.mark_playObj.mark_play = '' 
      this.$store.state.mark_playObj.mupNum = '5'
      localStorage.setItem('tab',true)
    }
}