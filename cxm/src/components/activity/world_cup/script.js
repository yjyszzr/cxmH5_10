import {means} from '../../../util/common'
import api from '../../../fetch/api'
import {Indicator, Toast} from 'mint-ui'
import informal from '../../public/informal/informalList'

export default {
    name: 'world_cup',
    data() {
        return {
            token: '',
            page: 1,
            findList: [],
            trFlag: true,
            cxLoadFlag: false,
            isbool: true,
            findObj: {},
        }
    },
    beforeCreate() {
        Indicator.open()
    },
    components: {
        "v-informal": informal
    },
    mounted() {
        document
            .querySelector("#content")
            .addEventListener("scroll", this.handleScroll);
        this.fetchData()
        means('世界杯').isTitle
    },
    methods:{
        fetchData(){
            let data = {
                extendCat: '4',
                page: this.page,
                size: 20
            }
            api.findList(data)
                .then(res => {
                    if (res.code == 0) {
                        this.findObj = res.data
                        if (this.page == 1) {
                            this.findList = this.findList.concat(res.data.dlArticlePage.list);
                            this.trFlag = false
                        } else {
                            setTimeout(() => {
                                this.trFlag = false;
                                this.isbool = true;
                                this.findList = this.findList.concat(res.data.dlArticlePage.list);
                            }, 800);
                        }
                    }
                })
                .catch(err=>{
                    setTimeout(() => {
                        this.trFlag = false;
                        this.cxLoadFlag = true;
                    }, 800);
                })

        },
        cxLoadClick(){
            this.trFlag = true;
            this.cxLoadFlag = false
            this.fetchData()
        },
        handleScroll(e) {
            if (
                document.querySelector("#content").scrollHeight -
                document.querySelector("#content").clientHeight -
                document.querySelector("#content").scrollTop <=
                0 &&
                this.isbool == true
            ) {
                if (this.findObj.dlArticlePage.isLastPage == "false") {

                    this.page++;
                    this.fetchData();
                    this.trFlag = true;
                    this.isbool = false;
                }
            }
        },
    }
}