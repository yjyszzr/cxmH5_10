import api from '../../../../fetch/api'
export default {
    name: 'quickSms',
    data(){
        return {
            numbers: ''
        }
    },
    methods:{
        
    },
    watch:{
        numbers(a,b){
            console.log(a)
        }
    }
}