import api from '../../../../fetch/api'
export default {
    name: 'quickSms',
    data(){
        return {
            numbers: ''
        }
    },
    props:[
        'amt'
    ],
    methods:{
        reset(){
            this.numbers = ''
        },
        bankClick(){
            this.$store.dispatch("getMarkplay",'banklist')
            this.$store.dispatch("getMarkplayBox",true)
        }
    }
}
