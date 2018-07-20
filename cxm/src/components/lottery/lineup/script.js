import api from '../../../fetch/api'
export default {
    name: 'lineup',
    data(){
        return {
            lineupinfo: {},
            h_goalkeeper: [],
            h_guard:[],
            h_halfback:[],
            h_centreHalfback: [],
            h_tackle: [],
            v_goalkeeper: [],
            v_guard:[],
            v_halfback:[],
            v_centreHalfback: [],
            v_tackle: []
        }
    },
    mounted(){
        let data = {
            "matchId":this.$route.query.id
        }
        api.lineupinfo(data)
        .then(res => {
            if (res.code == 0) {
                this.lineupinfo = res.data
                res.data.hlineupPersons.forEach(item => {
                    if(item.positionX=='GK'){
                        this.h_goalkeeper.push(item)
                    }else if(item.positionX=='D1'||item.positionX=='D2'){
                        this.h_guard.push(item)
                    }else if(item.positionX=='DM'||item.positionX=='M'){
                        this.h_halfback.push(item)
                    }else if(item.positionX=='AM'){
                        this.h_centreHalfback.push(item)
                    }else if(item.positionX=='A'){
                        this.h_tackle.push(item)
                    }
                });
                res.data.alineupPersons.forEach(item => {
                    if(item.positionX=='GK'){
                        this.v_goalkeeper.push(item)
                    }else if(item.positionX=='D1'||item.positionX=='D2'){
                        this.v_guard.push(item)
                    }else if(item.positionX=='DM'||item.positionX=='M'){
                        this.v_halfback.push(item)
                    }else if(item.positionX=='AM'){
                        this.v_centreHalfback.push(item)
                    }else if(item.positionX=='A'){
                        this.v_tackle.push(item)
                    }
                });
            }
        })
    }
}