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
        teamClick(c,s,k){
            if(c.target.parentElement.className=='seld'){
                c.target.parentElement.className=''
                s.forEach(item => {
                    // if(item.sld==k.name+'1'){
                    //     item.sld
                    // }else if(item.sld==k.name+'2'){

                    // }
                });
            }else{
                c.target.parentElement.className='seld'
            }       
        }
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