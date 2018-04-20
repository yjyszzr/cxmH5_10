export default {
    name: 'detail',
    data () {
      return {
          dFlag: '1'
      }
    },
    props:[
    	'leagueMatchAsias','leagueMatchEuropes'
    ],
    created(){
      
    },
    mounted(){
        
    },
    methods:{
       deTailTab(c,s){
       	$('.odd_cur').removeClass('odd_cur')
       	c.target.parentElement.className = 'odd_cur'
       	this.dFlag = s
       }
    },
}