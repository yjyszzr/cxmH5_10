export default {
    name: 'thirtytwo',
    data () {
      return {
          wLidt: []
      }
    },
    created(){
      
    },
    methods:{
     
    },
    mounted(){
        $.ajax({
            url: '../../../../../static/jsonData/world_team.json',
            data:{

            },
            type: 'get',
            success:(res)=>{
                this.wLidt = res
            },
            error:(err)=>{
                console.log(err)
            }
        })
    }
}