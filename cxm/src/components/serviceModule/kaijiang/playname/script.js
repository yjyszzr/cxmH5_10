import api from '../../../../fetch/api'
import { Toast,Indicator } from 'mint-ui'
import Loading from "../../../public/loading/loading.vue";
import datefilter from '../../../../util/datefilter'
export default {
    name: 'kj-daletou',
    data(){
        return {
            ballList: [],  //球列表
            ballObj: {}, //球队象
            dltobj: {}, //大乐透对象
            dltList: [], //大乐透列表
            title: '',  //头部
            page: 1,
            dateStr: '',
            trFlag: false,
            isbool: true,
            params: this.$route.params.playname,
            pickerValue: new Date(),
            playType: this.$route.query.lotteryId
        }
    },
    beforeCreate() {
        Indicator.open()
    },
    components: {
        "v-loading": Loading
    },
    methods:{
        goBack(){
            this.$router.go(-1)
        },
        fetchData() {
            let pam = {
              lotteryClassify: this.playType,
              page: this.page,
              size: 20
            };
            api.szcDetailList(pam)
            .then(res => {
                if(res.code == 0 ){
                    setTimeout(() => {
                        this.trFlag = false;
                        this.isbool = true;
                        this.title = res.data.lotteryName
                        this.dltobj = res.data.szcPrizePageInfo
                        this.dltList = this.dltList.concat(res.data.szcPrizePageInfo.list);
                      }, 800);
                }
            })
        },
        async datefetchData(c) {
            let pam={
                dateStr: c,
                lotteryClassify: this.playType
            }
            api.queryJcOpenPrizesByDate(pam)
            .then(res => {
                if(res.code == 0 ){
                    this.title = res.data.lotteryName
                    this.ballList = res.data.list,
                    this.ballObj = res.data
                }
            })
        },
        handleScroll(e) {
            if (
              document.querySelector("body").scrollHeight -
                document.querySelector("body").clientHeight -
                window.pageYOffset <=
                100 &&
              this.isbool == true
            ) {
              if (this.dltobj.isLastPage == "false") {
                this.page++;
                this.fetchData();
                this.trFlag = true;
                this.isbool = false;
              }
            }
        },
        goDltdetail(c){
            this.$router.push({
                path: this.$route.path+'/'+c.termNum,
                query:{
                    lotteryId: this.playType
                }
            })
        },
        openPicker() {
            this.$refs.picker.open();
        },
        handleConfirm(c){
            this.datefetchData(datefilter(c,2))
        }
    },
    mounted(){
        if(this.params!='jingcailanqiu'&&this.params!='jingcaizuqiu'){
            this.fetchData()
            window.addEventListener("scroll", this.handleScroll);
        }else{
            this.datefetchData('')
        }
    },
    destroyed() {
        window.removeEventListener("scroll", this.handleScroll);
    }
}