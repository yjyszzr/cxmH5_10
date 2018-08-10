import api from '../../../fetch/api'
import {mapState} from 'vuex'
import BScroll from 'better-scroll'
import {Indicator} from 'mint-ui'
import {getCombinationCount} from '../../../util/common'
export default {
    name: 'runchart',
    beforeCreate() {
        Indicator.open()
    },
    data(){
        return {
            runchartTab:[
                '开奖号码','红球走势','蓝球走势','红球冷热','蓝球冷热'
            ],
            h_nums:[],  //保存已选红球号码
            l_nums:[],  //保存已选蓝球号码
            h_scroll: '',  //红球滚动
            s_scroll: '',  //已选滚动
            posx: 0, //滚动横向距离
            posy: 0, //滚动纵向距离
            disabled: true,
            text: `请至少选择<span>5</span>个红球&nbsp;<span>2</span>个蓝球`,
            zhushu: '', //注数
        }
    },
    methods:{
        // 头部返回
        goBack() {
            this.$router.go(-1);
        },
        fetchData(){
            let data={
                compute: this.runchartfilter.compute,
                count: this.runchartfilter.count,
                drop: this.runchartfilter.drop,
                sort: this.runchartfilter.sort
            }
            this.$store.dispatch("getRunchart",data)
        },
        tabClick(i){
            this.$store.commit('DALETOUACTIVE',i+1)
        },
        smjs(c){
            return c<10?'0'+c:c
        },
        hScroll(){
            this.$refs.tabcontent.style.width='30.45rem'
            this.$nextTick(()=>{
                this.h_scroll=new BScroll(this.$refs.tab, {
                    startX:0,
                    click:true,
                    scrollX:true,
                    scrollY:false,
                    eventPassthrough:'vertical'
                })
            })
        },
        sScroll(){
            this.$refs.stabcontent.style.width='10.44rem'
            this.$nextTick(()=>{
                this.s_scroll=new BScroll(this.$refs.stab, {
                    startX:0,
                    click:true,
                    scrollX:true,
                    scrollY:false,
                    eventPassthrough:'vertical'
                })
            })
        },
        fScroll(){
            this.$nextTick(()=>{
                if(this.daletouActive==2){
                    this.$refs.hqrctcontent.style.width='31.95rem'
                }else if(this.daletouActive==3){
                    this.$refs.hqrctcontent.style.width='11.95rem'
                }
                this.f_scroll=new BScroll(this.$refs.hqrct, {
                    click:false,
                    scrollX: true,
                    freeScroll: true,
                    probeType: 3
                })
                this.f_scroll.on('scroll', (pos) => {
                    this.posx = Math.abs(pos.x)
                    this.posy = Math.abs(pos.y)
                })
            })
        },
        tabsClick(c,s){
            if(c.target.className=='tab_item'){
                c.target.className='tab_item tab-active'
                if(s=='h'){
                    this.h_nums.push(c.target.innerText)
                }else{
                    this.l_nums.push(c.target.innerText)
                }
            }else{
                c.target.className='tab_item'
                if(s=='h'){
                    this.h_nums = _.difference(this.h_nums,[c.target.innerText]);
                }else{
                    this.l_nums = _.difference(this.l_nums,[c.target.innerText]);
                }
            }
            if(this.l_nums.length>=2&&this.h_nums.length>=5){
                this.disabled = false
                this.zhushu =  getCombinationCount(this.h_nums.length, 5) * getCombinationCount(this.l_nums.length, 2)
                this.text = `共计<span>${this.zhushu}</span>注&nbsp;合计<span style='color:#eb1c25;'>${this.zhushu*2}</span>元`
            }else{
                this.disabled = true
                this.text = `请至少选择<span>5</span>个红球&nbsp;<span>2</span>个蓝球`
            }
        },
        clearNums(){
            $('.tab-active').removeClass('tab-active')
            this.h_nums = []
            this.l_nums = []
            this.disabled = true
            this.text = `请至少选择<span>5</span>个红球&nbsp;<span>2</span>个蓝球`
        },
        goTouzhu(){
            let obj={},list=[],msg={}
            this.h_nums.forEach(item => {
                let obj1={}
                obj1.num = item
                obj1.type = 'redBall'
                list.push(obj1)
            });
            this.l_nums.forEach(item => {
                let obj2={}
                obj2.num = item
                obj2.type = 'blueBall'
                list.push(obj2)
            });
            let danfn = '单式'
            if(this.l_nums.length+this.h_nums.length>7){
                danfn = '复式'
            }
            msg.danFn=danfn
            msg.bei=1
            msg.zhuNum=this.zhushu
            msg.money=this.zhushu*2
            msg.baseMoney=this.zhushu*2
            obj.msg = msg
            obj.ballType = 'biaozhun' 
            obj.ballList = list
            localStorage.setItem('conformBallList',JSON.stringify(obj))
            this.$router.push({
                path: '/lottery/daletou/touZhuConfirm'
            })
        }
    },
    watch:{
        posx(a,b){
            this.$refs.hqrtop.style.transform = 'translateX(-'+a+'px)'
        },
        posy(a,b){
            if(this.$refs.hqlist){
                this.$refs.hqlist.style.transform = 'translateY(-'+a+'px)'
            }
        },
        daletouActive(a,b){
            if(this.f_scroll&&this.$refs.hqlist){
                this.$refs.hqrtop.style.transform = 'translateX(0px)'
                this.$refs.hqlist.style.transform = 'translateY(0px)'
                this.f_scroll.scrollTo(0,0)
            }
        }
    },
    computed: {
      ...mapState({
           daletouActive: state => state.daletouActive,
           runchartfilter: state => state.runchartfilter,
           runchartData: state => state.runchartData
      })
    },
    mounted(){
        this.fetchData()
    },
    beforeUpdate(){
        if(this.daletouActive==2||this.daletouActive==3){
            this.hScroll()
            this.sScroll()
            this.fScroll()
        }
    }
}