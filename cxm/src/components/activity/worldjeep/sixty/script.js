import api from '../../../../fetch/api'
export default {
    name: 'sixty',
    data () {
      return {
        num:0,
       arrLeft: sessionStorage.getItem('arrLeft')?JSON.parse(sessionStorage.getItem('arrLeft')):[],
       arrRight: sessionStorage.getItem('arrRight')?JSON.parse(sessionStorage.getItem('arrRight')):[],
       team8Left: [[{},{}],[{},{}]],
       team8Right: [[{},{}],[{},{}]]
      }
    },
    created(){
      
    },
    methods:{
      teamclick(c){
        this.num++
        if(c.sld=='A1'||c.sld=='B2'){
          this.team8Left[0][0] = c
        }else if(c.sld=='C1'||c.sld=='D2'){
          this.team8Left[0][1] = c
        }else if(c.sld=='E1'||c.sld=='F2'){
          this.team8Left[1][0] = c
        }else if(c.sld=='G1'||c.sld=='H2'){
          this.team8Left[1][1] = c
        }
        if(c.sld=='A2'||c.sld=='B1'){
          this.team8Right[0][0] = c
        }else if(c.sld=='C2'||c.sld=='D1'){
          this.team8Right[0][1] = c
        }else if(c.sld=='E2'||c.sld=='F1'){
          this.team8Right[1][0] = c
        }else if(c.sld=='G2'||c.sld=='H1'){
          this.team8Right[1][1] = c
        }
      }
    },
    mounted(){
      
    }
}