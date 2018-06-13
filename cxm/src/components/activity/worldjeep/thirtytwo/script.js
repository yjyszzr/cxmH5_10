export default {
    name: 'thirtytwo',
    data () {
      return {
          wLidt: [],
          num: 0,
          disable: true
      }
    },
    created(){
      
    },
    methods:{
        teamClick(c,s,k){
            this.num++
            if(c.target.parentElement.className=='seld'){
                c.target.parentElement.className=''
                if(k.status == k.name+'1'||k.status == k.name+'2'){
                    _.unset(k,'status');
                    _.unset(s,'sld');
                }else{
                    if(s.sld==k.name+'1'){
                        k.status = k.name+'2'
                    }else if(s.sld==k.name+'2'){
                        k.status = k.name+'1'
                    }
                    _.unset(s,'sld');
                }
            }else{
                if(!k.status||k.status.split(',').length<2){
                    c.target.parentElement.className='seld'
                    if(k.status){
                        if(k.status == k.name+'1'){
                            s.sld = k.name+'2'
                            k.status+= ','+k.name+'2'
                        }else{
                            s.sld = k.name+'1'
                            k.status+= ','+k.name+'1'
                        }
                    }else{
                        k.status = k.name+'1'
                        s.sld = k.name+'1'
                    }
                }
            }   
            if($('.seld').length>=16){
                this.disable = false
            }else{
                this.disable = true
            }  
        },
        btnClick(){
            let arr = []
            this.wLidt.forEach(item => {
                for(let i=0;i<item.list.length;i++){
                    if(item.list[i].sld){
                        arr.push(item.list[i])
                    }
                }
            });
            let arrLeft = [],arrRight=[]
            let arr1 = [],arr2 = [],arr3 = [],arr4 = [],arr5 = [],arr6 = [],arr7 = [],arr8 = []
            arr.forEach(item=>{
                if(item.sld=='A1'||item.sld=='B2'){
                    arr1.push(item)
                }else if(item.sld=='A2'||item.sld=='B1'){
                    arr2.push(item)
                }else if(item.sld=='C1'||item.sld=='D2'){
                    arr3.push(item)
                }else if(item.sld=='C2'||item.sld=='D1'){
                    arr4.push(item)
                }else if(item.sld=='E1'||item.sld=='F2'){
                    arr5.push(item)
                }else if(item.sld=='E2'||item.sld=='F1'){
                    arr6.push(item)
                }else if(item.sld=='G1'||item.sld=='H2'){
                    arr7.push(item)
                }else if(item.sld=='G2'||item.sld=='H1'){
                    arr8.push(item)
                }
            })
            arrLeft = [arr1,arr3,arr5,arr7]
            arrRight = [arr2,arr4,arr6,arr8]
            sessionStorage.setItem('arrLeft',JSON.stringify(arrLeft))
            sessionStorage.setItem('arrRight',JSON.stringify(arrRight))
            this.$router.push({
                path: '/activity/world/sixty',
                query:{
                  from: 'three'  
                }
            })
        }
    },
    mounted(){
        document.title='世界杯冠军之路'
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