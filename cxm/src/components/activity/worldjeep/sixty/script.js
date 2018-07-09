import api from '../../../../fetch/api'
import { MessageBox,Indicator,Toast } from 'mint-ui';
export default {
  name: 'sixty',
  data() {
    return {
      num: 0,
      arrLeft: [],
      arrRight: [],
      team8Left: [
        [{}, {}],
        [{}, {}]
      ],
      team8Right: [
        [{}, {}],
        [{}, {}]
      ],
      team4Right: [{}, {}],
      team4Left: [{}, {}],
      team2Right: '',
      team2Left: '',
      winner: '',
      teamObj: sessionStorage.getItem('teamObj')?JSON.parse(sessionStorage.getItem('teamObj')):'',
      from: this.$route.query.from,
      show: false,
    }
  },
  created() {
    this.show = true
  },
  methods: {
    teamclick(c) {
      this.num++
        if (c.sld == 'A1' || c.sld == 'B2') {
          if (this.team4Left[0].sld == 'A1' || this.team4Left[0].sld == 'B2') {
            this.team4Left[0] = c
            if (this.team2Left.sld == 'A1' || this.team2Left.sld == 'B2') {
              this.team2Left = c
              if (this.winner.sld == 'A1' || this.winner.sld == 'B2') {
                this.winner = c
              }
            }
          }
          this.team8Left[0][0] = c
        } else
      if (c.sld == 'C1' || c.sld == 'D2') {
        if (this.team4Left[0].sld == 'C1' || this.team4Left[0].sld == 'D2') {
          this.team4Left[0] = c
          if (this.team2Left.sld == 'C1' || this.team2Left.sld == 'D2') {
            this.team2Left = c
            if (this.winner.sld == 'C1' || this.winner.sld == 'D2') {
              this.winner = c
            }
          }
        }
        this.team8Left[0][1] = c
      } else if (c.sld == 'E1' || c.sld == 'F2') {
        if (this.team4Left[1].sld == 'E1' || this.team4Left[1].sld == 'F2') {
          this.team4Left[1] = c
          if (this.team2Left.sld == 'E1' || this.team2Left.sld == 'F2') {
            this.team2Left = c
            if (this.winner.sld == 'E1' || this.winner.sld == 'F2') {
              this.winner = c
            }
          }
        }
        this.team8Left[1][0] = c
      } else if (c.sld == 'G1' || c.sld == 'H2') {
        if (this.team4Left[1].sld == 'G1' || this.team4Left[1].sld == 'H2') {
          this.team4Left[1] = c
          if (this.team2Left.sld == 'G1' || this.team2Left.sld == 'H2') {
            this.team2Left = c
            if (this.winner.sld == 'G1' || this.winner.sld == 'H2') {
              this.winner = c
            }
          }
        }
        this.team8Left[1][1] = c
      }
      if (c.sld == 'A2' || c.sld == 'B1') {
        if (this.team4Right[0].sld == 'A2' || this.team4Right[0].sld == 'B1') {
          this.team4Right[0] = c
          if (this.team2Right.sld == 'A2' || this.team2Right.sld == 'B1') {
            this.team2Right = c
            if (this.winner.sld == 'A2' || this.winner.sld == 'B1') {
              this.winner = c
            }
          }
        }
        this.team8Right[0][0] = c
      } else if (c.sld == 'C2' || c.sld == 'D1') {
        if (this.team4Right[0].sld == 'C2' || this.team4Right[0].sld == 'D1') {
          this.team4Right[0] = c
          if (this.team2Right.sld == 'C2' || this.team2Right.sld == 'D1') {
            this.team2Right = c
            if (this.winner.sld == 'C2' || this.winner.sld == 'D1') {
              this.winner = c
            }
          }
        }
        this.team8Right[0][1] = c
      } else if (c.sld == 'E2' || c.sld == 'F1') {
        if (this.team4Right[1].sld == 'E2' || this.team4Right[1].sld == 'F1') {
          this.team4Right[1] = c
          if (this.team2Right.sld == 'E2' || this.team2Right.sld == 'F1') {
            this.team2Right = c
            if (this.winner.sld == 'E2' || this.winner.sld == 'F1') {
              this.winner = c
            }
          }
        }
        this.team8Right[1][0] = c
      } else if (c.sld == 'G2' || c.sld == 'H1') {
        if (this.team4Right[1].sld == 'G2' || this.team4Right[1].sld == 'H1') {
          this.team4Right[1] = c
          if (this.team2Right.sld == 'G2' || this.team2Right.sld == 'H1') {
            this.team2Right = c
            if (this.winner.sld == 'G2' || this.winner.sld == 'H1') {
              this.winner = c
            }
          }
        }
        this.team8Right[1][1] = c
      }
    },
    teamC(c) {
      this.num++
        if (c.sld == 'A1' || c.sld == 'B2' || c.sld == 'C1' || c.sld == 'D2') {
          if (_.has(this.team8Left[0][0], 'name') && _.has(this.team8Left[0][1], 'name')) {
            this.team4Left[0] = c
            if(this.team2Left.sld == 'A1' || this.team2Left.sld == 'B2'||this.team2Left.sld == 'C1' || this.team2Left.sld == 'D2'){
              this.team2Left = c
              if (this.winner.sld == 'A1' || this.winner.sld == 'B2'||this.winner.sld == 'C1'||this.winner.sld == 'D2') {
                this.winner = c
              }
            }
          }
        } else
      if (c.sld == 'E1' || c.sld == 'F2' || c.sld == 'G1' || c.sld == 'H2') {
        if (_.has(this.team8Left[1][0], 'name') && _.has(this.team8Left[1][1], 'name')) {
          this.team4Left[1] = c
          if(this.team2Left.sld == 'E1' || this.team2Left.sld == 'F2'||this.team2Left.sld == 'G1' || this.team2Left.sld == 'H2'){
            this.team2Left = c
            if (this.winner.sld == 'E1' || this.winner.sld == 'F2'||this.winner.sld == 'G1'||this.winner.sld == 'H2') {
              this.winner = c
            }
          }
        }
      }
      if (c.sld == 'A2' || c.sld == 'B1' || c.sld == 'C2' || c.sld == 'D1') {
        if (_.has(this.team8Right[0][0], 'name') && _.has(this.team8Right[0][1], 'name')) {
          this.team4Right[0] = c
          if(this.team2Right.sld == 'A2' || this.team2Right.sld == 'B1'||this.team2Right.sld == 'C2' || this.team2Right.sld == 'D1'){
            this.team2Right = c
            if (this.winner.sld == 'A2' || this.winner.sld == 'B1'||this.winner.sld == 'C2'||this.winner.sld == 'D1') {
              this.winner = c
            }
          }
        }
      } else if (c.sld == 'E2' || c.sld == 'F1' || c.sld == 'G2' || c.sld == 'H1') {
        if (_.has(this.team8Right[1][0], 'name') && _.has(this.team8Right[1][1], 'name')) {
          this.team4Right[1] = c
          if(this.team2Right.sld == 'G2' || this.team2Right.sld == 'H1'||this.team2Right.sld == 'E2' || this.team2Right.sld == 'F1'){
            this.team2Right = c
            if (this.winner.sld == 'G2' || this.winner.sld == 'H1'||this.winner.sld == 'E2'||this.winner.sld == 'F1') {
              this.winner = c
            }
          }
        }
      }
    },
    teamTwo(c) {
      if (_.has(this.team4Right[0], 'name') && _.has(this.team4Right[1], 'name')) {
        if (this.winner.sld == 'G2' || this.winner.sld == 'H1'||this.winner.sld == 'E2'||this.winner.sld == 'F1'||this.winner.sld == 'A2' || this.winner.sld == 'B1'||this.winner.sld == 'C2'||this.winner.sld == 'D1') {
          this.winner = c
        }
        this.team2Right = c
      }
    },
    teamTwoLeft(c) {
      if (_.has(this.team4Left[0], 'name') && _.has(this.team4Left[1], 'name')) {
        if (this.winner.sld == 'E1' || this.winner.sld == 'F2'||this.winner.sld == 'G1'||this.winner.sld == 'H2'||this.team2Left.sld == 'A1' || this.team2Left.sld == 'B2'||this.team2Left.sld == 'C1' || this.team2Left.sld == 'D2') {
          this.winner = c
        }
        this.team2Left = c
      }
    },
    teamOne(c) {
      if(this.team2Left.name&&this.team2Right.name){
        this.winner = c
      }
    },
    close(){
      this.show = false
    },
    submitPlan() {
      Indicator.open()
      let sixtyList = _.flatten(_.concat(this.arrLeft,this.arrRight));
      let eightList = _.flatten(_.concat(this.team8Left,this.team8Right));
      let fourList = _.flatten(_.concat(this.team4Left,this.team4Right));
      let twoList = [this.team2Left,this.team2Right]
      let str = '16|',str1 = '8|',str2 = '4|',str3 = '2|',str4 = '1|'
      sixtyList.forEach(item => {
        str += `${item.sld}:${item.id},`
      });
      eightList.forEach(item => {
        str1 += `${item.sld}:${item.id},`
      });
      fourList.forEach(item => {
        str2 += `${item.sld}:${item.id},`
      });
      twoList.forEach(item => {
        str3 += `${item.sld}:${item.id},`
      });
      str = str.substring(0,str.length - 1)+';'
      str1 = str1.substring(0,str1.length - 1)+';'
      str2 = str2.substring(0,str2.length - 1)+';'
      str3 = str3.substring(0,str3.length - 1)+';'
      str4+= `${this.winner.sld}:${this.winner.id}`
      if(this.from=='worldenter'){
        var planStrParam = str1+str2+str3+str4
      }else{
        var planStrParam = str+str1+str2+str3+str4
      }
      let data = {
        planStrParam: planStrParam
      }
      api.worldCupPlanadd(data)
        .then(res => {
          if (res.code == 0) {
            Toast('提交成功')
            this.$router.push({
              path: '/activity/world/record'
            })
          }
        })
    }
  },
  mounted() {
    setTimeout(()=>{
      this.show = false
    },3000)
    if(this.from=='worldenter'){
      let arr1 = [],arr2 = []
      arr1 = this.teamObj[0].sixteenGroupTwoList
      arr2 = this.teamObj[1].sixteenGroupTwoList
      arr1.forEach(item=>{
        this.arrLeft.push(item.wcContryList)
      })
      arr2.forEach(item=>{
        this.arrRight.push(item.wcContryList)
      })
    }else{
      this.arrLeft = JSON.parse(sessionStorage.getItem('arrLeft'))
      this.arrRight = JSON.parse(sessionStorage.getItem('arrRight'))
    }
  },
  beforeRouteLeave(to, from, next) {
    if(to.path=='/activity/world/thirtytwo'){
      to.meta.keepAlive = true
    }
    next()
  }
}