//import api from '../../../../fetch/api'
import { MessageBox,Toast } from 'mint-ui'
import {
  Indicator
} from 'mint-ui'
import {means} from '../../../../util/common'
export default {
    name: 'worldDetail',
    data(){
        return {
            id: this.$route.query.id,
            ycMoney: [],
            betIds: [],
            showtitle: this.$route.query.showtitle,
        }
    },
    mounted(){
        window.getCxmTitle = function(){
            return '世界杯'
        }
        this.fetchData()
    },
    methods:{
        markClick(c){
            _.unset(c,'selected');
            this.betIds = []
            this.ycMoney  = []
            this.fetchData()
            this.$store.dispatch("changefsNum", '0');
        },
        mupClick() {
			this.$store.state.mark_playObj.mark_playBox = true
			this.$store.state.mark_playObj.mark_play = '2'
        },
        xySelectedClick(){
            if(this.$refs.xySelected.className=='icon-icon-29 iconfont xySelected'){
              this.$refs.xySelected.className = 'icon-icon-29 iconfont'
            }else{
              this.$refs.xySelected.className = 'icon-icon-29 iconfont xySelected'
            }
        },
        deleteClear(){
            MessageBox.confirm('',{message:'您确认清空已选赛事？',title:'提示',closeOnClickModal:false}).then(action => {
                if(this.id=='1'){
                    _.forEach(this.fsList, function(value, key) {
                        _.unset(value,'selected');
                    });
                }else{
                    _.forEach(this.firstList, function(value, key) {
                        _.unset(value,'selected');
                    });
                }
                this.$store.dispatch("changefsNum", '2');
                this.betIds = []
                this.ycMoney  = []
                this.fetchData()
            },action => {
      
            })
        },
        saveGo() {
			if(this.$refs.xySelected.className == 'icon-icon-29 iconfont'){
				Toast('尊敬的用户,购彩需同意并接受《彩小秘投注服务协议》')
				return
            }else if(this.fsNum<=0){
                Toast('投注选项不能为空')
				return
            }else if(this.mupNum<=0){
                Toast('投注倍数不能为0')
				return
            }else if(this.fsNum>=10000){
                Toast('总注数不得超过10000注')
				return
            }else if(this.fsNum*2*this.mupNum>=20000){
                Toast('单注彩票金额不得超过20000元')
				return
            }
            let data = {
                'betIds': this.betIds.join(','),
                'bonusId': '',
                'isGj': this.id,
                'lotteryClassifyId': '1',
                'lotteryPlayClassifyId': '8',
                'times': this.mupNum
            }
            this.$store.state.matchSaveInfo = data
            if(this.$route.query.showtitle=='1'){
                means(data).paydata
                location.href = '/freebuy/payment?cxmxc=scm&type=10&extparam=paydata'
            }else{
                this.$router.push({
                    path: '/freebuy/payment',
                    replace: false
                })
            }
        },
        fetchData(){
            if(this.id=='0'){
                this.$store.state.world_cupObj.firstList.forEach(item => {
                    if(item.selected=='sld'){
                        this.ycMoney.push(item.betOdds)
                        this.betIds.push(item.gjId)
                    }
                });
            }else{
                this.$store.state.world_cupObj.fsList.forEach(item => {
                    if(item.selected=='sld'){
                        this.ycMoney.push(item.betOdds)
                        this.betIds.push(item.gyjId)
                    }
                });
            }
            this.ycMoney.sort((a,b)=>{
                return a-b;
            })
        }
    },
    computed: {
        firstList() {
          return this.$store.state.world_cupObj.firstList;
        },
        fsList() {
            return this.$store.state.world_cupObj.fsList;
        },
        fsNum() {
            return this.$store.state.world_cupObj.fsNum;
        },
        mupNum() {
            return this.$store.state.mark_playObj.mupNum
        }
    },
	beforeRouteLeave(to, from, next) {
        next()
        if(to.path.indexOf('world_matchList')!=-1){
            this.$store.state.world_cupObj.world_tab = true
        }
	}
}