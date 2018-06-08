import api from '../../../../fetch/api'
import {Indicator, Toast} from 'mint-ui'
export default {
    name: 'popupLeft',
    data(){
        return {
            value: '',
            list: [],
            fixed: false
        }
    },
    beforeCreate() {
        Indicator.open()
    },
    methods:{
        popClick(c){
            this.$router.go(-1)
            this.$store.state.pop = c
            // sessionStorage.setItem('pop',JSON.stringify(c))
        },
        fetchData(){
            api.getChannelList({
                channelName: this.value
            })
            .then(res => {
                if (res.code == 0) {
                    res.data.forEach(item => {
                        let obj = {}
                        obj.name = item.channel_name
                        obj.id = item.channel_id
                        this.list.push(obj)
                    });
                }
            })
        }
    },
    mounted(){
        this.fixed = true
        this.fetchData()
    },  
    watch:{
        value(a,b){
            this.list = []
            this.fetchData(a)
        }
    }
    // computed: {  
    //     filteredData: function () {  
    //         var self = this;  
    //         return this.list.filter(function (item) {  
    //             return item.name.indexOf(self.value) !== -1;  
    //         }) 
    //     }  
    // }  
}