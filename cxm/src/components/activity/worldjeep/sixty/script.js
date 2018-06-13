import api from '../../../../fetch/api'
export default {
    name: 'sixty',
    data () {
      return {
        num:0,
       arrLeft: sessionStorage.getItem('arrLeft')?JSON.parse(sessionStorage.getItem('arrLeft')):[],
       arrRight: sessionStorage.getItem('arrRight')?JSON.parse(sessionStorage.getItem('arrRight')):[],
       team8Left: [[{},{}],[{},{}]],
       team8Right: [[{},{}],[{},{}]],
       team4Right: [{},{}],
       team4Left: [{},{}],
       team2Right: '',
       team2Left: '',
       winner: ''
      }
    },
    created(){
      
    },
    methods:{
      teamclick(c){
        this.num++
        if(c.sld=='A1'||c.sld=='B2'){
          if(this.team4Left[0].sld=='A1'||this.team4Left[0].sld=='B2'){
            this.team4Left[0] = c
            if(this.team2Left.sld=='A1'||this.team2Left.sld=='B2'){
              this.team2Left = c
              if(this.winner.sld=='A1'||this.winner.sld=='B2'){
                this.winner = c
              }
            }
          }
          this.team8Left[0][0] = c
        }else if(c.sld=='C1'||c.sld=='D2'){
          if(this.team4Left[0].sld=='C1'||this.team4Left[0].sld=='D2'){
            this.team4Left[0] = c
            if(this.team2Left.sld=='C1'||this.team2Left.sld=='D2'){
              this.team2Left = c
              if(this.winner.sld=='C1'||this.winner.sld=='D2'){
                this.winner = c
              }
            }
          }
          this.team8Left[0][1] = c
        }else if(c.sld=='E1'||c.sld=='F2'){
          if(this.team4Left[1].sld=='E1'||this.team4Left[1].sld=='F2'){
            this.team4Left[1] = c
            if(this.team2Left.sld=='E1'||this.team2Left.sld=='F2'){
              this.team2Left = c
              if(this.winner.sld=='E1'||this.winner.sld=='F2'){
                this.winner = c
              }
            }
          }
          this.team8Left[1][0] = c
        }else if(c.sld=='G1'||c.sld=='H2'){
          if(this.team4Left[1].sld=='G1'||this.team4Left[1].sld=='H2'){
            this.team4Left[1] = c
            if(this.team2Left.sld=='G1'||this.team2Left.sld=='H2'){
              this.team2Left = c
              if(this.winner.sld=='G1'||this.winner.sld=='H2'){
                this.winner = c
              }
            }
          }
          this.team8Left[1][1] = c
        }
        if(c.sld=='A2'||c.sld=='B1'){
          if(this.team4Right[0].sld=='A2'||this.team4Right[0].sld=='B1'){
            this.team4Right[0] = c
            if(this.team2Right.sld=='A2'||this.team2Right.sld=='B1'){
              this.team2Right = c
              if(this.winner.sld=='A2'||this.winner.sld=='B1'){
                this.winner = c
              }
            }
          }
          this.team8Right[0][0] = c
        }else if(c.sld=='C2'||c.sld=='D1'){
          if(this.team4Right[0].sld=='C2'||this.team4Right[0].sld=='D1'){
            this.team4Right[0] = c
            if(this.team2Right.sld=='C2'||this.team2Right.sld=='D1'){
              this.team2Right = c
              if(this.winner.sld=='C2'||this.winner.sld=='D1'){
                this.winner = c
              }
            }
          }
          this.team8Right[0][1] = c
        }else if(c.sld=='E2'||c.sld=='F1'){
          if(this.team4Right[1].sld=='E2'||this.team4Right[1].sld=='F1'){
            this.team4Right[1] = c
            if(this.team2Right.sld=='E2'||this.team2Right.sld=='F1'){
              this.team2Right = c
              if(this.winner.sld=='E2'||this.winner.sld=='F1'){
                this.winner = c
              }
            }
          }
          this.team8Right[1][0] = c
        }else if(c.sld=='G2'||c.sld=='H1'){
          if(this.team4Right[1].sld=='G2'||this.team4Right[1].sld=='H1'){
            this.team4Right[1] = c
            if(this.team2Right.sld=='G2'||this.team2Right.sld=='H1'){
              this.team2Right = c
              if(this.winner.sld=='G2'||this.winner.sld=='H1'){
                this.winner = c
              }
            }
          }
          this.team8Right[1][1] = c
        }
      },
      teamC(c){
        this.num++
        if(c.sld=='A1'||c.sld=='B2'||c.sld=='C1'||c.sld=='D2'){
          if(_.has(this.team8Left[0][0],'name')&&_.has(this.team8Left[0][1],'name')){
            this.team4Left[0] = c
          }
        }else if(c.sld=='E1'||c.sld=='F2'||c.sld=='G1'||c.sld=='H2'){
          if(_.has(this.team8Left[1][0],'name')&&_.has(this.team8Left[1][1],'name')){
            this.team4Left[1] = c
          }
        }
        if(c.sld=='A2'||c.sld=='B1'||c.sld=='C2'||c.sld=='D1'){
          if(_.has(this.team8Right[0][0],'name')&&_.has(this.team8Right[0][1],'name')){
            this.team4Right[0] = c
          }
        }else if(c.sld=='E2'||c.sld=='F1'||c.sld=='G2'||c.sld=='H1'){
          if(_.has(this.team8Right[1][0],'name')&&_.has(this.team8Right[1][1],'name')){
            this.team4Right[1] = c
          }
        }
      },
      teamTwo(c){
        if(_.has(this.team4Right[0],'name')&&_.has(this.team4Right[1],'name')){
          this.team2Right = c
        }
      },
      teamTwoLeft(c){
        if(_.has(this.team4Left[0],'name')&&_.has(this.team4Left[1],'name')){
          this.team2Left = c
        }
      },
      teamOne(c){
        this.winner = c
      }
    },
    mounted(){
      // console.log(this.arrLeft)
      // console.log(this.arrRight)
    }
}